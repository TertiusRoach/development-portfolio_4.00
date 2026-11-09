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

## Edge Cases

Every edge case raised so far has a draft restriction rule. None is in GUIDELINES.md yet; each waits for the owner to confirm it.

| Question | Draft answer | Rule |
| --- | --- | --- |
| Do points and hours meet? | Side by side, never combined | `log-a-ticket.md` R7, `track-a-day.md` O5 |
| Does releasing a ticket need clock-in? | No, but it needs to be online | `log-a-ticket.md` R6 |
| A worker clocks out holding a ticket | It stays theirs; Managers see the mark and decide | `log-a-ticket.md` R4 |
| A one-person company | The owner may claim their own tickets, for no point | `log-a-ticket.md` R5 |
| Delete/restore tug-of-war | Whoever deletes, decides | `log-a-ticket.md` R1 |
| Taking a point back | The first resolve is final for points | `log-a-ticket.md` R2 |
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
