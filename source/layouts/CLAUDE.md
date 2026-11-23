# CLAUDE.md: Front End

The rules for `source/layouts/` and everything else the front end owns (development-portfolio_4.00, public). The shared baseline, with the safety rules and "teach by default", is the root [CLAUDE.md](../../CLAUDE.md); read it first.

## Read the Documents First

- How code is written → `front-end/FRONT-END.md`
- Shared folder structure and file types → `front-end/COMPONENTS.md`
- Pages, containers, contexts, tables → `front-end/TOGGLES.md`, `CONTAINERS.md`, `CONTEXTS.md`, `TABLE.md`
- What the application allows, and who tests it → `GUIDELINES.md`, `CHARACTERS.md`

All of them are in `source/utilities/documents/`.

## How to Work Here

1. **One step at a time.** Small, scoped changes. No broad refactors, no "while I'm here" cleanups.
2. **Match the existing code exactly:** naming, comment flags (`//--|🠊 … 🠈|--\\`), file layout and order. No new patterns or abstractions.
3. **Readability beats brevity.** Repetition is fine; clever shortcuts are not.
4. **Visible components scale through `desktop-landscape`, `mobile-portrait` and `tablet-squaring`.** `<section>`, `<div>` and `<nav>` may merge into one set of rules when every orientation behaves the same. See FRONT-END.md, Scaling Pattern.
5. **No inline styles.** Use SASS and state classes; never `element.style.*` or a `style="…"` attribute unless truly necessary. See FRONT-END.md, No Inline Styles.
6. **Don't "fix" deliberate design.** Check FRONT-END.md, Deliberate Choices, and compare sizes with `styles/Mixins.scss` before calling anything a bug.
7. **Don't change GUIDELINES.md rules on your own.** New rules come from a conversation with the owner. When a rule is unclear, it leans toward the worker.

## Commands

```bash
npm run app        # Development server on http://localhost:8080
npm run deploy     # Production build into public/
npm run stop       # Free port 8080
npx sass --no-source-map path/to/file.scss > /dev/null   # Check that SCSS compiles
npx tsc --noEmit -p tsconfig.json                        # Type-check (0 errors; the two read-only originals in vendors/ are excluded; keep it at 0)
```

There is no automated test suite. Components are tested visually on the Archive page; application rules are tested with the characters in `CHARACTERS.md`.
