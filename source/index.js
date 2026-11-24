//--|🠊 index.js 🠈|--\\
//--|🠊 AI Code: Review Please 2026-11-24 · Was setup.js in the root; moved here by the owner to reduce clutter 🠈|--\\
//--|🠊 AI Code: Review Please 2026-11-23 · Builds the TraLogFin folder on a new machine (GITHUB.md, Set Up a New Computer, Step 5) 🠈|--\\
/*--|🠋
  One folder, two repositories. This does in one command what GITHUB.md § 7 Step 5 does by hand:
    1. clones both repositories, bare, into an empty folder: .frontend.git and .backend.git;
    2. turns each into a working repository on its branch (the Branches table below);
    3. gives each its list of files to leave alone (frontend.gitignore, backend.gitignore → info/exclude);
    4. writes the .git file, so plain git and VS Code see the front end, and installs the guards;
    5. runs npm install.
  It never deletes anything, and it refuses a folder that isn't empty.
  Without access to the private back end, it carries on with the front end only.

  Run it with:
    node source/index.js <empty folder>                  over SSH (GITHUB.md § 7, Step 3)
    node source/index.js <empty folder> --https          over HTTPS, signed in with gh auth login
    node source/index.js <empty folder> --from <folder>  copies an existing tralogfin_1.00 on this computer
🠉|--*/
//--|🠋 Packages 🠋|--\\
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

//--|🠋 Branches: change these when a version is finished (GITHUB.md, Branches and Tags Go in Pairs) 🠋|--\\
const repositories = [
  { folder: '.frontend.git', name: 'development-portfolio_4.00', branch: '4.09', ignoreList: 'frontend.gitignore', private: false },
  { folder: '.backend.git', name: 'backend-architecture_2.00', branch: '2.01', ignoreList: 'backend.gitignore', private: true },
];
const owner = 'TertiusRoach';

//--|🠋 Setup 🠋|--\\
function setupFolder() {
  const { target, source } = readArguments();
  if (source.kind === 'folder' && !source.folder) return stop('Name the folder to copy from: node source/index.js <empty folder> --from <folder>');
  if (!target) return stop('Name an empty folder: node source/index.js <empty folder>');
  if (fs.existsSync(target) && fs.readdirSync(target).length > 0)
    return stop(`${target} isn't empty. source/index.js only builds into an empty folder, so it can never overwrite work`);
  fs.mkdirSync(target, { recursive: true });

  //--|🠊 1 and 2: clone each repository and give it its files 🠈|--\\
  const ready = [];
  for (const repository of repositories) {
    say(`Cloning ${repository.name} into ${repository.folder}`);
    const cloned = run(target, 'git', ['clone', '--bare', addressOf(repository, source), repository.folder]);
    if (cloned === false) {
      if (repository.private === true) {
        warn(`${repository.name} is private and couldn't be cloned. Carrying on with the front end only: the designs work, the server doesn't`);
        continue;
      } else {
        return stop(`${repository.name} couldn't be cloned. Check the internet connection and the sign-in (GITHUB.md § 7, Step 3)`);
      }
    }
    if (makeWorking(target, repository) === false)
      return stop(`${repository.name} couldn't check out ${repository.branch}. Is that branch on GitHub?`);
    ready.push(repository);
  }

  //--|🠊 3: each repository's list of files to leave alone 🠈|--\\
  for (const repository of ready) {
    const list = path.join(target, repository.ignoreList);
    if (fs.existsSync(list)) {
      fs.copyFileSync(list, path.join(target, repository.folder, 'info', 'exclude'));
    } else {
      warn(`${repository.ignoreList} is missing, so ${repository.name} may list the other side's files as new`);
    }
  }

  //--|🠊 4: plain git and VS Code see the front end 🠈|--\\
  fs.writeFileSync(path.join(target, '.git'), 'gitdir: .frontend.git\n');

  //--|🠊 The guards: hooks are never cloned, so they're written here (PIPELINE.md, The Guards) 🠈|--\\
  if (fs.existsSync(path.join(target, 'source', 'modules', 'guards', 'install.js'))) {
    run(target, 'node', ['source/modules/guards/install.js']);
  } else {
    warn('No guards without the back end: commits and pushes from this folder are not checked');
  }

  //--|🠊 5: one node_modules for both sides 🠈|--\\
  say('Installing the packages (npm install)');
  let install = ['install', '--no-fund'];
  if (ready.length < repositories.length) {
    install = ['install', '--no-fund', '--no-save']; //--|🠈 Front end only: --no-save keeps package-lock.json as the repositories have it 🠈|--\\
  } else {
    install = ['install', '--no-fund'];
  }
  if (run(target, 'npm', install) === false) {
    warn('npm install failed. Run it again inside the folder once the problem is fixed (GITHUB.md, npm or nvm "command not found")');
  }

  for (const repository of ready) {
    say(`${repository.name}: on ${repository.branch}, following origin/${repository.branch}`);
  }
  if (source.kind === 'folder')
    warn(
      `origin is the folder it was copied from, not GitHub. To fetch from GitHub instead, run inside it: git remote set-url origin <the GitHub address>, then the same with --git-dir=.backend.git`,
    );
  say(`Done. Open ${target} in VS Code, or run: cd ${target} && npm run launch`); //--|🠈 AI Code: Review Please 2026-11-24 · npm run app is now npm run launch 🠈|--\\
}

//--|🠋 Working Repository 🠋|--\\
let makeWorking = (target, repository) => {
  const git = ['--git-dir', repository.folder];
  const steps = [
    ['config', 'core.bare', 'false'], //--|🠈 A download-only copy becomes one that works on files 🠈|--\\
    ['config', 'core.worktree', '..'], //--|🠈 Its files are the folder around it 🠈|--\\
    ['config', 'remote.origin.fetch', '+refs/heads/*:refs/remotes/origin/*'], //--|🠈 So it can see GitHub's branches 🠈|--\\
    ['fetch', 'origin'],
    ['symbolic-ref', 'HEAD', `refs/heads/${repository.branch}`], //--|🠈 Pick the branch 🠈|--\\
    ['reset', '--quiet'], //--|🠈 Load it without touching any file; --quiet, or it lists every file as deleted for a moment 🠈|--\\
    ['checkout', '--', '.'], //--|🠈 Write the files; a plain checkout refuses once the shared files exist 🠈|--\\
    ['branch', '-u', `origin/${repository.branch}`], //--|🠈 Link the branch to GitHub's 🠈|--\\
  ];
  for (const step of steps) {
    if (run(target, 'git', [...git, ...step]) === false) return false;
  }
  return true;
};

//--|🠋 Addresses 🠋|--\\
let addressOf = (repository, source) => {
  if (source.kind === 'folder') {
    return path.resolve(source.folder, repository.folder);
  } else if (source.kind === 'https') {
    return `https://github.com/${owner}/${repository.name}.git`;
  } else {
    return `git@github.com:${owner}/${repository.name}.git`;
  }
};

//--|🠋 Arguments 🠋|--\\
let readArguments = () => {
  const words = process.argv.slice(2);
  let target = null;
  let source = { kind: 'ssh' };
  for (let index = 0; index < words.length; index++) {
    if (words[index] === '--https') {
      source = { kind: 'https' };
    } else if (words[index] === '--from') {
      source = { kind: 'folder', folder: words[index + 1] };
      index++;
    } else {
      target = path.resolve(words[index]);
    }
  }
  return { target, source };
};

//--|🠋 Commands 🠋|--\\
var run = (folder, command, words) => {
  const result = spawnSync(command, words, { cwd: folder, stdio: 'inherit', shell: process.platform === 'win32' }); //--|🠈 Windows finds npm.cmd only through a shell 🠈|--\\
  return result.status === 0;
};

//--|🠋 Messages 🠋|--\\
var say = (text) => console.log(`|--🠊 Guidance: ${text}, source/index.js 🠈--|`);
var warn = (text) => console.log(`|--🠊 Warning: ${text}, source/index.js 🠈--|`);
var stop = (text) => {
  console.log(`|--🠊 Error: ${text}, source/index.js 🠈--|`);
  process.exitCode = 1;
};

setupFolder();
