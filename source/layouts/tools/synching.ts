//--|🠊 layouts/tools/synching.ts 🠈|--\\
//--|🠋 Functions 🠋|--\\
import blockViews from '../containers/containers';

//--|🠋 Resolution, Refreshing & Updates 🠋|--\\
type Selection = 'awaiting' | 'selected';
type Orientation = 'landscape' | 'portrait';

let demoState: Selection = 'awaiting' as 'awaiting' | 'selected'; //--|🠈 Shared by every application, so one pick squares the demonstration in all three 🠈|--\\

//--|🠋 Element Observers 🠋|--\\
export async function synchDemo(
  pageName: 'overtime' | 'ticketing' | 'hyperlink',
  blockName: 'header' | 'main' | 'footer',
  inputAction: 'load' | 'click' | 'pick',
): Promise<void> {
  //--|🠋 Wait for containers to exist 🠋|--\\
  const [headCont, mainCont, footCont] = await Promise.all([
    asynchObserve(`#${pageName}-header`),
    asynchObserve(`#${pageName}-main`),
    asynchObserve(`#${pageName}-footer`),
  ]);
  let thisItem: HTMLElement = mainCont;
  if (blockName === 'header') {
    thisItem = headCont;
  } else if (blockName === 'footer') {
    thisItem = footCont;
  }
  switch (inputAction) {
    case 'click':
      demoState = 'selected';
      blockViews(thisItem, 'overtime', blockName, 'squaring');
      blockViews(thisItem, 'ticketing', blockName, 'squaring');
      blockViews(thisItem, 'hyperlink', blockName, 'squaring');
      break;
    case 'load': {
      if (demoState === 'awaiting') {
        return blockViews(thisItem, pageName, blockName, 'expanded');
      } else if (demoState === 'selected') {
        return blockViews(thisItem, pageName, blockName, 'squaring');
      }
      break;
    }
    case 'pick': {
      //--|🠊 AI Code: Review Please 2026-11-05 🠈|--\\
      demoState = 'awaiting';
      blockViews(thisItem, 'overtime', blockName, 'expanded');
      blockViews(thisItem, 'ticketing', blockName, 'expanded');
      blockViews(thisItem, 'hyperlink', blockName, 'expanded');
      break;
    }
  }
}
export function checkScreen(onChange: (orientation: Orientation) => void): () => void {
  //--|🠋 Runs whenever the screen switches between portrait and landscape 🠋|--\\
  const orientChange = (event: MediaQueryListEvent): void => {
    defaultReset(); //--|🠈 Reset anything that depends on the previous orientation 🠈|--\\
    onChange(event.matches ? 'landscape' : 'portrait'); //--|🠈 Tell React which orientation the screen is now in 🠈|--\\
  };

  let mediaQuery = window.matchMedia('(orientation: landscape)'); //--|🠈 Create a media query that tells us whether the screen is currently landscape 🠈|--\\
  mediaQuery.addEventListener('change', orientChange); //--|🠈 Listen for the screen changing between landscape and portrait 🠈|--\\

  return (): void => {
    mediaQuery.removeEventListener('change', orientChange); //--|🠈 Remove the listener when React no longer needs this check 🠈|--\\
  };
}
export function asynchObserve(selector: string, timeout = 6000): Promise<HTMLElement> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLElement>(selector);
    if (existing) {
      resolve(existing);
      return;
    }

    const observer = new MutationObserver(() => {
      const tag = document.querySelector<HTMLElement>(selector);
      if (tag) {
        observer.disconnect();
        clearTimeout(timer);
        resolve(tag);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    const timer = setTimeout(() => {
      observer.disconnect();
      reject(new Error(`//--|🠊 Error: ${selector} not found 🠈|--\\`));
    }, timeout);
  });
}

//--|🠋 Reverting Functions 🠋|--\\
let defaultReset = () => {
  let lockedElements = document.querySelector('div[class*="body"].active') as HTMLDivElement;
  let frozenElements: NodeListOf<HTMLElement> = document.querySelectorAll('[class*="frozen"]');
  if (!lockedElements.classList.contains('locked-body')) {
    lockedElements.className = `locked-body ${lockedElements.className}`;
    setTimeout(() => {
      lockedElements.classList.remove('locked-body');
    }, 3000);
  }
  for (let i = 0; i < frozenElements.length; i++) {
    frozenElements[i].classList.remove(frozenElements[i].classList[0]);
  }
};
