# Synchronization Thesis

How Track a Day, Log a Ticket, Find a Link and Pick a Page interact. This is a draft: it lives in `source/assets/md-files/` until the edge cases are worked out, then it moves to `source/utilities/document/`.

## Pinned: `<main>` Fullscreen Labels

Every application's `<main>` mirrors `[archive]` with the axes flipped: an outer `[x]` fullscreen named `elements` holding three `[y]` pages, left, centre and right. `startingPreview()` in `Main/${PageName}Functions.ts` toggles them, and each app opens on its centre page, which takes the app's own word (the field it's named after in `TraLogFin.json`).

| Application   | Outer      | Left page       | Centre page       | Right page      | Opens with                               |
| ------------- | ---------- | --------------- | ----------------- | --------------- | ---------------------------------------- |
| `[overtime]`  | `elements` | `(established)` | `(vocation)`      | `(freelancing)` | `startingPreview('(vocation)', 1)`       |
| `[ticketing]` | `elements` | `(manager)`     | `(position)`      | `(employee)`    | `startingPreview('(position)', 1)`       |
| `[hyperlink]` | `elements` | `(specialist)`  | `(occupation)`    | `(technician)`  | `startingPreview('(occupation)', 1)`     |
| `[landing]`   | `elements` | `(register)`    | `(demonstration)` | `(password)`    | `startingPreview('(demonstration)', 1)`  |

- The centre page opens the `<header>` on desktop and the `<footer>` on mobile. A character pick sends `<main>` back to it.
- `[landing]` opens on `(demonstration)` while the user is logged out, and on `(application)` once they're logged in. It stays `(demonstration)` for now.
- `[overtime]` is built. `[ticketing]` and `[hyperlink]` copy it when their turn comes; `[landing]` waits.

## How the Applications Interact

<!-- To be written. -->

## Open Edge Cases

<!-- To be written. -->
