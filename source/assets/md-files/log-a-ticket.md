# Log a Ticket

`[ticketing]` · `DefineDuties`. A draft until its edge cases are worked out; see `synchronization-thesis.md`. The permissions it follows come from [GUIDELINES.md](../../utilities/document/GUIDELINES.md), Sections 6, 8 and 10; this file is how the loop behaves inside them.

Built from a scan of the original Log a Ticket (6.13.1), kept read-only in `source/utilities/vendors/log-a-ticket/`. Its loop is kept; its bugs are listed at the bottom so they aren't copied.

## `<main>` Pages

The outer fullscreen is `elements`, opening with `startingPreview('(position)', 1)`.

| Left page   | Centre page  | Right page   |
| ----------- | ------------ | ------------ |
| `(manager)` | `(position)` | `(employee)` |

- **`(employee)`:** my tickets. The ones I logged, and the ones assigned to me. Everyone sees this page.
- **`(manager)`:** the company's pending pool, the team's assigned tickets and the deleted tickets. Everyone can see the pool and claim from it; only Managers, HoDs and the owner see the assign, take, delete and restore buttons; everyone sees take on an overdue ticket (R32).
- **`(position)`:** logging a new ticket, and the points count.

### Scores

Every page carries a score badge, the recipe of the original's `countTickets(status, person)`: a number beside the heading, counted by sender on "what I asked for" and by receiver on "what I'm doing" (owner, 2026-11-09).

| Page | Badge | Counted by |
| --- | --- | --- |
| `(manager)` | Pending tickets, the whole company's pool. The same number the forecast divides | Status only |
| `(employee)` | My Assigned tickets, out of 8 | Receiver |
| `(position)` | My points, with my ghost points beside them, never added together (R7) | The `Action` documents |

- Names in a list carry the same badge as the original's sidebar: each person's Assigned count, so a Manager sees who's near the cap before giving anything.

## The Loop

Four states. Every state has a way out and a way back, so no ticket can get stuck. The one deliberate end: a ticket deleted a second time is archived for good (R13).

```
          log ─────────────┐
                           ▼
   ┌──── restore ──── Pending ◄──── release ────┐
   │                   │  ▲                     │
   │        claim/assign  │                     │
   │                   ▼  │                     │
Deleted ◄── delete ── Assigned ── resolve ──► Resolved
                        ▲  ⟲ take                │
                        └─── reopen / decline ───┘
```

| From     | Action     | To       | Who                                                    | Note           |
| -------- | ---------- | -------- | ------------------------------------------------------ | -------------- |
| —        | `log`      | Pending  | Any member                                             | —              |
| —        | `log`      | Assigned | Manager, HoD or owner, picking who gets it             | —              |
| Pending  | `edit`     | Pending  | The sender                                             | —              |
| Pending  | `claim`    | Assigned | Any member except the sender (R5); the receiver is themself | —         |
| Pending  | `assign`   | Assigned | Manager, HoD or owner; to any member except the sender | —              |
| Pending  | `delete`   | Deleted  | The sender, a Manager, an HoD or the owner             | Required       |
| Assigned | `resolve`  | Resolved | The receiver                                           | Optional       |
| Resolved | `confirm`  | Resolved | The HoD whose turn it is (R33) or the owner, never for their own completion | — |
| Resolved | `decline`  | Assigned | Whoever may confirm it (R35); back to the fixer | Required |
| Assigned | `release`  | Pending  | The receiver (R6), a Manager, an HoD or the owner      | Optional       |
| Assigned | `take`     | Assigned | Manager, HoD or owner; to themself or any member except the sender | —  |
| Assigned | `take`     | Assigned | Any member except the sender, only when the ticket is overdue (R32); the receiver is themself | — |
| Assigned | `delete`   | Deleted  | Manager, HoD or owner                                  | Required       |
| Resolved | `reopen`   | Assigned | The sender or the fixer (R3), a Manager, an HoD or the owner | Required |
| Deleted  | `restore`  | Pending  | Whoever's side deleted it (R1); first deletion only (R13) | —           |

Clock-in applies to every action, as GUIDELINES Section 8 says: a non-owner must be clocked into the ticket's company, and the owner never needs to be.

### Three Rules That Hold the Loop Together

1. **Pending means nobody has it.** Every way into Pending (`log`, `release`, `restore`) clears the receiver. A Pending ticket always sits in the pool.
2. **The sender never receives their own ticket.** You can't claim it, and nobody can assign it to you. The owner is the one exception (R5).
3. **Nothing is overwritten, only added.** Every action adds one `Action` document (The Record). Old dates and notes stay where they were.

## Points

The points calculation, set by the owner on 2026-11-09. There's no rating: a good Manager balances easy jobs against hard ones when they assign, so the count stays honest over time.

| Action | Who it counts for | Points | Ghost points |
| --- | --- | --- | --- |
| `log` a ticket | The sender | — | +0.125 |
| `claim` a ticket | The receiver | 0 | — |
| `resolve`, then an HoD or the owner `confirm`s it | The person who resolved it | +1 | — |
| The same `confirm` | The sender | +0.75, replacing that ticket's 0.125 ghost points | −0.125 |
| Someone else `delete`s the ticket, the first time only (R13) | The sender | +0.25, at most 0.25 a day (R19); replaces that ticket's 0.125 ghost points | −0.125 |
| The same deletion | The deleter | — | +0.25 |
| A Manager deletes an Assigned ticket held 24 hours or more | The receiver | +0.125 | — |
| The same deletion | The deleter | — | +0.125 more (0.375 in total) |
| A resolve goes 7 days without a `confirm` | Everyone above | It confirms itself, and counts as confirmed | — |
| The same self-confirm | The owner | — | +0.125 (lost profit) |
| An HoD or the owner `confirm`s within 7 days | The one who confirms | +0.125 | — |
| The same timely confirm | The owner (on shift) | +0.125 (profit, R34) | — |
| An HoD or the owner `decline`s a resolve (R35) | Everyone | 0 | — |
| A deletion marked as junk (R36) | The sender | 0; the ticket's 0.125 ghost points stay | — |
| The same junk deletion | The deleter | — | +0.25, as any deletion |
| A Manager, HoD or the owner takes a ticket that isn't overdue (R37) | The holder | +0.125 | — |
| The same take | The boss | — | +0.125 |
| `restore` a ticket within 30 days of its deletion | The person who restores it | 0 | — |
| `restore` a ticket more than 30 days after its deletion | The person who restores it | −1 | — |
| `restore` a ticket an Employee deleted, as a Manager | The Manager who restores it | 0, instead of −1 | +0.25 |

- **Nothing counts until it's confirmed.** A resolve waits for an HoD or the owner to `confirm` it. Nobody confirms their own completion.
- **Asking pays slightly less than fixing.** A real ticket turns the sender's 0.125 ghost points into 0.75 points; the person who fixed it gets 1. It leans slightly towards the employee: logging a real problem is rewarded, and fixing it stays worth the most.
- **The first confirmed completion earns the point, for good (R2).** Reopening, taking or deleting the ticket afterwards changes nothing, and confirming it a second time earns nothing.
- **Ghost points always turn into points.** The amount says how useful the ticket was: 0.75 when it's confirmed, 0.25 when someone else deletes it (it still informed someone), at most 0.25 a day. Deleting your own ticket turns nothing into points.
- **Points never go below 0 (R9).** A point that would take someone below zero becomes 1 ghost point instead.
- **Restoring has a 30-day grace (R10).** Within 30 days of the deletion it's free. After that it's a deliberate act, and it costs a point.
- **Silence confirms (R8).** A resolve nobody confirms within 7 days confirms itself, and the owner gets 0.125 ghost points for it: lost profit. An HoD who confirms in time gains 0.125 points instead. Doing the job pays; not doing it costs. Ignoring a ticket is never cheaper than answering it, and waiting it out is never free.
- **Overdue (R11, R12):** a ticket is overdue 7 of the worker's contract days (O4) after it was assigned or claimed. For a freelancer, those 7 days start at their first clock-in after the assignment.
  - **At 8 overdue,** the person can't be assigned or claim anything new. They get a (guidance) message: "Finish your overdue tickets, oldest first." The Manager gets a (helper) message.
  - **Sitting at the cap,** every overdue ticket a Manager assigned adds 0.125 ghost points to that Manager, once per ticket (R12). The worker is never charged for being overloaded, and never paid for being late either.
  - **The owner can lower the cap of 8, never raise it.** Lowering only protects workers, and every number above follows the cap, so nothing else changes.
- **Counted in eighths.** Every number is a multiple of 0.125, so it's stored as a whole number of eighths: 0.125 is 1, 0.25 is 2, 0.75 is 6 and 1 point is 8. Nothing ever needs rounding, and totals land on whole numbers often (the same idea as cents in TABLE.md Section 6).
- **Checkpoints at every whole number.** Reaching 1, 2, 3 points (and on) shows a message. Round numbers deserve a moment. Only on the way up, and only for a new all-time high: dropping below a whole number and climbing back past it shows nothing, so nobody farms the message.
- **Points count forever.** Only ghost points have the 24-month window. When in doubt, it leans towards the worker.
- Points are **counted, never stored.** They're read from the `Action` documents, which are only ever added, so they can't drift.
- Points belong to the company. A freelancer has a separate count in every company.
- **Points never turn into money** (owner, 2026-11-09). They're recognition: money moves only through approved overtime and freelancer invoices (`track-a-day.md`). A loophole in points steals recognition, never pay.
- **Designed around one Manager for every two Employees,** the shape of the test cast in `TraLogFin.json` (Voidspire 2 Managers to 4 Employees, Silverveil 2 to 5, plus each owner). A Manager assigns at most 2 tickets a day. Each person's 8 open tickets split in half: 4 given by their Manager (R17), 4 they choose by claiming. It's the shape the numbers assume, not a rule a company must follow.
- **Two views, same maths (R22).** Established employees see the established team's points and ghost points. A freelancer sees their own beside the team's. Only the owner sees a freelancer's numbers too: the highest of the high and the lowest of the low, looking at the same page. Now that's transparency.

### The Forecast

Managers like a number that turns out to be right. The `(manager)` page shows a (helper) message:

> At this pace, your team clears its pool in **N** days.

**N** = Pending tickets ÷ the people who can take one today (not on leave, below the cap of 8), rounded up. It holds because R17 keeps assignments to one a day per person. Every ghost point a Manager avoids makes the forecast truer. When nobody can take a ticket today (everyone is at the cap or on leave), there's no **N**, and the message says so instead:

> Nobody can take a ticket today. Help your team clear the oldest first.
- **Points sit beside hours, never against them (R7).**
- A removed member keeps the points from tickets they resolved; those tickets are archived with a historical reference to them.

## Predicted Balance

A forecast of one healthy working week for the 18 characters in `TraLogFin.json`, built the way `[overtime]` is: every number traced to a rule, nothing guessed. Assumed: Employees fix one ticket a day (the R17 pace), freelancers take their 2 a week per company (R21), Managers assign and confirm rather than fix, and every confirmation is on time.

| Per week | Voidspire | Silverveil |
| --- | --- | --- |
| People | Owner, 2 Managers (1 HoD), 4 Employees, 3 freelancers | Owner, 2 Managers (1 HoD), 5 Employees, 3 freelancers |
| Manager to Employee ratio | 1 : 2 | 1 : 2.5 |
| Tickets fixed by Employees | 20 | 25 |
| Tickets fixed by freelancers | 6 | 6 |
| Tickets confirmed | 26 | 31 |
| Confirmations per confirmer (owner + HoD) | 13 (2.6 a day) | 15.5 (3.1 a day) |
| Points to fixers (1 each) | 26 | 31 |
| Points to senders (0.75 each) | 19.5 | 23.25 |
| Points to confirmers (0.125 each) | 3.25 | 3.875 |
| Owner's profit (0.125 each, R34) | 3.25 | 3.875 |
| Freelancer streaks (0.5 each, once running) | 1.5 | 1.5 |
| **Points created** | **53.5** | **63.5** |
| Logs needed to keep the pool level | 26, about 0.5 per person a day | 31, about 0.6 per person a day |
| Permanent ghost points | 0 | 0 |
| Forecast (R17 pace) | About 1 day | About 1 day |

- **A healthy company makes no permanent ghost points.** Every 0.125 from logging turns into points when it's confirmed. Ghost points only build up from deletions, lapses and overload, which is exactly what they're meant to show.
- **The freelancers are about a fifth of the work** (6 of 26, 6 of 31): a top-up, never a replacement.
- **The bottleneck is confirming, not fixing.** One confirmer comfortably handles about 4 a day, which is about 4 Employees at the R17 pace. Add an HoD for every 4 Employees, or the owner starts collecting lost profit (R8).
- **Growth comes in threes.** One Manager and two Employees keeps the 1 : 2 shape. 18 people is 6 of those units, which divides evenly by 2, 3 and 6, so a sector of 18 splits cleanly into two companies or three teams.
- **The one number that can run away is logging.** R18 allows 4 logs a day, four times the fixing pace. The pool would then grow, and the forecast would show it at once. The 0.125 ghost points sitting on every unconfirmed log keep that in check without a lower cap.

### The Testing Baseline: 4 Weeks

The `[archive]` backend test plays 28 days (20 working days), **Monday 2 November to Sunday 29 November 2026**, from an empty testing database, so every streak starts at 0.125 and climbs 0.125, 0.25, 0.5, 0.5: 1.375 per freelancer per company, not the 2 a running streak would give (owner, 2026-11-09).

| 4 weeks | Voidspire | Silverveil | Sector of 18 |
| --- | --- | --- | --- |
| Tickets logged and fixed by Employees | 80 | 100 | 180 |
| Tickets logged and fixed by freelancers | 24 | 24 | 48 |
| **Tickets logged** | **104** | **124** | **228** |
| Confirmations per confirmer (owner + HoD) | 52 | 62 | — |
| Points to fixers, senders and confirmers | 195 | 232.5 | 427.5 |
| Owner's profit (0.125 each, R34) | 13 | 15.5 | 28.5 |
| Freelancer streaks (3 × 1.375) | 4.125 | 4.125 | 8.25 |
| **Points created** | **212.125** | **252.125** | **464.25** |
| Permanent ghost points | 0 | 0 | 0 |

- **A 31-day month** has 21 to 23 working days, depending on the weekday it starts: +4 to +12 tickets at Voidspire and +5 to +15 at Silverveil, plus whatever the rolling freelancer weeks (R21) allow in the 3 extra days.

### Two Strategies (Draft)

The owner's test scenario (2026-11-09): both companies share one pot of earnings, **$10,000,000** for lifetime growth, and play it differently under the same rules. **Silverveil plays methodical prediction:** exactly the baseline above. **Voidspire plays profitable exploitation** at its edge: **160** tickets, as many as its two confirmers can handle at about 4 a day each. One more, and confirms start lapsing. Voidspire wins. It's bad, and that's what keeps the story going.

In the test, earnings follow confirmed tickets, a model for the test only. TraLogFin never stores revenue.

| 4 weeks | Voidspire planned | Voidspire actual | Silverveil |
| --- | --- | --- | --- |
| Employees | 128 (32 each, 1.6 a day) | 116 (Seamus does 20) | 100 |
| Conrad fixing on the side | 8 (2 a week) | 8 | 0 |
| Freelancers | 24 | 20 (Daniel does 4) | 24 |
| **Tickets confirmed** | **160** | **144** | **124** |
| Share of the pot | 56.34%: $5,633,802.82 | **53.73%: $5,373,134.33** | 46.27%: $4,626,865.67 |
| Confirmations per confirmer | 80 (4 a day, the edge) | 72 (3.6 a day) | 62 (3.1 a day) |
| Points created | 324.125 | 290.75 | 252.125 |
| Permanent ghost points | 0 | 0 | 0 |

- **Why it works:** nothing Voidspire does breaks a rule. Assignments stop at 1 a day (R17), but claiming is free up to 8 open (R14), so a pushed Employee claims more.
- **Why it still leans towards the employee:** every extra ticket pays the person who fixed it 1 point and the sender 0.75. Voidspire's Employees end with 32 points from fixing against Silverveil's 20, and the history shows who carried the extra work.
- **Where it breaks:** past 160, confirms lapse. Every lapse turns Jane's 0.125 profit into 0.125 lost profit (R8, R34). Push someone to the cap with overdue work, and Conrad's or Malik's ghost points grow (R12), a quarter landing on Jane (R28).

**The quiet resistance (lore, owner 2026-11-09).** Daniel and Seamus work against the push in the least obvious way possible: they use their rights, nothing more.

- **Seamus works his contract.** One ticket a night, the pace R17 sets. Nobody can assign him more, and claiming above it is a choice he never makes: 20 instead of 32. He also logs every real infrastructure problem he finds, up to 4 a day (R18). If a Manager deletes them to keep the board clean, the Manager pays 0.25 ghost points each and Seamus earns 0.25 for informing (R13). If they stay, someone has to fix them. (Not counted in the table above.)
- **Daniel hands one back.** Each week he uses R21's free release on one of his two Voidspire tickets, so Voidspire gets 4 instead of 8. His streak there never starts, and he doesn't want it.
- **Neither breaks a rule.** The record shows only rights being used, which is exactly why it works. Voidspire still wins, at 53.73% instead of 56.34%.
- **Still open:** their storyline may need its own data later (owner: "that might need a database on its own").

### The Inside Job (Draft)

The owner's lore (2026-11-09): **Zuberi Thorne and Danish Copeland are secretly skimming Silverveil.** It plays as an exploit case on top of the baseline, not inside it. If the prediction holds, they struggle.

| Technique | What stops it | 4 weeks, predicted |
| --- | --- | --- |
| Ping-pong junk: Zuberi logs, Danish fixes, and the reverse | Hammad and Tasneem decline it (R35); a second opinion comes from the other owner | 0 points for either. Each junk log keeps its 0.125 ghost points for the sender |
| Junk for Elliot to delete, one a day | Elliot marks it as junk (R36) | 0 points for Zuberi, 0.125 ghost each. Elliot pays 0.25 each, the price of deleting loudly. Leaving junk in the pool costs him nothing |
| The same pair, again and again | R33's cooldown waits out 3 days; R27 tells the owners | Slowed to one shared ticket per confirmer every 3 days |
| Padding overtime: clocked in, doing nothing | Silverveil reviews weekly; Hammad splits or rejects | Rejected padding is ghost hours for them and the reviewer. The hours sit beside their tickets (O5), in the open |
| The offline clock trick | Offline overtime is rejected without ghost hours (GUIDELINES Section 12) | Nothing |
| Danish's policy to wipe ghost hours | Ghost hours are permanent, even for the owner | Nothing |
| Pointing a company link at a side business | Employees can't change company links | Nothing |

- **What it would have cost without R35 and R36:** every junk ticket paid the pair 1.75 points, paid the owner R34's profit for confirming it, and fighting it cost the honest owner ghost points. One junk ticket a day for Elliot to delete was worth 7 free points to Zuberi over 4 weeks.
- **What it costs now:** the pair earns nothing from junk, and every attempt leaves ghost points with their own names on them. Silverveil's 124 tickets and its owners' profit don't move.

## Ghost Hours

`[ticketing]` doesn't count hours, so its ghost hours are **ghost points**: a record of tickets asked for but not yet proven, and of deletions someone had to overrule.

| When | Ghost points for | How many |
| --- | --- | --- |
| A ticket is logged | The sender | +0.125 |
| An HoD or the owner confirms its completion | The sender | −0.125, turned into 0.75 points |
| Someone else deletes the ticket | The sender | −0.125, turned into 0.25 points (at most 0.25 a day) |
| The same deletion | The deleter | +0.25, one to one with the sender's points |
| The same deletion, of an Assigned ticket held 24 hours or more | The deleter | +0.125 more, one to one with the receiver's points |
| Every 0.5 ghost points a Manager earns | The owner | +0.125, a quarter (R28) |
| A Manager restores a ticket an Employee deleted | The Manager | +0.25 |
| A point would take someone below zero | That person | +1, instead of the negative point |
| Someone else deletes the ticket and marks it as junk (R36) | The sender | The ticket's 0.125 stays, never turned into points |
| A worker sits at the cap of 8 with overdue tickets | The Manager who assigned each overdue one | +0.125 each, once |
| A resolve confirms itself after 7 days | The owner | +0.125 (lost profit) |
| Someone other than the sender deletes a ticket a second time, archiving it | The deleter | +0.5 |

- **Everyone in the company can see them.** That's the point: buried tickets and overruled deletions happen in the open. The one exception: a freelancer's own ghost points are seen only by them and the owner (R22). A Manager's ghost points from a freelancer's tickets stay public.
- **Reading them between two people.** Count the deletions each way over 30 days. Symmetry tells you more than round numbers:

  | Between two people (30 days) | Probably |
  | --- | --- |
  | A few each way, roughly even | Housekeeping, or a mutual prank |
  | 5 or more (1.25+), roughly even | A feud. Worth a conversation |
  | 5 or more, all one way | A power problem. The ghost points sit with the deleter (R20) |
- **Permanent, like ghost hours.** Nobody edits or deletes a ghost point. They're counted from the `Action` documents, never stored.
- **Totals count the last 24 months,** exactly like ghost hours in `[overtime]`, dated by the event that made them. Older ghost points are kept, just not counted. The owner's quarter (R28) follows the same window, so a reformed owner gets the same redemption arc as a worker.
- **Context, not a verdict.** A pile of unconfirmed tickets can mean nobody's confirming, not that the sender is wrong.
- **Never combined** with points or hours (R7). Ghost points and ghost hours sit side by side, never added together.

## Messages

Every case that needs a message, by type (see `synchronization-thesis.md`, Message Types). Wording first; the logistics come later.

| Case | Type | Who sees it | Message |
| --- | --- | --- | --- |
| The forecast | (helper) | Managers | At this pace, your team clears its pool in **N** days. |
| A worker reaches the cap of 8 | (helper) | Their Manager | **Name** is at 8. Help them clear the oldest first before anything new goes their way. |
| The worker at the cap | (guidance) | Employee, freelancer | You've got 8 on your plate. Finish your overdue tickets, oldest first. You've got this. |
| Claiming at 8 open tickets (R14) | (guidance) | Employee, freelancer | Your hands are full. Solve, release or delete one before you grab another. |
| Assigning a second ticket within 24 hours (R17) | (helper) | Managers | **Name** already got one today. One a day keeps them sharp. Try again tomorrow. |
| A Manager already holds 4 of someone's tickets (R17) | (helper) | Managers | You've given **Name** four. Let them breathe, or ask another Manager. |
| A fifth log within 24 hours (R18) | (guidance) | Employee, freelancer | Four today is plenty. Save the next one for tomorrow. |
| A freelancer is full this week (R21) | (helper) | The owner and Managers | **Name** is unavailable this week. Owners and Managers, yin and yang: one keeps the lights on, the other keeps the work moving. Plan around it together. |
| The same, for the freelancer | (guidance) | Freelancer | That's your two for this week at **Company**. Finish them strong, and next week opens fresh. |
| Someone else deletes your ticket (R13) | (guidance) | Employee, freelancer | **Name** deleted your ticket. You still get 0.25 for speaking up. Asking is never wasted. |
| Before deleting someone else's ticket (R13) | (helper) | Managers | Deleting this costs you 0.25 ghost points, and it's on the record. Sure? |
| Before an archiving deletion (R13) | (helper) | Managers | This deletes it for good. It costs you 0.5 ghost points. Sure? |
| Before restoring after 30 days (R10) | (guidance) / (helper) | Whoever restores | It's been over 30 days. Bringing this back costs you a point. Worth it? |
| A resolve waiting for confirmation, day 5 of 7 (R8) | (helper) | HoDs, the owner | Two days left to confirm **Ticket**. Confirm it and earn 0.125, or it confirms itself and the owner takes the lost profit. |
| A ticket confirmed itself (R8) | (helper) | The owner | **Ticket** confirmed itself. That's 0.125 lost profit. Nudge your HoDs. |
| Reaching a whole number of points | (guidance) / (helper) | The person | **3** points. Round numbers look good on you. |
| The same trio, 5 times in 30 days (R27) | (helper) | The owner only | Same three names, five times this month: **A** logged, **B** fixed, **C** confirmed. Could be nothing. Have a quiet word, no drama. |
| A coworker rescues your overdue ticket (R32) | (guidance) | Employee, freelancer | **Name** took **Ticket** off your plate. One less to worry about. |
| A resolve is yours to confirm (R33) | (helper) | The HoD whose turn it is | **Ticket** is yours to confirm. Do it within 7 days and earn 0.125. |
| A resolve is declined (R35) | (guidance) | The fixer | **Name** says **Ticket** isn't fixed yet: "*note*". Have another go, or release it. |
| A deletion is marked as junk (R36) | (helper) | The owner | **Name** marked **Ticket** as junk. |
| The freelancer's streak (R26) | (guidance) | Freelancer | One more confirmed ticket this week keeps your streak at **Company** alive. |

## The Record

`DefineDuties` holds two kinds of document, told apart by `kind`, the way `[hyperlink]` keeps links and bookmarks in `ArchiveAnchors`. Both follow TABLE.md Section 6: every field present, `null` when unknown, text IDs, UTC dates, status as a field, no lists of objects (owner, 2026-11-09).

One `Ticket` document per ticket. Its `status` and `receiverId` change; nothing else about it does after it's logged, except an `edit` by the sender:

```json
{
  "_id": "6ae1b2c4898694d607cf2001",
  "kind": "Ticket",
  "organizationId": "6ae0aa00898694d607cf4001",
  "status": "Assigned",
  "subject": "Printer on floor two is offline",
  "description": "It shows a paper jam, but there's no paper in it.",
  "senderId": "6ae06f3e898694d607cf1577",
  "receiverId": "6ae068b8898694d607cf1574",
  "confirmerId": null,
  "ticketId": null,
  "action": null,
  "byId": null,
  "fromId": null,
  "toId": null,
  "at": null,
  "note": null,
  "createdAt": "2026-11-09T08:12:00Z",
  "updatedAt": "2026-11-09T09:40:00Z",
  "archivedAt": null
}
```

One `Action` document per action, pointing at its ticket through `ticketId`. Dale's log and Jane's claim above are two of them:

```json
{
  "_id": "6ae1b2c4898694d607cf2003",
  "kind": "Action",
  "organizationId": "6ae0aa00898694d607cf4001",
  "status": null,
  "subject": null,
  "description": null,
  "senderId": null,
  "receiverId": null,
  "confirmerId": null,
  "ticketId": "6ae1b2c4898694d607cf2001",
  "action": "claim",
  "byId": "6ae068b8898694d607cf1574",
  "fromId": null,
  "toId": "6ae068b8898694d607cf1574",
  "at": "2026-11-09T09:40:00Z",
  "note": null,
  "createdAt": "2026-11-09T09:40:00Z",
  "updatedAt": null,
  "archivedAt": null
}
```

- **`organizationId` points at the company** (a `Company` in `PickPage`), never at its name. The full database, every collection and field, is in `tralogfin-database.md`.
- **`confirmerId` is whose turn it is to confirm** (R33), set at `resolve`. **`fromId` and `toId`** are both sides of an `assign`, `claim` or `take`.
- **Actions are only ever added.** An `Action` is never edited or removed, so the history can't be rewritten. Following `ticketId` lists a ticket's whole history in order of `at`. In MySQL nothing changes: `Ticket` and `Action` become two flat tables.
- **Both are written together.** The guarded ticket update (`{ _id, status: … }`) and its `Action` go in one transaction, so a ticket never moves without a record of who moved it, and a record never exists for a move that didn't happen.
- **`at` is always the server's time,** never the device's (R29).
- **A removal is an action too.** When the system releases a ticket because a member was removed, `byId` is the owner who removed them.
- **`edit` stores the old text in its note,** so the sender can't quietly rewrite what was asked.

## Edge Cases

| Case | What happens |
| --- | --- |
| Two people claim the same ticket at once | The update only goes through while the ticket is still Pending (`{ _id, status: "Pending" }`). The first claim wins; the second person is told it's taken. The same check guards every action. |
| A Manager assigns to a freelancer who isn't clocked in | The assignment works. Resolving or releasing waits for the freelancer to clock in (GUIDELINES Section 8). |
| The receiver is removed from the company | Their Assigned tickets are released to the pool. Their Resolved tickets and points stay, archived (GUIDELINES Section 10). |
| The sender is removed from the company | Their tickets stay in the loop. Nobody can `edit` them any more; Managers, HoDs and the owner can still delete, restore or reopen them. |
| A ticket is reopened, but its receiver has left | It goes to Pending instead of Assigned, with the receiver cleared. |
| A worker deletes their own account | Treated as removal from every company at once, as above. |
| A Manager is demoted to Employee | The tickets they assigned stay assigned. They lose assign, take (except an overdue rescue), delete and restore immediately. |
| A freelancer belongs to two companies | They only see, and act on, the tickets of the company they're clocked into. |
| The company is deleted | Every ticket is archived in whatever state it's in. There's no pool and no actions. |
| The device is offline | Tickets are read-only from the cache. Nothing is queued for later (GUIDELINES Section 12). |
| The same ticket is resolved, reopened and resolved again | Still one point, for whoever's completion was confirmed first (R2). |
| A ticket is resolved but nobody confirms it | No points yet. The sender keeps the 0.125 ghost points until it's confirmed. |
| An HoD resolves a ticket themself | Another HoD or the owner confirms it. Nobody confirms their own. |
| An HoD never confirms a resolved ticket | It confirms itself after 7 days (R8). |
| Someone restores their own deletion an hour later | Free; it's within 30 days (R10). |
| A new hire restores a ticket after 30 days, with no points yet | They stay at 0 and get 1 ghost point instead (R9). |
| A Manager keeps assigning to one person | One a day, 8 open at most (R17). Once the worker is at the cap, every overdue ticket that Manager assigned costs them 0.125 ghost points (R12). |
| A freelancer is assigned a ticket during a quiet week | It doesn't start ageing until they clock in (R11). |
| Two coworkers log tickets and wait 7 days instead of asking an HoD | It confirms itself, and the owner gets 0.125 ghost points each time (R8). |
| A ticket is deleted, restored and deleted again | Archived for good. The sender's informing points came at the first deletion only (R13). |
| The sender reopens a ticket on day 5 of its 7 | No self-confirm. It isn't fixed until it's fixed (R8). |
| A Manager deletes, restores and deletes again to bury a ticket | It's archived: 0.25 ghost points for the first deletion and 0.5 for the second (R13). |
| A Manager assigns 10 tickets to one person in a morning | One gets through. The next can be assigned 24 hours later (R17). |
| Two Managers each want to give one person 5 tickets | Each Manager can hold 4 of that person's open tickets at most; the 8 in total still applies (R17). |
| A Manager deletes an Employee's ticket | The Employee gains 0.25 points, the Manager gains 0.25 ghost points (R13). |
| An Employee logs 4 junk tickets a day to farm deletions | At most 0.25 points a day, against 0.5 ghost points for logging them. Four days of junk never beats one real fix (R19). |
| Someone logs 4 tickets and deletes them all | No points, and their 4 logs for the day are used up (R18). |
| A freelancer at Voidspire and Silverveil uses both tickets at Voidspire this week | Silverveil can still give them 2. Each company gets its own 2 a week (R21). |
| Silverveil tries to assign to a freelancer who's full | Its owner and Managers see "unavailable", never why. The freelancer gets a (guidance) message (R21). |
| An established employee looks for a freelancer's ghost points | They can't see them. Only the freelancer and the owner can (R22). |
| A freelancer offers to pay to see the company's stats | Not possible. Paid never buys a worker permission (R22). |
| A Manager deletes a ticket, then is demoted | They still pay the Manager's price for that deletion (R23). |
| An HoD logs a ticket and confirms its fix | Not allowed. Another HoD or the owner confirms it (R24). |
| A Manager deletes a ticket someone was halfway through | The receiver gets 0.125 if they held it for 24 hours or more; the Manager pays 0.375 ghost points in total (R25). |
| A sender misclicks delete, restores, and then a Manager deletes it | The sender's undone deletion doesn't count, so it's a first deletion: 0.25 each side, still restorable (R13). |
| The same three people keep pushing tickets through together | The owner gets a quiet (helper) message after 5 times in 30 days (R27). |
| A Manager collects ghost points | A quarter of each one lands on the owner too, as it happens (R28). |
| The first deletion by someone else is also the second deletion | It archives the ticket. The sender still gets their 0.25 for informing; the deleter pays 0.5 (R13). |
| Someone claims 20 tickets at once | They can't. Claiming stops at 8 open tickets (R14). |
| A worker goes on approved leave holding tickets | Their tickets stop ageing until they're back (R15). |
| A worker releases an overdue ticket to clear their count | Allowed: it gives the work back (R16). |
| Two coworkers log easy tickets for each other | Nothing counts until an HoD or the owner confirms it, and the history shows who logged what. |
| A Manager deletes a ticket and the sender keeps restoring it | Can't happen: only Managers, HoDs or the owner can restore what they deleted (R1). |
| An Employee deletes their ticket and a Manager wants it back | The Manager can restore it, for 0.25 ghost points instead of a point (R1). |
| A Manager reopens a resolved ticket and deletes it to take the point | The point stays; it was earned at the first confirmed completion (R2). |
| A sender keeps reopening the same ticket | After two reopens, only a Manager, an HoD or the owner can reopen it (R3). |
| The receiver clocks out while holding a ticket | It stays theirs. Managers see a "not clocked in" mark beside it and can take it as usual (R4). |
| The owner is the only person in the company | They can claim their own tickets, for no point (R5). |
| A part-timer works 2 days a week | At most 2 assignments a week, one per contract day, and overdue counts those days only (R11, R17). |
| Characters in Canada and Japan share a deadline | Every window is counted in hours from server time, so time zones never matter (R29). |
| Jane logs a ticket, Malik (the only HoD) fixes it | Nobody eligible is left, so Jane may confirm it: she keeps her 0.75, not the 0.125 (R24). |
| The only HoD is on leave when a resolve comes in | The owner may confirm their own logged ticket; anyone else's they confirm as usual. Waiting it out still costs the owner lost profit (R8, R24). |
| Everyone is at the cap or on leave | The forecast says nobody can take a ticket today, instead of dividing by zero. |
| Someone loses a point to a restore and climbs back past 3 | No second checkpoint message; only a new all-time high shows one. |
| A fixer is removed before their resolve is confirmed | The confirm still pays them, into their archived record (R30). |
| A freelancer never clocks in | Their tickets never age, but R21 stops them at 2 a week and 8 open; Managers see the mark and take them (R4). |
| A freelancer claims, releases and claims again to find an easy one | The released ticket still used its slot; 2 a week is 2 taken, not 2 kept (R21). |
| An HoD sits on a freelancer's confirms to break their streak | They can't. The streak counts the resolves; the confirm only decides when it's paid (R26). |
| Someone releases a ticket on day 6 and claims it back | It keeps its old count, so it's still overdue tomorrow (R16). |
| A worker snatches an easy ticket from a coworker | They can't; workers only take overdue tickets (R32). |
| Someone lets a friend's ticket go overdue so they can rescue it | Nothing gained: the rescuer gets the same point they'd get from the pool, and the friend gets nothing (R32). |
| A fixer notices their own fix is broken | They reopen it themselves; it comes back to them (R3). |
| An HoD wants to confirm a friend's ticket | Only if it's their turn, or from day 5 (R33). |
| The same three come up again the next day | The rotation skips that HoD for 3 days; if there's no other HoD, the confirm waits out the 3 days (R33). |
| A confirmer thinks a fix is junk | They decline it with a note: no points, no cost to them, back to the fixer (R35). |
| A confirmer declines honest work | The fixer resolves it again, and the rotation sends it to a different confirmer: a second opinion (R35). |
| Someone logs junk so a Manager will delete it | The Manager marks it as junk: the sender earns nothing and keeps the ghost points (R36). Or the Manager leaves it in the pool, which costs them nothing and the sender 0.125. |
| The owner claims 20 tickets from the pool | They stop at 12 (R31). |
| A Manager's ghost points reach 0.375 | The owner hasn't been charged yet. At 0.5 the owner gains 0.125 (R28). |

## Restriction Rules (Draft)

Written 2026-11-09 to close every open edge case. Each one is a draft for the owner to confirm before it goes into GUIDELINES.md.

- **R1. Whoever deletes, decides, and Managers can overrule Employees.** A sender can restore a ticket they deleted themselves. A ticket deleted by a Manager, an HoD or the owner can be restored only by one of them. A Manager can also restore a ticket an Employee deleted; that costs the Manager 0.25 ghost points instead of a point.
- **R2. The first confirmed completion is final for points.** The point goes to whoever's completion was confirmed first, and the sender's 0.75 with it. Reopening, taking or deleting the ticket never takes them back. The only way to lose a point is to `restore` a ticket.
- **R3. Two reopens each for the sender and the fixer.** The sender and the person who fixed it can each reopen the same ticket at most twice, with a note each time. A fixer's reopen sends it back to them; it earns nothing (R2) and only stops their own self-confirm (R8). *Why: total transparency. Owning up to your own mistake should be as easy as pointing out someone else's.* After that, only a Manager, an HoD or the owner can reopen it.
- **R4. No automatic release.** A ticket is never taken from someone because they clocked out. Managers see who isn't clocked in, and taking it stays their decision, recorded as an `Action`.
- **R5. The owner may claim their own ticket,** and it earns no point. Nobody else can.
- **R6. Releasing doesn't need clock-in.** It's the only ticket action that doesn't, because it gives work back rather than taking any. It still needs to be online (offline is read-only).
- **R7. Points and hours are shown side by side, never combined.** No points-per-hour, no ranking, no speed score.
- **R8. Silence confirms.** A resolved ticket nobody confirms within **7 days** confirms itself. The fixer gets their point and the sender their 0.75. For freelancers, this is the proof of a delivered solution. Each self-confirm adds **0.125** ghost points to the owner (lost profit), so waiting out the HoDs is never free. An HoD or owner who confirms within the 7 days gains **0.125** points. If the sender reopens the ticket before the 7 days are up, the self-confirm is off. The 7 days are calendar days, so the fixer's point never waits on someone else's weekend (owner, 2026-11-09). *Why: the person who asked knows if it's fixed. If they say it isn't, it isn't, done and dusted. Nobody earns a point for a job that's still broken.*
- **R9. Points never go below 0.** A point that would take someone below zero is recorded as 1 ghost point instead.
- **R10. Restoring is free for 30 days.** Restoring a ticket within **30 days** of its deletion costs nothing. After that it costs the restorer 1 point.
- **R11. Eight overdue tickets is the cap.** A ticket is overdue **7 days** after it was assigned or claimed, counted in the worker's contract days (O4), so weekends and days off never age it (owner, 2026-11-09). Freelancers have no contract days: their 7 days start at their first clock-in after the assignment and count only the days they clock into that company (owner, 2026-11-09). At **8**, nobody can assign that person anything new and they can't claim more. They get a (guidance) message to finish the oldest first; the Manager gets a (helper) message. The owner may lower the cap, never raise it.
- **R12. Overload is the Manager's ghost, never the worker's.** R17 caps everyone at 8 open tickets, so overload means sitting at the cap with overdue work. While a worker sits there, every overdue ticket a Manager assigned them adds **0.125** ghost points to that Manager, once per ticket. The worker earns nothing for it. *Why: paying people for being late would pay for slow-walking, and that fools everyone.*
- **R13. Two deletions and it's archived.** Informing pays once per ticket, at the first deletion by someone else, and it's one to one: the sender gains **0.25** points and the deleter gains **0.25** ghost points. Deleting someone else's ticket is a move against them, and it's on the record. That first deletion can be restored (R10). A ticket deleted a second time is archived for good: no restore, no more points. It makes important tickets worth defending. Unless the sender does it, the archiving deletion costs the deleter **0.5** ghost points, so nobody buries a ticket for free by deleting, restoring and deleting again. A deletion the sender made themselves and then undid doesn't count toward the two, so one misclick never hands anyone the power to bury their ticket.
- **R14. You can't claim while holding 8 open tickets.** Claiming stops at **8** Assigned tickets, overdue or not. Past that, a ticket gets solved, released or deleted, which forces the conversation instead of a hoard.
- **R15. Approved leave pauses the overdue clock.** The days a worker is on approved leave don't count towards their 7 days.
- **R16. Releasing ends the count; taking restarts it.** A released ticket leaves the worker's overdue count straight away (R6). A taken ticket starts a fresh 7 days for its new receiver. Getting back a ticket you released within the last 7 days, by claiming it or being given it, keeps its old count, so nobody resets the clock by releasing and reclaiming. Neither is a loophole: one gives work back, the other moves it.
- **R17. One ticket a day, four per Manager, eight in total.** Each person can be assigned at most **1** ticket per **24 hours**, by all Managers together, and only on their contract days (O4): a part-timer working 2 days a week gets at most 2 a week, never 7 for 2 days' work. A freelancer's days are their R21 week. One Manager can hold at most **4** of a person's open tickets, and nobody holds more than **8** open tickets, assigned and claimed together. Nobody is assigned anything during approved leave or on a day off. *The maths: one a day, with 7 days before a ticket is overdue, is at most 7 open tickets for someone keeping pace. The cap of 8 only bites when someone falls behind, and then it protects them.* *Why: it protects people from themselves. A company has to invest in its people.*
- **R18. Four logs a day.** Each person can log at most **4** tickets per **24 hours**. A ticket they log and then delete themselves still counts as one of the 4, and earns nothing, so nobody can farm points by logging and deleting.
- **R19. Four days of junk never beats one real fix.** Informing pays at most **0.25** points a day per person, however many of their tickets are deleted. A real fix is worth 1.
- **R20. Managers pay in full, Employees in part.** A Manager's ghost points are never capped: every deletion, overload and lapse counts, and an archiving deletion costs double (0.5). An Employee's gain is capped (R19) while the ghost points from their own logging aren't, so misuse costs them something, but never as much. *Why: the person with the power carries the weight. That leans towards the employee and keeps it fair. A slacking Manager shows up in their own ghost points.*
- **R21. Two tickets a week, per company.** A freelancer takes at most **2** tickets in any **7 days in a row** (a rolling week, owner 2026-11-09) from each company they belong to, assigned and claimed together, and never more than **8** open in total. More companies means more work; one company means 2 a week. That's the downside of freelancing. When a freelancer is full, that company's owner and Managers see "unavailable", never why, and the freelancer gets a (guidance) message. Overload ghost points (R12) stay in the company that caused them. The first ticket a freelancer releases in a week gives its slot back: an honest "this isn't mine" shouldn't cost a week's work. After that, a released ticket keeps its slot for the rest of the week, so nobody cycles the pool for the easiest job (the same idea as R18). A slot always comes back when a Manager takes or deletes the ticket, because that isn't the freelancer's doing (owner, 2026-11-09: "whichever is the most fair").
- **R22. The highest of the high and the lowest of the low.** A freelancer's own points and ghost points are seen by them and the owner, and nobody else. Established employees see the established team's numbers; a freelancer sees their own beside them. A company can't use a freelancer's numbers against them, and the owner can't pretend not to know. Seeing stats is never for sale: Paid is not a shortcut to a worker permission (GUIDELINES Section 2).
- **R23. The role at the moment of the action decides the price.** A Manager who deletes a ticket pays the Manager's price (R20), even if they're demoted the next day. The owner counts as a Manager. Points and ghost points already recorded never change with a later promotion, demotion or removal.
- **R24. A confirmation needs a third person.** Nobody confirms a ticket they sent or resolved. An HoD who logged the ticket can't confirm its fix and collect 0.75 and 0.125 on the same ticket. The one exception: when the company has no eligible HoD (none who isn't the sender or the fixer and isn't on approved leave), the owner may confirm a ticket they logged, keeping the sender's 0.75 but never the 0.125, so the fixer isn't kept waiting 7 days (owner, 2026-11-09).
- **R25. The receiver's work is paid for.** When a Manager deletes an Assigned ticket, a receiver who held it for **24 hours** or more gains **0.125** points, and the Manager gains **0.125** more ghost points on top of the deletion's 0.25: **0.375** in total. Every point a deletion creates is matched by a ghost point on the deleter. The 24 hours stop anyone claiming and deleting just to collect.
- **R26. The freelancer's streak.** A freelancer who resolves both of a company's weekly tickets within that week earns a bonus on top of the points, paid once both are confirmed, even by a self-confirm (R8): **0.125** the first week, doubling each week in a row (0.25, then 0.5), and staying at **0.5**. A missed week starts it again at 0.125. The streak's week starts at the first ticket of the pair and runs 168 hours, so no two streak weeks overlap. Counting the resolve, not the confirm, keeps the streak in the freelancer's own hands: an HoD who sits on a confirm can delay the bonus, never break it (owner, 2026-11-09). *Why: one more ticket keeps the streak alive, and that's the hook. And if someone wants to sabotage a worker, the justice mathematics wastes their time instead. It only ever pays for confirmed work, and the top step stays under one real fix.*
- **R27. Friends who keep pushing tickets through get a quiet word.** When the same sender, fixer and confirmer repeat **5** times in **30** days, the owner, and only the owner, gets a (helper) message. Managers don't, because a confirmer in the trio is an HoD and would be tipped off. *Why: if they're fooling the system, the owner will see it fast. Handle it in peace, with as little friction as possible.*
- **R28. The owner carries a quarter.** For every **0.5** ghost points a Manager earns, the owner gains **0.125**: a quarter, charged the moment the Manager's total crosses each 0.5, so it stays in eighths (owner, 2026-11-09). The owner's own ghost points add no quarter; they already carry those in full. The owner chose that Manager, so they share the weight (R20). Demotions, removals and everyone who leaves (`Left`: resigning, retiring), of Managers and workers alike, are counted on the owner's profile as turnover. Turnover is context, not a verdict: the history says which was which (owner, 2026-11-09). *Why: bad owners show up, and high turnover is written where everyone can see it.* Because the quarter is charged as it happens, demoting a bad Manager stops it growing; keeping one costs the owner every day.
- **R29. The clock is the server's, and windows are counted in hours.** Every `at` is server time, so a device's clock (Daniel's laptop) changes nothing. R8's 7 days are 168 hours from the resolve; R17's and R18's days, R25's 24 hours and R21's week are rolling hours too, so time zones never matter. Only contract days (R11, R17) follow the worker's own contract (O4).
- **R30. Leaving doesn't cancel what's owed.** A member removed while their resolve waits for a confirm is still paid when it's confirmed, or confirms itself, into their archived record. The same goes for a removed sender's 0.75. A removed member's open ghost points are archived with them and leave the company's totals. *Why: a donation of goodwill. The work was done; the payment follows it out the door.*
- **R31. The owner holds 12 at most.** The owner never clocks in and can't be assigned work, but they can claim and take. They hold at most **12** open tickets, one and a half workers' worth, shared between co-owners (12 together, never 12 each; `tralogfin-database.md`, Co-owners), so they can help without soaking up the pool and starving the team of work and points (owner, 2026-11-09). *Why: long-term growth comes from employee satisfaction, not from an owner doing everyone's job.*
- **R32. Take is a rescue.** Any member can take an overdue ticket from a coworker: it counts as a claim (R14's cap of 8 applies, R31's 12 for the owner) and the sender still can't take their own (R5). The ticket leaves the holder's overdue count, and the holder earns nothing for it (R12: lateness is never paid). Managers, HoDs and the owner can take any ticket at any time and keep it or hand it on, which counts as an assignment for the new receiver (R17). Every take names both sides in its `Action`. *Why: it keeps track of the situational dynamics. Helping a coworker who's behind should feel like a win.*
- **R33. Confirmers take turns.** Each resolve goes to the next eligible HoD in turn, skipping anyone who sent or fixed it, or is on approved leave. Only they can confirm it until day 5 of R8's 7, when the reminder goes out and any eligible HoD can. The owner can always confirm. Nobody picks which tickets they confirm, so three friends never get the chance to push junk through, and the work is spread evenly (52 each at Voidspire, 62 at Silverveil). The same three people can't repeat within **3 days**: the rotation skips an HoD who confirmed that sender and fixer's ticket in the last 3 days. If nobody else is eligible, the ticket waits until the 3 days have passed. That's still inside R8's 7, so the fixer's point is delayed, never lost, and nobody pays lost profit (owner, 2026-11-09, after the inside job showed the old "goes ahead anyway" made the cooldown useless with two confirmers). R27 stays as the backstop. *Why: protect people from themselves by taking away the opportunity, not by punishing them.*

- **R34. A healthy team is the owner's profit.** Every ticket confirmed within R8's 7 days adds **0.125** points to the owner on shift: new points, taken from nobody. It mirrors R8's lost profit: answer in time and the owner earns, let it lapse and the owner pays. It's paid once per ticket, and never on a ticket the owner confirms under R24's exception, so the owner still can't collect twice on their own ticket (owner, 2026-11-09). *Why: owners should earn more by default, or they won't use the app. But never at their employees' expense.*

- **R35. A confirmer can decline.** Whoever may confirm a resolve (R33, R24) can decline it instead, with a required note. Nobody earns anything, the confirmer pays nothing, R8's self-confirm is off, and the ticket goes back to the fixer as Assigned. When it's resolved again, the rotation skips whoever declined it, so a second confirmer looks at it: one bad judge never decides a worker's point alone. Declines are in the history and count towards R27 (owner, 2026-11-09). *Why: without it, junk always paid. Confirming it paid the duo, waiting paid them after 7 days, and deleting it cost the honest confirmer.*
- **R36. A deletion can be marked as junk.** Anyone who deletes someone else's ticket can mark the deletion as junk, with a note. The sender earns no informing points and the ticket's 0.125 stays as ghost points. The deleter still pays the deletion's 0.25 (R20), so nobody marks honest tickets as junk to save themselves, and the owner sees every junk mark. It counts towards R13's two deletions like any other (owner, 2026-11-09). *Why: informing should pay, provoking shouldn't.*

- **R37. A boss's take costs the boss.** When a Manager, HoD or the owner takes a ticket from someone who holds it and it isn't overdue, the holder gains **0.125** points and the boss gains **0.125** ghost points, as R25 does for deletions (owner, 2026-11-09). No 24-hour wait, unlike R25: a worker can't farm it alone, because the boss chooses to take, and Elliot takes within minutes. An overdue ticket costs nothing to take (R12: lateness is never paid). *Why: every boss action that costs a worker something costs the boss something too.*

## Decisions (Owner Confirmed)

Picked on 2026-11-09 while the owner was away, then confirmed by the owner the same day, every one as written.

1. **The sender and the fixer reopen a resolved ticket** (R3), and so can Managers, HoDs and the owner. The owner changed this: total transparency.
2. **The receiver can't delete an assigned ticket.** They `release` it back to the pool instead, so work can't be dumped. Deleting is for the sender (while Pending), Managers, HoDs and the owner. Its one exploit, releasing and reclaiming to reset the clock, is closed by R16.
3. **`take` stays** (owner: it keeps track of the situational dynamics). Managers, HoDs and the owner take any ticket and hand it on; anyone else takes only an overdue one, as a rescue (R32).
4. **Logging a ticket needs clock-in** like every other ticket action, because clock-in decides which company it belongs to. Owners never need to.
5. **The receiver can release without being clocked in.** Settled by R6, as an exception to GUIDELINES Section 8.
6. **Overdue is 7 days** after a ticket is assigned or claimed, the same number as R8, so the app has one waiting period. Overdue counts contract days, R8 counts calendar days (owner, 2026-11-09).
7. **The owner holds at most 12 open tickets** (R31), not 8 and not unlimited. The owner changed this.
8. **Informing earns 0.25, one to one with the deleter's ghost points,** capped at 0.25 a day so four days of junk never beat one real fix (owner, 2026-11-09).
9. **A freelancer with one company gets 2 tickets a week,** no more (owner: "that's the downside of being a freelancer"). The streak bonus (R26) gives them a reason to keep coming back.
10. **The forecast counts Pending tickets only,** not Assigned ones, because Assigned work already has someone on it.
11. **A collusion of three** (a sender, a fixer and an HoD agreeing to push junk through) isn't blocked by a number. Rotating confirmers (R33) takes away the chance, R17, R18 and R24 slow it down, the history shows it, and R27 tells the owner.
12. **No `exploitCatcher()`.** R13's misclick rule makes the exploit impossible, so there's nothing left to catch. A catcher would only add a second way to be wrong.
13. **R28's quarter is charged as it happens, not at demotion** (my change to the owner's idea). Charged at demotion, owners would avoid demoting bad Managers to dodge it, and the employees would pay for that.

## What the Original Got Wrong

Kept so the rebuild doesn't copy it. Full scan: `.claude-notes/ticketing-loop-scan.md`.

1. Manager and employee start views were swapped, and nothing checked roles.
2. A restored or moved ticket kept its receiver and vanished from the pool. Fixed by rule 1.
3. Unlock, recycle and restore left the old dates and notes behind. Fixed by rule 3.
4. "Taken over by…" and similar lines were written into the user's description. Fixed by the `Action` documents.
5. A pending ticket always lost its chosen receiver, and one `case` was missing its `break`.
6. Tickets were found by people's names, so two people with the same name collided. Fixed by `_id`.
7. `move` sent tickets between departments. TraLogFin has no departments (Bureau groups nobody), so `move` is gone and `release` covers what it was used for.
