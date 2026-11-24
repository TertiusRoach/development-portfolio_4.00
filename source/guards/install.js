//--|🠊 install.js 🠈|--\\
//--|🠊 Installs the guards as Git hooks (PIPELINE.md, The Guards) 🠈|--\\
/*--|🠋
  Git runs any program called pre-commit or pre-push in a repository's hooks/ folder, and stops
  when it fails. Hooks are never cloned, so this writes them once per machine (source/index.js calls it; was setup.js):

    .frontend.git/hooks/pre-commit   →  commit.js front
    .frontend.git/hooks/pre-push     →  push.js front
    .backend.git/hooks/pre-commit    →  commit.js back
    .backend.git/hooks/pre-push      →  push.js back

  Each hook is a few lines of shell that hand over to the guard, so the real check lives in the
  repository and travels with it. A hook that isn't ours is never overwritten.

  Run it from the folder's root with:   node source/guards/install.js
🠉|--*/
//--|🠋 Packages 🠋|--\\
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

//--|🠋 Hooks 🠋|--\\
const marker = '# TraLogFin guard';
const sides = [
  { name: 'front', gitDir: '.frontend.git' },
  { name: 'back', gitDir: '.backend.git' },
];
const hooks = [
  { hook: 'pre-commit', guard: 'commit.js' },
  { hook: 'pre-push', guard: 'push.js' },
];

//--|🠋 Install 🠋|--\\
function installHooks() {
  const hooksPath = spawnSync('git', ['config', '--get', 'core.hooksPath'], { encoding: 'utf8' }).stdout.trim();
  if (hooksPath !== '') warn(`Git is set to look for hooks in ${hooksPath} instead (core.hooksPath), so these won't run until that setting is removed`);

  for (const side of sides) {
    if (!fs.existsSync(side.gitDir)) continue; //--|🠈 A front-end-only copy has no .backend.git 🠈|--\\
    const folder = path.join(side.gitDir, 'hooks');
    fs.mkdirSync(folder, { recursive: true });

    for (const { hook, guard } of hooks) {
      const file = path.join(folder, hook);
      if (fs.existsSync(file) && !fs.readFileSync(file, 'utf8').includes(marker)) {
        warn(`${file} already exists and isn't ours, so it was left alone`);
        continue;
      }
      fs.writeFileSync(file, writeHook(side.name, guard));
      fs.chmodSync(file, 0o755); //--|🠈 Git only runs a hook it may execute 🠈|--\\
      say(`${file} runs ${guard} ${side.name}`);
    }
  }
}

//--|🠋 The Hook 🠋|--\\
let writeHook = (sideName, guard) => {
  return [
    '#!/bin/sh',
    `${marker}: written by source/guards/install.js (PIPELINE.md, The Guards)`,
    `[ -f source/guards/${guard} ] || exit 0`, //--|🠈 Without source/guards/ there's no guard to run 🠈|--\\
    'command -v node >/dev/null 2>&1 || { [ -s "$HOME/.nvm/nvm.sh" ] && . "$HOME/.nvm/nvm.sh"; }', //--|🠈 VS Code may start Git without nvm's node 🠈|--\\
    'command -v node >/dev/null 2>&1 || { echo "|--🠊 Error: node was not found, so the guard could not run and Git stopped 🠈--|"; exit 1; }',
    `exec node source/guards/${guard} ${sideName}`,
    '',
  ].join('\n');
};

//--|🠋 Messages 🠋|--\\
var say = (text) => console.log(`|--🠊 Guidance: ${text}, install.js 🠈--|`);
var warn = (text) => console.log(`|--🠊 Warning: ${text}, install.js 🠈--|`);

installHooks();
