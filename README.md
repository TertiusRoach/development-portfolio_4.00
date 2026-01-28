# **Tertius Roach’s** [Trinity {Apps\]](https://tertiusroach.github.io/development-portfolio_4.00/public/index.html)

TraLogFin is my three headed answer to workplace chaos: Track a Day, Log a Ticket, Find a Link. It is the kind of tool you open, do the thing, and get back to your life. Track overtime without turning it into a second job, file tickets without feeling like you are writing a novel for an audience that does not exist, and keep every important company link in one place so nobody has to spelunk through spreadsheets, bookmarks, and half remembered URLs ever again.

This project started the honest way, with a mistake I never wanted to repeat. While moderating multiple studios at Akademia, I accidentally deleted someone’s ticket on a clunky system I did not build. That moment burned in the lesson: Good software should protect users from the worst day they are having, not amplify it. TraLogFin is me building the system I wish I had then, cleaner flows, safer patterns, and a user experience that does not ask for permission to waste your time.

Where it is going is simple and ambitious at the same time. TraLogFin is becoming a small, sharp suite that scales without losing its manners. A front end that stays structured and readable as it grows, a workflow that stays fast even when the data gets real, and a codebase that welcomes contributors because the intent is obvious the moment you open the project. If you like tools that value clarity, speed, and practical design over ceremony, you are exactly the kind of person I want reading this, using it, and helping push it forward.

**[View Portfolio](https://tertiusroach.github.io/development-portfolio_4.00/public/index.html)** | **[Source Code](https://github.com/TertiusRoach/development-portfolio_4.00)**

---

## Table of Contents

- [Testing Environment](#testing-environment)
- [Front-end Database](#front-end-database)
  - [Track a Day](#track-a-day)
  - [Log a Ticket](#log-a-ticket)
  - [Find a Link](#find-a-link)
  - [Pick a Page](#pick-a-page)
- [Back-end Installation & Development](#back-end-installation--development)
- [CSS & HTML Vocabulary](#css--html-vocabulary)
  - [Orchestrating Visibility](#orchestrating-visibility)
  - [Determining Element Responsibilities](#determining-element-responsibilities)
  - [Layout Container Breakdown](#layout-container-breakdown)
- [Terminal Commands](#terminal-commands)
- [Installation Guide](#installation-guide)
  - [Quick Start](#quick-start)
  - [Full Installation](#full-installation)
  - [Installation Breakdown](#installation-breakdown)
- [Development Environment](#development-environment)
  - [VSCode Tips](#vscode-tips)
  - [Folder Structure](#folder-structure)
- [Documentation Standards](#documentation-standards)
  - [Review Flags](#review-flags)
  - [Git Workflow](#git-workflow)

---

## [Testing Environment](https://github.com/TertiusRoach/development-portfolio_4.00/tree/4.01-archive/source/layouts/pages)

This is where the testing surface lives. If something breaks, it usually breaks here first, which is the point.

---

## [Front-end Database](https://github.com/TertiusRoach/development-portfolio_4.00/blob/main/source/modules/server/README.md)

This is the contract between data and display. The database and role selection determine what the front end renders, how it renders it, and which visual states are active.

### Track a Day

Frustrated with spreadsheets and done with guesswork? Track time cleanly and let totals speak.

| Configuration             | Options                         |
| ------------------------- | ------------------------------- |
| **What's your vocation?** | `.freelancing` · `.established` |

### Log a Ticket

Ticketing should feel like momentum, not admin. The goal is quick capture, clear ownership, and visible progress.

| Configuration             | Options                  |
| ------------------------- | ------------------------ |
| **What's your position?** | `.manager` · `.employee` |

### Find a Link

A fast index for links a team actually uses. Think spreadsheets, schedules, docs, dashboards.

| Configuration               | Options                       |
| --------------------------- | ----------------------------- |
| **What's your occupation?** | `.specialist` · `.technician` |

### Pick a Page

Company comparisons as a thought experiment: the `&` icon looks like a dog scratching its anus.

| Configuration             | Options                                   |
| ------------------------- | ----------------------------------------- |
| **Layouts Resolutions**   | `.landscape` · `.portrait` · `.square`    |
| **Consider Technologies** | `.microsoft` (Excel) · `.google` (Sheets) |

---

## [Back-end](https://github.com/TertiusRoach/development-portfolio_4.00/blob/main/source/modules/server/README.md) [Installation](https://www.youtube.com/playlist?list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA) & [Development](https://github.com/TertiusRoach/development-portfolio_4.00/tree/main/source/modules/server)

This project uses a [MongoDB](https://en.wikipedia.org/wiki/MongoDB) backed server module to support an office application suite that tracks overtime, logs tickets, and stores links.

> **Note:** For demonstration purposes, `roleName` represents the user's selected company position and drives behavior and visibility.

---

## CSS & HTML Vocabulary

### Orchestrating Visibility

These classes are intentionally simple. They act like a UI contract.

#### State Management

| State Type           | Classes                    | Purpose                                                                       |
| -------------------- | -------------------------- | ----------------------------------------------------------------------------- |
| **Active State**     | `.active` · `.asleep`      | Indicate whether a feature is currently in use (active) or parked (asleep)    |
| **Visibility State** | `.visible` · `.hidden`     | Control whether something is rendered for the user or intentionally not shown |
| **Expansion State**  | `.expanded` · `.collapsed` | Manage sections that can open and close while staying part of the page        |
| **Emphasis State**   | `.highlight` · `.downplay` | Guide attention without changing layout or flow                               |

> **Design Principle:** Active should feel responsive. Asleep should stay out of the user's way.

### Determining Element Responsibilities

For demonstration purposes, the `roleName` represents the user's selected company position and influences the application's behavior accordingly.

#### Application Roles

| Application      | Role Question           | Options                         |
| ---------------- | ----------------------- | ------------------------------- |
| **Track a Day**  | What's your vocation?   | `.established` · `.freelancing` |
| **Log a Ticket** | What's your position?   | `.manager` · `.employee`        |
| **Find a Link**  | What's your occupation? | `.specialist` · `.technician`   |

#### Company Comparisons

> Company comparisons because it's an interesting thought experiment: The '&' icon looks like a dog scratching its anus.

| Category                | Options                                |
| ----------------------- | -------------------------------------- |
| **Mobile Platforms**    | `.apple` · `.android`                  |
| **Productivity Suites** | `.microsoft` · `.google`               |
| **Fitness Chains**      | `.planet-fitness` · `.anytime-fitness` |

### Layout Container Breakdown

This project uses a predictable layout container system to prevent CSS collisions and keep page structure readable at a glance.

Primary containers live under `source/layouts/containers/` and use the following block names:

#### Container Architecture

| Container    | HTML Tag    | ID Pattern             | Purpose                            |
| ------------ | ----------- | ---------------------- | ---------------------------------- |
| **Overlay**  | `<section>` | `${pageName}-overlay`  | Top layer UI, modals, focus states |
| **Leftbar**  | `<aside>`   | `${pageName}-leftbar`  | Left sidebar navigation zone       |
| **Rightbar** | `<aside>`   | `${pageName}-rightbar` | Right sidebar utility zone         |
| **Header**   | `<header>`  | `${pageName}-header`   | Top layout zone for identity       |
| **Main**     | `<main>`    | `${pageName}-main`     | Primary content area               |
| **Footer**   | `<footer>`  | `${pageName}-footer`   | Bottom layout zone                 |

> **Important:** The `${blockName}` keywords are not decoration. They are how the codebase stays stable when styles grow and features multiply.

---

## Terminal Commands

### Development Workflow

```bash
# Launch front end
npm run app

# Launch back end (from root/source/modules/server)
nodemon landing

# Compile project into public/
npm run deploy

# Launch testing environment
npm run launch

# Close testing environment
npm run stop

# Switch GitHub branches
git checkout 4.01
```

---

## Installation Guide

### Quick Start

> **Prerequisites:** Install [Visual Studio Code](https://code.visualstudio.com/) and [Node.js](https://nodejs.org/en)

Click on the top right green button with the text of `<> Code` and open with [Visual Studio](https://visualstudio.microsoft.com/).

### Full Installation

<details>
<summary><strong>Complete Package List</strong></summary>

```bash
npm install sass
npm install mongoose
npm install -g react
npm install mailtrap
npm install -g nodemon
npm install nodemailer
npm install -g typescript
npm install -g webpack-cli
npm install --save-dev cors
npm install --save-dev axios
npm install --save-dev jquery
npm install --save-dev bcrypt
npm install --save-dev dotenv
npm install --save-dev express
npm install --save-dev mongodb
npm install --save-dev webpack
npm install --save-dev kill-port
npm install --save-dev react-dom
npm install --save-dev bootstrap
npm install --save-dev ts-loader
npm install -g webpack-dev-server
npm install --save-dev css-loader
npm install --save-dev sass-loader
npm install --save-dev file-loader
npm install --save-dev webpack-cli
npm install --save-dev style-loader
npm install --save-dev babel-loader
npm install --save-dev @types/react
npm install --save-dev @types/jquery
npm install --save-dev dotenv-webpack
npm install --save-dev @types/react-dom
npm install --save-dev react-responsive
npm install --save-dev webpack-dev-server
npm install --save-dev copy-webpack-plugin
npm install --save-dev html-webpack-plugin
npm install --save-dev babel-preset-es2015
npm install --save-dev @babel/preset-react
npm install --save-dev terser-webpack-plugin
npm install --save-dev mini-css-extract-plugin
npm install --save-dev @babel/preset-typescript
npm install --save-dev extract-text-webpack-plugin
npm install --save-dev css-minimizer-webpack-plugin
npm install --save-dev @babel/core @babel/preset-env
```

</details>

### Installation Breakdown

#### Application Flow

```
source/index.tsx
  ↓
source/layouts/containers/Main/IndexMain/IndexMain.tsx
  ↓
layouts/components/Section/default/
  ↓
Section.default.tsx → *.scss
```

**[View IndexMain Component](https://github.com/TertiusRoach/development-portfolio_4.00/blob/main/source/layouts/containers/Main/IndexMain/IndexMain.tsx)**

#### Step 1: Verify Node.js

```bash
node --version
```

#### Step 2: Initialize Project

```bash
npm init -y
```

#### Step 3: Install Global Dependencies

```bash
npm install -g react
npm install -g typescript
npm install -g webpack-cli
npm install -g webpack-dev-server
```

#### Step 4: Install Core Dependencies

**Webpack, React, SASS, jQuery and Tools:**

```bash
npm install sass
npm install mongoose
npm install nodemailer
npm install --save-dev jquery
npm install --save-dev webpack
npm install --save-dev react-dom
npm install --save-dev bootstrap
npm install --save-dev kill-port
npm install --save-dev webpack-cli
npm install --save-dev @types/react
npm install --save-dev @types/jquery
npm install --save-dev @types/react-dom
npm install --save-dev react-responsive
npm install --save-dev webpack-dev-server
npm install --save-dev copy-webpack-plugin
npm install --save-dev html-webpack-plugin
npm install --save-dev terser-webpack-plugin
npm install --save-dev mini-css-extract-plugin
npm install --save-dev css-minimizer-webpack-plugin
```

#### Step 5: Install Server Dependencies

```bash
npm install -g nodemon
npm install --save-dev cors
npm install --save-dev axios
npm install --save-dev bcrypt
npm install --save-dev dotenv
npm install --save-dev express
npm install --save-dev mongodb
```

#### Step 6: Install Build Loaders

```bash
npm install --save-dev ts-loader
npm install --save-dev css-loader
npm install --save-dev sass-loader
npm install --save-dev file-loader
npm install --save-dev style-loader
```

#### Step 7: Install Babel & Transpilers

```bash
npm install --save-dev babel-loader
npm install --save-dev babel-preset-es2015
npm install --save-dev @babel/preset-react
npm install --save-dev @babel/preset-typescript
npm install --save-dev extract-text-webpack-plugin
npm install --save-dev @babel/core @babel/preset-env
```

#### Step 8: Install Database Tools

```bash
npm install mailtrap
npm install mongoose
npm install nodemailer
npm install -g nodemon
npm install --save-dev cors
npm install --save-dev axios
npm install --save-dev bcrypt
npm install --save-dev dotenv
npm install --save-dev express
npm install --save-dev mongodb
npm install --save-dev dotenv-webpack
```

---

## Development Environment

### VSCode Tips

| Action                    | Shortcut           | Description                                      |
| ------------------------- | ------------------ | ------------------------------------------------ |
| **Collapse Folders**      | `Ctrl + Shift + P` | Collapse all folders in Explorer                 |
| **Collapse Sections**     | `Ctrl + K + 0`     | Collapse all code sections (caret in root scope) |
| **Open Settings**         | `Ctrl + ,`         | Access VSCode settings                           |
| **See Props & Callbacks** | `Ctrl + SpaceBar`  | IntelliSense autocomplete                        |
| **Open Run & Debug**      | `Ctrl + Shift + D` | Launch debugger                                  |
| **Stop Terminal Server**  | `Ctrl + C`         | Stop running server process                      |

### Folder Structure

> This layout is modular on purpose. It is optimized for forward momentum and predictable scaling, not for matching a single framework template. The naming is descriptive, the separation is strict, and the intent is obvious when you scan the tree.

#### Reference Tree

```
root/
├── .vscode/
│   └── launch.json
├── public/                          # Final product for users
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
│   │   │   ├── Anchor/
│   │   │   ├── Article/
│   │   │   ├── Aside/
│   │   │   ├── Button/
│   │   │   ├── Division/
│   │   │   ├── Fieldset/
│   │   │   ├── Figure/
│   │   │   ├── Form/
│   │   │   ├── Header/
│   │   │   ├── List/
│   │   │   ├── Menu/
│   │   │   ├── Navigation/
│   │   │   ├── Section/
│   │   │   ├── Span/
│   │   │   ├── Table/
│   │   │   └── Time/
│   │   ├── containers/
│   │   │   ├── Footer/
│   │   │   ├── Header/
│   │   │   ├── Leftbar/
│   │   │   ├── Main/
│   │   │   ├── Overlay/
│   │   │   ├── Rightbar/
│   │   │   └── README.md
│   │   ├── designs/
│   │   ├── pages/
│   │   ├── scripts/
│   │   └── styles/
│   ├── modules/
│   │   ├── context/
│   │   ├── routes/
│   │   ├── server/
│   │   └── tools/
│   ├── utilities/
│   ├── index.html
│   ├── index.scss
│   └── index.tsx
├── bookmarks.html
├── README.md
├── index.html
├── index.scss
├── index.tsx
├── .gitignore
├── package.json
├── tsconfig.json
└── webpack.config.js
```

#### Directory Descriptions

##### `public/`

Compiled output and static entry points. This is the browser facing product. If it is in `public/`, it is assumed safe to ship.

##### `source/`

All authored code and assets. This is the only place you should be editing during development.

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
| `pdf-files/` | Portable documents used for reference or downloads      |
| `png-files/` | Lossless graphics and UI images                         |
| `psd-files/` | Photoshop source files kept for design iteration        |
| `svg-files/` | Vector assets, icons, logos, themeable graphics         |
| `ttf-files/` | Fonts                                                   |
| `txt-files/` | Plain text notes and content                            |
| `xcf-files/` | GIMP source files                                       |
| `zip-files/` | Archived bundles and imports                            |

##### `source/layouts/`

The UI system. This is where the application becomes readable. The split between components, containers, and pages is intentional: small semantic primitives, then page scaffolding, then route level composition.

###### **Components** — Atomic Semantic Building Blocks

| Component     | Purpose                                                         |
| ------------- | --------------------------------------------------------------- |
| `Anchor/`     | Link primitives and link styling rules                          |
| `Article/`    | Article wrappers and content structure                          |
| `Aside/`      | Secondary content primitives                                    |
| `Button/`     | Button UI and interaction patterns                              |
| `Division/`   | Generic blocks when semantic tags are not the right tool        |
| `Fieldset/`   | Grouped form primitives                                         |
| `Figure/`     | Media and caption composition                                   |
| `Form/`       | Form primitives and layout rules                                |
| `Header/`     | Component level header primitives (not the page container)      |
| `List/`       | List primitives                                                 |
| `Menu/`       | Menu primitives and menu layout                                 |
| `Navigation/` | Navigation structures (menus, breadcrumb patterns, link groups) |
| `Section/`    | Section primitives used across pages                            |
| `Span/`       | Inline wrappers for text and small UI fragments                 |
| `Table/`      | Tabular UI and table primitives                                 |
| `Time/`       | Time and date display primitives                                |

###### **Containers** — Page Level Layout Zones

| Container   | Purpose                                             |
| ----------- | --------------------------------------------------- |
| `Overlay/`  | Top layer UI, modals, focus states, global overlays |
| `Leftbar/`  | Left sidebar zone                                   |
| `Rightbar/` | Right sidebar zone                                  |
| `Header/`   | Top layout zone for identity and navigation         |
| `Main/`     | Primary content zone                                |
| `Footer/`   | Bottom layout zone                                  |
| `README.md` | Container specific conventions and notes            |

###### **Other Layout Directories**

| Directory  | Purpose                                                                     |
| ---------- | --------------------------------------------------------------------------- |
| `designs/` | Compositions and visual experiments that should not pollute core components |
| `pages/`   | Route level screens, composed from containers and components                |
| `scripts/` | Layout and UI scripts tied to interaction and build behavior                |
| `styles/`  | Shared styling system (tokens, globals, mixins, structural rules)           |

##### `source/modules/`

Application logic and infrastructure that supports the UI and routes.

| Module     | Purpose                                                           |
| ---------- | ----------------------------------------------------------------- |
| `context/` | Shared state, providers, and app wide context wiring              |
| `routes/`  | Routing definitions and navigation configuration                  |
| `server/`  | Backend code, MongoDB wiring, server entry points                 |
| `tools/`   | Internal helpers that support modules, scripts, and dev workflows |

##### `source/utilities/`

Reusable utilities and patterns. This is the toolbox that keeps code duplication under control.

| Utility        | Purpose                                                   |
| -------------- | --------------------------------------------------------- |
| `~flex-setup/` | Flexbox utilities and layout patterns                     |
| `~grid-setup/` | Grid utilities and layout patterns                        |
| `animations/`  | Reusable motion patterns                                  |
| `projects/`    | Feature grouped utilities and prototypes                  |
| `vendors/`     | Third party vendor code kept separate from authored logic |

##### `.vscode/`

Editor configuration for consistent debugging and project workflows.

---

## Documentation Standards

### Review Flags

These arrows are intentional review markers. They flag areas I have personally reviewed, reworked, and tested.

| Flag                                            | Unicode | Meaning                             |
| ----------------------------------------------- | ------- | ----------------------------------- |
| [🠊](https://www.compart.com/en/unicode/U+1F80A) | U+1F80A | Reviewed and validated              |
| [🠋](https://www.compart.com/en/unicode/U+1F80B) | U+1F80B | Reviewed with follow ups planned    |
| [🠈](https://www.compart.com/en/unicode/U+1F808) | U+1F808 | Needs another pass                  |
| [🠉](https://www.compart.com/en/unicode/U+1F809) | U+1F809 | Promising direction, keep iterating |

### Git Workflow

> **Goal:** Standard merge commit, preserve history, reduce risk, and avoid data loss.

#### Merge `4.01` into `main` (Merge Commit)

**Step 1:** Ensure `4.01` is clean and up to date

```bash
git checkout 4.01
git pull
```

**Step 2:** Update `main` and merge

```bash
git checkout main
git pull
git merge 4.01
```

**Step 3:** Resolve conflicts if prompted, then complete the merge commit

**Step 4:** Push updated `main`

```bash
git push
```

#### Archive or Store `4.01`

> **Preferred approach:** Keep the branch as a historical reference but stop developing on it. If you delete it later, do it only after verifying `main` contains everything.

#### Create `4.02` from Updated `main`

```bash
git checkout main
git pull
git checkout -b 4.02
git push -u origin 4.02
```

**Switch VS Code to `4.02`:**

```bash
git checkout 4.02
```

---

<div align="center">

**Built with ❤️ by [Tertius Roach](https://tertiusroach.github.io/development-portfolio_4.00/public/index.html)**

_Good software should protect users from the worst day they are having, not amplify it._

![Status](https://img.shields.io/badge/status-active-success.svg)
![Version](https://img.shields.io/badge/version-4.02-blue.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)

</div>

---
