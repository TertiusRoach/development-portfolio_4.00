# Git/GitHub Repository Synchronization Guide

## Generated with [DeepSeek](https://www.deepseek.com/en/)

<div align="center">

![Platform](https://img.shields.io/badge/Platform-Linux%20Mint%20XFCE-87CF3E?style=for-the-badge&logo=linux&logoColor=white)
![Git](https://img.shields.io/badge/Git-2.x+-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-Workflow-181717?style=for-the-badge&logo=github&logoColor=white)
![VS Code](https://img.shields.io/badge/VS%20Code-Editor-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![License](https://img.shields.io/badge/License-Documentation-blue?style=for-the-badge)

### A Safe, Repeatable Workflow for Repository Management

_Master the Fork → Clone → Branch → Sync workflow with confidence_

[Getting Started](#getting-started) • [Owner Guide](#guide-for-repository-owners) • [Contributor Guide](#guide-for-sponsors--contributors) • [References](#references)

</div>

---

## 📑 Table of Contents

- [Overview](#overview)
  - [Workflow Philosophy](#workflow-philosophy)
  - [Safety Goals](#safety-goals)
- [Getting Started](#getting-started)
  - [Required Tools](#required-tools)
  - [Keyboard Shortcuts](#keyboard-shortcuts)
- [Guide for Repository Owners](#guide-for-repository-owners)
  - [1. Install and Verify Git](#1-install-and-verify-git-on-linux-mint-xfce)
  - [2. Configure Git Identity](#2-configure-git-identity-username--email)
  - [3. GitHub Authentication](#3-github-authentication-on-linux-mint-xfce-detailed)
    - [3.1 Password Policy](#31-passwords-are-not-used-for-command-line-git-access-anymore)
    - [3.2 HTTPS vs SSH](#32-choose-one-https-vs-ssh)
    - [3.3 Personal Access Token (PAT)](#33-personal-access-token-pat-for-https)
    - [3.4 SSH Keys](#34-ssh-keys-recommended-for-frequent-terminal-work)
    - [3.5 Passkeys Clarification](#35-passkeys-important-clarification)
  - [4. Create a Safe Fork Arrangement](#4-create-a-safe-fork-arrangement-owner-pattern)
  - [5. Fork the Canonical Repo](#5-fork-the-canonical-repo-on-github-web)
  - [6. Clone Your Fork Locally](#6-clone-your-fork-locally-from-visual-studio-code-terminal)
  - [7. Add Upstream Remote](#7-add-the-canonical-repo-as-upstream-critical)
  - [8. Disable Upstream Pushing](#8-hard-safety-guard-disable-pushing-to-upstream)
  - [9. Configure Safe Git Defaults](#9-hard-safety-guard-set-safe-defaults-in-git)
  - [10. Safe Syncing Routine](#10-safe-syncing-routine-fork--sync-without-touching-main-history)
  - [11. Create Work Branches](#11-create-a-new-work-branch-safely-example-421)
  - [12. Commit and Push](#12-commit-and-push-only-your-work-branch)
  - [13. Open Pull Requests](#13-open-a-pull-request-to-the-canonical-repo-web)
  - [14. Extra Protection: Pre-Commit Hook](#14-extra-never-commit-to-main-local-guard-optional-but-powerful)
  - [15. Recovery Patterns](#15-if-you-accidentally-changed-main-safe-recovery-patterns)
- [Guide for Sponsors / Contributors](#guide-for-sponsors--contributors)
  - [0. Required Tools](#0-what-youll-use-apps--shortcuts-1)
  - [1. Install and Verify Git](#1-install-and-verify-git-on-linux-mint-xfce-1)
  - [2. Configure Git Identity](#2-configure-git-identity-1)
  - [3. GitHub Authentication](#3-github-authentication-on-linux-mint-xfce-1)
  - [4. Fork the Repository](#4-fork-the-repository-on-github-web)
  - [5. Clone Your Fork](#5-clone-your-fork-locally-terminal)
  - [6. Add Upstream and Disable Push](#6-add-upstream-the-owners-canonical-repo--disable-upstream-push)
  - [7. Sync Before Branching](#7-sync-safely-fork--sync-before-you-branch)
  - [8. Create Feature Branch](#8-create-your-feature-branch-example-421-and-switch-to-it)
  - [9. Work and Commit](#9-work-commit-and-push-only-your-feature-branch)
  - [10. Open Pull Request](#10-open-a-pull-request-web)
  - [11. Safety Checklist](#11-contributor-safety-checklist-do-this-every-time)
- [References](#references-primary)
- [License](#license)

---

## 🎯 Overview

### Workflow Philosophy

This guide establishes a **safe, repeatable** [Git](https://git-scm.com/) + [GitHub](https://github.com/) workflow on [Linux Mint](https://linuxmint.com/) [XFCE](https://xfce.org/) using the [Visual Studio Code](https://code.visualstudio.com/) integrated terminal.

**Your required workflow is:**

```
Fork → Clone → Branch → Sync
```

### Safety Goals

> **🔒 Primary Safety Objective**  
> The latest branch (typically `main`) is **never accidentally modified**, and you **never push to the wrong remote**.

This guide implements multiple layers of protection:

- ✅ Disabled upstream push URLs
- ✅ Fast-forward only merges
- ✅ Branch-specific push defaults
- ✅ Pre-commit hooks for protected branches
- ✅ Explicit verification steps

---

## 🚀 Getting Started

### Required Tools

<details>
<summary><strong>📦 Applications</strong></summary>

| Application            | Purpose                           | Link                                                        |
| ---------------------- | --------------------------------- | ----------------------------------------------------------- |
| **Visual Studio Code** | Editor + Integrated Terminal      | [code.visualstudio.com](https://code.visualstudio.com/)     |
| **Firefox**            | Web Browser for GitHub Operations | [mozilla.org/firefox](https://www.mozilla.org/firefox/)     |
| **Thunar**             | File Manager (Optional)           | [XFCE Thunar Docs](https://docs.xfce.org/xfce/thunar/start) |

</details>

### Keyboard Shortcuts

| Action                        | Shortcut                                          |
| ----------------------------- | ------------------------------------------------- |
| **Open VS Code Terminal**     | <kbd>Ctrl</kbd> + <kbd>`</kbd>                    |
| **Open Command Palette**      | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> |
| **Open Source Control Panel** | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>G</kbd> |

---

## 📘 Guide for Repository Owners

> **💡 Who is this for?**  
> Repository owners who maintain the canonical repository and want to contribute safely through a fork-based workflow.

---

### 1. Install and Verify Git on Linux Mint XFCE

Open the [Visual Studio Code](https://code.visualstudio.com/) terminal and run:

```bash
sudo apt update
sudo apt install -y git
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

> **💡 Tip**  
> If you want the newest stable Git for Ubuntu-based distros, follow the upstream PPA approach (optional and advanced) as documented in many Linux guides.

---

### 2. Configure Git Identity (username + email)

This config controls what name/email appears on commits.

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
```

**Verify your configuration:**

```bash
git config --global --list
```

> 📚 **Reference:** [GitHub Docs — Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)

---

### 3. GitHub Authentication on Linux Mint XFCE (detailed)

> **⚠️ Important: Three Distinct Concepts**  
> People often mix these up:
>
> 1. **Browser sign-in to GitHub** (where passkeys may apply)
> 2. **Git operations over HTTPS** (uses tokens, not passwords)
> 3. **Git operations over SSH** (uses key pairs)

---

#### 3.1 Passwords are not used for command-line Git access anymore

For GitHub over HTTPS, you **do not use your account password** in the terminal. You use a **Personal Access Token (PAT)** (or an OAuth-based helper).

> 📚 **Reference:** [GitHub Docs — Managing your personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

#### 3.2 Choose one: HTTPS vs SSH

<table>
<tr>
<th>🌐 Use HTTPS if:</th>
<th>🔑 Use SSH if:</th>
</tr>
<tr>
<td>
• You want the simplest clone URL<br>
• You're in networks where SSH ports might be blocked<br>
• You're comfortable using a Personal Access Token (PAT)
</td>
<td>
• You want "set once, then push/pull without typing credentials"<br>
• You're comfortable managing an OpenSSH key on each machine
</td>
</tr>
</table>

> 📚 **References:**
>
> - [GitHub Docs — Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
> - [GitHub Docs — Connecting to GitHub with SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

---

#### 3.3 Personal Access Token (PAT) (for HTTPS)

<details>
<summary><strong>🔐 What credentials you need</strong></summary>

- Your **GitHub username**
- A **Personal Access Token (PAT)** (treat it like a password)

</details>

<details>
<summary><strong>✅ Best practices</strong></summary>

1. Prefer **fine-grained tokens** when possible (least privilege)
2. Set an **expiration date**
3. Store it in a **secure credential store** (not plain text)

</details>

> 📚 **Reference:** [GitHub Docs — Managing your personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

#### 3.4 SSH keys (recommended for frequent terminal work)

<details>
<summary><strong>🔐 What credentials you need</strong></summary>

- A **private key file** on your laptop (keep it secret)
- A **public key** added to your GitHub account

</details>

**Generate and add an SSH key (Linux):**

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

**Add the public key to your GitHub account:**

1. **Copy your public key:**

   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```

2. **Paste into GitHub settings** (web interface)

> 📚 **References:**
>
> - [GitHub Docs — Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
> - [GitHub Docs — Adding a new SSH key to your GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

**Test your SSH connection:**

```bash
ssh -T git@github.com
```

<details>
<summary><strong>✅ Expected Output</strong></summary>

```
Hi USERNAME! You've successfully authenticated, but GitHub does not provide shell access.
```

</details>

---

#### 3.5 Passkeys (important clarification)

> **⚠️ Critical Understanding**  
> A **passkeys login** is for signing in to GitHub in your **browser**. It does **not** automatically authenticate command-line Git pushes/pulls.
>
> For terminal auth, you still use:
>
> - **HTTPS** + Personal Access Token (PAT), or
> - **SSH keys**

> 📚 **Reference:** [GitHub Docs — About passkeys](https://docs.github.com/en/authentication/authenticating-with-a-passkey/about-passkeys)

---

### 4. Create a "safe" fork arrangement (Owner pattern)

Because you are the **Repository Owner**, the safest pattern is:

| Repository Type      | Purpose                                                                        |
| -------------------- | ------------------------------------------------------------------------------ |
| **Canonical repo**   | Your official project repo (the one everyone targets with PRs)                 |
| **Development fork** | A separate repo you push branches to, so your canonical `main` stays protected |

> **💡 Implementation Strategy**  
> On GitHub, a "fork" typically lives under a different account or an organization. If you can't fork into the same account, create a fork in an organization you control.

**Goal:** You work in the fork; you merge PRs into the canonical repo.

---

### 5. Fork the canonical repo on GitHub (web)

1. Open the **canonical repository** in a browser ([Firefox](https://www.mozilla.org/firefox/))
2. Click **Fork**
3. Choose the destination (your org or dev account)

> **⚠️ Note:** This step is web-only (no terminal command)

---

### 6. Clone your fork locally (from Visual Studio Code terminal)

**Pick a workspace folder:**

```bash
mkdir -p ~/Develop
cd ~/Develop
```

<details>
<summary><strong>Option A: Clone via SSH</strong> (recommended once keys are set)</summary>

```bash
git clone git@github.com:YOUR-USERNAME/YOUR-FORK-REPO.git
cd YOUR-FORK-REPO
```

</details>

<details>
<summary><strong>Option B: Clone via HTTPS</strong></summary>

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-FORK-REPO.git
cd YOUR-FORK-REPO
```

</details>

---

### 7. Add the canonical repo as upstream (critical)

Inside your cloned repo:

```bash
git remote -v
```

**Add the canonical repo as upstream** (replace with your canonical URL):

```bash
git remote add upstream https://github.com/OWNER/CANONICAL-REPO.git
```

**Verify:**

```bash
git remote -v
```

<details>
<summary><strong>✅ Expected output shape</strong></summary>

```
origin    ... (fetch)
origin    ... (push)
upstream  ... (fetch)
upstream  ... (push) ← we will disable this next
```

</details>

---

### 8. Hard safety guard: disable pushing to upstream

> **🔒 Security Measure**  
> This is the single best "oops-proofing" step for the terminal

```bash
git remote set-url --push upstream DISABLED
git remote -v
```

<details>
<summary><strong>✅ Expected output shape</strong></summary>

```
upstream  https://github.com/OWNER/CANONICAL-REPO.git (fetch)
upstream  DISABLED (push)
```

</details>

**This prevents accidentally pushing to the canonical repo from your laptop.**

---

### 9. Hard safety guard: set "safe defaults" in Git

These settings reduce common foot-guns:

```bash
git config --global fetch.prune true
git config --global pull.ff only
git config --global push.default current
git config --global push.autoSetupRemote true
```

<details>
<summary><strong>📖 What they do</strong></summary>

| Setting                | Purpose                                                     |
| ---------------------- | ----------------------------------------------------------- |
| `fetch.prune`          | Cleans up deleted remote branches locally                   |
| `pull.ff only`         | Prevents accidental merge commits when syncing `main`       |
| `push.default current` | `git push` pushes only your current branch (not everything) |
| `push.autoSetupRemote` | First push auto-links branch to origin                      |

</details>

> 📚 **Reference:** [GitHub Docs — Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)

---

### 10. Safe syncing routine (Fork → Sync) WITHOUT touching main history

This is the owner's **"sync fork from upstream safely"** loop.

#### 10.1 Fetch updates from upstream

```bash
git fetch upstream --prune
```

#### 10.2 Update your local main safely (fast-forward only)

```bash
git checkout main
git merge --ff-only upstream/main
```

> **⚠️ Warning**  
> If this fails with "not possible to fast-forward", **STOP** and investigate—this means your local `main` diverged (often from an accidental commit).

#### 10.3 Update your fork's main safely

```bash
git push origin main
```

> **⚠️ Warning**  
> If this is rejected, **STOP** (it means your fork `main` diverged). **Do not force push.**

---

### 11. Create a new work branch safely (example: 4.2.1)

Always branch from the updated local `main`:

```bash
git checkout main
git status
git pull --ff-only
git checkout -b 4.2.1
git branch --show-current
```

<details>
<summary><strong>✅ Expected output</strong></summary>

```
4.2.1
```

</details>

**Safeguard check** (run this before every commit):

```bash
git status
git branch --show-current
```

---

### 12. Commit and push ONLY your work branch

**Stage + commit:**

```bash
git add -A
git commit -m "Describe the change clearly"
```

**Push to your fork** (`origin`) **and set upstream tracking:**

```bash
git push -u origin HEAD
```

> **💡 Why this works**  
> This ensures you never push to `upstream`, and you never push `main`.

---

### 13. Open a Pull Request to the canonical repo (web)

In GitHub (browser):

1. Go to your **fork**
2. Click **Compare & pull request**
3. **Confirm:**
   - **Base repository:** canonical repo
   - **Base branch:** `main`
   - **Head repository:** your fork
   - **Compare branch:** `4.2.1`
4. **Create the PR**

> **✅ Success**  
> This preserves the rule: **canonical `main` changes only via PR merge**.

---

### 14. Extra "never commit to main" local guard (optional but powerful)

You can add a **local Git hook** to block commits on `main`.

**Create this file:**

```bash
cat > .git/hooks/pre-commit <<'EOF'
#!/bin/sh
branch="$(git branch --show-current 2>/dev/null)"
if [ "$branch" = "main" ] || [ "$branch" = "master" ]; then
  echo "ERROR: Refusing to commit on protected branch: $branch"
  echo "Create a branch: git checkout -b 4.2.1"
  exit 1
fi
EOF
chmod +x .git/hooks/pre-commit
```

> **✅ Result**  
> Now commits on `main` / `master` fail locally.

---

### 15. If you accidentally changed main (safe recovery patterns)

<details>
<summary><strong>Case A: You edited files on main but did NOT commit</strong></summary>

```bash
git status
git stash push -u -m "move accidental main work to branch"
git checkout -b 4.2.1
git stash pop
```

</details>

<details>
<summary><strong>Case B: You committed on main locally (but did NOT push)</strong></summary>

1. **Create a rescue branch at the commit:**

   ```bash
   git checkout main
   git branch 4.2.1
   ```

2. **Reset main back to upstream** (destructive—double check first):

   ```bash
   git fetch upstream --prune
   git reset --hard upstream/main
   ```

3. **Then continue working on `4.2.1`**

</details>

---

## 🤝 Guide for Sponsors / Contributors

> **💡 Who is this for?**  
> External collaborators contributing via a fork and PR to the owner's canonical repo.

---

### 0. What you'll use (apps + shortcuts)

**Apps:**

- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)
- GitHub via browser (e.g., [Firefox](https://www.mozilla.org/firefox/))

**Keyboard shortcuts:**

- **Open VS Code Terminal:** <kbd>Ctrl</kbd> + <kbd>`</kbd>
- **Open VS Code Source Control:** <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>G</kbd>

---

### 1. Install and verify Git on Linux Mint XFCE

```bash
sudo apt update
sudo apt install -y git
git --version
```

> 📚 **Reference:** [GitHub Docs — Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)

---

### 2. Configure Git identity

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
```

**Verify:**

```bash
git config --global --list
```

> 📚 **Reference:** [GitHub Docs — Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)

---

### 3. GitHub authentication on Linux Mint XFCE

You will authenticate either with:

1. **HTTPS** + Personal Access Token (PAT), or
2. **SSH keys**

> 📚 **References:**
>
> - [GitHub Docs — Managing your personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
> - [GitHub Docs — Connecting to GitHub with SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
> - [GitHub Docs — Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

> **⚠️ Important clarification about passkeys**
>
> - **Passkeys** help you sign into GitHub in a **browser**
> - Terminal Git still needs **HTTPS+PAT** or **SSH**

> 📚 **Reference:** [GitHub Docs — About passkeys](https://docs.github.com/en/authentication/authenticating-with-a-passkey/about-passkeys)

---

### 4. Fork the repository on GitHub (web)

1. Open the **owner's repo** in your browser ([Firefox](https://www.mozilla.org/firefox/))
2. Click **Fork**
3. Fork into **your account**

---

### 5. Clone your fork locally (terminal)

```bash
mkdir -p ~/Develop
cd ~/Develop
```

**Clone (choose one):**

<details>
<summary><strong>SSH</strong></summary>

```bash
git clone git@github.com:YOUR-USERNAME/YOUR-FORK-REPO.git
cd YOUR-FORK-REPO
```

</details>

<details>
<summary><strong>HTTPS</strong></summary>

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-FORK-REPO.git
cd YOUR-FORK-REPO
```

</details>

---

### 6. Add upstream (the owner's canonical repo) + disable upstream push

**Add upstream:**

```bash
git remote add upstream https://github.com/OWNER/CANONICAL-REPO.git
git remote -v
```

**Disable pushing to upstream** (critical safeguard):

```bash
git remote set-url --push upstream DISABLED
git remote -v
```

---

### 7. Sync safely (Fork → Sync) BEFORE you branch

**Fetch upstream:**

```bash
git fetch upstream --prune
```

**Update your local main safely:**

```bash
git checkout main
git merge --ff-only upstream/main
```

**Update your fork main safely:**

```bash
git push origin main
```

> **⚠️ Warning**  
> If any of these fail with "non-fast-forward" or "diverged", **STOP** and ask the repository owner what the preferred sync strategy is. **Do not force push.**

---

### 8. Create your feature branch (example: 4.2.1) and switch to it

```bash
git checkout -b 4.2.1
git branch --show-current
```

<details>
<summary><strong>✅ Expected output</strong></summary>

```
4.2.1
```

</details>

---

### 9. Work, commit, and push ONLY your feature branch

**Pre-flight checks before committing:**

```bash
git status
git branch --show-current
```

**Commit:**

```bash
git add -A
git commit -m "Your change description"
```

**Push to your fork:**

```bash
git push -u origin HEAD
```

---

### 10. Open a Pull Request (web)

On GitHub in your browser ([Firefox](https://www.mozilla.org/firefox/)):

1. Go to your **fork repo page**
2. Click **Compare & pull request**
3. Confirm **base** is the owner's **canonical repo main**
4. **Submit the PR**

---

### 11. Contributor safety checklist (do this every time)

**Before you commit:**

```bash
git branch --show-current  # → must NOT be main / master
git status                 # → understand what will be committed
```

**Before you push:**

```bash
git remote -v              # → confirm origin is your fork
```

Push only with:

```bash
git push -u origin HEAD    # explicit and safe
```

> **💡 Optional Enhancement**  
> Add `.git/hooks/pre-commit` hook to refuse commits on protected branches (same as owner section)

---

## 📚 References (Primary)

| Topic                      | Documentation Link                                                                                                                                                                                       |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Git Setup**              | [GitHub Docs — Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)                                                                                                                 |
| **Personal Access Tokens** | [GitHub Docs — Managing your personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)                                |
| **SSH Connection**         | [GitHub Docs — Connecting to GitHub with SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)                                                                                   |
| **Generate SSH Key**       | [GitHub Docs — Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) |
| **Add SSH Key to GitHub**  | [GitHub Docs — Adding a new SSH key to your GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)                         |
| **Passkeys**               | [GitHub Docs — About passkeys](https://docs.github.com/en/authentication/authenticating-with-a-passkey/about-passkeys)                                                                                   |

---

## 📄 License

This documentation is provided as-is for educational and reference purposes.

---

<div align="center">

**Made with ❤️ for the Git/GitHub Community**

⭐ Star this guide if you found it helpful! ⭐

_Last Updated: January 2026_

</div>
