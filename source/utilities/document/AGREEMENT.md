# The Agreement

How the front end and the back end share one folder structure in two languages. Both sides follow it, and neither side changes it alone.

---

## Contents

1. [Two Languages](#1-two-languages)
2. [Twins](#2-twins)
3. [Imports](#3-imports)
4. [Crossing Between Languages](#4-crossing-between-languages)
5. [One Folder Structure](#5-one-folder-structure)
6. [Changing the Structure](#6-changing-the-structure)
7. [Checking It](#7-checking-it)
8. [Not Yet in Line](#8-not-yet-in-line)

---

## 1. Two Languages

The front end is written in TypeScript and lives in `source/layouts/`. The back end is written in JavaScript and lives in `source/modules/`. Each language has one file type for what you see and one for what it does:

| Language   | What you see | What it does | Folder     | Who controls it |
| ---------- | ------------ | ------------ | ---------- | --------------- |
| TypeScript | `.tsx`       | `.ts`        | `layouts/` | The front end   |
| JavaScript | `.jsx`       | `.js`        | `modules/` | The back end    |

---

## 2. Twins

**Every `.tsx` has a `.jsx` twin, and every `.jsx` has a `.tsx` twin.** The twin has the same name and sits at the same path, with `modules/` in place of `layouts/`:

```
source/layouts/containers/Overtime/Header/OvertimeHeader.tsx
source/modules/containers/Overtime/Header/OvertimeHeader.jsx
```

- A `.tsx` without a twin is unfinished. A `.jsx` without a twin is an error.
- The `.jsx` starts as a copy of its `.tsx`, and its first line records which version it copied (see the back-end plan for the exact line).
- The back end may add to its `.jsx` but never edits the `.tsx`. The front end never edits the `.jsx`.

---

## 3. Imports

**A file only imports files in its own language.**

| File   | May import       | Never imports    |
| ------ | ---------------- | ---------------- |
| `.tsx` | `.tsx` and `.ts` | `.jsx` and `.js` |
| `.ts`  | `.ts`            | `.jsx` and `.js` |
| `.jsx` | `.jsx` and `.js` | `.tsx` and `.ts` |
| `.js`  | `.js`            | `.tsx` and `.ts` |

Packages from `node_modules` (React, jQuery and so on) are allowed on both sides.

---

## 4. Crossing Between Languages

The two languages meet at two levels, and **neither is an import**:

| Level        | Pair             | How they meet                                                                                                  |
| ------------ | ---------------- | -------------------------------------------------------------------------------------------------------------- |
| What you see | `.tsx` → `.jsx`  | **By copy.** The `.jsx` is cloned from its `.tsx`, one way only                                                 |
| What it does | `.ts` ↔ `.js`    | **By contract.** `layouts/scripts/Head_Foot.ts` and `modules/scripts/Head_Foot.js` agree on what is sent and what comes back. The data travels over the network |

Because nothing crosses by import, a broken back end can't break the front end, and the front end can't reach into the back end.

---

## 5. One Folder Structure

The front-end skeleton is settled. The back end takes the same structure, folder for folder, so the same thing lives in the same place in both languages.

```
source/
├── layouts/          TypeScript                  ├── modules/          JavaScript
│   ├── components/   .tsx + .ts                  │   ├── components/   .jsx + .js    twins of every component
│   ├── containers/   .tsx + .ts                  │   ├── containers/   .jsx + .js    twins of every container; routes live here, per app and per block
│   ├── scripts/      .ts                         │   ├── scripts/      .js           same file names: Head_Foot, Left_Right, Main_Over
│   ├── tools/        .ts                         │   ├── tools/        .js           helpers the back end uses a lot
│   └── styles/       front end only              │   └── server/       back end only MongoDB, MySQL, IndexedDB and the testing characters
```

- **Same names everywhere.** Each application uses its container name on both sides: `Archive`, `Landing`, `Overtime`, `Ticketing`, `Hyperlink`.
- **One folder each that the other side doesn't have.** `styles/` belongs to the front end; `server/` belongs to the back end.
- **The back end uses the front end's categories.** If a piece of back-end work belongs to a component or a container, it lives in that component's or container's twin folder, never in a new folder of its own.

---

## 6. Changing the Structure

- **The front-end skeleton is not expected to change.**
- **A structure change is made on both sides in the same step.** If a folder is added, renamed or removed in `layouts/`, its twin changes in `modules/` at the same time, and the other way round.
- **Both sides agree first.** The front end and the back end each have a say, and the change starts with a conversation with the owner.
- **This document changes in the same step.** If the code and this page disagree, the code is wrong until this page is updated.

---

## 7. Checking It

The rules are checked, not only written down. A gulp `guard` task (planned, not built yet) stops with an error when:

- a `.jsx` has no `.tsx` twin, or a `.tsx` has no `.jsx` twin;
- any file imports from the other language;
- a folder exists on one side and not the other (except `styles/` and `server/`).

It runs before every push and can't change or delete anything.

---

## 8. Not Yet in Line

Where `source/` still differs from this page, oldest first. Each one is fixed in its own step, with the owner's go:

| What                                    | Today                                                                                       | Agreed target                                                 |
| --------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| The `.jsx` clones                       | 35 container clones next to their `.tsx` in `layouts/containers/`, ignored by Git ([SERVER.md, Section 4](back-end/SERVER.md#4-entry-point-communication)) | 113 twins in `modules/components/` and `modules/containers/` |
| `modules/routes/`                       | `trackDay.ts`, `logTicket.ts`, `findLink.ts`                                                | Routes inside `modules/containers/<App>/`, named by container |
| `modules/scripts/`                      | `.ts`, one per block, plus `Apps.ts` and `Demo.ts`                                          | `.js` pairs matching `layouts/scripts/`                       |
| `modules/context/`                      | `EmailContext.tsx`, `PasswordContext.tsx`: TypeScript inside the JavaScript side            | **Open:** to be decided with the owner                        |
| `modules/server/`                       | `.ts` data-layer modules and `.js` servers mixed                                            | `.js` only                                                    |
| The data-layer names                    | `PickPage`, `TrackTime`, `DefineDuties`, `ArchiveAnchors`                                   | The container names                                           |
| The `guard` task                        | Not built                                                                                   | Section 7                                                     |
