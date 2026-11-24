//--|🠊 sync.js 🠈|--\\
//--|🠊 npm run sync:frontend and sync:backend, status and pull (GITHUB.md, The Repositories) 🠈|--\\
/*--|🠋
  One folder, two repositories, one command per side. Each side syncs its own repository and
  only pulls the other one, so a developer with one repository has everything they need:

    npm run sync:frontend -w source/layouts                   commits and pushes your front-end branch, pulls the back end
    npm run sync:backend -w source/modules                    commits and pushes your back-end branch, pulls the front end
    npm run sync:frontend -w source/layouts -- "A message"    the same, with the message given

  Two more, off the npm menu (EDITOR.md, The Scripts):
    node source/guards/sync.js pull      pulls every repository in the folder, fast-forward only (VS Code runs it on open)
    node source/guards/sync.js status    where each repository stands, changes nothing

  The other side's pull is fast-forward only, so it can never overwrite work. Your own side is
  committed first, then put on top of whatever is new on GitHub (a rebase); when both of you changed
  the same lines it undoes the rebase and stops (GITHUB.md, Both Changed the Same Lines). Commits and
  pushes go through the hooks like any other (commit.js, push.js). It stops at the first problem and says why.
  Shared since 2026-11-24: both repositories track source/guards/, so it travels with each one.

  The version comes from the branch itself (1.01 or 1.01-<name>); both sides must have the same one, and a
  newer shared branch on GitHub means yours was finished (version.js finish): sync says where to switch.

  Your own branch (CONTRIBUTING.md, Branches): you work on 1.01-<your GitHub name>, never on the
  shared 1.01. Sync pushes your branch, brings in what's new on 1.01 with a merge (nothing is ever
  rewritten), and opens or updates your one pull request into 1.01 with the GitHub CLI (gh).
🠉|--*/
//--|🠋 Packages 🠋|--\\
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { spawnSync } = require('child_process');

//--|🠋 Sides 🠋|--\\
const sides = [
  { key: 'frontend', gitDir: '.frontend.git', name: 'front-end' },
  { key: 'backend', gitDir: '.backend.git', name: 'back-end' },
];
const shared = ['source/guards/', '.github/', '.gitattributes', '.nvmrc', 'LICENSE', 'CODEOWNERS', 'CONTRIBUTING.md']; //--|🠈 New files here go into both repositories on purpose (CLAUDE.md, What This Is) 🠈|--\\
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
    const fetched = quiet(side, ['fetch', '--quiet', '--prune', 'origin']);
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
    const sharedBranch = sharedOf(side);
    if (sharedBranch !== '' && branch !== sharedBranch) {
      const waiting = quiet(side, ['rev-list', '--count', `origin/${sharedBranch}..HEAD`]);
      if (waiting.ok === true) position = `${position}, ${waiting.text} not in ${sharedBranch} yet`;
    }
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
  for (const side of present) {
    const finished = finishedNotice(side);
    if (finished !== '') warn(`${side.name}: ${finished}`);
  }
};

//--|🠋 Pull 🠋|--\\
let pullAll = (present) => {
  for (const side of present) {
    const branch = branchOf(side);
    quiet(side, ['fetch', '--quiet', '--prune', 'origin']);
    const finished = finishedNotice(side);
    if (finished !== '') {
      warn(`${side.name}: ${finished}`);
      continue;
    }
    if (onGitHub(side, branch) === false) {
      say(`${side.name}: ${branch} isn't on GitHub yet, so there's nothing to pull`);
      continue;
    }
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
  const sharedBranch = sharedOf(own);
  if (branchOf(own) === sharedBranch) {
    if (startOwnBranch(own, sharedBranch) === false) return;
  }
  const branch = branchOf(own);

  //--|🠊 2: the other side is only pulled, fast-forward only; your side is only fetched, because it may hold commits GitHub hasn't seen 🠈|--\\
  for (const side of present) {
    if (side === own) {
      if (quiet(own, ['fetch', '--quiet', '--prune', 'origin']).ok === false) return stop(`${own.name}: GitHub couldn't be reached. Nothing was changed; sync again when you're online`);
      const finished = finishedNotice(own);
      if (finished !== '') return stop(finished);
    } else {
      if (onGitHub(side, branchOf(side)) === false) continue; //--|🠈 Its branch isn't on GitHub yet: nothing to pull 🠈|--\\
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
    if (takeShared(own, sharedBranch) === false) return;

    const ahead = quiet(own, ['rev-list', '--count', `origin/${branch}..HEAD`]);
    if (ahead.ok === true && ahead.text === '0') {
      say(`${own.name} is in step with GitHub`);
      break;
    }
    say(`Pushing ${own.name} (${branch})`);
    if (loud(own, ['push', '-u', 'origin', branch]) === true) {
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

  //--|🠊 6: one pull request from your branch into the shared one, opened once and updated by every push 🠈|--\\
  if (process.exitCode !== 1) openPullRequest(own, branch, sharedBranch);

  //--|🠊 7: the shared files should match; a warning, because the other side syncs on its own 🠈|--\\
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
  if (onGitHub(own, branch) === false) return true; //--|🠈 Your branch isn't on GitHub yet: nothing to catch up with 🠈|--\\
  const behind = quiet(own, ['rev-list', '--count', `HEAD..origin/${branch}`]);
  if (behind.ok === false) return true;
  if (behind.text === '0') return true;

  const ahead = quiet(own, ['rev-list', '--count', `origin/${branch}..HEAD`]).text;
  if (ahead === '0') {
    say(`Bringing in ${behind.text} new commits from GitHub`);
    if (loud(own, ['merge', '--ff-only', '--quiet', `origin/${branch}`]) === true) return true;
    stop(`${own.name} couldn't take GitHub's commits, because a file here would be overwritten. Nothing was changed (GITHUB.md, When Git Says No)`);
    return false;
  }

  say(`GitHub has ${behind.text} commits you don't, and you have ${ahead} it doesn't. Putting yours on top`);
  if (quiet(own, ['rebase', '--rebase-merges', `origin/${branch}`]).ok === true) return true; //--|🠈 --rebase-merges keeps a merge from the shared branch as a merge 🠈|--\\

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

//--|🠋 Take the Shared Branch 🠋|--\\
let takeShared = (own, sharedBranch) => {
  //--|🠊 A merged pull request moves the shared branch on: bring it into yours with a merge, never a rebase, so nothing already on GitHub is rewritten 🠈|--\\
  if (onGitHub(own, sharedBranch) === false) return true;
  const behind = quiet(own, ['rev-list', '--count', `HEAD..origin/${sharedBranch}`]);
  if (behind.ok === false || behind.text === '0') return true;

  say(`${sharedBranch} has ${behind.text} commits your branch doesn't. Bringing them in`);
  if (quiet(own, ['merge', '--no-edit', `origin/${sharedBranch}`]).ok === true) return true;

  const clashes = quiet(own, ['diff', '--name-only', '--diff-filter=U']).text.split('\n').filter(Boolean);
  quiet(own, ['merge', '--abort']);
  for (const file of clashes) console.log(`    ${file}`);
  stop(
    `${sharedBranch} and your branch changed the same lines in ${clashes.length} files (above). Nothing was lost or pushed: your branch is back as it was. ` +
      `To join them: git --git-dir=${own.gitDir} merge origin/${sharedBranch}, keep the right lines between <<<<<<< and >>>>>>>, git --git-dir=${own.gitDir} add <file>, git --git-dir=${own.gitDir} commit --no-edit, then sync again (GITHUB.md, Both Changed the Same Lines)`,
  );
  return false;
};

//--|🠋 Your Own Branch 🠋|--\\
let startOwnBranch = (own, sharedBranch) => {
  //--|🠊 Nobody commits to the shared branch: make 1.##-<GitHub name> where you stand, which changes no file 🠈|--\\
  const person = gitHubName();
  if (person === '') {
    stop(`You're on ${sharedBranch}, the shared branch, and nobody commits there (CONTRIBUTING.md, Branches). Make your own: git --git-dir=${own.gitDir} switch -c ${sharedBranch}-<your GitHub name>, then sync again`);
    return false;
  }
  const personal = `${sharedBranch}-${person}`;
  if (onGitHub(own, personal) === true) {
    stop(`You're on ${sharedBranch}, but ${personal} is already on GitHub (from another computer). Switch to it: git --git-dir=${own.gitDir} switch ${personal}, then sync again`);
    return false;
  }
  if (quiet(own, ['switch', '-c', personal]).ok === false) {
    stop(`${personal} couldn't be made. Nothing was changed`);
    return false;
  }
  say(`You were on ${sharedBranch}, the shared branch. Your own branch, ${personal}, now starts here`);
  return true;
};

//--|🠋 Pull Request 🠋|--\\
let openPullRequest = (own, branch, sharedBranch) => {
  const waiting = quiet(own, ['rev-list', '--count', `origin/${sharedBranch}..HEAD`]);
  if (waiting.ok === false || waiting.text === '0') return say(`${sharedBranch} already has everything in ${branch}: no pull request needed`);
  const repository = repositoryOf(own);
  const byHand = `gh pr create --repo ${repository} --base ${sharedBranch} --head ${branch} --fill`;
  const open = github(['pr', 'list', '--repo', repository, '--head', branch, '--base', sharedBranch, '--state', 'open', '--json', 'url', '--jq', '.[0].url']);
  if (open.ok === false) return warn(`The GitHub CLI couldn't look for your pull request (is gh installed and signed in? gh auth login). Open it yourself: ${byHand}`);
  if (open.text !== '') return say(`Your pull request now has ${waiting.text} commits for the other owner to review: ${open.text}`);
  const made = github(['pr', 'create', '--repo', repository, '--base', sharedBranch, '--head', branch, '--title', `${branch} into ${sharedBranch}`, '--body', 'Opened by sync.js (CONTRIBUTING.md, Pull Requests). Every later sync of this branch adds to it.']);
  if (made.ok === false) return warn(`The pull request couldn't be opened. Open it yourself: ${byHand}`);
  say(`Pull request opened for the other owner to review: ${made.text}`);
};

//--|🠋 Checks 🠋|--\\
let checkPairs = (present) => {
  //--|🠊 The number comes from the branch itself: 1.01 or 1.01-<name>, the same number on both sides (CONTRIBUTING.md, Branches). 🠈|--\\
  const numbers = [];
  for (const side of present) {
    const branch = branchOf(side);
    if (sharedOf(side) === '') return `${side.name} is on "${branch}", which is neither a shared #.## branch nor your #.##-<name>. Switch to your own branch (CONTRIBUTING.md, Branches)`;
    numbers.push(`${side.name} ${branch}`);
  }
  const different = new Set(present.map((side) => sharedOf(side)));
  if (different.size > 1) return `The two sides are on different versions (${numbers.join(', ')}). Both must be on the same #.##: switch the one that's behind (GITHUB.md, Names and Numbers)`;
  return '';
};
let finishedNotice = (side) => {
  //--|🠊 A newer shared branch on GitHub means this one was finished (version.js finish): say where to go, change nothing. 🠈|--\\
  const current = sharedOf(side);
  const newest = newestShared(side);
  if (current === '' || newest === '' || compareVersions(newest, current) <= 0) return '';
  const branch = branchOf(side);
  let move = newest;
  if (branch !== current) move = `${newest}${branch.slice(current.length)}`;
  return `${current} is finished (archived as v${current}) and ${newest} is open. Move both sides: git switch ${move}, and git --git-dir=.backend.git switch ${move}, then sync again. Unmerged work on ${branch}? Stop and ask the other owner first (CONTRIBUTING.md, Finishing a Version)`;
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
let sharedOf = (side) => {
  //--|🠊 The shared branch for this side: the #.## its branch starts with. 🠈|--\\
  const match = branchOf(side).match(/^(\d+\.\d\d)(?:-.+)?$/);
  if (match === null) return '';
  return match[1];
};
let newestShared = (side) => {
  const names = quiet(side, ['for-each-ref', '--format=%(refname:lstrip=3)', 'refs/remotes/origin/']).text.split('\n');
  const shared = names.filter((name) => /^\d+\.\d\d$/.test(name)).sort(compareVersions);
  return shared.length > 0 ? shared[shared.length - 1] : '';
};
let compareVersions = (a, b) => {
  const [aMajor, aMinor] = a.split('.').map(Number);
  const [bMajor, bMinor] = b.split('.').map(Number);
  return aMajor - bMajor || aMinor - bMinor;
};
let onGitHub = (side, branch) => quiet(side, ['rev-parse', '--verify', '--quiet', `refs/remotes/origin/${branch}`]).ok;
let repositoryOf = (side) => {
  const address = quiet(side, ['remote', 'get-url', 'origin']).text;
  const match = address.match(/github\.com[:/]([^/]+\/[^/]+?)(?:\.git)?$/);
  if (match === null) return address;
  return match[1];
};
let gitHubName = () => github(['api', 'user', '--jq', '.login']).text;
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
var github = (words) => {
  const result = spawnSync('gh', words, { encoding: 'utf8' }); //--|🠈 The GitHub CLI: gh.exe on Windows, found without a shell 🠈|--\\
  return { ok: result.error === undefined && result.status === 0, text: (result.stdout || '').trim() };
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
