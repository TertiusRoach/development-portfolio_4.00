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
4. **Understand it before you ship it.** No code goes in that nobody can explain. That's the whole defense against vibe coding.
5. **Nothing is ever finished.** Every component is still being refactored. Don't treat any of it as frozen, and don't hide any of it.
6. **Quirks can be identity.** Some behaviours look like bugs and are deliberate (see [Deliberate Choices](#deliberate-choices)). Only real visual bugs get fixed.
7. **The design comes first.** Sizes, gutters and colours are worked out in Figma and measured against the skeleton in `styles/Mixins.scss`. If a number looks odd, compare it with the skeleton before changing it.
8. **The documents change with the code.** When a change alters what a prop, a class or a rule means, the paragraph that describes it is updated in the same step. A document that describes the old meaning is worse than none.
9. **`<ButtonDefault>` is the baseline everything is replicated from.** A new feature is built and settled on `<ButtonDefault>` (and its Archive page, `<DefaultButton>`) first, then copied to the other components in the same syntax: same mixin layout, same selector order, same comment flags. `⟨opaque⟩` went this way: `<ButtonDefault>` first, then `<ButtonRouting>` and `<ButtonProfile>`, then the other nine colours. When two components disagree, the one that matches `<ButtonDefault>` is right. Copying one pattern everywhere is what lets the project scale and stay maintainable by hand.

### Deliberate Choices

- **`<ButtonDefault>` text hover.** The background changes shade when you hover the button, but the text colour only flips when the cursor is on the text itself (`div[class='text'] *:hover`). It's snappy on purpose and part of the project's identity. Improve the contrast in the in-between state if needed; never "fix" the behaviour.
- **`<ButtonStretch>` is sharp and boxless.** No corner radii and no box around the text, only the back, stretched across the whole button. It's a design option next to `<ButtonDefault>`, not an unfinished copy (see [Component Anatomy](#4-component-anatomy)).

---

## 2. Where to Find What

Every document lives in `source/utilities/document/`. If you're unsure about anything, look here first.

| Document                       | What it answers                                                                                     |
| ------------------------------ | --------------------------------------------------------------------------------------------------- |
| **RULEBOOK.md** (this page)    | How code is written: naming, files, scaling, colours, comments                                      |
| [GUIDELINES.md](GUIDELINES.md) | What the application allows: roles, permissions, clock-ins, overtime, ghost hours, offline mode     |
| [TOGGLES.md](TOGGLES.md)       | Which page each toggle opens (Vocation, Position, Occupation)                                       |
| [CONTAINERS.md](CONTAINERS.md) | The six containers every page is built from, how they pair and flip, and what each one does per app |
| [CHARACTERS.md](CHARACTERS.md) | The 18 test characters, their facts, their psychology and the rules they test                       |
| [TABLE.md](TABLE.md)           | `<table>` rules, ISO weeks, how data travels, MongoDB-to-MySQL rules, IndexedDB                     |
| [MODULES.md](MODULES.md)       | Setting up the database, secrets, test emails and the server on any OS                              |
| [SERVER.md](SERVER.md)         | How `source/modules` is organised, the shared contexts, and where the server code is headed         |
| [GITHUB.md](GITHUB.md)         | Machine setup, the release cycle, tags, syncing machines, fixing Git trouble                        |
| [EDITOR.md](EDITOR.md)         | VS Code shortcuts, what `.vscode/` does, keeping the Explorer readable                              |
| [REFERENCE.md](REFERENCE.md)   | The template the main `README.md` follows                                                           |

**When two documents seem to disagree:** GUIDELINES.md wins on what the app allows, this page wins on how the code is written, and the PDFs in `source/assets/pdf-files/` win on character facts.

---

## 3. Naming

### Pages, Blocks and Labels

| Name        | Identifies             | Written as   | Example result                  |
| ----------- | ---------------------- | ------------ | ------------------------------- |
| `pageName`  | The application        | `[overtime]` | `<div id="overtime-body">`      |
| `blockName` | The container          | `<leftbar>`  | `<aside id="overtime-leftbar">` |
| `labelName` | The role-specific view | `(clocking)` | `class="clocking-leftbar"`      |

The full explanation is in [CONTAINERS.md](CONTAINERS.md#naming).

**Every application has four names.** In conversation, notes and commit messages, call an application by its `[pageName]` in brackets. The brackets set it apart from the plain word, so `[archive]` is the application and "archive" is just a word.

| Bracket       | `pageName`     | Plain name   | Module           |
| ------------- | -------------- | ------------ | ---------------- |
| `[archive]`   | `'components'` | Archive      | (none)           |
| `[overtime]`  | `'overtime'`   | Track a Day  | `TrackTime`      |
| `[ticketing]` | `'ticketing'`  | Log a Ticket | `DefineDuties`   |
| `[hyperlink]` | `'hyperlink'`  | Find a Link  | `ArchiveAnchors` |
| `[landing]`   | `'landing'`    | Pick a Page  | `PickPage`       |

`[archive]` is the only one whose bracket and `pageName` differ: its containers are `#components-header`, `#components-main` and so on.

**A `labelName` is a styling hook.** It becomes the first part of the component's class, and the SCSS selects on it: `<MenuToggle>` with `labelName: 'demonstration'` renders `class="demonstration-footer_toggle-default"`, which is what `menu[class*='demonstration']` matches in `OvertimeFooter.scss`. Before renaming a `labelName`, search the SCSS for the selector that uses it.

### Component Classes

A component's outer element gets two classes: who placed it, then what it looks like.

```tsx
<label className={`${info.labelName}-${info.blockName}_selection-${stripBrackets(cases.type, '{}')} ${createClass(style, cases)}`}>
//--|🠈 default-main_selection-select nul_sel_mc_dar_red_luc_def 🠈|--\\
```

| Part                           | Example                      | Comes from                                                                                                  |
| ------------------------------ | ---------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `${labelName}-${blockName}`    | `default-main`               | The caller's `info`                                                                                         |
| `_${variant}-${type}`          | `_selection-select`          | The component's folder name, then `cases.type` in full. A component without `cases.type` ends in `-default` |
| `${createClass(style, cases)}` | `nul_sel_mc_dar_red_luc_def` | The props, always the **second** class (see [Bracket Syntax](#5-bracket-syntax))                            |

- **The props class stays second.** The `*Functions.ts` files swap colours with `classList[1]`, so nothing may be added between the two classes. They rebuild it with `.split('_')`, so a new slot in the class moves every index after it: adding `_luc_` to `<Button>` meant `[4]` became the clarity and `[5]` the variant.
- **The root selector matches the variant part, not just the variant name:** `label[class*='_selection-']`, never `label[class*='select']`. The first half of the class comes from the caller, so a `labelName` like `select` would otherwise pull the wrong styles onto another `<Label>`. Each case is then `&[class*='selection-select']` inside it.
- **`labelName` is required** (`labelName: string`) wherever it builds the class, and callers write it bare: `'default'`, not `'(default)'`. Components don't strip its brackets, so they'd end up in the class.
- **Repeating a class is fine.** `<DivisionColourize>` renders four `{toggle}` `<LabelSwitching>`s with the same class. That's why components don't use `labelName` as an `id`.

**The exception is `<Button>`:** its class is `${variant}-button` (`default-button thr_lef_dar_blu_luc_def`) and `info.labelName` becomes its `id`. The three `_division-${variant}` names (`colourize`, `testing`, `placeholder`) are older and are renamed one at a time (see [Parked for Later](#10-parked-for-later)).

### Files

| File                               | Example               | Holds                                          |
| ---------------------------------- | --------------------- | ---------------------------------------------- |
| `${Element}.${variant}.tsx`        | `Button.default.tsx`  | Markup and props                               |
| `${Element}.${variant}.scss`       | `Button.default.scss` | Imports the pipeline and applies it per screen |
| `${Element}_${variant}.ts`         | `Button_default.ts`   | `createClass()` and other logic                |
| `pipeline/${Element}_${part}.scss` | `Button_tint.scss`    | One concern per file (see below)               |
| `${PageName}${BlockName}.tsx`      | `OvertimeLeftbar.tsx` | One container of one page                      |

Documents in `source/utilities/document/` are named in **CAPITALS** (`GUIDELINES.md`).

### State Classes

State classes are intentionally simple. They act like a contract between the scripts and the styles: scripts only ever swap these classes, and styles only ever react to them.

| State Type          | Classes                                         | Alternatives              | Purpose                                                                                 |
| ------------------- | ----------------------------------------------- | ------------------------- | --------------------------------------------------------------------------------------- |
| **Operating State** | `.active` · `.asleep`                           | `.running` · `.disabled`  | Whether a page (`#${pageName}-body`) is in use                                          |
| **Preview State**   | `.visible` · `.hidden`                          | `.reveal` · `.conceal`    | Show or hide elements, mainly inside `layouts/components`                               |
| **Indexed State**   | `.expanded` · `.collapsed`                      | `.unfolded` · `.squaring` | Blocks that open and close while staying part of the page                               |
| **Emphasize State** | `.highlight` · `.downplay`                      |                           | On a `<button>`: `.highlight` swaps it to the opposite shade, `.downplay` keeps its own |
| **Locked State**    | `.locked-${blockName}` · `.frozen-${blockName}` |                           | Block repeat clicks while a container animates, or freeze it entirely                   |
| **Daytime State**   | `.ante-meridiem` · `.post-meridiem`             |                           | Set on `<body>` by the clock: 05:00 to 16:59 is AM, the rest is PM                      |

`.running` is a reserved name; it isn't used in the code yet. `.conceal` blurs a `<SectionDemonstration>` card away while a character preview slides in (Track a Day, Log a Ticket and Find a Link). `.emphasize` and `.emphasize-${colour}` are testing-only: `<DivisionTesting>` adds them to flash a container's background (see [Test Tools](#test-tools)).

### No Inline Styles

Use SASS wherever possible. Scripts never write `element.style.*` and elements never get a `style="…"` attribute, unless there's truly no other way (a value that only exists at runtime, such as a measured pixel position). An inline style beats every SCSS selector, so it works like `!important`: it sticks to the element, and the scaling mixins can no longer override it.

When a script needs something to look different, give the look a state class in SCSS and have the script add, remove or swap that class:

```ts
demoCard.classList.add('conceal'); //--|🠈 not demoCard.style.opacity = '0' 🠈|--\\
```

The `style={{ … }}` props on components (`color`, `view`, `shade`, `clarity`, `image`) aren't inline styles. They're turned into class names, so they're fine.

### Images & Assets

Every image lives in `source/assets/`, one folder per file type (`svg-files`, `png-files`, `gif-files` …), and is loaded with `loadAsset()` from `layouts/tools/utilities.ts`. It takes the type and the path inside that folder, without the extension:

```ts
loadAsset('-svg-', '/tralogfin-application/track-a-day/primary-medium'); //--|🠈 svg-files/tralogfin-application/track-a-day/primary-medium.svg 🠈|--\\
```

- **It reads GitHub, not the disk.** `loadAsset()` builds a `raw.githubusercontent.com` link on `refs/heads/main`. A new or moved image only shows once it's pushed to `main`, and a moved folder breaks every caller without an error: an `<img>` shows its alt text, a mask shows nothing.
- **Always through `loadAsset()`.** Never paste a GitHub link by hand, and never one pinned to a commit (`…/b345dfe…/source/assets/…`): it stops following `main` and quietly goes out of date. Every image now goes through it, the GIFs in `Figure.loading.tsx` included.
- **A runtime SVG is a mask, set inline.** A silhouette from `loadAsset()` goes on the element as `maskImage` / `WebkitMaskImage`, never as a URL in SCSS. It's the one inline style the [No Inline Styles](#no-inline-styles) rule allows, because the path only exists at runtime.

| Folder                                                  | Holds                                                                                                       | Example path                                    |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `svg-files/tralogfin-application/${app}/`               | The app logos: `track-a-day`, `log-a-ticket`, `find-a-link` (`primary-dark`, `-medium`, `-light`), and `pick-a-page` (`trinity-apps`, `logo-black`, `logo-white`) | `/tralogfin-application/pick-a-page/trinity-apps` |
| `svg-files/tralogfin-pages/${page}/`                    | Icons a page draws for itself: `archive` (`*-element`, `default-buttons/h1` … `p`), `overtime`, `ticketing`, `hyperlink`, `landing`, `résumé` | `/tralogfin-pages/archive/default-buttons/h1`   |
| `svg-files/archive-images/font-awesome/${version}/${style}/` | FontAwesome (below)                                                                                    | `/archive-images/font-awesome/7.3.1/solid/star` |
| `svg-files/archive-images/my-signature/`                | The signature                                                                                               | `/archive-images/my-signature/signature-icon/primary-light` |
| `svg-files/archive-images/arabic-numerals/`             | Numerals                                                                                                    |                                                 |
| `png-files/character-testing/original/`                 | The 18 character portraits and `randomize-character`, with `upscaled/` beside it                            | `/character-testing/original/jane-lester`       |
| `png-files/tralogfin-application/${version}/`           | App pictures, by release (`1.0.0`, `4.4.0`)                                                                 |                                                 |
| `gif-files/`                                            | The loading animations (`signature`, `trinity-apps`)                                                        |                                                 |

**Icons come from FontAwesome Free 7.3.1:** `solid/`, `regular/` and `brands/` only. The `5.13.0` and `6.5.1` folders are older; `6.5.1` is Pro (commercial licence) and is being phased out. Before using an icon, check its file exists in `7.3.1/${style}/`; a Pro-only icon has no Free file and needs a Free replacement chosen by the owner. Still on `6.5.1` while that choice is open: `messages-dollar` (Track a Day's Freelancing toggle), `user-helmet-safety` (Log a Ticket's Employee toggle), and `head-side`, `left-to-line`, `right-to-line` in `<DivisionTesting>`. The 7.x icons sit on a 640 × 640 canvas with built-in padding, so with `mask-size: contain` they read a little smaller than 6.5.1 did in the same box.

**`md-files/` holds drafts, not images.** The synchronization thesis and one file per application (`track-a-day.md`, `log-a-ticket.md`, `find-a-link.md`) live there until their edge cases are worked out, then move to `source/utilities/document/`. Nothing loads them.

**When a folder moves,** change every `loadAsset()` path in the same step: search `source/` (not `source/assets/`) for the old path, fix each hit, and update the table above. The folders were last reorganised on 2026-11-07, when `archive-images/character-testing` became `character-testing`, `archive-images/trinity-apps` became `tralogfin-application`, and `project-pages/components-page` became `tralogfin-pages/archive`.

### Git

Branches are `#.#` (`4.7`), tags are `v#.##` (`v4.07`), and a release published while the branch stays open is a patch tag, `v#.##.#` (`v4.08.1`). The full rules are in [GITHUB.md](GITHUB.md#1-naming-rules).

---

## 4. Component Anatomy

Components are the building blocks in `source/layouts/components/`. Every component follows the same pattern, so once you can read one, you can read them all. Using `<ButtonDefault>` as the reference:

```
components/Button/default/
├── Button.default.tsx          # Markup and props
├── Button.default.scss         # Imports the pipeline and applies it per screen
├── Button_default.ts           # createClass(), reading TheseProps from the .tsx
└── pipeline/
    ├── Button_flex.scss        # Flex alignment and padding
    ├── Button_grid.scss        # Grid placement (top, bottom, left, right, center)
    ├── Button_size.scss        # Font and element sizing
    ├── Button_tint.scss        # Colours, shades and transitions, from styles/Palettes.scss
    └── Button_corn.scss        # Corner radii and border widths
```

`<ButtonDefault>`, `<ButtonStretch>`, `<ButtonRouting>` and `<ButtonProfile>` are written the same way, line for line. `<ButtonStretch>` started as an exact copy of `<ButtonDefault>` with only the names changed (`stretch-button`, `stretch-*` mixins, `_str`), so the two read side by side. It differs on purpose in three places, and each file's header says so: in `Button_grid.scss`, `div[class='back']` fills the whole grid in every view (`1 / 1 / last row line / last column line`) while the text and icon keep `<ButtonDefault>`'s areas; `Button_corn.scss` is empty, because its corners are sharp; and in `Button_tint.scss`, `div[class='text']` has no box (`::before`/`::after`), because the stretched back already is the box. When they disagree anywhere else, `<ButtonDefault>` is the baseline (see [The Philosophy](#1-the-philosophy), point 9).

The three `<Label>`s (`<LabelSwitching>`, `<LabelTextarea>`, `<LabelSelection>`) use a shorter pipeline: `Label_flex.scss`, `Label_size.scss` and `Label_tint.scss`. They have no grid or corners of their own, and their flex and tint never change per screen, so those two files only hold the global `*-flexbox` and `*-colors` mixins. Only `*_size.scss` exports `desktop-size`, `mobile-size` and `tablet-size`. Inside every mixin, each case sits under its own `&[class*='switching-toggle']`, so one look per case stays readable. `<LabelTextarea>`'s three cases share one set of tints, because `{text}`, `{input}` and `{block}` look the same; `[class='event']` matches the `<input>` and the `<textarea>`.

The five `<Form>`s (`<FormRegister>`, `<FormVerify>`, `<FormLogin>`, `<FormPassword>`, `<FormReset>`) are built from other components rather than drawn from scratch:

- **What's inside.** Every field is a `<LabelTextarea>` in `⟨opaque⟩`: `{input}` in a `<fieldset>` with its own `data-input` (`{email}`, `{password}`, `{text}`), and six `{block}`s in a `<fieldset class="code">` for the Verify and Reset codes. Every button is a `<ButtonDefault>` in `⟨lucid⟩`, with the old sizes and shades. `<ButtonDefault>` fills its grid cell, so the cell decides its size. The eye and generate buttons are the exception: `<p>` `-icon-` in `⟨opaque⟩`, so they have no box, laid over the right end of the password like the old ones (generate, then the eye). They sit on the right because on the left they'd cover the text, and `<LabelTextarea>`'s padding is its own. A `<p>` icon is taller than the input, so it reaches a little above and below it.
- **Props.** `info` like every component, and `style: { color }` with all ten colours. The class is `${labelName}-${blockName}_${variant}-default color_def` (`login-main_login-default mon_def`), selected with `form[class*='_login-']`. The colour is slot `[0]`; `_def` is a placeholder, the same as a `<Label>`'s. The `<Form>` hands `style.color` to every `<Label>` and `<Button>` inside it.
- **One `.scss` per Form,** split into `%desk-`, `%mobi-` and `%tabl-` placeholders (flex, grid, tint), with all three mixins. Inner parts are selected from the `<form>` with `>` (`> div[class='header'] > div[class='text']`), because `<ButtonDefault>` has its own `div.text` and `div.icon`.
- **The card** takes `<SectionDemonstration>`'s sizes: 448×672, 285×416, 214×312, 165×240. The old ratios are on record in git: `git show d3b4ec09:source/layouts/components/Form/login/Form.login.scss`. On the two small cards, the header hides and the bottom row shrinks to fit, which is the old Desktop 480px rule carried over to every orientation.
- **`defineButton()`** in `Form_*.ts` keeps the old size swap for the secondary buttons: `<h6>` with text, or a `<p>` icon at `<= 768px` and on a near-square screen whose long side is 1920px or less (the steps where the card shrinks). It runs once per render.
- **Visual-only for now.** `onSubmit={(event) => event.preventDefault()}` is the one live handler, because a `<ButtonDefault>` inside a `<form>` submits it. The old submit handler sits under the component in a `/* … */` block, with `passwordHash` renamed to `password` (see [SERVER.md, Section 3](SERVER.md#3-how-a-form-reaches-the-server-today)). The old helpers (`viewText`, `viewPass`, `axiosError`, `retrieveEndpoint`), each Form's own helpers and the old server route from its `Form_*.js` are commented out at the bottom of its `Form_*.ts`.
- **Only the Archive renders them.** `LandingMain.tsx` still imports `<FormLogin>`, `<FormRegister>` and `<FormPassword>` without rendering them, from before the rewrite. A container that renders a Form passes `info.labelName` and `style.color`, the way the `form-components/` harness pages do.

### Pipeline Files

- **Named after the element, not the variant:** every pipeline file is `${Element}_${part}.scss`, so `switching/pipeline/` holds `Label_tint.scss`, the same way `default/pipeline/` holds `Button_tint.scss`. The variant only shows in the folder, the first-line flag (`//--|🠊 switching/pipeline/Label_tint.scss 🠈|--\\`) and the mixin names (`switching-colors`).
- **One order everywhere:** flex, grid, size, tint, corn. The `@use` lines, the global includes and every orientation block follow it.
- **Every file is always there.** Each one exports `desktop-*`, `mobile-*` and `tablet-*`, and each mixin opens with its flag: `//--|🠋 Desktop (Flex) 🠋|--\\`. A mixin with nothing to do stays, with a `/*--|🠋 … 🠉|--*/` note saying where the other variants handle that part.
- **Global mixins** (`${variant}-flexbox`, `${variant}-gridbox`, `${variant}-colors`) hold what never changes per screen. They're included outside the media queries, and a `//--|===|--\\` divider separates them from `desktop-*`.
- **Inner layers are selected by exact class:** `div[class='text']`, never `.text`. Two things follow from that:
  - The layers can't carry a second class: `class="text visible"` no longer matches. State classes (`.highlight`, `.hidden`…) only ever go on the `<button>` itself.
  - Every pipeline file has the same specificity, so the include order decides who wins. Colour belongs to `*_tint.scss` alone. Other files set `border-*-width` and `border-style`, never the `border:` shorthand, which quietly resets the colour.
- **No outer shadows or glows.** Neighbouring containers paint over anything that reaches outside a button, so it looks clipped. Inset shadows (the bevel) and text glow are fine.

### Style Imports

- **One door in.** `index.tsx` imports `index.scss`, and that is the only `.scss` import in any `.tsx` or `.ts` file. Every other stylesheet arrives through `@use`, so the whole look is one `index.css` that the browser loads before it draws anything.
- **Why.** A `.scss` imported inside a lazy-loaded `.tsx` becomes its own small CSS file that arrives late: the page draws for a moment without those styles, and the late copy lands after everything else, so it can override rules that were meant to win.
- **Two gathering points.** Components `@use` from `styles/Barrel.scss`: `@use '../components/Division/colourize/Division.colourize.scss' as DivisionColourize;`. Containers `@use` from their application's file (`containers/Overtime/Overtime.scss` gathers Main, Header, Footer, Overlay, Leftbar and Rightbar), and `index.scss` uses that file under the application's flag (`//--|🠋 Overtime 🠋|--\\`).
- **`styles/Utilities.scss` is for containers only.** It houses the small showpiece effects, each as a mixin with its own keyframes (today the marching ants that outline the Archive menu pages). A container `@use`s it `as Utilities` and includes what it needs: `@include Utilities.marching-ants();`. Sass loads it once, so the keyframes ship once however many containers use it. **A component in `components/` never uses it:** components reach every page through the Barrel, so an effect pulled in there would land in every container that renders the component and overlap with that container's own effects as the project grows. When a component needs an effect, the container around it includes it. A container that copies a utility into its own file instead of using it is moved over to `Utilities.scss`.
- **Never twice.** A stylesheet appears in exactly one `@use`.
- **Every `@use` names its namespace with `as`,** even where Sass would pick the same name: `@use '../../../styles/Palettes.scss' as Palettes;`, `@use 'sass:color' as color;`. It reads like a TypeScript import, so a prefix always says where it comes from.
- **The Barrel is grouped by tag**, under `//--|🠋 <Division> 🠋|--\\` and the like, and the alias is the component's name. Inside a group, the shortest line goes first.
- **A component no container renders stays commented out** in its Barrel group, in a `/* … */` block right under the group's flag, so it ships no CSS. Uncomment its line in the same step a container starts using it.
- **Bootstrap 5.3.3 is the one framework.** `styles/Global.scss` uses it on its first line, so every rule after it wins a tie. It sets the baseline typography (body margin, heading sizes, line-height) and the `display-*` heading classes. Scripts use those classes to size headings: `showingBootstrap()` in `layouts/tools/frameworks.ts` picks one by screen size for `<MenuSwipe>` and `<MenuScroll>` titles. Its tablet branch uses the `tablet-squaring` query, measures the long side and is checked first, the way `tablet-squaring` is included last.
- **Check the path letter by letter.** A wrong folder or file name stops the whole build with `Can't find stylesheet to import`, pointing at `Barrel.scss` and `index.scss` rather than at the component.

### Error Messages

Errors keep the props' own wrappers, so they read like the prop that caused them:

```ts
throw new Error(`|🠊 Error: Invalid <${stripBrackets(size, '<>')}> or -${stripBrackets(view, '--')}- 🠈|`);
//--|🠈 |🠊 Error: Invalid <h7> or -top- 🠈| 🠈|--\\
```

### Console Messages

When something doesn't stop the page but someone should hear about it, the console says so in up to three lines, always in this order. Each is wrapped as `|--🠊 … 🠈--|` and starts with its kind:

- **`Warning:`** says what went wrong and names the file that noticed it, from the container folder down: `Main/ArchiveFunctions.ts`. The browser can't read folders, so the path is written by hand. A warning always means something went wrong; deliberate quiet cases (like preview `0`) never log one.
- **`Helper:`** talks to the developer: what is still to do, or where else the same fix is needed. Paths can use `*` for "every app": `*/*Functions.ts`.
- **`Guidance:`** talks to the person using the page: what they can do next, or what the page is about to do for them.

```ts
console.log(`|--🠊 Warning: ${labelName} never showed up inside #components-main, Main/ArchiveFunctions.ts 🠈--|`);
console.log(`|--🠊 Helper: Note that we still need this solution for #{pageName}-main, */*Functions.ts 🠈--|`);
console.log(`|--🠊 Guidance: Forgot your password? We have a page for that. Auto swipe to that page! 🠈--|`);
```

A `Warning:` can stand alone; `Helper:` and `Guidance:` only follow one.

### Props and Events

- **`info` is the same everywhere:** `pageName`, `blockName` and `labelName`, even when a component doesn't use them. Uniformity is what makes the files memorable. `labelName` is required wherever it builds the class (see [Component Classes](#component-classes)). Every key in `info` ends in `Name`, a longer `className`: each one names something (the page, the block, the label, and what a screen reader says). `info.ariaName` follows the same logic. It's optional, sits between `blockName` and `labelName`, and is read aloud when a button has no visible text (`aria-label={info.ariaName}`); other components add it when they need it.
- **Props are written out in the `.tsx`.** Every prop's shape lives in the component's own `export interface TheseProps`, written in full under `info`: `style: { shade: …; color: … }`, `cases: { list: Array<string> }`. There are no separate `StyleProps` or `CaseProps` types in the `.ts`, so one file shows everything a component takes. The `.ts` reads the types back with `import type { TheseProps } from './Label.selection';` and uses `TheseProps['style']['shade']`. The three `<Label>`s follow this; the others move over as they're refactored.
- **`cases.type` decides what a component is, `style` decides how it looks.** One component covers several elements with a classic `switch (cases.type)`, and each element's HTML is written right inside its own `case`, wrapped in braces: `case '{chip}': { … }`. The braces mark where one element ends and the next begins, and keep a case's own variables (`plusImage`, `checkImage`) inside it. There are no separate case functions, so nothing has to be passed along: every case reads `style`, `cases` and `onChange` straight from the component. Event handlers a case uses (`markKeyboard()`, `stepNumber()`, `nextBlock()`) still live below the component, under a heading named after their case: `//--|🠋 Number 🠋|--\\`. Props only one case needs are optional and marked with a trailing comment (`text?: string; //--|🠈 {chip}'s words, {option}'s value 🠈|--\\`). When the browser already has a sensible default, there's no prop at all, which leaves the calls lean and the door open to add a prop later when a real use needs one. A `cases.type` belongs with the others when it holds the same kind of value: `<LabelSwitching>` is only on & off, so a `{slide}` with many values will be its own component. Hooks stay at the top of the component, above the `switch`, because React needs them in the same order on every render.
- **Every `<Button>` and `<Label>` lists every event.** The ones it uses (`onClick`, `onMouseEnter`, `onMouseLeave`, `onDoubleClick` on a `<Button>`, `onChange` on a `<Label>`) are live. The rest stay in a `/* … */` block under them, typed with their real event (`KeyboardEvent`, `FocusEvent`, `TouchEvent`…), ready to switch on.
- **An event is typed with every element the cases render.** `<LabelSelection>` renders a `<select>` or an `<input>`, so its handler is `React.ChangeEvent<HTMLInputElement | HTMLSelectElement>`. The limit: the handler gets the union, so a caller that needs something only one element has (`.selectedIndex`) checks `event.target` first. One handler per element would avoid that, but it would also undo the merge.
- **A `<Label>` inherits from its parent through `data-` attributes, never its class.** `previewParent()` reads the nearest `<fieldset>` or `<form>` after the first render and returns its "genes": `data-group` (the name every `{option}` radio in it shares) and `data-input` (`'{password}'`, `'{email}'` … for an `{input}`, `'{text}'` when missing). A class changes as styles change; a `data-` attribute doesn't, so `.split('_')` never touches it. **The one exception:** the first `{option}` in a `<fieldset>` or `<form>` without a `data-group` writes one, the only place a component writes to an element it doesn't own. It's limited to those two tags. It lives in `Label_switching.ts` and `Label_textarea.ts`, the two that use it, written out in both. It moves to `layouts/tools/` once something outside the `<Label>`s needs it.

Smaller components keep everything in one `.scss` file and split it with placeholders instead: `%desk-flex`, `%desk-grid`, `%desk-tint` and their `mobi-` and `tabl-` versions (see [Scaling Pattern](#6-scaling-pattern)).

### Component Rules

- **`<table>` is only for database records.** Never for layout. See [TABLE.md](TABLE.md#1-when-to-use-table).
- **Components never talk to the database.** Data comes in through props, events go out through callbacks. See [TABLE.md](TABLE.md#5-how-data-reaches-a-table).
- **Components survive the flip.** Turning the screen unmounts one orientation's markup and mounts the other's, so a listener or timer a component starts is returned from its `useEffect`, and anything added to one orientation gets its mirror in the other. See [CONTAINERS.md, Pairs and the Flip](CONTAINERS.md#pairs-and-the-flip).

### Declaration Order

Every `.ts` and `.tsx` file in `components/` and `containers/` declares its functions by how deep they sit in the call chain, so the keyword tells you where you are:

| Keyword    | Depth  | Role                                                           |
| ---------- | ------ | -------------------------------------------------------------- |
| `function` | First  | The main function, the one the file is named after and exports |
| `const`    | Second | Called by the `function`                                       |
| `let`      | Third  | Called by a `const`                                            |
| `var`      | Fourth | Called by a `let`. The deepest level; nothing goes below it    |

- **The main function is a `function`, never an arrow.** Props are pulled apart in the brackets and typed after them: `function SwitchingLabel({ info }: InfoProps) {` … `}`. Not `const SwitchingLabel: React.FC<InfoProps> = ({ info }) => {` … `};`, because a `const` at the top means second depth (see the table above).
- **One main function, exported twice.** A file with one main function declares it as `export function` in `components/` and as a plain `function` in `containers/`, and the last line of the file repeats it on its own: `export default ButtonDefault;`. The separate line is deliberate: the end of every file says what the file is. Helpers stay at file level, unexported, and are never nested inside another function.
- **Several main functions, no default.** A file of equal utilities (like the files in `layouts/tools/`) uses named exports only, so a default export always means "the one this file is about".
- **Values inside a function.** A flag worked out once per render is a `let` with its type written after the value with `as`, and its reason as a trailing comment: `let casesShow = 3 as number; //--|🠈 … 🠈|--\\`. A `let` declared without a value has nothing to put `as` after, so it keeps its type after the name: `let stateName: 'expanded' | 'collapsed';`. Some files in `components/` still write `let styleImage: boolean = …`; they move to `as` when they're refactored. Lookup maps (`parentFont`) and results (`const classColor = createColor(…)`) are `const`; they're values, not second-level functions.
- **The three names are `const`, always in the same order.** In a page's containers (`source/layouts/containers/${PageName}/${BlockName}/`, like `Overtime/Footer/OvertimeFooter.tsx`), `pageName`, `blockName` and `labelName` are always `const`, each stripped from `info` once, right under the `getOrientation` state:

  ```tsx
  const pageName = stripBrackets(info.pageName, '[]') as 'overtime';
  const blockName = stripBrackets(info.blockName, '<>') as 'footer';
  const labelName = stripBrackets(info.labelName, '()') as 'default';
  ```

  They name the file's own container and never change during a render, which is what `const` says. A `let` is for what the render works out from them (`let blurName`, `let stateName`). The order reads outside-in (page, container, label), the same way the names build the id and class, so every container's opening looks alike. This scope is fixed; deeper scopes (`elements/`, see [Container Skeleton](#container-skeleton)) keep their own order for now and may change.
- **Parameters come in three groups, always in this order.** **Information** first: the names (`pageName`, `blockName`, `labelName`, in that order). Then **Determinate**: fixed strings, a union of set values like `element`, `menuAxis`, `alterAction` or `styleView`. Then **Miscellaneous**: everything else (numbers, free strings, elements like `thisItem` or `carousel`). A name stays a name even when its type is a fixed list (`labelName: 'switching' | 'textarea' | 'selection'` still goes first). With the names always up front, any function can find its page, block and label without reading the rest. Each group opens with a `//--|🠋 … 🠈|--\\` label, with a blank line between groups, and the names a function doesn't take stay in as commented-out placeholders, so every function shows the full order:

  ```ts
  const containerPreview = (
    //--|🠋 Information 🠈|--\\
    //--|🠊 pageName: string, 🠈|--\\
    //--|🠊 blockName: string, 🠈|--\\
    labelName: string,

    //--|🠋 Determinate 🠈|--\\
    element:
      | '(form)'
      | …
      | '(navigation)',

    //--|🠋 Miscellaneous 🠈|--\\
    preview: number,
    carousel: HTMLLIElement,
  ): void => {
  ```

  Reorder one function at a time and run `npx tsc --noEmit -p tsconfig.json` after each: moving a parameter past one of a different type makes every caller you missed show up as an error. Two plain `string`s swapped are not caught, which is why the names never trade places with each other. Older functions that start with `thisItem`, a value (`switchColors(choice, labelName)`) or a fixed string move as they're touched; `blockViews()` and its handlers move last, together, as their own step.
- **Unordered lists form a pyramid; ordered lists are alphabetical.** A list whose order means nothing to the code, like the values of a union, runs from shortest to longest, so it reads as a pyramid on its side. TypeScript ignores the order inside a union, so sorting one never changes what the code does. Values of the same length can sit in any order among themselves; in [archive] that's a free choice for the look. A list whose position means something stays alphabetical, like the `switch` in `carouselPreview`, where `(article)` is slide I and `(time)` is slide XII:

  ```ts
  element:
    | '(form)'
    | '(menu)'
    | '(time)'
    | '(label)'
    | '(aside)'
    | '(table)'
    | '(button)'
    | '(figure)'
    | '(article)'
    | '(section)'
    | '(division)'
    | '(navigation)',
  ```
- **Elements inside a function.** The container the call was launched from is a `const`; a container reached through a hard-coded selector is a `let`. In `squareFooters`, the footer that was tapped arrives as `thisItem`, and `let rightbarElement = document.querySelector('#overtime-rightbar')` is the partner it reaches out to. The squaring handlers in `layouts/scripts/Head_Foot.ts` read the same way: `const headerElement` for the block they're named after, while `obnubilateMain()` reaches every container through a selector, so each of its elements is a `let`. The variable is named after the container it holds, so a Footer file says `footerElement`, never `headerElement`.
- **Types are shared, not copied.** The `.tsx` owns them and the `.ts` imports them (see [Props and Events](#props-and-events)).

`<ButtonDefault>` is the reference: `export function ButtonDefault` … `export default ButtonDefault;` in the `.tsx`, and `export function createClass` calling `const createLayout` and `const createColor` … `export default createClass;` in the `.ts`. In `containers/`, `DefaultButton.tsx` is the reference (see [Container Skeleton](#container-skeleton)). Older files are being moved to this order as they're refactored.

Inside the `<button>` tag, attributes come in three groups split by `//--|===|--\\`: identity (`id`, `className`), events (`onClick` … `onDoubleClick`), then accessibility (`aria-label`).

### Container Skeleton

`containers/Archive/Main/elements/button-components/default-button/DefaultButton.tsx` is the skeleton every container file follows from now on. Here it is with the repeated markup taken out:

```tsx
//--|🠊 DefaultButton.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import ButtonDefault from '../../../../../../components/Button/default/Button.default';

//--|🠋 Functions 🠋|--\\
import copyCode, { toggleColors } from './DefaultFunctions';
import { checkScreen } from '../../../../../../tools/synching';
import { loadAsset } from '../../../../../../tools/utilities';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function DefaultButton({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'default';
  const pageName = info.pageName as 'components';

  useEffect(() => {
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let casesShow = 3 as number;
  switch (getOrientation) {
    case 'landscape':
      return (
        <aside className="default-button">
          <section className={`${blockName}-foreground`}>…</section>
          <figure className={`${blockName}-midground`}></figure>
          <div className={`${blockName}-background`}>…</div>
        </aside>
      );
    case 'portrait':
      return (…);
  }
}

const ButtonsDarkside: React.FC<InfoProps> = ({ info }) => {
  return (
    <>
      <ViewOne info={{ labelName: 'one-dark', pageName: info.pageName, blockName: info.blockName }} />
    </>
  );
};

let ViewOne = ({ info }: InfoProps) => {
  const iconOne = loadAsset('-svg-', '/tralogfin-pages/archive/default-buttons/h1') as string;
  switch (true) {
    case info.labelName.includes('dark'):
      return (…);
    case info.labelName.includes('light'):
      return (…);
  }
};

var TaskOne = ({ info }: InfoProps) => {};
export default DefaultButton;
```

- **The header.** The first line names the file (`//--|🠊 DefaultButton.tsx 🠈|--\\`). Imports follow under three flags, always in this order: `Dependencies`, `Components`, `Functions`. A group with nothing in it keeps its flag. An import goes under the flag for what it brings in, not where it happens to sit: `react` under `Dependencies`, anything from `components/` under `Components`, a `.ts` file (`layouts/tools/synching.ts`, `DefaultFunctions.ts`) under `Functions`. Several imports from `layouts/tools/` go in the order of the file names: `conversions`, `frameworks`, `navigation`, `synching`, `utilities`. There is no `Styles` flag: a `.tsx` never imports a `.scss` file, because every stylesheet is loaded through `index.scss` (see [Style Imports](#style-imports)). Older files that still carry the flag lose it as they're refactored.
- **The `Elements` flag.** A file that imports scoped elements from inside a container gets a fourth flag, `//--|🠋 Elements 🠋|--\\`, between `Components` and `Functions`. Elements are the `.tsx` files scoped to one container block: the coupled `<header>` + `<leftbar>` and `<footer>` + `<rightbar>` pairs (the two swap jobs on the flip), and `<main>` and `<overlay>`, which aren't coupled to anything and work the same in both orientations. See [CONTAINERS.md, Pairs and the Flip](CONTAINERS.md#pairs-and-the-flip). `ArchiveMain.tsx` imports `ButtonElements` there, and `ButtonElements.tsx` imports `DefaultButton` there. A file that imports no elements leaves the flag out.
- **`interface InfoProps` sits right above the main function**, with `pageName`, `blockName` and `labelName` as strings.
- **The `function` (first depth).** Inside it, in this order: the `getOrientation` state, the `info` values given their exact types (`blockName`, `labelName`, `pageName`), the `useEffect` that returns `checkScreen(setOrientation)`, then the `let` values for this render. It returns from `switch (getOrientation)`, with a full `'landscape'` and a full `'portrait'` case, each an `<aside>` holding a `-foreground` `<section>`, a `-midground` `<figure>` and a `-background` `<div>`.
- **The SCSS selects the three layers by their full suffix:** `section[class*='foreground']`, `figure[class*='midground']` and `div[class*='background']`, never a shortened `footer-fore` or `header-back`, so the header's and footer's files read alike. When a container's `<AsideCharacters>` are `⟨opaque⟩`, the background paints their panels instead: `.lef` (`$gray-darkMode`) and `.rig` (`$gray-lightMode`) run the full height with sharp ends, at the aside's own widths, 398 / 321 / 230 / 139px on Desktop and 218 / 171 / 114 / 73px on Mobile. That's the chosen look; `⟨lucid⟩` asides keep their own panels, also with sharp ends. Only the character list inside them fades, as it scrolls (see [Fades](#fades)). See [CONTAINERS.md, Mirroring a Layout](CONTAINERS.md#mirroring-a-layout).
- **The `const` (second depth)** is written `const Name: React.FC<InfoProps> = ({ info }) => {` … `};`. The `function` uses it, here by passing it as `cases.call` to `<DivisionFullscreen>`. It lists the `let` views and gives each its own `labelName`.
- **The `let` (third depth)** is written `let Name = ({ info }: InfoProps) => {` … `};`, with no `React.FC`. It returns from `switch (true)`, one `case` per shade (`info.labelName.includes('dark')`, `…('light')`).
- **The `var` (fourth depth)** is written the same way, as `var Name = ({ info }: InfoProps) => {};`. It goes last, just above the export. It only exists when the calls really go that deep: `TaskOne` above is there to show the shape, and `DefaultButton.tsx` itself has none. Never write an empty `var` to fill the slot.
- **One blank line between depths**, none between helpers at the same depth, none between `interface InfoProps` and the `function`, and none before `export default DefaultButton;`, which is the last line. A flag can stand in for the blank line between depths (`//--|===|--\\` in `RoutingButton.tsx`, `//--|🠊 Desktop Previews 🠈|--\\` in `ArchiveHeader.tsx`); keep these.
- **No return type on the `function`.** Write `function ArchiveHeader({ info }: InfoProps) {`, not `…): JSX.Element {`.
- **Plain functions go in a sibling `.ts` file** (`DefaultFunctions.ts`): its main function is the default export (`copyCode`), and the helpers the `.tsx` also needs are named `export const` (`toggleColors`).

### Functions Files

The sibling `.ts` file (`${Name}Functions.ts`) follows [Declaration Order](#declaration-order) too. `DefaultFunctions.ts`, `TextareaFunctions.ts` and `SelectionFunctions.ts` are the references. A page whose only function is a shared one still gets its own `*Functions.ts` (`SwitchingFunctions.ts` holds just `switchColors`, so it has no `export default`). **A function lives in the folder of the page that uses it.** A function that reads, returns or changes what's rendered under `source/layouts/containers/[pageName]/<blockName>/elements/` goes in that page's own `${Name}Functions.ts`. When sibling pages need the same one, each keeps its own copy, written line for line alike (`switchColors` in `SwitchingFunctions.ts`, `TextareaFunctions.ts` and `SelectionFunctions.ts`). Their parent folder (`label-components/`) holds no `.ts` file until the owner decides otherwise. It never moves up to `layouts/tools/`, which holds what the whole project shares (`checkScreen` is called from those same pages but doesn't belong to them: it listens to the screen's orientation and resets whichever page is active, so it works the same everywhere. `switchColors` finds one page's own `<Label>`s by their class, so it only works there).

**Three homes for shared code:**

| Folder                 | Holds                                                                    | Files                                                                                                                                                                         |
| ---------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `layouts/tools/`       | What the whole project shares, one file per job                          | `conversions.ts` (`stripBrackets`, `arabicToRoman`, `romanToArabic`), `frameworks.ts` (`showingBootstrap`), `navigation.ts` (`loadPages`), `synching.ts` (`synchDemo`, `checkScreen`, `asynchObserve`), `utilities.ts` (`loadAsset`) |
| `layouts/scripts/`     | What a container pair shares, run by every application                   | `Head_Foot.ts`, `Left_Right.ts`, `Main_Over.ts`                                                                                                                                |
| `layouts/containers/`  | `containers.ts`: `blockViews()`, the dispatcher every state change goes through | `containers.ts`                                                                                                                                                         |

Callers import straight from the file that holds the function; there's no barrel file in between.

- **One plain `function` per file**, declared first and repeated as `export default` on the last line. Everything else the `.tsx` imports is an `export const` arrow, and the helpers those call are file-level `let`s. Never several `export function`s side by side. The `.tsx` imports both kinds in one line: `import listCharacters, { typePlaceholder } from './SelectionFunctions';`. A file with no main function of its own (`RoutingFunctions.ts`, `ProfileFunctions.ts`) has no `export default`: only its `export const`s and their `let`s.
- **The exception is a page's Header and Footer pair.** In `Header/${PageName}Functions.ts` and `Footer/${PageName}Functions.ts` on Track a Day, Log a Ticket and Find a Link, the main function (`previewProfile`) is followed straight away by the container states the `.tsx` imports, written as `export function`s under `//--|🠋 Container States 🠋|--\\`: `unfoldHeaders`, `expandHeaders`, `squareHeaders`, `freezeHeaders` (or the `Footers` four). A `//--|===|--\\` closes the group, then come `previewProfile`'s own helpers (`const selectCharacter`, `let sequencedDemonstration`), and a last `//--|===|--\\` sits above `export default previewProfile;`. The group reads as a set of switches the container flips, so it stays together right under the function that runs the demonstration.
- **A pair's two files are written line for line alike.** `Header/${PageName}Functions.ts` and `Footer/${PageName}Functions.ts` differ only in the pair's names: `header` / `footer`, `leftbar` / `rightbar`, `'horizontal'` / `'vertical'`, `'top-lef'` / `'bot-rig'`. Comment flags count too: an `AI Code: Review Please` on one file's line goes on the same line in the other. After changing one, `diff` the two: anything else that shows up is a step the other one still needs.
- **`<main>`'s file toggles previews, nothing more, nothing less.** `Main/${PageName}Functions.ts` has the same job on every application (`[archive]`, `[overtime]`, `[ticketing]`, `[hyperlink]`, `[landing]`). Its `export default` is `startingPreview(element, preview)`, and it only reaches elements inside its own `<main>`: `#components-main` on `[archive]`, and `#overtime-main`, `#ticketing-main`, `#hyperlink-main` and `#landing-main` on the others. That id is written into the selector, never passed in. It doesn't matter who calls it (the `[overtime]` demo buttons sit in the header and footer): what it touches stays inside `<main>`. If `<main>` ever needs more, the job can be merged and expanded upon in this same file; until then it holds nothing else. `Main/ArchiveFunctions.ts` is the reference:
  - **It works on two levels.** `fullscreen` is the outer `<li>`, written out in full (`elements-main_fullscreen-default`), and it picks the group through `switch (element)`, one case per group, each written out. `carousel` is the `<li>` of the group inside it (`${labelName}-main_fullscreen-default`), and it picks the page (`preview`). `[archive]` lists its cases in alphabetical order, because it's an archive; the applications list theirs in page order (`[overtime]`: `(established)` I, `(vocation)` II, `(freelancing)` III).
  - **The axes are flipped between `[archive]` and the applications.** `[archive]`'s outer is `[y]` with `[x]` groups inside, so its path steps down `> ol > li` then `> ul > li`. `[overtime]`, `[ticketing]` and `[hyperlink]` slide their outer on `[x]`, with `[y]` pages inside, in both orientations: `> ul > li` then `> ol > li`. An application's page may be a `<DivisionSweeping>` instead of a `<DivisionFullscreen>` (`[overtime]`'s `(vocation)` sweeps), so its `findTags` accepts either `${labelName}-main_fullscreen-default` or `${labelName}-main_sweeping-default`, and `containerPreview` finds the container with `^=`, because a sweeping's container ends in its view (`vocation-main_container-bot`). Nothing else in the function changes.
  - **The function only hands off; three helpers do the work,** in [Declaration Order](#declaration-order): `const containerPreview` moves the carousel, `const carouselPreview` moves the fullscreen, and `let findTags` finds both `<li>`s.
  - **It waits for the page.** Both `<li>`s come through `await asynchObserve(…)` inside `findTags`, so the call works before `<main>` has rendered. That makes it an `async function` returning `Promise<void>`. If one never shows up, the 6-second timeout lands in a `catch` that logs a `Warning:`, `Helper:` and `Guidance:` line (see [Console Messages](#console-messages)) and leaves the page as it is.
  - **A `preview` out of range never leaves the carousel.** If the group has no `${labelName}-main_container` (a scope passed the wrong `labelName`), it logs a `|🠊 Warning: … 🠈|` and leaves the carousel where it is. `0` is deliberate and silent: it hides the carousel on purpose. Below 0 also becomes `0`, but logs a `|🠊 Warning: … 🠈|`, so a warning in the console always means something went wrong. Past the last shows the last. `0` is the `O` slide: `arabicToRoman(0)` gives `fullscreen-horizontal_O` (or `vertical_O`), which `Division.fullscreen.scss` parks on slide I with `opacity: 0` and `pointer-events: none`, so zero means nothing shows and nothing can be clicked. Any other number brings it back. It counts the slides in the group's `${labelName}-main_container`, so adding or removing a preview never needs the function changed.
  - **The `.tsx` calls it once in the `useEffect`**, above the colour flag: `startingPreview('(division)', 1);` in `ArchiveMain.tsx`. Move the call to land on what you're working on. An application always opens on its centre page: `startingPreview('(vocation)', 1);` in `OvertimeMain.tsx`, which shows the first preview in the centre's `<DivisionSweeping>`. Its demo buttons and the character pick call it too, from the header and footer.
- **An `<li>` is only targeted through its known parent.** A `<DivisionFullscreen>` nests inside another one, so a loose `li[class*="fullscreen"]` can land on the wrong carousel. Name the parent `<div>` by its exact class and step down with `>`: `div[class="elements-main_fullscreen-default"] > ol > li` (`[y]` always renders an `<ol>`, `[x]` always a `<ul>`). A child carousel adds its own exact parent to that path, never a shorter one.
- **Imports sit under `//--|🠋 Functions 🠋|--\\`**, right below the file's name line, the same flag a `.tsx` uses for its `.ts` imports.
- **Every state change goes through `blockViews()`, and a click clears the lock first.** `expandHeaders()` and `expandFooters()` remove `locked-${blockName}` from the container and its bar before calling `blockViews()`, because a deliberate click wins over the lock a hover or unfold just set. `squareHeaders()` and `squareFooters()` do the same before squaring, because a deliberate leave wins too. Nothing else clears a lock by hand; the lock is what stops a user's quick interactions from glitching a container (see [CONTAINERS.md, Mirroring a Layout](CONTAINERS.md#mirroring-a-layout)).
- **The state handlers live with their pair, the dispatcher stays in `containers/containers.ts`.** `expandHeader` … `squaringFooter` sit in `layouts/scripts/Head_Foot.ts` beside `freezeContainer`, the `Leftbar`/`Rightbar` four in `Left_Right.ts`, both in the same 1–4 order (Expanded, Collapsed, Unfolded, Squaring), and the overlay's (`expandOverlay`, `hidingOverlay`, `updateOverlay`, `loadingOverlay`) in `Main_Over.ts`. `containers.ts` keeps only the types, `blockViews()`, the `blockHandlers` table and `errorHandlers()`. The handlers are `export let` **only so `blockHandlers` can reach them: nothing else imports or calls them**, so every state change still passes the locks in `blockViews()`.
- **`<main>`'s blur is decided in one place: `obnubilateMain(pageName)` in `layouts/scripts/Head_Foot.ts`.** `<main>` has `obnubilate` while the overlay is `.loading` or `.update`, or while any of the header, footer, leftbar or rightbar is `.expanded`, in either orientation; otherwise it's removed. It runs after every change `blockViews()` makes (inside `errorHandlers()`), at the end of `freezeContainer()`, and when the page loads (`clearBlur()`). No handler touches `<main>`'s blur itself. It adds `obnubilate` as the **first** class, the way the JSX writes it, because `blockViews()` reads `classList[0]`. It lives in `Head_Foot.ts` rather than `Main_Over.ts` so that `freezeContainer()` can call it without another import loop. Only `<main>` follows this rule: the other four containers keep their load-time blur, which `clearBlur()` removes.
- **`Main_Over.ts` and `containers.ts` import each other.** It works because nothing calls across the two while they load: `blockHandlers` holds arrows that only run on a click or a timer. If something ever does (a `blockViews()` written outside a function), `errorHandlers()` catches the `ReferenceError` and shows a `|🠊 Warning: … 🠈|` popup naming the block and the state, then lets the error through.
- **Pass values, not events.** The `.tsx` hands over what the function needs (`onChange={(event) => switchColors(event.target.value, 'textarea')}`, `task: [(tint) => toggleColors(tint)]`), so the `.ts` never imports React types.
- **Lookup maps are written out**, one line per entry (`'(red)': 'red'`, `'(green)': 'gre'` …), never derived with a shortcut like `.slice(0, 3)`.
- **Colour switching swaps one slot of the class.** The `export const` turns the choice into its abbreviation and passes it to a `let`, which loops over the elements and rebuilds `classList[1]` from its `.split('_')` parts, changing only the colour: `[3]` on a `<Button>` (size*view_shade***color**_clarity_variant), `[4]` on a `<Label>` (size_type_view_shade_**color**\_clarity_def), `[2]` on `<AsideCharacters>` (view_shade_**color**\_clarity), `[0]` on a `<Form>` (**color**\_def). A `<Form>` page's `toggleColors` swaps all three: the `<form>`, then each `<button>` and `<label>` inside it. Shade never changes. Clarity switches the same way on `<ButtonDefault>`'s page: `toggleClarity(fieldset)` in `DefaultFunctions.ts` reads the checked `{option}`'s value (`'Lucid'` or `'Opaque'`) and passes it to `updateClarity`, which swaps `[4]` on one side only, the side named by the `<fieldset>`'s class (`clarify-darkside`). `RoutingFunctions.ts` does the same per side; `ProfileFunctions.ts` has no sides, so the `<fieldset>`'s class picks the shade (`_dar_` or `_lig_`) instead. Every page under `elements/` keeps its colour switcher in its own `*Functions.ts`, and pages that need the same one each keep a copy written line for line alike (see the scope rule above): the three `<Label>` pages each hold `switchColors(choice, labelName)`, which skips the page's own colour `{select}`, and the `<Button>` pages each hold `toggleColors`.
- **Loops count with `.length`**, so adding or removing a preview never breaks them. **The one exception** is `updateButtons` in `DefaultFunctions.ts`: its `i < 49` is deliberate, a marker showing how many `<ButtonDefault>`s each side holds. Leave it.
- **The control keeps its own colour.** The `<DivisionColourize>` toggles and the colour `{select}` stay `(mono)`; they're part of the page, not the preview.

### Element Scopes

Each `containers/Archive/Main/elements/${element}-components/` folder has one scope file, `${Element}Elements.tsx`, which `ArchiveMain.tsx` imports. Its `function` is written the same way in every folder, so you can tell at a glance what each one is previewing. `LabelElements.tsx` is the reference:

```tsx
function LabelElements({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(…);
  const blockName = stripBrackets(info.blockName, '<>') as 'main';
  const labelName = stripBrackets(info.labelName, '()') as 'label';
  const pageName = stripBrackets(info.pageName, '[]') as 'components';

  useEffect(() => {
    //--|🟨|--\\
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let viewName = 3 as number;
  return (
    <section className={`${labelName}-${blockName}`}>
      <DivisionFullscreen
        cases={{
          axis: '[x]',
          show: viewName,
          call: LabelComponents as React.ComponentType<InfoProps>,
        }}
        info={{ … }}
      />
    </section>
  );
}
```

- **`viewName` is the page `<DivisionFullscreen>` renders on.** It counts from 1, in the order the `const` lists its previews. It sits right above `return`, so it's the first thing you read. To land on the preview you're working on, move the `startingPreview()` call in `ArchiveMain.tsx` (see [Functions Files](#functions-files)); `viewName` is where the other groups start. The applications copy the same scope into `containers/${PageName}/Main/elements/${page}-components/`, one per page: `[overtime]` has `EstablishedElements.tsx`, `VocationElements.tsx` and `FreelancingElements.tsx`, each `[y]`: the left and right pages are an empty `<DivisionFullscreen>` for now (it stays, so `startingPreview()` can still find the page), the centre page a `<DivisionSweeping>` (`view: '-bot-'`). The outer container keeps `display: grid` in `OvertimeMain.scss`: `grid-auto-columns: 100%` makes each page one screen wide, even an empty one.
- **`getOrientation` and the `useEffect` are unused for now.** They keep every scope ready for a `switch (getOrientation)` and let you test by hand without adding them first.
- **The names go through `stripBrackets()`** and build the `<section>` class (`label-main`), not the raw `info` values.
- **The `const` (`LabelComponents`) lists the previews**, one per `${variant}-${element}/` folder, and gives each its own `labelName`. Only the `function` follows the shared pattern. Each `const` stays as its folder wrote it: Division, Figure, Navigation, Table and Time pass one shared `defaultInfo`.

### Label Pages

`SwitchingLabel.tsx`, `TextareaLabel.tsx` and `SelectionLabel.tsx` preview the three `<Label>`s the same way:

- **A `(mono)` colour `{select}`** (`labelName: 'colours'`) recolours every other `<Label>` on the page through `switchColors()` (see [Functions Files](#functions-files)).
- **A row is a `<fieldset>` when its labels belong together:** `{option}` (one `data-group`) and `{block}` (typing moves to the next box, like a security code). Each `{input}` sits in its own `<fieldset>` with its own `data-input`: `{text}`, `{email}`, `{password}`, `{search}`.
- **Placeholders name the type:** `Text`, `Combo`, `Select`, and for an `{input}` its `data-input` first: `Email Input`. `{number}` shows `1`, its lowest count, once it's cleared, and `{block}` shows `-`. `{select}` and `{combo}` keep the character lists from `CHARACTERS.md`, Voidspire on `~dark~`, Silverveil on `~light~`.
- **Spacing belongs to the page, never the component.** The 16/12/8/4px gap between labels that would touch (the `<LabelTextarea>` rows, at the four screen sizes) is set in the page's `.scss`.
- **`{block}` is one UPPERCASE letter or number.** `<LabelTextarea>` turns a typed or pasted lowercase letter into uppercase and refuses anything else.
- **`{number}` is a count from `1` to `9999`.** It starts at `1` and the browser's step of `1` counts 1 2 3 4 5; there are no `min`, `max` or `step` props. The `<input>` is `4ch` wide, exactly `0000`, so it follows every size step.
- **`{number}` takes the digits `0` to `9`, nothing else.** `<LabelSelection>` refuses letters, UPPERCASE or lowercase, `+`, `-`, `.` and every other special character when typed or pasted, including the `e` and `E` the browser would allow for exponents. A leading `0` and a fifth digit are trimmed away, because `max` only stops the carets.

---

## 5. Bracket Syntax

Props are written with brackets that show their type at a glance. `stripBrackets()` in `source/layouts/tools/conversions.ts` removes them, and `createClass()` turns style props (and `cases.type`) into short class names.

**Shade, colour and clarity have one map each, shared by every component:** `abbrShade()`, `abbrColor()` and `abbrClarity()` in `layouts/components/components.ts`. They mean the same everywhere, so no component keeps its own copy; each throws `|🠊 Error: Invalid … 🠈|` on a value it doesn't know. Size, view and `cases.type` stay in each component's `createLayout()`, because they differ per component (`'-bottom-'` is `bot` on a `<Button>`, `'bot-lef'` is `bl` on a `<Label>`).

| Wrapper | Prop            | Example                     | Becomes                                   |
| ------- | --------------- | --------------------------- | ----------------------------------------- |
| `[ ]`   | `pageName`      | `'[components]'`            | `components`                              |
| `< >`   | `blockName`     | `'<main>'`                  | `main`                                    |
| `< >`   | `style.size`    | `'<h1>'` … `'<p>'`          | `one` … `par`, missing or `null` is `nul` |
| `- -`   | `style.view`    | `'-top-'` · `'-left-'`      | `top` · `lef`                             |
| `~ ~`   | `style.shade`   | `'~dark~'` · `'~light~'`    | `dar` · `lig`                             |
| `( )`   | `style.color`   | `'(blue)'` · `'(mono)'`     | `blu` · `mon`                             |
| `( )`   | `style.role`    | `'(manager)'`               | `manager`                                 |
| `⟨ ⟩`   | `style.clarity` | `'⟨opaque⟩'` · `'⟨lucid⟩'`  | `opa` · `luc`                             |
| `{ }`   | `cases.type`    | `'{toggle}'` · `'{select}'` | `tog` · `sel`, the first three letters    |

`style.clarity` is required everywhere, and every `<Label>` takes both values:

- **`⟨lucid⟩` is solid:** the full gradient with the `<Button>` bevel, no frame.
- **`⟨opaque⟩` is see-through with a frame:** the layers drop to a quarter and lose the bevel, and the field gets a frame: a 2px dark outline with an inset drop shadow on `~dark~`, and a 2px light outline over a medium inset glow on `~light~`. Hover swaps the two. On `<LabelTextarea>` and `<LabelSelection>` the text also gets a heavier halo in the opposite colour, so it reads on light and dark backgrounds. `<LabelSwitching>` draws the same frames on its layers, and its marks and text stay dark on both, because the page shows through.

**Each component decides what its clarity looks like.** The two values and their letters (`opa`, `luc`) are the same everywhere; the look behind them isn't, so check the component's own rules below before assuming one. `⟨opaque⟩` means something different on a `<Button>`, and that's deliberate: the `<Label>` look marks **forms**, the `<Button>` look marks **applications**, so the two read apart at a glance.

- **`<ButtonDefault>` `⟨opaque⟩` is only text at rest:** every `::before` layer is clear (`opacity: 0`). The text and icon take the shade's own colour, `$blaDar` on `~dark~` and `$neoLig` on `~light~`, with an em outline in the opposite colour so they read on a page of the same shade. Hovering the button fades in that shade's **resting** `⟨lucid⟩` box (`::after` holds it) and the text and icon take the resting `⟨lucid⟩` colours. Hovering the text still flips its colour like `⟨lucid⟩`, but keeps the outline, because the box behind it doesn't flip. `.highlight` swaps the shade, the same as `⟨lucid⟩`.
- **No text frame on `<ButtonDefault>`:** its `⟨opaque⟩` box has no frame around the text.
- **`<ButtonRouting>` and `<ButtonProfile>` keep their frame:** the `.fore` frame (Routing) and ring (Profile) stay visible, and follow the same colour rule as the icon: the shade's own colour at rest, the resting `⟨lucid⟩` colour on hover. They have no crossfade layers, so the back itself fades (`opacity` 0 → 1 over 750ms; a gradient can't fade, it snaps). **Real pictures dim at rest** (`img[src]` at `opacity: 0.5`, back to `1` on hover, over the icon's 250ms); silhouettes only change colour.
- **`<AsideCharacters>` `⟨opaque⟩` drops its background:** the panel's colour goes `transparent` (on the `<aside>` on desktop, on its `::before` on mobile), so only the characters are left. `⟨lucid⟩` keeps the coloured panel. The aside passes its clarity on to every `<ButtonProfile>` inside it, so the characters follow the `<ButtonProfile>` rules above. Its class is view_shade_color_clarity: `rig_lig_mon_luc`. Clarity is the last slot, so there's no trailing underscore: select it with `[class*='_opa']`, not the `_opa_` of a `<Label>` or `<Button>`.

The look lives in each component's `*_tint.scss`. On a `<Label>`, the `&[class*='_luc_']` and `&[class*='_opa_']` rules at the top only hold `opacity: 1`. On a `<Button>`, the top `_opa_` rule also hides the box (`<ButtonDefault>`'s `::before` layers, Routing's `.back`, Profile's `.back span`) and dims pictures; the colours stay in `mon-tint` and `mon-fade`. All ten colours have it; each colour's `_opa_` blocks are its `(mono)` blocks with the palette swapped. **When a clarity's look changes, update this paragraph in the same step,** so the document never describes the old meaning.

For example, `<h3>` + `-left-` + `~dark~` + `(blue)` + `⟨lucid⟩` with an image produces `class="default-button thr_lef_dar_blu_luc_def"`. A `<Label>` writes its class in the same order with `cases.type` added after the size, `size_type_view_shade_color_clarity_def`: `nul_tog_mc_dar_mon_luc_def`. Its view is a `<ButtonRouting>` position (below), the only style prop that may be left out (missing is `'mid-cen'`, `mc`). It places the `<label>` inside its parent with auto margins, so the parent has to be a flex or grid box for top and bottom to work. On `<LabelSelection>` it also picks the caret's side and the corners: round around the caret, sharp where you type. The left column (`'top-lef'`, `'mid-lef'`, `'bot-lef'`) puts the caret on the left, `'mid-cen'` is sharp at both ends, `'cen-mid'` rounds both ends with the caret on the left, and every other position puts it on the right. A `<Label>`'s `_def` is a placeholder for now. On a `<Button>`, the last part of the class is a toggle between a variant's two looks:

| Variant           | `.svg`             | `.png` / `.jpg`                  | No image        |
| ----------------- | ------------------ | -------------------------------- | --------------- |
| `<ButtonDefault>` | `_def`, silhouette | `_def`, the picture              | `_alt`, no icon |
| `<ButtonStretch>` | `_str`, silhouette | `_str`, the picture              | `_alt`, no icon |
| `<ButtonRouting>` | `_rou`, silhouette | `_alt`, picture fills the square | `_alt`, empty   |
| `<ButtonProfile>` | `_alt`, silhouette | `_pro`, the picture              | `_pro`, empty   |

A silhouette is the `.svg` used as a mask, painted in the button's colours. A picture is shown as it is.

There are two shades, `~dark~` and `~light~`; there's no `~medium~`. A `<Button>` has no `cases.type`: the browser's default `type` is fine.

`<ButtonRouting>` and every `<Label>` place themselves with a position instead of a `- -` view: `'top-lef'`, `'mid-cen'`, `'bot-rig'` and so on, row then column, three letters each, which become `tl`, `mc`, `br`. Every position name in the project uses that form.

---

## 6. Scaling Pattern

> **Rule:** visible components scale through three mixins, `desktop-landscape`, `mobile-portrait` and `tablet-squaring`, so they fit every screen size. Structural components may merge into one set of rules when every orientation behaves the same. Repeating values is fine; clever shortcuts are not.

| Group      | Components                                                                                                                                   | Scaling                                     |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| Visible    | `<article>` · `<aside>` · `<button>` · `<fieldset>` · `<figure>` · `<form>` · `<label>` · `<menu>` · `<span>` · `<table>` · `<time>` · lists | Always all three mixins                     |
| Structural | `<section>` · `<div>` · `<nav>`                                                                                                              | All three mixins, or one merged set (below) |

**Components scale on tablet, containers don't. This is strict.** Every component in `components/` has all three mixins. Every file in `containers/` (the application pages, the Archive pages, the global page grid) has only `desktop-landscape` and `mobile-portrait`, never `tablet-squaring`. If a container ever seems to need tablet values, turn that piece into a component and scale it there. On a near-square screen the page keeps its bigger size while the component inside it has already stepped down. That's deliberate: the deeper element is always one step ahead, so a component always fits inside its container. Anything sized to the global grid stays on the desktop and mobile values for the same reason: the `<MenuSwipe>` and `<MenuScroll>` row height, the `<DivisionConveyor>` slide, and the conveyor margins in the Archive `<header>` and `<footer>`. Only what sits inside a menu row (button grids, side paddings) scales on tablet.

**Merging `<section>`, `<div>` and `<nav>`:** when `desktop-landscape` and `mobile-portrait` would hold identical values, write the rules once with no orientation media queries. If even one value differs between orientations, keep the full split; never merge only part of a file. A merged file starts with a `//--|🠋 Shared (Name) 🠋|--\\` flag so it's clear the merge is deliberate.

Sass can't `@extend` a placeholder from outside the `@media` block it sits in, so a merge means removing the orientation queries, not sharing placeholders across them.

| Mixin               | Applied under                                                 | Breakpoints                                                            |
| ------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `desktop-landscape` | `(orientation: landscape)`                                    | `max-height`: 768px · 480px · 360px                                    |
| `mobile-portrait`   | `(orientation: portrait)`                                     | `max-width`: 768px · 480px · 360px                                     |
| `tablet-squaring`   | `(max-aspect-ratio: 15.99/9) and (min-aspect-ratio: 9/15.99)` | Landscape `max-width` / Portrait `max-height`: 1920px · 1366px · 854px |

Near-square screens (tablets, split windows) don't fit the desktop or mobile breakpoints well, so `tablet-squaring` measures the long side instead and steps down one size earlier. It reuses the exact values from the other two mixins, which are measured against the `styles/Mixins.scss` skeleton. It's included last, so it overrides both orientations.

The component's root selector includes all three, each under its own flag: `Desktop (Landscape)`, `Mobile (Portrait)` and `Tablet (Squaring)`, so the three includes read as three sections. Every orientation query that holds `@include`s gets its flag the same way, wherever it sits: components, pipeline components (`Button.default.scss`), containers and `styles/Skeleton.scss`. A flag ends in `|--\\`, never `|--//`, except the rows comment of a multi-line `grid-template` (see [Comment Flags](#8-comment-flags)):

```scss
aside[class*='characters-default'] {
  display: grid;
  //--|🠋 Desktop (Landscape) 🠋|--\\
  @media screen and (orientation: landscape) {
    @include desktop-landscape();
  }
  //--|🠋 Mobile (Portrait) 🠋|--\\
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
        @media screen and (max-width: 1920px) {
        }
        @media screen and (max-width: 1366px) {
        }
        @media screen and (max-width: 854px) {
        }
      }
      @media screen and (orientation: portrait) {
        //--|🠊 Mobile 🠈|--\\
        @media screen and (max-height: 1920px) {
        }
        @media screen and (max-height: 1366px) {
        }
        @media screen and (max-height: 854px) {
        }
      }
    }
  }
  %tabl-grid {
    /* same shape */
  }
  %tabl-tint {
    /* same shape */
  }
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

### Fades

> **Rule:** a fade (`mask-image: linear-gradient(…)`) only goes on a component that fills the exact measures of the screen, or on one with a fixed width or height that clips the children scrolling through it. Nothing else fades.

| Component | What fades | Size |
| --- | --- | --- |
| `<DivisionFullscreen>` | All four edges, **outer only** | Half the global grid: one row top and bottom, half a column on the sides |
| `<DivisionSweeping>` | Nothing of its own | It sits inside the outer `<DivisionFullscreen>` and shows that fade |
| `<MenuSelect>` | The `<menu>` that scrolls (`lef_top`, `rig_bot`) | 1 / 0.75 / 0.5 / 0.25rem |
| `<AsideCharacters>` | The character list (`div.characters`) when it scrolls | 1 / 0.75 / 0.5 / 0.25rem |
| `<MenuSwipe>` · `<MenuScroll>` | The title text (`h3 span`), in place of an ellipsis. Top and bottom stay sharp; `-def-` fades left and right, `-lef-` only the right end, `-rig-` only the left end | One skeleton square (`$high` / `$test` / `$misc` / `$tiny`): 128 / 96 / 64 / 48px desktop, 192 / 160 / 96 / 64px mobile |

- **Outer only.** A `<DivisionFullscreen>` inside another one never fades (`mask-image: none`), so the inner pages don't fade twice and the main transitions stay clean.
- **Fades scale like everything else**, through all three mixins. A fade is a harmless style effect, so it may be a component's only content in `tablet-squaring`, stepping down one size ahead like the rest of tablet.
- **Two directions at once** use two gradients with `mask-composite: intersect`.

The reference implementation is `source/layouts/components/Aside/characters/Aside.characters.scss`.

---

## 7. Colours

### The Ten Colours

`styles/Palettes.scss` holds every colour, in this order. Mono comes first because it's the default colour. Every colour list (types, maps, includes, mixins) follows the same order: `mon · red · gre · blu · pur · ora · pin · yel · bro · tur`. `<Button>` already does; other components are moved over as they're refactored.

| #   | Colour    | In `.tsx`       | Class  | In `.scss`              |
| --- | --------- | --------------- | ------ | ----------------------- |
| 1   | Mono      | `'(mono)'`      | `_mon` | `Palettes.$gray-*`      |
| 2   | Red       | `'(red)'`       | `_red` | `Palettes.$red-*`       |
| 3   | Green     | `'(green)'`     | `_gre` | `Palettes.$green-*`     |
| 4   | Blue      | `'(blue)'`      | `_blu` | `Palettes.$blue-*`      |
| 5   | Purple    | `'(purple)'`    | `_pur` | `Palettes.$purple-*`    |
| 6   | Orange    | `'(orange)'`    | `_ora` | `Palettes.$orange-*`    |
| 7   | Pink      | `'(pink)'`      | `_pin` | `Palettes.$pink-*`      |
| 8   | Yellow    | `'(yellow)'`    | `_yel` | `Palettes.$yellow-*`    |
| 9   | Brown     | `'(brown)'`     | `_bro` | `Palettes.$brown-*`     |
| 10  | Turquoise | `'(turquoise)'` | `_tur` | `Palettes.$turquoise-*` |

**Mono and gray are the same colour.** Write `(mono)` in `.tsx` and `.ts` files, and `gray` in `.scss` files. Never `(gray)` in a prop.

Every colour comes in five tones (`-dark`, `-medium`, `-light`, `-neon`, plus `-darkMode` and `-lightMode` backgrounds) and two shades: `~dark~` (`_dar_`) and `~light~` (`_lig_`).

### The RGB Toggles

`<DivisionColourize>` has four on/off toggles: **Mono**, **Red**, **Green** and **Blue**. Red, green and blue mix the colours like light does, and Mono switches between two sets of mixes, so all ten colours can be picked:

| Mono | Red | Green | Blue | Result    |
| ---- | --- | ----- | ---- | --------- |
| Off  | Off | Off   | Off  | Mono      |
| Off  | On  | Off   | Off  | Red       |
| Off  | Off | On    | Off  | Green     |
| Off  | Off | Off   | On   | Blue      |
| Off  | On  | On    | Off  | Orange    |
| Off  | On  | Off   | On   | Purple    |
| Off  | Off | On    | On   | Turquoise |
| Off  | On  | On    | On   | Brown     |
| On   | Off | Off   | Off  | Mono      |
| On   | On  | Off   | Off  | Pink      |
| On   | Off | On    | Off  | Green     |
| On   | Off | Off   | On   | Blue      |
| On   | On  | On    | Off  | Yellow    |
| On   | On  | Off   | On   | Purple    |
| On   | Off | On    | On   | Turquoise |
| On   | On  | On    | On   | Mono      |

**Every page opens orange,** the company's colour: Red and Green start on (`cases: { type: '{toggle}', mark: true }`), and the component's `useEffect` runs `cases.task` once on load with that tint, so the preview matches the toggles before anything is clicked. To open on another colour, change which toggles get `mark: true`.

The map is `tintMap` in `components/Division/colourize/Division_colourize.ts`. It returns the colour's abbreviation (`mon`, `red`, `pin` …), and each layout decides what to do with it through `cases.task`:

```tsx
<DivisionColourize
  info={{ pageName: pageName, blockName: blockName, labelName: labelName }}
  style={{ shade: '~dark~' }}
  cases={{ task: [(tint) => updateArticle(tint)] }}
/>
```

The function a layout passes in lives in its own `*Functions.ts`, never in the component. `updateArticle` in `UpdatesFunctions.ts` keeps the shade and swaps the colour: `dar_mon` becomes `dar_red`.

### Adding a Colour to a Component

Every colour's tint recipe is identical; only the palette names change. To add one, copy an existing colour's `*-tint` and `*-fade` mixins in the same file, swap the palette names, and add the colour to the component's type lists. Its abbreviation goes in once, in `abbrColor()` in `layouts/components/components.ts`, which every component shares. Never change the recipe while adding a colour.

### Colour Changes and Fades

Text colour, text glow and the icon background fade smoothly when the colour changes, on the `$tint-fade` curve that each `*-colors` mixin declares. The gradients on `::before` and `::after` snap, because browsers can't blend one gradient into another. That's accepted for now (see [Parked for Later](#10-parked-for-later)).

---

## 8. Comment Flags

Arrows mark comments so the structure of a file reads at a glance. They wrap every comment as `//--| … |--\\` in TypeScript and SCSS, and `<!--| … |-->` in HTML.

| Flag                                            | Unicode | Usage                                 | Example                              |
| ----------------------------------------------- | ------- | ------------------------------------- | ------------------------------------ |
| [🠊](https://www.compart.com/en/unicode/U+1F80A) | U+1F80A | Opens a file title or a note          | `//--\|🠊 Button.default.tsx 🠈\|--\\` |
| [🠋](https://www.compart.com/en/unicode/U+1F80B) | U+1F80B | Section heading for the code below it | `//--\|🠋 Functions 🠋\|--\\`          |
| [🠈](https://www.compart.com/en/unicode/U+1F808) | U+1F808 | Points back at the code on its left   | `//--\|🠈 Must Load First 🠈\|--\\`    |
| [🠉](https://www.compart.com/en/unicode/U+1F809) | U+1F809 | Closes a block comment opened with 🠋  | `/*--\|🠋 … 🠉\|--*/`                  |

**More patterns you'll see:**

- `//--|===|--\\` divides a block into parts, for example before the `@extend` lines.
- Every flag ends in `|--\\`, with one exception: the rows comment inside a multi-line `grid-template` ends in `|--//`. Prettier reads a `\` at the end of a line as "continue onto the next line" and glues the rows line to the columns line on save, so the `//` comment swallows the columns and the build fails with `expected ";"`. The other comments in the template keep `|--\\`:

  ```scss
  grid-template: //--|🠋 Width: 1920px 🠋|--\\
    repeat(2, 4rem) 1fr repeat(2, 4rem) //--|🠈 rows 🠈|--//
    / 398px 1fr 398px; //--|🠈 columns 🠈|--\\
  ```
- The server's `.js` files and anything in a `REVIEW/` folder still end comments in `|--//`; they're older code and change only when they're rewritten.
- Every file starts with its own name: `//--|🠊 Aside.characters.scss 🠈|--\\`.
- `AI Code: Review Please`, with the date, marks a line an AI assistant added or changed, so the owner can find and review it: `//--|🠈 AI Code: Review Please 2026-10-31 🠈|--\\`. The owner removes it once the line is understood and kept. Reordering code (moving parameters, arguments, union values or lines without changing them) doesn't get a flag, unless it obviously breaks something.
- A commented-out line with `!important` is a test switch, not dead code: `//--|🠊 background: rgba(darkgreen, 0.25) !important; 🠈|--\\`. Uncomment it to see what a selector reaches, and comment it back before committing (see [Test Tools](#test-tools)).
- `Warning:` marks code that works today but can break something elsewhere, and says what: `//--|🠊 Warning: @at-root reaches every <footer>, not only #overtime-footer. Review Please 🠈|--\\`. It stays until the code is changed; that one went when the block was scoped to `footer[id*='overtime']`.
- `Used in` is a back-reference: it names who calls a state handler in `layouts/scripts/` (`Head_Foot.ts`, `Left_Right.ts`, `Main_Over.ts`). Those handlers are never called by name. `blockViews()` reaches them through `blockHandlers`, a lookup table keyed by `blockName` and `alterAction` (a dispatch table), so the editor's Find All References can't trace them. Keep the trail by hand: when a container starts calling `blockViews()` with a pair, add the caller to the block comment at the end of the handler that pair reaches, one caller per line as `<Container> · function();`, indented one step inside the block:

  ```ts
  /*--|🠋 Used in...
    <Main> · revertBlocks();
    <Overlay> · shrinkBlocks();
    <OvertimeHeader> · previewProfile();
  🠉|--*/
  ```

  When a caller stops, take its line out. A handler with no note isn't wired to anything yet. This keeps the indirection readable instead of turning it into spaghetti code.
- A coloured square tags the application a file belongs to, usually as the first line inside a container's `useEffect`: `//--|🟨|--\\` Archive (`components`), 🟩 Track a Day (`overtime`), 🟦 Log a Ticket (`ticketing`), 🟥 Find a Link (`hyperlink`), 🟧 Pick a Page (`landing`). It makes a code review show at a glance which app you're in. Orange is the company's colour, so `[landing]`, the company's front door, carries it; red, green and blue stay with the three applications.

---

## 9. Testing

### The Pipeline

Work moves through the applications in phases, and a phase only opens when the owner gives the go-ahead:

1. **`[archive]` first.** Every component is stress-tested here until it behaves correctly.
2. **`[overtime]` second.** The application skeleton is built here, going back and forth with `[archive]` whenever a component needs fixing. This is the flip-flop.
3. **`[ticketing]` and `[hyperlink]` next.** Once the skeleton is confirmed, its patterns are copied over, and the flip-flop moves between `[overtime]`, `[ticketing]` and `[hyperlink]`. `[archive]` comes back only to fix a bad mistake or confirm a complicated component. **This is the current phase** (started 2026-11-01). The first full copy to both was finished the same day, so from here on a change in `[overtime]` is copied over with the method below.
4. **`[landing]` waits.** It stays untouched until the character demo in `[overtime]` (`previewProfile()`, `sequencedDemonstration()`) is complete with all 18 characters. Whether the demo then moves to `[landing]` hasn't been decided yet.

**Change only the application you're working in.** A change made in `[overtime]` doesn't go to `[ticketing]` or `[hyperlink]` until the owner asks. Note where it will be needed later, and confirm the instructions before copying it, so it's duplicated correctly. **Shared files are the exception:** `containers/containers.ts`, `layouts/scripts/`, `layouts/tools/` and everything in `components/` run for every application, so a change there reaches all of them at once. Check that the others still behave before calling it done. A component's prop type is the easy one to miss: when `<MenuToggle>`'s `cases.task` became `{ click, enter }` objects, only `[overtime]`'s callers were updated, and `[ticketing]` and `[hyperlink]` crashed on the first hover (`cases.task[0].enter is not a function`). When a component's `TheseProps` changes shape, search for every `<ComponentName` in `source/` and update each caller in the same step.

**What a copy keeps per application.** `[overtime]` is the skeleton: a copy takes its structure, classes, SCSS and functions line for line, and changes only these:

| Part                                         | `[overtime]`                                 | `[ticketing]`                                | `[hyperlink]`                                |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| Names, flag and module                       | `overtime`, 🟩, `TrackTime`                  | `ticketing`, 🟦, `DefineDuties`              | `hyperlink`, 🟥, `ArchiveAnchors`            |
| `<NavigationDefault>` logo                   | `(green)`, `track-a-day/primary-medium`      | `(blue)`, `log-a-ticket/primary-medium`      | `(red)`, `find-a-link/primary-medium`        |
| The `apps:` card and the `<SectionCharacters>` | `(green)`, `apps: 'track-a-day'`           | `(blue)`, `apps: 'log-a-ticket'`             | `(red)`, `apps: 'find-a-link'`               |
| `<DivisionTesting>` in `<Main>` and the two `<ArticleUpdates>` in `<Overlay>` | `(green)`; `<Main>` has no `<DivisionTesting>`, its pages took its place on 2026-11-08 | `(blue)` | `(red)` |
| The toggle menu's `text` and icons           | `Established` / `Freelancing`, `7.3.1/solid/briefcase` / `6.5.1/solid/messages-dollar` | `Manager` / `Employee`, `7.3.1/solid/user-tie` / `6.5.1/solid/user-helmet-safety` | `Specialist` / `Technician`, `7.3.1/solid/award` / `7.3.1/solid/screwdriver-wrench` |
| The app menu (`<MenuSwipe>`)                 | TraLogFin, Log a Ticket, Find a Link         | Track a Day, TraLogFin, Find a Link          | Track a Day, Log a Ticket, TraLogFin         |

Everything else stays `(mono)`: the toggle menu, and `<AsideCharacters>` (`(mono)` + `⟨opaque⟩`). Only the cards that represent the application carry its colour; the other colours are too flamboyant. In the app menu, TraLogFin takes the current application's own slot, so the three always run Track a Day → Log a Ticket → Find a Link. The TraLogFin logo (`pick-a-page/trinity-apps`) is always `(orange)`, the company's colour, wherever it shows: that slot in the app menu, and the `<NavigationDefault>` logo on `[archive]` and `[landing]`. Its `color`, `image` and `task` lists follow that same order, in both the Header and the Footer. The toggle menu keeps `labelName: 'demonstration'` in every application, because the slide rules select on it.

**How to copy.** Compare each file under `containers/Overtime/` with the copy's file, the names swapped:

```bash
diff <(sed 's/Overtime/Ticketing/g; s/overtime/ticketing/g' Overtime/Header/OvertimeHeader.tsx) Ticketing/Header/TicketingHeader.tsx
```

Every line the `diff` shows is either a row of the table, which the copy keeps, or something to copy over from `[overtime]`. When the copy is done, only the table's rows are left, and a file the table doesn't mention comes out identical. If a line fits neither group, or something in `[overtime]` looks wrong, stop and ask before copying it.

- **Flags come over as they are.** A line copied from `[overtime]` keeps its comment flags, dates included; a line written new for the copy gets `AI Code: Review Please` with today's date.
- **The shared `Used in...` notes grow with the copy.** Once a copy's `previewProfile()` squares through `blockViews()`, add its `<${PageName}Header>` and `<${PageName}Footer>` to the notes of `squaringHeader` and `squaringFooter` in `layouts/scripts/Head_Foot.ts` (see [Comment Flags](#8-comment-flags)).
- **Afterwards, run the checks:** `npx sass` on every changed SCSS file, the `tsc` error count, the `diff` above, and the pair `diff` of the Header and Footer `*Functions.ts` (see [Functions Files](#functions-files)).
- **A copy from `[overtime]` to `[ticketing]` and `[hyperlink]` gets a full scan, unless the owner says otherwise.** Before calling it done, list every file the change touches and every caller of every component, function and prop type it changed, across all five applications, and read each one against the new shape. A change to `[archive]` alone doesn't need this; a copy does, because a missed caller is a bug duplicated into two more applications.
- **The editor's Problems panel is not a full check.** VS Code only analyses the files it has open, so an unopened file reports no problems whether it has them or not, and it can miss a wrong shape even in an open file. `npx tsc --noEmit -p tsconfig.json` is the only check that covers every file. If it can't be run (an AI assistant's terminal may be blocked), say so plainly and list which files were read by hand, so the owner knows what still needs checking.

### Visual Tests

**Visually:** the **Archive** page (`#components-body`) is the testing surface. Its element groups (`<Article>`, `<Aside>`, `<Button>` …) always run alphabetically, in every file that lists them: `ArchiveMain.tsx` and `ArchiveMain.scss`, the Leftbar and Rightbar menus (icons, links and `pages` count), and the Header and Footer `MenuSwipe`s. A new group slots into its letter in all six, so `<Form>` sits between `<Figure>` and `<Label>`. Inside a group, the page order, the default preview and the harness layouts change with the work, so the documents don't fix them; the code decides. Every component gets a test harness in `containers/Archive/Main/elements/${element}-components/${variant}-${element}/` that renders the real component with toggles for its props. The folder's `${Element}Elements.tsx` decides which preview it renders on, through `let viewName` (see [Element Scopes](#element-scopes)), and `startingPreview()` in `ArchiveMain.tsx` opens the page on one group and preview. To open a different page, change the `viewBody('archive')` call at the top of `source/index.tsx`. A `<Label>` page shows every `cases.type` at once, one row each, in both shades and both clarities. Each cell is a bare `<fieldset>`, so `data-` attributes and `{option}` groups can be tested.

**Rules:** test the application rules with the characters in [CHARACTERS.md](CHARACTERS.md). Each one lists the rules it exists to break.

**From the terminal:**

```bash
npx sass --no-source-map path/to/file.scss > /dev/null    # Does the SCSS compile?
npx tsc --noEmit -p tsconfig.json                         # Does the TypeScript check?
```

The TypeScript check currently reports some errors that already existed. Compare the count before and after a change: it should never go up.

### Test Tools

Test tools use `!important` on purpose: they have to win over everything, and they're never part of the design.

- **`display-testing` in `styles/Mixins.scss`** tints the page blocks (header, main, footer and the `fore`/`mid`/`back` layers) so the grid can be checked by eye. Include it by hand; it's never left on.
- **`<DivisionTesting>`** has a button per block (`<header>`, `<main>`, `<footer>`, `<leftbar>`, `<overlay>`, `<rightbar>`) that runs the block's transitions and flashes its background with `.emphasize` / `.emphasize-${colour}` (`Division.testing.scss`). Its dashed outline, the marching ants, takes the colour of its `style.color`.
- **Marching ants on the `<Menu>` pages.** `SwipeMenu.scss`, `ScrollMenu.scss` and `SelectMenu.scss` outline every `<menu>` with marching ants, so each menu's bounds show without a fill behind it. Unlike the other tools here it has no `!important` and stays on: it's part of how those pages read. Each file keeps its own `@mixin marching-ants` and `@keyframes marching-ants` under a `//--|🠋 Marching Ants 🠋|--\\` flag, right below the `@use` line, and both mixins apply it with `> menu { @include marching-ants(); }`. A border can't animate, so the outline is four dashed gradient strips (top, bottom, left, right) that slide clockwise: an 8px dash, an 8px gap, 2px thick, `$indexLand-medium` at 75%, one lap of the dash a second. Under `prefers-reduced-motion` it stays drawn but stops moving. To tune it, change `$ants-color`, the `16px` repeat (dash plus gap), the `2px` thickness or the `1s`, the same in all three files. The old test fills stay beside each menu as commented-out lines (`//--|🠊 background: rgba(darkred, 0.25); 🠈|--\\`): uncomment one to see the whole cell a menu or panel fills.
- **Scope selectors in `styles/Transition.scss`.** `%header-children` and `%footer-children` start with empty `section[class*='foreground']`, `figure[class*='midground']` and `div[class*='background']` rules. They're kept empty to show what each selector reaches: uncomment the test background inside one and look. They compile as descendant selectors, so they reach every match inside the `<header>` or `<footer>`, not only its direct children.

### REVIEW Folders

When old code is replaced but should be kept, the untouched original goes in a `REVIEW/` folder beside its rewrite: `components/Form/REVIEW/login/` sat next to `components/Form/login/` until the five `<Form>`s were rewritten (the originals are in commit `d3b4ec09`). The live folder holds the rewrite in the current syntax. `tsconfig.json` excludes `source/**/REVIEW/`, so the old code doesn't count against the type check, and nothing `@use`s or imports it. Delete the `REVIEW/` folder once the rewrite previews cleanly in the Archive; GitHub keeps the history.

---

## 10. Parked for Later

Decided, but not built yet. Don't start any of these without a conversation first.

| What                                      | Where it's headed                                                                                                                                                                      |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bootstrap into `Global.scss`               | Carry over only the Bootstrap rules the app uses, then drop the framework and rename `display-1` … to `disp~one` …. Never select those as `[class*='disp~one']`. Only with near-certainty, since it moves the baseline |
| Smooth fades between colours              | Move the hue into `background-color` so gradients fade too. Needs testing in the Archive and Figma first                                                                               |
| `<ButtonRouting>` effects                 | Special animations when it's inside `<NavigationDefault>`                                                                                                                              |
| `_division-${variant}` classes            | `<DivisionColourize>`, `<DivisionTesting>` and `<DivisionPlaceholder>` move to `_${variant}-default` ([Component Classes](#component-classes)), one at a time, with their harness SCSS |
| `blockViews()` parameter order            | `blockViews()` and its 32 handlers move to names-first ([Declaration Order](#declaration-order)): about 62 calls in 14 files, in one reorder-only commit right after a clean one     |
| Bracketed `labelName`s                    | About 60 callers pass `'(default)'`; they move to the bare `'default'` as their files are refactored                                                                                   |
| Log a Ticket                              | Rebuilt from my original jQuery ticketing system and its claim-to-score loop                                                                                                           |
| Login status                              | Accounts move between `pending`, `enabled` and `blocked` collections; status should become a field ([TABLE.md](TABLE.md#6-mongodb-today-mysql-tomorrow))                               |
| Server secrets path                       | `landing.js` looks for `.env` in the wrong folder ([MODULES.md](MODULES.md#5-run-the-server))                                                                                          |
| Unpaid solutions, country-specific expiry | [GUIDELINES.md, Section 15](GUIDELINES.md#15-explicitly-outside-this-baseline)                                                                                                         |
