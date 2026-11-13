# Server

How the back end in `source/modules/` is organised, how the front end shares what a user types, and where the server code is headed. Setting it up on your machine is in [MODULES.md](MODULES.md); how the records are shaped is in [TABLE.md](../front-end/TABLE.md).

---

## Contents

1. [What Lives Where](#1-what-lives-where)
2. [How a Form Reaches the Server Today](#2-how-a-form-reaches-the-server-today)
3. [Where It's Headed](#3-where-its-headed)
4. [Entry-Point Communication](#4-entry-point-communication)

---

## 1. What Lives Where

| Folder                           | Holds                                                                                                  | State                  |
| -------------------------------- | ------------------------------------------------------------------------------------------------------ | ---------------------- |
| `modules/context/`               | `EmailContext.tsx`, `PasswordContext.tsx`: what the `<Form>`s share while a user types                 | Working                |
| `modules/routes/`                | One file per application: `trackDay.ts`, `logTicket.ts`, `findLink.ts`                                 | Empty, reserved        |
| `modules/scripts/`               | Where the front end meets the back end. One file per block: `Header.ts`, `Main.ts`, `Footer.ts`, `Leftbar.ts`, `Overlay.ts`, `Rightbar.ts`. Plus `Apps.ts` (encryption) and `Demo.ts` (testing) | Empty, reserved        |
| `modules/server/MongoDB/testing/` | The data layer against a local baseline, `TraLogFin.json`: `TrackTime.ts` works, the others are stubs | Partly working         |
| `modules/server/MongoDB/online/`  | The same four modules (`PickPage`, `TrackTime`, `DefineDuties`, `ArchiveAnchors`) against the server  | Stubs                  |
| `modules/server/MongoDB/offline/` | The same four modules against the device's offline cache                                              | Stubs                  |
| `modules/server/MongoDB/REVIEW/`  | The old, working login server: `landing.js` (Express), `data.js` (the MongoDB connection)             | Old code, kept as-is   |

The four module names follow the applications: **PickPage** is Pick a Page (the Landing page), **TrackTime** is Track a Day, **DefineDuties** is Log a Ticket and **ArchiveAnchors** is Find a Link.

---

## 2. How a Form Reaches the Server Today

```
<Form>  →  axios.post(`${REACT_APP_BASE_URL}/users/${route}`)  →  REVIEW/landing.js (Express, port 3000)  →  MongoDB
```

- **The routes:** `POST /users/register`, `/users/login`, `/users/password`, `/users/verify`, `/users/reset`, `/users/blocked`, and `GET /users`.
- **The address** comes from `REACT_APP_BASE_URL` in `build/.env`, falling back to `http://localhost:3000`.
- **Accounts** move between three collections, `pending`, `enabled` and `blocked`. That breaks rule 9 in [TABLE.md](DATA.md#the-rules) and is parked to become a `status` field.
- **Emails** (verification and reset codes) go through nodemailer, with Mailtrap for testing ([MODULES.md, Section 4](MODULES.md#4-test-emails-with-mailtrap)).
- **The password field** was called `passwordHash`. It carries the plain password; the server hashes it with `bcrypt`. A name that says "hash" makes the value look safe already, so someone could log it, store it or send it over plain HTTP thinking nothing can be read from it. It's renamed so the name says what the value really is.

The `<Form>`s are visual-only for now: their old submit handlers, which called `axios` themselves, are commented out under each component (see [RULEBOOK, Component Anatomy](../front-end/RULEBOOK.md#4-component-anatomy)). Calling `axios` from a component breaks the rule in [TABLE.md, Section 5](DATA.md#1-how-data-reaches-a-table) that components never talk to the server directly, so the handlers come back through the data layer below, not as they were.

---

## 3. Where It's Headed

The shape is already decided in [TABLE.md, Section 5](DATA.md#1-how-data-reaches-a-table); the folders above are its scaffolding:

1. **Components only call the data layer.** A `<Form>` asks `PickPage` to register or log in, and gets an answer back. It never builds a URL or calls `axios`.
2. **One module per application, four functions each:** `createEntry`, `readEntry`, `updateEntry`, `deleteEntry`. The module decides whether to use `online/` or `offline/`, so components never know which.
3. **`testing/` stays the playground.** It runs against `TraLogFin.json` and the characters in [CHARACTERS.md](../CHARACTERS.md), so the rules can be tested without a database.
4. **The login server is rewritten from `REVIEW/landing.js`** into `routes/` and `server/MongoDB/online/`, one step at a time, with the `REVIEW/` folder kept until the new one works. The known fixes travel with it: the `status` field and the `password` name. The `.env` path is already fixed in `landing.js`; the new files build it from their own folder the same way ([MODULES.md, Section 5](MODULES.md#5-run-the-server)).

Nothing in this section is built yet. Each step starts with a conversation (see [RULEBOOK, Parked for Later](../front-end/RULEBOOK.md#10-parked-for-later)).

---

## 4. Entry-Point Communication

The front end and the back end meet in `modules/scripts/`, and nowhere else.

| File                                                                           | Job                                                                                                        |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| `Header.ts`, `Main.ts`, `Footer.ts`, `Leftbar.ts`, `Overlay.ts`, `Rightbar.ts` | One per block. Everything a block sends or receives passes through its file                                |
| `Apps.ts`                                                                      | Encryption, on top of HTTPS and the server's `bcrypt`, never instead of them                               |
| `Demo.ts`                                                                      | Testing: plays the characters in [CHARACTERS.md](../CHARACTERS.md) through the six block files against `testing/` |

**The route.** A component calls its block file, and the block file calls the application's data layer (`PickPage`, `TrackTime`, `DefineDuties`, `ArchiveAnchors`) with `createEntry`, `readEntry`, `updateEntry` or `deleteEntry`. A block file never builds a URL or calls `axios` itself ([TABLE.md, Section 5](DATA.md#1-how-data-reaches-a-table)).

```
<Component>.tsx  →  scripts/Header.ts  →  TrackTime.createEntry()  →  online/ or offline/  →  Server
```

**The clones.** Each block-level container has a `*.jsx` clone controlled by the back end, in the same folder as its `*.tsx`: the page root (`Overtime/Overtime.jsx`) and its six blocks (`Overtime/Header/OvertimeHeader.jsx`), 35 in all. Nothing in `elements/` or `components/` is cloned. This repository may not have access to them, so Git ignores them (`source/layouts/containers/**/*.jsx` in `.gitignore`). They never reach the app: Webpack resolves only `.tsx`, `.ts` and `.js`, and TypeScript skips a `.jsx` when a `.tsx` of the same name sits beside it.

**Proving a clone is at fault.** Each block file logs what it sends and what comes back, in the console format from [RULEBOOK, Console Messages](../front-end/RULEBOOK.md#console-messages):

```ts
console.log(`|--🠊 Warning: ${labelName} sent the right entry, Header.ts received the wrong answer 🠈--|`);
```

If what left the block file is correct and what came back is wrong, the `.jsx` side is at fault, and a change there may be authorised. If what left is already wrong, the fault is in this repository.

**What `Apps.ts` can't do.** The password stays in memory, is sent once over HTTPS and is hashed only on the server ([Section 2](../front-end/CONTEXTS.md)). A key in the browser can be read by the browser, so `Apps.ts` never holds the only copy of a secret.

Still to decide: who may read the `.jsx` clones, and whether `Apps.ts` encrypts the offline cache, the block traffic, or both.
