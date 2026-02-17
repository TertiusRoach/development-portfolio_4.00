# [Containers](https://github.com/TertiusRoach/development-portfolio_4.00/blob/4.3/source/layouts/CONTAINERS.md)

Layouts is the folder that contains all my front-end based code. To separate concerns, this project employs a strategy by tagging all the main blocks with the following criteria <element class="${labelName}-${blockName}">. It's refined to orchestrate user attention and establish a clear hierarchy where the entry point resides in ==source/pages/== and calls the structure from the ==source/layout/containers/== folder. The layout will relate to the roleName which will be applied as a className to the parent container labelled <div class id="${pageName}-body" class="${roleName} active">. The criteria that affects the user experience will be based on those factors.

- `Overlay`
- `Leftbar`
- `Rightbar`
- `Header`
- `Main`
- `Footer`

Memorization and habits are critical when it comes to the user experience and development flow. This means that each block needs to have a guiding principle.

`<section id="${pageName}-overlay">`

> Initial entry layer.

This is the first view a user encounters. It’s used to select which page/module to preview in the demo before entering the main experience.

`<main id="${pageName}-main">`

> Primary workspace.

This is the main view shown after the overlay. It renders the selected page and updates its criteria/state based on the dataset and the user’s interactions

`<aside id="${pageName}-leftbar">`

> Action and guidance panel.

A supporting container that presents the required actions, steps, or controls a user needs in order to use the software effectively.

`<aside id="${pageName}-rightbar">`

> Context and loop reinforcement panel.

A companion container that mirrors the left bar’s supporting role, but focuses on connecting the user’s actions to the application’s goal/feedback loop (status, outcomes, next steps, etc.).

`<header id="${pageName}-header">`

> Controls and configuration surface.

Contains page-level settings and feature toggles that let the user customize behavior and adjust how the page operates.

---

# [Overtime](https://github.com/TertiusRoach/development-portfolio_4.00/blob/4.3/source/assets/pdf-files/logical-structure/track-a-day.pdf)

> .freelancing or .established

<section id="overtime-overlay" class="default-overlay highlight/downplay">

## Freelancing

`<main class="report-main">`

Description. [^1]

[^1]: stateName: No state toggles.

`<header class="clockboard-header expanded/collapsed/unfolded">`

`<aside class="clocking-leftbar expanded/collapsed">`

`<aside class="request-rightbar expanded/collapsed">`

`<footer class="messages-footer expanded/collapsed/unfolded">`

## Established

`<main class="approve-main">`
`<header class="clockboard-header expanded/collapsed/unfolded">`
`<aside class="clocking-leftbar expanded/collapsed">`
`<aside class="request-rightbar expanded/collapsed">`
`<footer class="messages-footer expanded/collapsed/unfolded">`

---

# [Ticketing](https://github.com/TertiusRoach/development-portfolio_4.00/blob/4.3/source/assets/pdf-files/logical-structure/log-a-ticket.pdf)

> .manager or .employee

<section id="ticketing-overlay" class="default-overlay highlight/downplay">

# Manager

<main class="tickets-main">
<header class="scoreboard-header expanded/collapsed/unfolded">
<aside class="completed-leftbar expanded/collapsed">
<aside class="employees-rightbar expanded/collapsed">
<footer class="messages-footer expanded/collapsed/unfolded">

# Employee

<main class="logged-main">
<header class="scoreboard-header expanded/collapsed/unfolded">
<aside class="profile-leftbar expanded/collapsed">
<aside class="colleagues-rightbar expanded/collapsed">
<footer class="messages-footer expanded/collapsed/unfolded">

---

# [Hyperlink](https://github.com/TertiusRoach/development-portfolio_4.00/blob/4.3/source/assets/pdf-files/logical-structure/find-a-link.pdf)

> .specialist or .technician

<section id="hyperlink-overlay" class="default-overlay highlight/downplay">

# Specialist

<main class="resources-main">

<header class="discovery-header expanded/collapsed/unfolded">
<aside class="modify-leftbar expanded/collapsed">
<aside class="bookmarks-rightbar expanded/collapsed">
<footer class="messages-footer expanded/collapsed/unfolded">

# Technician

<main class="resources-main">

<header class="discovery-header expanded/collapsed/unfolded">
<aside class="modify-leftbar expanded/collapsed">
<aside class="bookmarks-rightbar expanded/collapsed">
<footer class="messages-footer expanded/collapsed/unfolded">

---
