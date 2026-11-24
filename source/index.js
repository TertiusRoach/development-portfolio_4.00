//--|🠊 index.js 🠈|--\\
//--|🠊 Was setup.js in the root; moved here by Tertius to reduce clutter 🠈|--\\
//--|🠊 Builds the TraLogFin folder on a new machine (GITHUB.md, Set Up a New Computer) 🠈|--\\
/*--|🠋
  One folder, two repositories. This does in one command what GITHUB.md, Set Up a New Computer, Step 5, does by hand:
    1. clones both repositories, bare, into an empty folder: .frontend.git and .backend.git;
    2. turns each into a working repository on YOUR branch, #.##-<your GitHub name> (CONTRIBUTING.md, Branches),
       where #.## is the newest shared branch on GitHub, made from it if it isn't on GitHub yet;
    3. gives each its list of files to leave alone (frontend.gitignore, backend.gitignore → info/exclude);
    4. writes the .git file, so plain git and VS Code see the front end;
    5. runs npm install, which installs the guards on its own (prepare, in package.json).
  It never deletes anything, and it refuses a folder that isn't empty.
  Without access to the back end, it carries on with the front end only.

  Run it with:
    node source/index.js <empty folder>                  over SSH (GITHUB.md, Set Up a New Computer, Step 3)
    node source/index.js <empty folder> --https          over HTTPS, signed in with gh auth login
    node source/index.js <empty folder> --from <folder>  copies an existing tralogfin_1.00 on this computer
    … --user <GitHub name>                                names your branch; without it, gh says who is signed in
🠉|--*/
//--|🠋 Packages 🠋|--\\
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

//--|🠋 Repositories: no version number here; the newest #.## on GitHub is the one in use (GITHUB.md, Names and Numbers) 🠋|--\\
const repositories = [
  { folder: '.frontend.git', name: 'front-end', ignoreList: 'frontend.gitignore', required: true },
  { folder: '.backend.git', name: 'back-end', ignoreList: 'backend.gitignore', required: false }, //--|🠈 A front-end developer may not have access to it 🠈|--\\
];
const owner = 'TraLogFin'; //--|🠈 The organization; building and TraLogFin.github.io are written by automation, never cloned here 🠈|--\\

//--|🠋 Setup 🠋|--\\
function setupFolder() {
  const { target, source, user } = readArguments();
  let person = user;
  if (person === '') person = gitHubName();
  if (person === '') warn('No GitHub name (sign in with gh auth login, or add --user <name>), so the shared branch is checked out. Sync makes your own branch the first time'); //--|🠈 Nothing is ever committed on the shared branch, so this is safe 🠈|--\\
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
      if (repository.required === false) {
        warn(`${repository.name} couldn't be cloned (no access, or no internet). Carrying on with the front end only: the designs work, the server doesn't`);
        continue;
      } else {
        return stop(`${repository.name} couldn't be cloned. Check the internet connection and the sign-in (GITHUB.md, Set Up a New Computer, Step 3)`);
      }
    }
    const branch = makeWorking(target, repository, person);
    if (branch === '') return stop(`${repository.name} couldn't check out its newest #.## branch. Is there one on GitHub?`);
    ready.push({ ...repository, branch });
  }
  if (new Set(ready.map((repository) => repository.branch.replace(/-.*$/, ''))).size > 1) {
    warn(`The repositories are on different versions (${ready.map((repository) => `${repository.name} ${repository.branch}`).join(', ')}). Ask the other owner: a finished version is finished in all of them the same day`);
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

  //--|🠊 5: one node_modules for both sides 🠈|--\\
  say('Installing the packages (npm install)');
  let install = ['install', '--no-fund'];
  if (ready.length < repositories.length) {
    install = ['install', '--no-fund', '--no-save']; //--|🠈 Front end only: --no-save keeps package-lock.json as the repositories have it 🠈|--\\
  } else {
    install = ['install', '--no-fund'];
  }
  if (run(target, 'npm', install) === false) {
    warn('npm install failed, so the guards are not installed yet. Run it again inside the folder once the problem is fixed (GITHUB.md, npm or nvm "command not found")'); //--|🠈 The guards come with npm install now (prepare) 🠈|--\\
  }

  for (const repository of ready) {
    say(`${repository.name}: on ${repository.branch}`);
  }
  if (source.kind === 'folder')
    warn(
      `origin is the folder it was copied from, not GitHub. To fetch from GitHub instead, run inside it: git remote set-url origin <the GitHub address>, then the same with --git-dir=.backend.git`,
    );
  say(`Done. Open ${target} in VS Code, or run: cd ${target} && npm run launch`); //--|🠈 npm run app is now npm run launch 🠈|--\\
}

//--|🠋 Working Repository 🠋|--\\
let makeWorking = (target, repository, person) => {
  const git = ['--git-dir', repository.folder];
  const first = [
    ['config', 'core.bare', 'false'], //--|🠈 A download-only copy becomes one that works on files 🠈|--\\
    ['config', 'core.worktree', '..'], //--|🠈 Its files are the folder around it 🠈|--\\
    ['config', 'remote.origin.fetch', '+refs/heads/*:refs/remotes/origin/*'], //--|🠈 So it can see GitHub's branches 🠈|--\\
    ['fetch', 'origin'],
  ];
  for (const step of first) {
    if (run(target, 'git', [...git, ...step]) === false) return '';
  }

  //--|🠊 The shared branch: the newest #.## on GitHub. 🠈|--\\
  const names = read(target, [...git, 'for-each-ref', '--format=%(refname:lstrip=3)', 'refs/remotes/origin/']).split('\n');
  const shared = names.filter((name) => /^\d+\.\d\d$/.test(name)).sort((a, b) => {
    const [aMajor, aMinor] = a.split('.').map(Number);
    const [bMajor, bMinor] = b.split('.').map(Number);
    return aMajor - bMajor || aMinor - bMinor;
  });
  if (shared.length === 0) return '';
  const newest = shared[shared.length - 1];

  //--|🠊 Your own branch: GitHub's copy when another computer made it, otherwise a new one from the shared branch 🠈|--\\
  let branch = newest;
  if (person !== '') branch = `${newest}-${person}`;
  const onGitHub = check(target, [...git, 'rev-parse', '--verify', '--quiet', `refs/remotes/origin/${branch}`]);
  const here = check(target, [...git, 'rev-parse', '--verify', '--quiet', `refs/heads/${branch}`]);
  if (here === false) {
    if (run(target, 'git', [...git, 'branch', branch, `origin/${newest}`]) === false) return '';
    say(`${repository.name}: your branch ${branch} starts from ${newest}`);
  }

  const steps = [
    ['symbolic-ref', 'HEAD', `refs/heads/${branch}`], //--|🠈 Pick the branch 🠈|--\\
    ['reset', '--quiet'], //--|🠈 Load it without touching any file; --quiet, or it lists every file as deleted for a moment 🠈|--\\
    ['checkout', '--', '.'], //--|🠈 Write the files; a plain checkout refuses once the shared files exist 🠈|--\\
  ];
  if (onGitHub === true) steps.push(['branch', '-u', `origin/${branch}`]); //--|🠈 Link the branch to GitHub's; a new one is linked by its first sync 🠈|--\\
  for (const step of steps) {
    if (run(target, 'git', [...git, ...step]) === false) return '';
  }
  return branch;
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
  let user = '';
  for (let index = 0; index < words.length; index++) {
    if (words[index] === '--https') {
      source = { kind: 'https' };
    } else if (words[index] === '--user') {
      user = words[index + 1] || '';
      index++;
    } else if (words[index] === '--from') {
      source = { kind: 'folder', folder: words[index + 1] };
      index++;
    } else {
      target = path.resolve(words[index]);
    }
  }
  return { target, source, user };
};

//--|🠋 Commands 🠋|--\\
var run = (folder, command, words) => {
  const result = spawnSync(command, words, { cwd: folder, stdio: 'inherit', shell: process.platform === 'win32' }); //--|🠈 Windows finds npm.cmd only through a shell 🠈|--\\
  return result.status === 0;
};

var read = (folder, words) => (spawnSync('git', words, { cwd: folder, encoding: 'utf8' }).stdout || '').trim();
var check = (folder, words) => spawnSync('git', words, { cwd: folder, stdio: 'ignore' }).status === 0; //--|🠈 A yes-or-no question to git, printing nothing 🠈|--\\
var gitHubName = () => {
  const result = spawnSync('gh', ['api', 'user', '--jq', '.login'], { encoding: 'utf8' });
  if (result.error !== undefined || result.status !== 0) return '';
  return (result.stdout || '').trim();
};

//--|🠋 Messages 🠋|--\\
var say = (text) => console.log(`|--🠊 Guidance: ${text}, source/index.js 🠈--|`);
var warn = (text) => console.log(`|--🠊 Warning: ${text}, source/index.js 🠈--|`);
var stop = (text) => {
  console.log(`|--🠊 Error: ${text}, source/index.js 🠈--|`);
  process.exitCode = 1;
};

setupFolder();
