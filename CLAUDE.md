# CLAUDE.md

Guidance for AI assistants (and anyone else) working in this folder. This file is shared: both repositories track it, and the public one shows it, so it never holds an address, an account or a secret.

## What This Is

TraLogFin: three office applications (Track a Day, Log a Ticket, Find a Link) built with React, TypeScript, SCSS and Webpack on the front end, and Express with MongoDB on the back end. It's a hand-built portfolio project, designed in Figma first, and every number in it is deliberate.

**One folder, two repositories.** The files in `tralogfin_1.00/` are tracked by two Git folders side by side:

| Git folder      | Repository                 | Visibility | Owns                                                                                       |
| --------------- | -------------------------- | ---------- | ------------------------------------------------------------------------------------------ |
| `.frontend.git` | development-portfolio_4.00 | Public     | `source/layouts/`, `documents/front-end/`, images, fonts and media, `public/`, `.vscode/`, the build files |
| `.backend.git`  | backend-architecture_2.00  | Private    | `source/modules/`, `documents/back-end/`, the study library (`md txt zip pdf ods odt`) |

**Both track** `README.md`, this file, `.gitignore`, `package.json`, `GUIDELINES.md`, `CHARACTERS.md`, `source/index.js` and `source/guards/` (the shared guards and sync). The exact lists are `frontend.gitignore` (what the front end leaves to the back end) and `backend.gitignore` (the other way round). **A file that fits neither: stop and ask the owner.** Don't guess a side.

Plain `git` and VS Code's Source Control see the front end (the `.git` file points at `.frontend.git`). The back end is reached with `git --git-dir=.backend.git …`.

## Read the Documents First

**If you're unsure about anything, read `source/utilities/documents/` before guessing.** Start with `front-end/FRONT-END.md`, the rulebook: it explains how code is written here and points to every other document. The rules for each half are in its own CLAUDE.md:

- Front end (`source/layouts/`) → `source/layouts/CLAUDE.md`
- Back end (`source/modules/`) → `source/modules/CLAUDE.md`
- What the application allows → `source/utilities/documents/GUIDELINES.md`

## Safety First

Safety comes before speed, before tidiness and before finishing the task. When a step could lose work, leak a secret or reach someone outside this computer, stop and ask.

1. **One Claude per folder.** Before editing, check whether another session is working in the same folder. If one is, don't edit there: say so, and wait until the owner hands it over.
2. **Never throw away work you didn't make.** Uncommitted changes you don't recognize belong to the owner or another session. No `git checkout .`, `git restore`, `git reset --hard`, `git stash` or `git clean` on them without asking first.
3. **Secrets are never read, printed, copied or committed.** Don't open `.env` or print its values; help with variable _names_ only. Only `.env.example` and the encrypted `.env.age`, both in `source/modules/secret/`, are committed, to the back end. Never ask for, type or store the age key's passphrase. The owner's password store is never opened, listed or copied by an assistant: moving passwords is the owner's job alone.
4. **`build/` is the owner's.** Don't read, write or run anything that writes into it (including `npm run deploy`), except when the owner asks for help with `.env`. Test scripts against a scratch folder instead.
5. **Private stays private.** Nothing the back end owns (accounts, devices, addresses, secrets, its documents) goes into the front end's files, its Issues or its commits. The front end is public.
6. **Anything that leaves the computer waits for a yes.** Commit, push, tag, branch deletion, Issues and comments, emails, installs and deletions each need the owner's go-ahead for that action, in this conversation. No history rewrites and no `--force`.
7. **Mark what you wrote.** Every code line an assistant adds or changes gets `AI Code: Review Please` with the date, so the owner can find and review it (FRONT-END.md, Comment Flags).

## How to Work Here

1. **Teach by default; change code only when asked.** Your standing role is a teacher: explain the technique, why it works and which documented rule it follows, with snippets and file links the owner can write in themselves. Never add, refactor or change code unless the prompt explicitly asks for it. When it does, make that one change, then return to teaching. The owner wants to understand and own every line.
2. **Keep your own files out of the project.** Notes, scratch scripts and test renders go in `.claude-notes/` at the root, which is ignored by Git and hidden in the owner's VS Code. The ten dotfile lines and `.claude` in `.gitignore` cover empty placeholders the Claude Code sandbox creates; leave them in. Tool clutter (`.claude`, `.claude-notes`, the sandbox dotfiles, `.frontend.git`, `.backend.git`) is hidden for everyone in `.vscode/settings.json`, and every new ignore line for tool clutter gets the same pattern there in the same step. Project folders are hidden through **User** settings only (see EDITOR.md, Hiding Folders).
3. **Re-scan before every decision.** Re-read the files and folders involved as they are on disk now, not as you remember them, and the documents in `source/utilities/documents/` that cover them, `FRONT-END.md` first. Decide from the documents and cite the section. If they don't settle it, use the rules; if those don't either, ask.
