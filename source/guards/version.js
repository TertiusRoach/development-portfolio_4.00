//--|🠊 version.js 🠈|--\\
//--|🠊 The version guard, publishing and finishing a version (CONTRIBUTING.md, Finishing a Version and Releases) 🠈|--\\
/*--|🠋
 
  Works on GitHub through the GitHub CLI (gh), never on this folder's files, so it reaches all three
  repositories (front-end, back-end, building) even though building is never cloned here.

  The guard, run by .github/workflows/checks.yml on every pull request:
    node source/guards/version.js check <into> <from>   a pull request goes from 1.01-<name> into 1.01, never across numbers
    node source/guards/version.js same <into>           <into> is the newest #.## in front-end, back-end and building

  The owners' steps, run once both have agreed. Each shows its plan and changes nothing without --go:
    node source/guards/version.js publish [--go]           tags building v1.01.<next>, which publishes the live site
    node source/guards/version.js finish 1.01 [--major] [--go]  archives 1.01 as v1.01 in all three, opens 1.02 (or 2.00 with --major)
                                                           with both personal branches, moves the default branch and protection, deletes the old branches

  A release (CONTRIBUTING.md, Releases) is both: publish --go, then finish 1.## --major --go.
  Every step can be run again after a failure: what's already done is skipped. finish names the
  version it finishes, so running it twice can never finish the next one too.
🠉|--*/
//--|🠋 Packages 🠋|--\\
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

//--|🠋 Repositories 🠋|--\\
const owner = 'TraLogFin';
const sources = ['front-end', 'back-end']; //--|🠈 Where people work: personal branches and pull requests 🠈|--\\
const all = ['front-end', 'back-end', 'building'];
const root = path.resolve(__dirname, '../..');
const shape = /^(\d+)\.(\d\d)$/;

//--|🠋 Modes 🠋|--\\
function runVersion() {
  const [mode, ...rest] = process.argv.slice(2);
  const go = rest.includes('--go');
  if (mode === 'check') return checkNames(rest[0] || '', rest[1] || '');
  if (mode === 'same') return checkSame(rest[0] || '');
  if (mode === 'publish') return publish(go);
  if (mode === 'finish') return finish(rest[0] || '', rest.includes('--major'), go);
  stop('Use: node source/guards/version.js check <into> <from> | same <into> | publish [--go] | finish <#.##> [--major] [--go]');
}

//--|🠋 The Guard 🠋|--\\
let checkNames = (into, from) => {
  //--|🠊 No network: only the two names 🠈|--\\
  if (!shape.test(into)) return stop(`A pull request goes into a shared #.## branch, and "${into}" isn't one (CONTRIBUTING.md, Pull Requests)`);
  const number = from.match(/^(\d+\.\d\d)-(.+)$/);
  if (number === null) return stop(`"${from}" isn't a personal branch (#.##-<GitHub name>). Work happens on your own branch (CONTRIBUTING.md, Branches)`);
  if (number[1] !== into) {
    if (number[1].split('.')[0] !== into.split('.')[0]) return stop(`${from} is version ${number[1]}, and only the same major merges: ${into} takes only ${into}-<name> (CONTRIBUTING.md, Branches)`);
    return stop(`${from} belongs to ${number[1]}, not ${into}. A pull request stays inside its own number (CONTRIBUTING.md, Branches)`);
  }
  say(`${from} into ${into}: the same version`);
};
let checkSame = (into) => {
  if (!shape.test(into)) return stop(`"${into}" isn't a shared #.## branch`);
  const newest = newestEverywhere();
  if (newest === null) return;
  const wrong = all.filter((repository) => newest[repository] !== into);
  if (wrong.length > 0) return stop(`${into} must be the newest shared branch in all three repositories, but: ${all.map((repository) => `${repository} ${newest[repository] || 'none'}`).join(', ')} (CONTRIBUTING.md, Branches)`);
  say(`${into} is the newest shared branch in front-end, back-end and building`);
};

//--|🠋 Publish 🠋|--\\
let publish = (go) => {
  const newest = newestEverywhere();
  if (newest === null) return;
  const current = newest.building;
  if (all.some((repository) => newest[repository] !== current)) return stop(`The three repositories aren't on the same version: ${all.map((repository) => `${repository} ${newest[repository]}`).join(', ')}`);
  if (copiesDone(current) === false) return;

  const heads = refsOf('building', 'heads');
  const tags = refsOf('building', 'tags');
  if (heads === null || tags === null) return;
  const sha = heads[current];
  const patches = Object.keys(tags).map((tag) => tag.match(new RegExp(`^v${current.replace('.', '\\.')}\\.(\\d+)$`))).filter(Boolean).map((match) => Number(match[1]));
  const already = Object.keys(tags).find((tag) => tag.startsWith(`v${current}.`) && tags[tag] === sha);
  if (already !== undefined) return say(`building ${current} is already published as ${already}. Nothing to do`);
  const tag = `v${current}.${patches.length > 0 ? Math.max(...patches) + 1 : 0}`;

  say(`Plan: tag building ${current} (${sha.slice(0, 7)}) as ${tag}. The tag runs "Publish the live site" in building, which puts its public/ on tralogfin.github.io`);
  if (go === false) return say('Nothing was changed. Run it again with --go once both owners agreed (CONTRIBUTING.md, Releases)');
  if (createRef('building', `refs/tags/${tag}`, sha) === false) return stop(`${tag} couldn't be made. Nothing was published`);
  say(`${tag} is on building. Watch it go live: gh run list --repo ${owner}/building --workflow site.yml --limit 1`);
};

//--|🠋 Finish 🠋|--\\
let finish = (current, major, go) => {
  //--|🠊 1: read everything first; nothing changes until every check passes 🠈|--\\
  if (!shape.test(current)) return stop('Name the version to finish: node source/guards/version.js finish 1.01 [--major] [--go]');
  const heads = {};
  const tags = {};
  for (const repository of all) {
    heads[repository] = refsOf(repository, 'heads');
    tags[repository] = refsOf(repository, 'tags');
    if (heads[repository] === null || tags[repository] === null) return;
  }
  const [majorNumber, minorNumber] = current.split('.').map(Number);
  if (major === false && minorNumber === 99) return stop(`${current} is the last minor of ${majorNumber}. Finish it with --major, which opens ${majorNumber + 1}.00`);
  const next = major === true ? `${majorNumber + 1}.00` : `${majorNumber}.${String(minorNumber + 1).padStart(2, '0')}`;
  const archive = `v${current}`;
  const people = ownersOf();
  if (people.length === 0) return stop('CODEOWNERS names nobody, so the personal branches can\'t be made');

  const problems = [];
  const start = {};
  for (const repository of all) {
    start[repository] = heads[repository][current] || tags[repository][archive]; //--|🠈 A second run after the branch was deleted: the tag remembers where it was 🠈|--\\
    if (start[repository] === undefined) problems.push(`${repository} has no ${current} and no ${archive}`);
    if (tags[repository][archive] !== undefined && tags[repository][archive] !== start[repository]) problems.push(`${repository}'s ${archive} already exists somewhere else`);
    if (heads[repository][next] !== undefined && heads[repository][next] !== start[repository]) problems.push(`${repository}'s ${next} already exists and has moved on`);
    const newest = newestOf(Object.keys(heads[repository]).filter((name) => shape.test(name)));
    if (newest !== '' && newest !== current && newest !== next) problems.push(`${repository}'s newest shared branch is ${newest}, so ${current} isn't the one in use`);
  }
  for (const repository of sources) {
    const open = github(['pr', 'list', '--repo', `${owner}/${repository}`, '--base', current, '--state', 'open', '--json', 'number', '--jq', 'length']);
    if (open.ok === false) problems.push(`${repository}: the open pull requests couldn't be read`);
    else if (open.text !== '0') problems.push(`${repository} has ${open.text} open pull request(s) into ${current}. Merge or close them first`);
    for (const branch of Object.keys(heads[repository]).filter((name) => name.startsWith(`${current}-`))) {
      const ahead = github(['api', `repos/${owner}/${repository}/compare/${current}...${branch}`, '--jq', '.ahead_by']);
      if (heads[repository][current] !== undefined && (ahead.ok === false || ahead.text !== '0')) problems.push(`${repository}'s ${branch} has commits that aren't in ${current}`);
    }
  }
  if (sources.every((repository) => heads[repository][current] !== undefined) && copiesDone(current) === false) return; //--|🠈 Skipped on a second run, once a side is already finished 🠈|--\\
  if (problems.length > 0) {
    for (const problem of problems) console.log(`    ${problem}`);
    return stop(`${current} can't be finished yet. Nothing was changed`);
  }

  //--|🠊 2: the plan 🠈|--\\
  const personal = (repository) => (sources.includes(repository) ? people.map((person) => `${next}-${person}`) : []);
  say(`The plan for ${current} → ${next}, building first (a second run skips what's already done)`);
  for (const repository of all) {
    const old = Object.keys(heads[repository]).filter((name) => name === current || name.startsWith(`${current}-`));
    console.log(`    ${repository}: tag ${archive} at ${start[repository].slice(0, 7)}, open ${[next, ...personal(repository)].join(', ')}, move the default branch and the protection, delete ${old.join(', ') || 'nothing'}`);
  }
  if (go === false) return say('Nothing was changed. Run it again with --go once both owners agreed (CONTRIBUTING.md, Finishing a Version)');

  //--|🠊 3: building first, so its next branch is there before the copies into it start 🠈|--\\
  for (const repository of ['building', 'back-end', 'front-end']) {
    const sha = start[repository];
    if (tags[repository][archive] === undefined && createRef(repository, `refs/tags/${archive}`, sha) === false) return stop(`${repository}: ${archive} couldn't be made. Run it again to carry on`);
    for (const branch of [next, ...personal(repository)]) {
      if (heads[repository][branch] === undefined && createRef(repository, `refs/heads/${branch}`, sha) === false) return stop(`${repository}: ${branch} couldn't be made. Run it again to carry on`);
    }
    if (moveDefault(repository, current, next) === false) return stop(`${repository}: the default branch couldn't be moved to ${next}. Run it again to carry on`);
    if (moveProtection(repository, current, next) === false) return stop(`${repository}: the branch protection couldn't be moved to ${next}. Run it again to carry on`);
    for (const branch of Object.keys(heads[repository]).filter((name) => name.startsWith(`${current}-`)).concat(heads[repository][current] !== undefined ? [current] : [])) {
      if (deleteRef(repository, `heads/${branch}`) === false) return stop(`${repository}: ${branch} couldn't be deleted. Run it again to carry on`);
    }
    say(`${repository}: ${current} is ${archive}, ${next} is open`);
  }
  say(`Done. On each computer: git switch ${next}-<you>, and git --git-dir=.backend.git switch ${next}-<you>. Sync says the same until you do`);
};

//--|🠋 Checks 🠋|--\\
let newestEverywhere = () => {
  const newest = {};
  for (const repository of all) {
    const heads = refsOf(repository, 'heads');
    if (heads === null) return null;
    newest[repository] = newestOf(Object.keys(heads).filter((name) => shape.test(name)));
  }
  return newest;
};
let copiesDone = (current) => {
  //--|🠊 building has a side's newest work only when that side's last "Copy into building" ran on its newest commit and passed 🠈|--\\
  for (const repository of sources) {
    const heads = refsOf(repository, 'heads');
    if (heads === null) return false;
    const last = github(['run', 'list', '--repo', `${owner}/${repository}`, '--workflow', 'building.yml', '--branch', current, '--limit', '1', '--json', 'headSha,status,conclusion', '--jq', '.[0] | .headSha + " " + .status + " " + .conclusion']);
    const [sha, status, conclusion] = last.text.split(' ');
    if (last.ok === false || sha !== heads[current]) return stop(`${repository}'s newest ${current} hasn't been copied into building yet. Wait for "Copy into building" in its Actions tab, or run it from there`);
    if (status !== 'completed' || conclusion !== 'success') return stop(`${repository}'s copy into building is ${status} ${conclusion || ''}. Wait for it, or re-run it in its Actions tab`);
  }
  return true;
};
let ownersOf = () => {
  //--|🠊 The people who get personal branches: the GitHub names in CODEOWNERS 🠈|--\\
  const file = path.join(root, 'CODEOWNERS');
  if (!fs.existsSync(file)) return [];
  const line = fs.readFileSync(file, 'utf8').split('\n').find((each) => each.trim().startsWith('*'));
  if (line === undefined) return [];
  return line.split(/\s+/).filter((word) => /^@[A-Za-z0-9-]+$/.test(word)).map((word) => word.slice(1)); //--|🠈 People only; a team (@org/team) has no branch 🠈|--\\
};
let newestOf = (names) => {
  const sorted = [...new Set(names)].sort((a, b) => {
    const [aMajor, aMinor] = a.split('.').map(Number);
    const [bMajor, bMinor] = b.split('.').map(Number);
    return aMajor - bMajor || aMinor - bMinor;
  });
  return sorted.length > 0 ? sorted[sorted.length - 1] : '';
};

//--|🠋 GitHub 🠋|--\\
let refsOf = (repository, kind) => {
  const listed = github(['api', `repos/${owner}/${repository}/git/matching-refs/${kind}?per_page=100`, '--paginate', '--jq', '.[] | .ref + " " + .object.sha']);
  if (listed.ok === false) {
    stop(`${owner}/${repository} couldn't be read. Is gh installed and signed in (gh auth status), with access to it?`);
    return null;
  }
  const refs = {};
  for (const line of listed.text.split('\n').filter(Boolean)) {
    const [ref, sha] = line.split(' ');
    refs[ref.replace(`refs/${kind}/`, '')] = sha;
  }
  return refs;
};
let createRef = (repository, ref, sha) => github(['api', '-X', 'POST', `repos/${owner}/${repository}/git/refs`, '-f', `ref=${ref}`, '-f', `sha=${sha}`, '--silent']).ok;
let deleteRef = (repository, ref) => github(['api', '-X', 'DELETE', `repos/${owner}/${repository}/git/refs/${ref}`, '--silent']).ok;
let moveDefault = (repository, current, next) => {
  //--|🠊 GitHub refuses to delete the default branch: when it's the finished one, the new one takes its place first 🠈|--\\
  const read = github(['api', `repos/${owner}/${repository}`, '--jq', '.default_branch']);
  if (read.ok === false) return false;
  if (read.text !== current) return true;
  if (github(['api', '-X', 'PATCH', `repos/${owner}/${repository}`, '-f', `default_branch=${next}`, '--silent']).ok === false) return false;
  say(`${repository}: the default branch is now ${next}`);
  return true;
};
let moveProtection = (repository, current, next) => {
  //--|🠊 A ruleset that names refs/heads/1.01 is changed to name refs/heads/1.02, so the old branch can be deleted and the new one is protected 🠈|--\\
  const listed = github(['api', `repos/${owner}/${repository}/rulesets`, '--jq', '.[].id']);
  if (listed.ok === false) return false;
  for (const id of listed.text.split('\n').filter(Boolean)) {
    const read = github(['api', `repos/${owner}/${repository}/rulesets/${id}`]);
    if (read.ok === false) return false;
    const ruleset = JSON.parse(read.text);
    const names = (ruleset.conditions && ruleset.conditions.ref_name) || { include: [], exclude: [] };
    if (!names.include.includes(`refs/heads/${current}`)) continue;
    const include = names.include.filter((name) => name !== `refs/heads/${current}`).concat(names.include.includes(`refs/heads/${next}`) ? [] : [`refs/heads/${next}`]);
    const body = JSON.stringify({ conditions: { ref_name: { include, exclude: names.exclude || [] } } });
    if (github(['api', '-X', 'PUT', `repos/${owner}/${repository}/rulesets/${id}`, '--input', '-', '--silent'], body).ok === false) return false;
    say(`${repository}: the ruleset "${ruleset.name}" now protects ${next}`);
  }
  return true;
};

//--|🠋 Commands 🠋|--\\
var github = (words, input) => {
  const result = spawnSync('gh', words, { encoding: 'utf8', input, maxBuffer: 64 * 1024 * 1024 }); //--|🠈 The GitHub CLI: gh.exe on Windows, found without a shell 🠈|--\\
  return { ok: result.error === undefined && result.status === 0, text: (result.stdout || '').trim() };
};

//--|🠋 Messages 🠋|--\\
var say = (text) => console.log(`|--🠊 Guidance: ${text}, version.js 🠈--|`);
var stop = (text) => {
  console.log(`|--🠊 Error: ${text}, version.js 🠈--|`);
  process.exitCode = 1;
  return false;
};

runVersion();
