# Contributing

How the two owners of TraLogFin work together. Shared by front-end and back-end. Setting up a computer is in the [README](README.md#install-and-sync); the Git commands behind each step are in [GITHUB.md](source/utilities/documents/back-end/GITHUB.md) (private).

---

## 1. Four Repositories

| Repository              | Visibility | Holds                                   | Written by           |
| ----------------------- | ---------- | --------------------------------------- | -------------------- |
| **front-end**           | Private    | `source/layouts/`, styles, assets, docs | Both owners          |
| **back-end**            | Private    | `source/modules/`, the server, the data | Both owners          |
| **building**            | Private    | Both halves together, read-only         | The deploy, only     |
| **TraLogFin.github.io** | Public     | Only the live site, built from `public/` | A version tag, only |

**The rule.** Only `public/` is public. Nothing private (accounts, devices, addresses, secrets) goes into anything that builds into it.

---

## 2. Branches

**What it is.** Every version has one shared branch, and each owner has a personal branch beside it, named after their GitHub account:

```
1.01                     the shared branch: protected, it moves only by approved pull requests
1.01-TertiusRoach        Tertius's work
1.01-JohannSchoeman      Johann's work
```

**The rule.**

- **The same number everywhere.** front-end, back-end and building are always on the same `1.##`.
- **You commit only to your own branch.** Nobody commits to the shared branch or to the other owner's branch.
- **Only the same major merges.** `1.##` merges into `1.##`, never into `2.##`.

**How.** Sync your side; it pulls, commits, puts your work on top of anything new and pushes your personal branch:

```bash
npm run sync:frontend -w source/layouts -- "Describe what changed"
npm run sync:backend -w source/modules -- "Describe what changed"
```

**What goes wrong.** Committing on the shared branch: GitHub refuses the push. Move the commit to your branch with `git switch 1.01-<you>` and `git cherry-pick <commit>`, then sync.

---

## 3. Pull Requests

**What it is.** A pull request asks to bring your branch into the shared one. It's also the review: the other owner reads it, asks, and approves.

**The rule.**

- **The other owner approves,** and GitHub's checks pass (`.github/workflows/checks.yml`): `version`, the version guard (`1.01-<name>` into `1.01` only, and `1.01` is the newest number in all three repositories); `files`, the commit and push guards over every commit in the pull request, and no two names that differ only in capitals; and on front-end `types`, the type check and a production build. `structure` runs `guard:verify` too, but only reports until its known problems are tickets. `CODEOWNERS` asks for the review on every file.
- **Merge with a merge commit,** never squash or rebase, so both personal branches can catch up without rewriting anything.
- **An admin override is for emergencies only.** GitHub logs it; tell the other owner the same day.

**How.**

```bash
gh pr create --base 1.01 --head 1.01-TertiusRoach --fill
```

Keep one open pull request per owner and per repository; later syncs add to it. After it merges, your next sync brings the shared branch into your personal branch.

**What goes wrong.** Both of you changed the same lines: the pull request shows a conflict. Sync your branch first; it stops and explains ([GITHUB.md, Both Changed the Same Lines](source/utilities/documents/back-end/GITHUB.md#3-both-changed-the-same-lines)). Never resolve the other owner's lines without asking.

---

## 4. Finishing a Version

**What it is.** When `1.01` is done, it's archived as a tag and the next number opens. The tag keeps everything, so deleting the branches loses nothing.

**The rule.** Both owners agree, and both personal pull requests are merged first. Then one command does it in front-end, back-end and building at once:

| Step                                   | Example                                        |
| -------------------------------------- | ---------------------------------------------- |
| Tag the finished shared branch          | `v1.01`                                        |
| Open the next shared branch from it    | `1.02`                                         |
| Open both personal branches from that  | `1.02-TertiusRoach`, `1.02-JohannSchoeman`     |
| Move the branch protection             | from `1.01` to `1.02`                          |
| Delete the old three                   | `1.01`, `1.01-TertiusRoach`, `1.01-JohannSchoeman` |

**How.**

```bash
node source/guards/version.js finish 1.01         # shows the plan, changes nothing
node source/guards/version.js finish 1.01 --go    # does it
```

Then each owner switches every computer to `1.02-<you>`; sync says so until they do ([GITHUB.md, Finish a Version](source/utilities/documents/back-end/GITHUB.md#5-finish-a-version)).

**The first example.** `1.00` is the starting point the move brings in. It's archived straight away as `v1.00`, so the pattern is tried once before real work depends on it, and daily work starts on `1.01`.

**What goes wrong.** A personal branch still has commits `1.01` doesn't, or a pull request is still open: the command refuses and changes nothing. It stops halfway (no internet): run the same line again; what's done is skipped.

---

## 5. Releases

**Publishing** puts building's `public/` on the live site while the version stays open: a tag `v1.01.0`, then `v1.01.1` for a later fix. **A release** is a major version: TraLogFin 1 is built on `1.00`, `1.01` and so on, and when both owners approve it, the newest is published and work moves to `2.00` in all three repositories.

```bash
node source/guards/version.js publish --go                # publish: tags building v1.##.<next>
node source/guards/version.js finish 1.07 --major --go    # after a publish, a release: archives 1.07, opens 2.00
```

Each shows its plan without `--go`. The tag runs **Publish the live site** in building ([GITHUB.md, The Live Site](source/utilities/documents/back-end/GITHUB.md#the-live-site)).

---

## 6. Secrets and Guards

- **`.env` is never committed.** Each owner has their own age key; `secret/.env.age` opens for both ([PIPELINE.md, The Secrets Files](source/utilities/documents/back-end/PIPELINE.md#2-the-secrets-files), private).
- **Never skip a guard** with `--no-verify`. If a guard is wrong, fix the guard in a pull request.
- **Someone leaves:** remove their key from `secret/recipient.txt`, lock again, and change every secret they could read.
- **The whole guide** to accounts, keys and computers is [SECURITY.md](source/utilities/documents/back-end/SECURITY.md) (private).

---

## 7. Code Written with an AI Assistant

The pull request is the review. A commit an assistant wrote, or helped write, ends with a trailer line naming it, for example:

```
Co-Authored-By: Claude <noreply@anthropic.com>
```

So `git log` shows which work had help, and the reviewer knows where to look twice. No comment flags in the code itself.

---

## 8. Legal

Proprietary: see [LICENSE](LICENSE). Copyright both owners, all rights reserved. Who owns what, how decisions are made and what happens if one owner leaves belongs in a written agreement between the owners, not in this repository.
