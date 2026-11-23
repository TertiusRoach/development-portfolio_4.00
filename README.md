<a id="readme-top"></a>

# TraLogFin

Three office applications, **Track a Day**, **Log a Ticket** and **Find a Link**, that tilt every unclear rule toward the worker. Built by hand with React, TypeScript, SCSS and Webpack on the front end, and Express with MongoDB on the back end.

**[Open the Apps](https://tertiusroach.github.io/development-portfolio_4.00/index.html)** | [View Portfolio](https://tertiusroach.github.io/development-portfolio_4.00/public/index.html) | [Source Code](https://github.com/TertiusRoach/development-portfolio_4.00)

---

<details>
  <summary><strong>Table of Contents</strong></summary>

1. [Install and Sync](#install-and-sync)
   - [1. Merge the Folders and Install](#1-merge-the-folders-and-install)
   - [2. Install Git, Node.js and the GitHub CLI](#2-install-git-nodejs-and-the-github-cli)
   - [3. Create a GitHub Account with Two-Factor Sign-In](#3-create-a-github-account-with-two-factor-sign-in)
   - [4. Sign In from the Terminal](#4-sign-in-from-the-terminal)
   - [5. Sync](#5-sync)
2. [About The Project](#about-the-project)
   - [The Applications](#the-applications)
   - [Built With](#built-with)
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

## Install and Sync

TraLogFin lives in one folder, `tralogfin_1.00`, tracked by two repositories at once:

| Repository                     | Visibility | Holds                                                                                   |
| ------------------------------ | ---------- | --------------------------------------------------------------------------------------- |
| **development-portfolio_4.00** | Public     | The front end: `source/layouts/`, the front-end documents, images, fonts and media, `public/` |
| **backend-architecture_2.00**  | Private    | The back end: `source/modules/` (the server, the data, the guards), the back-end documents, the study library |

Both track the shared files: this README, `CLAUDE.md`, `.gitignore`, `package.json`, `setup.js`, `GUIDELINES.md` and `CHARACTERS.md`. Which file belongs where is listed in `frontend.gitignore` and `backend.gitignore` at the root.

> **The back end is private.** Without access to backend-architecture_2.00 you get the front end only: every design and every line of page code, but it won't build without `source/modules/`. The full setup is for the owner and the collaborators the owner invites. Links in these documents that lead into the private half are marked **(private)**.

On a new computer, do steps 2 to 4 first, then step 1.

### 1. Merge the Folders and Install

One script downloads both repositories into one folder and sets them up.

1. On this repository's GitHub page, click the green **`<> Code`** button, then **Download ZIP**, and unpack it anywhere.
2. Open a terminal inside the unpacked folder and run:

   ```bash
   node setup.js ~/Documents/Develop/tralogfin_1.00
   ```

   On Windows (PowerShell): `node setup.js $HOME\Documents\Develop\tralogfin_1.00`. Add `--https` at the end if you signed in with HTTPS in step 4.

3. `setup.js` tells you what it does at each step:
   - it downloads both repositories into the empty folder;
   - it puts each one on its current branch;
   - it gives each one its list of files to leave alone;
   - it installs the guards that stop private files and secrets from reaching the public repository;
   - it runs `npm install`.

   It only ever builds into an empty folder, so it can't overwrite anything. Without access to the private repository, it says so and sets up the front end alone.

4. Start the app, then delete the unpacked zip:

   ```bash
   cd ~/Documents/Develop/tralogfin_1.00
   npm run app
   ```

   The app opens on `http://localhost:8080`.

**Only want to look at the front end?** A plain clone works too. `--no-save` keeps `package-lock.json` as it is:

```bash
git clone https://github.com/TertiusRoach/development-portfolio_4.00.git
cd development-portfolio_4.00
npm install --no-save
```

### 2. Install Git, Node.js and the GitHub CLI

**Git** keeps the history of every file. **Node.js** runs the tools and the server. The **GitHub CLI** (`gh`) signs you in to GitHub from the terminal.

| System                     | Git                              | GitHub CLI                       |
| -------------------------- | -------------------------------- | -------------------------------- |
| Linux (Ubuntu, Linux Mint) | `sudo apt install git`           | `sudo apt install gh`            |
| macOS                      | `xcode-select --install`         | `brew install gh` ([Homebrew](https://brew.sh)) |
| Windows (PowerShell)       | `winget install --id Git.Git -e` | `winget install --id GitHub.cli` |

**Node.js**, through nvm, which lets you switch versions later. On Linux and macOS:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

Close and reopen the terminal, then:

```bash
nvm install --lts
```

On Windows: `winget install CoreyButler.NVMforWindows`, reopen the terminal, then `nvm install lts` and `nvm use lts`.

**Check all three,** in a new terminal:

```bash
git --version
node --version
gh --version
```

**Tell Git who you are.** Every commit carries this name and email:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

### 3. Create a GitHub Account with Two-Factor Sign-In

1. Sign up at [github.com/signup](https://github.com/signup). Use a long passphrase you don't use anywhere else: four or five random words, like `correct-horse-battery-staple` (but never that one: it's the world's most famous example).
2. Turn on two-factor sign-in, so a stolen password alone can't open your account:
   1. Install **Google Authenticator** on your phone.
   2. On GitHub: your picture (top right) → **Settings** → **Password and authentication** → **Enable two-factor authentication**.
   3. Choose **Authenticator app**, and scan the QR code with Google Authenticator.
   4. Type the 6-digit code the app shows. A new code appears every 30 seconds.
   5. **Save the recovery codes somewhere safe,** such as a password manager or a printed page in a drawer. If your phone is lost, they're the only way back into your account.
3. To work on the private back end, ask the owner to invite you. You'll get an email; accept the invitation on GitHub.

### 4. Sign In from the Terminal

GitHub doesn't accept your account password for `git push`. A key on your computer replaces it, and `gh` sets that up for you:

```bash
gh auth login
```

Answer the questions: **GitHub.com**, then **SSH**, then **Yes** to make a new SSH key, then **Login with a web browser**. Copy the one-time code it shows, press `Enter`, and paste the code into the page that opens. Your authenticator app confirms the sign-in.

Check it worked:

```bash
ssh -T git@github.com
```

You should see: `Hi <your name>! You've successfully authenticated…`. If SSH is blocked on your network, run `gh auth login` again and choose **HTTPS** instead, then use `--https` with `setup.js` in step 1.

### 5. Sync

**Opening the folder in VS Code** pulls both repositories, but only when nothing here would be overwritten (fast-forward only). It then shows where each one stands and starts the app. It never commits or pushes: that's always your decision.

| Command                               | What it does                                                                          |
| ------------------------------------- | ------------------------------------------------------------------------------------- |
| `npm run status`                      | Each repository's branch, how far ahead or behind GitHub, and what changed. Changes nothing |
| `npm run pull`                        | Pulls both, fast-forward only, then the status                                        |
| `npm run sync -- "Describe the change"` | The whole round: pull both, check, commit both with one message, push both            |

**What `npm run sync` checks before it commits:**
- the two repositories are on a matching pair of branches;
- every new file belongs to one side, so nothing is left unowned.

**When it commits and pushes:** each commit names the other repository's commit, so the pair can always be found again. The guards run on every commit and push. A file from the wrong side, a `.env` file, or anything shaped like a password, key or token stops it, with a plain sentence saying why.

VS Code's **Source Control** panel shows the public front end only. Use `npm run sync` to commit both sides together.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## About The Project

Track a Day, Log a Ticket, Find a Link: three applications inspired by the gaps I kept running into across corporate environments, from film production and education institutes to government departments and the events industry. Together they fill one specific need: an office suite that is easy to use and genuinely helpful. It solves workplace chaos while daring to improve the politics that come with the territory. It is the kind of tool you open, do the thing, and get back to your life. Track overtime without turning it into a second job, file tickets without feeling like you are writing a novel for an audience that does not exist, and keep every important company link in one place so nobody has to spelunk through spreadsheets, bookmarks, and half-remembered URLs ever again.

This project started the honest way, with a mistake I never wanted to repeat. While moderating multiple studios at Akademia, I accidentally deleted someone's ticket on a clunky system I did not build. That moment burned in the lesson: good software should protect users from the worst day they are having, not amplify it. TraLogFin is me building the system I wish I had then: cleaner flows, safer patterns, and a user experience that does not ask for permission to waste your time.

Where it is going is simple and ambitious at the same time. TraLogFin is becoming a small, sharp suite that scales without losing its manners. A front end that stays structured and readable as it grows, a workflow that stays fast even when the data gets real, and a codebase that welcomes contributors because the intent is obvious the moment you open the project. If you like tools that value clarity, speed, and practical design over ceremony, you are exactly the kind of person I want reading this, using it, and helping push it forward.

TraLogFin is a fully remote office suite for two kinds of company: the ones that burn people out, and the ones that are trying not to. Every rule in it is written to tilt slightly toward the worker. When something is unclear, the employee gets the benefit of the doubt, because the people doing the work are the ones who need protecting.

It's tested with a cast of 18 characters across two rival companies, each one built to break a specific rule. Meet them in **[CHARACTERS.md](source/utilities/documents/CHARACTERS.md)**.

### The Applications

Each application asks one question. The answer becomes a `roleName` class on `<div id="${pageName}-body">` and decides which page opens. What the user may actually do there is decided by **[GUIDELINES.md](source/utilities/documents/GUIDELINES.md)**.

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

The full map from toggle to page is in **[TOGGLES.md](source/utilities/documents/front-end/TOGGLES.md)**.

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

## Usage

### Terminal Commands

Open VS Code and press **Ctrl + `** to open the terminal. Then:

```bash
# Launch the front end (webpack-dev-server on http://localhost:8080)
npm run app

# Close the development server (frees port 8080)
npm run stop

# Compile the project into public/
npm run deploy

# Both repositories: where they stand, pull, or the whole sync round (Install and Sync, step 5)
npm run status
npm run pull
npm run sync -- "Describe what changed"

# The back end (needs the private half): the new server on http://localhost:3000/api
npm run server

# The old login server on port 3000
cd source/modules/server/MongoDB
npx nodemon landing
```

> **Tip:** `npm run app` is an alias for `npm run launch`. VS Code runs `npm run pull` and then `npm run app` automatically when you open the folder, through `.vscode/tasks.json`. More shortcuts and editor setup are in **[EDITOR.md](source/utilities/documents/back-end/EDITOR.md) (private)**.

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

The application rules are tested with the characters in **[CHARACTERS.md](source/utilities/documents/CHARACTERS.md)**: each one lists the rules it exists to break.

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

| Container    | HTML Tag    | ID Pattern             | Job                               |
| ------------ | ----------- | ---------------------- | --------------------------------- |
| **Overlay**  | `<section>` | `${pageName}-overlay`  | Entry layer, focused flows on top |
| **Main**     | `<main>`    | `${pageName}-main`     | The primary workspace             |
| **Leftbar**  | `<aside>`   | `${pageName}-leftbar`  | Actions and guidance              |
| **Rightbar** | `<aside>`   | `${pageName}-rightbar` | Context and feedback              |
| **Header**   | `<header>`  | `${pageName}-header`   | Controls and configuration        |
| **Footer**   | `<footer>`  | `${pageName}-footer`   | Short status messages             |

What each container does in each application is in **[CONTAINERS.md](source/utilities/documents/front-end/CONTAINERS.md)**. The state classes they switch between (`.active`, `.expanded`, `.locked-${blockName}`…) are in the **[FRONT-END rulebook](source/utilities/documents/front-end/FRONT-END.md#state-classes)**.

### Components

Components are the building blocks in `source/layouts/components/`. Every one follows the same pattern, so once you can read one, you can read them all:

- **One folder per variant,** with a `.tsx` for markup, a `.scss` for styles and a `.ts` for `createClass()`. Larger components split their styles into a `pipeline/` (size, grid, flex, tint, move, corners).
- **Bracket syntax** shows each prop's type at a glance: `'[overtime]'`, `'<main>'`, `'-left-'`, `'~dark~'`, `'(blue)'`, `'{button}'`.
- **Every component scales** through three mixins, `desktop-landscape`, `mobile-portrait` and `tablet-squaring`, so it fits phones, tablets and desktops alike.
- **Ten colours** from `styles/Palettes.scss`, each in a dark and a light shade.
- **Comment flags** (`//--|🠊 … 🠈|--\\`) make the structure of every file readable at a glance.

All of it, with examples, is in the **[FRONT-END rulebook](source/utilities/documents/front-end/FRONT-END.md)**.

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
tralogfin_1.00/
├── .frontend.git/                   # This repository (public)
├── .backend.git/                    # backend-architecture_2.00 (private)
├── .vscode/
│   ├── launch.json                  # Run Application (Webpack + Chrome)
│   ├── settings.json
│   └── tasks.json                   # Pulls both repositories, then runs `npm run app`, on folder open
├── build/                           # Local only, holds .env (ignored by both)
├── public/                          # Final product for users (compiled)
├── source/
│   ├── assets/                      # One folder per file type
│   ├── layouts/                     # The front end
│   │   ├── components/
│   │   ├── containers/
│   │   ├── scripts/
│   │   ├── styles/
│   │   ├── tools/
│   │   ├── CLAUDE.md                # Front-end rules for AI assistants
│   │   └── package.json             # The front end's packages
│   ├── modules/                     # The back end (private)
│   ├── utilities/
│   │   ├── documents/
│   │   │   ├── back-end/            # Private
│   │   │   ├── front-end/
│   │   │   ├── CHARACTERS.md        # Shared by both sides
│   │   │   └── GUIDELINES.md        # Shared by both sides
│   │   └── vendors/
│   ├── index.html
│   ├── index.scss
│   ├── index.tsx
│   └── types.d.ts
├── .gitignore                       # Shared: what neither repository tracks
├── frontend.gitignore               # What this repository leaves to the back end
├── backend.gitignore                # What the back end leaves to this repository
├── CLAUDE.md                        # Shared working rules for AI assistants
├── README.md
├── package.json                     # Shared: the scripts and the two workspaces
├── package-lock.json
├── setup.js                         # Shared: builds this folder on a new machine
├── tsconfig.json
└── webpack.config.js
```

<details>
<summary><strong>Directory Descriptions</strong></summary>

#### `public/`

Compiled output and static entry points. This is the browser-facing product, generated by `npm run deploy`. If it is in `public/`, it is assumed safe to ship. Do not edit it by hand; Webpack wipes it on every build.

#### `source/`

All authored code and assets. This is the only place you should be editing during development.

| File         | Purpose                                                                     |
| ------------ | --------------------------------------------------------------------------- |
| `index.html` | HTML shell with one `<div id="${pageName}-body">` per page                  |
| `index.tsx`  | Entry point: renders every page and activates one with `viewBody()`         |
| `index.scss` | Root stylesheet                                                             |
| `types.d.ts` | Global type declarations                                                    |

#### `source/assets/`

Typed asset storage. Keeping formats separated avoids build edge cases and reduces accidental misuse. Images, fonts and media belong to this repository; the documents (`md`, `txt`, `zip`, `pdf`, `ods`, `odt`) are the owner's study library and belong to the private back end.

| Directory    | Purpose                                                 |
| ------------ | ------------------------------------------------------- |
| `gif-files/` | Animated media used for UI accents or demos             |
| `ico-files/` | Icon formats for browser and OS surfaces                |
| `jpg-files/` | Photos and compressed imagery                           |
| `mp3-files/` | Audio assets                                            |
| `mp4-files/` | Video assets                                            |
| `ods-files/` | Spreadsheets that plan each application's dataset (private) |
| `odt-files/` | Written planning documents and character descriptions (private) |
| `pdf-files/` | Portable documents: character sheets, original planning (private) |
| `png-files/` | Lossless graphics and UI images                         |
| `psd-files/` | Photoshop source files kept for design iteration        |
| `svg-files/` | Vector assets, icons, logos, themeable graphics         |
| `ttf-files/` | Fonts                                                   |
| `txt-files/` | Plain text notes and content (private) |
| `xcf-files/` | GIMP source files                                       |
| `zip-files/` | Archived bundles and imports (private) |

#### `source/layouts/`

The UI system. This is where the application becomes readable. The split between components and containers is intentional: small semantic primitives first, then page scaffolding that composes them.

**Components:** atomic semantic building blocks.

| Component     | Variants                                               |
| ------------- | ------------------------------------------------------ |
| `Article/`    | `loading` · `updates`                                  |
| `Aside/`      | `characters`                                           |
| `Button/`     | `default` · `profile` · `routing` · `stretch`          |
| `Division/`   | `conveyor` · `fullscreen` · `sweeping` · `testing`     |
| `Figure/`     | `default` · `loading` · `rotation`                     |
| `Form/`       | `login` · `password` · `register` · `reset` · `verify` |
| `Label/`      | `selection` · `switching` · `textarea`                 |
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
| `scripts/` | One script per block pair: `Head_Foot.ts`, `Left_Right.ts`, `Main_Over.ts`                |
| `styles/`  | Shared styling system: `Palettes`, `Mixins`, `Global`, `Skeleton`, `Transition`, `Barrel` |
| `tools/`   | Layout helpers: `conversions.ts`, `frameworks.ts`, `information.ts`, `navigation.ts`, `synching.ts`, `utilities.ts` |

#### `source/modules/`

The back end, in the private repository. Setup is in [MODULES.md](source/utilities/documents/back-end/MODULES.md) (private), and how data travels is in [DATA.md](source/utilities/documents/back-end/DATA.md) (private).

| Folder        | Purpose                                                                       |
| ------------- | ----------------------------------------------------------------------------- |
| `components/` | The `.jsx` twins of `layouts/components/`                                     |
| `containers/` | One route file per page, one file per block, and the `.jsx` twins             |
| `context/`    | React context for email and password state                                    |
| `guards/`     | The structure guard, and the leak guards that keep the private half private   |
| `routes/`     | One file per application (reserved)                                           |
| `scripts/`    | The back half of each block pair                                              |
| `server/`     | The Express servers, MongoDB, MySQL, IndexedDB and their testing data         |
| `tools/`      | Shared server helpers, the backup copier and the data converter               |

#### `source/utilities/`

Reusable utilities, references and internal documentation.

| Utility      | Purpose                                                                       |
| ------------ | ----------------------------------------------------------------------------- |
| `documents/` | All project documentation (see [Documentation](#documentation))               |
| `vendors/`   | Third-party code kept separate from authored logic: Bootstrap, Font Awesome, jQuery, effects and guidance (the back end keeps its own `execute/` and RequireJS) |

#### `.vscode/`

Editor configuration for consistent debugging and project workflows. What each file does is in [EDITOR.md](source/utilities/documents/back-end/EDITOR.md#what-vscode-does) (private).

</details>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Documentation

Everything lives in **`source/utilities/documents/`**, split three ways: shared documents at the top, then **`front-end/`** (public) and **`back-end/`** (private). If you're unsure about anything, start with the rulebook for your side.

#### Shared

| Document                                                      | What it answers                                                                                 |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| **[GUIDELINES.md](source/utilities/documents/GUIDELINES.md)** | What the application allows: roles, permissions, clock-ins, overtime, ghost hours, offline mode |
| **[CHARACTERS.md](source/utilities/documents/CHARACTERS.md)** | The 18 test characters, their psychology and the rules they test                                |

#### Front End

| Document                                                                | What it answers                                                                 |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| **[FRONT-END.md](source/utilities/documents/front-end/FRONT-END.md)**   | How code is written: philosophy, naming, components, scaling, colours, comments |
| **[COMPONENTS.md](source/utilities/documents/front-end/COMPONENTS.md)** | The folder structure both halves share, and the `.tsx`/`.jsx` twins             |
| **[TOGGLES.md](source/utilities/documents/front-end/TOGGLES.md)**       | Which page each toggle opens                                                    |
| **[CONTAINERS.md](source/utilities/documents/front-end/CONTAINERS.md)** | The six containers and what they do in each application                         |
| **[CONTEXTS.md](source/utilities/documents/front-end/CONTEXTS.md)**     | How the `<Form>`s on a page share what a user types                             |
| **[TABLE.md](source/utilities/documents/front-end/TABLE.md)**           | When to use `<table>`, the `<Table>` component, ISO weeks                       |

#### Back End (Private)

| Document                                                                     | What it answers                                                        |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| **[BACK-END.md](source/utilities/documents/back-end/BACK-END.md)** (private)     | The back end's front page, and how the server treats people            |
| **[SERVER.md](source/utilities/documents/back-end/SERVER.md)** (private)         | How `source/modules/` is organised, its endpoints and build order      |
| **[CONTAINERS.md](source/utilities/documents/back-end/CONTAINERS.md)** (private) | What each page and block asks of the server                            |
| **[DATA.md](source/utilities/documents/back-end/DATA.md)** (private)             | How data travels, MongoDB-to-MySQL rules, offline storage              |
| **[MODULES.md](source/utilities/documents/back-end/MODULES.md)** (private)       | Database, secrets, test emails and server setup on any OS              |
| **[OPERATIONS.md](source/utilities/documents/back-end/OPERATIONS.md)** (private) | The machines: shares, the host server, backups, the phone              |
| **[GITHUB.md](source/utilities/documents/back-end/GITHUB.md)** (private)         | Machine setup, releases, tags, the two repositories, fixing Git trouble |
| **[EDITOR.md](source/utilities/documents/back-end/EDITOR.md)** (private)         | VS Code shortcuts, `.vscode/`, keeping the Explorer readable           |
| **[REFERENCE.md](source/utilities/documents/back-end/REFERENCE.md)** (private)   | The template this README follows                                       |

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

The full list of decisions waiting to be built is in the [FRONT-END rulebook](source/utilities/documents/front-end/FRONT-END.md#10-parked-for-later), and every release so far is in the [status log](source/utilities/documents/back-end/GITHUB.md#10-status-log) (private).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Contributing

Contributions are welcome, as long as they keep the project readable. Before you change anything:

1. **Read the [FRONT-END rulebook](source/utilities/documents/front-end/FRONT-END.md).** Readability beats brevity, match what's already there, one step at a time.
2. **Check [GUIDELINES.md](source/utilities/documents/GUIDELINES.md)** before touching anything that changes what a user is allowed to do.
3. **Follow the Git naming:** branches are `#.##` (`4.09`), tags are `v#.##` (`v4.09`), and tags are the archive. Each release goes Confirm → Tag → Publish to main → Next branch → Delete old branch. The commands are in [GITHUB.md](source/utilities/documents/back-end/GITHUB.md#4-finish-a-version-and-start-the-next) (private).
4. **Using an AI assistant?** Point it at [CLAUDE.md](CLAUDE.md) first.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## License

Distributed under the ISC License, as declared in `package.json`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Contact

**Tertius Roach**: [Portfolio](https://tertiusroach.github.io/development-portfolio_4.00/public/index.html) · [GitHub](https://github.com/TertiusRoach) · [tertius.roach@gmail.com](mailto:tertius.roach@gmail.com)

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
