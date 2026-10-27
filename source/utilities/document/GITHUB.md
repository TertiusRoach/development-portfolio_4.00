# GitHub Workflow

How this repository is set up, released, archived and kept in sync across machines. I'm the only developer, and I work on more than one computer, so every rule here is built around one person who wants to experiment freely without ever losing a working version.

Every command block is meant to be copied and pasted as is. Where a version number appears, the examples use the current cycle (`4.7`) and the next one (`4.8`); swap them for whatever cycle you're in.

---

## Contents

1. [Naming Rules](#1-naming-rules)
2. [Machine Setup](#2-machine-setup)
3. [Release Cycle](#3-release-cycle)
4. [One-Time Cleanup](#4-one-time-cleanup)
5. [Tags](#5-tags)
6. [Multi-Device Sync](#6-multi-device-sync)
7. [Emergency Operations](#7-emergency-operations)
8. [Edge Cases](#8-edge-cases)
9. [GitHub Issues](#9-github-issues)
10. [Status Log](#10-status-log)
11. [References](#11-references)

---

## 1. Naming Rules

| Thing     | Format   | Example | Purpose                                              |
| --------- | -------- | ------- | ---------------------------------------------------- |
| Branch    | `#.#`    | `4.7`   | The version I'm working on right now                 |
| Tag       | `v#.##`  | `v4.07` | A permanent, frozen copy of a finished version       |
| `main`    | `main`   | `main`  | The published version, always equal to the last tag  |

Each `#` is a single digit (0–9). Tags are always zero-padded, so `4.7` becomes `v4.07`, never `v4.7`.

**Tags are the archive.** GitHub turns every tag into a downloadable `.zip` and `.tar.gz` on the repository's **Tags** page, so once a version is tagged it's saved. That's why old branches get deleted after tagging: the tag already holds everything, and I can always go back to it if I mess up.

---

## 2. Machine Setup

Do this once on any new computer that needs to work on the repository.

### 2.1 Install Git

**Windows** (PowerShell):

```powershell
winget install --id Git.Git -e
```

**macOS:**

```bash
xcode-select --install
```

**Linux** (Ubuntu, Debian):

```bash
sudo apt update
sudo apt install -y git
```

Close and reopen the terminal, then check that it worked:

```bash
git --version
```

### 2.2 Set Your Identity

Every commit is stamped with this name and email. Git refuses to commit without it, and it has to match the GitHub account. Same on every operating system:

```bash
git config --global user.name "TertiusRoach"
git config --global user.email "tertius.roach@gmail.com"
git config --global init.defaultBranch main
git config --global core.editor "code --wait"
```

Check it with `git config --list`.

### 2.3 Connect to GitHub with SSH

GitHub doesn't accept account passwords in the terminal. An SSH key is set up once per machine, and after that pushing and pulling just works.

**Step 1: Create the key** (same on every operating system). Press `Enter` to accept the default location. A passphrase is optional.

```bash
ssh-keygen -t ed25519 -C "tertius.roach@gmail.com"
```

**Step 2: Load the key**

Windows (PowerShell as Administrator):

```powershell
Get-Service ssh-agent | Set-Service -StartupType Automatic
Start-Service ssh-agent
ssh-add $env:USERPROFILE\.ssh\id_ed25519
```

macOS:

```bash
eval "$(ssh-agent -s)"
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

Linux:

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

**Step 3: Copy the public key**

| System  | Command                                                        |
| ------- | -------------------------------------------------------------- |
| Windows | `Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub \| Set-Clipboard` |
| macOS   | `pbcopy < ~/.ssh/id_ed25519.pub`                               |
| Linux   | `cat ~/.ssh/id_ed25519.pub` (then select and copy the output)  |

**Step 4: Add it to GitHub.** Go to [github.com/settings/keys](https://github.com/settings/keys), click **New SSH key**, give it the machine's name (for example `Ubuntu Studio Desktop`), paste, and save.

**Step 5: Test the connection**

```bash
ssh -T git@github.com
```

You should see: `Hi TertiusRoach! You've successfully authenticated, but GitHub does not provide shell access.`

> **Common mistake:** if GitHub says "Key is invalid", the private key was copied instead of the public one. The public key always ends in `.pub`. Never share the file without `.pub`.

### 2.4 Install Node.js

Node runs the development server. NVM (Node Version Manager) installs it without admin rights and makes switching versions easy.

**Windows:** install [NVM for Windows](https://github.com/coreybutler/nvm-windows):

```powershell
winget install CoreyButler.NVMforWindows
```

Close and reopen the terminal, then:

```powershell
nvm install lts
nvm use lts
```

**macOS and Linux:**

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

Close and reopen the terminal (the installer adds NVM to `~/.bashrc` on Linux and `~/.zshrc` on macOS), then:

```bash
nvm install --lts
nvm alias default 'lts/*'
```

Check both:

```bash
node --version
npm --version
```

> If `npm` isn't found inside VS Code but works in a normal terminal, VS Code is using the wrong shell. The fix is in [EDITOR.md](EDITOR.md#terminal-profile).

### 2.5 Clone the Repository

```bash
git clone git@github.com:TertiusRoach/development-portfolio_4.00.git
cd development-portfolio_4.00
git fetch --all --prune
git checkout 4.7
npm install
```

`fetch --all --prune` first teaches the new machine which branches exist on GitHub, otherwise `checkout` might not find `4.7`.

---

## 3. Release Cycle

Run this when the current version is finished, tested and ready to publish. The order never changes:

```
Confirm → Tag → Publish to main → Next branch → Delete old branch
```

### Step 1: Confirm

```bash
git checkout 4.7
git status
```

You want to see `nothing to commit, working tree clean`. If there are changes, commit them first. Never release with loose changes lying around.

### Step 2: Tag

The tag is the backup, so it comes first. An annotated tag (`-a`) stores the date, the author and a message, which a plain tag doesn't.

```bash
git tag -a v4.07 -m "Stable archive of branch 4.7"
git push origin v4.07
```

### Step 3: Publish to `main`

`main` becomes an exact copy of the finished branch.

```bash
git checkout main
git pull origin main
git reset --hard 4.7
git push --force-with-lease origin main
```

> **Why `reset` instead of `merge`?** Working across machines makes branches drift apart, and a merge then either fails or leaves a messy history. `reset --hard` simply makes `main` identical to the version I trust.
>
> **Why `--force-with-lease`?** A plain `--force` overwrites GitHub no matter what. `--force-with-lease` refuses if GitHub has commits this machine hasn't seen yet, for example something pushed from another computer. If it refuses, run [Standard Sync](#61-standard-sync) and start this step again.

### Step 4: Open the Next Branch

```bash
git checkout -b 4.8
git push -u origin 4.8
```

### Step 5: Delete the Old Branch

It's already saved as `v4.07`, so the branch is no longer needed.

```bash
git branch -d 4.7
git push origin --delete 4.7
```

If `-d` refuses with "not fully merged", use `git branch -D 4.7`. That's safe here because the tag holds every commit.

---

## 4. One-Time Cleanup

The repository still has a few leftovers from before the tags-only rule. Each one is already contained in a tag, so nothing is lost. Run these once from the `4.7` branch:

**Branch `4.6`** is the exact same commit as `v4.06`:

```bash
git branch -d 4.6
git push origin --delete 4.6
```

**Branch `4.3-archive`** (only on one machine) is fully contained in `v4.03`:

```bash
git branch -D 4.3-archive
```

**Tag `4.01-archive`** (only on one machine) doesn't follow `v#.##`. This gives it a proper name and publishes it:

```bash
git tag -a v4.01 4.01-archive -m "Stable archive of branch 4.01"
git push origin v4.01
git tag -d 4.01-archive
```

Then tidy up any other machine with [Standard Sync](#61-standard-sync). Delete this section once it's done.

---

## 5. Tags

### 5.1 Go Back to an Old Version

Download it: open the repository on GitHub, click **Tags**, and pick the `.zip`.

Or open it in the terminal as a new branch, so nothing current is touched:

```bash
git checkout -b look-4.05 v4.05
```

When you're done looking, switch back and delete it:

```bash
git checkout 4.7
git branch -D look-4.05
```

### 5.2 Rename a Tag

Tags can't be renamed directly. You make a new tag on the same commit, publish it, then delete the old one. Use this only to fix a name (for example `v4.3` → `v4.03`). The code itself isn't touched.

```bash
git tag -a v4.03 v4.3 -m "Stable archive of branch 4.3"
git push origin v4.03
git push origin --delete v4.3
git tag -d v4.3
```

---

## 6. Multi-Device Sync

> **Mental model:**
> `fetch` asks GitHub what exists · `checkout` switches branch · `pull` downloads into the current branch · `push` uploads your commits

### 6.1 Standard Sync

Use this on any machine that's behind, including after a release on another computer. It also clears out branches that were deleted on GitHub.

```bash
git fetch --all --prune
git checkout 4.7
git pull origin 4.7
```

If the machine still has the previous version's branch, delete it locally. It only exists on this machine, so GitHub isn't affected:

```bash
git branch -D 4.6
```

### 6.2 Hard Sync

Use this when a machine is in a mess and should simply match GitHub exactly.

> **Warning:** this permanently deletes all uncommitted changes on this machine. If there's anything worth keeping, [stash it](#83-stash-work-in-progress) first.

```bash
git fetch origin
git reset --hard origin/4.7
```

---

## 7. Emergency Operations

### 7.1 Force Push

GitHub should match this machine, and a normal push is being rejected:

```bash
git push --force-with-lease origin 4.7
```

If that also refuses, GitHub has commits this machine has never seen. Look at them before you throw them away:

```bash
git fetch origin
git log --oneline 4.7..origin/4.7
```

Only if you're sure they're worthless:

```bash
git push --force origin 4.7
```

### 7.2 Force Pull

The local branch is broken and should match GitHub. This is the same as [Hard Sync](#62-hard-sync).

### 7.3 Diverged Branches

**Symptom:** VS Code says _"Can't push refs to remote. Try running Pull first"_, and pulling also fails.

**Cause:** this machine and GitHub each have commits the other doesn't. It happens when two computers worked on the same branch.

**Fix:** decide which side is right.

If GitHub is right, use [Hard Sync](#62-hard-sync). If this machine is right:

```bash
git push --force-with-lease origin 4.7
```

---

## 8. Edge Cases

### 8.1 Rejected Push

**Error:** `Updates were rejected because the tip of your current branch is behind its remote counterpart`

**Cause:** another machine pushed to this branch while I was working here.

**Fix:** put my commits on top of theirs:

```bash
git pull origin 4.7 --rebase
```

`--rebase` keeps the history in one straight line instead of adding "Merge branch 4.7 into 4.7" commits.

### 8.2 Detached HEAD

**Symptom:** the terminal shows `HEAD detached at <commit>` instead of a branch name.

**Cause:** a tag or commit was checked out directly. Anything committed in this state belongs to no branch and gets lost when you switch away.

**Keep the work** by attaching it to a branch:

```bash
git checkout -b rescue-branch
```

**Throw it away** and go back:

```bash
git checkout 4.7
```

### 8.3 Stash Work in Progress

To switch branches without committing half-finished work:

```bash
git stash push -m "WIP: overtime page skeleton"
git checkout main
```

To come back and restore it:

```bash
git checkout 4.7
git stash pop
```

`git stash list` shows everything that's stashed.

### 8.4 Wrong Shell in VS Code

`npm` or `nvm` work in a normal terminal but say "command not found" inside VS Code. The fix is in [EDITOR.md](EDITOR.md#terminal-profile).

---

## 9. GitHub Issues

GitHub Issues is the repository's built-in ticket system. A ticket explains *why* code was written, and six months later that's the part you can't remember.

### 9.1 Ticket Template

```markdown
### Context

What this ticket does and why it's needed right now.

### Tasks

- [ ] Scaffold `<ComponentName>` and link it to its parent.
- [ ] Add `.className` to the correct wrapper.
- [ ] Check that it renders without console errors.

### Notes

- Structure and layout first, styling once the skeleton renders cleanly.
```

Before you submit, fill in the sidebar:

| Field         | What to set                                        |
| ------------- | -------------------------------------------------- |
| **Assignees** | Yourself                                           |
| **Labels**    | `enhancement`, `frontend`, `bug`… (make your own)  |
| **Milestone** | The version, for example `v4.07`                   |
| **Project**   | The Kanban board                                   |

### 9.2 Link Commits to Tickets

GitHub numbers each ticket (for example `#5`). Mention the number in the commit message:

```bash
git commit -m "Fixes #5: Scaffold the Overtime page skeleton"
```

The commit then shows up on the ticket, and the ticket closes automatically once that commit reaches `main` in the next [release](#3-release-cycle).

---

## 10. Status Log

| Version   | Status      | Focus                                                                      | Date       |
| --------- | ----------- | -------------------------------------------------------------------------- | ---------- |
| **v4.01** | ✅ Archived | First archived build                                                       | 2026-01-28 |
| **v4.02** | ✅ Archived | Desktop UI, testing, refactoring                                           | 2026-02-06 |
| **v4.03** | ✅ Archived | Desktop stable                                                             | 2026-04-29 |
| **v4.04** | ✅ Archived | Synced, cleaned, most complete build                                       | 2026-07-23 |
| **v4.05** | ✅ Archived | Mobile layout matching desktop, reusable block scripts, Menu shades synced to Buttons | 2026-10-06 |
| **v4.06** | ✅ Archived | ButtonDefault, ButtonProfile and ButtonRouting refactor, colour toggles    | 2026-10-27 |
| **4.7**   | 🚧 Active   | Tablet scaling, AsideCharacters, documentation overhaul                    | _Current_  |

Add a row with every release.

---

## 11. References

| Topic                 | Link                                                                                                                                                                       |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Git setup             | [GitHub Docs: Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)                                                                                     |
| SSH keys              | [GitHub Docs: Generating a new SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)  |
| Tags                  | [Git Book: Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)                                                                                                      |
| Force with lease      | [Git Docs: git push](https://git-scm.com/docs/git-push#Documentation/git-push.txt---force-with-leaseltrefnamegt)                                                           |
| Stash                 | [Git Docs: git stash](https://git-scm.com/docs/git-stash)                                                                                                                   |
| Issues                | [GitHub Docs: About Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues)                                                                  |
| NVM (macOS, Linux)    | [nvm-sh/nvm](https://github.com/nvm-sh/nvm)                                                                                                                                 |
| NVM (Windows)         | [coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)                                                                                                       |
