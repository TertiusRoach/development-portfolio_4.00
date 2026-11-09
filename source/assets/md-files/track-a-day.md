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
| Points from `[ticketing]` next to hours | Side by side, never combined (O5). |

## Restriction Rules (Draft)

Written 2026-11-09 to close the gaps GUIDELINES leaves open. Each one is a draft for the owner to confirm before it goes into GUIDELINES.md.

- **O1. Ignoring leave is never cheaper than answering it.** A leave request made at least **14 days** before it starts, and still unanswered the day before it starts, is approved automatically. A request with less notice that nobody answers before it starts lapses: archived as rejected, without ghost hours. The worker can always ask again.
- **O2. A request can be withdrawn until it's decided.** The worker can withdraw an overtime or leave request any time before a reviewer acts on it. Withdrawing makes no ghost hours and is kept in the history. The hours stay as worked time; they just aren't claimed as overtime. Asking again later doesn't restart the six-month expiry, which always counts from the day the overtime was worked.
- **O3. Decisions only change in the worker's favour.** An approval is final. A rejection can be changed into an approval, once, by the same reviewer or the owner. The ghost hours stay (they're permanent, Section 9) and are marked "later approved", so the record still shows what happened. They stop counting towards the worker's total, but keep counting towards the reviewer's.
- **O4. The ordinary workday is part of the membership.** When an Established worker joins, the owner proposes their contract hours per weekday, and the worker accepts them together with Established status (Section 5's confirmation). Declining the hours declines Established status, so nobody is ever Established without agreed hours. Overtime is any time beyond that day's contract hours. A change needs the worker's acceptance again and never applies to days already worked. Freelancers have no contract hours.
- **O5. Points and hours are shown side by side, never combined.** The same rule as `[ticketing]`'s R7: no points-per-hour, no ranking, no speed score.
