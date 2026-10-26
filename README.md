## **TLF** [{Apps\]](https://tertiusroach.github.io/development-portfolio_4.00/public/index.html)

Track a Day, Log a Ticket, Find a Link: three applications inspired by the gaps I kept running into across corporate environments, from film production and education institutes to government departments and the events industry. Together they fill one specific need: an office suite that is easy to use and genuinely helpful. It solves workplace chaos while daring to improve the politics that come with the territory. It is the kind of tool you open, do the thing, and get back to your life. Track overtime without turning it into a second job, file tickets without feeling like you are writing a novel for an audience that does not exist, and keep every important company link in one place so nobody has to spelunk through spreadsheets, bookmarks, and half-remembered URLs ever again.

This project started the honest way, with a mistake I never wanted to repeat. While moderating multiple studios at Akademia, I accidentally deleted someone's ticket on a clunky system I did not build. That moment burned in the lesson: good software should protect users from the worst day they are having, not amplify it. TraLogFin is me building the system I wish I had then: cleaner flows, safer patterns, and a user experience that does not ask for permission to waste your time.

Where it is going is simple and ambitious at the same time. TraLogFin is becoming a small, sharp suite that scales without losing its manners. A front end that stays structured and readable as it grows, a workflow that stays fast even when the data gets real, and a codebase that welcomes contributors because the intent is obvious the moment you open the project. If you like tools that value clarity, speed, and practical design over ceremony, you are exactly the kind of person I want reading this, using it, and helping push it forward.

**[View Portfolio](https://tertiusroach.github.io/development-portfolio_4.00/public/index.html)** | **[Source Code](https://github.com/TertiusRoach/development-portfolio_4.00)**

---

# Documentation

<details>
  <summary><strong>Table of Contents</strong></summary>

- [Terminal Commands](#terminal-commands)
- [Installation Guide](#installation-guide)
  - [Quick Start](#quick-start)
  - [Full Installation](#full-installation)
  - [Installation Breakdown](#installation-breakdown)
- [Front-end Development](#front-end-development)
  - [TraLogFin Application](#tralogfin-application)
  - [State Management](#state-management-orchestrating-visibility)
  - [Application Roles](#application-roles)
- [Component Anatomy](#component-anatomy)
  - [File Pattern](#file-pattern)
  - [Bracket Syntax](#bracket-syntax)
  - [Testing Environment](#testing-environment)
- [Back-end Development](#back-end-development)
- [CSS & HTML Vocabulary](#css--html-vocabulary)
  - [Determining Element Responsibilities](#determining-element-responsibilities)
  - [Layout Container Breakdown](#layout-container-breakdown)
- [Development Environment](#development-environment)
  - [VSCode Tips](#vscode-tips)
  - [Folder Structure](#folder-structure)
  - [Repository Synchronization](#repository-synchronization)
- [Documentation Standards](#documentation-standards)
  - [Comment Flags](#comment-flags)
  - [Git Workflow](#git-workflow)

</details>

---

## Terminal Commands

Open [Visual Studio Code](https://code.visualstudio.com/) and press **Ctrl + `** to open the integrated terminal panel. This step requires [Node.js](https://nodejs.org/en), so make sure you have completed the [Quick Start](#quick-start) section and that **npm** is available in your system's PATH before proceeding. Once the terminal is open, enter the following commands into the **Terminal** tab to work with the development environment built on [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [SASS](https://sass-lang.com/) and [HTML](https://www.w3schools.com/html/).

### Development Workflow

```bash
# Launch front end (webpack-dev-server on http://localhost:8080)
npm run app

# Launch back end (from source/modules/server/MongoDB/REVIEW, serves http://localhost:3000)
nodemon landing

# Compile project into public/
npm run deploy

# Close the development server (frees port 8080)
npm run stop

# Switch GitHub branches
git checkout 4.6
```

> **Tip:** `npm run app` is an alias for `npm run launch`. VS Code also runs it automatically when you open the folder, through the task in `.vscode/tasks.json`.

## Installation Guide

### Quick Start

> **Prerequisites:** Install [Visual Studio Code](https://code.visualstudio.com/), [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en) (on Linux, through [NVM](https://github.com/nvm-sh/nvm)).

Click the green `<> Code` button at the top right of the repository, copy the URL, and clone it from the terminal:

```bash
git clone https://github.com/TertiusRoach/development-portfolio_4.00.git
cd development-portfolio_4.00
npm install
npm run app
```

`npm install` reads `package.json` and installs every package listed below in one go.

### Full Installation

<details>
<summary><strong>Complete Package List</strong></summary>

These are the packages declared in `package.json`. You only need to install them manually when rebuilding the project from scratch.

```bash
npm install -g nodemon
npm install -g typescript
npm install bull
npm install ioredis
npm install mailtrap
npm install validator
npm install node-cron
npm install react-router-dom
npm install --save-dev cors
npm install --save-dev sass
npm install --save-dev axios
npm install --save-dev bcrypt
npm install --save-dev dotenv
npm install --save-dev jquery
npm install --save-dev express
npm install --save-dev mongodb
npm install --save-dev nodemon
npm install --save-dev webpack
npm install --save-dev mongoose
npm install --save-dev bootstrap
npm install --save-dev cross-env
npm install --save-dev kill-port
npm install --save-dev react-dom
npm install --save-dev ts-loader
npm install --save-dev css-loader
npm install --save-dev nodemailer
npm install --save-dev webpack-cli
npm install --save-dev file-loader
npm install --save-dev sass-loader
npm install --save-dev @types/react
npm install --save-dev babel-loader
npm install --save-dev style-loader
npm install --save-dev @types/jquery
npm install --save-dev dotenv-webpack
npm install --save-dev @types/react-dom
npm install --save-dev react-responsive
npm install --save-dev webpack-dev-server
npm install --save-dev babel-preset-es2015
npm install --save-dev copy-webpack-plugin
npm install --save-dev html-webpack-plugin
npm install --save-dev @babel/preset-react
npm install --save-dev terser-webpack-plugin
npm install --save-dev mini-css-extract-plugin
npm install --save-dev @babel/preset-typescript
npm install --save-dev css-minimizer-webpack-plugin
npm install --save-dev @babel/core @babel/preset-env
```

> **Note:** `react` is not listed in `package.json`. npm installs it automatically as a peer dependency of `react-dom`.

</details>

### Installation Breakdown

#### Application Flow

```
source/index.html                         # <div id="${pageName}-body"> mount points
  ↓
source/index.tsx                          # Renders each page and activates one with viewBody()
  ↓
source/layouts/containers/${PageName}/${PageName}.tsx
  ↓
${PageName}/${BlockName}/${PageName}${BlockName}.tsx → *.scss · *Functions.ts
  ↓
source/layouts/components/${Element}/${variant}/${Element}.${variant}.tsx → pipeline/*.scss
```

**[View the Entry Point](https://github.com/TertiusRoach/development-portfolio_4.00/blob/main/source/index.tsx)**

#### Step 1: Verify Node.js

```bash
node --version
npm --version
```

#### Step 2: Clone the Repository

```bash
git clone https://github.com/TertiusRoach/development-portfolio_4.00.git
```

#### Step 3: Install Dependencies

```bash
npm install
npm install -g nodemon
```

#### Step 4: Add the Environment File

Webpack and the back end both read secrets from `build/.env`. The `build/` folder is ignored by Git, so create it locally:

```bash
mkdir build
touch build/.env
```

#### Step 5: Launch

```bash
npm run app
```

---

# Front-end Development

This is the contract between data and display. The database and role selection determine what the front end renders, how it renders it, and which visual states are active. The full container contract lives in **[CONTAINERS.md](source/utilities/document/CONTAINERS.md)**, and the application rules live in **[GUIDELINES.md](source/utilities/document/GUIDELINES.md)**.

## [TraLogFin Application](source/assets/md-files/application-characters.md)

This is where the testing surface lives. If something breaks, it usually breaks here first, which is the point. It also carries a lot of the storytelling: a cast of characters whose personalities drive the demo data. I originally planned to log three years of data for the demo, but realized that is unnecessary. Four weeks, one month, is enough to play around with the maths.

## State Management: Orchestrating Visibility

These classes are intentionally simple. They act like a UI contract.

| State Type          | Classes                                       | Alt                       | Purpose                                                                 |
| ------------------- | --------------------------------------------- | ------------------------- | ----------------------------------------------------------------------- |
| **Operating State** | `.active` · `.asleep`                         | `.running` · `.disabled`  | Indicate whether a page (`#${pageName}-body`) is in use or inactive     |
| **Preview State**   | `.visible` · `.hidden`                        | `.reveal` · `.conceal`    | Show or hide elements, mainly inside `layouts/components`               |
| **Indexed State**   | `.expanded` · `.collapsed`                    | `.unfolded` · `.squaring` | Manage blocks that open and close while staying part of the page        |
| **Emphasize State** | `.highlight` · `.downplay`                    |                           | Draw attention to, or away from, a `<ButtonDefault>` during testing     |
| **Locked State**    | `.locked-${blockName}` · `.frozen-${blockName}` |                         | Block repeat clicks while a container animates, or freeze it entirely   |
| **Daytime State**   | `.ante-meridiem` · `.post-meridiem`           |                           | Set on `<body>` by the clock: 05:00 to 16:59 is AM, the rest is PM      |

> **Note:** `.running` and `.conceal` are reserved names. They are not used in the code yet.

## Application Roles

Each application asks one question. The answer becomes a `roleName` class on `<div id="${pageName}-body">` and drives what the user sees.

| Application      | Container    | Dataset          | Role Question           | Options                         |
| ---------------- | ------------ | ---------------- | ----------------------- | ------------------------------- |
| **Track a Day**  | `Overtime/`  | `TrackTime`      | What's your vocation?   | `.established` · `.freelancing` |
| **Log a Ticket** | `Ticketing/` | `DefineDuties`   | What's your position?   | `.manager` · `.employee`        |
| **Find a Link**  | `Hyperlink/` | `ArchiveAnchors` | What's your occupation? | `.specialist` · `.technician`   |
| **Pick a Page**  | `Landing/`   | `PickPage`       | Who are you?            | One of the characters           |

### Track a Day

Frustrated with spreadsheets and done with guesswork? Track time cleanly and let the totals speak.

| Configuration             | Options                         |
| ------------------------- | ------------------------------- |
| **What's your vocation?** | `.freelancing` · `.established` |

### Log a Ticket

Ticketing should feel like momentum, not admin. The goal is quick capture, clear ownership, and visible progress.

| Configuration             | Options                  |
| ------------------------- | ------------------------ |
| **What's your position?** | `.manager` · `.employee` |

### Find a Link

A fast index for the links a team actually uses. Think spreadsheets, schedules, docs and dashboards.

| Configuration               | Options                       |
| --------------------------- | ----------------------------- |
| **What's your occupation?** | `.specialist` · `.technician` |

### Pick a Page

The character roster that feeds the other three applications. Every character carries a `vocation`, `position` and `occupation`, plus their company details (`organization`, `bureau`, `paid`, `headOfDepartment`, `country` and `status`).

| Configuration             | Options                                   |
| ------------------------- | ----------------------------------------- |
| **Layout Resolutions**    | `.landscape` · `.portrait` · `.square`    |
| **Consider Technologies** | `.microsoft` (Excel) · `.google` (Sheets) |

> **Note:** `.microsoft` and `.google` are planned and not yet in the code.

---

# Component Anatomy

Components are the semantic building blocks inside `source/layouts/components/`. Every component follows the same pattern, so once you can read one, you can read them all.

## File Pattern

Using `<ButtonDefault>` as the reference:

```
components/Button/default/
├── Button.default.tsx          # Markup and props
├── Button.default.scss         # Imports the pipeline and applies it per orientation
├── Button_default.ts           # createClass() turns props into class abbreviations
└── pipeline/
    ├── Button_size.scss        # Font and element sizing
    ├── Button_grid.scss        # Grid placement (top, bottom, left, right, center)
    ├── Button_flex.scss        # Flex alignment
    ├── Button_tint.scss        # Colors and shades, from styles/Palettes.scss
    ├── Button_move.scss        # Hover, press and transition states
    └── Button_corn.scss        # Corner radii
```

Each pipeline file exports a `desktop-*` and a `mobile-*` mixin. The component's `.scss` file includes them under `(orientation: landscape)` and `(orientation: portrait)` respectively.

## Bracket Syntax

Props are written with brackets that show their type at a glance. `stripBrackets()` in `source/scripts.ts` removes them, and `createClass()` converts style props into short class names.

| Wrapper    | Prop           | Example                  | Becomes      |
| ---------- | -------------- | ------------------------ | ------------ |
| `[ ]`      | `pageName`     | `'[components]'`         | `components` |
| `< >`      | `blockName`    | `'<main>'`               | `main`       |
| `< >`      | `style.size`   | `'<h1>'` … `'<p>'`       | `one` … `par` |
| `- -`      | `style.view`   | `'-top-'` · `'-left-'`   | `top` · `lef` |
| `~ ~`      | `style.shade`  | `'~dark~'` · `'~light~'` | `dar` · `lig` |
| `( )`      | `style.color`  | `'(blue)'` · `'(mono)'`  | `blu` · `mon` |
| `( )`      | `style.role`   | `'(manager)'`            | `manager`    |
| `{ }`      | `style.type`   | `'{button}'` · `'{submit}'` | `button` · `submit` |

For example, `<h3>` + `-left-` + `~dark~` + `(blue)` with an image produces `class="default-button thr_lef_dar_blu_def"`. Without an image, the suffix is `_alt`.

## Testing Environment

The **Archive** page (`#components-body`) is the testing surface for components. Every component gets a test harness under `containers/Archive/Main/elements/${element}-components/${variant}-${element}/`, which renders the real component with toggles for its props. For example, `ProfileButton.tsx` tests `<ButtonProfile>`.

To view a different page during development, change the `viewBody('archive')` call at the top of `source/index.tsx`.

---

# Back-end Development

This project uses a [MongoDB](https://en.wikipedia.org/wiki/MongoDB)-backed server module to support an office application suite that tracks overtime, logs tickets, and stores links. Local database setup, including MongoDB Community Server and Mailtrap, is documented in **[MODULES.md](source/utilities/document/MODULES.md)**. For a video walkthrough, see the [MongoDB tutorial playlist](https://www.youtube.com/playlist?list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA).

| Folder                         | Purpose                                                                         |
| ------------------------------ | ------------------------------------------------------------------------------- |
| `server/MongoDB/REVIEW/`       | Express server (`landing.js`, port 3000) and per-application routes under review |
| `server/MongoDB/online/`       | Dataset modules for the hosted database                                         |
| `server/MongoDB/offline/`      | Dataset modules for a local database                                            |
| `server/MongoDB/testing/`      | Typed dataset modules seeded from `TraLogFin.json` for front-end testing        |
| `modules/routes/`              | Front-end route stubs for each application (empty for now)                     |
| `modules/context/`             | React context for email and password state                                      |

> **Note:** For demonstration purposes, `roleName` represents the user's selected company position and drives behavior and visibility.

---

## CSS & HTML Vocabulary

### Determining Element Responsibilities

Every page is identified by its `pageName`, every container by its `blockName`, and every component by its `labelName`. Together they build predictable IDs and classes, such as `#overtime-leftbar`.

#### Company Comparisons

> Company comparisons, because it's an interesting thought experiment: the `&` icon looks like a dog scratching its anus.

| Category                | Options                                |
| ----------------------- | -------------------------------------- |
| **Mobile Platforms**    | `.apple` · `.android`                  |
| **Productivity Suites** | `.microsoft` · `.google`               |
| **Fitness Chains**      | `.planet-fitness` · `.anytime-fitness` |

### Layout Container Breakdown

This project uses a predictable layout container system to prevent CSS collisions and keep page structure readable at a glance.

Each page lives in `source/layouts/containers/${PageName}/` and is mounted into `<div id="${pageName}-body" class="default-body active|asleep">`. Inside it, six blocks are loaded in a fixed order: the Overlay first, then Main, then the blocks that reference Main.

#### Container Architecture

| Container    | HTML Tag    | ID Pattern             | Purpose                            |
| ------------ | ----------- | ---------------------- | ---------------------------------- |
| **Overlay**  | `<section>` | `${pageName}-overlay`  | Top layer UI, modals, focus states |
| **Leftbar**  | `<aside>`   | `${pageName}-leftbar`  | Left sidebar navigation zone       |
| **Rightbar** | `<aside>`   | `${pageName}-rightbar` | Right sidebar utility zone         |
| **Header**   | `<header>`  | `${pageName}-header`   | Top layout zone for identity       |
| **Main**     | `<main>`    | `${pageName}-main`     | Primary content area               |
| **Footer**   | `<footer>`  | `${pageName}-footer`   | Bottom layout zone                 |

#### Pages

| Page          | Container    | Mount Point          | Application        |
| ------------- | ------------ | -------------------- | ------------------ |
| **Landing**   | `Landing/`   | `#landing-body`      | Pick a Page        |
| **Overtime**  | `Overtime/`  | `#overtime-body`     | Track a Day        |
| **Ticketing** | `Ticketing/` | `#ticketing-body`    | Log a Ticket       |
| **Hyperlink** | `Hyperlink/` | `#hyperlink-body`    | Find a Link        |
| **Archive**   | `Archive/`   | `#components-body`   | Component testing  |

> **Important:** The `${blockName}` keywords are not decoration. They are how the codebase stays stable when styles grow and features multiply.

---

## Development Environment

### VSCode Tips

| Action                    | Shortcut           | Description                                      |
| ------------------------- | ------------------ | ------------------------------------------------ |
| **Open Terminal**         | ``Ctrl + ` ``      | Toggle the integrated terminal                   |
| **Collapse Sections**     | `Ctrl + K + 0`     | Collapse all code sections (caret in root scope) |
| **Open Settings**         | `Ctrl + ,`         | Access VSCode settings                           |
| **See Props & Callbacks** | `Ctrl + Space`     | IntelliSense autocomplete                        |
| **Open Run & Debug**      | `Ctrl + Shift + D` | Launch **Run Application** (Webpack + Chrome)    |
| **Stop Terminal Server**  | `Ctrl + C`         | Stop the running server process                  |

> **Tip:** To hide deprecated folders from the Explorer, follow **[COMPONENTS.md](source/utilities/document/COMPONENTS.md)**.

### Folder Structure

> This layout is modular on purpose. It is optimized for forward momentum and predictable scaling, not for matching a single framework template. The naming is descriptive, the separation is strict, and the intent is obvious when you scan the tree.

#### Reference Tree

```
root/
├── .vscode/
│   ├── launch.json                  # Run Application (Webpack + Chrome)
│   ├── settings.json
│   └── tasks.json                   # Runs `npm run app` on folder open
├── build/                           # Local only, holds .env (ignored by Git)
├── public/                          # Final product for users (compiled)
│   ├── index.css
│   ├── index.js
│   └── index.html
├── source/
│   ├── assets/
│   │   ├── gif-files/
│   │   ├── ico-files/
│   │   ├── jpg-files/
│   │   ├── md-files/
│   │   ├── mp3-files/
│   │   ├── mp4-files/
│   │   ├── ods-files/
│   │   ├── odt-files/
│   │   ├── pdf-files/
│   │   ├── png-files/
│   │   ├── psd-files/
│   │   ├── svg-files/
│   │   ├── ttf-files/
│   │   ├── txt-files/
│   │   ├── xcf-files/
│   │   └── zip-files/
│   ├── layouts/
│   │   ├── components/
│   │   │   ├── Article/
│   │   │   ├── Aside/
│   │   │   ├── Button/
│   │   │   ├── Division/
│   │   │   ├── Fieldset/
│   │   │   ├── Figure/
│   │   │   ├── Form/
│   │   │   ├── Label/
│   │   │   ├── List/
│   │   │   ├── Menu/
│   │   │   ├── Navigation/
│   │   │   ├── Section/
│   │   │   ├── Span/
│   │   │   ├── Table/
│   │   │   ├── Time/
│   │   │   └── components.ts
│   │   ├── containers/
│   │   │   ├── Archive/
│   │   │   ├── Hyperlink/
│   │   │   ├── Landing/
│   │   │   ├── Overtime/
│   │   │   ├── Ticketing/
│   │   │   └── containers.ts
│   │   ├── scripts/
│   │   ├── styles/
│   │   └── tools/
│   ├── modules/
│   │   ├── context/
│   │   ├── routes/
│   │   └── server/
│   ├── utilities/
│   │   ├── document/
│   │   ├── vendors/
│   │   ├── ~flex-setup/
│   │   └── ~grid-setup/
│   ├── index.html
│   ├── index.scss
│   ├── index.tsx
│   ├── scripts.ts
│   └── types.d.ts
├── .gitignore
├── README.md
├── package.json
├── tsconfig.json
└── webpack.config.js
```

#### Directory Descriptions

##### `public/`

Compiled output and static entry points. This is the browser-facing product, generated by `npm run deploy`. If it is in `public/`, it is assumed safe to ship. Do not edit it by hand; Webpack wipes it on every build.

##### `source/`

All authored code and assets. This is the only place you should be editing during development.

| File          | Purpose                                                              |
| ------------- | -------------------------------------------------------------------- |
| `index.html`  | HTML shell with one `<div id="${pageName}-body">` per page           |
| `index.tsx`   | Entry point: renders every page and activates one with `viewBody()`  |
| `index.scss`  | Root stylesheet                                                      |
| `scripts.ts`  | Shared helpers such as `stripBrackets()`, `checkScreen()` and `loadAsset()` |
| `types.d.ts`  | Global type declarations                                             |

##### `source/assets/`

Typed asset storage. Keeping formats separated avoids build edge cases and reduces accidental misuse.

| Directory    | Purpose                                                 |
| ------------ | ------------------------------------------------------- |
| `gif-files/` | Animated media used for UI accents or demos             |
| `ico-files/` | Icon formats for browser and OS surfaces                |
| `jpg-files/` | Photos and compressed imagery                           |
| `md-files/`  | Markdown content used as authored text or internal docs |
| `mp3-files/` | Audio assets                                            |
| `mp4-files/` | Video assets                                            |
| `ods-files/` | Spreadsheets that plan each application's dataset       |
| `odt-files/` | Written planning documents and character descriptions   |
| `pdf-files/` | Portable documents used for reference or downloads      |
| `png-files/` | Lossless graphics and UI images                         |
| `psd-files/` | Photoshop source files kept for design iteration        |
| `svg-files/` | Vector assets, icons, logos, themeable graphics         |
| `ttf-files/` | Fonts                                                   |
| `txt-files/` | Plain text notes and content                            |
| `xcf-files/` | GIMP source files                                       |
| `zip-files/` | Archived bundles and imports                            |

##### `source/layouts/`

The UI system. This is where the application becomes readable. The split between components and containers is intentional: small semantic primitives first, then page scaffolding that composes them.

###### **Components** — Atomic Semantic Building Blocks

| Component     | Variants                                            |
| ------------- | --------------------------------------------------- |
| `Article/`    | `loading` · `updates`                               |
| `Aside/`      | `characters`                                        |
| `Button/`     | `default` · `profile` · `routing`                   |
| `Division/`   | `carousel` · `conveyor` · `sweeping` · `testing`    |
| `Fieldset/`   | `code`                                              |
| `Figure/`     | `default` · `loading` · `rotation`                  |
| `Form/`       | `login` · `password` · `register` · `reset` · `verify` |
| `Label/`      | `toggle`                                            |
| `List/`       | `countdown` · `scrolling`                           |
| `Menu/`       | `scroll` · `select` · `swipe` · `toggle`            |
| `Navigation/` | `default`                                           |
| `Section/`    | `characters` · `demonstration`                      |
| `Span/`       | `scrolling`                                         |
| `Table/`      | `clocking` · `tracking`                             |
| `Time/`       | `clock` · `date`                                    |

`components.ts` holds the shared abbreviation helpers (`abbrAxis`, `abbrType`, `abbrView`, `abbrShade`, `abbrColor`).

###### **Containers** — Page Level Layout Zones

Each page folder holds a `${PageName}.tsx` that lazy-loads its six blocks, and each block folder holds a `.tsx`, a `.scss` and a `${PageName}Functions.ts`.

| Container    | Purpose                                                   |
| ------------ | --------------------------------------------------------- |
| `Archive/`   | Component testing page and its test harnesses             |
| `Hyperlink/` | Find a Link                                               |
| `Landing/`   | Pick a Page, the entry experience                         |
| `Overtime/`  | Track a Day                                               |
| `Ticketing/` | Log a Ticket                                              |
| `containers.ts` | `blockViews()` and the expand and collapse handlers for every block |

###### **Other Layout Directories**

| Directory  | Purpose                                                                              |
| ---------- | ------------------------------------------------------------------------------------ |
| `scripts/` | One script per block (`Header.ts`, `Main.ts`, `Overlay.ts`…)                         |
| `styles/`  | Shared styling system: `Palettes`, `Mixins`, `Global`, `Skeleton`, `Transition`, `Barrel` |
| `tools/`   | Layout helpers: `conversions.ts`, `navigation.ts`, `utilities.ts`                    |

##### `source/modules/`

Application logic and infrastructure that supports the UI. See [Back-end Development](#back-end-development).

| Module     | Purpose                                              |
| ---------- | ---------------------------------------------------- |
| `context/` | Shared state, providers, and app-wide context wiring |
| `routes/`  | Routing definitions per application                  |
| `server/`  | Back-end code, MongoDB wiring, server entry points   |

##### `source/utilities/`

Reusable utilities, references and internal documentation.

| Utility        | Purpose                                                   |
| -------------- | --------------------------------------------------------- |
| `document/`    | Internal docs: containers, guidelines, tables, colouring, Git |
| `vendors/`     | Third-party vendor code kept separate from authored logic |
| `~flex-setup/` | Flexbox reference and layout patterns                     |
| `~grid-setup/` | Grid reference and layout patterns                        |

##### `.vscode/`

Editor configuration for consistent debugging and project workflows.

### Repository Synchronization

Open **[repository-synchronization.md](source/assets/md-files/repository-synchronization.md)** for the full workflow: machine setup, the release cycle, tag management, and keeping multiple devices in sync. Follow it top to bottom and you'll end up with one source of truth and a predictable, low-drama branch state.

---

## Documentation Standards

### Comment Flags

Arrows mark comments so the structure of a file reads at a glance. They wrap every comment as `//--| … |--\\` in TypeScript and SCSS, and `<!--| … |-->` in HTML.

| Flag                                            | Unicode | Usage                                   | Example                                |
| ----------------------------------------------- | ------- | --------------------------------------- | -------------------------------------- |
| [🠊](https://www.compart.com/en/unicode/U+1F80A) | U+1F80A | Opens a file title or a note            | `//--\|🠊 Button.default.tsx 🠈\|--\\`   |
| [🠋](https://www.compart.com/en/unicode/U+1F80B) | U+1F80B | Section heading for the code below it   | `//--\|🠋 Functions 🠋\|--\\`            |
| [🠈](https://www.compart.com/en/unicode/U+1F808) | U+1F808 | Points back at the code on its left     | `//--\|🠈 Must Load First 🠈\|--\\`      |
| [🠉](https://www.compart.com/en/unicode/U+1F809) | U+1F809 | Closes a block comment opened with 🠋   | `/*--\|🠋 … 🠉\|--*/`                     |

### Git Workflow

> **Goal:** Tag the release, promote it to `main`, archive the history, and open the next version branch.

Version branches are named after the release (`4.5`, `4.6`), tags are zero-padded (`v4.05`), and retired branches are kept as `${version}-archive`. The commands below summarise the release cycle; the full version, with safety checks, is in **[repository-synchronization.md](source/assets/md-files/repository-synchronization.md)**.

**Step 1:** Make sure the working tree is clean

```bash
git checkout 4.6
git status
```

**Step 2:** Tag the current commit

```bash
git tag -a v4.06 -m "Stable Release 4.06: Description of what changed"
git push origin v4.06
```

**Step 3:** Promote the version branch to `main`

```bash
git checkout main
git pull origin main
git reset --hard 4.6
git push origin main --force
```

> **Warning:** `--force` overwrites the remote `main` permanently. Compare both branches with `git log --oneline -10` before you run it.

**Step 4:** Open the next version branch

```bash
git checkout -b 4.7
git push -u origin 4.7
```

---

<div align="center">

**Built with ❤️ by [Tertius Roach](https://tertiusroach.github.io/development-portfolio_4.00/public/index.html)**

_Good software should protect users from the worst day they are having, not amplify it._

![Status](https://img.shields.io/badge/status-active-success.svg)
![Version](https://img.shields.io/badge/version-4.6-blue.svg)
![License](https://img.shields.io/badge/license-ISC-blue.svg)

</div>

---
