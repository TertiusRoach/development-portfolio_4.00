//--|🠊 gulpfile.js 🠈|--\\
//--|🠊 AI Code: Review Please 2026-11-13 · The Guard 🠈|--\\
/*--|🠋
  The guard from AGREEMENT.md, Section 7. It reads the files Git tracks in source/
  and stops with an error when the front end and the back end fall out of line:
  a twin is missing, a file imports from the other language, or a folder exists on
  one side only. It only reads: it never changes or deletes anything.
  Run it with: npx gulp guard
🠉|--*/
//--|🠋 Packages 🠋|--\\
const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const { execFileSync } = require('child_process');

//--|🠋 Folders 🠋|--\\
const sourceFolder = 'source/';
const layoutsFolder = 'source/layouts/'; //--|🠈 TypeScript, the front end 🠈|--\\
const modulesFolder = 'source/modules/'; //--|🠈 JavaScript, the back end 🠈|--\\
const vendorsFolder = 'source/utilities/'; //--|🠈 Documents and vendors, not part of the Agreement 🠈|--\\

//--|🠋 Languages 🠋|--\\
const languages = {
  '.tsx': 'TypeScript',
  '.ts': 'TypeScript',
  '.jsx': 'JavaScript',
  '.js': 'JavaScript',
};
const resolveOrder = ['.tsx', '.ts', '.jsx', '.js', '/index.tsx', '/index.ts', '/index.jsx', '/index.js'];

//--|🠋 Guard 🠋|--\\
gulp.task('guard', (callback) => {
  const trackedFiles = listTracked();
  const problems = {
    twins: checkTwins(trackedFiles),
    imports: checkImports(trackedFiles),
    folders: checkFolders(trackedFiles),
  };
  const total = problems.twins.length + problems.imports.length + problems.folders.length;

  printProblems('Twins', problems.twins);
  printProblems('Imports', problems.imports);
  printProblems('Folders', problems.folders);

  if (total === 0) {
    console.log(`|--🠊 Guidance: The Agreement holds. ${trackedFiles.length} tracked files checked, gulpfile.js 🠈--|`);
    callback();
  } else {
    console.log(`|--🠊 Warning: ${total} problems: ${problems.twins.length} twins, ${problems.imports.length} imports, ${problems.folders.length} folders, gulpfile.js 🠈--|`);
    console.log(`|--🠊 Helper: AGREEMENT.md, Section 8 lists what is not yet in line and the agreed target 🠈--|`);
    callback(new Error('The Agreement does not hold.'));
  }
});

//--|🠋 Tracked Files 🠋|--\\
let listTracked = () => {
  const output = execFileSync('git', ['ls-files', '-z', '--', sourceFolder, `:!${vendorsFolder}`], { cwd: __dirname, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  return output.split('\0').filter((file) => file !== '');
};

//--|🠋 Twins 🠋|--\\
let checkTwins = (trackedFiles) => {
  const problems = [];
  const tracked = new Set(trackedFiles);

  for (const file of trackedFiles) {
    if (file.startsWith(vendorsFolder)) continue;

    if (file.endsWith('.tsx')) {
      if (!file.startsWith(layoutsFolder)) continue; //--|🠈 index.tsx and the back end's TypeScript are outside the twin rule 🠈|--\\
      const twin = modulesFolder + file.slice(layoutsFolder.length, -'.tsx'.length) + '.jsx';
      if (!tracked.has(twin)) problems.push(`${file} has no .jsx twin at ${twin}`);
    }
    if (file.endsWith('.jsx')) {
      if (!file.startsWith(modulesFolder)) {
        problems.push(`${file} is a .jsx outside ${modulesFolder}, so it can't have a twin`);
        continue;
      }
      const twin = layoutsFolder + file.slice(modulesFolder.length, -'.jsx'.length) + '.tsx';
      if (!tracked.has(twin)) problems.push(`${file} has no .tsx twin at ${twin}`);
    }
  }
  return problems;
};

//--|🠋 Imports 🠋|--\\
let checkImports = (trackedFiles) => {
  const problems = [];

  for (const file of trackedFiles) {
    if (file.startsWith(vendorsFolder)) continue;
    const language = languages[path.extname(file)];
    if (!language) continue;

    const code = stripComments(fs.readFileSync(path.join(__dirname, file), 'utf8'));
    for (const target of findImports(code)) {
      if (!target.startsWith('.')) continue; //--|🠈 Packages from node_modules are allowed on both sides 🠈|--\\
      const resolved = resolveImport(file, target);
      if (!resolved) continue; //--|🠈 Not code: .scss, images, .json 🠈|--\\
      const targetLanguage = languages[path.extname(resolved)];
      if (targetLanguage !== language) problems.push(`${file} (${language}) imports ${target} (${targetLanguage})`);
    }
  }
  return problems;
};
let stripComments = (code) => {
  const withoutBlocks = code.replace(/\/\*[\s\S]*?\*\//g, '');
  const withoutLines = withoutBlocks.replace(/(^|\s)\/\/.*$/gm, '$1'); //--|🠈 Only a // after a space, so 'http://' in a string stays 🠈|--\\
  return withoutLines;
};
let findImports = (code) => {
  const targets = [];
  const patterns = [
    /(?:import|export)\s[^'"`;]*?from\s*['"]([^'"]+)['"]/g, //--|🠈 import x from '…', export { x } from '…' 🠈|--\\
    /import\s*['"]([^'"]+)['"]/g, //--|🠈 import '…' 🠈|--\\
    /(?:require|import)\s*\(\s*['"]([^'"]+)['"]\s*\)/g, //--|🠈 require('…'), import('…') 🠈|--\\
  ];
  for (const pattern of patterns) {
    for (const match of code.matchAll(pattern)) targets.push(match[1]);
  }
  return targets;
};
let resolveImport = (file, target) => {
  const base = path.join(__dirname, path.dirname(file), target);

  if (languages[path.extname(target)]) {
    return fs.existsSync(base) ? base : null;
  }
  for (const ending of resolveOrder) {
    if (fs.existsSync(base + ending)) return base + ending;
  }
  return null;
};

//--|🠋 Folders 🠋|--\\
let checkFolders = (trackedFiles) => {
  const problems = [];
  const layoutsFolders = listFolders(trackedFiles, layoutsFolder);
  const modulesFolders = listFolders(trackedFiles, modulesFolder);

  for (const folder of layoutsFolders) {
    if (folder === 'styles' || folder.startsWith('styles/')) continue; //--|🠈 Front end only 🠈|--\\
    if (modulesFolders.has(folder)) continue;
    if (modulesFolders.has(path.dirname(folder)) || path.dirname(folder) === '.') {
      problems.push(`${layoutsFolder}${folder}/ has no twin at ${modulesFolder}${folder}/`); //--|🠈 Only the highest missing folder, not every folder under it 🠈|--\\
    }
  }
  for (const folder of modulesFolders) {
    if (folder === 'server' || folder.startsWith('server/')) continue; //--|🠈 Back end only 🠈|--\\
    if (layoutsFolders.has(folder)) continue;
    if (layoutsFolders.has(path.dirname(folder)) || path.dirname(folder) === '.') {
      problems.push(`${modulesFolder}${folder}/ has no twin at ${layoutsFolder}${folder}/`);
    }
  }
  return problems;
};
let listFolders = (trackedFiles, root) => {
  const folders = new Set();

  for (const file of trackedFiles) {
    if (!file.startsWith(root)) continue;
    let folder = path.dirname(file.slice(root.length));
    while (folder !== '.') {
      folders.add(folder);
      folder = path.dirname(folder);
    }
  }
  return folders;
};

//--|🠋 Report 🠋|--\\
let printProblems = (title, problems) => {
  if (problems.length === 0) return;
  console.log(`\n${title} (${problems.length})`);
  for (const problem of problems) console.log(`  ${problem}`);
};
