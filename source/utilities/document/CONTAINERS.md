# Containers

Every application page is built from the same six containers. Each one has one job, and it does that same job in every app, so muscle memory carries over: the left bar is always where you act, the footer always where you're told what happened. Memorisation and habits are critical, for the user and for development.

Which page a user sees is decided by their toggle, as mapped in [TOGGLES.md](TOGGLES.md). What they're allowed to do inside it is decided by [GUIDELINES.md](GUIDELINES.md).

---

## Naming

Three names build every ID and class:

| Name        | Identifies             | Example                  | Becomes                       |
| ----------- | ---------------------- | ------------------------ | ----------------------------- |
| `pageName`  | The application        | `[overtime]`             | `<div id="overtime-body">`    |
| `blockName` | The container          | `<leftbar>`              | `<aside id="overtime-leftbar">` |
| `labelName` | The role-specific view | `(clocking)`             | `class="clocking-leftbar"`    |

The container's class is always `${labelName}-${blockName}`, followed by its current state (for example `class="clocking-leftbar expanded"`). The page's body carries the role as a class too: `<div id="${pageName}-body" class="${roleName} active">`.

Each page lives in `source/layouts/containers/${PageName}/`, where `${PageName}.tsx` lazy-loads the six blocks. Every container is still labelled `(default)` in the code; the labels on this page are the plan they're being built towards.

---

## The Six Containers

1. **Entry layer:** `<section id="${pageName}-overlay">`

   > The first thing a user sees. It's where they pick which page or role to preview before entering the main experience, and where focused flows (like logging a ticket) appear on top of everything else.

2. **Primary workspace:** `<main id="${pageName}-main">`

   > The main view after the overlay. It renders the selected page and updates with the dataset and the user's actions.

3. **Action and guidance panel:** `<aside id="${pageName}-leftbar">`

   > Presents the actions, steps and controls a user needs to use the software effectively.

4. **Context and feedback panel:** `<aside id="${pageName}-rightbar">`

   > Mirrors the left bar, but connects the user's actions to the application's goal: status, outcomes and what comes next.

5. **Controls and configuration:** `<header id="${pageName}-header">`

   > Page-level settings and feature toggles that let the user shape how the page behaves.

6. **Status messages:** `<footer id="${pageName}-footer">`

   > Short messages shown after the user logs or completes something: confirmations, status updates and next steps, without interrupting the work.

---

## Pairs and the Flip

### Two Fixed Pairs

The four outer containers are coupled in two pairs, and a coupled pair always moves as one: it unfolds together, freezes together and folds back together.

| Pair                      | Unfolds through                      | Freezes through                     |
| ------------------------- | ------------------------------------ | ----------------------------------- |
| `<header>` + `<leftbar>`  | `Header/${PageName}Functions.ts`     | `freezeToggle()` in `scripts/Header.ts` |
| `<footer>` + `<rightbar>` | `Footer/${PageName}Functions.ts`     | `freezeToggle()` in `scripts/Footer.ts` |

`<main>` belongs to neither pair. It's where both pairs fold back: `revertBlocks()` in `scripts/Main.ts` squares the header and footer and collapses both bars in one go. `<overlay>` sits above all of them and isn't part of a pair.

The pairs never change. A header never unfolds with the right bar, and a footer never freezes the left bar.

### The Flip

What the pairs **hold** changes with the screen's orientation. Every container except `<main>` renders through `switch (getOrientation)`, with one `case 'landscape'` (Desktop) and one `case 'portrait'` (Mobile), and the content swaps from one pair to the other. On the Archive page:

| Pair                      | Desktop (landscape)                                    | Mobile (portrait)                                      |
| ------------------------- | ------------------------------------------------------ | ------------------------------------------------------ |
| `<header>` + `<leftbar>`  | Signature (freeze), component previews, element menu   | TraLogFin (home) and the app menu; the left bar is empty |
| `<footer>` + `<rightbar>` | TraLogFin (home) and the app menu; the right bar is empty | Signature (freeze), component previews, element menu |

Each pair keeps its edge of the screen; only the jobs move. `checkScreen()` in `source/scripts.ts` watches `(orientation: landscape)` and nothing else, so `tablet-squaring` never causes a flip.

**How a pair unfolds depends on the orientation, too.** Desktop unfolds on hover (`onMouseEnter`). Mobile has no hover, so every page unfolds on a tap (`onClick`), and `<main>` folds it back on a tap as well. While a portrait header or footer is `.squaring`, its foreground ignores taps (`pointer-events: none` in `styles/Transition.scss`), so the tap that unfolds it never presses the button underneath.

On Track a Day, Log a Ticket and Find a Link the portrait footer starts `.expanded` and covers `<main>`, so there's no `<main>` to tap. Their headers keep `onMouseLeave` → `squareHeaders()`: a tap anywhere outside the header folds it back.

### What the Flip Costs

The flip swaps markup rather than restyling it, and that's the limitation to keep in mind:

1. **Everything is written twice.** Each orientation is its own block of JSX. Something added to one orientation needs its mirror in the other, usually in the other pair: the `<Label>` previews went into the Footer's `MenuSwipes` for Mobile, and the Header's `MenuSwipes` for Desktop needed them too.
2. **Every flip unmounts one side and mounts the other.** Anything a component starts (a `resize` listener, a timer) must be returned from its `useEffect` so React can stop it on unmount. If it isn't, it keeps running and looks for elements that no longer exist. `<MenuSwipe>` returns `reloadElements()` for exactly this reason.
3. **Scripts can't assume which pair holds a component.** The previews live in the header on Desktop and in the footer on Mobile. Look a component up in both, the way `findTags()` in `Menu_swipe.ts` tries `#${pageName}-header` and then `#${pageName}-footer`, never in just one.
4. **The pair holding home and the app menu sits on top.** `%position` in `styles/Skeleton.scss` swaps the layers with the flip: on Desktop the footer is `z-index: 9` and the header `6`, on Mobile the other way round.

### Mirroring a Layout

The header's Desktop and the footer's Mobile do the same job (on Track a Day, the demonstration), so one is built from the other. `OvertimeHeader.tsx` (`'landscape'`) and `OvertimeFooter.tsx` (`'portrait'`) are the reference pair. Mirroring moves the layout to the opposite edge of the screen; it never renames it.

| Stays the same                                                                   | Flips                                                                                              |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Element and class names: the midground's `.top` / `.bot`, the background's `.lef` / `.rig` | `<DivisionSweeping>` axis `'[x]'` → `'[y]'`, view `'-lef-'` / `'-rig-'` → `'-top-'` / `'-bot-'` |
| Components, their order and `labelName`s                                         | `<NavigationDefault>` position `'top-lef'` → `'bot-rig'`                                           |
| Colour, shade and clarity                                                        | Edge rows: `grid-area: 1 / 1 / 3 / 4` → `4 / 1 / 6 / 4`                                            |
| `previewProfile()`, `.conceal` and the state classes                             | Slide offsets: `top:` → `bottom:`                                                                  |
|                                                                                  | Breakpoints: `max-height` → `max-width`, and the `*-desk` values → the `*-mobi` values             |

- **Whatever slides away sits against the screen edge.** The demonstration's `<MenuToggle>` slides out whenever its container leaves `.expanded` (`top` on the header, `bottom` on the footer). That only hides it when it sits in the two edge rows and the offset equals its row height from `Menu.toggle.scss`: 128 / 96 / 64 / 48px on Desktop, 192 / 160 / 96 / 64px on Mobile. One row away from the edge, it stops at the edge and peeks into the squared corner.
- **The `@at-root` state blocks reach every container of their kind.** `@at-root header { &[class*='expanded'] … }` compiles to any `header[class*='expanded']`, not only `#overtime-header`, and the footer's does the same for every footer. It's harmless while only Overtime has a `menu[class*='demonstration']`. Both carry a `Warning:` flag until they're narrowed.
- **The `locked-*` class is what makes a tap's squaring stick.** Clicking a character profile squares its container through `blockViews(…, 'squaring')`, in `previewProfile()`'s `'click'` case. On Mobile the same tap then bubbles up to the footer's own `onClick`, `unfoldFooters()`, which would unfold it straight away. The 1500ms `locked-footer` that `blockViews()` sets drops that second call. Shorten or remove the lock and the squaring stops sticking.

---

## Shared by Every App

| Container                           | States                          |
| ----------------------------------- | ------------------------------- |
| `<div class="default-body">`        | **.active** or **.asleep**      |
| `<section class="default-overlay">` | **.highlight** or **.downplay** |

| Container                          | States                                           |
| ---------------------------------- | ------------------------------------------------ |
| `<footer class="messages-footer">` | **.expanded** or **.collapsed** or **.unfolded** |

> **Messages.** One short line after you act, then it gets out of the way. Clocked in, request sent, link saved. It never stacks up a pile of popups.

The tables below list each app's own containers. `<main>` has no state toggles; the side bars switch between **.expanded** and **.collapsed**; the header also has **.unfolded**.

---

## Track a Day

_Toggle: **Vocation**. Original planning: [track-a-day.pdf](../../assets/pdf-files/archive-documents/logical-structure/track-a-day.pdf)_

### Established

| Container                            | States                                           |
| ------------------------------------ | ------------------------------------------------ |
| `<main class="approve-main">`        | No state toggles                                 |

> **Your day.** One clock-in, one clock-out, and everything that's still waiting for approval. Hours past your workday go to your HoD as overtime. Nothing slips through unseen.

### Freelancing

| Container                            | States                                           |
| ------------------------------------ | ------------------------------------------------ |
| `<main class="report-main">`         | No state toggles                                 |

> **Your solutions.** Every job you've delivered, with the price you agreed before you started. Add the time you were there, pick the company, and the invoice is ready. You get paid for the work, not the hours.

### Both Vocations

| Container                            | States                                           |
| ------------------------------------ | ------------------------------------------------ |
| `<aside class="clocking-leftbar">`   | **.expanded** or **.collapsed**                  |
| `<aside class="request-rightbar">`   | **.expanded** or **.collapsed**                  |
| `<header class="clockboard-header">` | **.expanded** or **.collapsed** or **.unfolded** |

> **Clocking.** Opens the moment you clock in or out. Add a second shift, fix last week, or fill in next week. Your day, the way it actually happened.

> **Requests.** Everything you've sent and where it stands. Pending, approved, rejected or expired, with your ghost hours counted over two years. No chasing anyone for an answer.

> **Clockboard.** Your hours at a glance and the settings behind them. Set your default working hours once. The board does the rest.

### Clocking Logic

These rules come from the original planning and keep the record fair without making the user babysit it. When a rule is unclear, it leans toward the employee.

1. **Forgot to log a past day:** the default working hours from the profile fill it in.
2. **Clocked in during the morning but forgot to clock out:** the default clock-out time is used.
3. **First opened the app in the afternoon without clocking in:** the current time becomes the clock-in time.
4. **Both times already logged for today:** the left bar opens, because the user most likely wants a second shift or to change another week.

---

## Log a Ticket

_Toggle: **Position**. Original planning: [log-a-ticket.pdf](../../assets/pdf-files/archive-documents/logical-structure/log-a-ticket.pdf)_

> **Note:** these descriptions are placeholders. Log a Ticket will be rebuilt from my original jQuery ticketing system, which already has a complete claim-to-score loop. Its descriptions will be rewritten from that code. Until then, the rules below stand.

### Manager

| Container                     | States           |
| ----------------------------- | ---------------- |
| `<main class="tickets-main">` | No state toggles |

> Primary workspace (manager view). This is where the manager's ticket logging screen is rendered. When the user clicks "Log Ticket" in the `<header>`, a ticket form/dialog is displayed in the `<section class="default-overlay">` container on top of the rest of the page (so the logging flow stays focused and can be completed quickly). Edge case: if the user is not authorized (non-manager), the log UI should not open and a clear message should be shown (e.g., via the footer message system). Also handle "cancel/close with unsaved changes" gracefully.

| Container                           | States                          |
| ----------------------------------- | ------------------------------- |
| `<aside class="completed-leftbar">` | **.expanded** or **.collapsed** |

> Completed tickets panel. Shows tickets that were logged by managers and completed by employees, so managers can review outcomes and confirm throughput at a glance. Edge case: empty state (no completed tickets yet) should be informative rather than blank; long lists should remain usable (scrolling, grouping, or basic filtering) so the panel doesn't become noise.

| Container                            | States                          |
| ------------------------------------ | ------------------------------- |
| `<aside class="employees-rightbar">` | **.expanded** or **.collapsed** |

> Employee-side feature access (manager scope). This panel mirrors the employee-facing tools and views, but with broader navigation: managers can browse across the whole company, not just their own work. Edge case: if the manager has nobody to browse yet, explain what's happening instead of breaking navigation.

| Container                            | States                                           |
| ------------------------------------ | ------------------------------------------------ |
| `<header class="scoreboard-header">` | **.expanded** or **.collapsed** or **.unfolded** |

> Scoreboard + accountability hook. This header is the "engagement surface": it makes progress visible, keeps the system competitive in a friendly way, and reinforces accountability through transparent scoring. 1 completed ticket = 1 point. Edge case: ties, zero-activity days, or sudden score changes (e.g., a ticket reversed/deleted) should be communicated clearly so the scoreboard feels fair and trusted.

### Employee

| Container                    | States           |
| ---------------------------- | ---------------- |
| `<main class="logged-main">` | No state toggles |

> Primary workspace (employee view). Displays all pending tickets that have not been claimed. This is the "starting line" where employees pick work for the day and establish purpose through clear, available tasks. Edge case: if there are no pending tickets, show a positive empty state (e.g., "All caught up") and optionally point to alternate actions (check colleagues, review claimed, etc.).

| Container                         | States                          |
| --------------------------------- | ------------------------------- |
| `<aside class="claimed-leftbar">` | **.expanded** or **.collapsed** |

> Claimed/assigned work panel. Shows tickets currently claimed by (or assigned to) the employee. This is where the "work in progress → completion → scoring" loop actually lives.

| Container                             | States                          |
| ------------------------------------- | ------------------------------- |
| `<aside class="colleagues-rightbar">` | **.expanded** or **.collapsed** |

> Colleague coverage / continuity panel. Lets employees view and claim outstanding tickets from coworkers to keep momentum when someone is unavailable (vacation, sick leave, bandwidth issues). This supports continuity without breaking the workflow. Edge case: prevent double-claim race conditions (two people trying to claim the same ticket). If it happens, show a clear resolution message and reflect the updated ownership immediately.

| Container                            | States                                           |
| ------------------------------------ | ------------------------------------------------ |
| `<header class="scoreboard-header">` | **.expanded** or **.collapsed** or **.unfolded** |

> Shared transparency scoreboard. Visible to everyone, showing clear system-wide states (pending, assigned, deleted, resolved). The primary "score" is the resolved count to reinforce completion. Edge case: if certain states are restricted (e.g., deleted reasons, sensitive tickets), keep transparency by showing totals without exposing sensitive details.

---

## Find a Link

_Toggle: **Occupation**. Original planning: [find-a-link.pdf](../../assets/pdf-files/archive-documents/logical-structure/find-a-link.pdf)_

Specialists and Technicians get the same page with the same containers. Occupation only decides where it opens: Technicians start on the company's links, Specialists on their own bookmarks.

| Container                            | States                                           |
| ------------------------------------ | ------------------------------------------------ |
| `<main class="resources-main">`      | No state toggles                                 |
| `<aside class="modify-leftbar">`     | **.expanded** or **.collapsed**                  |
| `<aside class="bookmarks-rightbar">` | **.expanded** or **.collapsed**                  |
| `<header class="discovery-header">`  | **.expanded** or **.collapsed** or **.unfolded** |

> **Resources.** Every link you need on one page. Spreadsheets, policies, reports and schedules, the moment you sit down. Company links appear once you're clocked in, so you only ever see the company you're working for.

> **Modify.** Add, change or remove links. What you can publish depends on your role, and the owner signs off on the rest. Nothing changes behind anyone's back.

> **Bookmarks.** Your own links, private to you. They follow you between companies and never need a clock-in. Nobody else sees them, not even the owner.

> **Discovery.** Type and find. One search across company links and your bookmarks. It only ever shows what you're allowed to see.
