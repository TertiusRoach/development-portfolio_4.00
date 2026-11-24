//--|🠊 push.js 🠈|--\\
//--|🠊 The pre-push guard (PIPELINE.md, The Guards) 🠈|--\\
/*--|🠋
  Runs before every push, in both repositories. It reads every line the push would add and
  stops when one looks like a secret: a private key, an age key, a GitHub token, a connection
  string with a login, or a password written next to its value. For the public front end it
  also stops on a home-network address (192.168.…, 10.…, 172.16–31.…).

  It looks for the shapes secrets take, not for your secrets: it can't know them. Examples in
  the documents are written so they don't match (AGE-SECRET-KEY-…, user:pass, <placeholders>).

  Run by the hook with:   node source/guards/push.js front   (or back)
  Check a whole tree:     node source/guards/push.js front --all
🠉|--*/
//--|🠋 Packages 🠋|--\\
const fs = require('fs');
const { execFileSync } = require('child_process');

//--|🠋 Sides 🠋|--\\
const sides = {
  front: { gitDir: '.frontend.git', name: 'development-portfolio_4.00', isPublic: true },
  back: { gitDir: '.backend.git', name: 'backend-architecture_2.00', isPublic: false },
};

//--|🠋 Shapes 🠋|--\\
const placeholders = ['pass', 'password', 'secret', 'xxx', 'xxxx', '***', '…', '...', 'changeme', 'example'];
const shapes = [
  { name: 'a private key', pattern: /-----BEGIN [A-Z ]*PRIVATE KEY-----/ },
  { name: 'an age secret key', pattern: /AGE-SECRET-KEY-1[0-9A-Z]{50,}/ },
  { name: 'a GitHub token', pattern: /\b(?:ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9]{36}\b|\bgithub_pat_[A-Za-z0-9_]{50,}/ },
  { name: 'an AWS key', pattern: /\bAKIA[0-9A-Z]{16}\b/ },
  { name: 'a Slack token', pattern: /\bxox[abposr]-[A-Za-z0-9-]{10,}/ },
  { name: 'a connection string with a login', pattern: /\b(?:mongodb(?:\+srv)?|mysql|postgres(?:ql)?|redis|amqp|smtps?):\/\/[^\s:/@<>'"`]+:([^\s@<>'"`]+)@/, check: (match) => isReal(match[1]) },
  { name: 'a password next to its value', pattern: /\b(?:pass(?:word)?|passwd|pwd|secret|token|api[_-]?key|client[_-]?secret)\b['"]?\s*[:=]\s*['"]([^'"\s]{8,})['"]/i, check: (match) => isReal(match[1]) },
];
const lanAddress = {
  name: 'a home-network address',
  pattern: /(?<![\w.-])(?:192\.168|10\.\d{1,3}|172\.(?:1[6-9]|2\d|3[01]))\.\d{1,3}\.\d{1,3}(?![\w.-])/, //--|🠈 Standing alone, so drawing paths like a10.6.3.3 don't count 🠈|--\\
  skips: /\.svg$|\.min\.js$|^source\/utilities\/vendors\//, //--|🠈 Drawings, minified scripts and third-party code are full of numbers like these 🠈|--\\
};

//--|🠋 Guard 🠋|--\\
function guardPush() {
  const sideName = process.argv[2];
  const side = sides[sideName];
  if (!side) return stop('Name the side: node source/guards/push.js front|back');

  let lines = [];
  if (process.argv.includes('--all')) {
    lines = readTree(side);
  } else {
    lines = readOutgoing(side);
  }

  const findings = [];
  for (const line of lines) {
    for (const shape of shapesFor(side)) {
      const match = line.text.match(shape.pattern);
      if (match === null) continue;
      if (shape.skips !== undefined && shape.skips.test(line.file)) continue;
      if (shape.check !== undefined && shape.check(match) === false) continue;
      findings.push(`${line.file}: ${shape.name}: ${line.text.trim().slice(0, 120)}`);
    }
  }

  if (findings.length === 0) {
    console.log(`|--🠊 Guidance: ${lines.length} lines checked, nothing shaped like a secret, push.js 🠈--|`);
  } else {
    for (const finding of findings) console.log(`  ${finding}`);
    stop(`${findings.length} lines in ${side.name} look like secrets. Nothing was pushed. Read each line: if it's a real secret, take it out of the commit and change it at its source; if it's an example, write it as a placeholder (PIPELINE.md, The Guards)`);
  }
}

//--|🠋 Lines 🠋|--\\
let readOutgoing = (side) => {
  //--|🠊 Git hands the hook one line per branch: local ref, local commit, remote ref, remote commit 🠈|--\\
  const lines = [];
  const input = fs.readFileSync(0, 'utf8');
  for (const row of input.split('\n')) {
    const [, localCommit] = row.trim().split(/\s+/);
    if (!localCommit || /^0+$/.test(localCommit)) continue; //--|🠈 A deleted branch sends nothing 🠈|--\\
    const commits = git(side, ['rev-list', localCommit, '--not', '--remotes=origin']).split('\n').filter(Boolean);
    for (const commit of commits) {
      lines.push(...addedLines(git(side, ['show', '--format=', '--unified=0', '--no-color', '--no-ext-diff', commit])));
    }
  }
  return lines;
};
let addedLines = (patch) => {
  const lines = [];
  let file = '';
  for (const text of patch.split('\n')) {
    if (text.startsWith('+++ ')) {
      file = text.replace(/^\+\+\+ (b\/)?/, '');
    } else if (text.startsWith('+')) {
      lines.push({ file, text: text.slice(1) });
    }
  }
  return lines;
};
let readTree = (side) => {
  const lines = [];
  const files = git(side, ['ls-files', '-z']).split('\0').filter(Boolean);
  for (const file of files) {
    if (!fs.existsSync(file) || fs.statSync(file).size > 2 * 1024 * 1024) continue; //--|🠈 Skip what's missing on disk, and anything over 2 MB 🠈|--\\
    const content = fs.readFileSync(file);
    if (content.includes(0)) continue; //--|🠈 Binary: images, fonts, archives 🠈|--\\
    for (const text of content.toString('utf8').split('\n')) lines.push({ file, text });
  }
  return lines;
};

//--|🠋 Helpers 🠋|--\\
let shapesFor = (side) => {
  if (side.isPublic === true) {
    return [...shapes, lanAddress];
  } else {
    return shapes;
  }
};
let isReal = (value) => {
  if (placeholders.includes(value.toLowerCase())) return false;
  if (/^[<${(%]/.test(value)) return false; //--|🠈 <placeholder>, ${variable}, $2b$ hash prefix, {template}, (example), %ENV% 🠈|--\\
  if (/^process\.env\./.test(value)) return false;
  return true;
};
var git = (side, words) => execFileSync('git', ['--git-dir', side.gitDir, ...words], { encoding: 'utf8', maxBuffer: 1024 * 1024 * 1024 });
var stop = (text) => {
  console.log(`|--🠊 Error: ${text}, push.js 🠈--|`);
  process.exitCode = 1;
};

guardPush();
