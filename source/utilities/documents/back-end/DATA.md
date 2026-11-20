# Data

How data travels from a `<Table>` to the database and back, how that database is written so it can move from MongoDB to MySQL, and how data survives offline. The rules for *who* may see or change data live in [GUIDELINES.md](../GUIDELINES.md); this page covers *how* the data travels. How a `<table>` shows it is in [TABLE.md](../front-end/TABLE.md).

---

## Contents

1. [How Data Reaches a Table](#1-how-data-reaches-a-table)
2. [MongoDB Today, MySQL Tomorrow](#2-mongodb-today-mysql-tomorrow)
3. [Offline Storage (IndexedDB)](#3-offline-storage-indexeddb)

---

## 1. How Data Reaches a Table

Data always travels the same route, in both directions. Every layer only talks to its neighbours:

```
<Table>  ⇄  Data layer  ⇄  Server (Express)  ⇄  Database (MongoDB, later MySQL)
               ⇅
        IndexedDB (offline)
```

| Layer          | Job                                                                                             | Lives in                                   |
| -------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **`<Table>`**  | Shows rows, reports clicks                                                                      | `source/layouts/components/Table/`         |
| **Data layer** | One module per application with the same four functions: `createEntry`, `readEntry`, `updateEntry`, `deleteEntry`. Chooses between the server and the offline cache | `source/modules/server/MongoDB/testing/` today (see `TrackTime.ts`) |
| **Server**     | Checks permissions and the [GUIDELINES](../GUIDELINES.md) rules, then talks to the database        | `source/modules/server/MongoDB/REVIEW/`    |
| **Database**   | Stores the records                                                                              | MongoDB                                    |

Components never talk to the database or the server directly. That one rule is what makes switching databases, or going offline, possible without touching a single component.

---

## 2. MongoDB Today, MySQL Tomorrow

TraLogFin runs on MongoDB. But a company with its own server may want MySQL, so the data is written in a way that converts cleanly. We use MongoDB for its strengths and deliberately limit ourselves to what a MySQL table can also do.

### The Rules

1. **One collection is one future table.** `PickPage`, `TrackTime`, `DefineDuties` and `ArchiveAnchors` each become one table, with the same name. A collection that holds several kinds (told apart by `kind`) is still one table; a kind's unused fields are `null`. See `source/assets/md-files/tralogfin-database.md`.
2. **Flat documents.** Every field holds a single value: text, number, true/false, date or `null`. No objects inside objects.
3. **Lists hold simple values only,** like `"organizations": ["Voidspire Systems", "Silverveil Logistics"]`. In MySQL each list becomes its own linking table (for example `memberships`). Never a list of objects.
4. **Point, don't nest.** A record refers to another record by its `_id` (`"senderId": "6ae06f3e898694d607cf1577"`, Dale Sutton), never by its `profile` slug and never by containing a copy of it.
5. **Every document has every field.** If a value is unknown, it's `null`, not missing. That's a fixed schema, which is exactly what a MySQL table needs. The "Randomize Character" record in `TraLogFin.json` shows the complete set of fields.
6. **IDs are text.** Every `_id` is a 24-character hex string shaped like MongoDB's (`"6ae068b8898694d607cf1574"`), but stored as plain text, never as an `ObjectId`, which MySQL doesn't have. Test characters also carry a readable `profile` slug (`"jane-lester"`) for lookups by hand and for the front-end's `characterProfile`.
7. **Dates are UTC.** Stored as real dates in MongoDB, written as ISO 8601 text (`2026-10-27`, `2026-10-27T14:30:00Z`) in JSON and in transit. Local time is only for display.
8. **Money is a whole number of cents.** `125000` means 1,250.00. Decimals drift; whole numbers don't. This matters for freelancer invoices.
9. **Status is a field, not a place.** A record's state (`"status": "Enabled"`) is stored on the record. Records never move between collections to change state.
10. **Simple queries only.** Find by field, sort, limit, insert, update and delete. Each of those maps directly onto MySQL's `SELECT … WHERE … ORDER BY … LIMIT`, `INSERT`, `UPDATE` and `DELETE`. MongoDB-only tools (aggregation pipelines, `$lookup`, editing objects nested inside arrays) stay out of the core logic.
11. **Names are camelCase,** both in the database and in the code, so a field keeps the same name everywhere.

### Example: One Character, Both Databases

```json
{
  "_id": "6ae06cb4898694d607cf1576",
  "profile": "dimitri-lewis",
  "name": "Dimitri Lewis",
  "vocation": "Freelancing",
  "organizations": ["Voidspire Systems", "Silverveil Logistics"],
  "paid": false,
  "status": "Enabled"
}
```

```
PickPage                                         memberships
_id        profile        name           vocation     …     characterId  organization
6ae06cb4…  dimitri-lewis  Dimitri Lewis  Freelancing  …     6ae06cb4…    Voidspire Systems
                                                                6ae06cb4…    Silverveil Logistics
```

> **Known exception:** the login code in `REVIEW/landing.js` still moves accounts between `pending`, `enabled` and `blocked` collections, which breaks rule 9. It will be brought in line when the login page is reworked.

---

## 3. Offline Storage (IndexedDB)

[IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) is a database built into every modern browser. It keeps data on the user's own device, with no server and no install. The rules for what's allowed offline are in [GUIDELINES.md, Section 12](../GUIDELINES.md#12-offline-mode); this section is how it works.

### Two Uses

| Who                     | What IndexedDB is                                                    | Holds                                                   |
| ----------------------- | -------------------------------------------------------------------- | ------------------------------------------------------- |
| **No account**          | The database itself. Nothing ever leaves the device                  | Personal time tracking and personal bookmarks           |
| **Account, offline**    | A read-only copy of company data, plus an outbox                      | Cached company data, and offline clock-ins waiting to sync |

### How It's Stored

- **Same shape as the server.** IndexedDB uses the same collection names and the same flat documents as MongoDB (Section 6), so syncing is a straight copy, not a translation.
- **Every entry made on the device** gets a `clientId` (a UUID created in the browser) and a `synced` flag that stays `false` until the server has accepted it. `TrackTime.ts` already works this way.
- **Every offline entry** also records the device's ID and the label `offline`, so the server can run its checks.
- **Never stored offline:** passwords, password hashes, login codes or anything else from the login system.

### Keeping the Data

When the app first saves data, it asks the browser to keep it permanently (`navigator.storage.persist()`):

| Browser                | Keeps the data?                                                                               |
| ---------------------- | --------------------------------------------------------------------------------------------- |
| Chrome, Edge, Firefox  | Yes, until the user clears it                                                                  |
| Safari (iPhone, iPad, Mac) | Can delete it after 7 days without a visit, unless TraLogFin is added to the Home Screen or Dock |

Cached company data is kept for **up to one year**. After that, the device has to reconnect before company data can be shown again. Cached company data is also deleted when the user logs out, so a shared computer never shows the next person someone else's company.

### Syncing When the Device Reconnects

Always in this order:

1. **Upload the outbox.** Every unsynced entry goes to the server, which runs the checks from [GUIDELINES.md, Section 12](../GUIDELINES.md#checks-when-the-device-reconnects). Accepted entries are marked `synced: true`; rejected ones are removed from the device.
2. **Download fresh company data.** The server's copy replaces the cached copy completely. The server always wins.
3. **Release the device.** The server clears its record of the offline device, so another device may switch to offline mode.

For someone without an account who signs up, step 1 uploads all of their personal data into the new account. Nothing else changes.
