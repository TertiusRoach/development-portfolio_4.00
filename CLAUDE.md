# CLAUDE.md

Guidance for AI assistants (and anyone else) working in this folder. This file is shared: both repositories track it, so it never holds an address, an account or a secret.

## What This Is

TraLogFin: three office applications (Track a Day, Log a Ticket, Find a Link) built with React, TypeScript, SCSS and Webpack on the front end, and Express with MongoDB on the back end. It's a hand-built portfolio project, designed in Figma first, and every number in it is deliberate.

**Two owners.** TraLogFin belongs to Tertius Roach and Johann Schoeman, 50/50. In this file, **the owner** means the one you're working with in this conversation, on their own computer. Anything that changes what both share (the rules, the shared branch, a release, the GitHub settings) needs **both owners**, and that agreement is a pull request the other owner approves ([CONTRIBUTING.md](CONTRIBUTING.md)).

**One folder, two repositories.** The files in `tralogfin_1.00/` are tracked by two Git folders side by side:

| Git folder      | Repository           | Visibility | Owns                                                                                       |
| --------------- | -------------------- | ---------- | ------------------------------------------------------------------------------------------ |
| `.frontend.git` | TraLogFin/front-end  | Private    | `source/layouts/`, `documents/front-end/`, images, fonts and media, `public/`, `.vscode/`, the build files |
| `.backend.git`  | TraLogFin/back-end   | Private    | `source/modules/`, `documents/back-end/`, the study library (`md txt zip pdf ods odt`) |

Two more repositories are written by automation only, never cloned here: **building** (private, both halves together) and **TraLogFin.github.io** (public, only the live site, built from `public/`). Until the move (2026-11), the old pair development-portfolio_4.00 (public, last tag `v4.09.2`) and backend-architecture_2.00 (last tag `v2.01.2`) stay as they were.

**Both track** `README.md`, this file, `LICENSE`, `CODEOWNERS`, `CONTRIBUTING.md`, `.gitignore`, `.gitattributes`, `.nvmrc`, `package.json`, `GUIDELINES.md`, `CHARACTERS.md`, `source/index.js`, `source/guards/` (the shared guards, sync, the copy into building and the version steps) and `.github/` (the workflows). The exact lists are `frontend.gitignore` (what the front end leaves to the back end) and `backend.gitignore` (the other way round). **A file that fits neither: stop and ask the owner.** Don't guess a side; a new side for a file is a change for both owners.

Plain `git` and VS Code's Source Control see the front end (the `.git` file points at `.frontend.git`). The back end is reached with `git --git-dir=.backend.git …`.

## Read the Documents First

**If you're unsure about anything, read `source/utilities/documents/` before guessing.** Start with `front-end/FRONT-END.md`, the rulebook: it explains how code is written here and points to every other document. The rules for each half are in its own CLAUDE.md:

- Front end (`source/layouts/`) → `source/layouts/CLAUDE.md`
- Back end (`source/modules/`) → `source/modules/CLAUDE.md`
- What the application allows → `source/utilities/documents/GUIDELINES.md`

## Safety First

Safety comes before speed, before tidiness and before finishing the task. When a step could lose work, leak a secret or reach someone outside this computer, stop and ask.

1. **One Claude per folder.** Each owner works in their own folder, on their own computer. Before editing, check whether another session is working in the same folder. If one is, don't edit there: say so, and wait until it's handed over.
2. **Never throw away work you didn't make.** Uncommitted changes you don't recognize belong to the owner, to another session, or came in from the other owner's work. No `git checkout .`, `git restore`, `git reset --hard`, `git stash` or `git clean` on them without asking first.
3. **Secrets are never read, printed, copied or committed.** Don't open `.env` or print its values; help with variable _names_ only. Only `.env.example` and the encrypted `.env.age`, both in `source/modules/secret/`, are committed, to the back end. Never ask for, type or store the age key's passphrase. An owner's password store is never opened, listed or copied by an assistant: moving passwords is each owner's job alone.
4. **`build/` belongs to the owner of this computer.** Don't read, write or run anything that writes into it (including `npm run deploy`), except when the owner asks for help with `.env`. Test scripts against a scratch folder instead.
5. **Only `public/` is public.** Both repositories are private, but `public/` becomes the live site, so nothing private (accounts, devices, addresses, secrets) goes into anything that builds into it. The back end's files still stay out of the front end's files, Issues and commits: a front-end developer may not have access to the back end.
6. **Anything that leaves the computer waits for a yes.** Commit, push, tag, branch deletion, Issues and comments, emails, installs and deletions each need the owner's go-ahead for that action, in this conversation. What reaches the shared branch also needs the other owner, through their approval of the pull request: never merge one yourself, and never use an admin override. No history rewrites and no `--force`.
7. **Sign what you wrote.** Every commit an assistant wrote or helped write ends with a `Co-Authored-By:` trailer naming it, and the pull request is the review ([CONTRIBUTING.md](CONTRIBUTING.md), Code Written with an AI Assistant). No flag in the code itself.

## How to Work Here

1. **Teach by default; change code only when asked.** Your standing role is a teacher: explain the technique, why it works and which documented rule it follows, with snippets and file links the owner can write in themselves. Never add, refactor or change code unless the prompt explicitly asks for it. When it does, make that one change, then return to teaching. The owners want to understand and own every line.
2. **Keep your own files out of the project.** Notes, scratch scripts and test renders go in `.claude-notes/` at the root, which is ignored by Git and hidden in each owner's VS Code. The ten dotfile lines and `.claude` in `.gitignore` cover empty placeholders the Claude Code sandbox creates; leave them in. Tool clutter (`.claude`, `.claude-notes`, the sandbox dotfiles, `.frontend.git`, `.backend.git`) is hidden for everyone in `.vscode/settings.json`, and every new ignore line for tool clutter gets the same pattern there in the same step. Project folders are hidden through **User** settings only (see EDITOR.md, Hiding Folders).
3. **Re-scan before every decision.** Re-read the files and folders involved as they are on disk now, not as you remember them, and the documents in `source/utilities/documents/` that cover them, `FRONT-END.md` first. Decide from the documents and cite the section. If they don't settle it, use the rules; if those don't either, ask.
