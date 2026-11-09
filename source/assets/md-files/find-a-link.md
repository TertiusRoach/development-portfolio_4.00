# Find a Link

`[hyperlink]` · `ArchiveAnchors`. A draft until its edge cases are worked out; see `synchronization-thesis.md`. The permissions it follows come from [GUIDELINES.md](../../utilities/document/GUIDELINES.md), Sections 6, 7, 8, 10 and 12; this file is how the loop behaves inside them.

Built from a scan of the original University Tracker (2.00), kept read-only in `source/utilities/vendors/university-tracker/`. The original had no loop to keep: its links were hard-coded in the source, with no roles, approval or history. What it got wrong is listed at the bottom so it isn't copied.

## The Lure

`[overtime]` and `[ticketing]` are the ingredients; `[hyperlink]` is the lure (owner, 2026-11-09). It's the first thing a person or a company tries, because it asks for nothing: save your links, click your links, free and private, archived for good. A lure has to look harmless and trustworthy, so `[hyperlink]` stays the simplest app on purpose. University Tracker did the same in its own way, and it was an extremely successful project. When in doubt here, don't add a rule: keep it simple.

## `<main>` Pages

The outer fullscreen is `elements`, opening with `startingPreview('(occupation)', 1)`.

| Left page      | Centre page    | Right page     |
| -------------- | -------------- | -------------- |
| `(specialist)` | `(occupation)` | `(technician)` |

- **`(specialist)`:** personal bookmarks. Private to the user, no clock-in needed.
- **`(technician)`:** the published company links, for the company the user is clocked into. Without a membership or a clock-in it shows the explanation from GUIDELINES Section 7 instead.
- **`(occupation)`:** adding a bookmark or a company link, and the proposals list. The proposer sees their own proposals; the owner sees every waiting proposal in the company (H12). Occupation decides which side page the user goes to first and nothing else.

## Two Kinds of Link

| | Company link | Personal bookmark |
| --- | --- | --- |
| Belongs to | The company | The user |
| Seen by | Members clocked in; the owner always | The user only |
| Changed by | HoD (clocked in) and owner directly; non-HoD Manager by proposal | The user |
| Needs clock-in | Yes, except the owner and withdrawing (H5) | No |
| History | Every change is a new version (H9) | None; edited in place, deleted for real |
| On removal from the company | Stays with the company | Stays with the user |
| On account deletion | Stays, with a historical reference | Deleted with the account |
| Offline | Read-only from the cache | Editable (H10) |

Both live in `ArchiveAnchors`, told apart by `kind`.

## Purpose and Period

Brought back from the original on 2026-11-09, after a second scan of University Tracker (owner: "I didn't think this through"). The original was a router: for every studio, every month, it knew where to **book**, **upload**, **store** and **read**. A link was never just a link; it was *where today's work goes*.

- **`purpose`** says what a company link is for: `Book`, `Upload`, `Store`, `Read` or `Other`. The page groups by purpose, then by `category` (a studio, a room, a team: free text, granting nothing), then by title.
- **`validFrom` and `validUntil`** give a company link a period, as dates in the company's time zone. Both `null` means always. "November's booking sheet" is one link with a November period; December's is another, prepared ahead.
- **The page opens on today.** It shows the Published links whose period covers today, by the server's date (R29 in `[ticketing]`), never the device's.
- **An ended period fades, it isn't deleted.** A link whose `validUntil` has passed drops off today's page and stays in the archive view, the way the original hid finished bookings every time its sheet opened. Nothing changes on the record; "ended" is counted from the dates, never stored.
- **The URL never changes with the date** (H11). Only *which* links show does.
- **Bookmarks have a purpose too, if you like, but never a period.** They're yours; nothing about them expires.

## The Loop

Company links only. Every change (add, edit or remove) is its own document. A change either goes live at once or waits for the owner. When an edit or a removal takes effect, it replaces the version it was written against.

```
                    publish (HoD, owner) ─────────────────┐
                                                          ▼
propose (Manager) ──► Proposed ──── approve (owner) ──► Published ──── edit / remove ───► Replaced
                       │  │  │                                          (by a newer version)
          withdraw ◄───┘  │  └───► decline (owner) ──► Declined
              │           │
              ▼           └──── target replaced ──► Outdated
          Withdrawn

remove applied ──► the remove document itself is stored as Removed
```

| From | Action | To | Who | Note |
| --- | --- | --- | --- | --- |
| — | `publish` | Published | HoD (clocked in) or owner | — |
| — | `propose` | Proposed | Manager without HoD (clocked in) | — |
| Proposed | `withdraw` | Withdrawn | The proposer (H5) | Optional |
| Proposed | `approve` | Published / Removed | The owner only, as written (H2) | — |
| Proposed | `decline` | Declined | The owner only | Required |
| Proposed | (target replaced) | Outdated | Nobody; the system, recording who replaced the target (H3) | Automatic |
| Published | `edit` | Replaced | HoD or owner directly; a Manager proposes it | Creates a new version |
| Published | `remove` | Replaced | HoD or owner directly; a Manager proposes it | Creates a `remove` document, stored as Removed |

- **`change`** says what a document does: `add` (a new link), `edit` (a new version of a link) or `remove`. An `edit` or `remove` points at the version it was written against through `replacesId`.
- **Approving applies the change.** An approved `add` or `edit` becomes Published. An approved `remove` becomes Removed. Either way, the target becomes Replaced.
- **A removed link comes back as a new `add`,** through the same paths as any new link (H13 for the owner's removals).

Clock-in applies to every action, as GUIDELINES Section 8 says, with two exceptions: the owner never needs to clock in, and withdrawing a proposal doesn't need it (H5).

### Three Rules That Hold the Loop Together

1. **Published means live.** The company page is exactly the documents with `kind: "Company"`, `status: "Published"`, the clocked-in company, `archivedAt: null`, and a period that covers today (or none). One query, nothing else to check.
2. **A change applies to one version only.** It goes through while its target is still Published (`{ _id: replacesId, status: "Published" }`), and not after (H3).
3. **Nothing is overwritten, only added.** A company link's text never changes once it's stored. An edit is a new version, and the old one stays as Replaced (H9).

## Ghost Hours

`[hyperlink]` doesn't have ghost hours. It has **ghost links**: how many times you clicked your own bookmarks this year. Clicking the company links page is **good clicks**. Clicking your personal page is ghost links. Nobody gets in trouble for either, but somebody had to keep score.

Track a Day keeps ghost hours so nobody's overtime disappears. Log a Ticket keeps ghost points so nobody's ticket gets buried. Find a Link keeps a number. You clicked a link, and it went up by one. That's the whole audit.

| | Ghost hours `[overtime]` | Ghost points `[ticketing]` | Ghost links `[hyperlink]` |
| --- | --- | --- | --- |
| Records | Overtime someone refused to recognise | Tickets logged, restored and overruled | You clicked your own bookmark |
| Counts against | The worker and the reviewer | The sender, or the Manager who overruled | You. Only you. |
| Seen by | The people involved | The people involved | You. Your employer never sees it. |
| Edited or deleted | Never | Never | Never. Who'd want to? |
| Counted over | 24 months | 24 months (draft) | This year. Fresh start every January. |
| Reviewed by | An HoD or the owner | An HoD or the owner | Your conscience |
| Edge cases | 17 | 20 | 31, for a bookmark |

Thirty-one edge cases and thirteen restriction rules, for links. Here's the honest version: **it archives links. That's it, and it's useful.** Save the link, click the link. If it's a company link, the right people can change it. If it's yours, nobody else ever sees it. Every rule above exists because people can't be trusted with a shared bookmarks folder. The counter exists because you can.

So save your stuff. Mwah.

How it actually counts:

- **Every click on a link adds one to its `clicks`.** That's it.
- **A double-click shows the (warning) message.** The link opens once and counts once; the second click only brings up the warning. One tab, one click, honest numbers. The message: *"(warning) Easy, tiger. It's already open. One click is plenty."*
- **Phones:** a second tap inside the browser's double-tap time is ignored without a warning. Fingers aren't mice.
- **Every way of opening counts once:** a click, a middle-click, Ctrl- or Cmd-click, or Enter on the keyboard. Copying a link (right-click or long-press) doesn't count; it wasn't opened.
- **Good clicks:** company links. One company-wide total per link, never who clicked, so nobody's browsing becomes evidence.
- **Ghost links:** your bookmark clicks, added up per calendar year in your own time zone. Private like the bookmarks. The company never sees them, and neither does anyone else.
- **An edited company link keeps its count** (H9). The new version starts from the old one's total.
- **Offline:** bookmark clicks are counted on the device and added on top when it reconnects, never overwritten. Company clicks offline don't count, because company data is read-only offline (GUIDELINES Section 12).
- **Never a ranking, and never shown next to hours or points** (R7, O5). Clicking a lot doesn't make you productive, and clicking a little doesn't make you lazy.
- **The risk, said out loud:** anyone can click their own link a hundred times. Nothing rides on the number, so nothing needs protecting.

## The Record

One `ArchiveAnchors` document per company-link version or per bookmark, following TABLE.md Section 6 (every field present, `null` when unknown, text IDs, UTC dates, status as a field, no lists of objects).

Conrad Guy, a Manager without HoD at Voidspire Systems, proposes an edit to a link. Jane Lester, the owner, approves it:

```json
{
  "_id": "6ae1c3d5898694d607cf3002",
  "kind": "Company",
  "organizationId": "6ae0aa00898694d607cf4001",
  "status": "Published",
  "change": "edit",
  "replacesId": "6ae1c3d5898694d607cf3001",
  "title": "Incident runbook",
  "url": "https://wiki.voidspire.example/runbook",
  "note": "Moved from the old wiki.",
  "category": "Operations",
  "purpose": "Read",
  "validFrom": null,
  "validUntil": null,
  "clicks": 42,
  "authorId": "6ae07097898694d607cf1579",
  "decidedById": "6ae068b8898694d607cf1574",
  "decisionNote": null,
  "decidedAt": "2026-11-09T10:05:00Z",
  "archivedAt": null,
  "createdAt": "2026-11-09T09:30:00Z",
  "updatedAt": "2026-11-09T10:05:00Z"
}
```

A personal bookmark uses the same fields:

```json
{
  "_id": "6ae1c3d5898694d607cf3010",
  "kind": "Bookmark",
  "organizationId": null,
  "status": "Saved",
  "change": null,
  "replacesId": null,
  "title": "Rust book",
  "url": "https://doc.rust-lang.org/book/",
  "note": null,
  "category": null,
  "purpose": null,
  "validFrom": null,
  "validUntil": null,
  "clicks": 7,
  "authorId": "6ae07f79898694d607cf1580",
  "decidedById": null,
  "decisionNote": null,
  "decidedAt": null,
  "archivedAt": null,
  "createdAt": "2026-11-09T07:00:00Z",
  "updatedAt": "2026-11-09T07:00:00Z"
}
```

- **`status`:** `Proposed`, `Published`, `Declined`, `Withdrawn`, `Outdated`, `Replaced` or `Removed` for company links; always `Saved` for bookmarks.
- **`authorId`** is whoever wrote the version: the proposer, or the HoD or owner who published it directly. For a bookmark it's the bookmark's owner.
- **`decidedById`** is whoever closed or applied it: the owner who approved or declined, the proposer who withdrew, the person whose change made it Outdated, or the author themself when they published directly. When the system closes a proposal because its proposer was removed, it's the owner who removed them (H6).
- **`purpose`, `validFrom`, `validUntil`:** see Purpose and Period. A new period is a new version (H9), like any edit.
- **`clicks`** is the ghost-click counter: the only number on the record, and the only field that keeps changing while a version is live. A click doesn't touch `updatedAt`.
- **`archivedAt`** is set when the company is deleted. `status` keeps whatever it was, so archived records still show their state.
- **Version history is a chain,** not a list. Following `replacesId` backwards walks every earlier version. In MySQL nothing changes: it's one flat table with a self-reference.
- **A `remove` document copies the title and URL** of the version it removes, so the history reads on its own.

## Predicted Balance

### The Testing Baseline: 4 Weeks

The same window as `[ticketing]` and `[overtime]`: **Monday 2 November to Sunday 29 November 2026**, 20 working days, the same cast. Kept simple on purpose (The Lure). Decided with the owner on 2026-11-09.

| 4 weeks | Voidspire (exploitation) | Silverveil (prediction) |
| --- | --- | --- |
| Company links live on day 1 | 11, always on, never updated: University Tracker's header (Calendar, Shifts, Info sheet, Downloads, Search, Archive, Email) and 4 for the work | 15: the same header, Bay 1 and Bay 2 × Book, Upload, Store for November, and 2 always-on Read links |
| Links prepared during the window | 0 | 6: December's, published ahead and not shown until 1 December |
| Proposals sent | 20: Conrad, one a working day (H14) | 0: the owners publish directly |
| Proposals decided | 0. Jane never answers; all 20 wait (H1) | — |
| Good clicks (2 per confirmed ticket: Read, then Store) | 288 (planned 320) | 248 |
| Ghost links | Not predicted: private, and nothing rides on them | Not predicted |
| Bookmarks | 82 across the cast, 4 to 6 each: real public sites picked from each person's job title (and, for Jane, Kady, Tasneem and Sipho, from the owner's commits). Not yet checked for dead links | |

- **Voidspire's runbook is stale.** Conrad's proposal to move it to the new wiki waits for Jane, so 144 of Voidspire's clicks land on the old address. The lure still works; it just points somewhere tired.
- **Silverveil's links follow the calendar.** On 1 December, November's six fade into the archive and December's six appear, without anyone touching anything.
- **Clicks follow the work,** so they check the other two apps: 2 per confirmed ticket means a wrong click count is a wrong ticket count.

### Exploit Cases

| Case | What happens |
| --- | --- |
| Clicking your own link a hundred times | Allowed. Nothing rides on the number. |
| Flooding the owner with proposals | One a day (H14). Conrad hits it every day. |
| Hiding a link by ending its period early | It's a new version (H9), shown in the archive with who changed it. |
| An HoD re-adding a link the owner removed | Only the owner can (H13). |

## Edge Cases

| Case | What happens |
| --- | --- |
| A Manager without HoD changes a link | It's stored as Proposed. Published links don't change until the owner approves (GUIDELINES Section 7). |
| An HoD tries to approve a Manager's proposal | They can't, and they can't see it either (H12). They can publish their own change directly. |
| Nobody answers a proposal | It waits. No expiry, no automatic approval (H1). The proposer can withdraw it any time. |
| The owner wants to tweak a proposal before approving | They can't edit it. They approve it as written, or decline it with a note (H2). |
| Two proposals change the same link | The first one applied wins. The other becomes Outdated, and its proposer is told who changed the link (H3). |
| An HoD edits a link while a Manager's proposal on it waits | The HoD's edit goes live; the proposal becomes Outdated, not Declined (H3). |
| Two people edit the same link at the same moment | Only the first gets through the `{ _id, status: "Published" }` check; the second is told the link has changed. |
| A non-HoD Manager is demoted while a proposal waits | It keeps waiting for the owner. They can still withdraw it, but can't propose anything new (H4). |
| A non-HoD Manager is made HoD while a proposal waits | It still waits for the owner. They can withdraw it and publish it directly instead (H4). |
| An HoD is demoted to non-HoD Manager | Their published links stay. From now on their changes are proposals. |
| A promotion is waiting for acceptance | Nothing changes until it's accepted (GUIDELINES Section 5). |
| The proposer clocks out while a proposal waits | It keeps waiting. They can withdraw it without clocking in (H5). |
| The proposer clocks out halfway through writing a proposal | Sending is refused, but the form keeps what they typed. They clock in and send it. |
| The proposer is removed from the company | Their waiting proposals close as Withdrawn, with the owner who removed them as `decidedById` (H6). Links they published stay, with their name as a historical reference. |
| A worker deletes their own account | Treated as removal from every company at once, as above. Their bookmarks are deleted with the account (GUIDELINES Section 10). |
| A member is removed while the company page is open | It closes at once. Bookmarks stay. |
| A removed member opened company links in other tabs, or copied them into bookmarks | TraLogFin can't take them back. A link is only an address; the site it points to must check access itself (H7). |
| Someone puts a password or token in a company link's URL | Not allowed (H7). A link points at a resource; it never unlocks one. |
| A link uses `javascript:`, `data:` or `file:` | Refused. Only `https://` and `http://` (H8). |
| A link should change every month, like "this month's booking sheet" | One link per month, each with its period, prepared ahead. The page shows the one covering today (H11). |
| A link should change every day, like "today's folder" | Possible with a one-day period, but that's 365 links a year. Link the month's folder instead. URLs are never built from the clock (H11). |
| A period ends while a proposal to edit the link waits | The proposal still waits. If approved, the new version keeps whatever period it was written with. |
| Two links share a purpose, category and period | Allowed, with a warning when it's added, like a duplicate URL. |
| A link has no period | It's always on today's page. |
| The device's date is wrong | It changes nothing. Today is the server's date in the company's time zone (H11). |
| A freelancer belongs to two companies | They see only the links of the company they're clocked into, and never propose (Employees can't). |
| A worker switches Occupation | Only the default page changes. Nothing about access or privacy does (GUIDELINES Section 7). |
| Two HoDs keep removing and re-adding the same link | Allowed: they have equal rights. The version chain shows who did what, and the owner settles it. |
| The owner removed a link and an HoD wants it back | Only the owner can re-add a link the owner removed (H13). |
| The same URL is published twice | Allowed, with a warning when it's added. Two titles can point to one place. |
| The company is deleted | Every company link and proposal is archived as it stands (`archivedAt`). Nothing is live or waiting. |
| The owner deletes the company but keeps their account | Their bookmarks stay. They go with the account only if the owner deletes it too. |
| The device is offline | Company links are read-only from the cache. Bookmarks can still be added, edited and deleted (H10). |
| The same bookmark is changed on two devices, one of them offline | Both versions are kept; an edit beats a delete (H10). |
| A removed member is offline with an old cache | They can still read the cached links until the device reconnects, then the server wins and the cache is replaced (GUIDELINES Section 12). See H7. |
| Someone without an account saves bookmarks, then signs up | Their bookmarks upload into the new account (GUIDELINES Section 12). |

## Restriction Rules (Draft)

Written 2026-11-09 to close every open edge case. Each one is a draft for the owner to confirm before it goes into GUIDELINES.md.

- **H1. Silence never publishes.** A proposal waits until the owner decides or the proposer withdraws it. It never expires and is never approved automatically.
- **H2. A proposal is approved as written.** The owner approves it or declines it, with a note saying why. Nobody edits someone else's proposal, so a published version always says who wrote it.
- **H3. A change applies only to the version it was written against.** Approving an `edit` or `remove` goes through only while that version is still Published. When a version is replaced, every proposal waiting on it closes as **Outdated**, not Declined, and the proposer is told who changed the link.
- **H4. A proposal outlives its proposer's role.** If the proposer is demoted, or made HoD, while a proposal waits, it keeps waiting for the owner. The proposer can still withdraw it. A demoted proposer can't send new proposals; a new HoD can publish directly instead.
- **H5. Withdrawing needs no clock-in.** Like `[ticketing]`'s R6, it gives something back instead of taking anything. It still needs to be online (offline is read-only).
- **H6. Removal withdraws, it doesn't decline.** When a member is removed, their waiting proposals close as Withdrawn, recorded under the owner who removed them. Links they published stay published, with their name kept as a historical reference.
- **H7. A link is a pointer, not a key.** Company links must never contain passwords, tokens or other secrets. TraLogFin controls who sees a link, not who can open what it points to. Copying a company link into a personal bookmark is allowed.
- **H8. Only web addresses.** A link's URL must start with `https://` or `http://`. Links open in a new tab, without passing TraLogFin's page to the site (`rel="noopener noreferrer"`).
- **H9. Company link text is never overwritten.** Every edit or removal is a new document that replaces the old version, and the old version stays. Bookmarks are the exception: they're private, so they're edited in place and deleted for real.
- **H10. Bookmarks work offline, and nothing is lost when syncing.** With an account, bookmarks can be changed offline and sync when the device reconnects. If the same bookmark changed on another device meanwhile, both versions are kept, and an edit always beats a delete.
- **H11. Fixed addresses, dated by period.** A stored URL is used exactly as written. Nothing is filled in from the date or the device's clock. What changes with time is which links show: each link can carry a period (`validFrom`, `validUntil`), and the page shows the ones that cover today's server date. *Why: the original built today's folder from the device's clock, and a wrong clock opened the wrong day. A period gives the same "this month" with none of the risk.*
- **H12. Proposals are seen by the proposer and the owner only.** HoDs and Employees see published links. An HoD can't see a Manager's proposal, so they can't publish it as their own.
- **H13. The owner's removal sticks.** A link the owner removed can be added again only by the owner. A removal by an HoD can be undone by any HoD, or through an approved proposal.
- **H14. One proposal a day.** A Manager without HoD can send at most **1** proposal per **24 hours**. The owner never faces more than one approval a day from any Manager, and proposing never gets in the way of actual work (owner, 2026-11-09). The (helper) message: *"One a day is plenty. Tomorrow's yours."*

## Decisions (Owner Confirmed)

Picked on 2026-11-09 while the owner was away, then confirmed by the owner the same day, every one as written except 8, which stays open.

1. **One collection, two kinds.** Company links and bookmarks both live in `ArchiveAnchors`, told apart by `kind`, because TABLE.md names one collection for `[hyperlink]`.
2. **Versions instead of a `history` list.** Each change is its own flat document linked by `replacesId`, so nothing needs a list of objects (TABLE.md Section 6, rule 3). `[ticketing]` now does the same with its `Action` documents (`log-a-ticket.md`, The Record).
3. **A Manager without HoD can propose all three changes:** add, edit and remove. GUIDELINES says "a company-link change" without narrowing it.
4. **A waiting proposal can't be edited.** The proposer withdraws it and sends a new one, so the owner never approves something that changed while they were reading it.
5. **Declining needs a note.** The proposer should know why. Approving doesn't.
6. **No `restore` action.** A removed link comes back as a new `add`, which keeps the loop to one way in.
7. **`category` is optional free text** for grouping links on the page (a studio, a room, a team), sorted by purpose, then category, then title. It isn't a department and grants nothing.
8. **The centre page `(occupation)` is still open.** The draft was the add form and the proposals list, the way `[ticketing]`'s `(position)` holds logging a ticket. The owner wants it refined design-wise in its own thread, with animations on click (owner, 2026-11-09).

## What the Original Got Wrong

Kept so the rebuild doesn't copy it. Full scan with file and line references: `.claude-notes/hyperlink-loop-scan.md`.

1. Links were hard-coded in the source. Changing one meant editing code and redeploying, with no roles, no approval and no record of who changed what. Fixed by the loop.
2. Three of the five pages crashed on load, because a missing `<link>` tag was used without checking it existed.
3. Every studio colour showed green's links, and January's blue row read February's.
4. Selectors matched any ID containing two letters, so February opened the brown page. Click handlers also stacked up on every reload.
5. "Today's folder" links were built from the device's clock. Fixed by H11.
6. The spreadsheet "lock" overwrote its own link formulas with plain values on the first edit, freezing every imported link for good.
7. Each link was copied twelve times, once per month, and some slots read the wrong key. One link is one document now.
8. Empty and `javascript:` addresses stood in for missing links. Fixed by H8.
