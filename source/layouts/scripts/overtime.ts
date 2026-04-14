//--|🠊 overtime.ts 🠈|--\\
export function stripBrackets(thisText: string, wrapType: '[]' | '<>' | '()' | '~~'): string {
  switch (wrapType) {
    case '[]': //--|🠈 pageName 🠈|--\\
      return thisText.replace(/[\[\]]/g, '');
    case '<>': //--|🠈 blockName 🠈|--\\
      return thisText.replace(/[<>]/g, '');
    case '()': //--|🠈 roleName 🠈|--\\
      return thisText.replace(/[()]/g, '');
    case '~~': //--|🠈 style.shade 🠈|--\\
      return thisText.replace(/[~~]/g, '');
  }
}

//--|🠊 1. Declare timer outside of scope. 🠈|--\\
let headTime: ReturnType<typeof setTimeout> | null = null;
export function expandHeader(pageName: string, blockName: string, blockAction: 'click' | 'hover' | 'exit') {
  const headerContainer = document.getElementById(`${pageName}-header`) as HTMLElement;

  switch (blockAction) {
    case 'hover':
      //--|🠊 2. Check if 'headTime' is running 🠈|--\\
      if (headTime === null) {
        //--|🠊 If yes, then ignore this request. 🠈|--\\
        //--|🠊 3. Check the className of the <header>. 🠈|--\\
        if (headerContainer.classList.contains('collapsed')) {
          headerContainer.classList.add('unfolded');
          headerContainer.classList.remove('collapsed');
          //--|🠊 4. Reset 'headTime' to null. 🠈|--\\
          headTime = setTimeout(() => {
            if (headerContainer.classList.contains('unfolded')) {
              headerContainer.classList.add('collapsed');
              headerContainer.classList.remove('unfolded');
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
      headerContainer.classList.add('unfolded');
      headerContainer.classList.remove('collapsed');
      break;
    case 'exit':
      if (headerContainer.classList.contains('unfolded')) {
        headTime = setTimeout(() => {
          headerContainer.classList.add('collapsed');
          headerContainer.classList.remove('unfolded');
        }, 1500);
      }
      break;
  }
}
export function expandLeftbar(pageName: string, blockName: string) {
  const leftbarContainer = document.getElementById(`${pageName}-leftbar`) as HTMLElement;
  if (leftbarContainer.classList.contains('collapsed')) {
    leftbarContainer.classList.add('expanded');
    leftbarContainer.classList.remove('collapsed');
  } else {
    leftbarContainer.classList.add('collapsed');
    leftbarContainer.classList.remove('expanded');
  }
}
