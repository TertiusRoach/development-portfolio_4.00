<a id="readme-top"></a>

## **TLF** [{Apps\]](https://tertiusroach.github.io/development-portfolio_4.00/public/index.html)

Track a Day, Log a Ticket, Find a Link: three applications inspired by the gaps I kept running into across corporate environments, from film production and education institutes to government departments and the events industry. Together they fill one specific need: an office suite that is easy to use and genuinely helpful. It solves workplace chaos while daring to improve the politics that come with the territory. It is the kind of tool you open, do the thing, and get back to your life. Track overtime without turning it into a second job, file tickets without feeling like you are writing a novel for an audience that does not exist, and keep every important company link in one place so nobody has to spelunk through spreadsheets, bookmarks, and half-remembered URLs ever again.

This project started the honest way, with a mistake I never wanted to repeat. While moderating multiple studios at Akademia, I accidentally deleted someone's ticket on a clunky system I did not build. That moment burned in the lesson: good software should protect users from the worst day they are having, not amplify it. TraLogFin is me building the system I wish I had then: cleaner flows, safer patterns, and a user experience that does not ask for permission to waste your time.

Where it is going is simple and ambitious at the same time. TraLogFin is becoming a small, sharp suite that scales without losing its manners. A front end that stays structured and readable as it grows, a workflow that stays fast even when the data gets real, and a codebase that welcomes contributors because the intent is obvious the moment you open the project. If you like tools that value clarity, speed, and practical design over ceremony, you are exactly the kind of person I want reading this, using it, and helping push it forward.

**[View Portfolio](https://tertiusroach.github.io/development-portfolio_4.00/public/index.html)** | **[Source Code](https://github.com/TertiusRoach/development-portfolio_4.00)**

---

<details>
  <summary><strong>Table of Contents</strong></summary>

1. [About The Project](#about-the-project)
   - [The Applications](#the-applications)
   - [Built With](#built-with)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Quick Start](#quick-start)
   - [Back End](#back-end)
3. [Usage](#usage)
   - [Terminal Commands](#terminal-commands)
   - [Application Flow](#application-flow)
   - [Testing](#testing)
4. [How It Works](#how-it-works)
   - [Pages and Containers](#pages-and-containers)
   - [Components](#components)
   - [Company Comparisons](#company-comparisons)
5. [Project Structure](#project-structure)
6. [Documentation](#documentation)
7. [Roadmap](#roadmap)
8. [Contributing](#contributing)
9. [License](#license)
10. [Contact](#contact)
11. [Acknowledgments](#acknowledgments)

</details>

---

## About The Project

TraLogFin is a fully remote office suite for two kinds of company: the ones that burn people out, and the ones that are trying not to. Every rule in it is written to tilt slightly toward the worker. When something is unclear, the employee gets the benefit of the doubt, because the people doing the work are the ones who need protecting.

It's tested with a cast of 18 characters across two rival companies, each one built to break a specific rule. Meet them in **[CHARACTERS.md](source/utilities/document/CHARACTERS.md)**.

### The Applications

Each application asks one question. The answer becomes a `roleName` class on `<div id="${pageName}-body">` and decides which page opens. What the user may actually do there is decided by **[GUIDELINES.md](source/utilities/document/GUIDELINES.md)**.

| Application      | Container    | Dataset          | The question            | Options                         |
| ---------------- | ------------ | ---------------- | ----------------------- | ------------------------------- |
| **Track a Day**  | `Overtime/`  | `TrackTime`      | What's your vocation?   | `.established` · `.freelancing` |
| **Log a Ticket** | `Ticketing/` | `DefineDuties`   | What's your position?   | `.manager` · `.employee`        |
| **Find a Link**  | `Hyperlink/` | `ArchiveAnchors` | What's your occupation? | `.specialist` · `.technician`   |
| **Pick a Page**  | `Landing/`   | `PickPage`       | Who are you?            | One of the characters           |

- **Track a Day:** frustrated with spreadsheets and done with guesswork? Track time cleanly and let the totals speak.
- **Log a Ticket:** ticketing should feel like momentum, not admin. Quick capture, clear ownership, visible progress.
- **Find a Link:** a fast index for the links a team actually uses. Spreadsheets, schedules, docs and dashboards.
- **Pick a Page:** the character roster that feeds the other three. It adapts to `.landscape`, `.portrait` and `.square` screens. Excel and Google Sheets integrations (`.microsoft` · `.google`) are planned.

The full map from toggle to page is in **[TOGGLES.md](source/utilities/document/TOGGLES.md)**.

### Built With

[![React][React-badge]][React-url]
[![TypeScript][TypeScript-badge]][TypeScript-url]
[![Sass][Sass-badge]][Sass-url]
[![Webpack][Webpack-badge]][Webpack-url]
[![Node.js][Node-badge]][Node-url]
[![Express][Express-badge]][Express-url]
[![MongoDB][MongoDB-badge]][MongoDB-url]

Designed in Figma first, then built by hand.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Getting Started

### Prerequisites

[Visual Studio Code](https://code.visualstudio.com/), [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en). Step-by-step setup for Windows, macOS and Linux is in **[GITHUB.md](source/utilities/document/GITHUB.md#2-machine-setup)**.

Check that Node is ready:

```bash
node --version
npm --version
```

### Quick Start

Click the green `<> Code` button at the top right of the repository, copy the URL, and clone it from the terminal:

```bash
git clone https://github.com/TertiusRoach/development-portfolio_4.00.git
cd development-portfolio_4.00
npm install
npm run app
```

`npm install` reads `package.json` and installs everything in one go. The app opens on `http://localhost:8080`.

<details>
<summary><strong>Complete Package List</strong></summary>

These are the packages declared in `package.json`. You only need to install them one by one when rebuilding the project from scratch.

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

### Back End

The front end runs on its own. To work on the server, you also need MongoDB, a secrets file (`build/.env`) and a Mailtrap test inbox. Everything, for every operating system, is in **[MODULES.md](source/utilities/document/MODULES.md)**.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Usage

### Terminal Commands

Open VS Code and press **Ctrl + `** to open the terminal. Then:

```bash
# Launch the front end (webpack-dev-server on http://localhost:8080)
npm run app

# Launch the back end (http://localhost:3000)
cd source/modules/server/MongoDB/REVIEW
npx nodemon landing

# Compile the project into public/
npm run deploy

# Close the development server (frees port 8080)
npm run stop
```

> **Tip:** `npm run app` is an alias for `npm run launch`. VS Code runs it automatically when you open the folder, through `.vscode/tasks.json`. More shortcuts and editor setup are in **[EDITOR.md](source/utilities/document/EDITOR.md)**.

### Application Flow

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

### Testing

The **Archive** page (`#components-body`) is the testing surface for components. Every component gets a test harness under `containers/Archive/Main/elements/`, which renders the real component with toggles for its props. To view a different page, change the `viewBody('archive')` call at the top of `source/index.tsx`.

The application rules are tested with the characters in **[CHARACTERS.md](source/utilities/document/CHARACTERS.md)**: each one lists the rules it exists to break.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## How It Works

### Pages and Containers

Every page is identified by its `pageName`, every container by its `blockName`, and every role-specific view by its `labelName`. Together they build predictable IDs and classes, such as `#overtime-leftbar` and `.clocking-leftbar`. The `${blockName}` keywords aren't decoration: they're how the codebase stays stable when styles grow and features multiply.

Each page lives in `source/layouts/containers/${PageName}/` and is mounted into `<div id="${pageName}-body" class="default-body active|asleep">`. Inside it, six blocks load in a fixed order: the Overlay first, then Main, then the blocks that reference Main.

| Page          | Container    | Mount Point        | Application       |
| ------------- | ------------ | ------------------ | ----------------- |
| **Landing**   | `Landing/`   | `#landing-body`    | Pick a Page       |
| **Overtime**  | `Overtime/`  | `#overtime-body`   | Track a Day       |
| **Ticketing** | `Ticketing/` | `#ticketing-body`  | Log a Ticket      |
| **Hyperlink** | `Hyperlink/` | `#hyperlink-body`  | Find a Link       |
| **Archive**   | `Archive/`   | `#components-body` | Component testing |

| Container    | HTML Tag    | ID Pattern             | Job                                |
| ------------ | ----------- | ---------------------- | ---------------------------------- |
| **Overlay**  | `<section>` | `${pageName}-overlay`  | Entry layer, focused flows on top  |
| **Main**     | `<main>`    | `${pageName}-main`     | The primary workspace              |
| **Leftbar**  | `<aside>`   | `${pageName}-leftbar`  | Actions and guidance               |
| **Rightbar** | `<aside>`   | `${pageName}-rightbar` | Context and feedback               |
| **Header**   | `<header>`  | `${pageName}-header`   | Controls and configuration         |
| **Footer**   | `<footer>`  | `${pageName}-footer`   | Short status messages              |

What each container does in each application is in **[CONTAINERS.md](source/utilities/document/CONTAINERS.md)**. The state classes they switch between (`.active`, `.expanded`, `.locked-${blockName}`…) are in the **[RULEBOOK](source/utilities/document/RULEBOOK.md#state-classes)**.

### Components

Components are the building blocks in `source/layouts/components/`. Every one follows the same pattern, so once you can read one, you can read them all:

- **One folder per variant,** with a `.tsx` for markup, a `.scss` for styles and a `.ts` for `createClass()`. Larger components split their styles into a `pipeline/` (size, grid, flex, tint, move, corners).
- **Bracket syntax** shows each prop's type at a glance: `'[overtime]'`, `'<main>'`, `'-left-'`, `'~dark~'`, `'(blue)'`, `'{button}'`.
- **Every component scales** through three mixins, `desktop-landscape`, `mobile-portrait` and `tablet-squaring`, so it fits phones, tablets and desktops alike.
- **Ten colours** from `styles/Palettes.scss`, each in a dark and a light shade.
- **Comment flags** (`//--|🠊 … 🠈|--\\`) make the structure of every file readable at a glance.

All of it, with examples, is in the **[RULEBOOK](source/utilities/document/RULEBOOK.md)**.

### Company Comparisons

> Company comparisons, because it's an interesting thought experiment: the `&` icon looks like a dog scratching its anus.

| Category                | Options                                |
| ----------------------- | -------------------------------------- |
| **Mobile Platforms**    | `.apple` · `.android`                  |
| **Productivity Suites** | `.microsoft` · `.google`               |
| **Fitness Chains**      | `.planet-fitness` · `.anytime-fitness` |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Project Structure

> This layout is modular on purpose. It is optimized for forward momentum and predictable scaling, not for matching a single framework template. The naming is descriptive, the separation is strict, and the intent is obvious when you scan the tree.

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
│   │   ├── document/                # All project documentation
│   │   ├── vendors/
│   │   ├── ~flex-setup/
│   │   └── ~grid-setup/
│   ├── index.html
│   ├── index.scss
│   ├── index.tsx
│   ├── scripts.ts
│   └── types.d.ts
├── .gitignore
├── CLAUDE.md                        # Working rules for AI assistants
├── README.md
├── package.json
├── tsconfig.json
└── webpack.config.js
```

<details>
<summary><strong>Directory Descriptions</strong></summary>

#### `public/`

Compiled output and static entry points. This is the browser-facing product, generated by `npm run deploy`. If it is in `public/`, it is assumed safe to ship. Do not edit it by hand; Webpack wipes it on every build.

#### `source/`

All authored code and assets. This is the only place you should be editing during development.

| File          | Purpose                                                                     |
| ------------- | --------------------------------------------------------------------------- |
| `index.html`  | HTML shell with one `<div id="${pageName}-body">` per page                  |
| `index.tsx`   | Entry point: renders every page and activates one with `viewBody()`         |
| `index.scss`  | Root stylesheet                                                             |
| `scripts.ts`  | Shared helpers such as `stripBrackets()`, `checkScreen()` and `loadAsset()` |
| `types.d.ts`  | Global type declarations                                                    |

#### `source/assets/`

Typed asset storage. Keeping formats separated avoids build edge cases and reduces accidental misuse.

| Directory    | Purpose                                                 |
| ------------ | ------------------------------------------------------- |
| `gif-files/` | Animated media used for UI accents or demos             |
| `ico-files/` | Icon formats for browser and OS surfaces                |
| `jpg-files/` | Photos and compressed imagery                           |
| `mp3-files/` | Audio assets                                            |
| `mp4-files/` | Video assets                                            |
| `ods-files/` | Spreadsheets that plan each application's dataset       |
| `odt-files/` | Written planning documents and character descriptions   |
| `pdf-files/` | Portable documents: character sheets, original planning |
| `png-files/` | Lossless graphics and UI images                         |
| `psd-files/` | Photoshop source files kept for design iteration        |
| `svg-files/` | Vector assets, icons, logos, themeable graphics         |
| `ttf-files/` | Fonts                                                   |
| `txt-files/` | Plain text notes and content                            |
| `xcf-files/` | GIMP source files                                       |
| `zip-files/` | Archived bundles and imports                            |

#### `source/layouts/`

The UI system. This is where the application becomes readable. The split between components and containers is intentional: small semantic primitives first, then page scaffolding that composes them.

**Components:** atomic semantic building blocks.

| Component     | Variants                                               |
| ------------- | ------------------------------------------------------ |
| `Article/`    | `loading` · `updates`                                  |
| `Aside/`      | `characters`                                           |
| `Button/`     | `default` · `profile` · `routing` · `stretch`          |
| `Division/`   | `conveyor` · `fullscreen` · `sweeping` · `testing`     |
| `Fieldset/`   | `code`                                                 |
| `Figure/`     | `default` · `loading` · `rotation`                     |
| `Form/`       | `login` · `password` · `register` · `reset` · `verify` |
| `Label/`      | `toggle`                                               |
| `List/`       | `countdown`                                            |
| `Menu/`       | `scroll` · `select` · `swipe` · `toggle`               |
| `Navigation/` | `default`                                              |
| `Section/`    | `characters` · `demonstration`                         |
| `Table/`      | `clocking` · `tracking`                                |
| `Time/`       | `clock` · `date`                                       |

`components.ts` holds the shared abbreviation helpers (`abbrAxis`, `abbrType`, `abbrView`, `abbrShade`, `abbrColor`).

**Containers:** page-level layout zones. Each page folder holds a `${PageName}.tsx` that lazy-loads its six blocks, and each block folder holds a `.tsx`, a `.scss` and a `${PageName}Functions.ts`.

| Container       | Purpose                                                             |
| --------------- | ------------------------------------------------------------------- |
| `Archive/`      | Component testing page and its test harnesses                       |
| `Hyperlink/`    | Find a Link                                                         |
| `Landing/`      | Pick a Page, the entry experience                                   |
| `Overtime/`     | Track a Day                                                         |
| `Ticketing/`    | Log a Ticket                                                        |
| `containers.ts` | `blockViews()` and the expand and collapse handlers for every block |

**Other layout directories:**

| Directory  | Purpose                                                                                   |
| ---------- | ----------------------------------------------------------------------------------------- |
| `scripts/` | One script per block (`Header.ts`, `Main.ts`, `Overlay.ts`…)                              |
| `styles/`  | Shared styling system: `Palettes`, `Mixins`, `Global`, `Skeleton`, `Transition`, `Barrel` |
| `tools/`   | Layout helpers: `conversions.ts`, `navigation.ts`, `utilities.ts`                         |

#### `source/modules/`

Application logic and infrastructure that supports the UI. Setup is in [MODULES.md](source/utilities/document/MODULES.md), and how data travels is in [TABLE.md](source/utilities/document/TABLE.md).

| Folder                    | Purpose                                                                          |
| ------------------------- | -------------------------------------------------------------------------------- |
| `server/MongoDB/REVIEW/`  | Express server (`landing.js`, port 3000) and per-application routes under review |
| `server/MongoDB/online/`  | Dataset modules for the hosted database                                          |
| `server/MongoDB/offline/` | Dataset modules for a local database                                             |
| `server/MongoDB/testing/` | Typed dataset modules seeded from `TraLogFin.json` for front-end testing         |
| `routes/`                 | Front-end route stubs for each application (empty for now)                       |
| `context/`                | React context for email and password state                                       |

#### `source/utilities/`

Reusable utilities, references and internal documentation.

| Utility        | Purpose                                                                                |
| -------------- | -------------------------------------------------------------------------------------- |
| `document/`    | All project documentation (see [Documentation](#documentation))                        |
| `vendors/`     | Third-party vendor code kept separate from authored logic                              |
| `~flex-setup/` | Flexbox reference and layout patterns                                                  |
| `~grid-setup/` | Grid reference and layout patterns                                                     |

#### `.vscode/`

Editor configuration for consistent debugging and project workflows. What each file does is in [EDITOR.md](source/utilities/document/EDITOR.md#what-vscode-does).

</details>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Documentation

Everything lives in **`source/utilities/document/`**. If you're unsure about anything, start with the **RULEBOOK**.

| Document                                                       | What it answers                                                                 |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| **[RULEBOOK.md](source/utilities/document/RULEBOOK.md)**       | How code is written: philosophy, naming, components, scaling, colours, comments |
| **[GUIDELINES.md](source/utilities/document/GUIDELINES.md)**   | What the application allows: roles, permissions, clock-ins, overtime, ghost hours, offline mode |
| **[TOGGLES.md](source/utilities/document/TOGGLES.md)**         | Which page each toggle opens                                                    |
| **[CONTAINERS.md](source/utilities/document/CONTAINERS.md)**   | The six containers and what they do in each application                         |
| **[CHARACTERS.md](source/utilities/document/CHARACTERS.md)**   | The 18 test characters, their psychology and the rules they test                |
| **[TABLE.md](source/utilities/document/TABLE.md)**             | Tables, ISO weeks, how data travels, MongoDB-to-MySQL rules, offline storage     |
| **[MODULES.md](source/utilities/document/MODULES.md)**         | Database, secrets, test emails and server setup on any OS                       |
| **[GITHUB.md](source/utilities/document/GITHUB.md)**           | Machine setup, releases, tags, syncing machines, fixing Git trouble             |
| **[EDITOR.md](source/utilities/document/EDITOR.md)**           | VS Code shortcuts, `.vscode/`, keeping the Explorer readable                    |
| **[REFERENCE.md](source/utilities/document/REFERENCE.md)**     | The template this README follows                                                |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Roadmap

- [x] Desktop layout
- [x] Mobile layout matching desktop
- [x] Tablet scaling (`tablet-squaring`)
- [x] Application rules, characters and documentation
- [ ] All ten colours on every component that has colour
- [ ] Smooth fades between colours
- [ ] Log a Ticket, rebuilt from my original jQuery ticketing system
- [ ] Offline mode with IndexedDB
- [ ] A data layer that can switch from MongoDB to MySQL
- [ ] Unpaid-solutions record for freelancers

The full list of decisions waiting to be built is in the [RULEBOOK](source/utilities/document/RULEBOOK.md#10-parked-for-later), and every release so far is in the [status log](source/utilities/document/GITHUB.md#10-status-log).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Contributing

Contributions are welcome, as long as they keep the project readable. Before you change anything:

1. **Read the [RULEBOOK](source/utilities/document/RULEBOOK.md).** Readability beats brevity, match what's already there, one step at a time.
2. **Check [GUIDELINES.md](source/utilities/document/GUIDELINES.md)** before touching anything that changes what a user is allowed to do.
3. **Follow the Git naming:** branches are `#.#` (`4.7`), tags are `v#.##` (`v4.07`), and tags are the archive. Each release goes Confirm → Tag → Publish to main → Next branch → Delete old branch. The commands are in [GITHUB.md](source/utilities/document/GITHUB.md#3-release-cycle).
4. **Using an AI assistant?** Point it at [CLAUDE.md](CLAUDE.md) first.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## License

Distributed under the ISC License, as declared in `package.json`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Contact

**Tertius Roach**: [Portfolio](https://tertiusroach.github.io/development-portfolio_4.00/public/index.html) · [GitHub](https://github.com/TertiusRoach)

Project link: [github.com/TertiusRoach/development-portfolio_4.00](https://github.com/TertiusRoach/development-portfolio_4.00)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Acknowledgments

- [Best-README-Template](https://github.com/othneildrew/Best-README-Template), the structure this README follows
- [Shields.io](https://shields.io), for the badges
- [Compart](https://www.compart.com/en/unicode/), for the Unicode arrows behind the comment flags
- [MongoDB tutorial playlist](https://www.youtube.com/playlist?list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA), for the database groundwork
- [Mailtrap](https://mailtrap.io), for catching every test email

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<div align="center">

**Built with ❤️ by [Tertius Roach](https://tertiusroach.github.io/development-portfolio_4.00/public/index.html)**

_Good software should protect users from the worst day they are having, not amplify it._

![Status](https://img.shields.io/badge/status-active-success.svg)
![Version](https://img.shields.io/badge/version-4.7-blue.svg)
![License](https://img.shields.io/badge/license-ISC-blue.svg)

</div>

<!--| Badge links |-->

[React-badge]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/
[TypeScript-badge]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Sass-badge]: https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white
[Sass-url]: https://sass-lang.com/
[Webpack-badge]: https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black
[Webpack-url]: https://webpack.js.org/
[Node-badge]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/
[Express-badge]: https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[MongoDB-badge]: https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
