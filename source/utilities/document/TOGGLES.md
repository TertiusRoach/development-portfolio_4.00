# Toggles

Every application in TraLogFin asks the user one question, and the answer decides which page opens. Three apps, three questions, three toggles. The pairing is deliberate and never changes, so it's easy to memorise:

| Application      | The question            | Toggle         | Values                         |
| ---------------- | ----------------------- | -------------- | ------------------------------ |
| **Track a Day**  | What's your vocation?   | **Vocation**   | Established · Freelancing      |
| **Log a Ticket** | What's your position?   | **Position**   | Manager · Employee             |
| **Find a Link**  | What's your occupation? | **Occupation** | Specialist · Technician        |

This page is the map from toggle to page. The rules behind each toggle (who may change it, which combinations are allowed, what each role is permitted to do) live in [GUIDELINES.md](GUIDELINES.md). The containers each page is built from live in [CONTAINERS.md](CONTAINERS.md).

---

## Track a Day

> Frustrated with spreadsheets and done with guesswork?
> Track your time, and let the numbers speak for itself.

| Vocation        | Opens                          | What it's for                                                                                   | Test with     |
| --------------- | ------------------------------ | ----------------------------------------------------------------------------------------------- | ------------- |
| **Established** | `<main class="approve-main">`  | A register of overtime that goes to an HoD or the owner for approval                            | Jane Lester   |
| **Freelancing** | `<main class="report-main">`   | Reports the solutions delivered to each company, with the time spent there, ready for invoicing | Dimitri Lewis |

---

## Log a Ticket

> No one likes tickets, unless it's easy,
> with rewarding perks for the competitive.

| Position     | Opens                         | What it's for                                                         | Test with             |
| ------------ | ----------------------------- | --------------------------------------------------------------------- | --------------------- |
| **Manager**  | `<main class="tickets-main">` | Logging new tickets and assigning them to employees and freelancers   | Malik Tremaine Carter |
| **Employee** | `<main class="logged-main">`  | Every pending ticket that hasn't been claimed yet                     | Dale Sutton           |

---

## Find a Link

> Instantly access the links you need from,
> Spreadsheets, websites, schedules, or docs.

| Occupation     | Opens                           | Starts on                   | Test with   |
| -------------- | ------------------------------- | --------------------------- | ----------- |
| **Technician** | `<main class="resources-main">` | The company's links         | Hammad Dean |
| **Specialist** | `<main class="resources-main">` | Your own personal bookmarks | Jane Lester |

Both values open the same page with the same containers. Occupation only changes where it starts.

---

## Rules

1. **A toggle picks a page, nothing more.** It never grants or removes a permission. What a user may actually do on that page is decided by [GUIDELINES.md](GUIDELINES.md).
2. **Only the company owner changes Vocation and Position.** Moving up (Freelancing → Established, Employee → Manager) waits until the user accepts. Moving down applies immediately and silently.
3. **Occupation belongs to the user.** They can switch it at any time, because it only changes the launch page.
4. **HoD, Paid and Ads are not page toggles.** They change permissions and adverts, never which page opens.
5. **Every app shares the same frame.** `<div class="default-body">` and `<section class="default-overlay">` look and behave the same in all three apps. Only the containers inside change.

The "Test with" characters come from [CHARACTERS.md](CHARACTERS.md). The sales pitch for each app, as shown on the landing page, lives in `source/layouts/components/Section/demonstration/Section_demonstration.ts`.
