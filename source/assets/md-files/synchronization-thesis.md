# Synchronization Thesis

How Track a Day, Log a Ticket, Find a Link and Pick a Page interact. This is a draft: it lives in `source/assets/md-files/` until the edge cases are worked out, then it moves to `source/utilities/document/`.

| Application   | File                 | Collection       | Original (read-only)                          |
| ------------- | -------------------- | ---------------- | --------------------------------------------- |
| `[archive]`   | `get-a-tag.md`       | —                | —                                             |
| `[overtime]`  | `track-a-day.md`     | `TrackTime`      | This project                                  |
| `[ticketing]` | `log-a-ticket.md`    | `DefineDuties`   | `source/utilities/vendors/log-a-ticket/`       |
| `[hyperlink]` | `find-a-link.md`     | `ArchiveAnchors` | `source/utilities/vendors/university-tracker/` |
| `[landing]`   | —                    | `PickPage`       | —                                             |

## Pinned: `<main>` Fullscreen Labels

Every application's `<main>` mirrors `[archive]` with the axes flipped: an outer `[x]` fullscreen named `elements` holding three `[y]` pages, left, centre and right. `startingPreview()` in `Main/${PageName}Functions.ts` toggles them, and each app opens on its centre page, which takes the app's own word (the field it's named after in `TraLogFin.json`).

| Application   | Outer      | Left page       | Centre page       | Right page      | Opens with                               |
| ------------- | ---------- | --------------- | ----------------- | --------------- | ---------------------------------------- |
| `[overtime]`  | `elements` | `(established)` | `(vocation)`      | `(freelancing)` | `startingPreview('(vocation)', 1)`       |
| `[ticketing]` | `elements` | `(manager)`     | `(position)`      | `(employee)`    | `startingPreview('(position)', 1)`       |
| `[hyperlink]` | `elements` | `(specialist)`  | `(occupation)`    | `(technician)`  | `startingPreview('(occupation)', 1)`     |
| `[landing]`   | `elements` | `(register)`    | `(demonstration)` | `(password)`    | `startingPreview('(demonstration)', 1)`  |

- The centre page opens the `<header>` on desktop and the `<footer>` on mobile. A character pick sends `<main>` back to it.
- `[landing]` opens on `(demonstration)` while the user is logged out, and on `(application)` once they're logged in. It stays `(demonstration)` for now.
- `[overtime]` is built. `[ticketing]` and `[hyperlink]` copy it when their turn comes; `[landing]` waits.

## Pinned: IDs

Every record's `_id` is a 24-character hex string shaped like MongoDB's, stored as plain text (TABLE.md Section 6). Test characters in `TraLogFin.json` also carry a readable `profile` slug, which is what the front-end's `characterProfile` and the character images use. Records point at people by `_id` (`senderId`, `receiverId`, `byId`), never by name.

## Pinned: Message Types

Three kinds of message, set by the owner on 2026-11-09. Each app page uses one:

| Message | What it means | Pages |
| --- | --- | --- |
| (helper) | Just loads and informs; nothing to do. The usual case, with a 6-second load animation (later) | `(manager)`, `(established)` |
| (guidance) | Needs an action from the user | `(employee)`, `(freelancing)` |
| (warning) | The system encountered an error. In `[hyperlink]`, it appears when you double-click a link | `(specialist)`, `(technician)` |

## How the Applications Interact

**`[overtime]` holds the key.** The company a member is clocked into is the company `[ticketing]` and `[hyperlink]` work in. Nothing else switches company context.

| Event | `[overtime]` | `[ticketing]` | `[hyperlink]` |
| --- | --- | --- | --- |
| Clock in to a company | Clock starts | That company's pool and tickets open up | That company's published links open up; Managers can propose, HoDs can publish |
| Clock out | Entry closes | Read-only; no actions | Company links close at once; bookmarks stay; waiting proposals keep waiting and can still be withdrawn (H5) |
| Member removed | Clock-in cut off; pending overtime → ghost hours; pending leave → rejected | Assigned tickets released to the pool; resolved tickets and points archived | Access ends; waiting proposals withdrawn (H6); published links stay with their name; bookmarks stay |
| Worker deletes their account | As removal, in every company | As removal, in every company | Bookmarks deleted with the account |
| Company deleted | Every clock-in cut off | Every ticket archived as it stands | Every link and proposal archived as it stands |
| Promoted to Manager | Can't approve anything yet (needs HoD) | Can assign, reassign, delete and restore | Can propose link changes for the owner to approve |
| Made HoD | Can approve Established Employees | No change | Can publish link changes directly; proposals already waiting still wait for the owner (H4) |
| Demoted | Pending approvals move to the other HoDs and the owner | Loses assign; their past assignments stay | Loses editing immediately; their published links stay; a waiting proposal keeps waiting for the owner and can still be withdrawn (H4) |
| Offline | Clock-ins recorded, labelled offline | Read-only | Read-only company links; bookmarks editable, nothing lost on sync (H10) |
| Owner | Overtime auto-approved; never needs to clock in | Never needs to clock in | Never needs to clock in; the only one who approves proposals; their removals stick (H13) |

**The owner is everywhere at once.** They have no clock-in to switch, so their company context is the company they own.

## Good and Ghost

Every application keeps two counts: the good one, grounded and accurate, and the ghost one, for things that went wrong. When a count could go either way, it leans towards the worker. The two are shown side by side and never combined, and no app's counts are ever added to another's (R7, O5).

| Application | Good | Ghost | Who sees the ghost count |
| --- | --- | --- | --- |
| `[overtime]` | Approved hours | Ghost hours: rejected or expired overtime | The worker, the reviewer and the owner |
| `[ticketing]` | Points: confirmed completions (+1), the sender's 0.75, 0.25 for informing, 0.125 for a timely confirm | Ghost points: 0.125 per unconfirmed ticket, 0.25 per deletion of someone else's ticket (0.5 to archive it), 0.25 for overruling an Employee's deletion, 0.125 lost profit per lapse | Everyone in the company, except a freelancer's own (only them and the owner) |
| `[hyperlink]` | Good clicks: company links | Ghost links: your own bookmark clicks this year (a parody) | Only you |

## Edge Cases

Every edge case raised so far has a draft restriction rule. None is in GUIDELINES.md yet; each waits for the owner to confirm it.

| Question | Draft answer | Rule |
| --- | --- | --- |
| Do points and hours meet? | Side by side, never combined | `log-a-ticket.md` R7, `track-a-day.md` O5 |
| Does releasing a ticket need clock-in? | No, but it needs to be online | `log-a-ticket.md` R6 |
| A worker clocks out holding a ticket | It stays theirs; Managers see the mark and decide | `log-a-ticket.md` R4 |
| A one-person company | The owner may claim their own tickets, for no point | `log-a-ticket.md` R5 |
| Delete/restore tug-of-war | Whoever deletes, decides | `log-a-ticket.md` R1 |
| Taking a point back | The first confirmed completion is final; only `restore` costs a point | `log-a-ticket.md` R2 |
| How points are calculated | Log +0.125 ghost; confirmed completion +1 to the fixer, +0.75 to the sender; restore −1 | `log-a-ticket.md` Points |
| An HoD never confirms a completion | It confirms itself after 7 days | `log-a-ticket.md` R8 |
| Points below zero | Never; the rest becomes ghost points | `log-a-ticket.md` R9 |
| Restoring a ticket | Free within 30 days of the deletion, −1 after | `log-a-ticket.md` R10 |
| Overloading one worker | Capped at 8 open; at the cap, each overdue ticket a Manager assigned costs them 0.125 ghost points | `log-a-ticket.md` R11, R12 |
| Waiting out the HoDs | The ticket confirms itself, but the owner gets 0.125 ghost points (lost profit); a timely confirm earns the HoD 0.125 points | `log-a-ticket.md` R8 |
| Deleting, restoring and deleting again | The second deletion archives it; informing pays once | `log-a-ticket.md` R13 |
| Hoarding tickets | No claiming past 8 open tickets | `log-a-ticket.md` R14 |
| Overloading by assignment | 1 a day, 4 per Manager, 8 in total | `log-a-ticket.md` R17 |
| Burying a ticket by deleting it twice | Archived: 0.25 then 0.5 ghost points to the deleter | `log-a-ticket.md` R13 |
| Deleting someone else's ticket | One to one: 0.25 points to the sender, 0.25 ghost points to the deleter | `log-a-ticket.md` R13 |
| Farming deletions with junk tickets | Informing pays at most 0.25 a day; four days of junk never beats one real fix | `log-a-ticket.md` R19 |
| Who carries the weight | Managers in full, Employees in part | `log-a-ticket.md` R20 |
| A freelancer in two companies | 2 tickets a week per company, 8 open in total; the owner and Managers see "unavailable" | `log-a-ticket.md` R21 |
| Who sees a freelancer's numbers | The freelancer and the owner: the highest of the high and the lowest of the low | `log-a-ticket.md` R22 |
| Paying to see stats | Never; Paid isn't a worker permission | `log-a-ticket.md` R22, GUIDELINES Section 2 |
| Keeping freelancers coming back | A weekly streak: 0.125, doubling to 0.5 at most | `log-a-ticket.md` R26 |
| Deleting work someone's doing | 0.125 to a receiver who held it 24 hours; 0.375 ghost to the deleter | `log-a-ticket.md` R25 |
| A sender's misclick | An undone deletion of your own doesn't count toward archiving | `log-a-ticket.md` R13 |
| Three friends pushing tickets through | A quiet word from the owner after 5 times in 30 days | `log-a-ticket.md` R27 |
| A bad Manager | The owner carries 25% of their ghost points, as it happens; turnover shows on the owner's profile | `log-a-ticket.md` R28 |
| Odd decimals | Every number is a multiple of 0.125, stored in eighths | `log-a-ticket.md` Points |
| How long ghost points count | 24 months, exactly like ghost hours | `log-a-ticket.md` Ghost Hours |
| Checkpoint messages when points drop | None; only good news shows | `log-a-ticket.md` Points |
| Removing workers | Counts as turnover on the owner's profile | `log-a-ticket.md` R28 |
| Is a sector of 18 balanced? | Yes: 6 units of one Manager and two Employees; confirming is the bottleneck, one HoD per 4 Employees | `log-a-ticket.md` Predicted Balance |
| A role changes after an action | The role at the moment of the action sets the price | `log-a-ticket.md` R23 |
| Confirming your own ticket | Needs a third person | `log-a-ticket.md` R24 |
| A deleted ticket someone was working on | The receiver's name stays in the history | `log-a-ticket.md` R25 |
| Flooding the pool with tickets | 4 logs a day; deleting your own still counts | `log-a-ticket.md` R18 |
| Tickets ageing during leave | Approved leave pauses the overdue clock | `log-a-ticket.md` R15, with `track-a-day.md` |
| Releasing or reassigning overdue tickets | Release clears the count; reassign restarts 7 days | `log-a-ticket.md` R16 |
| Endless reopens | Two for the sender, then Managers only | `log-a-ticket.md` R3 |
| Unanswered leave | Approved automatically with 14 days' notice, otherwise it lapses | `track-a-day.md` O1 |
| Withdrawing a request | Allowed until it's decided | `track-a-day.md` O2 |
| Reversing a decision | Only rejection → approval, once | `track-a-day.md` O3 |
| Length of the ordinary workday | Contract hours, agreed per membership | `track-a-day.md` O4 |
| Nobody answers a link proposal | It waits; never expires, never auto-approved | `find-a-link.md` H1 |
| The owner wants to tweak a proposal | Approve as written, or decline with a note | `find-a-link.md` H2 |
| A proposal's link changed meanwhile | The proposal closes as Outdated, not Declined | `find-a-link.md` H3 |
| A non-HoD Manager is demoted (or made HoD) while a proposal waits | It keeps waiting for the owner; they can still withdraw it | `find-a-link.md` H4 |
| Does withdrawing a proposal need clock-in? | No, but it needs to be online | `find-a-link.md` H5, like `log-a-ticket.md` R6 |
| The proposer is removed from the company | Waiting proposals withdrawn, not declined; published links stay | `find-a-link.md` H6 |
| A removed member kept a company link | It's only an address; the destination checks access | `find-a-link.md` H7 |
| `javascript:` or other non-web links | Refused; `https://` and `http://` only | `find-a-link.md` H8 |
| Editing a published link | A new version; the old one stays | `find-a-link.md` H9 |
| A bookmark changed on two devices | Both kept; an edit beats a delete | `find-a-link.md` H10 |
| Links that change by date | Not supported; fixed addresses only | `find-a-link.md` H11 |
| An HoD publishing a Manager's proposal as their own | HoDs can't see proposals | `find-a-link.md` H12 |
| HoDs re-adding a link the owner removed | Only the owner can | `find-a-link.md` H13, like `log-a-ticket.md` R1 |

## Open Conflicts

Found during the `[hyperlink]` scan. Each one waits for the owner.

1. **`[ticketing]`'s `history` is a list of objects.** TABLE.md Section 6, rule 3 says lists hold simple values only, never objects. `[hyperlink]` keeps its history as a chain of flat documents (`replacesId`) instead. One of the two should change so both apps record history the same way.
2. **Reversing a decision.** `[overtime]`'s O3 lets a rejection become an approval once. `[hyperlink]` has no such step: a declined proposal stays declined, and the proposer simply sends it again, which costs nobody anything.
3. **TABLE.md Section 6, rule 4** gives `"employeeId": "dale-sutton"` as its example, a profile slug. The pinned IDs rule above says records point at people by `_id`.
