//--|🠊 commit.js 🠈|--\\
//--|🠊 The pre-commit guard (PIPELINE.md, The Guards) 🠈|--\\
/*--|🠋
  Runs before every commit. It reads the files about to be committed and stops when one
  belongs to the other side, or is a secret:
    front end   a file frontend.gitignore gives the back end, any .env* file, *.age, or a key file
    back end    a file backend.gitignore gives the front end, .env itself, or a key file
  The back end may commit .env.example (names only) and .env.age (locked).
  Each list is read from disk, and copied into info/exclude first if it changed, so the
  repository always ignores what the list says.

  Run by the hook with:   node source/guards/commit.js front   (or back)
🠉|--*/
//--|🠋 Packages 🠋|--\\
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

//--|🠋 Sides 🠋|--\\
const sides = {
  front: { gitDir: '.frontend.git', name: 'development-portfolio_4.00', ignoreList: 'frontend.gitignore', other: 'the back end' },
  back: { gitDir: '.backend.git', name: 'backend-architecture_2.00', ignoreList: 'backend.gitignore', other: 'the front end' },
};

//--|🠋 Secrets by Name 🠋|--\\
const keyFile = /(^|\/)(id_(rsa|ed25519|ecdsa|dsa)|[^/]*\.(pem|key|p12|pfx|agekey))$/;
let isSecret = (sideName, file) => {
  const name = path.basename(file);
  if (keyFile.test(file)) return true;
  if (sideName === 'front') {
    if (name.startsWith('.env') || name.endsWith('.age')) return true; //--|🠈 The public side holds no .env file at all, not even the example 🠈|--\\
    return false;
  } else {
    if (name === '.env.example' || name === '.env.age') return false; //--|🠈 Names only, and the locked copy 🠈|--\\
    if (name.startsWith('.env')) return true;
    return false;
  }
};

//--|🠋 Guard 🠋|--\\
function guardCommit() {
  const sideName = process.argv[2];
  const side = sides[sideName];
  if (!side) return stop('Name the side: node source/guards/commit.js front|back');

  refreshList(side);
  const staged = git(side, ['diff', '--cached', '--name-only', '--diff-filter=ACMR', '-z']).split('\0').filter(Boolean);
  if (staged.length === 0) return;

  const otherSide = ignoredOf(side, staged);
  const problems = [];
  for (const file of staged) {
    if (isSecret(sideName, file)) {
      problems.push(`${file} is a secret or a key, and never goes in ${side.name}`); //--|🠈 Checked first, so .env is called a secret, not the other side's 🠈|--\\
    } else if (otherSide.has(file)) {
      problems.push(`${file} belongs to ${side.other} (${side.ignoreList})`);
    }
  }

  if (problems.length === 0) {
    console.log(`|--🠊 Guidance: ${staged.length} staged files belong in ${side.name}, commit.js 🠈--|`);
  } else {
    for (const problem of problems) console.log(`  ${problem}`);
    let command = 'git restore --staged <file>';
    if (sideName === 'back') {
      command = 'git --git-dir=.backend.git restore --staged <file>';
    } else {
      command = 'git restore --staged <file>';
    }
    stop(`Nothing was committed. Take these out with: ${command} (CLAUDE.md, Safety First)`);
  }
}

//--|🠋 The List 🠋|--\\
let refreshList = (side) => {
  if (!fs.existsSync(side.ignoreList)) return;
  const exclude = path.join(side.gitDir, 'info', 'exclude');
  const wanted = fs.readFileSync(side.ignoreList, 'utf8');
  let current = '';
  if (fs.existsSync(exclude)) current = fs.readFileSync(exclude, 'utf8');
  if (current !== wanted) {
    fs.mkdirSync(path.dirname(exclude), { recursive: true });
    fs.writeFileSync(exclude, wanted);
    console.log(`|--🠊 Guidance: ${side.ignoreList} changed, so it was copied into ${exclude}, commit.js 🠈--|`);
  }
};
let ignoredOf = (side, files) => {
  //--|🠊 --no-index checks the names against the lists even though they're staged 🠈|--\\
  let result = '';
  try {
    result = execFileSync('git', ['--git-dir', side.gitDir, 'check-ignore', '--no-index', '--stdin', '-z'], { input: files.join('\0') + '\0', encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
  } catch (error) {
    if (error.status === 1) {
      result = ''; //--|🠈 Exit 1 means none of them is ignored: the good answer 🠈|--\\
    } else {
      throw error;
    }
  }
  return new Set(result.split('\0').filter(Boolean));
};

//--|🠋 Helpers 🠋|--\\
var git = (side, words) => execFileSync('git', ['--git-dir', side.gitDir, ...words], { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 });
var stop = (text) => {
  console.log(`|--🠊 Error: ${text}, commit.js 🠈--|`);
  process.exitCode = 1;
};

guardCommit();
