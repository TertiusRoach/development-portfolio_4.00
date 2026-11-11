# GitHub Workflow

Copy one line, paste it in the terminal, press `Enter`, check the result, then go to the next line. Every command runs in VS Code's terminal (`` Ctrl+` ``), inside the project folder.

## Change the Numbers First

Every command uses **`4.8`** as the example. Before you paste, change the numbers to the version you're on:

| In the commands | What it means                                    | When you're on `4.9`, it becomes |
| --------------- | ------------------------------------------------ | -------------------------------- |
| `4.8`           | Your branch, the one you work on                 | `4.9`                            |
| `v4.08.2`       | This publish (count up: `.1`, `.2`, `.3` …)       | `v4.09.1`                        |
| `v4.08`         | The finished version's tag                       | `v4.09`                          |
| `4.9`           | The next branch, only when `4.8` is finished     | `5.0` (each `#` is one digit)    |
| `4.7`           | The branch before `4.8`                          | `4.8`                            |

The last patch in the [Status Log](#10-status-log) tells you the next number: `v4.08.1` is there, so this publish is `v4.08.2`.

---

## 1. Publish Your Branch to main

Use this to put what you have now on `main` and the live site. The branch stays open and you keep working in it afterwards.

**Before you start:** add this release as a row in the [Status Log](#10-status-log), so it goes in with the commit.

**Step 1: Go to your branch.**

```bash
git checkout 4.8
```

You should see: `Already on '4.8'` or `Switched to branch '4.8'`.

**Step 2: See what changed.**

```bash
git status
```

You should see: a list of changed files in red. Check nothing's there that shouldn't be.

**Step 3: Stage everything.**

```bash
git add -A
```

You should see: nothing. That's normal.

**Step 4: Commit it.** Change the words in quotes to what you did.

```bash
git commit -m "Describe what changed"
```

You should see: `[4.8 1a2b3c4] Describe what changed` and how many files changed.

**Step 5: Upload the branch.**

```bash
git push origin 4.8
```

You should see: `4.8 -> 4.8`.

**Step 6: Check the Pages workflow is on the branch.** Without it, publishing deletes it and the site stops updating.

```bash
ls .github/workflows/static.yml
```

You should see: `.github/workflows/static.yml`. If it says "No such file", stop and do [Workflow Missing](#workflow-missing).

**Step 7: Build the live site.**

```bash
npm run deploy
```

You should see: `compiled successfully` at the end. It takes a minute.

**Step 8: Stage the build.**

```bash
git add public
```

You should see: nothing.

**Step 9: Commit the build.**

```bash
git commit -m "Build for v4.08.2"
```

You should see: `[4.8 …] Build for v4.08.2`. If it says `nothing to commit`, that's fine: the build didn't change. Go on.

**Step 10: Upload the build.**

```bash
git push origin 4.8
```

You should see: `4.8 -> 4.8`.

**Step 11: Make the backup tag.** Change the words in quotes to what this release fixes.

```bash
git tag -a v4.08.2 -m "4.8.2: what this release fixes"
```

You should see: nothing.

**Step 12: Upload the tag.**

```bash
git push origin v4.08.2
```

You should see: `* [new tag] v4.08.2 -> v4.08.2`.

**Step 13: Switch to main.**

```bash
git checkout main
```

You should see: `Switched to branch 'main'`.

**Step 14: Get main's latest from GitHub.**

```bash
git pull origin main
```

You should see: `Already up to date.` or a short list of files.

**Step 15: Make main an exact copy of your branch.**

```bash
git reset --hard 4.8
```

You should see: `HEAD is now at …` followed by your build commit's message.

**Step 16: Upload main.**

```bash
git push --force-with-lease origin main
```

You should see: `+ … main -> main (forced update)`. If it says `rejected` or `stale info`, another computer pushed to `main`: do [Another Computer Is Behind](#5-another-computer-is-behind), then start again from Step 13.

**Step 17: Go back to work.**

```bash
git checkout 4.8
```

You should see: `Switched to branch '4.8'`.

**Done.** Open the **Actions** tab on GitHub: a green tick on **Deploy static content to Pages** means the site is live, usually within two minutes. The next release counts up: `v4.08.3`.

> **Why `reset` and not `merge`?** Working on more than one computer makes branches drift apart, and a merge then fails or makes a mess. `reset --hard` just makes `main` identical to the branch you trust.

**What's next:**

2. [The Five Safety Rules](#2-the-five-safety-rules)
3. [Save Your Work Without Publishing](#3-save-your-work-without-publishing)
4. [Finish a Version and Start the Next](#4-finish-a-version-and-start-the-next)
5. [Another Computer Is Behind](#5-another-computer-is-behind)
6. [When Git Says No](#6-when-git-says-no)
7. [Set Up a New Computer](#7-set-up-a-new-computer)
8. [Clean Up the Old Leftovers](#8-clean-up-the-old-leftovers)
9. [Names and Numbers](#9-names-and-numbers)
10. [Status Log](#10-status-log)
11. [GitHub Pages and Issues](#11-github-pages-and-issues)
12. [References](#12-references)

---

## 2. The Five Safety Rules

1. **Run `git status` before anything else.** It tells you which branch you're on and what changed.
2. **Never work on `main`.** Work on your branch (`4.8`). `main` only ever becomes a copy of it.
3. **Tag before you publish.** The tag is the backup. Once a version is tagged, nothing can lose it.
4. **Never use `--force` on its own.** Always `--force-with-lease`: it refuses when GitHub has work this computer hasn't seen.
5. **If a result looks different from "You should see", stop.** Go to [When Git Says No](#6-when-git-says-no) before typing anything else.

---

## 3. Save Your Work Without Publishing

Use this at the end of a session, so the work is safe on GitHub and on your other computers. `main` and the live site don't change.

**Step 1: See what changed.**

```bash
git status
```

You should see: `On branch 4.8` and your changed files.

**Step 2: Stage everything.**

```bash
git add -A
```

**Step 3: Commit it.**

```bash
git commit -m "Describe what changed"
```

You should see: `[4.8 1a2b3c4] Describe what changed`.

**Step 4: Upload it.**

```bash
git push origin 4.8
```

You should see: `4.8 -> 4.8`.

---

## 4. Finish a Version and Start the Next

Use this when `4.8` is finished. It's [chapter 1](#1-publish-your-branch-to-main) with the version's own tag, then a new branch, then the old branch is removed. The tag keeps everything, so deleting the branch loses nothing.

**Step 1:** Do [chapter 1](#1-publish-your-branch-to-main), Steps 1 to 10.

**Step 2: Make the version's tag.**

```bash
git tag -a v4.08 -m "Stable archive of branch 4.8"
```

**Step 3: Upload it.**

```bash
git push origin v4.08
```

You should see: `* [new tag] v4.08 -> v4.08`.

**Step 4:** Do [chapter 1](#1-publish-your-branch-to-main), Steps 13 to 16.

**Step 5: Make the next branch.**

```bash
git checkout -b 4.9
```

You should see: `Switched to a new branch '4.9'`.

**Step 6: Upload it.**

```bash
git push -u origin 4.9
```

You should see: `4.9 -> 4.9` and `branch '4.9' set up to track 'origin/4.9'`.

**Step 7: Delete the old branch on this computer.**

```bash
git branch -D 4.8
```

You should see: `Deleted branch 4.8`.

**Step 8: Delete it on GitHub.**

```bash
git push origin --delete 4.8
```

You should see: `- [deleted] 4.8`.

**Done.** Change the active row in the [Status Log](#10-status-log) to ✅ Archived and add a 🚧 Active row for `4.9`.

---

## 5. Another Computer Is Behind

Use this on a computer that hasn't seen the latest work, for example after publishing from the other one.

**Step 1: Ask GitHub what's new.**

```bash
git fetch --all --prune
```

You should see: a list of updated branches, or nothing.

**Step 2: Go to the current branch.**

```bash
git checkout 4.8
```

**Step 3: Download its latest.**

```bash
git pull origin 4.8
```

You should see: `Already up to date.` or a list of files.

**If the computer still has the branch before `4.8`,** delete it here (GitHub isn't affected):

```bash
git branch -D 4.7
```

### This Computer Is a Mess

Use this when the computer should simply match GitHub exactly.

> **Warning:** this deletes every change on this computer that isn't committed. If something's worth keeping, [put it aside](#switch-branches-with-half-done-work) first.

**Step 1:**

```bash
git fetch origin
```

**Step 2:**

```bash
git reset --hard origin/4.8
```

You should see: `HEAD is now at …`.

---

## 6. When Git Says No

### "Updates were rejected because the tip of your current branch is behind"

The other computer pushed to this branch while you worked here. Put your commits on top of theirs:

```bash
git pull origin 4.8 --rebase
```

Then push again:

```bash
git push origin 4.8
```

### "Can't push refs to remote. Try running Pull first", and pulling fails too

Both computers made different commits on the same branch. Decide which one is right.

**GitHub is right:** do [This Computer Is a Mess](#this-computer-is-a-mess).

**This computer is right:**

```bash
git push --force-with-lease origin 4.8
```

If that's refused too, look at what GitHub has that you don't:

```bash
git fetch origin
```

```bash
git log --oneline 4.8..origin/4.8
```

Only if those commits are worthless:

```bash
git push --force origin 4.8
```

### The terminal says "HEAD detached at …"

You opened a tag or a commit instead of a branch. Anything committed now belongs to no branch.

**Keep what you did:**

```bash
git checkout -b rescue-branch
```

**Throw it away and go back:**

```bash
git checkout 4.8
```

### Switch Branches With Half-Done Work

**Step 1: Put the work aside.**

```bash
git stash push -m "What I was doing"
```

**Step 2: Switch.**

```bash
git checkout main
```

**Later, to get it back:**

```bash
git checkout 4.8
```

```bash
git stash pop
```

### Look at an Old Version

The easy way: open the repository on GitHub, click **Tags**, and download the `.zip`.

In the terminal, open the tag as its own branch, so nothing current is touched. This opens `v4.08.1`:

```bash
git checkout -b look-4.08.1 v4.08.1
```

When you're done:

```bash
git checkout 4.8
```

```bash
git branch -D look-4.08.1
```

### Workflow Missing

`.github/workflows/static.yml` was created or edited on GitHub, which saves it straight to `main`. Bring it into the branch before publishing:

```bash
git checkout 4.8
```

```bash
git pull origin main
```

```bash
git push origin 4.8
```

### npm or nvm "command not found" in VS Code

They work in a normal terminal but not in VS Code: the fix is in [EDITOR.md](EDITOR.md#terminal-profile).

---

## 7. Set Up a New Computer

Once per computer. Follow only your system's lines.

### Step 1: Install Git

Linux (Ubuntu):

```bash
sudo apt update
```

```bash
sudo apt install -y git
```

Windows (PowerShell):

```powershell
winget install --id Git.Git -e
```

macOS:

```bash
xcode-select --install
```

Close and reopen the terminal, then check:

```bash
git --version
```

You should see: `git version 2.…`.

### Step 2: Tell Git Who You Are

It has to match the GitHub account. Same on every system, one line at a time:

```bash
git config --global user.name "TertiusRoach"
```

```bash
git config --global user.email "tertius.roach@gmail.com"
```

```bash
git config --global init.defaultBranch main
```

```bash
git config --global core.editor "code --wait"
```

### Step 3: Connect to GitHub

**Make a key** (every system). Press `Enter` at every question:

```bash
ssh-keygen -t ed25519 -C "tertius.roach@gmail.com"
```

**Load it.** Linux:

```bash
eval "$(ssh-agent -s)"
```

```bash
ssh-add ~/.ssh/id_ed25519
```

macOS:

```bash
eval "$(ssh-agent -s)"
```

```bash
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

Windows (PowerShell as Administrator):

```powershell
Get-Service ssh-agent | Set-Service -StartupType Automatic
```

```powershell
Start-Service ssh-agent
```

```powershell
ssh-add $env:USERPROFILE\.ssh\id_ed25519
```

**Show the public key** (Linux and macOS), then select and copy what it prints:

```bash
cat ~/.ssh/id_ed25519.pub
```

Windows copies it for you:

```powershell
Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub | Set-Clipboard
```

**Add it to GitHub:** open [github.com/settings/keys](https://github.com/settings/keys), click **New SSH key**, name it after the computer, paste, save.

> The key you paste always ends in `.pub`. The file without `.pub` is private: never share it.

**Test it:**

```bash
ssh -T git@github.com
```

You should see: `Hi TertiusRoach! You've successfully authenticated…`.

### Step 4: Install Node.js

Linux and macOS:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

Close and reopen the terminal, then:

```bash
nvm install --lts
```

```bash
nvm alias default 'lts/*'
```

Windows:

```powershell
winget install CoreyButler.NVMforWindows
```

Close and reopen the terminal, then:

```powershell
nvm install lts
```

```powershell
nvm use lts
```

Check it (every system):

```bash
node --version
```

You should see: `v22.…` or newer.

### Step 5: Download the Project

```bash
git clone git@github.com:TertiusRoach/development-portfolio_4.00.git
```

```bash
cd development-portfolio_4.00
```

```bash
git fetch --all --prune
```

```bash
git checkout 4.8
```

```bash
npm install
```

```bash
npm run app
```

You should see: the app at [localhost:8080](http://localhost:8080).

---

## 8. Clean Up the Old Leftovers

These are from before the tags-only rule. Each one is already inside a tag, so nothing is lost. Do it once, then delete this chapter.

**Branch `4.6`** (the same commit as `v4.06`):

```bash
git branch -D 4.6
```

```bash
git push origin --delete 4.6
```

**Branch `4.3-archive`** (only on this computer, inside `v4.03`):

```bash
git branch -D 4.3-archive
```

**Tag `4.01-archive`** (only on this computer). Give it a proper name, upload it, remove the old name:

```bash
git tag -a v4.01 4.01-archive -m "Stable archive of branch 4.01"
```

```bash
git push origin v4.01
```

```bash
git tag -d 4.01-archive
```

Then do [Another Computer Is Behind](#5-another-computer-is-behind) on the other computer.

---

## 9. Names and Numbers

| Thing         | Format     | Example    | Meaning                                                   |
| ------------- | ---------- | ---------- | --------------------------------------------------------- |
| Branch        | `#.#`      | `4.8`      | The version you're working on                             |
| Version tag   | `v#.##`    | `v4.08`    | The finished version, frozen for good                     |
| Patch tag     | `v#.##.#`  | `v4.08.2`  | A publish to `main` while the branch stays open           |
| `main`        | `main`     | `main`     | The live site, always equal to the last tag               |

Each `#` is one digit. Tags are zero-padded: `4.8` becomes `v4.08`, never `v4.8`. Patch tags count up from `1` inside a branch.

**Tags are the archive.** GitHub turns every tag into a `.zip` on the repository's **Tags** page. That's why finished branches get deleted: the tag holds everything.

---

## 10. Status Log

| Version     | Status       | Focus                                                                                              | Date       |
| ----------- | ------------ | -------------------------------------------------------------------------------------------------- | ---------- |
| **v4.01**   | ✅ Archived  | First archived build                                                                               | 2026-01-28 |
| **v4.02**   | ✅ Archived  | Desktop UI, testing, refactoring                                                                   | 2026-02-06 |
| **v4.03**   | ✅ Archived  | Desktop stable                                                                                     | 2026-04-29 |
| **v4.04**   | ✅ Archived  | Synced, cleaned, most complete build                                                               | 2026-07-23 |
| **v4.05**   | ✅ Archived  | Mobile layout matching desktop, reusable block scripts, Menu shades synced to Buttons              | 2026-10-06 |
| **v4.06**   | ✅ Archived  | ButtonDefault, ButtonProfile and ButtonRouting refactor, colour toggles                            | 2026-10-27 |
| **v4.07**   | ✅ Archived  | Tablet scaling, AsideCharacters, documentation overhaul                                            | 2026-11-06 |
| **v4.08.1** | ✅ Published | Image locations synced to the new asset layout, FontAwesome Free 7.3.1, card edges, squaring fades | 2026-11-07 |
| **4.8**     | 🚧 Active    |                                                                                                    | _Current_  |

Add a row with every publish. A patch tag is ✅ Published, because its branch is still open; a version tag is ✅ Archived.

---

## 11. GitHub Pages and Issues

### The Live Site

`main` is the live site: [tertiusroach.github.io/development-portfolio_4.00](https://tertiusroach.github.io/development-portfolio_4.00/).

- **How it updates:** Settings → Pages → Source is **GitHub Actions**. The workflow in `.github/workflows/static.yml` uploads `public/` every time `main` changes. `public/` is what `npm run deploy` builds, which is why [chapter 1](#1-publish-your-branch-to-main) builds before publishing.
- **Only the front end runs there.** GitHub Pages hosts plain files, so Express, MongoDB and email don't work on the live site.
- **Check a publish:** the **Actions** tab. Green tick = live. Red cross = click it to see which step broke.

### Tickets (Issues)

A ticket explains *why* code was written. Put its number in the commit message, and it closes by itself when the commit reaches `main`:

```bash
git commit -m "Fixes #5: Scaffold the Overtime page skeleton"
```

Ticket template:

```markdown
### Context

What this ticket does and why it's needed now.

### Tasks

- [ ] First step.
- [ ] Second step.

### Notes

- Anything worth remembering.
```

In the sidebar, set **Assignees** to yourself, **Labels** (`bug`, `enhancement`, `frontend`…), **Milestone** to the version (`v4.08`) and **Project** to the board.

---

## 12. References

| Topic            | Link                                                                                                                                                                      |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Git setup        | [GitHub Docs: Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)                                                                                    |
| SSH keys         | [GitHub Docs: Generating a new SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) |
| Tags             | [Git Book: Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)                                                                                                     |
| Force with lease | [Git Docs: git push](https://git-scm.com/docs/git-push#Documentation/git-push.txt---force-with-leaseltrefnamegt)                                                          |
| Stash            | [Git Docs: git stash](https://git-scm.com/docs/git-stash)                                                                                                                  |
| Issues           | [GitHub Docs: About Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues)                                                                 |
| GitHub Pages     | [GitHub Docs: Using custom workflows with GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)      |
| NVM (Linux, Mac) | [nvm-sh/nvm](https://github.com/nvm-sh/nvm)                                                                                                                                |
| NVM (Windows)    | [coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)                                                                                                      |
