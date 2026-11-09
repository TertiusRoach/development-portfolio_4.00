# Track a Day

`[overtime]` · `TrackTime`. A draft until its edge cases are worked out; see `synchronization-thesis.md`. The rules it follows live in [GUIDELINES.md](../../utilities/document/GUIDELINES.md), Sections 8, 9, 10 and 12; this file is how the loop behaves inside them, and never repeats a rule word for word. (The full copy of GUIDELINES this file used to hold is in commit `f8ad188d`.)

## `<main>` Pages

The outer fullscreen is `elements`, opening with `startingPreview('(vocation)', 1)`.

| Left page       | Centre page  | Right page      |
| --------------- | ------------ | --------------- |
| `(established)` | `(vocation)` | `(freelancing)` |

- **`(established)`:** overtime requests and leave, and the approvals waiting on me if I'm an HoD or the owner.
- **`(freelancing)`:** attendance per company, and what goes on the invoice.
- **`(vocation)`:** the clock. Clock in, clock out, and which company I'm clocked into.

## The Loop

Clocking in and out is the same for everyone. What happens to the time afterwards depends on Vocation.

```
clock in ──► clocked in ──► clock out ──► entry
                 │
                 └── membership ends ──► cut off (archived as worked)

Established entry ──► overtime? ──► request ──► approve ──► approved hours
                                         │
                                         ├──► split ──► part approved, part ghost
                                         ├──► reject ──► ghost hours (worker + reviewer)
                                         └──► 6 months ──► expired ──► ghost hours (worker + owner)

Freelancing entry ──► attendance ──► invoice (never changes the agreed price)
```

| Step | Who | Rule |
| --- | --- | --- |
| Clock in | Any member, one company at a time | Section 8. Sets the company context for `[ticketing]` and `[hyperlink]`. |
| Clock out | The member | The entry is closed. |
| Cut off | The system, when the membership ends | Section 8. Time up to that moment is archived as worked. |
| Request overtime | Established workers | Section 9. The ordinary workday is never overtime. |
| Approve, split or reject | An HoD (Employees only) or the owner | Sections 6 and 9. |
| Expire | The system, 6 months after the overtime was worked | Section 9. Counts as rejected; ghost hours go to the worker and the owner. |
| Request leave | Established workers | Section 6. Same reviewers as overtime; never makes ghost hours. |
| Log attendance | Freelancers | Section 9. A record of presence for the invoice. |

## Ghost Hours

Overtime that someone refused to recognise. The full rules are GUIDELINES Section 9; this is how they show up here.

| When | Ghost hours for | How many |
| --- | --- | --- |
| An HoD or the owner rejects overtime | The worker and the reviewer | The exact rejected duration, for each |
| Overtime is split | The worker and the reviewer | Only the rejected part |
| Overtime goes 6 months without a review | The worker and the owner (never an HoD) | All of it |
| A member is removed, or the company deleted, with overtime pending | The worker and the owner | All of it |
| A rejection is later changed into an approval (O3) | Still recorded, marked "later approved" | Stops counting for the worker, keeps counting for the reviewer |

- **Never for** ordinary contract hours, leave, freelancers, or overtime the worker withdrew (O2).
- **Offline overtime** can be rejected without ghost hours. Ignoring it still expires into ghost hours (GUIDELINES Section 12).
- **Permanent.** Nobody edits or deletes a ghost hour, not even the owner, and settling a dispute outside the app doesn't remove it.
- **Totals count the last 24 months,** dated by the rejection or expiry. Older ones are kept, just not counted.
- **Context, not a verdict.** Ghost hours show patterns; on their own they don't prove anyone did anything wrong.
- **Never combined with points** from `[ticketing]` (O5).

## Predicted Balance

### The Testing Baseline: 4 Weeks

The `[archive]` backend test plays the same 28 days (20 working days, 2 to 29 November 2026) as `[ticketing]`'s baseline, for the same cast, with the schedules in `tralogfin-database.md`. Leave is kept out of the window so both apps count the same days; leave is tested as its own case. Decided with the owner on 2026-11-09.

| 4 weeks | Voidspire (exploitation) | Silverveil (prediction) | Sector |
| --- | --- | --- | --- |
| Established people | 7 | 8 | 15 |
| Contract hours | 1,192 (Jane 232, six at 160) | 1,280 (eight at 160) | 2,472 |
| Overtime asked for | 68 h: Dale, Alaric and Kady 20 each (the push, 1 h a day), Conrad 8 (side fixing, 2 h a week) | 16 h: Elliot, one 4-hour request a week | 84 h |
| Approved | 0 | 8 h | 8 h |
| Rejected (ghost hours now) | 0 | 8 h: Elliot 8, Hammad 8 | 8 h each side |
| **Pending on day 28** | **68 h** | **0** | **68 h** |
| Ghost hours due when it expires (6 months) | 68 h for the workers (20, 20, 20, 8) and 68 h for Jane; Malik 0 | — | 68 h each side |
| Freelancer invoices (one per confirmed ticket) | 24 planned, 20 actual (Daniel hands one back each week) | 24 | 48 planned, 44 actual |

- **Voidspire's bill arrives late, addressed to Jane.** Malik never reviews the Employees' overtime and Jane ignores Conrad's (only she can approve a Manager). Nothing shows for 6 months, then everything expires into ghost hours for the workers and Jane, never Malik (GUIDELINES Section 9). The exploitation looks free inside the 4 weeks, and that's the trap.
- **Silverveil's bill is paid weekly.** Every request is decided the week it's made. Hammad splits each of Elliot's 4-hour requests 2 and 2: his overtime is real, but not all of it is necessary, and both of them carry the difference.
- **Seamus asks for nothing.** He works his contract and stops (the quiet resistance in `log-a-ticket.md`, Two Strategies), so the push never reaches his hours.
- **Freelancers make no overtime and no ghost hours** (GUIDELINES Section 9). Their invoices follow the solutions they delivered: a confirmed ticket is a delivered solution (R8). Prices are agreed per solution, so the test counts invoices, not money.
- **The two apps check each other.** Voidspire's 68 pending hours sit beside its 144 tickets, never combined (O5), and they tell the same story: the extra work was done, and nobody has paid for it yet.

## Messages

Message types are in `synchronization-thesis.md`, Message Types. Which page each one appears on comes later.

| Case | Type | Who sees it | Message |
| --- | --- | --- | --- |
| A reviewer has rejected overtime that can still be changed (O3) | (guidance) | The reviewer and the owner | You rejected **Name**'s overtime. Got it wrong? You can still approve it, once. Their ghost hours stop counting; yours stay. |

## Edge Cases

All already decided in GUIDELINES; listed here so the screens handle each one.

| Case | What happens |
| --- | --- |
| A freelancer tries to clock into a second company | They're told to clock out of the first one. Nothing switches automatically (Section 8). |
| A member is removed while clocked in | The clock-in ends at that moment and the time is archived (Section 8). |
| A member is removed with overtime pending | Closed as rejected; ghost hours go to the worker and the owner who removed them (Section 9). |
| A member is removed with leave pending | Archived as rejected, with no ghost hours (Section 9). |
| The company is deleted | The same as removing every member at once (Section 10). |
| An HoD loses HoD status with requests waiting | The requests move to the remaining HoDs and the owner (Section 6). |
| A reviewer ignores a request | It expires after 6 months and still costs ghost hours. Ignoring is never cheaper than answering (Section 9). |
| Overtime was logged offline | A reviewer may reject it without ghost hours. Ignoring it still expires as ghost hours (Section 12). |
| An offline entry overlaps another entry, or falls after the membership ended | Dropped when the device reconnects (Section 12). |
| The owner logs overtime | Approved automatically (Section 4). |
| Established changes to Freelancing | The membership and the clock-in carry on (Section 8). |
| Ghost hours older than 24 months | Kept, but no longer counted (Section 9). |
| Nobody answers a leave request | Approved automatically on the day before it starts, if it was asked for with enough notice; otherwise it lapses (O1). |
| A worker changes their mind about a request | They withdraw it before it's decided. No ghost hours (O2). |
| A reviewer wants to undo a decision | Only a rejection can be changed, and only into an approval (O3). |
| How long is an ordinary workday? | Whatever the worker's contract says, agreed by both sides (O4). |
| A night shift crosses midnight | It belongs to the day it started; overtime is anything past the contract's end (O4). |
| The co-owner asks for overtime or leave | The founder approves it. Only the founder's own requests approve themselves (GUIDELINES Section 4, Co-owners). |
| Overtime expires at a company with two owners | The ghost hours go to the worker and the owner whose shift it was worked in (GUIDELINES Section 4, Co-owners). |
| Points from `[ticketing]` next to hours | Side by side, never combined (O5). |

## Restriction Rules (Draft)

Written 2026-11-09 to close the gaps GUIDELINES leaves open, and confirmed by the owner the same day: O1, O2 and O4 as written, O3 when the reversal conflict was settled, O5 as the twin of `[ticketing]`'s R7. They go into GUIDELINES.md next.

- **O1. Ignoring leave is never cheaper than answering it.** A leave request made at least **14 days** before it starts, and still unanswered the day before it starts, is approved automatically. A request with less notice that nobody answers before it starts lapses: archived as rejected, without ghost hours. The worker can always ask again.
- **O2. A request can be withdrawn until it's decided.** The worker can withdraw an overtime or leave request any time before a reviewer acts on it. Withdrawing makes no ghost hours and is kept in the history. The hours stay as worked time; they just aren't claimed as overtime. Asking again later doesn't restart the six-month expiry, which always counts from the day the overtime was worked.
- **O3. Decisions only change in the worker's favour.** An approval is final. A rejection can be changed into an approval, once, by the same reviewer or the owner. The ghost hours stay (they're permanent, Section 9) and are marked "later approved", so the record still shows what happened. They stop counting towards the worker's total, but keep counting towards the reviewer's.
- **O4. The ordinary workday is part of the membership.** When an Established worker joins, the owner proposes their contract hours per weekday, and the worker accepts them together with Established status (Section 5's confirmation). Declining the hours declines Established status, so nobody is ever Established without agreed hours. Overtime is any time beyond that day's contract hours. A change needs the worker's acceptance again and never applies to days already worked. Freelancers have no contract hours. The contract also sets when the day starts (`contractStartsAt`, local time), and a working day belongs to the date it starts: Seamus's Thursday 22:00 to Friday 06:00 is Thursday's contract day, and overtime is anything after 06:00 (owner, 2026-11-09). See `tralogfin-database.md`, The Cast's Schedules.
- **O5. Points and hours are shown side by side, never combined.** The same rule as `[ticketing]`'s R7: no points-per-hour, no ranking, no speed score.
