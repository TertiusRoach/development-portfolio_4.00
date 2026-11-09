# Find a Link

`[hyperlink]` · `ArchiveAnchors`. A draft until its edge cases are worked out; see `synchronization-thesis.md`. The permissions it follows come from [GUIDELINES.md](../../utilities/document/GUIDELINES.md), Sections 6, 7, 8, 10 and 12; this file is how the loop behaves inside them.

Built from a scan of the original University Tracker (2.00), kept read-only in `source/utilities/vendors/university-tracker/`. The original had no loop to keep: its links were hard-coded in the source, with no roles, approval or history. What it got wrong is listed at the bottom so it isn't copied.

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

1. **Published means live.** The company page is exactly the documents with `kind: "Company"`, `status: "Published"`, the clocked-in company, and `archivedAt: null`. One query, nothing else to check.
2. **A change applies to one version only.** It goes through while its target is still Published (`{ _id: replacesId, status: "Published" }`), and not after (H3).
3. **Nothing is overwritten, only added.** A company link's text never changes once it's stored. An edit is a new version, and the old one stays as Replaced (H9).

## The Record

One `ArchiveAnchors` document per company-link version or per bookmark, following TABLE.md Section 6 (every field present, `null` when unknown, text IDs, UTC dates, status as a field, no lists of objects).

Conrad Guy, a Manager without HoD at Voidspire Systems, proposes an edit to a link. Jane Lester, the owner, approves it:

```json
{
  "_id": "6ae1c3d5898694d607cf3002",
  "kind": "Company",
  "organization": "Voidspire Systems",
  "status": "Published",
  "change": "edit",
  "replacesId": "6ae1c3d5898694d607cf3001",
  "title": "Incident runbook",
  "url": "https://wiki.voidspire.example/runbook",
  "note": "Moved from the old wiki.",
  "category": "Operations",
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
  "organization": null,
  "status": "Saved",
  "change": null,
  "replacesId": null,
  "title": "Rust book",
  "url": "https://doc.rust-lang.org/book/",
  "note": null,
  "category": null,
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
- **`archivedAt`** is set when the company is deleted. `status` keeps whatever it was, so archived records still show their state.
- **Version history is a chain,** not a list. Following `replacesId` backwards walks every earlier version. In MySQL nothing changes: it's one flat table with a self-reference.
- **A `remove` document copies the title and URL** of the version it removes, so the history reads on its own.

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
| A link should change every day, like "today's folder" | Not supported. Links are fixed addresses, never built from the device's clock (H11). |
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
- **H11. Fixed addresses only.** A stored URL is used exactly as written. Nothing is filled in from the date or the device's clock.
- **H12. Proposals are seen by the proposer and the owner only.** HoDs and Employees see published links. An HoD can't see a Manager's proposal, so they can't publish it as their own.
- **H13. The owner's removal sticks.** A link the owner removed can be added again only by the owner. A removal by an HoD can be undone by any HoD, or through an approved proposal.

## Draft Decisions (Owner to Confirm)

Picked on 2026-11-09 while the owner was away; each one can be overruled.

1. **One collection, two kinds.** Company links and bookmarks both live in `ArchiveAnchors`, told apart by `kind`, because TABLE.md names one collection for `[hyperlink]`.
2. **Versions instead of a `history` list.** Each change is its own flat document linked by `replacesId`, so nothing needs a list of objects (TABLE.md Section 6, rule 3). See the conflict note in `synchronization-thesis.md`.
3. **A Manager without HoD can propose all three changes:** add, edit and remove. GUIDELINES says "a company-link change" without narrowing it.
4. **A waiting proposal can't be edited.** The proposer withdraws it and sends a new one, so the owner never approves something that changed while they were reading it.
5. **Declining needs a note.** The proposer should know why. Approving doesn't.
6. **No `restore` action.** A removed link comes back as a new `add`, which keeps the loop to one way in.
7. **`category` is optional free text** for grouping links on the page, sorted by category, then title. It isn't a department and grants nothing.
8. **The centre page `(occupation)`** holds the add form and the proposals list, the way `[ticketing]`'s `(position)` holds logging a ticket.

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
