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
| [CONTAINERS.md](CONTAINERS.md)   | The six containers every page is built from, how they pair and flip, and what each one does per app |
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

### Component Classes

A component's outer element gets two classes: who placed it, then what it looks like.

```tsx
<label className={`${info.labelName}-${info.blockName}_selection-${stripBrackets(cases.type, '{}')} ${createClass(style, cases)}`}>
//--|🠈 default-main_selection-select nul_sel_mc_dar_red_luc_def 🠈|--\\
```

| Part                             | Example             | Comes from                                      |
| -------------------------------- | ------------------- | ----------------------------------------------- |
| `${labelName}-${blockName}`      | `default-main`      | The caller's `info`                             |
| `_${variant}-${type}`            | `_selection-select` | The component's folder name, then `cases.type` in full. A component without `cases.type` ends in `-default` |
| `${createClass(style, cases)}`   | `nul_sel_mc_dar_red_luc_def` | The props, always the **second** class (see [Bracket Syntax](#5-bracket-syntax)) |

- **The props class stays second.** The `*Functions.ts` files swap colours with `classList[1]`, so nothing may be added between the two classes. They rebuild it with `.split('_')`, so a new slot in the class moves every index after it: adding `_luc_` to `<Button>` meant `[4]` became the clarity and `[5]` the variant.
- **The root selector matches the variant part, not just the variant name:** `label[class*='_selection-']`, never `label[class*='select']`. The first half of the class comes from the caller, so a `labelName` like `select` would otherwise pull the wrong styles onto another `<Label>`. Each case is then `&[class*='selection-select']` inside it.
- **`labelName` is required** (`labelName: string`) wherever it builds the class, and callers write it bare: `'default'`, not `'(default)'`. Components don't strip its brackets, so they'd end up in the class.
- **Repeating a class is fine.** `<DivisionColourize>` renders four `{toggle}` `<LabelSwitching>`s with the same class. That's why components don't use `labelName` as an `id`.

**The exception is `<Button>`:** its class is `${variant}-button` (`default-button thr_lef_dar_blu_luc_def`) and `info.labelName` becomes its `id`. The three `_division-${variant}` names (`colourize`, `testing`, `placeholder`) are older and are renamed one at a time (see [Parked for Later](#10-parked-for-later)).

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

The `style={{ … }}` props on components (`color`, `view`, `shade`, `clarity`, `image`) aren't inline styles. They're turned into class names, so they're fine.

### Git

Branches are `#.#` (`4.7`), tags are `v#.##` (`v4.07`). The full rules are in [GITHUB.md](GITHUB.md#1-naming-rules).

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

`<ButtonDefault>`, `<ButtonProfile>` and `<ButtonRouting>` are written the same way, line for line. When they disagree, `<ButtonDefault>` is the baseline.

The three `<Label>`s (`<LabelSwitching>`, `<LabelTextarea>`, `<LabelSelection>`) use a shorter pipeline: `Switching_flex.scss`, `Switching_size.scss` and `Switching_tint.scss`. They have no grid or corners of their own, and their flex and tint never change per screen, so those two files only hold the global `*-flexbox` and `*-colors` mixins. Only `*_size.scss` exports `desktop-size`, `mobile-size` and `tablet-size`. Inside every mixin, each case sits under its own `&[class*='switching-toggle']`, so one look per case stays readable. `<LabelTextarea>`'s three cases share one set of tints, because `{text}`, `{input}` and `{block}` look the same; `[class='event']` matches the `<input>` and the `<textarea>`.

### Pipeline Files

- **One order everywhere:** flex, grid, size, tint, corn. The `@use` lines, the global includes and every orientation block follow it.
- **Every file is always there.** Each one exports `desktop-*`, `mobile-*` and `tablet-*`, and each mixin opens with its flag: `//--|🠋 Desktop (Flex) 🠋|--\\`. A mixin with nothing to do stays, with a `/*--|🠋 … 🠉|--*/` note saying where the other variants handle that part.
- **Global mixins** (`${variant}-flexbox`, `${variant}-gridbox`, `${variant}-colors`) hold what never changes per screen. They're included outside the media queries, and a `//--|===|--\\` divider separates them from `desktop-*`.
- **Inner layers are selected by exact class:** `div[class='text']`, never `.text`. Two things follow from that:
  - The layers can't carry a second class: `class="text visible"` no longer matches. State classes (`.highlight`, `.hidden`…) only ever go on the `<button>` itself.
  - Every pipeline file has the same specificity, so the include order decides who wins. Colour belongs to `*_tint.scss` alone. Other files set `border-*-width` and `border-style`, never the `border:` shorthand, which quietly resets the colour.
- **No outer shadows or glows.** Neighbouring containers paint over anything that reaches outside a button, so it looks clipped. Inset shadows (the bevel) and text glow are fine.

### Style Imports

- **Every component's `.scss` is loaded from `styles/Barrel.scss`, never from its own `.tsx`.** A `.tsx` has no `//--|🠋 Styles 🠋|--\\` import. A new component gets one `@use` line in the Barrel instead: `@use '../components/Division/colourize/Division.colourize.scss' as DivisionColourize;`.
- **The Barrel is grouped by tag**, under `//--|🠋 <Division> 🠋|--\\` and the like, and the alias is the component's name. Inside a group, the shortest line goes first.
- **Check the path letter by letter.** A wrong folder or file name stops the whole build with `Can't find stylesheet to import`, pointing at `Barrel.scss` and `index.scss` rather than at the component.

Older files still import their own `.scss` (the `Form` components and others). They're moved to the Barrel as they're refactored.

### Error Messages

Errors keep the props' own wrappers, so they read like the prop that caused them:

```ts
throw new Error(`|🠊 Error: Invalid ~${stripBrackets(shade, '~~')}~ or (${stripBrackets(color, '()')}) 🠈|`);
//--|🠈 |🠊 Error: Invalid ~dark~ or (red) 🠈| 🠈|--\\
```

### Props and Events

- **`info` is the same everywhere:** `pageName`, `blockName` and `labelName`, even when a component doesn't use them. Uniformity is what makes the files memorable. `labelName` is required wherever it builds the class (see [Component Classes](#component-classes)). `info.labelAria` is optional and is read aloud when a button has no visible text; other components add it when they need it.
- **Props are written out in the `.tsx`.** Every prop's shape lives in the component's own `export interface TheseProps`, written in full under `info`: `style: { shade: …; color: … }`, `cases: { list: Array<string> }`. There are no separate `StyleProps` or `CaseProps` types in the `.ts`, so one file shows everything a component takes. The `.ts` reads the types back with `import type { TheseProps } from './Label.selection';` and uses `TheseProps['style']['shade']`. The three `<Label>`s follow this; the others move over as they're refactored.
- **`cases.type` decides what a component is, `style` decides how it looks.** One component covers several elements with a classic `switch (cases.type)`, and each `case` calls its own function that returns that element's HTML: `caseText()`, `caseInput()`, `caseBlock()`. Props only one case needs are optional and marked with a trailing comment (`min?: number; //--|🠈 {slide} only 🠈|--\\`). Hooks stay at the top of the component, above the `switch`, because React needs them in the same order on every render.
- **Every `<Button>` and `<Label>` lists every event.** The ones it uses (`onClick`, `onMouseEnter`, `onMouseLeave`, `onDoubleClick` on a `<Button>`, `onChange` on a `<Label>`) are live. The rest stay in a `/* … */` block under them, typed with their real event (`KeyboardEvent`, `FocusEvent`, `TouchEvent`…), ready to switch on.
- **An event is typed with every element the cases render.** `<LabelSelection>` renders a `<select>` or an `<input>`, so its handler is `React.ChangeEvent<HTMLInputElement | HTMLSelectElement>`. The limit: the handler gets the union, so a caller that needs something only one element has (`.selectedIndex`) checks `event.target` first. One handler per element would avoid that, but it would also undo the merge.
- **A `<Label>` inherits from its parent through `data-` attributes, never its class.** `previewParent()` reads the nearest `<fieldset>` or `<form>` after the first render and returns its "genes": `data-group` (the name every `{option}` radio in it shares) and `data-input` (`'{password}'`, `'{email}'` … for an `{input}`, `'{text}'` when missing). A class changes as styles change; a `data-` attribute doesn't, so `.split('_')` never touches it. **The one exception:** the first `{option}` in a `<fieldset>` or `<form>` without a `data-group` writes one, the only place a component writes to an element it doesn't own. It's limited to those two tags. It lives in `Label_switching.ts` and `Label_textarea.ts`, the two that use it, written out in both. It moves to `scripts.ts` once something outside the `<Label>`s needs it.

Smaller components keep everything in one `.scss` file and split it with placeholders instead: `%desk-flex`, `%desk-grid`, `%desk-tint` and their `mobi-` and `tabl-` versions (see [Scaling Pattern](#6-scaling-pattern)).

### Component Rules

- **`<table>` is only for database records.** Never for layout. See [TABLE.md](TABLE.md#1-when-to-use-table).
- **Components never talk to the database.** Data comes in through props, events go out through callbacks. See [TABLE.md](TABLE.md#5-how-data-reaches-a-table).
- **Components survive the flip.** Turning the screen unmounts one orientation's markup and mounts the other's, so a listener or timer a component starts is returned from its `useEffect`, and anything added to one orientation gets its mirror in the other. See [CONTAINERS.md, Pairs and the Flip](CONTAINERS.md#pairs-and-the-flip).

### Declaration Order

Every `.ts` and `.tsx` file in `components/` and `containers/` declares its functions by how deep they sit in the call chain, so the keyword tells you where you are:

| Keyword    | Depth  | Role                                                                     |
| ---------- | ------ | ------------------------------------------------------------------------ |
| `function` | First  | The main function, the one the file is named after and exports           |
| `const`    | Second | Called by the `function`                                                 |
| `let`      | Third  | Called by a `const`                                                      |
| `var`      | Fourth | Called by a `let`. The deepest level; nothing goes below it              |

- **The main function is a `function`, never an arrow.** Props are pulled apart in the brackets and typed after them: `function SwitchingLabel({ info }: InfoProps) {` … `}`. Not `const SwitchingLabel: React.FC<InfoProps> = ({ info }) => {` … `};`, because a `const` at the top means second depth (see the table above).
- **One main function, exported twice.** A file with one main function declares it as `export function` in `components/` and as a plain `function` in `containers/`, and the last line of the file repeats it on its own: `export default ButtonDefault;`. The separate line is deliberate: the end of every file says what the file is. Helpers stay at file level, unexported, and are never nested inside another function.
- **Several main functions, no default.** A file of equal utilities (like `scripts.ts`) uses named exports only, so a default export always means "the one this file is about".
- **Values inside a function.** A flag worked out once per render is a `let` with its type written after the value with `as`, and its reason as a trailing comment: `let casesShow = 3 as number; //--|🠈 … 🠈|--\\`. A `let` declared without a value has nothing to put `as` after, so it keeps its type after the name: `let stateName: 'expanded' | 'collapsed';`. Some files in `components/` still write `let styleImage: boolean = …`; they move to `as` when they're refactored. Lookup maps (`parentFont`) and results (`const classColor = createColor(…)`) are `const`; they're values, not second-level functions.
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
import { checkScreen, loadAsset } from '../../../../../../../scripts';

//--|🠋 Styles 🠋|--\\

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
  const iconOne = loadAsset('-svg-', '/project-pages/components-page/default-buttons/h1') as string;
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

- **The header.** The first line names the file (`//--|🠊 DefaultButton.tsx 🠈|--\\`). Imports follow under four flags, always in this order: `Dependencies`, `Components`, `Functions`, `Styles`. A group with nothing in it keeps its flag. An import goes under the flag for what it brings in, not where it happens to sit: `react` under `Dependencies`, anything from `components/` under `Components`, a `.ts` file (`scripts.ts`, `DefaultFunctions.ts`) under `Functions`, a `.scss` file under `Styles`.
- **The `Elements` flag.** A file that imports scoped elements from inside a container gets a fifth flag, `//--|🠋 Elements 🠋|--\\`, between `Components` and `Functions`. Elements are the `.tsx` files scoped to one container block: the coupled `<header>` + `<leftbar>` and `<footer>` + `<rightbar>` pairs (the two swap jobs on the flip), and `<main>` and `<overlay>`, which aren't coupled to anything and work the same in both orientations. See [CONTAINERS.md, Pairs and the Flip](CONTAINERS.md#pairs-and-the-flip). `ArchiveMain.tsx` imports `ButtonElements` there, and `ButtonElements.tsx` imports `DefaultButton` there. A file that imports no elements leaves the flag out.
- **`interface InfoProps` sits right above the main function**, with `pageName`, `blockName` and `labelName` as strings.
- **The `function` (first depth).** Inside it, in this order: the `getOrientation` state, the `info` values given their exact types (`blockName`, `labelName`, `pageName`), the `useEffect` that returns `checkScreen(setOrientation)`, then the `let` values for this render. It returns from `switch (getOrientation)`, with a full `'landscape'` and a full `'portrait'` case, each an `<aside>` holding a `-foreground` `<section>`, a `-midground` `<figure>` and a `-background` `<div>`.
- **The `const` (second depth)** is written `const Name: React.FC<InfoProps> = ({ info }) => {` … `};`. The `function` uses it, here by passing it as `cases.call` to `<DivisionFullscreen>`. It lists the `let` views and gives each its own `labelName`.
- **The `let` (third depth)** is written `let Name = ({ info }: InfoProps) => {` … `};`, with no `React.FC`. It returns from `switch (true)`, one `case` per shade (`info.labelName.includes('dark')`, `…('light')`).
- **The `var` (fourth depth)** is written the same way, as `var Name = ({ info }: InfoProps) => {};`. It goes last, just above the export.
- **One blank line between depths**, none between helpers at the same depth, none between `interface InfoProps` and the `function`, and none before `export default DefaultButton;`, which is the last line. A flag can stand in for the blank line between depths (`//--|===|--\\` in `RoutingButton.tsx`, `//--|🠊 Desktop Previews 🠈|--\\` in `ArchiveHeader.tsx`); keep these.
- **No return type on the `function`.** Write `function ArchiveHeader({ info }: InfoProps) {`, not `…): JSX.Element {`.
- **Plain functions go in a sibling `.ts` file** (`DefaultFunctions.ts`): its main function is the default export (`copyCode`), and the helpers the `.tsx` also needs are named `export const` (`toggleColors`).

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

  let startingPreview = 3 as number;
  return (
    <section className={`${labelName}-${blockName}`}>
      <DivisionFullscreen
        cases={{
          axis: '[x]',
          show: startingPreview,
          call: LabelComponents as React.ComponentType<InfoProps>,
        }}
        info={{ … }}
      />
    </section>
  );
}
```

- **`startingPreview` is the page `<DivisionFullscreen>` opens on.** It counts from 1, in the order the `const` lists its previews. It sits right above `return`, so it's the first thing you read. To land on the preview you're working on, change it by hand.
- **`getOrientation` and the `useEffect` are unused for now.** They keep every scope ready for a `switch (getOrientation)` and let you test by hand without adding them first.
- **The names go through `stripBrackets()`** and build the `<section>` class (`label-main`), not the raw `info` values.
- **The `const` (`LabelComponents`) lists the previews**, one per `${variant}-${element}/` folder, and gives each its own `labelName`. Only the `function` follows the shared pattern. Each `const` stays as its folder wrote it: `NavigationElements.tsx` renders its preview inline, and Division, Figure, Table and Time pass one shared `defaultInfo`.

---

## 5. Bracket Syntax

Props are written with brackets that show their type at a glance. `stripBrackets()` in `source/scripts.ts` removes them, and `createClass()` turns style props (and `cases.type`) into short class names.

| Wrapper | Prop            | Example                       | Becomes             |
| ------- | --------------- | ----------------------------- | ------------------- |
| `[ ]`   | `pageName`      | `'[components]'`              | `components`        |
| `< >`   | `blockName`     | `'<main>'`                    | `main`              |
| `< >`   | `style.size`    | `'<h1>'` … `'<p>'`            | `one` … `par`, missing or `null` is `nul` |
| `- -`   | `style.view`    | `'-top-'` · `'-left-'`        | `top` · `lef`       |
| `~ ~`   | `style.shade`   | `'~dark~'` · `'~light~'`      | `dar` · `lig`       |
| `( )`   | `style.color`   | `'(blue)'` · `'(mono)'`       | `blu` · `mon`       |
| `( )`   | `style.role`    | `'(manager)'`                 | `manager`           |
| `⟨ ⟩`   | `style.clarity` | `'⟨opaque⟩'` · `'⟨lucid⟩'`    | `opa` · `luc`       |
| `{ }`   | `cases.type`    | `'{toggle}'` · `'{select}'`   | `tog` · `sel`, the first three letters |

`style.clarity` is required everywhere. `⟨lucid⟩` makes the whole element 0.75 opaque, slightly see-through; `⟨opaque⟩` keeps it solid. On a `<Button>` it's only a class for now. `<LabelTextarea>`s are written `⟨opaque⟩`, `<LabelSelection>`s, `<LabelSwitching>`s and `<Button>`s `⟨lucid⟩`.

For example, `<h3>` + `-left-` + `~dark~` + `(blue)` + `⟨lucid⟩` with an image produces `class="default-button thr_lef_dar_blu_luc_def"`. A `<Label>` writes its class in the same order with `cases.type` added after the size, `size_type_view_shade_color_clarity_def`: `nul_tog_mc_dar_mon_luc_def`. Its view is a `<ButtonRouting>` position (below), the only style prop that may be left out (missing is `'mid-cen'`, `mc`). It places the `<label>` inside its parent with auto margins, so the parent has to be a flex or grid box for top and bottom to work. On `<LabelSelection>` it also picks the caret's side: the left column puts it on the left, every other position on the right. A `<Label>`'s `_def` is a placeholder for now. On a `<Button>`, the last part of the class is a toggle between a variant's two looks:

| Variant           | `.svg`                 | `.png` / `.jpg`            | No image        |
| ----------------- | ---------------------- | -------------------------- | --------------- |
| `<ButtonDefault>` | `_def`, silhouette     | `_def`, the picture        | `_alt`, no icon |
| `<ButtonRouting>` | `_rou`, silhouette     | `_alt`, picture fills the square | `_alt`, empty |
| `<ButtonProfile>` | `_alt`, silhouette     | `_pro`, the picture        | `_pro`, empty   |

A silhouette is the `.svg` used as a mask, painted in the button's colours. A picture is shown as it is.

There are two shades, `~dark~` and `~light~`; there's no `~medium~`. A `<Button>` has no `cases.type`: the browser's default `type` is fine.

`<ButtonRouting>` and every `<Label>` place themselves with a position instead of a `- -` view: `'top-lef'`, `'mid-cen'`, `'bot-rig'` and so on, row then column, three letters each, which become `tl`, `mc`, `br`. Every position name in the project uses that form.

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
- A coloured square tags the application a file belongs to, usually as the first line inside a container's `useEffect`: `//--|🟨|--\\` Archive (`components`), 🟩 Track a Day (`overtime`), 🟦 Log a Ticket (`ticketing`), 🟥 Find a Link (`hyperlink`), 🟪 Landing (`landing`). It makes a code review show at a glance which app you're in.

---

## 9. Testing

**Visually:** the **Archive** page (`#components-body`) is the testing surface. Every component gets a test harness in `containers/Archive/Main/elements/${element}-components/${variant}-${element}/` that renders the real component with toggles for its props. The folder's `${Element}Elements.tsx` decides which preview opens first, through `let startingPreview` (see [Element Scopes](#element-scopes)). To open a different page, change the `viewBody('archive')` call at the top of `source/index.tsx`. A `<Label>` page shows one `cases.type` at a time: change the `const showType` at the top of its harness by hand until a dropdown replaces it. Each cell is a bare `<fieldset>`, so `data-` attributes and `{option}` groups can be tested.

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
| `⟨opaque⟩` · `⟨lucid⟩` on `<Button>`    | `style.clarity` is only a class for now (`…_luc_def`); its toggles and look come later               |
| `<ButtonRouting>` effects               | Special animations when it's inside `<NavigationDefault>`                                             |
| `_division-${variant}` classes          | `<DivisionColourize>`, `<DivisionTesting>` and `<DivisionPlaceholder>` move to `_${variant}-default` ([Component Classes](#component-classes)), one at a time, with their harness SCSS |
| Bracketed `labelName`s                  | About 60 callers pass `'(default)'`; they move to the bare `'default'` as their files are refactored  |
| Log a Ticket                            | Rebuilt from my original jQuery ticketing system and its claim-to-score loop                          |
| Login status                            | Accounts move between `pending`, `enabled` and `blocked` collections; status should become a field ([TABLE.md](TABLE.md#6-mongodb-today-mysql-tomorrow)) |
| Server secrets path                     | `landing.js` looks for `.env` in the wrong folder ([MODULES.md](MODULES.md#5-run-the-server))           |
| Unpaid solutions, country-specific expiry | [GUIDELINES.md, Section 15](GUIDELINES.md#15-explicitly-outside-this-baseline)                       |
