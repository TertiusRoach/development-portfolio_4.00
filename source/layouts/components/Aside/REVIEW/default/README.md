<details>
<summary><strong>📁 Project Index</strong></summary>

- [source](#source)
  - [layouts](#layouts)
  - [components](#components)
    - [Aside](#aside)
    - [Button](#button)
    - [Canvas](#canvas)
    - [Division](#division)
    - [Fieldset](#fieldset)
    - [Figure](#figure)
    - [Footer](#footer)
    - [Form](#form)
    - [Header](#header)
    - [Input](#input)
    - [List](#list)
    - [Menu](#menu)
    - [Navigation](#navigation)
    - [Section](#section)
    - [Span](#span)
    - [Table](#table)
    - [Time](#time)
  - [containers](#containers) - [Footer](#footer-containers)
  </details>

---

# Project Structure Overview

## source

Main app directory.

### layouts

Page templates.

### components

Reusable UI grouped by element or purpose.

#### Aside

For sidebar UI.

- `Aside-buttons.ts`: logic
- `Aside-buttons.scss`: style
- `Aside-buttons.tsx`: view
- `Aside-overlay.tsx`: overlay
- `Aside-rightbar.tsx`: sidebar variation

#### Button

Button groups:

- `bin`: temp
- `archive`: old
- `default`: standard
- `cleaned`: optimized

#### Canvas → Time

Each folder = HTML element match. Keeps logic modular and traceable:

- Canvas
- Division
- Fieldset
- Figure
- Footer
- Form
- Header
- Input
- List
- Menu
- Navigation
- Section
- Span
- Table
- Time

### containers

Wrap components with state or logic.

#### Footer Containers

- `ButtonsFooter.tsx` + `.scss`: footer with buttons
- `LandingFooter`: for landing pages
- `OvertimeFooter`: for time tracking

---

### Notes

- Prefer `PascalCase.tsx` for components (e.g. `AsideMain.tsx`)
- Use `kebab-case` for general files (`global-styles.scss`, `page-utils.ts`)
- Hyphens > underscores for readability and cross-platform safety
- Consistency > preference
