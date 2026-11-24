//--|🠊 building.js 🠈|--\\
//--|🠊 Copies one side into TraLogFin/building (GITHUB.md, The Live Site) 🠈|--\\
/*--|🠋
 
  GitHub runs it, not you: .github/workflows/building.yml calls it after every push to a shared
  branch (1.01, never 1.01-<name>) of front-end or back-end:

    node source/guards/building.js frontend <building folder>
    node source/guards/building.js backend <building folder>

  building holds both halves together, on the same 1.## branch. Each side replaces only its own files
  there: a file is this side's when its own ignore list (frontend.gitignore or backend.gitignore)
  doesn't ignore it. Files this side deleted are deleted in building too, and the other side's files
  are never touched. If the other side copied a second earlier, the push is refused; it starts again
  from GitHub's copy, up to 3 rounds.

  It refuses to run outside GitHub Actions, because it pushes. A rehearsal in a scratch folder sets
  BUILDING_REHEARSAL=1 (and its building folder points at a local copy, never GitHub).
🠉|--*/
//--|🠋 Packages 🠋|--\\
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

//--|🠋 Sides 🠋|--\\
const sides = {
  frontend: { name: 'front-end', list: 'frontend.gitignore' },
  backend: { name: 'back-end', list: 'backend.gitignore' },
};
const root = path.resolve(__dirname, '../..'); //--|🠈 This side's checkout: two levels up from source/guards/ 🠈|--\\
const rounds = 3;

//--|🠋 Copy 🠋|--\\
function copySide() {
  const side = sides[process.argv[2]];
  const given = process.argv[3];
  if (side === undefined || given === undefined) return stop('Use: node source/guards/building.js frontend|backend <building folder>');
  if (process.env.GITHUB_ACTIONS !== 'true' && process.env.BUILDING_REHEARSAL !== '1') return stop('It pushes to building, so only GitHub Actions runs it (.github/workflows/building.yml)');

  const building = path.resolve(given);
  if (building === root || building.startsWith(`${root}${path.sep}`)) return stop(`${building} is inside this side's checkout. building goes in a folder beside it`);
  if (!fs.existsSync(path.join(building, '.git'))) return stop(`${building} isn't a Git checkout of building`);
  if (!fs.existsSync(path.join(root, side.list))) return stop(`${side.list} is missing, so ${side.name}'s files can't be told apart. Nothing was copied`);

  const branch = run(root, ['symbolic-ref', '--short', 'HEAD']).text || process.env.GITHUB_REF_NAME || '';
  if (!/^\d+\.\d\d$/.test(branch)) return stop(`${side.name} is on "${branch}", and only a shared 1.## branch is copied into building`);
  const commit = run(root, ['rev-parse', '--short', 'HEAD']).text;
  const subject = run(root, ['log', '-1', '--format=%s']).text;
  const files = run(root, ['ls-files', '-z']).text.split('\0').filter(Boolean);

  for (let round = 1; round <= rounds; round++) {
    if (startFrom(building, branch) === false) return;
    replaceFiles(side, files, building);
    run(building, ['add', '-A']);
    if (run(building, ['diff', '--cached', '--quiet']).ok === true) return say(`building ${branch} already has ${side.name} @ ${commit}`);
    const message = `${side.name} ${branch} @ ${commit}: ${subject}`;
    if (run(building, ['commit', '--quiet', '-m', message]).ok === false) return stop('the commit in building failed');
    if (loud(building, ['push', 'origin', `HEAD:refs/heads/${branch}`]) === true) return say(`building ${branch} now has ${side.name} @ ${commit}`);
    warn(`round ${round}: building moved on GitHub while copying (the other side, probably). Starting again from GitHub's copy`);
  }
  stop(`building's push was refused ${rounds} times. Re-run the job in GitHub's Actions tab`);
}

//--|🠋 Steps 🠋|--\\
let startFrom = (building, branch) => {
  //--|🠊 Always from GitHub's copy, so nothing left over from a refused round stays 🠈|--\\
  if (run(building, ['fetch', '--quiet', 'origin']).ok === false) return stop('GitHub\'s building couldn\'t be fetched');
  let start = `origin/${branch}`;
  if (run(building, ['rev-parse', '--verify', '--quiet', start]).ok === false) {
    start = run(building, ['symbolic-ref', '--short', 'refs/remotes/origin/HEAD']).text || 'origin/main'; //--|🠈 A new 1.## starts from building's default branch 🠈|--\\
    say(`building has no ${branch} yet, so it starts from ${start}`);
  }
  if (run(building, ['switch', '--force', '-C', branch, start]).ok === false) return stop(`building couldn't switch to ${branch}`);
  run(building, ['clean', '-ffdq']); //--|🠈 building is written by this script only: no one's work lives in this checkout 🠈|--\\
  return true;
};
let replaceFiles = (side, files, building) => {
  const keep = new Set(files);
  const theirs = ignoredBy(path.join(root, side.list), run(building, ['ls-files', '-z']).text.split('\0').filter(Boolean));
  for (const file of run(building, ['ls-files', '-z']).text.split('\0').filter(Boolean)) {
    if (theirs.has(file) || keep.has(file)) continue;
    fs.rmSync(path.join(building, file), { force: true }); //--|🠈 This side's file, deleted on this side since the last copy 🠈|--\\
  }
  for (const file of files) {
    const from = path.join(root, file);
    const to = path.join(building, file);
    if (!fs.existsSync(from)) continue; //--|🠈 Tracked but deleted and not yet committed: never the case on GitHub 🠈|--\\
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.copyFileSync(from, to);
    fs.chmodSync(to, fs.statSync(from).mode);
  }
};
let ignoredBy = (list, files) => {
  //--|🠊 An empty repository whose only rule is the side's list: check-ignore then answers for paths that aren't there 🠈|--\\
  const empty = fs.mkdtempSync(path.join(os.tmpdir(), 'building-'));
  run(empty, ['init', '--quiet', '--template=']);
  fs.mkdirSync(path.join(empty, '.git', 'info'), { recursive: true });
  fs.copyFileSync(list, path.join(empty, '.git', 'info', 'exclude'));
  const result = spawnSync('git', ['-C', empty, 'check-ignore', '--no-index', '--stdin', '-z'], { input: files.join('\0'), encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 });
  fs.rmSync(empty, { recursive: true, force: true });
  return new Set((result.stdout || '').split('\0').filter(Boolean));
};

//--|🠋 Commands 🠋|--\\
var run = (folder, words) => {
  const result = spawnSync('git', ['-C', folder, ...words], { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 });
  return { ok: result.status === 0, text: (result.stdout || '').trim() };
};
var loud = (folder, words) => {
  const result = spawnSync('git', ['-C', folder, ...words], { stdio: 'inherit' });
  return result.status === 0;
};

//--|🠋 Messages 🠋|--\\
var say = (text) => console.log(`|--🠊 Guidance: ${text}, building.js 🠈--|`);
var warn = (text) => console.log(`|--🠊 Warning: ${text}, building.js 🠈--|`);
var stop = (text) => {
  console.log(`|--🠊 Error: ${text}, building.js 🠈--|`);
  process.exitCode = 1;
  return false;
};

copySide();
