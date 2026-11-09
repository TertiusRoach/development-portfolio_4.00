# TraLogFin Database

How the data is structured from top to bottom, for all three applications. A proposal written on 2026-11-09 for the owner to review, revise and rethink. Nothing reads it yet: `TraLogFin.json` and the code are untouched until this is approved.

## The Test Data

All in `source/modules/server/MongoDB/testing/`:

| File | What's in it |
| --- | --- |
| `tralogfin_TEST.json` | A short sample: a few documents of every kind, every collection in one file. Read this first |
| `pickPage_TEST.json` | Everyone and everything sensitive: the 18 characters and Randomize, Voidspire and Silverveil, and every membership with its version chain |
| `trackTime_TEST.json` | The full 4 weeks: every shift, overtime request, leave and freelancer invoice |
| `defineDuties_TEST.json` | The full 4 weeks: every ticket and every action |
| `archiveAnchors_TEST.json` | Every company link (each company's page copies University Tracker's header), Conrad's proposals, and 82 real bookmarks picked from each person's job title, with the window's clicks. The bookmark URLs haven't been checked for dead links yet |

The full files replay the three Testing Baselines (Monday 2 to Sunday 29 November 2026), and they're generated, so every number traces to a rule. Every ticket describes a real problem in its fixer's job language (Dale's switch ports, Alaric's certificates, Nyra's architecture), and the story beats of `rpg-timeline.md` are played in them. Each file holds one collection, named the way the code names it (`{ "TrackTime": [ … ] }`), like `TraLogFin.json` does for all four today. The replay is checked against the predictions; what doesn't match is listed in Replay Findings below.

## The Shape in One Picture

```
PickPage: the only collection that knows who anyone is (encrypted at rest)

   Person ◄── many-to-one ── Membership ── many-to-one ──► Company
   (once)          (one person in one company: role, HoD,     (once)
                    contract, shift; a version chain)

                     │  IDs only, never names
       ┌─────────────┼──────────────────┐
       ▼             ▼                  ▼
   TrackTime     DefineDuties      ArchiveAnchors
  [overtime]     [ticketing]        [hyperlink]
Shift, Overtime, Ticket, Action  Company link, Bookmark
Leave, Invoice
```

**Read it like this:** PickPage holds three kinds (owner, 2026-11-09). A person exists once. A company exists once. A membership links the two and holds everything that's true *for that person in that company*: their Vocation, Position, HoD, contract hours, shift and bureau. Every record in the three apps points at a person (`personId`, `employeeId`, `senderId`, `authorId`…) and a company (`organizationId`), never at a name.

## Relationships

One-to-many and many-to-one are the same relationship read from opposite ends. Many-to-many (M:N) is the one that needs a table in the middle.

| Relationship | Type | How it's stored |
| --- | --- | --- |
| Person ↔ Company | **M:N.** Dimitri works for two companies; each company has many people | The `Membership` in the middle: many-to-one to the person (`personId`) and many-to-one to the company (`organizationId`) |
| Company → founder | Many-to-one; a person founds at most one company | `founderId` |
| Person → shifts, tickets sent, links written | One-to-many (from the shift's side: many-to-one) | `employeeId`, `senderId`, `authorId` on each record |
| Company → shifts, tickets, links | One-to-many | `organizationId` on each record |
| Ticket → Actions | One-to-many | `ticketId` on each Action |
| Version → the version it replaced | One-to-one chain | `replacesId` (memberships and company links) |

## What's Sensitive

PickPage is the only collection that knows who anyone is. TrackTime, DefineDuties and ArchiveAnchors hold IDs and work, never a name, an email or an address. Without PickPage they're anonymous, which is what makes it the one place to protect (owner, 2026-11-09).

- **Encrypt PickPage's personal fields at rest** (email, names, IP address). IDs stay plain, so the other three collections can still point at people.
- **Passwords are never encrypted, only hashed** (`passwordHash`). A hash only goes one way: not even the server can read the password back.
- **The ID is never the key.** An `_id` is in plain view on every record a coworker can see (`senderId`, `authorId`), so it can't be what proves who you are. After the password is checked once, the device keeps a **session token**: random, unrelated to the ID, expiring, and revocable. Log out or lose the laptop, and the token dies; the ID never changes. The offline switch works the same way, through `offlineDeviceId` (GUIDELINES Section 12).

## Why Memberships

The current `TraLogFin.json` keeps `vocation`, `position`, `headOfDepartment` and a list of `organizations` on the person. That works for 18 people and breaks the moment anything grows:

| Problem today | With memberships |
| --- | --- |
| A freelancer in two companies has one Position for both | One membership per company, each with its own role |
| O4's contract hours "agreed per membership" have nowhere to live | `contractMinutes` sits on the membership |
| Two owners can't be expressed | `ownerRole` on two memberships (Founder, Co-owner), each with a `shift` |
| R23 ("the role at the moment of the action") can't be looked up | Every role change is a new membership version; the one Active at that moment answers it |
| R28's turnover has to be stored somewhere | It's counted from the chain: every removal and every step down |
| A company renamed breaks every record that says `"Voidspire Systems"` | Records point at `organizationId`; the name lives once, on the `Company` |

## Rules for Every Collection

These follow TABLE.md Section 6 and add nothing it forbids.

1. **Every document has every field of its collection,** `null` when it doesn't apply. Each collection is one future MySQL table.
2. **`kind` says what a document is** when a collection holds more than one sort (the pattern `[hyperlink]` started).
3. **IDs are 24-character hex text.** The cast keeps its existing IDs.
4. **Point by `_id`, never by name or slug** (TABLE.md rule 4).
5. **Times are UTC and the server's** (R29). Each person and company has a `timeZone` only for display, contract days and shifts.
6. **Whole numbers only.** Durations in minutes, money in cents (`priceCents`), points in eighths. Nothing ever needs rounding.
7. **Nothing is overwritten where history matters.** Memberships and company links are version chains (`replacesId`); tickets keep `Action` documents. A decision field is written once and never changed.
8. **Counted, never stored.** Points, ghost points, ghost hours, overdue counts, caps and turnover are worked out from the records. Only `clicks` is a stored number, and nothing rides on it.

## PickPage: People

`kind: "Person"`. One document per person. Only what's true about them everywhere: who they are and how they log in.

| Field | Meaning |
| --- | --- |
| `profile` | The readable slug the front-end and the images use |
| `name`, `firstName`, `lastName`, `email` | Who they are. Test emails are the first name, a dot, and the rest of the profile slug: `dimitri.lewis@tralogfin.com`, `malik.tremaine-carter@tralogfin.com` (owner, 2026-11-09). A placeholder until the company name is final. These are demo accounts: no mail is ever sent, and the unlock codes are typed in by an animation (`synchronization-thesis.md`, Demo Accounts) |
| `occupation` | Technician or Specialist: the launch page, nothing more (GUIDELINES Section 7) |
| `paid` | The owner's company-ownership entitlement (GUIDELINES Section 2) |
| `country`, `timeZone` | Where they work. `timeZone` is an IANA name (`Europe/Berlin`) |
| `status` | Enabled, Pending, Blocked or Deleted: the login screen only |
| `activation…`, `password…`, `restrictionExpiresAt`, `userIP`, `lastLogin` | The login system's fields, as in today's Randomize Character |
| `offlineSince`, `offlineDeviceId` | The offline switch: when, and which one device (GUIDELINES Section 12) |
| `deletedAt` | When the account was deleted |

Moved out to the person's memberships: `vocation`, `position`, `headOfDepartment`, `organizations`, `bureau`.

All three kinds share PickPage's 54 fields (TABLE.md rule 5): a person's company fields are `null`, and the other way round.

## PickPage: Companies

`kind: "Company"`. One document per company.

| Field | Meaning |
| --- | --- |
| `name` | Shown everywhere; stored only here |
| `founderId` | The owner who created it and pays for it |
| `strategy` | Test data only: how the company plays the 4-week test (see `log-a-ticket.md`, Two Strategies) |
| `timeZone`, `currency` | The company's clock and money |
| `dayShiftStartsAt`, `nightShiftStartsAt` | Local times splitting the day between two owners; `null` with one owner |
| `ads`, `paidThrough` | Payment state: `ads` is on when `paidThrough` has passed (GUIDELINES Section 11) |
| `overdueCap` | R11's 8. The owner may lower it, never raise it |
| `ownerHoldCap` | R31's 12, shared by the owners |
| `deletedAt` | The company was deleted; every record keeps its state and is archived |

## PickPage: Memberships

`kind: "Membership"`.

One document per version of a membership. A promotion, a demotion or a new shift is a new document that `replacesId` the old one. The old one becomes `Replaced` and stays.

| Field | Meaning |
| --- | --- |
| `personId`, `organizationId` | Who, and where |
| `status` | `Invited` (waiting for acceptance), `Active`, `Declined`, `Replaced` or `Ended` |
| `replacesId` | The version before this one |
| `vocation` | Established or Freelancing. A person has one Active Established membership, or any number of Freelancing ones |
| `position` | Manager or Employee: the Position toggle. An owner is a Manager with HoD, like Jane's card says |
| `headOfDepartment` | true or false (only Managers can be true) |
| `ownerRole` | Founder or Co-owner: this is what makes someone an owner. `null` for everyone else |
| `shift` | Day or Night for co-owners; `null` otherwise |
| `bureau` | The job title they chose for this company |
| `contractMinutes` | O4's contract hours, in minutes, Monday to Sunday (ISO 8601). `[480, 480, 480, 480, 480, 0, 0]` is 8 hours on weekdays. A day above 0 is a contract day (R11, R17). `null` for freelancers |
| `contractStartsAt` | When the contract day starts, in local time (`"22:00"` for Seamus's nights). With `contractMinutes`, it says exactly which hours are ordinary and which are overtime. `null` for freelancers |
| `proposedById`, `proposedAt`, `acceptedAt` | Who offered this version, and when it was accepted (GUIDELINES Section 5) |
| `endedAt`, `endedById`, `endReason` | `Replaced`, `Declined`, `Removed`, `AccountDeleted`, `CompanyDeleted`, `Forfeited` (a freelancer accepting Established status elsewhere) or `Left` (resigned or retired, by the person themselves; counts as turnover, R28) |

**Reading the chain:**
- Tasneem's three versions are Employee, then Manager with HoD, then night-shift co-owner, each proposed by Hammad.
- Aelin's declined Manager offer stays on record, and her Employee membership is untouched.
- **Turnover (R28)** is every `Removed` plus every new version with a lower Position than the one it replaced.
- **"Who promoted this Manager?"** is the `proposedById` on their first Manager version.

## TrackTime: [overtime]

Four kinds.

| Kind | What it is | `status` |
| --- | --- | --- |
| `Shift` | One clock-in to clock-out | `Open`, `Closed`, `CutOff` (membership ended), `Dropped` (failed the offline checks) |
| `Overtime` | A request for time beyond the contract | `Pending`, `Approved`, `AutoApproved` (the owner's own), `Split`, `Rejected`, `Expired`, `Withdrawn` |
| `Leave` | A request for days off | `Pending`, `Approved`, `AutoApproved` (O1), `Rejected`, `Withdrawn`, `Lapsed` |
| `Invoice` | A freelancer's priced solution | `Quoted`, `Accepted`, `Declined`, `Invoiced`, `Paid` |

| Field | Used by | Meaning |
| --- | --- | --- |
| `employeeId` | All | Who. The name the tracker's own code uses (`TrackTime.ts`) |
| `clientId`, `synced` | All | The browser's UUID for the record, and whether the server has it yet: what lets an offline clock-in sync without duplicates (GUIDELINES Section 12) |
| `date`, `start`, `end` | Shift, Overtime, Leave | What the tracker shows: `'YYYY-MM-DD'` and `'HH:MM'` in the worker's own time. A night shift's `date` is the day it started (O4) |
| `startsAt`, `endsAt`, `minutes` | Shift, Overtime, Leave | The same moments in UTC, which the server counts by (R29), and how long in minutes |
| `openedBy` | Shift | `ClockIn`, `DefaultDay` (Clocking Logic 1: a forgotten day filled from the contract) or `OpenedLate` (3: the time the app was opened) |
| `addedAfterwards` | Overtime | Asked about at the next clock-in after a forgotten clock-out (O6). A reviewer can reject it without ghost hours, like offline time |
| `ticketId` | Invoice | The confirmed ticket the solution delivered |
| `offline` | Shift, Overtime | Recorded offline (GUIDELINES Section 12) |
| `closedBy` | Shift | `ClockOut`, `DefaultClockOut` (Clocking Logic 2: a forgotten clock-out) or `CutOff` |
| `approvedMinutes`, `rejectedMinutes` | Overtime | A split fills both. **Ghost hours are `rejectedMinutes`**, counted for the worker and the reviewer, never stored twice |
| `reviewerId`, `decidedAt`, `decisionNote` | Overtime, Leave | Who decided, once |
| `laterApprovedById`, `laterApprovedAt` | Overtime | O3's one reversal. The ghost hours stop counting for the worker and keep counting for the reviewer |
| `title`, `priceCents`, `currency` | Invoice | The agreed solution and price, fixed before work starts (GUIDELINES Section 9) |
| `quotedAt`, `acceptedById`, `acceptedAt`, `invoicedAt`, `paidAt` | Invoice | The invoice's steps |
| `archivedAt` | All | The company was deleted |

Victor's rejected overtime from October 2024 is in the test data on purpose: older than 24 months, so it's kept but no longer counted.

## DefineDuties: [ticketing]

`Ticket` and `Action`, as in `log-a-ticket.md`, The Record.

| Field | Kind | Meaning |
| --- | --- | --- |
| `status` | Ticket | `Pending`, `Assigned`, `Resolved`, `Deleted` or `Archived` (deleted twice, R13) |
| `subject`, `description` | Ticket | What was asked |
| `senderId`, `receiverId` | Ticket | Who asked, and who has it now |
| `confirmerId` | Ticket | The HoD whose turn it is to confirm (R33), set at `resolve` |
| `ticketId` | Action | The ticket it belongs to |
| `action` | Action | `log`, `edit`, `claim`, `assign`, `take`, `release`, `resolve`, `confirm`, `decline` (R35), `selfConfirm`, `reopen`, `delete`, `junk` (a deletion marked as junk, R36), `restore` |
| `byId` | Action | Who did it; `null` only for `selfConfirm`, which the system does |
| `fromId`, `toId` | Action | Both sides of a move: `assign` and `claim` fill `toId`; `take` fills both, so the drama is on record (R32) |
| `at`, `note` | Action | When (server time), and why |
| `archivedAt` | Both | The company was deleted |

**Every point and ghost point is counted from the Actions.** The four test tickets show:
- a normal fix confirmed in time;
- an overdue rescue waiting for Jane's confirm;
- Elliot burying Zuberi's coffee-machine ticket: junk, restore, delete, so Zuberi earns nothing for it (R36);
- a ticket still in the pool.

## ArchiveAnchors: [hyperlink]

Exactly as `find-a-link.md`, The Record: `organizationId` instead of a name, plus `purpose` (Book, Upload, Store, Read, Other) and a period (`validFrom`, `validUntil`, dates in the company's time zone), brought back from the original University Tracker. The test data has Conrad's edit of Malik's runbook still waiting for Jane (so the old address stays live), Tasneem publishing as co-owner, her November and December "Bay 1 bookings" links (the same purpose, one period each, prepared ahead), and Nyra's private bookmark.

## Co-owners

From the owner on 2026-11-09: two owners per company, one on the day shift and one on the night shift, as the founder decides. Silverveil does this with Hammad (day) and Tasneem (night). Confirmed by the owner and written into GUIDELINES Section 4, Co-owners, on 2026-11-09.

1. **The founder pays, sets the shifts, removes the co-owner and deletes the company.** Nobody can lock the founder out of their own company.
2. **The co-owner has every other owner power:** approve, confirm, no clock-in, auto-approved leave and overtime.
3. **The owner on shift carries the owner's weight.** Expired overtime (GUIDELINES Section 9) and a self-confirm's lost profit (R8) go to whichever owner's shift it happened in. With one owner, or no shifts set, that's the founder.
4. **R28's quarter goes to the owner who made that Manager** (`proposedById`). Whoever chose them shares the weight.
5. **R31's 12 is shared.** The owners hold 12 open tickets together, never 12 each.
6. **Removing the co-owner counts as turnover** on the founder's profile, like any removal.
7. **The owner on shift earns the profit** (R34), the same way they carry the lost profit.
8. **The founder approves the co-owner's own leave and overtime.** Only the founder's approve themselves.

## The Cast's Schedules

Built from CHARACTERS.md on 2026-11-09. Every Employee works 5 days of 8 hours, so the 4-week baseline in `log-a-ticket.md` holds; the characters differ in *when* they work, not how much. Times are each person's own local time.

| Character | Where | Contract | Why |
| --- | --- | --- | --- |
| Jane Lester (owner) | New York | Mon–Fri 07:00, 10 h; Sat–Sun 4 h | The myth of the 80-hour week, and the weekend messages Hammad still gets |
| Malik Tremaine Carter | Toronto | Mon–Fri 08:00, 8 h | Clean data, no unneeded meetings |
| Conrad Guy | London | Mon–Fri 08:00, 8 h | Correct format, correct time |
| Dale Sutton | Berlin | Mon–Fri 08:00, 8 h | Routine. Forgets to clock out every second Friday |
| Dr. Alaric Voss | Johannesburg | Mon–Fri 10:00, 8 h | Only the interesting tickets, headphones on |
| Kady Deacon | Sydney | Mon–Fri 08:30, 8 h | On leave 7–12 December in the test data, outside the test window |
| Seamus O'Donnell | Tokyo | Mon–Fri 22:00, 8 h | Nights, on a flaky connection |
| Hammad Dean (founder) | Dubai | Mon–Fri 07:00, 8 h, day shift | Watches his team leave on time |
| Tasneem Kemp (co-owner) | Kolkata | Mon–Fri 19:30, 8 h, night shift (18:00 in Dubai) | Was 08:00 as Employee and Manager |
| Elliot Crane | Singapore | Mon–Fri 07:00, 8 h | First in, last out; his overtime is the point |
| Zuberi Thorne | São Paulo | Mon–Fri 08:00, 8 h | Clear scope, clean handover |
| Nyra Solari | Shanghai | Mon–Fri 06:00, 8 h | Done before anyone else has started |
| Victor Langston | Amsterdam | Mon–Fri 09:00, 8 h | Logs off exactly on time |
| Danish Copeland | Stockholm | Mon–Fri 09:00, 8 h | Office hours, airtight policies |
| Aelin Darrow | Auckland | Mon–Fri 08:00, 8 h | Moves deadlines, not her hours |

Freelancers have no contract (O4), so their pattern lives here, not in the data. It's what the [archive] test plays:

| Freelancer | Where | Usual pattern |
| --- | --- | --- |
| Dimitri Lewis | Athens | Company work in the mornings, his own software after; offline on the ferry |
| Daniel Meyers | Dublin | From home, the minimum that keeps the contracts coming; his laptop clock is not to be trusted |
| Sipho Dlamini | Nairobi | Between repair jobs; often clocked out when Elliot assigns |

- **Spread across the clock on purpose.** Voidspire runs from Sydney to New York, so its Managers are never all awake together. That's where R29's server time and counting in hours earn their keep.
- **A part-timer** (E1) isn't in the cast, because it would shift the baseline. Test it as its own case.

## Replay Findings

Generated on 2026-11-09. Everything matched the predictions except these. Each one is either a bug or a wrong rule, waiting for the owner:

1. ~~Voidspire's overtime is 66 hours, not 68.~~ **Solved by O6.** Dale forgets to clock out every second Friday; the app now asks him at Monday's clock-in, and both hours come back as requests marked as added afterwards. The replay is 68 hours, as predicted.
2. **The confirmers aren't split evenly:** Jane 69 and Malik 75, Hammad 60 and Tasneem 64, instead of 72 and 62 each. R24 sends every ticket a confirmer logged themselves to the other one, and the cooldown waited 9 times. Points and totals are unaffected; the even split in the baselines was a simplification.
3. **The window is local, not UTC.** Kady, Aelin, Nyra and Elliot start Monday 2 November while it's still Sunday 1 November in UTC. The data is right (O4: a day belongs to the date it starts), so "2 to 29 November" means each person's own dates. Anything counting the window must use the person's date (`date` in TrackTime), not the UTC one.
4. **Half a point lands after the window.** R33's cooldown made a few late-November confirms wait their 3 days, so Jane's 0.375 and Malik's 0.125 arrive on 30 November or later. Over the whole replay, everyone's points still add up to the predicted 542.875 (290.75 + 252.125) exactly: 542.375 inside the window plus 0.5 after it. The baselines should say "confirmed by" a date, not "within" the window.
5. **Checkpoint messages may be noisy.** At the pushed pace, Alaric reaches a new whole point about twice a working day: 44 messages in 4 weeks, 11 of them in week 1. Answered by the owner: keep them. "If it earns everyone money." That sentence became Voidspire's storyline (CHARACTERS.md, Voidspire's Arc).

Played on 2026-11-09 with `.claude-notes/play-character.py`, which rolls a character the way the Randomize button does and plays their 4 weeks through all three apps. First roll: Dr. Alaric Voss. All 18 were then played; none broke a rule.

## How It Scales

- **What grows:** one `Shift` per clock-in, one `Action` per ticket move, one link version per change. Everything else stays small: people, companies, memberships.
- **Indexes to add when it's real:**
  - `organizationId` + `status` on every app collection (the pools and pages);
  - `kind` + `personId` and `kind` + `organizationId` on `PickPage`, and `employeeId` on `TrackTime`;
  - `ticketId` + `at` on `DefineDuties` (a ticket's history);
  - `replacesId` on `PickPage` and `ArchiveAnchors` (the chains).
- **MySQL:** four collections become four tables. The one list, `contractMinutes`, becomes seven columns or a small `contractDays` table.
- **A third company or a second sector** is just more documents. Nothing in the shape assumes two companies or 18 people.

## To Change if Approved

1. `TraLogFin.json` becomes `tralogfin_TEST.json`'s shape, and the testing models (`testing/*.ts`) and the front-end's character pick read memberships instead of the old person fields.

Done on 2026-11-09: PickPage holds people, companies and memberships, so TABLE.md rule 1 is back to its four collections, CHARACTERS.md has Tasneem as co-owner, and GUIDELINES Section 4 has the co-owner rules.

A MySQL copy (`modules/server/MySQL/testing/`) waits until this shape is approved; it's a straight translation thanks to TABLE.md rule 1.
