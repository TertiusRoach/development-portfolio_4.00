# Development Workflow & Release Protocol

**Current Cycle:** v4.3 (Mobile Optimization)  
**Previous Release:** v4.02 (Desktop Stable)  
**Last Updated:** 2026-02-06

---

## ⚡ Standard Operating Procedure (SOP)

Follow this exact sequence to finalize a development branch (e.g., `4.02`) and transition to the next cycle (e.g., `4.3`).

### 1. Archive (The Save Point)

_Objective: Create an immutable backup of the development state before touching production._

```bash
# 1. Ensure local dev branch is current
git checkout 4.02
git pull origin 4.02

# 2. Create and push archive branch
git checkout -b 4.02-archive
git push origin 4.02-archive

# 1. Switch to main and sync
git checkout main
git pull origin main

# 2. Merge development branch
git merge --no-ff 4.02 -m "Release v4.02: Desktop Stable"

# 3. Push to production
git push origin main

# 1. Create annotated tag
git tag -a v4.02 -m "Release version 4.02 - Desktop Stable"

# 2. Push tag to remote
git push origin v4.02

# 1. Delete local branch
git branch -d 4.02

# 2. Delete remote branch
git push origin --delete 4.02

# 1. Create new branch from main
git checkout -b 4.3

# 2. Push and track upstream
git push -u origin 4.3
```
