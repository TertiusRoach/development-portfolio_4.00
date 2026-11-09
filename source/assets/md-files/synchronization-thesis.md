# Synchronization Thesis

How Track a Day, Log a Ticket, Find a Link and Pick a Page interact. This is a draft: it lives in `source/assets/md-files/` until the edge cases are worked out, then it moves to `source/utilities/document/`.

## Pinned: `<main>` Fullscreen Labels

Every application's `<main>` follows `[archive]`: an outer `[y]` fullscreen holding three `[x]` carousels, the left, middle and right pages. `startingPreview()` in `Main/${PageName}Functions.ts` toggles them, and each app opens on its middle page.

| Application   | Outer (was `elements`) | Left page       | Middle page  | Right page      | Opens with                          |
| ------------- | ---------------------- | --------------- | ------------ | --------------- | ----------------------------------- |
| `[overtime]`  | `vocation`             | `(established)` | `(reminder)` | `(freelancing)` | `startingPreview('(vocation)', 2)`   |
| `[ticketing]` | `position`             | `(manager)`     | `(convey)`   | `(employee)`    | `startingPreview('(position)', 2)`   |
| `[hyperlink]` | `occupation`           | `(specialist)`  | `(figures)`  | `(technician)`  | `startingPreview('(occupation)', 2)` |
| `[landing]`   | `entrance`             | `(register)`    | `(login)`    | `(password)`    | `startingPreview('(entrance)', 2)`   |

Waiting on the placeholders.

## How the Applications Interact

<!-- To be written. -->

## Open Edge Cases

<!-- To be written. -->
