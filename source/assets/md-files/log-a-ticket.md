# Log a Ticket

`[ticketing]` · `DefineDuties`. A draft until its edge cases are worked out; see `synchronization-thesis.md`. The permissions it follows come from [GUIDELINES.md](../../utilities/document/GUIDELINES.md), Sections 6, 8 and 10; this file is how the loop behaves inside them.

Built from a scan of the original Log a Ticket (6.13.1), kept read-only in `source/utilities/vendors/log-a-ticket/`. Its loop is kept; its bugs are listed at the bottom so they aren't copied.

## `<main>` Pages

The outer fullscreen is `elements`, opening with `startingPreview('(position)', 1)`.

| Left page   | Centre page  | Right page   |
| ----------- | ------------ | ------------ |
| `(manager)` | `(position)` | `(employee)` |

- **`(employee)`:** my tickets. The ones I logged, and the ones assigned to me. Everyone sees this page.
- **`(manager)`:** the company's pending pool, the team's assigned tickets and the deleted tickets. Everyone can see the pool and claim from it; only Managers, HoDs and the owner see the assign, reassign, delete and restore buttons.
- **`(position)`:** logging a new ticket, and the points count.

## The Loop

Four states. Every state has a way out and a way back, so no ticket can get stuck.

```
          log ─────────────┐
                           ▼
   ┌──── restore ──── Pending ◄──── release ────┐
   │                   │  ▲                     │
   │        claim/assign  │                     │
   │                   ▼  │                     │
Deleted ◄── delete ── Assigned ── resolve ──► Resolved
                        ▲  ⟲ reassign            │
                        └──────── reopen ────────┘
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
| Assigned | `release`  | Pending  | The receiver (R6), a Manager, an HoD or the owner      | Optional       |
| Assigned | `reassign` | Assigned | Manager, HoD or owner; to any member except the sender | —              |
| Assigned | `delete`   | Deleted  | Manager, HoD or owner                                  | Required       |
| Resolved | `reopen`   | Assigned | The sender (R3), a Manager, an HoD or the owner        | Required       |
| Deleted  | `restore`  | Pending  | Whoever's side deleted it (R1)                         | —              |

Clock-in applies to every action, as GUIDELINES Section 8 says: a non-owner must be clocked into the ticket's company, and the owner never needs to be.

### Three Rules That Hold the Loop Together

1. **Pending means nobody has it.** Every way into Pending (`log`, `release`, `restore`) clears the receiver. A Pending ticket always sits in the pool.
2. **The sender never receives their own ticket.** You can't claim it, and nobody can assign it to you. The owner is the one exception (R5).
3. **Nothing is overwritten, only added.** Every action adds one entry to the ticket's history. Old dates and notes stay where they were.

## Points

**One resolved ticket is one point,** for the person who resolved it, in that company. There's no rating: a good Manager balances easy jobs against hard ones when they assign, so the count stays honest over time.

- **The first resolve earns the point, for good (R2).** A person's points are the number of tickets whose *first* `resolve` entry in `history` is theirs. Reopening, reassigning or deleting the ticket afterwards changes nothing, and resolving it a second time earns nothing.
- Points are **counted, never stored.** They're read from `history`, which only ever grows, so they can't drift.
- Points belong to the company. A freelancer has a separate count in every company.
- **Points sit beside hours, never against them (R7).**
- A removed member keeps the points from tickets they resolved; those tickets are archived with a historical reference to them.

## The Record

One `DefineDuties` document per ticket, following TABLE.md Section 6 (every field present, `null` when unknown, text IDs, UTC dates, status as a field).

```json
{
  "_id": "6ae1b2c4898694d607cf2001",
  "organization": "Voidspire Systems",
  "status": "Assigned",
  "subject": "Printer on floor two is offline",
  "description": "It shows a paper jam, but there's no paper in it.",
  "senderId": "6ae06f3e898694d607cf1577",
  "receiverId": "6ae068b8898694d607cf1574",
  "history": [
    { "action": "log", "byId": "6ae06f3e898694d607cf1577", "at": "2026-11-09T08:12:00Z", "note": null },
    { "action": "claim", "byId": "6ae068b8898694d607cf1574", "at": "2026-11-09T09:40:00Z", "note": null }
  ],
  "createdAt": "2026-11-09T08:12:00Z",
  "updatedAt": "2026-11-09T09:40:00Z"
}
```

- **`history` only ever grows.** Entries are pushed, never edited or removed, so it follows TABLE.md's "simple queries" rule. In MySQL it becomes its own table (`ticketId`, `action`, `byId`, `at`, `note`), the same way `organizations` becomes `memberships`.
- **A removal is an entry too.** When the system releases a ticket because a member was removed, `byId` is the owner who removed them.
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
| A Manager is demoted to Employee | The tickets they assigned stay assigned. They lose assign, reassign, delete and restore immediately. |
| A freelancer belongs to two companies | They only see, and act on, the tickets of the company they're clocked into. |
| The company is deleted | Every ticket is archived in whatever state it's in. There's no pool and no actions. |
| The device is offline | Tickets are read-only from the cache. Nothing is queued for later (GUIDELINES Section 12). |
| The same ticket is resolved, reopened and resolved again | Still one point, for whoever resolved it first (R2). |
| Two coworkers log easy tickets for each other | Allowed by the rules. Spotting it is a Manager's job, and the history shows who logged what. |
| A Manager deletes a ticket and the sender keeps restoring it | Can't happen: only Managers, HoDs or the owner can restore what they deleted (R1). |
| A Manager reopens a resolved ticket and deletes it to take the point | The point stays; it was earned at the first resolve (R2). |
| A sender keeps reopening the same ticket | After two reopens, only a Manager, an HoD or the owner can reopen it (R3). |
| The receiver clocks out while holding a ticket | It stays theirs. Managers see a "not clocked in" mark beside it and can reassign as usual (R4). |
| The owner is the only person in the company | They can claim their own tickets, for no point (R5). |

## Restriction Rules (Draft)

Written 2026-11-09 to close every open edge case. Each one is a draft for the owner to confirm before it goes into GUIDELINES.md.

- **R1. Whoever deletes, decides.** A sender can restore only a ticket they deleted themselves. A ticket deleted by a Manager, an HoD or the owner can be restored only by one of them.
- **R2. The first resolve is final for points.** The point goes to whoever resolved the ticket first and can never be taken back, by reopening, reassigning or deleting it.
- **R3. Two reopens for the sender.** A sender can reopen the same ticket at most twice, with a note each time. After that, only a Manager, an HoD or the owner can reopen it.
- **R4. No automatic release.** A ticket is never taken from someone because they clocked out. Managers see who isn't clocked in, and reassigning stays their decision, recorded in `history`.
- **R5. The owner may claim their own ticket,** and it earns no point. Nobody else can.
- **R6. Releasing doesn't need clock-in.** It's the only ticket action that doesn't, because it gives work back rather than taking any. It still needs to be online (offline is read-only).
- **R7. Points and hours are shown side by side, never combined.** No points-per-hour, no ranking, no speed score.

## Draft Decisions (Owner to Confirm)

Picked on 2026-11-09 while the owner was away; each one can be overruled.

1. **The sender reopens a resolved ticket,** not the person who resolved it. The sender is the one who knows whether it's fixed. Managers, HoDs and the owner can reopen too.
2. **The receiver can't delete an assigned ticket.** They `release` it back to the pool instead, so work can't be dumped. Deleting is for the sender (while Pending), Managers, HoDs and the owner.
3. **`take` becomes `reassign`,** for Managers, HoDs and the owner only, which matches who may assign.
4. **Logging a ticket needs clock-in** like every other ticket action, because clock-in decides which company it belongs to.
5. **The receiver can release without being clocked in.** Settled by R6, as an exception to GUIDELINES Section 8.

## What the Original Got Wrong

Kept so the rebuild doesn't copy it. Full scan: `.claude-notes/ticketing-loop-scan.md`.

1. Manager and employee start views were swapped, and nothing checked roles.
2. A restored or moved ticket kept its receiver and vanished from the pool. Fixed by rule 1.
3. Unlock, recycle and restore left the old dates and notes behind. Fixed by rule 3.
4. "Taken over by…" and similar lines were written into the user's description. Fixed by `history`.
5. A pending ticket always lost its chosen receiver, and one `case` was missing its `break`.
6. Tickets were found by people's names, so two people with the same name collided. Fixed by `_id`.
7. `move` sent tickets between departments. TraLogFin has no departments (Bureau groups nobody), so `move` is gone and `release` covers what it was used for.
