# Back-end Rulebook

How the server treats the people using it. Setup is in [MODULES.md](MODULES.md), the structure in [SERVER.md](SERVER.md), the records in [DATA.md](DATA.md).

---

## Contents

1. [Accessibility](#1-accessibility)
2. [Which Repository Holds What](#2-which-repository-holds-what)

---

## 1. Accessibility

The front end can only be as accessible as what the server sends it. The front-end half of these rules, `ariaName` included, is in [FRONT-END.md, Accessibility](../front-end/FRONT-END.md#accessibility).

- **Answers are sentences, not codes.** Every error the server returns carries a plain sentence the `<Form>` can show as it is ("That code has expired. We've sent you a new one."), next to the status code. The front end shows it on the page, and a screen reader reads it out.
- **Time limits are generous.** Verification and reset codes stay valid for 24 hours, as they do in `REVIEW/landing.js`. A new code can be asked for without starting over. Nothing the server checks expires while someone is still typing.
- **Codes are easy to read and type.** Digits only, six of them, matching the six `{block}`s. No lookalike characters, no upper and lower case.
- **Every email has a plain-text twin.** nodemailer sends `text` and `html` together, as `landing.js` already does. The code is written as text, never as an image, and every link says where it goes.
- **No visual-only checks.** No image CAPTCHAs or picture puzzles. The routes are protected by rate limits instead.
- **Display preferences follow the account.** When shade, clarity or reduced motion are stored, each is one flat field on the account, `null` until chosen ([DATA.md, The Rules](DATA.md#the-rules)).
- **Nobody is asked about a disability.** The server never asks for or stores health or disability information. Preferences describe how the page looks, not who the person is.

**Why the back end has rules for this at all.** A screen reader can only read out what reaches the page, and a person can only type a code they can read in time. The front end names every control and shows every message; the server makes sure there's a clear message to show, enough time to act on it, and nothing that only eyes can pass. Splitting it this way keeps each side's rules where its code lives, the same as [DATA.md](DATA.md#1-how-data-reaches-a-table) splits the data route.

---

## 2. Which Repository Holds What

This folder, `documents/back-end/`, is tracked only by backend-architecture_2.00, which is private. It's the study library: it may explain how every secret, key and pipeline works, because only the owner reads it. Nothing here may be copied into a front-end or shared document.

**The test is the same on both sides** ([FRONT-END.md, Which Repository Holds What](../front-end/FRONT-END.md#which-repository-holds-what)):

- How `source/layouts/` is written, looks or behaves → front end (`documents/front-end/`, public).
- How data moves, is stored or is kept safe, or how the owner's machines and tools work → back end (here).
- A rule both sides obey or test against → shared (`documents/`, tracked by both): GUIDELINES.md, CHARACTERS.md and the root `README.md`.

When a page could go either way, follow the reader, not the code: CONTEXTS.md is front end because it explains the `<Form>`s, although the contexts are the back end's code; DATA.md is back end because it explains how data travels, although `<Table>` shows it.

### This Folder

| Document     | Why it's here                                                       |
| ------------ | ------------------------------------------------------------------- |
| BACK-END.md  | How the server treats people (this page)                            |
| DATA.md      | How data travels and is stored                                      |
| MODULES.md   | Setting up databases and secrets on a machine                       |
| SERVER.md    | How `source/modules/` is organised and where it's headed            |
| GITHUB.md    | The owner's machines, keys and release cycle across both repositories |
| EDITOR.md    | The owner's editor setup                                            |
| REFERENCE.md | The owner's template for `README.md`                                |

### Twins

Some front-end documents get a back-end twin with the same name. The front-end page covers what the user sees, and the twin covers what that part asks of the server. Both are written side by side, so when the two repositories are merged the pair reads as one story.

| Front end (`documents/front-end/`) | Back end (`documents/back-end/`)                                       |
| ---------------------------------- | ---------------------------------------------------------------------- |
| COMPONENTS.md: the shared structure | COMPONENTS.md: what each component sends and receives (to be written) |
| CONTAINERS.md: how blocks pair and flip | CONTAINERS.md: what each block asks of the server (to be written, from backend-architecture_2.00's LAYOUTS.md) |

### Arriving From backend-architecture_2.00

When the two repositories become one folder, the backend's own documents land in this folder too:

| Its document | Becomes                                                                                                |
| ------------ | ------------------------------------------------------------------------------------------------------ |
| LAYOUTS.md   | CONTAINERS.md (the twin above)                                                                         |
| MODULES.md   | Merged with this folder's MODULES.md into one                                                          |
| SERVER.md    | Merged with this folder's SERVER.md into one                                                           |
| README.md    | BACK-END.md takes its back-end content, without the account email addresses; the root `README.md` is shared |
| CLAUDE.md    | `source/modules/CLAUDE.md`                                                                             |
| PORTFOLIO.md | Retired: a 2026-11-12 note between two sessions. Anything still open moves into SERVER.md              |

