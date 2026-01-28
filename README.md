# Tertius Roach’s **TraLogFin** (Trinity {Apps\])

Live build: [Trinity {Apps\]](https://tertiusroach.github.io/development-portfolio_4.00/public/index.html)  
Testing surface: [TraLogFin pages](https://github.com/TertiusRoach/development-portfolio_4.00/tree/4.01/source/layouts/pages)

TraLogFin is the working name for my “three tools, one brain” portfolio project: **TRAck a Day**, **LOG a Ticket**, and **FINd a Link**. It’s built for real workplace friction: overtime tracking that does not waste your time, ticket logging that does not punish the user, and a link hub that stops teams from hunting through spreadsheets and bookmarks like it’s a sport.

What TraLogFin does (in plain terms):

- **Track a Day**: track time and overtime fast, then get out of the way.
- **Log a Ticket**: a front end ticketing experience designed to be simple, safe, and hard to mess up.
- **Find a Link**: a clean, searchable home for the links a company actually needs.

Technical intent (developer view):
This project modernizes front end structure by leaning into semantic layout and styling it deliberately. Core page regions use consistent, state driven styling across `<header>`, `<main>`, `<footer>`, `<section>`, and `<aside>`. Each region gets a distinct visual treatment so layouts stay readable, responsive, and predictable as the UI grows.

Why this exists (origin story, short version):
I once deleted someone’s ticket while moderating four studios at Akademia. The system was clunky, and I did not build it. That moment was enough motivation to start building my own: a cleaner ticketing front end with safer flows and fewer chances to do something destructive by accident. TraLogFin is the evolution of that mindset, now expanded into a suite.

Status:
This is a work in progress. The testing environment will change as the app matures, but the goal stays the same: speed, clarity, and a UI that respects the user’s time.

## Documentation

<details>
  <summary><strong>Documentation</strong></summary>
  <ul>
    <li><a href="#tralogfin-testing">TraLogFin Testing</a></li>
    <li><a href="#front-end-database-ui-state-driven">Front-end Database</a></li>
    <li><a href="#back-end-installation-&-development">Back-end Installation & Development</a></li>
    <li><a href="#orchestrating-visibility">Orchestrating Visibility (CSS & HTML Vocabulary)</a></li>
    <li><a href="#determining-responsibilities">Determining Element Responsibilities</a></li>
    <li><a href="#logical-breakdown">Layout Container Breakdown</a></li>
    <li><a href="#terminal-commands-project-scripts-and-dev-flow">Terminal Commands</a></li>
    <li><a href="#application-installation">Application Installation</a></li>
    <li><a href="#installation-breakdown">Installation Breakdown</a></li>
    <li><a href="#hints-&-tips-for-vscode">Hints & Tips for VSCode</a></li>
    <li><a href="#folder-structure">Folder Structure</a></li>
    <li><a href="#reviewed-notes-&-review-flags">Reviewed Notes & Review Flags</a></li>
    <li><a href="#git-workflow-merge-401-into-main-then-create-402">Git Workflow Example</a></li>
  </ul>
</details>

## TraLogFin Testing

[TraLogFin](https://github.com/TertiusRoach/development-portfolio_4.00/tree/4.01-archive/source/layouts/pages)

This is where the testing surface lives. If something breaks, it usually breaks here first, which is the point.

## Front end database (UI state driven)

[Front-end Database](https://github.com/TertiusRoach/development-portfolio_4.00/blob/main/source/modules/server/README.md)

This is the contract between data and display. The database and role selection determine what the front end renders, how it renders it, and which visual states are active.

### Track a Day

[Track a Day](https://github.com/TertiusRoach/development-portfolio_4.00/tree/4.01-archive/source/assets/svg-files/trinity-apps/track-a-day)

Frustrated with spreadsheets and done with guesswork? Track time cleanly and let totals speak.

What’s your vocation?
`.freelancing` and `.established`

Global reach
`.apple` or `.android`

### Log a Ticket

[Log a Ticket](https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d725d00dd988f685c1c524f496e3d0797887e09/source/assets/svg-files/trinity-apps/log-a-ticket/primary-light.svg)

Ticketing should feel like momentum, not admin. The goal is quick capture, clear ownership, and visible progress.

What’s your position?
`.manager` and `.employee`

Improve efficiency
`.anytime-fitness` or `.planet-fitness`

### Find a Link

[Find a Link](https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d725d00dd988f685c1c524f496e3d0797887e09/source/assets/svg-files/trinity-apps/find-a-link/primary-light.svg)

A fast index for links a team actually uses. Think spreadsheets, schedules, docs, dashboards.

What’s your occupation?
`.specialist` and `.technician`

Consider technologies
`.microsoft` (Excel) or `.google` (Sheets)

### Pick a Page

[Pick a Page](https://github.com/TertiusRoach/development-portfolio_4.00/blob/4.01/source/assets/svg-files/trinity-apps/pick-a-page/logo-white.svg)

Company comparisons as a thought experiment: the `&` icon looks like a dog scratching its anus.

## Back-end Installation & Development

[Back-end](https://github.com/TertiusRoach/development-portfolio_4.00/blob/main/source/modules/server/README.md)

You can find the [source code here](https://github.com/TertiusRoach/development-portfolio_4.00/tree/main/source/modules/server) and the full [tutorial playlist here](https://www.youtube.com/playlist?list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA) for a deeper dive into [MongoDB](https://en.wikipedia.org/wiki/MongoDB).

This project uses a MongoDB backed server module to support an office application suite that tracks overtime, logs tickets, and stores links. For demonstration purposes, `roleName` represents the user’s selected company position and drives behavior and visibility.

## Orchestrating Visibility

These classes are intentionally simple. They act like a UI contract.

Active state  
`.active` and `.asleep`  
Use these to indicate whether a feature is currently in use (active) or parked (asleep). Active should feel responsive. Asleep should stay out of the user’s way.

Visibility state  
`.visible` and `.hidden`  
Use these when something is either rendered for the user or intentionally not shown.

Expansion state  
`.expanded` and `.collapsed`  
Use these for sections that can open and close while staying part of the page.

Emphasis state  
`.highlight` and `.downplay`  
Use these to guide attention without changing layout or flow.

## Determining Responsibilities

For demonstration purposes, the `roleName` represents the user’s selected company position and influences the application’s behavior accordingly.

### Track a Day

Frustrated with spreadsheets? Done with guesswork? Just track your time, and let the numbers speak for themselves.

What’s your vocation?
`.established` and `.freelancing`

### Log a Ticket

No one likes filling out tickets, but this makes it so easy, you won’t even think about it.

What’s your position?
`.manager` and `.employee`

### Find a Link

Instantly access knowledge bases for all your company's applications through streamlined links.

What’s your occupation?
`.specialist` and `.technician`

Company comparisons because it's an interesting thought experiment: The '&' icon looks like a dog scratching its anus.

`.apple` and `.android`  
`.microsoft` and `.google`  
`.planet-fitness` and `.anytime-fitness`

## Logical Breakdown

This project uses a predictable layout container system to prevent CSS collisions and keep page structure readable at a glance.

Primary containers live under `source/layouts/containers/` and use the following block names:

- `Overlay`
- `Leftbar`
- `Rightbar`
- `Header`
- `Main`
- `Footer`

Each container maps to a semantic HTML tag and uses consistent `id` naming:

- `Overlay` uses `<section id="${pageName}-overlay">`
- `Leftbar` uses `<aside id="${pageName}-leftbar">`
- `Rightbar` uses `<aside id="${pageName}-rightbar">`
- `Header` uses `<header id="${pageName}-header">`
- `Main` uses `<main id="${pageName}-main">`
- `Footer` uses `<footer id="${pageName}-footer">`

The `${blockName}` keywords are not decoration. They are how the codebase stays stable when styles grow and features multiply.

## Terminal commands (project scripts and dev flow)

Launch front end:

```bash
npm run app
```

Launch back end:
Go to `root\source\modules\server`, then:

```bash
nodemon landing
```

Compile project into `public/`:

```bash
npm run deploy
```

Launch testing environment:

```bash
npm run launch
```

Close testing environment:

```bash
npm run stop
```

Switch GitHub branches:

```bash
git checkout 4.01
```

## Application installation

Click on the top right green button with the text of `<> Code` and open with [Visual Studio](https://visualstudio.microsoft.com/).
Install [Visual Studio Code](https://code.visualstudio.com/) or an editor of your choice along with [Node.js](https://nodejs.org/en).

<details>
  <summary><strong>Full Terminal Setup (verified commands, do not edit)</strong></summary>

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

## Installation Breakdown

Entry point: `source/index.tsx` |🠊 `source/layouts/containers/Main/IndexMain/IndexMain.tsx` |🠊 `layouts/components/Section/default/` |🠊 [Section.default.tsx](https://github.com/TertiusRoach/development-portfolio_4.00/blob/main/source/layouts/containers/Main/IndexMain/IndexMain.tsx) | `*.scss`

Verify [Node.js](https://nodejs.org/en) inside the terminal:

```bash
node --version
```

Initialize package:

```bash
npm init -y
```

Install webpack globally (onto Operating System):

```bash
npm install -g react
npm install -g typescript
npm install -g webpack-cli
npm install -g webpack-dev-server
```

Install webpack, REACT, SASS, jQuery and Server Tools:

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

Install Server Dependencies:

```bash
npm install -g nodemon
npm install --save-dev cors
npm install --save-dev axios
npm install --save-dev bcrypt
npm install --save-dev dotenv
npm install --save-dev express
npm install --save-dev mongodb
```

Install Loaders for Compiling:

```bash
npm install --save-dev ts-loader
npm install --save-dev css-loader
npm install --save-dev sass-loader
npm install --save-dev file-loader
npm install --save-dev style-loader
```

Install Babel & Security:

```bash
npm install --save-dev babel-loader
npm install --save-dev babel-preset-es2015
npm install --save-dev @babel/preset-react
npm install --save-dev @babel/preset-typescript
npm install --save-dev extract-text-webpack-plugin
npm install --save-dev @babel/core @babel/preset-env
```

Install Server for Databases:

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

## Hints & Tips for VSCode

Collapse all folders in the Explorer  
Open Command Palette: `Ctrl + Shift + P`  
Type `Collapse Folders in Explorer` then Enter

Caret in root scope  
Collapse sections: `Ctrl + K` then `0`

Open Settings  
`Ctrl + ,`

See props and callbacks  
`Ctrl + SpaceBar`

Open Run and Debug  
`Ctrl + Shift + D` then `F5`

Stop server inside terminal  
`Ctrl + C`

## Folder Structure

This layout is modular on purpose. It is optimized for forward momentum and predictable scaling, not for matching a single framework template. The naming is descriptive, the separation is strict, and the intent is obvious when you scan the tree.

### Reference Tree

```bash
root/
├── .vscode/
│   └── launch.json
├── public/ # Final product for users
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

### What each folder is for

#### `public/`

Compiled output and static entry points. This is the browser facing product. If it is in `public/`, it is assumed safe to ship.

#### `source/`

All authored code and assets. This is the only place you should be editing during development.

#### `source/assets/`

Typed asset storage. Keeping formats separated avoids build edge cases and reduces accidental misuse.

- `gif-files/` animated media used for UI accents or demos
- `ico-files/` icon formats for browser and OS surfaces
- `jpg-files/` photos and compressed imagery
- `md-files/` markdown content used as authored text or internal docs
- `mp3-files/` audio assets
- `mp4-files/` video assets
- `pdf-files/` portable documents used for reference or downloads
- `png-files/` lossless graphics and UI images
- `psd-files/` Photoshop source files kept for design iteration
- `svg-files/` vector assets, icons, logos, themeable graphics
- `ttf-files/` fonts
- `txt-files/` plain text notes and content
- `xcf-files/` GIMP source files
- `zip-files/` archived bundles and imports

#### `source/layouts/`

The UI system. This is where the application becomes readable. The split between components, containers, and pages is intentional: small semantic primitives, then page scaffolding, then route level composition.

- `components/` atomic semantic building blocks mapped close to HTML structure
  - `Anchor/` link primitives and link styling rules
  - `Article/` article wrappers and content structure
  - `Aside/` secondary content primitives
  - `Button/` button UI and interaction patterns
  - `Division/` generic blocks when semantic tags are not the right tool
  - `Fieldset/` grouped form primitives
  - `Figure/` media and caption composition
  - `Form/` form primitives and layout rules
  - `Header/` component level header primitives (not the page container)
  - `List/` list primitives
  - `Menu/` menu primitives and menu layout
  - `Navigation/` navigation structures (menus, breadcrumb patterns, link groups)
  - `Section/` section primitives used across pages
  - `Span/` inline wrappers for text and small UI fragments
  - `Table/` tabular UI and table primitives
  - `Time/` time and date display primitives

- `containers/` page level layout zones that scaffold the UI
  - `Overlay/` top layer UI, modals, focus states, global overlays
  - `Leftbar/` left sidebar zone
  - `Rightbar/` right sidebar zone
  - `Header/` top layout zone for identity and navigation
  - `Main/` primary content zone
  - `Footer/` bottom layout zone
  - `README.md` container specific conventions and notes

- `designs/` compositions and visual experiments that should not pollute core components
- `pages/` route level screens, composed from containers and components
- `scripts/` layout and UI scripts tied to interaction and build behavior
- `styles/` shared styling system (tokens, globals, mixins, structural rules)

#### `source/modules/`

Application logic and infrastructure that supports the UI and routes.

- `context/` shared state, providers, and app wide context wiring
- `routes/` routing definitions and navigation configuration
- `server/` backend code, MongoDB wiring, server entry points
- `tools/` internal helpers that support modules, scripts, and dev workflows

#### `source/utilities/`

Reusable utilities and patterns. This is the toolbox that keeps code duplication under control.

From the older reference layout, this area typically contains:

- `~flex-setup/` flexbox utilities and layout patterns
- `~grid-setup/` grid utilities and layout patterns
- `animations/` reusable motion patterns
- `projects/` feature grouped utilities and prototypes
- `vendors/` third party vendor code kept separate from authored logic

#### `.vscode/`

Editor configuration for consistent debugging and project workflows.

## Reviewed notes & review flags

These arrows are intentional review markers. They flag areas I have personally reviewed, reworked, and tested.

[🠊](https://www.compart.com/en/unicode/U+1F80A) Reviewed and validated  
[🠋](https://www.compart.com/en/unicode/U+1F80B) Reviewed with follow ups planned  
[🠈](https://www.compart.com/en/unicode/U+1F808) Needs another pass  
[🠉](https://www.compart.com/en/unicode/U+1F809) Promising direction, keep iterating

If you want the original style placeholders for notes:

```txt
//--|[🠊](https://www.compart.com/en/unicode/U+1F80A) Note Here [🠈](https://www.compart.com/en/unicode/U+1F808)|--\\
//--|[🠋](https://www.compart.com/en/unicode/U+1F80B) Note Here [🠋](https://www.compart.com/en/unicode/U+1F80B)|--\\
//--|[🠈](https://www.compart.com/en/unicode/U+1F808) Note Here [🠈](https://www.compart.com/en/unicode/U+1F808)|--\\
//--|[🠉](https://www.compart.com/en/unicode/U+1F809) Note Here [🠉](https://www.compart.com/en/unicode/U+1F809)|--\\
```

## Git workflow: merge `4.01` into `main`, then create `4.02`

Goal: standard merge commit, preserve history, reduce risk, and avoid data loss.

### Merge `4.01` into `main` (merge commit)

Ensure `4.01` is clean and up to date:

```bash
git checkout 4.01
git pull
```

Update `main` and merge:

```bash
git checkout main
git pull
git merge 4.01
```

Resolve conflicts if prompted, then complete the merge commit.

Push updated `main`:

```bash
git push
```

### Archive or store `4.01`

Preferred approach: keep the branch as a historical reference but stop developing on it. If you delete it later, do it only after verifying `main` contains everything.

### Create `4.02` from updated `main`

```bash
git checkout main
git pull
git checkout -b 4.02
git push -u origin 4.02
```

Switch VS Code to `4.02`:

```bash
git checkout 4.02
```
