# Editor

This project is built in [Visual Studio Code](https://code.visualstudio.com/). This page covers the shortcuts I use every day, what the `.vscode/` folder does for you, and how to keep the Explorer readable while the project grows.

---

## Shortcuts

| Action                    | Windows & Linux        | macOS                | What it does                                                            |
| ------------------------- | ---------------------- | -------------------- | ----------------------------------------------------------------------- |
| **Command Palette**       | `Ctrl + Shift + P`     | `Cmd + Shift + P`    | Runs any VS Code command by name                                        |
| **Collapse Folders**      | Command Palette        | Command Palette      | Type _Collapse Folders in Explorer_. There's no default shortcut       |
| **Collapse Sections**     | `Ctrl + K`, then `0`   | `Cmd + K`, then `0`  | Folds every code section (place the caret in the root scope first)      |
| **Expand Sections**       | `Ctrl + K`, then `J`   | `Cmd + K`, then `J`  | Unfolds everything again                                                |
| **Open Terminal**         | ``Ctrl + ` ``          | ``Ctrl + ` ``        | Toggles the built-in terminal                                           |
| **Open Settings**         | `Ctrl + ,`             | `Cmd + ,`            | Opens the settings                                                      |
| **See Props & Callbacks** | `Ctrl + Space`         | `Ctrl + Space`       | IntelliSense: lists a component's props and callbacks while you type    |
| **Open Run & Debug**      | `Ctrl + Shift + D`     | `Cmd + Shift + D`    | Opens the debugger, where **Run Application** lives                     |
| **Stop the Server**       | `Ctrl + C`             | `Ctrl + C`           | Stops whatever is running in the focused terminal                       |

---

## What `.vscode/` Does

The `.vscode/` folder is committed, so every machine gets the same setup.

| File            | What it does                                                                                                                       |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `tasks.json`    | Runs `npm run app` automatically when the folder opens, so the development server starts on its own (Linux loads NVM first)         |
| `launch.json`   | **Run Application** starts Webpack (`Go Webpack`) and opens Chrome on `http://localhost:8080` (`Chrome Console`) together           |
| `settings.json` | Uses the project's own TypeScript version, and teaches the spell checker the project's made-up words (`clockboard`, `Voidspire`…)   |

If port 8080 is still taken after the server stops, free it with:

```bash
npm run stop
```

---

## Terminal Profile

**Symptom:** `npm`, `node` or `nvm` work in a normal terminal but say "command not found" inside VS Code.

**Cause:** VS Code opened the wrong shell. On Linux it's often `sh` (the prompt looks like `sh-5.3$`), which doesn't load NVM.

**Fix:**

1. Open the Command Palette.
2. Type **Terminal: Select Default Profile**.
3. Pick **bash** on Linux, **zsh** on macOS, or **Git Bash** or **PowerShell** on Windows.
4. Close the terminal and open a new one.

---

## Keeping the Explorer Readable

### Folder Tags

I use the [Folder Tags](https://marketplace.visualstudio.com/search?term=Folder%20Tags%20Kedar%20Jevargi&target=VSCode) extension by Kedar Jevargi to colour-code folders. **Purple** marks the folders I'm actively working on, so I can find them at a glance.

### Hiding Folders

VS Code can hide folders you don't want to see right now. It only changes the Explorer: nothing is deleted, and search still finds the files.

> **Rule:** nothing is hidden by default, because nothing is ever finished. Every component is still being refactored. Hiding is a personal tool for focusing, never a project setting.

To hide something for yourself:

1. Open Settings (`Ctrl + ,` or `Cmd + ,`) and make sure the **User** tab is selected, not **Workspace**.
2. Search for `files.exclude`.
3. Click **Add Pattern** and type the folder path, for example `source/layouts/components/Fieldset`.

Use the **User** tab so the change stays on your machine. The **Workspace** tab writes into `.vscode/settings.json`, which is committed and would hide the folder for everyone.

To bring it back, delete the pattern from the same list.
