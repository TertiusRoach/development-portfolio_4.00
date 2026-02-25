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

> An screen where you can log a ticket appears inside `<main>` on top of everything when ypu click on "Log Ticket" inside of `<header>`. For simplicity's sake, only Managers can log tickets for now.

| Container                           | States                          |
| ----------------------------------- | ------------------------------- |
| `<aside class="completed-leftbar">` | **.expanded** or **.collapsed** |

> Managers can view their logged tickets which employees completed.

| Container                            | States                          |
| ------------------------------------ | ------------------------------- |
| `<aside class="employees-rightbar">` | **.expanded** or **.collapsed** |

> This is the same as page the employees see with all the usable features. Only difference is the navigation bar is divided into departments and not limited to the users specific department.

| Container                            | States                                           |
| ------------------------------------ | ------------------------------------------------ |
| `<header class="scoreboard-header">` | **.expanded** or **.collapsed** or **.unfolded** |

> This is the hook, this is the competing factor to make things fun whilst keeping everyone accountable. 1 Ticket completed is equal to one point.

| Container                          | States                                           |
| ---------------------------------- | ------------------------------------------------ |
| `<footer class="messages-footer">` | **.expanded** or **.collapsed** or **.unfolded** |

> This block will be repeated throughout and is meant to update the user.

## Employee

| Container                    | States           |
| ---------------------------- | ---------------- |
| `<main class="logged-main">` | No state toggles |

> This page shows all the pending tickets that hasn't been claimed. Allowing employees to have purpose by grabbing it to complete for the day.

| Container                         | States                          |
| --------------------------------- | ------------------------------- |
| `<aside class="claimed-leftbar">` | **.expanded** or **.collapsed** |

> This block shows all the tickets assigned or claimed by the user. It's the next step right after pending where the actual work and points tallying takes place.

| Container                             | States                          |
| ------------------------------------- | ------------------------------- |
| `<aside class="colleagues-rightbar">` | **.expanded** or **.collapsed** |

> Here you can view and claim any outstanding tickets from co-workers to continue the process in case the person is on vacation or not able to complete it in time.

| Container                            | States                                           |
| ------------------------------------ | ------------------------------------------------ |
| `<header class="scoreboard-header">` | **.expanded** or **.collapsed** or **.unfolded** |

> This is shown to everyone. Complete transparency on pending, assigned, deleted and resolved. The amount of resolved tickets will be the main score shown to everyone.

| Container                          | States                                           |
| ---------------------------------- | ------------------------------------------------ |
| `<footer class="messages-footer">` | **.expanded** or **.collapsed** or **.unfolded** |

> Like the previous description. This updates the user on the status of whatever they were doing.

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
