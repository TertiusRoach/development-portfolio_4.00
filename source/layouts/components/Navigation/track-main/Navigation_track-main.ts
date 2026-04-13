//--|🠊 Navigation_track-main.ts 🠈|--\\
export function viewDisplay() {
  //--|🠊 Check if the window exists. 🠈|--\\
  if (typeof window === 'undefined') {
    //--|🠊 Safety for SSR/Node Environments. 🠈|--\\
    return 'mid-cen'; //--|🠈 Default Fallback 🠈|--\\
  }

  const isLandscape = window.matchMedia('(orientation: landscape)').matches;
  const isPortrait = window.matchMedia('(orientation: portrait)').matches;

  if (isLandscape) {
    return 'top-lef';
  }
  if (isPortrait) {
    return 'bot-rig';
  }

  return 'mid-cen'; //--|🠈 Default Fallback 🠈|--\\
}

//--|🠊 1. Declare timer outside of scope. 🠈|--\\
let headTime: ReturnType<typeof setTimeout> | null = null;
export function unfoldHeader(pageName: string, blockName: string, blockAction: 'click' | 'hover' | 'exit') {
  const buttonsHeader = document.getElementById(`${pageName}-header`) as HTMLElement;

  switch (blockAction) {
    case 'hover':
      //--|🠊 2. Check if 'headTime' is running 🠈|--\\
      if (headTime === null) {
        //--|🠊 If yes, then ignore this request. 🠈|--\\
        //--|🠊 3. Check the className of the <header>. 🠈|--\\
        if (buttonsHeader.classList.contains('collapsed')) {
          buttonsHeader.classList.add('unfolded');
          buttonsHeader.classList.remove('collapsed');
          //--|🠊 4. Reset 'headTime' to null. 🠈|--\\
          headTime = setTimeout(() => {
            if (buttonsHeader.classList.contains('unfolded')) {
              buttonsHeader.classList.add('collapsed');
              buttonsHeader.classList.remove('unfolded');
              setTimeout(() => {
                headTime = null; //--|🠈 Reset headTime to signal readiness 🠈|--\\
              }, 250);
            }
          }, 5750);
        }
        return;
      }
      break;
    case 'click':
      buttonsHeader.classList.add('unfolded');
      buttonsHeader.classList.remove('collapsed');
      break;
    case 'exit':
      if (buttonsHeader.classList.contains('unfolded')) {
        headTime = setTimeout(() => {
          buttonsHeader.classList.add('collapsed');
          buttonsHeader.classList.remove('unfolded');
        }, 1500);
      }
      break;
  }
}
