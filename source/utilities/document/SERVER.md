# Server

How the back end in `source/modules/` is organised, how the front end shares what a user types, and where the server code is headed. Setting it up on your machine is in [MODULES.md](MODULES.md); how the records are shaped is in [TABLE.md](TABLE.md).

---

## Contents

1. [What Lives Where](#1-what-lives-where)
2. [Shared State: Contexts](#2-shared-state-contexts)
3. [How a Form Reaches the Server Today](#3-how-a-form-reaches-the-server-today)
4. [Where It's Headed](#4-where-its-headed)

---

## 1. What Lives Where

| Folder                           | Holds                                                                                                  | State                  |
| -------------------------------- | ------------------------------------------------------------------------------------------------------ | ---------------------- |
| `modules/context/`               | `EmailContext.tsx`, `PasswordContext.tsx`: what the `<Form>`s share while a user types                 | Working                |
| `modules/routes/`                | One file per application: `trackDay.ts`, `logTicket.ts`, `findLink.ts`                                 | Empty, reserved        |
| `modules/scripts/`               | One file per block: `Header.ts`, `Main.ts`, `Footer.ts`, `Leftbar.ts`, `Overlay.ts`, `Rightbar.ts`     | Stubs                  |
| `modules/server/MongoDB/testing/` | The data layer against a local baseline, `TraLogFin.json`: `TrackTime.ts` works, the others are stubs | Partly working         |
| `modules/server/MongoDB/online/`  | The same four modules (`PickPage`, `TrackTime`, `DefineDuties`, `ArchiveAnchors`) against the server  | Stubs                  |
| `modules/server/MongoDB/offline/` | The same four modules against the device's offline cache                                              | Stubs                  |
| `modules/server/MongoDB/REVIEW/`  | The old, working login server: `landing.js` (Express), `data.js` (the MongoDB connection)             | Old code, kept as-is   |

The four module names follow the applications: **PickPage** is the Landing page, **TrackTime** is Track a Day, **DefineDuties** is Log a Ticket and **ArchiveAnchors** is Find a Link.

---

## 2. Shared State: Contexts

A **context** is a value that many components can read without passing it down as a prop through every layer in between. Each context comes in three parts:

| Part         | In `EmailContext.tsx` | What it does                                                                   |
| ------------ | --------------------- | ------------------------------------------------------------------------------ |
| The context  | `EmailContext`        | The shared box itself, created empty                                           |
| The provider | `<EmailProvider>`     | A component that owns the value (`useState`) and puts it in the box            |
| The hook     | `useEmail()`          | How a component reads and changes it: `let { email, setEmail } = useEmail();` |

**Only components inside a provider can use its hook.** Outside one, `useEmail()` throws `useEmail must be used within an EmailProvider` on purpose, so a missing provider fails loudly instead of quietly losing what the user typed.

**Where the providers sit.** `loadPage()` in `source/index.tsx` wraps every page in both:

```tsx
ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <EmailProvider>
      <PasswordProvider>{container}</PasswordProvider>
    </EmailProvider>
  </React.StrictMode>,
);
```

**Every page has its own copy.** `index.tsx` creates one React root per `#${pageName}-body`, and a provider can't reach across roots. So the `<Form>`s on one page share one email and one password (type your email in Register and Verify already knows it), but Landing and the Archive never see each other's. That's how the finished app behaves: a user logs in on one page.

**Keep the password in memory only.** It lives in the context while the user types and is sent to the server once. Never write it to `localStorage`, a cookie, the console or a log, and only ever send it over HTTPS outside your own machine. The server is the only place that hashes it.

---

## 3. How a Form Reaches the Server Today

```
<Form>  →  axios.post(`${REACT_APP_BASE_URL}/users/${route}`)  →  REVIEW/landing.js (Express, port 3000)  →  MongoDB
```

- **The routes:** `POST /users/register`, `/users/login`, `/users/password`, `/users/verify`, `/users/reset`, `/users/blocked`, and `GET /users`.
- **The address** comes from `REACT_APP_BASE_URL` in `build/.env`, falling back to `http://localhost:3000`.
- **Accounts** move between three collections, `pending`, `enabled` and `blocked`. That breaks rule 9 in [TABLE.md](TABLE.md#the-rules) and is parked to become a `status` field.
- **Emails** (verification and reset codes) go through nodemailer, with Mailtrap for testing ([MODULES.md, Section 4](MODULES.md#4-test-emails-with-mailtrap)).
- **The password field** was called `passwordHash`. It carries the plain password; the server hashes it with `bcrypt`. A name that says "hash" makes the value look safe already, so someone could log it, store it or send it over plain HTTP thinking nothing can be read from it. It's renamed so the name says what the value really is.

The `<Form>`s are visual-only for now: their old submit handlers, which called `axios` themselves, are commented out under each component (see [RULEBOOK, Component Anatomy](RULEBOOK.md#4-component-anatomy)). Calling `axios` from a component breaks the rule in [TABLE.md, Section 5](TABLE.md#5-how-data-reaches-a-table) that components never talk to the server directly, so the handlers come back through the data layer below, not as they were.

---

## 4. Where It's Headed

The shape is already decided in [TABLE.md, Section 5](TABLE.md#5-how-data-reaches-a-table); the folders above are its scaffolding:

1. **Components only call the data layer.** A `<Form>` asks `PickPage` to register or log in, and gets an answer back. It never builds a URL or calls `axios`.
2. **One module per application, four functions each:** `createEntry`, `readEntry`, `updateEntry`, `deleteEntry`. The module decides whether to use `online/` or `offline/`, so components never know which.
3. **`testing/` stays the playground.** It runs against `TraLogFin.json` and the characters in [CHARACTERS.md](CHARACTERS.md), so the rules can be tested without a database.
4. **The login server is rewritten from `REVIEW/landing.js`** into `routes/` and `server/MongoDB/online/`, one step at a time, with the `REVIEW/` folder kept until the new one works. The known fixes travel with it: the `.env` path ([MODULES.md, Section 5](MODULES.md#5-run-the-server)), the `status` field and the `password` name.

Nothing in this section is built yet. Each step starts with a conversation (see [RULEBOOK, Parked for Later](RULEBOOK.md#10-parked-for-later)).
