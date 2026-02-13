Here is the comprehensive, industry-standard GITHUB.md file. It is structured to be a standalone manual for your release engineering and branch management, designed for offline reference.

# Development Workflow & Release Protocol

**Current Cycle:** v4.3 (Mobile Optimization)  
**Previous Release:** v4.02 (Desktop Stable)  
**Last Updated:** 2026-02-06

---

## 1. The Release Cycle (SOP)

**Objective:** Safely promote a development branch to production, archive the history, and initialize the next iteration.

Follow this exact sequence when a version (e.g., `4.02`) is feature-complete and ready for deployment.

### Phase A: Archive & Backup

_Never merge without a fallback. Create an immutable snapshot of your development state._

```bash
# 1. Checkout and update the development branch
git checkout 4.02
git pull origin 4.02

# 2. Create a dedicated archive branch
git checkout -b 4.02-archive

# 3. Push the archive to the remote server
git push origin 4.02-archive

Phase B: Production Deployment

Update main using a non-fast-forward merge to preserve the history of the feature branch.

# 1. Switch to production branch
git checkout main

# 2. Ensure production is up to date
git pull origin main

# 3. Merge the development branch
# --no-ff creates a merge commit, grouping all branch commits together
git merge --no-ff 4.02 -m "Release v4.02: Desktop Stable"

# 4. Push the updated production code
git push origin main

Phase C: Version Tagging

Tags are permanent milestones. Unlike branches, they do not move.

# 1. Create an annotated tag
git tag -a v4.02 -m "Release version 4.02 - Desktop Stable"

# 2. Push the tag to remote
git push origin v4.02

Phase D: Cleanup & Initialization

Remove the deprecated branch to prevent drift and start the new cycle.

# 1. Delete the old branch locally
git branch -d 4.02

# 2. Delete the old branch remotely
git push origin --delete 4.02

# 3. Create the new development branch from main
git checkout -b 4.3

# 4. Push and track the new branch upstream
git push -u origin 4.3

2. Multi-Device Synchronization

Objective: Update secondary computers to the new branch structure after a release cycle has occurred on the primary machine.

Scenario: Primary computer is on 4.3. Secondary computer is still on 4.02.

Step-by-Step Sync

Do not try to push from the secondary computer. You must fetch the new reality from the server.

# 1. Update remote references and remove deleted branches (prune)
git fetch --all --prune

# 2. Switch to the new branch (Git detects it on origin automatically)
git checkout 4.3

# 3. Pull the latest code to ensure sync
git pull origin 4.3

# 4. Delete the obsolete local branch
git branch -d 4.02

3. Emergency Operations (Force Actions)

Objective: Recover from history mismatches or "refused to merge" errors. ⚠️ WARNING: These commands rewrite history. Only use them if you are certain you want to overwrite the target.

Force Push (Overwriting Remote)

Use this if the remote branch is corrupted or needs to be exactly what you have locally.

# Overwrite the remote branch with your local version
git push origin <branch_name> --force

Hard Reset (Overwriting Local)

Use this if your local setup is broken and you want to match the server exactly. Destroys local unsaved changes.

# 1. Fetch the latest data
git fetch origin

# 2. Force local branch to match remote branch exactly
git reset --hard origin/<branch_name>

4. Industry Edge Cases & Troubleshooting

Objective: Solutions for common conflicts and "detached head" states.

Case A: "Updates were rejected because the tip of your current branch is behind"

Cause: Someone else pushed code to this branch while you were working. Solution: Pull with rebase to place your changes on top of theirs.

git pull origin <branch_name> --rebase

Case B: Detached HEAD State

Cause: You checked out a specific commit hash or tag instead of a branch. Solution: Create a temporary branch to save your spot, or switch back to a named branch.

# Option 1: Save current state to a new branch
git checkout -b temp-fix-branch

# Option 2: Go back to main (abandoning uncommitted changes)
git checkout main

Case C: Stashing Work in Progress

Cause: You need to switch branches but aren't ready to commit. Solution: Stash changes, switch, and pop them later.

# 1. Save changes to a temporary stack
git stash

# 2. Switch branches or pull updates
git pull origin <branch_name>

# 3. Re-apply your saved changes
git stash pop

📂 Project Status Log
Version	Status	Focus Area	Archive Reference
v4.02	✅ Released	Desktop UI, Testing, Refactoring	branch: 4.02-archive
v4.3	🚧 Active	Mobile Responsiveness, Feedback Loop	Current HEAD
```
