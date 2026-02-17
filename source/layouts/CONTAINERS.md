# [Containers](https://github.com/TertiusRoach/development-portfolio_4.00/blob/4.3/source/layouts/CONTAINERS.md)

Layouts is the folder that contains all my front-end based code. To separate concerns, this project employs a strategy by tagging all the main blocks with the following criteria <element class="${labelName}-${blockName}">. It's refined to orchestrate user attention and establish a clear hierarchy where the entry point resides in **source/pages/** and calls the structure from the **source/layout/containers/** folder. The layout will relate to the roleName which will be applied as a className to the parent container labelled <div class id="${pageName}-body" class="${roleName} active">. The criteria that affects the user experience will be based on those factors.

- `Overlay`
- `Leftbar`
- `Rightbar`
- `Header`
- `Main`
- `Footer`

---

# [Overtime](https://github.com/TertiusRoach/development-portfolio_4.00/blob/4.3/source/assets/pdf-files/logical-structure/track-a-day.pdf)

> .freelancing or .established

<section id="overtime-overlay" class="selection-overlay highlight/downplay">

## Freelancing

<main class="report-main">
<header class="clockboard-header expanded/collapsed/unfolded">
<aside class="clocking-leftbar expanded/collapsed">
<aside class="request-rightbar expanded/collapsed">
<footer class="messages-footer expanded/collapsed/unfolded">

## Established

<main class="approve-main">
<header class="clockboard-header expanded/collapsed/unfolded">
<aside class="clocking-leftbar expanded/collapsed">
<aside class="request-rightbar expanded/collapsed">
<footer class="messages-footer expanded/collapsed/unfolded">

---

# [Ticketing](https://github.com/TertiusRoach/development-portfolio_4.00/blob/4.3/source/assets/pdf-files/logical-structure/log-a-ticket.pdf)

> .manager or .employee

<section id="ticketing-overlay" class="selection-overlay highlight/downplay">

# Manager

<main class="tickets-main">
<header class="scoreboard-header expanded/collapsed/unfolded">
<aside class="completed-leftbar expanded/collapsed">
<aside class="employees-rightbar expanded/collapsed">
<footer class="messages-footer expanded/collapsed/unfolded">

# Employee

<main class="logged-main">
<header class="scoreboard-header">
<aside class="profile-leftbar">
<aside class="colleagues-rightbar">
<footer class="messages-footer">

---

# [Hyperlink](https://github.com/TertiusRoach/development-portfolio_4.00/blob/4.3/source/assets/pdf-files/logical-structure/find-a-link.pdf)

> .specialist or .technician

# Specialist

<main class="iframe-main">

<section class="bookmarks-overlay">

<aside class="edit-leftbar">
<aside class="links-rightbar">

<footer class="messages-footer">

# Technician

<main class="iframe-main">

<section class="bookmarks-overlay">

<aside class="links-rightbar">
<aside class="archive-leftbar">

<footer class="messages-footer">

---
