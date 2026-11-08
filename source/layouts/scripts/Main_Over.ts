//--|🠊 layouts/scripts/Main_Over.ts 🠈|--\\
//--|🠊 Front-end Functions 🠈|--\\
import blockViews from '../containers/containers';
import { asynchObserve } from '../tools/synching';

//--|🠋 Class Changes 🠋|--\\
async function obnubilateContainer(pageName: string, blockName: string) {
  const bodyContainer = document.querySelector(`#${pageName}-body.active`) as HTMLDivElement;
  const overlayContainer = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  switch (!transitioning.has(pageName)) {
    case true:
      try {
        observeOverlay('overlay'); //--|🠈 Observe <Overlay> to avoid stacking 🠈|--\\
        transitioning.add(pageName);
        if (bodyContainer) {
          //--|🠋 Wait until all five containers exist on the page 🠋|--\\
          let [mainBlock, headBlock, footBlock, leftBlock, rightBlock] = await Promise.all([
            asynchObserve(`#${pageName}-main`),
            asynchObserve(`#${pageName}-header`),
            asynchObserve(`#${pageName}-footer`),
            asynchObserve(`#${pageName}-leftbar`),
            asynchObserve(`#${pageName}-rightbar`),
          ]);
          setTimeout(() => {
            clearBlur(mainBlock, headBlock, footBlock, leftBlock, rightBlock);
          }, 250);

          setTimeout(() => {
            shrinkBlocks(headBlock, footBlock, leftBlock, rightBlock);
            overlayContainer.classList.replace(overlayContainer.classList[1], 'hidden');
          }, 2750);
        }
      } finally {
        transitioning.delete(pageName);
      }
      break;
  }
}
export function revertContainers(thisItem: HTMLElement, pageName: 'landing' | 'overtime' | 'ticketing' | 'hyperlink' | 'components'): void {
  blockViews(thisItem, pageName, 'header', 'squaring');
  blockViews(thisItem, pageName, 'footer', 'squaring');

  blockViews(thisItem, pageName, 'leftbar', 'collapsed');
  blockViews(thisItem, pageName, 'rightbar', 'collapsed');
}

//--|🠋 Element Observers 🠋|--\\
const transitioning = new Set<string>(); //--|🠈 Disable Overlay 🠈|--\\
const watchedBodies = new WeakSet<HTMLDivElement>();
const observeOverlay = (blockName: 'overlay') => {
  const unusedElements = document.querySelectorAll<HTMLDivElement>('div[id*="body"].asleep');
  unusedElements.forEach((element) => {
    if (watchedBodies.has(element)) return; //--|🠈 Skip already watched applications 🠈|--\\
    watchedBodies.add(element);

    const observer = new MutationObserver(() => {
      if (element.classList.contains('active')) {
        observer.disconnect(); //--|🠈 Stop watching once active 🠈|--\\
        watchedBodies.delete(element); //--|🠈 Free the slot so it can be re-watched if it sleeps again 🠈|--\\
        const activeWrapper = element.id.replace('-body', '');
        obnubilateContainer(activeWrapper, blockName);
      }
    });

    observer.observe(element, { attributes: true, attributeFilter: ['class'] });
  });
};

//--|🠋 Effect Toggles 🠋|--\\
let clearBlur = async (
  mainContainer: HTMLElement,
  headerContainer: HTMLElement,
  footerContainer: HTMLElement,
  leftbarContainer: HTMLElement,
  rightbarContainer: HTMLElement,
) => {
  //--|🠋 Confirm Orientation 🠋|--\\
  const mobile: boolean = window.matchMedia('(orientation: portrait)').matches;
  const desktop: boolean = window.matchMedia('(orientation: landscape)').matches;

  //--|🠋 Sharpen Containers 🠋|--\\
  if (desktop && !headerContainer.className.includes('expanded')) {
    mainContainer.classList.remove('obnubilate');
  } else if (mobile && !footerContainer.className.includes('expanded')) {
    mainContainer.classList.remove('obnubilate');
  }

  // mainContainer.classList.remove('obnubilate');
  [headerContainer, footerContainer, leftbarContainer, rightbarContainer].forEach((el) => el.classList.remove('obnubilate'));
};
let shrinkBlocks = (headerContainer: HTMLElement, footerContainer: HTMLElement, leftbarContainer: HTMLElement, rightbarContainer: HTMLElement) => {
  const targets = [
    { container: headerContainer, blockName: 'header', alterAction: 'squaring' },
    { container: footerContainer, blockName: 'footer', alterAction: 'squaring' },
    { container: leftbarContainer, blockName: 'leftbar', alterAction: 'collapsed' },
    { container: rightbarContainer, blockName: 'rightbar', alterAction: 'collapsed' },
  ] as const;

  targets.forEach(({ container, blockName, alterAction }) => {
    const pageName = container.parentElement?.id.split('-')[0] as string;
    if (container.classList.item(container.classList.length - 1) === 'unfolded') {
      blockViews(container, pageName, blockName, alterAction);
    }
  });
};

//--|🠊 1. Expanded Functions 🠈|--\\
export let expandOverlay = (pageName: string, blockName: 'overlay') => {
  console.log(`//--|🠊 Visible: #${pageName}-${blockName} 🠈|--\\\\`);
};

//--|🠊 Update & Loading Overlay 🠈|--\\
export let hidingOverlay = (pageName: string, blockName: 'overlay') => {
  let overlayElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  overlayElement.classList.replace(overlayElement.classList[1], 'hidden');
  /* console.log(`//--|🠊 Hidden: #${pageName}-${blockName} 🠈|--\\\\`); */
};
export let updateOverlay = (pageName: string, blockName: 'overlay') => {
  let overlayElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  overlayElement.classList.replace(overlayElement.classList[1], 'update');
  /* console.log(`//--|🠊 Update: #${pageName}-${blockName} 🠈|--\\\\`); */
};
export let loadingOverlay = (pageName: string, blockName: 'overlay') => {
  let overlayElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  overlayElement.classList.replace(overlayElement.classList[1], 'loading');
  /* console.log(`//--|🠊 Loading: #${pageName}-${blockName} 🠈|--\\\\`); */
};

export default obnubilateContainer;
