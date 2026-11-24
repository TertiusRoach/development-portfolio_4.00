//--|🠊 sync.js 🠈|--\\
//--|🠊 npm run sync:frontend and sync:backend, status and pull (GITHUB.md, Two Repositories, One Folder) 🠈|--\\
/*--|🠋
  One folder, two repositories, one command per side. Each side syncs its own repository and
  only pulls the other one, so a developer with one repository has everything they need:

    npm run sync:frontend -w source/layouts                   commits and pushes the front end, pulls the back end
    npm run sync:backend -w source/modules                    commits and pushes the back end, pulls the front end
    npm run sync:frontend -w source/layouts -- "A message"    the same, with the message given

  Two more, off the npm menu (EDITOR.md, The Scripts):
    node source/guards/sync.js pull      pulls every repository in the folder, fast-forward only (VS Code runs it on open)
    node source/guards/sync.js status    where each repository stands, changes nothing

  The other side's pull is fast-forward only, so it can never overwrite work. Your own side is
  committed first, then put on top of whatever is new on GitHub (a rebase); when both of you changed
  the same lines it undoes the rebase and stops (GITHUB.md, Both Changed the Same Lines). Commits and
  pushes go through the hooks like any other (commit.js, push.js). It stops at the first problem and says why.
  Shared since 2026-11-24: both repositories track source/guards/, so it travels with each one.
🠉|--*/
//--|🠋 Packages 🠋|--\\
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { spawnSync } = require('child_process');

//--|🠋 Sides 🠋|--\\
const sides = [
  { key: 'frontend', gitDir: '.frontend.git', name: 'development-portfolio_4.00' },
  { key: 'backend', gitDir: '.backend.git', name: 'backend-architecture_2.00' },
];
const shared = ['source/guards/']; //--|🠈 New files here go into both repositories on purpose (CLAUDE.md, What This Is) 🠈|--\\
const root = path.resolve(__dirname, '../..'); //--|🠈 The TraLogFin folder: two levels up from source/guards/ 🠈|--\\

//--|🠋 Sync 🠋|--\\
async function syncFolder() {
  process.chdir(root); //--|🠈 npm runs a workspace's script inside that workspace, and git needs the root 🠈|--\\
  const mode = process.argv[2];
  const present = sides.filter((side) => fs.existsSync(side.gitDir));
  if (present.length === 0) return stop('Neither .frontend.git nor .backend.git is here. Run it inside the TraLogFin folder');

  if (mode === 'status') {
    fetchAll(present);
    showStatus(present);
  } else if (mode === 'pull') {
    if (pullAll(present) === false) return;
    showStatus(present);
  } else if (mode === 'frontend' || mode === 'backend') {
    const own = sides.find((side) => side.key === mode);
    if (!present.includes(own)) return stop(`${own.gitDir} isn't here, so there's no ${own.name} to sync. Use the other side's sync`);
    await syncSide(own, present, process.argv.slice(3).join(' ').trim());
  } else {
    stop('Use: node source/guards/sync.js status | pull | frontend ["message"] | backend ["message"]');
  }
}

//--|🠋 Status 🠋|--\\
let fetchAll = (present) => {
  for (const side of present) {
    const fetched = quiet(side, ['fetch', '--quiet', 'origin']);
    if (fetched.ok === false) warn(`${side.name}: GitHub couldn't be reached, so ahead and behind are as of the last fetch`);
  }
};
let showStatus = (present) => {
  for (const side of present) {
    const branch = branchOf(side);
    const counts = quiet(side, ['rev-list', '--left-right', '--count', `HEAD...origin/${branch}`]);
    let position = 'not on GitHub yet';
    if (counts.ok === true) {
      const [ahead, behind] = counts.text.split(/\s+/);
      position = `${ahead} ahead, ${behind} behind GitHub`;
    }
    const changes = changesOf(side);
    say(`${side.name} on ${branch}: ${position}, ${changes.length} changed`);
    for (const change of changes.slice(0, 15)) console.log(`    ${change}`);
    if (changes.length > 15) console.log(`    … and ${changes.length - 15} more`);
  }
  if (present.length === sides.length) {
    const nobody = ownedByNobody();
    if (nobody.length > 0) {
      warn(`${nobody.length} new files belong to neither side: ${nobody.slice(0, 5).join(', ')}. Decide each one's side (CLAUDE.md, What This Is)`);
    }
    const differing = sharedDiffering();
    if (differing.length > 0) warn(`These shared files differ between the two repositories: ${differing.join(', ')}. Sync the other side too`);
  }
  const pairs = checkPairs(present);
  if (pairs !== '') warn(pairs);
};

//--|🠋 Pull 🠋|--\\
let pullAll = (present) => {
  for (const side of present) {
    const branch = branchOf(side);
    say(`Pulling ${side.name} (${branch}), fast-forward only`);
    if (loud(side, ['pull', '--ff-only', 'origin', branch]) === false) {
      stop(`${side.name} couldn't pull. Either a change here would be overwritten, or the two copies went different ways. Nothing was changed; run node source/guards/sync.js status and decide before syncing (GITHUB.md, When Git Says No)`); //--|🠈 status is off the npm menu 🠈|--\\
      return false;
    }
  }
  return true;
};

//--|🠋 Sync One Side 🠋|--\\
let syncSide = async (own, present, given) => {
  //--|🠊 1: the branches must be a pair before anything moves 🠈|--\\
  const pairs = checkPairs(present);
  if (pairs !== '') return stop(pairs);
  const branch = branchOf(own);

  //--|🠊 2: the other side is only pulled, fast-forward only; your side is only fetched, because it may hold commits GitHub hasn't seen 🠈|--\\
  for (const side of present) {
    if (side === own) {
      if (quiet(own, ['fetch', '--quiet', 'origin']).ok === false) return stop(`${own.name}: GitHub couldn't be reached. Nothing was changed; sync again when you're online`);
    } else {
      say(`Pulling ${side.name} (${branchOf(side)}), fast-forward only`);
      if (loud(side, ['pull', '--ff-only', 'origin', branchOf(side)]) === false) {
        warn(`${side.name} couldn't pull, so it was left as it was. Run sync:${side.key} to bring it level`); //--|🠈 Not your side to fix here, so it warns and carries on 🠈|--\\
      }
    }
  }
  if (present.length === sides.length) {
    const nobody = ownedByNobody();
    if (nobody.length > 0) {
      for (const file of nobody) console.log(`    ${file}`);
      return stop(`${nobody.length} new files belong to neither side. Add each to frontend.gitignore or backend.gitignore (the side that leaves it alone), or delete it, then sync again`);
    }
  }

  //--|🠊 3: stage this side only, and see if anything changed 🠈|--\\
  quiet(own, ['add', '-A']);
  const changed = quiet(own, ['diff', '--cached', '--quiet']).ok === false;

  //--|🠊 4: one message, one commit. Committing first means nothing is left loose when GitHub's commits come in 🠈|--\\
  if (changed === true) {
    let message = given;
    if (message === '') message = await ask('Describe what changed: ');
    if (message === '') return stop('No message, so nothing was committed. The changes are staged; sync again with a message');
    if (loud(own, ['commit', '-m', message]) === false) return stop(`${own.name} didn't commit (read the guard's message above). Nothing was committed`);
  } else {
    say(`Nothing changed in ${own.name} since the last commit`);
  }

  //--|🠊 5: catch up with GitHub, then push. Up to three rounds, in case the other owner pushes a second before you 🠈|--\\
  for (let round = 1; round <= 3; round++) {
    if (round > 1 && quiet(own, ['fetch', '--quiet', 'origin']).ok === false) return stop(`${own.name}: GitHub couldn't be reached. Your commits are safe on this computer; sync again when you're online`);
    if (catchUp(own, branch) === false) return;

    const ahead = quiet(own, ['rev-list', '--count', `origin/${branch}..HEAD`]);
    if (ahead.ok === true && ahead.text === '0') {
      say(`${own.name} is in step with GitHub`);
      break;
    }
    say(`Pushing ${own.name} (${branch})`);
    if (loud(own, ['push', 'origin', branch]) === true) {
      say(`${own.name} is in step with GitHub`);
      break;
    }

    //--|🠊 A refused push is either the guard, or GitHub moved on while we worked: only the second is worth another round 🠈|--\\
    quiet(own, ['fetch', '--quiet', 'origin']);
    const behind = quiet(own, ['rev-list', '--count', `HEAD..origin/${branch}`]);
    if (behind.ok === true && behind.text !== '0' && round < 3) {
      say(`Someone pushed to ${own.name} a moment ago. Catching up and trying again (${round + 1} of 3)`);
      continue;
    }
    if (behind.ok === true && behind.text !== '0') {
      return stop(`${own.name} moved on three times while syncing. Your commits are safe on this computer; sync again in a minute`);
    }
    return stop(`${own.name} didn't push (read the message above). The commit is only on this computer. To take a secret back out: git --git-dir=${own.gitDir} reset --soft HEAD~1 undoes that commit and keeps its changes; fix the line, then sync again`);
  }

  //--|🠊 6: the shared files should match; a warning, because the other side syncs on its own 🠈|--\\
  if (present.length === sides.length) {
    const differing = sharedDiffering();
    if (differing.length > 0) {
      const other = sides.find((side) => side !== own);
      warn(`These shared files now differ from ${other.name}: ${differing.join(', ')}. Run sync:${other.key} too, so both repositories carry the same copy`);
    }
  }
};

//--|🠋 Catch Up 🠋|--\\
let catchUp = (own, branch) => {
  //--|🠊 Behind only: a plain fast-forward. Behind and ahead: your unpushed commits are replayed on top of GitHub's (a rebase) 🠈|--\\
  const behind = quiet(own, ['rev-list', '--count', `HEAD..origin/${branch}`]);
  if (behind.ok === false) return true; //--|🠈 Not on GitHub yet: nothing to catch up with 🠈|--\\
  if (behind.text === '0') return true;

  const ahead = quiet(own, ['rev-list', '--count', `origin/${branch}..HEAD`]).text;
  if (ahead === '0') {
    say(`Bringing in ${behind.text} new commits from GitHub`);
    if (loud(own, ['merge', '--ff-only', '--quiet', `origin/${branch}`]) === true) return true;
    stop(`${own.name} couldn't take GitHub's commits, because a file here would be overwritten. Nothing was changed (GITHUB.md, When Git Says No)`);
    return false;
  }

  say(`GitHub has ${behind.text} commits you don't, and you have ${ahead} it doesn't. Putting yours on top`);
  if (quiet(own, ['rebase', `origin/${branch}`]).ok === true) return true;

  //--|🠊 The same lines changed on both sides: undo the rebase completely and leave the decision to a person 🠈|--\\
  const clashes = quiet(own, ['diff', '--name-only', '--diff-filter=U']).text.split('\n').filter(Boolean);
  quiet(own, ['rebase', '--abort']);
  for (const file of clashes) console.log(`    ${file}`);
  let git = 'git';
  if (own.key === 'backend') {
    git = 'git --git-dir=.backend.git';
  } else {
    git = 'git';
  }
  stop(
    `You and GitHub changed the same lines in ${clashes.length} files (above). Nothing was lost or pushed: your commits are back as they were. ` +
      `To join them: ${git} rebase origin/${branch}, open each file, keep the right lines between <<<<<<< and >>>>>>>, ${git} add <file>, ${git} rebase --continue, then sync again (GITHUB.md, Both Changed the Same Lines)`,
  );
  return false;
};

//--|🠋 Checks 🠋|--\\
let checkPairs = (present) => {
  //--|🠊 The pair lives in one place: the Branches table in source/index.js 🠈|--\\
  if (!fs.existsSync('source/index.js')) return 'source/index.js is missing, so the branch pair can\'t be checked. Nothing was changed'; //--|🠈 Stops instead of skipping the check 🠈|--\\
  const wanted = [...fs.readFileSync('source/index.js', 'utf8').matchAll(/folder: '(\.(?:front|back)end\.git)'[^}]*?branch: '([^']+)'/g)];
  for (const match of wanted) {
    const side = present.find((each) => each.gitDir === match[1]);
    if (side === undefined) continue; //--|🠈 That repository isn't in this folder 🠈|--\\
    const branch = branchOf(side);
    if (branch !== match[2]) return `${side.name} is on ${branch}, but source/index.js pairs it with ${match[2]}. Switch branches, or update the Branches table in source/index.js (GITHUB.md, Branches and Tags Go in Pairs)`;
  }
  return '';
};
let ownedByNobody = () => {
  //--|🠊 New, and ignored by neither side: both repositories would commit it, outside the shared folders 🠈|--\\
  const [front, back] = sides.map((side) => new Set(quiet(side, ['ls-files', '--others', '--exclude-standard', '-z']).text.split('\0').filter(Boolean)));
  return [...front].filter((file) => back.has(file) && !shared.some((folder) => file.startsWith(folder)));
};
let sharedDiffering = () => {
  const [front, back] = sides.map((side) => new Set(quiet(side, ['ls-files', '-z']).text.split('\0').filter(Boolean)));
  const differing = [];
  for (const file of front) {
    if (!back.has(file)) continue;
    const frontBlob = quiet(sides[0], ['rev-parse', `HEAD:${file}`]).text;
    const backBlob = quiet(sides[1], ['rev-parse', `HEAD:${file}`]).text;
    if (frontBlob !== backBlob) differing.push(file);
  }
  return differing;
};
let changesOf = (side) => quiet(side, ['status', '--porcelain']).text.split('\n').filter(Boolean);
let branchOf = (side) => quiet(side, ['symbolic-ref', '--short', 'HEAD']).text;

//--|🠋 Commands 🠋|--\\
var quiet = (side, words) => {
  const result = spawnSync('git', ['--git-dir', side.gitDir, ...words], { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 });
  return { ok: result.status === 0, text: (result.stdout || '').trim() };
};
var loud = (side, words) => {
  const result = spawnSync('git', ['--git-dir', side.gitDir, ...words], { stdio: 'inherit' });
  return result.status === 0;
};
var ask = (question) => {
  if (!process.stdin.isTTY) return Promise.resolve('');
  const terminal = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => terminal.question(question, (answer) => {
    terminal.close();
    resolve(answer.trim());
  }));
};

//--|🠋 Messages 🠋|--\\
var say = (text) => console.log(`|--🠊 Guidance: ${text}, sync.js 🠈--|`);
var warn = (text) => console.log(`|--🠊 Warning: ${text}, sync.js 🠈--|`);
var stop = (text) => {
  console.log(`|--🠊 Error: ${text}, sync.js 🠈--|`);
  process.exitCode = 1;
};

syncFolder();
