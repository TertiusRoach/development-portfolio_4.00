# Git/GitHub Release & Branch Management Guide

## Maintained by [TertiusRoach](https://github.com/TertiusRoach)

<div align="center">

![Platform](https://img.shields.io/badge/Platform-Ubuntu%20Studio%20%7C%20Windows%2011-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)
![Git](https://img.shields.io/badge/Git-2.x+-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-Workflow-181717?style=for-the-badge&logo=github&logoColor=white)
![VS Code](https://img.shields.io/badge/VS%20Code-Editor-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-NVM-339933?style=for-the-badge&logo=node.js&logoColor=white)

### A Safe, Repeatable Workflow for Solo Development & Release Engineering

_Master the Archive → Merge → Tag → Branch cycle with confidence_

[Machine Setup](#-machine-setup) • [Release Cycle](#-release-cycle-sop) • [Tag Management](#-tag-management) • [Multi-Device Sync](#-multi-device-synchronization) • [Emergency Operations](#-emergency-operations) • [Edge Cases](#-industry-edge-cases) • [Ticketing](#-github-issues--ticketing)

</div>

---

## 📑 Table of Contents

- [Machine Setup](#-machine-setup)
  - [1. Install Git](#1-install-git)
  - [2. Configure Git Identity](#2-configure-git-identity)
  - [3. SSH Authentication](#3-ssh-authentication)
  - [4. Install Node.js via NVM](#4-install-nodejs-via-nvm)
  - [5. Clone Your Repository](#5-clone-your-repository)
- [Release Cycle (SOP)](#-release-cycle-sop)
  - [1. Confirm Starting Position](#1-confirm-starting-position)
  - [2. Tag the Current Commit](#2-tag-the-current-commit)
  - [3. Promote to Main](#3-promote-to-main)
  - [4. Cleanup and Initialize Next Branch](#4-cleanup-and-initialize-next-branch)
- [Tag Management](#-tag-management)
  - [Rename a Tag](#rename-a-tag)
  - [Deprecate a Branch](#deprecate-a-branch)
- [Multi-Device Synchronization](#-multi-device-synchronization)
  - [Standard Sync](#standard-sync)
  - [Hard Sync](#hard-sync-overwrite)
  - [Work Laptop Setup](#work-laptop-setup)
- [Emergency Operations](#-emergency-operations)
  - [Force Push](#force-push)
  - [Force Pull](#force-pull)
  - [Diverged Branches](#diverged-branches)
- [Industry Edge Cases](#-industry-edge-cases)
  - [Case A: Rejected Push](#case-a-rejected-push)
  - [Case B: Detached HEAD](#case-b-detached-head-state)
  - [Case C: Stashing Work in Progress](#case-c-stashing-work-in-progress)
  - [Case D: Wrong Shell in VS Code](#case-d-vs-code-terminal-showing-sh-instead-of-bash)
- [GitHub Issues & Ticketing](#-github-issues--ticketing)
  - [Ticket Structure](#ticket-structure)
  - [Linking Tickets to Branches](#linking-tickets-to-branches)
- [Project Status Log](#-project-status-log)
- [References](#-references)

---

## 🖥 Machine Setup

> **💡 Who is this for?**
> Any new machine — Ubuntu Studio, Windows 11, or a work laptop — that needs to connect to and sync with your GitHub repository for the first time.

---

### 1. Install Git

```bash
sudo apt update
sudo apt install -y git
```

**Verify the installation:**

```bash
git --version
which git
```

<details>
<summary><strong>✅ Expected Output</strong></summary>

```
git version 2.xx.x
/usr/bin/git
```

</details>

> **💡 Note**
> If `sudo` is unavailable (restricted shell environments like `sh-5.3$`), Git may already be pre-installed. Run `git --version` to confirm before attempting any install commands.

---

### 2. Configure Git Identity

This controls what name and email appear on every commit you make. Without this, Git will refuse to commit.

```bash
git config --global user.name "TertiusRoach"
git config --global user.email "tertius.roach@gmail.com"
git config --global init.defaultBranch main
git config --global core.editor "code --wait"
```

**Verify your configuration:**

```bash
git config --list
```

> **🔒 Why this matters**
> Every commit is permanently stamped with this identity. If you skip this step, Git will either refuse to commit or use a system default that does not match your GitHub account, causing authentication confusion.

---

### 3. SSH Authentication

GitHub no longer accepts account passwords for terminal Git operations. SSH key pairs are the recommended authentication method — set once per machine, then push and pull without typing credentials again.

**Step 1 — Generate your SSH key:**

```bash
ssh-keygen -t ed25519 -C "tertius.roach@gmail.com"
```

When prompted for a file location, press `Enter` to accept the default (`~/.ssh/id_ed25519`). You may set a passphrase or leave it empty.

**Step 2 — Start the SSH agent and register your key:**

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

**Step 3 — Copy your public key:**

```bash
cat ~/.ssh/id_ed25519.pub
```

Copy the entire output. It starts with `ssh-ed25519` and ends with your email address.

**Step 4 — Add the key to GitHub:**

1. Go to [github.com/settings/keys](https://github.com/settings/keys)
2. Click **New SSH key**
3. Give it a title (e.g., `Ubuntu Studio Desktop`)
4. Paste the copied key
5. Click **Add SSH key**

**Step 5 — Test the connection:**

```bash
ssh -T git@github.com
```

<details>
<summary><strong>✅ Expected Output</strong></summary>

```
Hi TertiusRoach! You've successfully authenticated, but GitHub does not provide shell access.
```

</details>

> **⚠️ Common Mistake**
> If GitHub returns "Key is invalid", you likely copied the **private key** (`id_ed25519`) instead of the **public key** (`id_ed25519.pub`). The public key file always ends in `.pub`. Never share the private key file with anyone.

---

### 4. Install Node.js via NVM

NVM (Node Version Manager) is the industry standard for managing Node.js versions. It installs Node without requiring `sudo` and allows switching versions per project.

**Step 1 — Install NVM:**

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

**Step 2 — Load NVM into the current terminal session:**

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

**Step 3 — Install the LTS version of Node and set it as default:**

```bash
nvm install --lts
nvm use --lts
nvm alias default node
```

**Step 4 — Make NVM load automatically on every new terminal:**

```bash
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bashrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.bashrc
source ~/.bashrc
```

**Verify:**

```bash
node --version
npm --version
```

> **⚠️ VS Code Terminal Issue**
> If VS Code shows `sh-5.3$` instead of a `bash` prompt, NVM and npm will not be found because `sh` does not load your `.bashrc`. Fix this by pressing `Ctrl + Shift + P` → **Terminal: Select Default Profile** → select **bash**. Then close and reopen the terminal.

---

### 5. Clone Your Repository

Navigate to your preferred workspace folder and clone using SSH:

```bash
cd ~
mkdir Projects
cd Projects
git clone git@github.com:TertiusRoach/development-portfolio_4.00.git
cd development-portfolio_4.00
```

**Sync to the active development branch:**

```bash
git fetch --all --prune
git checkout 4.5
git pull origin 4.5
```

> **💡 Why `fetch --all --prune` first?**
> This updates your local machine's knowledge of all remote branches before you try to check one out. Without it, Git may not know the branch exists yet.

---

## 🔄 Release Cycle (SOP)

> **💡 When to use this**
> Execute this full sequence when a development branch is feature-complete, tested, and ready to be promoted to production (`main`). This is the single most important workflow to memorize.

**The sequence is always:**

```
Confirm → Tag → Merge to Main → Cleanup → New Branch
```

---

### 1. Confirm Starting Position

Before touching anything, verify you are on the correct branch and that there are no uncommitted changes floating around.

```bash
git status
```

<details>
<summary><strong>✅ Expected Output (clean state)</strong></summary>

```
On branch 4.5
nothing to commit, working tree clean
```

</details>

> **⚠️ If you see uncommitted changes**
> Do not proceed. Either commit them (`git add . && git commit -m "message"`) or stash them (`git stash`) before continuing. Merging with a dirty working tree causes unnecessary conflicts.

---

### 2. Tag the Current Commit

A tag is a permanent, immutable milestone. Unlike branches, tags do not move when new commits are added. This is your recovery point — regardless of what happens to any branch afterward, this tag always points to this exact state of the code.

**Create an annotated tag:**

```bash
git tag -a v4.5 -m "Stable Release 4.5: Description of what changed"
```

**Push the tag to GitHub:**

```bash
git push origin v4.5
```

> **💡 Annotated vs Lightweight Tags**
> Always use annotated tags (`-a`). They store the tagger name, date, and message. Lightweight tags are just a pointer with no metadata — useless for release documentation.

> **🔒 Why tag before merging?**
> Tagging on the development branch (before the merge) ensures the tag points to the exact commit that was tested and approved. After a merge, the commit graph changes and the reference becomes less precise.

---

### 3. Promote to Main

This is the production merge. The `--no-ff` flag (no fast-forward) forces Git to create a merge commit even if it could fast-forward. This groups all branch commits together in history, making it easy to identify and revert a specific release as a single unit.

```bash
git checkout main
git pull origin main
git reset --hard 4.5
git push origin main --force
```

> **💡 Why `reset --hard` instead of `merge`?**
> When branches have diverged (which happens when working across multiple machines), `merge` will fail or create a messy history. `reset --hard` forces `main` to become an exact copy of your trusted development branch — clean, predictable, and safe when you are the sole developer.

> **⚠️ Warning**
> `--force` overwrites the remote `main` branch permanently. Only use this when you are certain your local development branch is the correct, most complete version. If in doubt, run `git log --oneline -10` on both branches to compare before proceeding.

---

### 4. Cleanup and Initialize Next Branch

Remove the old branch to prevent code drift and confusion, then start the next development cycle.

**Switch back to your development branch:**

```bash
git checkout 4.5
```

**Delete the old branch locally and remotely (adjust version number as needed):**

```bash
git branch -d 4.4
git push origin --delete 4.4
```

**Create the next branch and push it:**

```bash
git checkout -b 4.6
git push -u origin 4.6
```

<details>
<summary><strong>⚠️ If `git branch -d` refuses</strong></summary>

Git may refuse `-d` if it thinks the branch is not fully merged (common when the merge happened via `reset --hard` instead of `merge`). Force the deletion with:

```bash
git branch -D 4.4
```

The `-D` flag bypasses the merge check. This is safe here because you have already tagged and pushed the code to `main`.

</details>

---

## 🏷 Tag Management

### Rename a Tag

Git tags are immutable — they cannot be renamed directly. The correct process is to create a new tag pointing to the exact same commit, push it, then delete the old one.

> **💡 When to use this**
> Use this for naming convention corrections only (e.g., `v4.3` → `v4.03`). The commit history and code are not affected in any way.

**Step 1 — Create the new tag pointing to the same commit as the old one:**

```bash
git tag v4.03 v4.3
```

**Step 2 — Push the new tag to GitHub:**

```bash
git push origin v4.03
```

**Step 3 — Delete the old tag from GitHub:**

```bash
git push origin --delete v4.3
```

**Step 4 — Delete the old tag from your local machine:**

```bash
git tag -d v4.3
```

> **⚠️ Warning**
> Deleting a pushed tag rewrites public history on GitHub. Only do this for naming corrections on your own private repository. Never delete tags on a shared or public repository without notifying all collaborators.

---

### Deprecate a Branch

When a branch is finished but needs to remain visible on GitHub for reference — for example, to leave a copy accessible on a work laptop or for an external party — rename it instead of deleting it. This preserves the code while making it clear the branch is no longer active.

**Step 1 — Rename the branch locally:**

```bash
git branch -m 4.4 4.4_deprecated
```

**Step 2 — Push the renamed branch to GitHub:**

```bash
git push origin 4.4_deprecated
```

**Step 3 — Delete the old remote branch name:**

```bash
git push origin --delete 4.4
```

**Step 4 — Set the local branch to track the renamed remote:**

```bash
git branch --set-upstream-to=origin/4.4_deprecated 4.4_deprecated
```

> **💡 What happens to other machines?**
> Any machine that was tracking `origin/4.4` will lose its upstream reference after Step 3. The local branch and files remain intact on those machines — they simply cannot push to the old remote name anymore. Those machines need to be manually updated. See [Work Laptop Setup](#work-laptop-setup).

---

## 🔁 Multi-Device Synchronization

> **💡 Mental Model**
>
> - `fetch` = update your machine's knowledge of what exists on GitHub
> - `checkout` = switch to a branch
> - `pull` = download the latest files from GitHub into your current branch
> - `push` = upload your local commits to GitHub

---

### Standard Sync

Use this on any machine that is behind the remote. It updates the local branch map, removes references to deleted remote branches, and pulls the latest files.

```bash
git fetch --all --prune
git checkout 4.5
git pull origin 4.5
```

> **💡 Why `--prune`?**
> Without `--prune`, deleted remote branches (like `4.4` after it is removed) continue to appear in your local branch list as ghost references. `--prune` cleans those up automatically.

---

### Hard Sync (Overwrite)

Use this when your local state is broken, corrupted, or has diverged and you want to force it to exactly match GitHub.

> **⚠️ Warning: This destroys all local uncommitted changes permanently. There is no undo.**

```bash
git fetch origin
git reset --hard origin/4.5
```

---

### Work Laptop Setup

Run this sequence on the work laptop when you are ready to move it from an old branch (e.g., `4.4_deprecated`) to the active development branch (`4.5`).

**Step 1 — Update the machine's knowledge of all remote branches:**

```bash
git fetch --all --prune
```

**Step 2 — Switch to the active branch:**

```bash
git checkout 4.5
```

**Step 3 — Pull the latest files:**

```bash
git pull origin 4.5
```

**Step 4 — Set the branch to always pull from `origin/4.5`:**

```bash
git branch --set-upstream-to=origin/4.5 4.5
```

**Step 5 — Remove the old deprecated branch locally (optional but recommended):**

```bash
git branch -D 4.4
```

> **💡 Note**
> The `4.4_deprecated` branch still exists on GitHub. The work laptop's local `4.4` branch is separate from it. Deleting the local `4.4` in Step 5 does not affect GitHub or any other machine.

---

## 🚨 Emergency Operations

### Force Push

Use this when the remote branch needs to exactly match your local version and a standard push is being rejected.

```bash
git push origin <branch_name> --force
```

> **⚠️ Use with caution.**
> This permanently overwrites the remote branch history. Any commits on the remote that are not in your local version will be lost forever. Always confirm you are pushing to the correct branch before running this.

---

### Force Pull

Use this when your local branch is broken and you want to discard all local changes and match the remote exactly.

```bash
git fetch origin
git reset --hard origin/<branch_name>
```

> **⚠️ Warning**
> All uncommitted local changes are permanently destroyed. If you have work you want to keep, stash it first: `git stash`.

---

### Diverged Branches

**Symptom:** VS Code shows _"Can't push refs to remote. Try running Pull first"_ and a standard pull also fails.

**Cause:** Your local branch and the remote branch have different commit histories that cannot be automatically reconciled. This commonly happens when working across multiple machines.

**Fix — Force `main` to match your trusted development branch:**

```bash
git checkout main
git reset --hard <your_trusted_branch>
git push origin main --force
git checkout <your_trusted_branch>
```

> **💡 Why this works**
> `reset --hard` replaces the entire local `main` history with your trusted branch's history. The `--force` push then overwrites GitHub to match. This is the correct and safe approach when you are the sole developer and you know which branch contains the correct code.

---

## 🛠 Industry Edge Cases

### Case A: Rejected Push

**Error:** `Updates were rejected because the tip of your current branch is behind its remote counterpart`

**Cause:** Another machine pushed commits to this branch while you were working locally. Your local version is now behind.

**Fix — Pull with rebase to place your commits on top:**

```bash
git pull origin <branch_name> --rebase
```

> **💡 Why rebase instead of merge?**
> A standard `git pull` creates a merge commit that clutters the history with "Merge branch X into X" noise. `--rebase` replays your local commits on top of the remote commits, keeping the history linear and clean.

---

### Case B: Detached HEAD State

**Symptom:** Terminal shows `HEAD detached at <commit_hash>` instead of a branch name.

**Cause:** You checked out a specific commit hash or tag directly instead of a named branch. Any commits made in this state are not attached to any branch and will be lost when you switch away.

<details>
<summary><strong>Option A — Save your current state to a new branch (recommended)</strong></summary>

```bash
git checkout -b temp-rescue-branch
```

This attaches the detached HEAD to a named branch, making your work safe.

</details>

<details>
<summary><strong>Option B — Abandon and return to a named branch</strong></summary>

```bash
git checkout main
```

Only use this if you have no uncommitted changes worth keeping.

</details>

---

### Case C: Stashing Work in Progress

Use this when you need to switch branches urgently but are not ready to commit your current work.

**Stash your current changes:**

```bash
git stash
```

**Switch to the other branch and do what you need:**

```bash
git checkout <other_branch>
git pull origin <other_branch>
```

**Return to your original branch and restore your work:**

```bash
git checkout <original_branch>
git stash pop
```

> **💡 Tip**
> You can name your stash for easier identification: `git stash push -m "WIP: overtime page skeleton"`. List all stashes with `git stash list`.

---

### Case D: VS Code Terminal Showing `sh` Instead of `bash`

**Symptom:** Terminal prompt shows `sh-5.3$` and commands like `npm`, `nvm`, or `node` return `command not found`.

**Cause:** VS Code is using `sh` (a minimal POSIX shell) as the default terminal profile instead of `bash`. The `sh` shell does not load your `.bashrc`, so NVM and npm are invisible to it.

**Fix (permanent):**

1. Press `Ctrl + Shift + P`
2. Type **Terminal: Select Default Profile**
3. Select **bash**
4. Kill the current terminal (`Ctrl + Shift + \``) and open a new one (`Ctrl + \``)

**Alternative fix via VS Code settings:**

1. Press `Ctrl + ,` to open Settings
2. Search for `terminal.integrated.defaultProfile.linux`
3. Set the value to `bash`

---

## 🎫 GitHub Issues & Ticketing

GitHub Issues is the built-in ticketing system for tracking bugs, features, and tasks. Used correctly, it creates a permanent, searchable link between your code and the reason it was written — essential when juggling a full-time job alongside development.

---

### Ticket Structure

A professional ticket uses Markdown headings, backtick-wrapped component names, and interactive task checklists. Copy and adapt this template for every new ticket.

```markdown
### Subtask Context

Brief description of what this ticket accomplishes and why it is needed at this stage of development.

### Acceptance Criteria (Tasks)

- [ ] Scaffold `<ComponentName>` and link it to the parent view.
- [ ] Add `.className` to the correct wrapper element.
- [ ] Verify the component renders without console errors.
- [ ] Link all sub-components into the parent view.

### Technical Notes

- Focus on structure and layout first. Ignore styling until the skeleton renders cleanly.
- Reference the Grid and Flexbox structure established in the previous branch.
- Refining and polish will be done when the project is fully ready for release.
```

**Before submitting, fill in the sidebar:**

| Field         | What to set                                                                 |
| :------------ | :-------------------------------------------------------------------------- |
| **Assignees** | Assign yourself                                                             |
| **Labels**    | `enhancement`, `frontend`, `high-priority` (create custom labels as needed) |
| **Milestone** | The relevant version milestone (e.g., `v4.5 — Desktop Foundations`)         |
| **Project**   | Your Kanban board (e.g., `Core App Development`)                            |

---

### Linking Tickets to Branches

Once a ticket is created, GitHub assigns it a number (e.g., `#5`). Create a dedicated branch for that ticket so the work is traceable:

```bash
git checkout -b feature/issue-5-overtime-skeleton
git push -u origin feature/issue-5-overtime-skeleton
```

When committing, reference the issue number in your commit message. GitHub will automatically close the ticket when this branch is merged into `main`:

```bash
git commit -m "Fixes #5: Scaffold Overtime page skeleton and link sub-components"
```

> **💡 Why this matters**
> Six months from now, when you are debugging a regression, you will be able to look at any commit and immediately know which ticket it belongs to, what the acceptance criteria were, and what the technical reasoning was. This is the difference between a professional codebase and a personal project.

---

## 📂 Project Status Log

| Version   | Status      | Focus Area                            | Archive Reference |
| :-------- | :---------- | :------------------------------------ | :---------------- |
| **v4.02** | ✅ Released | Desktop UI, Testing, Refactoring      | `tag: v4.02`      |
| **v4.03** | ✅ Released | Desktop Stable (renamed from v4.3)    | `tag: v4.03`      |
| **v4.04** | ✅ Released | Synced, Cleaned, Most Complete Build  | `tag: v4.04`      |
| **v4.5**  | 🚧 Active   | Folder Structure, Mobile Optimization | _Current HEAD_    |

---

## 📚 References

| Topic                      | Link                                                                                                                                                                      |
| :------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Git Setup**              | [GitHub Docs — Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)                                                                                  |
| **SSH Keys**               | [GitHub Docs — Connecting to GitHub with SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)                                                    |
| **Generate SSH Key**       | [GitHub Docs — Generating a new SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) |
| **Add SSH Key to GitHub**  | [GitHub Docs — Adding a new SSH key to your account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) |
| **Personal Access Tokens** | [GitHub Docs — Managing your personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) |
| **GitHub Issues**          | [GitHub Docs — About Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues)                                                               |
| **Git Tags**               | [Git Docs — Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)                                                                                                   |
| **NVM**                    | [NVM GitHub Repository](https://github.com/nvm-sh/nvm)                                                                                                                    |
| **Git Stash**              | [Git Docs — Stashing](https://git-scm.com/docs/git-stash)                                                                                                                 |

---

<div align="center">

**Built and maintained by [TertiusRoach](https://github.com/TertiusRoach)**

_Last Updated: July 2026_

</div>
