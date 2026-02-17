# [Containers](https://github.com/TertiusRoach/development-portfolio_4.00/blob/4.3/source/layouts/CONTAINERS.md)

Layouts is the folder that contains all my front-end based code. To separate concerns, this project employs a strategy by tagging all the main blocks with the following criteria <element class="${labelName}-${blockName}">. It's refined to orchestrate user attention and establish a clear hierarchy where the entry point resides in **source/pages/** and calls the structure from the **source/layout/containers/** folder. The layout will relate to the roleName which will be applied as a className to the parent container labelled <div class id="${pageName}-body" class="${roleName} active">. The criteria that affects the user experience will be based on those factors.

- `Overlay`
- `Leftbar`
- `Rightbar`
- `Header`
- `Main`
- `Footer`

Memorization and habits are critical when it comes to the user experience and development flow. This means that each block needs to have a guiding principle.

<section id="${pageName}-overlay">: The first page you see. This lets the user set which page they want to preview in the demo.
<main id="${pageName}-main">: Second page you see and toggles the criteria based on the data set by the application based on what the user does.
<aside id="${pageName}-leftbar">: Is an accompanying container determining actions the user needs to take in order to use the software.
<aside id="${pageName}-rightbar">: Just like its counterpart, this does the same to interconnect the goal and loop established by the software.
<header class="${pageName}-header">: This contains all the settings and features for the user to change as they wish.

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
