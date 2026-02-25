# [Containers](https://github.com/TertiusRoach/development-portfolio_4.00/blob/4.3/source/layouts/CONTAINERS.md)

Layouts is the folder that contains all my front-end based code. To separate concerns, this project employs a strategy by tagging all the main blocks with the following criteria `<element class="${labelName}-${blockName}">`. It's refined to orchestrate user attention and establish a clear hierarchy where the entry point resides in **source/pages/** and calls the structure from the **source/layout/containers/** folder. The layout will relate to the roleName which will be applied as a className to the parent container labelled `<div class id="${pageName}-body" class="${roleName} active/asleep">`. The criteria that affects the user experience will be based on those factors. Memorization and habits are critical when it comes to the user experience and development flow. This means that each block needs to have a guiding principle.

1. **Initial entry layer:** `<section id="${pageName}-overlay">`

> This is the first view a user encounters. It’s used to select which page/module to preview in the demo before entering the main experience.

2. **Primary workspace:** `<main id="${pageName}-main">`

> This is the main view shown after the overlay. It renders the selected page and updates its criteria/state based on the dataset and the user’s interactions

3. **Action and guidance panel:** `<aside id="${pageName}-leftbar">`

> A supporting container that presents the required actions, steps, or controls a user needs in order to use the software effectively.

4. **Context and loop reinforcement panel:** `<aside id="${pageName}-rightbar">`

> A companion container that mirrors the left bar’s supporting role, but focuses on connecting the user’s actions to the application’s goal/feedback loop (status, outcomes, next steps, etc.).

5. **Controls and configuration surface:** `<header id="${pageName}-header">`

> Contains page-level settings and feature toggles that let the user customize behavior and adjust how the page operates.

6. **Status and guidance messaging:** `<footer id="${pageName}-footer">`

> Reserved for short, end-of-action messages shown after the user logs or completes something. It provides confirmation, status updates, and next-step guidance (e.g., success/error states, reminders, or brief instructions) without interrupting the primary workflow.

---

# [Overtime](https://github.com/TertiusRoach/development-portfolio_4.00/blob/4.3/source/assets/pdf-files/logical-structure/track-a-day.pdf): Established or Freelancing

## Uniform Containers

| Container                           | States                          |
| ----------------------------------- | ------------------------------- |
| `<div class="default-body">`        | **.active** or **.asleep**      |
| `<section class="default-overlay">` | **.highlight** or **.downplay** |

## Established

| Container                            | States                                           |
| ------------------------------------ | ------------------------------------------------ |
| `<main class="approve-main">`        | No state toggles                                 |
| `<aside class="clocking-leftbar">`   | **.expanded** or **.collapsed**                  |
| `<aside class="request-rightbar">`   | **.expanded** or **.collapsed**                  |
| `<header class="clockboard-header">` | **.expanded** or **.collapsed** or **.unfolded** |
| `<footer class="messages-footer">`   | **.expanded** or **.collapsed** or **.unfolded** |

## Freelancing

| Container                            | States                                           |
| ------------------------------------ | ------------------------------------------------ |
| `<main class="report-main">`         | No state toggles                                 |
| `<aside class="clocking-leftbar">`   | **.expanded** or **.collapsed**                  |
| `<aside class="request-rightbar">`   | **.expanded** or **.collapsed**                  |
| `<header class="clockboard-header">` | **.expanded** or **.collapsed** or **.unfolded** |
| `<footer class="messages-footer">`   | **.expanded** or **.collapsed** or **.unfolded** |

---

# [Ticketing](https://github.com/TertiusRoach/development-portfolio_4.00/blob/4.3/source/assets/pdf-files/logical-structure/log-a-ticket.pdf): Manager or Employee

## Uniform Containers

| Container                           | States                          |
| ----------------------------------- | ------------------------------- |
| `<div class="default-body">`        | **.active** or **.asleep**      |
| `<section class="default-overlay">` | **.highlight** or **.downplay** |

## Manager

| Container                     | States           |
| ----------------------------- | ---------------- |
| `<main class="tickets-main">` | No state toggles |

> Primary workspace (manager view). This is where the manager’s ticket logging screen is rendered. When the user clicks “Log Ticket” in the `<header>`, a ticket form/dialog is displayed in the `<section class="default-overlay">` container on top of the rest of the page (so the logging flow stays focused and can be completed quickly). Edge case: if the user is not authorized (non-manager), the log UI should not open and a clear message should be shown (e.g., via the footer message system). Also handle “cancel/close with unsaved changes” gracefully.

| Container                           | States                          |
| ----------------------------------- | ------------------------------- |
| `<aside class="completed-leftbar">` | **.expanded** or **.collapsed** |

> Completed tickets panel. Shows tickets that were logged by managers and completed by employees, so managers can review outcomes and confirm throughput at a glance. Edge case: empty state (no completed tickets yet) should be informative rather than blank; long lists should remain usable (scrolling, grouping, or basic filtering) so the panel doesn’t become noise.

| Container                            | States                          |
| ------------------------------------ | ------------------------------- |
| `<aside class="employees-rightbar">` | **.expanded** or **.collapsed** |

> Employee-side feature access (manager scope). This panel mirrors the employee-facing tools and views, but with broader navigation: managers can browse across departments, not just a single department tied to one user. Edge case: if department metadata is missing or the manager has no assigned departments, fall back to a safe default (e.g., “All” or “Unassigned”) and explain what’s happening instead of breaking navigation.

| Container                            | States                                           |
| ------------------------------------ | ------------------------------------------------ |
| `<header class="scoreboard-header">` | **.expanded** or **.collapsed** or **.unfolded** |

> Scoreboard + accountability hook. This header is the “engagement surface”: it makes progress visible, keeps the system competitive in a friendly way, and reinforces accountability through transparent scoring. 1 completed ticket = 1 point. Edge case: ties, zero-activity days, or sudden score changes (e.g., a ticket reversed/deleted) should be communicated clearly so the scoreboard feels fair and trusted.

| Container                          | States                                           |
| ---------------------------------- | ------------------------------------------------ |
| `<footer class="messages-footer">` | **.expanded** or **.collapsed** or **.unfolded** |

> Status + guidance messages. A persistent feedback channel for confirmations, warnings, and next-step prompts (e.g., “Ticket logged”, “Permission denied”, “Network error—try again”). This keeps the UI responsive without forcing popups for every event. Edge case: multiple events firing quickly (batch actions, rapid clicks, retries) should not spam the user—messages should queue, deduplicate, or summarize when appropriate.

## Employee

| Container                    | States           |
| ---------------------------- | ---------------- |
| `<main class="logged-main">` | No state toggles |

> Primary workspace (employee view). Displays all pending tickets that have not been claimed. This is the “starting line” where employees pick work for the day and establish purpose through clear, available tasks. Edge case: if there are no pending tickets, show a positive empty state (e.g., “All caught up”) and optionally point to alternate actions (check colleagues, review claimed, etc.).

| Container                         | States                          |
| --------------------------------- | ------------------------------- |
| `<aside class="claimed-leftbar">` | **.expanded** or **.collapsed** |

> Claimed/assigned work panel. Shows tickets currently claimed by (or assigned to) the employee—this is where the “work in progress → completion → scoring” loop actually lives. Edge case: tickets can become stale (reassigned, resolved elsewhere, or deleted). The panel should handle conflicts cleanly (refresh state, show what changed, and avoid silently dropping items).

| Container                             | States                          |
| ------------------------------------- | ------------------------------- |
| `<aside class="colleagues-rightbar">` | **.expanded** or **.collapsed** |

> Colleague coverage / continuity panel. Lets employees view and claim outstanding tickets from coworkers to keep momentum when someone is unavailable (vacation, sick leave, bandwidth issues). This supports continuity without breaking the workflow. Edge case: prevent double-claim race conditions (two people trying to claim the same ticket). If it happens, show a clear resolution message and reflect the updated ownership immediately.

| Container                            | States                                           |
| ------------------------------------ | ------------------------------------------------ |
| `<header class="scoreboard-header">` | **.expanded** or **.collapsed** or **.unfolded** |

> Shared transparency scoreboard. Visible to everyone, showing clear system-wide states (pending, assigned, deleted, resolved). The primary “score” is the resolved count to reinforce completion. Edge case: if certain states are restricted (e.g., deleted reasons, sensitive tickets), keep transparency by showing totals without exposing sensitive details.

| Container                          | States                                           |
| ---------------------------------- | ------------------------------------------------ |
| `<footer class="messages-footer">` | **.expanded** or **.collapsed** or **.unfolded** |

> Status + guidance messages (employee). Same role as in the manager view: confirms actions (claimed, unclaimed, resolved), surfaces errors, and provides next-step guidance without disrupting flow. Edge case: offline/slow network should degrade gracefully (clear retry messaging, “pending sync” indicator if applicable, and no misleading success confirmations).

---

# [Hyperlink](https://github.com/TertiusRoach/development-portfolio_4.00/blob/4.3/source/assets/pdf-files/logical-structure/find-a-link.pdf): Specialist or Technician

## Uniform Containers

| Container                           | States                          |
| ----------------------------------- | ------------------------------- |
| `<div class="default-body">`        | **.active** or **.asleep**      |
| `<section class="default-overlay">` | **.highlight** or **.downplay** |

## Specialist

| Container                            | States                                           |
| ------------------------------------ | ------------------------------------------------ |
| `<main class="resources-main">`      | No state toggles                                 |
| `<aside class="modify-leftbar">`     | **.expanded** or **.collapsed**                  |
| `<aside class="bookmarks-rightbar">` | **.expanded** or **.collapsed**                  |
| `<header class="discovery-header">`  | **.expanded** or **.collapsed** or **.unfolded** |
| `<footer class="messages-footer">`   | **.expanded** or **.collapsed** or **.unfolded** |

## Technician

| Container                            | States                                           |
| ------------------------------------ | ------------------------------------------------ |
| `<main class="resources-main">`      | No state toggles                                 |
| `<aside class="modify-leftbar">`     | **.expanded** or **.collapsed**                  |
| `<aside class="bookmarks-rightbar">` | **.expanded** or **.collapsed**                  |
| `<header class="discovery-header">`  | **.expanded** or **.collapsed** or **.unfolded** |
| `<footer class="messages-footer">`   | **.expanded** or **.collapsed** or **.unfolded** |

---
