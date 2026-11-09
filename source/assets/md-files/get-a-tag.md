# Get a Tag

`[archive]` · `components`. The testing surface every component passes through before an application uses it. A draft until its edge cases are worked out; see `synchronization-thesis.md`.

## `<main>` Pages

The outer fullscreen is `elements`, a `[y]` `<ol>`. It holds one `[x]` `<ul>` group per element, and each group holds that element's previews. `Main/ArchiveFunctions.ts` is the reference every application's `startingPreview()` is copied from.

| I           | II        | III        | IV           | V          | VI       | VII       | VIII     | IX             | X           | XI        | XII      |
| ----------- | --------- | ---------- | ------------ | ---------- | -------- | --------- | -------- | -------------- | ----------- | --------- | -------- |
| `(article)` | `(aside)` | `(button)` | `(division)` | `(figure)` | `(form)` | `(label)` | `(menu)` | `(navigation)` | `(section)` | `(table)` | `(time)` |

## Rules

- **It's an archive, so it's alphabetical.** A new group slots into its letter, and every numeral after it moves up one: in `ArchiveMain.tsx`, `ArchiveMain.scss`, `startingPreview()`'s cases, the Leftbar and Rightbar menus and the Header and Footer `MenuSwipe`s.
- **`[y]` is always an `<ol>`, `[x]` always a `<ul>`.** `[archive]` stacks its groups on `[y]` and slides their previews on `[x]`. The applications flip this.
- **It opens where you're working.** Move the `startingPreview('(division)', 1);` call in `ArchiveMain.tsx` to land on another group or preview. Each group's own `let viewName` decides where the others start.
- **Menus can move it too.** The Header and Footer `MenuSwipe`s, and the Leftbar and Rightbar menus, move `elements` and the groups by their exact `${labelName}-main_fullscreen-default` class.

## Behaviour

<!-- To be written. -->
