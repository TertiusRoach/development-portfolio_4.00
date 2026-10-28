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

- **`<ButtonDefault>` text hover.** The background changes shade when you hover the button, but the text colour only flips when the cursor is on the text itself (`.text *:hover`). It's snappy on purpose and part of the project's identity. Improve the contrast in the in-between state if needed; never "fix" the behaviour.

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
| **Emphasize State** | `.highlight` · `.downplay`                      |                           | Draw attention to, or away from, a `<ButtonDefault>` during testing   |
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
├── Button_default.ts           # createClass() turns props into class abbreviations
└── pipeline/
    ├── Button_size.scss        # Font and element sizing
    ├── Button_grid.scss        # Grid placement (top, bottom, left, right, center)
    ├── Button_flex.scss        # Flex alignment
    ├── Button_tint.scss        # Colours and shades, from styles/Palettes.scss
    ├── Button_move.scss        # Hover, press and transition states
    └── Button_corn.scss        # Corner radii
```

Smaller components keep everything in one `.scss` file and split it with placeholders instead: `%desk-flex`, `%desk-grid`, `%desk-tint` and their `mobi-` and `tabl-` versions (see [Scaling Pattern](#6-scaling-pattern)).

### Component Rules

- **`<table>` is only for database records.** Never for layout. See [TABLE.md](TABLE.md#1-when-to-use-table).
- **Components never talk to the database.** Data comes in through props, events go out through callbacks. See [TABLE.md](TABLE.md#5-how-data-reaches-a-table).

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
| `{ }`   | `style.type`  | `'{button}'` · `'{submit}'`   | `button` · `submit` |

For example, `<h3>` + `-left-` + `~dark~` + `(blue)` with an image produces `class="default-button thr_lef_dar_blu_def"`. Without an image, the suffix is `_alt`.

---

## 6. Scaling Pattern

> **Rule:** every component scales through three mixins, `desktop-landscape`, `mobile-portrait` and `tablet-squaring`, so it fits every screen size. Repeating values is fine; clever shortcuts are not.

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

The reference implementation is `source/layouts/components/Aside/characters/Aside.characters.scss`.

---

## 7. Colours

### The Ten Colours

`styles/Palettes.scss` holds every colour, in this order. New colour lists follow it. The existing component lists (types, maps, mixins) still use their older order, `mon · red · gre · blu · yel · pur · ora · pin · bro · tur`. Keep that order inside those files until they're reordered in a step of their own.

| #  | Colour    | In `.tsx`       | Class   | In `.scss`              |
| -- | --------- | --------------- | ------- | ----------------------- |
| 1  | Red       | `'(red)'`       | `_red`  | `Palettes.$red-*`       |
| 2  | Green     | `'(green)'`     | `_gre`  | `Palettes.$green-*`     |
| 3  | Blue      | `'(blue)'`      | `_blu`  | `Palettes.$blue-*`      |
| 4  | Purple    | `'(purple)'`    | `_pur`  | `Palettes.$purple-*`    |
| 5  | Orange    | `'(orange)'`    | `_ora`  | `Palettes.$orange-*`    |
| 6  | Pink      | `'(pink)'`      | `_pin`  | `Palettes.$pink-*`      |
| 7  | Yellow    | `'(yellow)'`    | `_yel`  | `Palettes.$yellow-*`    |
| 8  | Brown     | `'(brown)'`     | `_bro`  | `Palettes.$brown-*`     |
| 9  | Turquoise | `'(turquoise)'` | `_tur`  | `Palettes.$turquoise-*` |
| 10 | Mono      | `'(mono)'`      | `_mon`  | `Palettes.$gray-*`      |

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

Text colour, text glow, shadows and the icon background fade smoothly when the colour changes. The gradients on `::before` and `::after` snap, because browsers can't blend one gradient into another. That's accepted for now (see [Parked for Later](#10-parked-for-later)).

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
