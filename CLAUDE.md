# CLAUDE.md

Guidance for AI assistants (and anyone else) working in this repository.

## What This Is

TraLogFin: three office applications (Track a Day, Log a Ticket, Find a Link) built with React, TypeScript, SCSS and Webpack on the front end, and Express with MongoDB on the back end. It's a hand-built portfolio project, designed in Figma first, and every number in it is deliberate.

## Read the Documents First

**If you're unsure about anything, read `source/utilities/document/` before guessing.** Start with `RULEBOOK.md`: it explains how code is written here and points to every other document.

- How code is written → `RULEBOOK.md`
- What the application allows → `GUIDELINES.md`
- Pages, containers, characters, data, setup, Git → `TOGGLES.md`, `CONTAINERS.md`, `CHARACTERS.md`, `TABLE.md`, `MODULES.md`, `GITHUB.md`, `EDITOR.md`

## How to Work Here

1. **Ask before changing code.** Explain what you'd change and why, show the snippet, and wait for a yes. The owner wants to understand and own every line.
2. **One step at a time.** Small, scoped changes. No broad refactors, no "while I'm here" cleanups.
3. **Match the existing code exactly:** naming, comment flags (`//--|🠊 … 🠈|--\\`), file layout and order. No new patterns or abstractions.
4. **Readability beats brevity.** Repetition is fine; clever shortcuts are not.
5. **Visible components scale through `desktop-landscape`, `mobile-portrait` and `tablet-squaring`.** `<section>`, `<div>` and `<nav>` may merge into one set of rules when every orientation behaves the same. See RULEBOOK.md, Scaling Pattern.
6. **No inline styles.** Use SASS and state classes; never `element.style.*` or a `style="…"` attribute unless truly necessary. See RULEBOOK.md, No Inline Styles.
7. **Don't "fix" deliberate design.** Check RULEBOOK.md, Deliberate Choices, and compare sizes with `styles/Mixins.scss` before calling anything a bug.
8. **Don't change GUIDELINES.md rules on your own.** New rules come from a conversation with the owner. When a rule is unclear, it leans toward the worker.
9. **Don't run Git commands that change history or the remote** (commit, push, tag, delete) unless asked.

## Commands

```bash
npm run app        # Development server on http://localhost:8080
npm run deploy     # Production build into public/
npm run stop       # Free port 8080
npx sass --no-source-map path/to/file.scss > /dev/null   # Check that SCSS compiles
npx tsc --noEmit -p tsconfig.json                        # Type-check (some errors already exist; the count must not go up)
```

There is no automated test suite. Components are tested visually on the Archive page; application rules are tested with the characters in `CHARACTERS.md`.
