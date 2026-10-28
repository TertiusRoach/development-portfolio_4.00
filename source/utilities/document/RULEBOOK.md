# Rulebook

How code is written in this repository. Every rule here exists because breaking it once cost me time. If you're about to change something and you're not sure how, the answer is either on this page or in one of the documents it points to.

---

## Contents

1. [The Philosophy](#1-the-philosophy)
2. [Where to Find What](#2-where-to-find-what)
3. [Naming](#3-naming)
4. [Component Anatomy](#4-component-anatomy)
5. [Bracket Syntax](#5-bracket-syntax)
6. [Scaling Pattern](#6-scaling-pattern)
7. [Colours](#7-colours)
8. [Comment Flags](#8-comment-flags)
9. [Testing](#9-testing)
10. [Parked for Later](#10-parked-for-later)

---

## 1. The Philosophy

1. **Readability beats brevity.** More lines are fine. Repeating a value is fine. A clever shortcut that saves ten lines and costs ten minutes of head-scratching later is not.
2. **Match what's already there.** Same naming, same comment flags, same file layout, same order of things. A new file should look like it was always part of the project.
3. **One step at a time.** Change one thing, check it, then move on. Big sweeping refactors are how a project stops belonging to the person who built it.
4. **Understand it before you ship it.** No code goes in that nobody can explain. That's the whole defence against vibe coding.
5. **Nothing is ever finished.** Every component is still being refactored. Don't treat any of it as frozen, and don't hide any of it.
6. **Quirks can be identity.** Some behaviours look like bugs and are deliberate (see [Deliberate Choices](#deliberate-choices)). Only real visual bugs get fixed.
7. **The design comes first.** Sizes, gutters and colours are worked out in Figma and measured against the skeleton in `styles/Mixins.scss`. If a number looks odd, compare it with the skeleton before changing it.

### Deliberate Choices

- **`<ButtonDefault>` text hover.** The background changes shade when you hover the button, but the text colour only flips when the cursor is on the text itself (`div[class='text'] *:hover`). It's snappy on purpose and part of the project's identity. Improve the contrast in the in-between state if needed; never "fix" the behaviour.

---

## 2. Where to Find What

Every document lives in `source/utilities/document/`. If you're unsure about anything, look here first.

| Document                         | What it answers                                                                      |
| -------------------------------- | ------------------------------------------------------------------------------------ |
| **RULEBOOK.md** (this page)      | How code is written: naming, files, scaling, colours, comments                        |
| [GUIDELINES.md](GUIDELINES.md)   | What the application allows: roles, permissions, clock-ins, overtime, ghost hours, offline mode |
| [TOGGLES.md](TOGGLES.md)         | Which page each toggle opens (Vocation, Position, Occupation)                        |
| [CONTAINERS.md](CONTAINERS.md)   | The six containers every page is built from, and what each one does per app          |
| [CHARACTERS.md](CHARACTERS.md)   | The 18 test characters, their facts, their psychology and the rules they test        |
| [TABLE.md](TABLE.md)             | `<table>` rules, ISO weeks, how data travels, MongoDB-to-MySQL rules, IndexedDB       |
| [MODULES.md](MODULES.md)         | Setting up the database, secrets, test emails and the server on any OS               |
| [GITHUB.md](GITHUB.md)           | Machine setup, the release cycle, tags, syncing machines, fixing Git trouble         |
| [EDITOR.md](EDITOR.md)           | VS Code shortcuts, what `.vscode/` does, keeping the Explorer readable               |
| [REFERENCE.md](REFERENCE.md)     | The template the main `README.md` follows                                            |

**When two documents seem to disagree:** GUIDELINES.md wins on what the app allows, this page wins on how the code is written, and the PDFs in `source/assets/pdf-files/` win on character facts.

---

## 3. Naming

### Pages, Blocks and Labels

| Name        | Identifies             | Written as   | Example result                    |
| ----------- | ---------------------- | ------------ | --------------------------------- |
| `pageName`  | The application        | `[overtime]` | `<div id="overtime-body">`        |
| `blockName` | The container          | `<leftbar>`  | `<aside id="overtime-leftbar">`   |
| `labelName` | The role-specific view | `(clocking)` | `class="clocking-leftbar"`        |

The full explanation is in [CONTAINERS.md](CONTAINERS.md#naming).

### Files

| File                                  | Example                     | Holds                                          |
| ------------------------------------- | --------------------------- | ---------------------------------------------- |
| `${Element}.${variant}.tsx`           | `Button.default.tsx`        | Markup and props                               |
| `${Element}.${variant}.scss`          | `Button.default.scss`       | Imports the pipeline and applies it per screen |
| `${Element}_${variant}.ts`            | `Button_default.ts`         | `createClass()` and other logic                |
| `pipeline/${Element}_${part}.scss`    | `Button_tint.scss`          | One concern per file (see below)               |
| `${PageName}${BlockName}.tsx`         | `OvertimeLeftbar.tsx`       | One container of one page                      |

Documents in `source/utilities/document/` are named in **CAPITALS** (`GUIDELINES.md`).

### State Classes

State classes are intentionally simple. They act like a contract between the scripts and the styles: scripts only ever swap these classes, and styles only ever react to them.

| State Type          | Classes                                         | Alternatives              | Purpose                                                               |
| ------------------- | ----------------------------------------------- | ------------------------- | --------------------------------------------------------------------- |
| **Operating State** | `.active` · `.asleep`                           | `.running` · `.disabled`  | Whether a page (`#${pageName}-body`) is in use                        |
| **Preview State**   | `.visible` · `.hidden`                          | `.reveal` · `.conceal`    | Show or hide elements, mainly inside `layouts/components`             |
| **Indexed State**   | `.expanded` · `.collapsed`                      | `.unfolded` · `.squaring` | Blocks that open and close while staying part of the page             |
| **Emphasize State** | `.highlight` · `.downplay`                      |                           | On a `<button>`: `.highlight` swaps it to the opposite shade, `.downplay` keeps its own |
| **Locked State**    | `.locked-${blockName}` · `.frozen-${blockName}` |                           | Block repeat clicks while a container animates, or freeze it entirely |
| **Daytime State**   | `.ante-meridiem` · `.post-meridiem`             |                           | Set on `<body>` by the clock: 05:00 to 16:59 is AM, the rest is PM    |

`.running` is a reserved name; it isn't used in the code yet. `.conceal` blurs a `<SectionDemonstration>` card away while a character preview slides in.

### No Inline Styles

Use SASS wherever possible. Scripts never write `element.style.*` and elements never get a `style="…"` attribute, unless there's truly no other way (a value that only exists at runtime, such as a measured pixel position). An inline style beats every SCSS selector, so it works like `!important`: it sticks to the element, and the scaling mixins can no longer override it.

When a script needs something to look different, give the look a state class in SCSS and have the script add, remove or swap that class:

```ts
demoCard.classList.add('conceal'); //--|🠈 not demoCard.style.opacity = '0' 🠈|--\\
```

The `style={{ … }}` props on components (`color`, `view`, `shade`, `image`) aren't inline styles. They're turned into class names, so they're fine.

### Git

Branches are `#.#` (`4.7`), tags are `v#.##` (`v4.07`). The full rules are in [GITHUB.md](GITHUB.md#1-naming-rules).

---

## 4. Component Anatomy

Components are the building blocks in `source/layouts/components/`. Every component follows the same pattern, so once you can read one, you can read them all. Using `<ButtonDefault>` as the reference:

```
components/Button/default/
├── Button.default.tsx          # Markup and props
├── Button.default.scss         # Imports the pipeline and applies it per screen
├── Button_default.ts           # createClass() and the shared StyleProps type
└── pipeline/
    ├── Button_flex.scss        # Flex alignment and padding
    ├── Button_grid.scss        # Grid placement (top, bottom, left, right, center)
    ├── Button_size.scss        # Font and element sizing
    ├── Button_tint.scss        # Colours, shades and transitions, from styles/Palettes.scss
    └── Button_corn.scss        # Corner radii and border widths
```

`<ButtonDefault>`, `<ButtonProfile>` and `<ButtonRouting>` are written the same way, line for line. When they disagree, `<ButtonDefault>` is the baseline.

### Pipeline Files

- **One order everywhere:** flex, grid, size, tint, corn. The `@use` lines, the global includes and every orientation block follow it.
- **Every file is always there.** Each one exports `desktop-*`, `mobile-*` and `tablet-*`, and each mixin opens with its flag: `//--|🠋 Desktop (Flex) 🠋|--\\`. A mixin with nothing to do stays, with a `/*--|🠋 … 🠉|--*/` note saying where the other variants handle that part.
- **Global mixins** (`${variant}-flexbox`, `${variant}-gridbox`, `${variant}-colors`) hold what never changes per screen. They're included outside the media queries, and a `//--|===|--\\` divider separates them from `desktop-*`.
- **Inner layers are selected by exact class:** `div[class='text']`, never `.text`. Two things follow from that:
  - The layers can't carry a second class: `class="text visible"` no longer matches. State classes (`.highlight`, `.hidden`…) only ever go on the `<button>` itself.
  - Every pipeline file has the same specificity, so the include order decides who wins. Colour belongs to `*_tint.scss` alone. Other files set `border-*-width` and `border-style`, never the `border:` shorthand, which quietly resets the colour.
- **No outer shadows or glows.** Neighbouring containers paint over anything that reaches outside a button, so it looks clipped. Inset shadows (the bevel) and text glow are fine.

### Error Messages

Errors keep the props' own wrappers, so they read like the prop that caused them:

```ts
throw new Error(`|🠊 Error: Invalid ~${stripBrackets(shade, '~~')}~ or (${stripBrackets(color, '()')}) 🠈|`);
//--|🠈 |🠊 Error: Invalid ~dark~ or (red) 🠈| 🠈|--\\
```

### Props and Events

- **`info` is the same everywhere:** `pageName`, `blockName` and `labelName`, even when a component doesn't use them. Uniformity is what makes the files memorable. `info.labelAria` is optional and is read aloud when a button has no visible text.
- **Every `<Button>` lists every event.** The ones it uses (`onClick`, `onMouseEnter`, `onMouseLeave`, `onDoubleClick`) are live. The rest stay in a `/* … */` block under them, typed with their real event (`KeyboardEvent`, `FocusEvent`, `TouchEvent`…), ready to switch on.

Smaller components keep everything in one `.scss` file and split it with placeholders instead: `%desk-flex`, `%desk-grid`, `%desk-tint` and their `mobi-` and `tabl-` versions (see [Scaling Pattern](#6-scaling-pattern)).

### Component Rules

- **`<table>` is only for database records.** Never for layout. See [TABLE.md](TABLE.md#1-when-to-use-table).
- **Components never talk to the database.** Data comes in through props, events go out through callbacks. See [TABLE.md](TABLE.md#5-how-data-reaches-a-table).

### Declaration Order

Every `.ts` and `.tsx` file in `components/` and `containers/` declares its functions by how deep they sit in the call chain, so the keyword tells you where you are:

| Keyword    | Depth  | Role                                                                     |
| ---------- | ------ | ------------------------------------------------------------------------ |
| `function` | First  | The main function, the one the file is named after and exports           |
| `const`    | Second | Called by the `function`                                                 |
| `let`      | Third  | Called by a `const`                                                      |
| `var`      | Fourth | Called by a `let`. Best avoided; no file has needed to go this deep yet  |

- **One main function, exported twice.** A file with one main function declares it as `export function`, and the last line of the file repeats it on its own: `export default ButtonDefault;`. The separate line is deliberate: the end of every file says what the file is. Helpers stay at file level, unexported, and are never nested inside another function.
- **Several main functions, no default.** A file of equal utilities (like `scripts.ts`) uses named exports only, so a default export always means "the one this file is about".
- **Values inside a function.** A flag worked out once per render is a `let` with its type written out, and its reason as a trailing comment: `let styleImage: boolean = /\.(png|jpe?g)$/i.test(…); //--|🠈 … 🠈|--\\`. Lookup maps (`parentFont`) and results (`const classColor = createColor(…)`) are `const`; they're values, not second-level functions.
- **Types are shared, not copied.** `Button_default.ts` exports `StyleProps` by name, and `Button.default.tsx` imports it.

`<ButtonDefault>` is the reference: `export function ButtonDefault` … `export default ButtonDefault;` in the `.tsx`, and `export function createClass` calling `const createLayout` and `const createColor` … `export default createClass;` in the `.ts`. Older files are being moved to this order as they're refactored.

Inside the `<button>` tag, attributes come in three groups split by `//--|===|--\\`: identity (`id`, `className`), events (`onClick` … `onDoubleClick`), then accessibility (`aria-label`).

---

## 5. Bracket Syntax

Props are written with brackets that show their type at a glance. `stripBrackets()` in `source/scripts.ts` removes them, and `createClass()` turns style props into short class names.

| Wrapper | Prop          | Example                       | Becomes             |
| ------- | ------------- | ----------------------------- | ------------------- |
| `[ ]`   | `pageName`    | `'[components]'`              | `components`        |
| `< >`   | `blockName`   | `'<main>'`                    | `main`              |
| `< >`   | `style.size`  | `'<h1>'` … `'<p>'`            | `one` … `par`       |
| `- -`   | `style.view`  | `'-top-'` · `'-left-'`        | `top` · `lef`       |
| `~ ~`   | `style.shade` | `'~dark~'` · `'~light~'`      | `dar` · `lig`       |
| `( )`   | `style.color` | `'(blue)'` · `'(mono)'`       | `blu` · `mon`       |
| `( )`   | `style.role`  | `'(manager)'`                 | `manager`           |
| `{ }`   | `style.type`  | `'{toggle}'` · `'{select}'`   | `toggle` · `select` |

For example, `<h3>` + `-left-` + `~dark~` + `(blue)` with an image produces `class="default-button thr_lef_dar_blu_def"`. The last part of the class is a toggle between a variant's two looks:

| Variant           | `.svg`                 | `.png` / `.jpg`            | No image        |
| ----------------- | ---------------------- | -------------------------- | --------------- |
| `<ButtonDefault>` | `_def`, silhouette     | `_def`, the picture        | `_alt`, no icon |
| `<ButtonRouting>` | `_rou`, silhouette     | `_alt`, picture fills the square | `_alt`, empty |
| `<ButtonProfile>` | `_alt`, silhouette     | `_pro`, the picture        | `_pro`, empty   |

A silhouette is the `.svg` used as a mask, painted in the button's colours. A picture is shown as it is.

There are two shades, `~dark~` and `~light~`; there's no `~medium~`. A `<Button>` has no `style.type`: the browser's default `type` is fine.

`<ButtonRouting>` places itself with a position instead of a `- -` view: `'top-lef'`, `'mid-cen'`, `'bot-rig'` and so on, row then column, three letters each. Every position name in the project uses that form.

---

## 6. Scaling Pattern

> **Rule:** visible components scale through three mixins, `desktop-landscape`, `mobile-portrait` and `tablet-squaring`, so they fit every screen size. Structural components may merge into one set of rules when every orientation behaves the same. Repeating values is fine; clever shortcuts are not.

| Group      | Components                                                                                                                                     | Scaling                                       |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| Visible    | `<article>` · `<aside>` · `<button>` · `<fieldset>` · `<figure>` · `<form>` · `<label>` · `<menu>` · `<span>` · `<table>` · `<time>` · lists   | Always all three mixins                       |
| Structural | `<section>` · `<div>` · `<nav>`                                                                                                                | All three mixins, or one merged set (below)   |

**Merging `<section>`, `<div>` and `<nav>`:** when `desktop-landscape` and `mobile-portrait` would hold identical values, write the rules once with no orientation media queries. If even one value differs between orientations, keep the full split; never merge only part of a file. Add `tablet-squaring` only when near-square screens need different values. A merged file starts with a `//--|🠋 Shared (Name) 🠋|--\\` flag so it's clear the merge is deliberate.

Sass can't `@extend` a placeholder from outside the `@media` block it sits in, so a merge means removing the orientation queries, not sharing placeholders across them.

| Mixin               | Applied under                                                  | Breakpoints                                                            |
| ------------------- | -------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `desktop-landscape` | `(orientation: landscape)`                                     | `max-height`: 768px · 480px · 360px                                    |
| `mobile-portrait`   | `(orientation: portrait)`                                      | `max-width`: 768px · 480px · 360px                                     |
| `tablet-squaring`   | `(max-aspect-ratio: 15.99/9) and (min-aspect-ratio: 9/15.99)`  | Landscape `max-width` / Portrait `max-height`: 1920px · 1366px · 854px |

Near-square screens (tablets, split windows) don't fit the desktop or mobile breakpoints well, so `tablet-squaring` measures the long side instead and steps down one size earlier. It reuses the exact values from the other two mixins, which are measured against the `styles/Mixins.scss` skeleton. It's included last, so it overrides both orientations.

The component's root selector includes all three:

```scss
aside[class*='characters-default'] {
  display: grid;
  @media screen and (orientation: landscape) {
    @include desktop-landscape();
  }
  @media screen and (orientation: portrait) {
    @include mobile-portrait();
  }
  //--|🠋 Tablet (Squaring) 🠋|--\\
  @media screen and (max-aspect-ratio: 15.99/9) and (min-aspect-ratio: 9/15.99) {
    @include tablet-squaring();
  }
}
```

Inside each mixin, styles are grouped into `flex`, `grid` and `tint` placeholders. Each tablet placeholder splits into a Desktop and a Mobile branch:

```scss
@mixin tablet-squaring {
  //--|🠋 Tablet (Characters) 🠋|--\\
  %tabl-flex {
    @at-root aside[class*='characters-default'] {
      @media screen and (orientation: landscape) {
        //--|🠊 Desktop 🠈|--\\
        @media screen and (max-width: 1920px) {}
        @media screen and (max-width: 1366px) {}
        @media screen and (max-width: 854px) {}
      }
      @media screen and (orientation: portrait) {
        //--|🠊 Mobile 🠈|--\\
        @media screen and (max-height: 1920px) {}
        @media screen and (max-height: 1366px) {}
        @media screen and (max-height: 854px) {}
      }
    }
  }
  %tabl-grid { /* same shape */ }
  %tabl-tint { /* same shape */ }
  //--|===|--\\
  @extend %tabl-flex;
  @extend %tabl-grid;
  @extend %tabl-tint;
}
```

Components with a `pipeline/` folder follow the same rule per file: `Button_size.scss` exports `desktop-size`, `mobile-size` and `tablet-size`, and `Button.profile.scss` includes them in the same three blocks.

**Where breakpoints sit.** A breakpoint goes directly inside the deepest `&[class*='…']` it belongs to and wraps the elements it changes. It never repeats inside each element, and never wraps several variants from above:

```scss
&[class*='one_'] {
  h1 {
    padding: 4px 16px;
  }
  @media screen and (max-height: 480px) {
    h1 {
      padding: 2px 8px;
    }
  }
}
```

In `tablet-*` mixins, the landscape/portrait split comes first, right under the flag, and everything else sits inside the `//--|🠊 Desktop 🠈|--\\` and `//--|🠊 Mobile 🠈|--\\` branches (see `routing/pipeline/Button_grid.scss`).

The reference implementation is `source/layouts/components/Aside/characters/Aside.characters.scss`.

---

## 7. Colours

### The Ten Colours

`styles/Palettes.scss` holds every colour, in this order. Mono comes first because it's the default colour. Every colour list (types, maps, includes, mixins) follows the same order: `mon · red · gre · blu · pur · ora · pin · yel · bro · tur`. `<Button>` already does; other components are moved over as they're refactored.

| #  | Colour    | In `.tsx`       | Class   | In `.scss`              |
| -- | --------- | --------------- | ------- | ----------------------- |
| 1  | Mono      | `'(mono)'`      | `_mon`  | `Palettes.$gray-*`      |
| 2  | Red       | `'(red)'`       | `_red`  | `Palettes.$red-*`       |
| 3  | Green     | `'(green)'`     | `_gre`  | `Palettes.$green-*`     |
| 4  | Blue      | `'(blue)'`      | `_blu`  | `Palettes.$blue-*`      |
| 5  | Purple    | `'(purple)'`    | `_pur`  | `Palettes.$purple-*`    |
| 6  | Orange    | `'(orange)'`    | `_ora`  | `Palettes.$orange-*`    |
| 7  | Pink      | `'(pink)'`      | `_pin`  | `Palettes.$pink-*`      |
| 8  | Yellow    | `'(yellow)'`    | `_yel`  | `Palettes.$yellow-*`    |
| 9  | Brown     | `'(brown)'`     | `_bro`  | `Palettes.$brown-*`     |
| 10 | Turquoise | `'(turquoise)'` | `_tur`  | `Palettes.$turquoise-*` |

**Mono and gray are the same colour.** Write `(mono)` in `.tsx` and `.ts` files, and `gray` in `.scss` files. Never `(gray)` in a prop.

Every colour comes in five tones (`-dark`, `-medium`, `-light`, `-neon`, plus `-darkMode` and `-lightMode` backgrounds) and two shades: `~dark~` (`_dar_`) and `~light~` (`_lig_`).

### The RGB Toggles

Three on/off toggles mix the first colours like light does:

| Red | Green | Blue | Result    |
| --- | ----- | ---- | --------- |
| Off | Off   | Off  | Mono      |
| On  | Off   | Off  | Red       |
| Off | On    | Off  | Green     |
| Off | Off   | On   | Blue      |
| On  | On    | Off  | Yellow    |
| On  | Off   | On   | Purple    |
| Off | On    | On   | Turquoise |
| On  | On    | On   | Mono      |

Three toggles give eight combinations, so orange, pink and brown can't come from them. How they're picked is still being designed.

### Adding a Colour to a Component

Every colour's tint recipe is identical; only the palette names change. To add one, copy an existing colour's `*-tint` and `*-fade` mixins in the same file, swap the palette names, and add the colour to the type lists and abbreviation maps. Never change the recipe while adding a colour.

### Colour Changes and Fades

Text colour, text glow and the icon background fade smoothly when the colour changes, on the `$tint-fade` curve that each `*-colors` mixin declares. The gradients on `::before` and `::after` snap, because browsers can't blend one gradient into another. That's accepted for now (see [Parked for Later](#10-parked-for-later)).

---

## 8. Comment Flags

Arrows mark comments so the structure of a file reads at a glance. They wrap every comment as `//--| … |--\\` in TypeScript and SCSS, and `<!--| … |-->` in HTML.

| Flag                                            | Unicode | Usage                                   | Example                                |
| ----------------------------------------------- | ------- | --------------------------------------- | -------------------------------------- |
| [🠊](https://www.compart.com/en/unicode/U+1F80A) | U+1F80A | Opens a file title or a note            | `//--\|🠊 Button.default.tsx 🠈\|--\\`   |
| [🠋](https://www.compart.com/en/unicode/U+1F80B) | U+1F80B | Section heading for the code below it   | `//--\|🠋 Functions 🠋\|--\\`            |
| [🠈](https://www.compart.com/en/unicode/U+1F808) | U+1F808 | Points back at the code on its left     | `//--\|🠈 Must Load First 🠈\|--\\`      |
| [🠉](https://www.compart.com/en/unicode/U+1F809) | U+1F809 | Closes a block comment opened with 🠋   | `/*--\|🠋 … 🠉\|--*/`                     |

**More patterns you'll see:**

- `//--|===|--\\` divides a block into parts, for example before the `@extend` lines.
- A comment on a line that continues onto the next one (like the rows of a multi-line `grid-template`) ends in `|--//` instead of `|--\\`.
- The server's `.js` files end every comment in `|--//`.
- Every file starts with its own name: `//--|🠊 Aside.characters.scss 🠈|--\\`.

---

## 9. Testing

**Visually:** the **Archive** page (`#components-body`) is the testing surface. Every component gets a test harness in `containers/Archive/Main/elements/${element}-components/${variant}-${element}/` that renders the real component with toggles for its props. To open a different page, change the `viewBody('archive')` call at the top of `source/index.tsx`.

**Rules:** test the application rules with the characters in [CHARACTERS.md](CHARACTERS.md). Each one lists the rules it exists to break.

**From the terminal:**

```bash
npx sass --no-source-map path/to/file.scss > /dev/null    # Does the SCSS compile?
npx tsc --noEmit -p tsconfig.json                         # Does the TypeScript check?
```

The TypeScript check currently reports some errors that already existed. Compare the count before and after a change: it should never go up.

---

## 10. Parked for Later

Decided, but not built yet. Don't start any of these without a conversation first.

| What                                    | Where it's headed                                                                                     |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Smooth fades between colours            | Move the hue into `background-color` so gradients fade too. Needs testing in the Archive and Figma first |
| Picking orange, pink and brown          | The Archive needs a way to select all ten colours                                                     |
| `(opaque)`                              | Mixing several colour toggles at once, on `<Button>`                                                  |
| `<ButtonRouting>` effects               | Special animations when it's inside `<NavigationDefault>`                                             |
| Log a Ticket                            | Rebuilt from my original jQuery ticketing system and its claim-to-score loop                          |
| Login status                            | Accounts move between `pending`, `enabled` and `blocked` collections; status should become a field ([TABLE.md](TABLE.md#6-mongodb-today-mysql-tomorrow)) |
| Server secrets path                     | `landing.js` looks for `.env` in the wrong folder ([MODULES.md](MODULES.md#5-run-the-server))           |
| Unpaid solutions, country-specific expiry | [GUIDELINES.md, Section 15](GUIDELINES.md#15-explicitly-outside-this-baseline)                       |
