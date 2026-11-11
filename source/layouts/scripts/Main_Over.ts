//--|🠊 layouts/scripts/Main_Over.ts 🠈|--\\
//--|🠊 Front-end Functions 🠈|--\\
import blockViews from '../containers/containers';
import { obnubilateMain } from './Head_Foot'; //--|🠈 AI Code: Review Please 2026-11-08 🠈|--\\
import { asynchObserve } from '../tools/synching';

//--|🠋 Class Changes 🠋|--\\
async function obnubilateContainer(pageName: string, blockName: string) {
  const bodyContainer = document.querySelector(`#${pageName}-body.active`) as HTMLDivElement;
  /*--|🠋
    AI Code: Review Please 2026-11-11
    Why: This function runs while <Overlay> renders, before its <section> is on the page.
    A querySelector here found nothing on a slow first load, so the overlay is now
    found below, with the other containers, once it exists.
    How long: 30 seconds covers a phone on Regular 3G (750 Kbps), the slow end of
    South Africa's mobile networks. The old 6 second limit gave up on a cold cache.
  🠉|--*/
  let waitingTime = 30000 as number; //--|🠈 AI Code: Review Please 2026-11-11 · 30 seconds to download every container 🠈|--\\
  switch (!transitioning.has(pageName)) {
    case true:
      try {
        observeOverlay('overlay'); //--|🠈 Observe <Overlay> to avoid stacking 🠈|--\\
        transitioning.add(pageName);
        if (bodyContainer) {
          //--|🠋 Wait until <Overlay> and all five containers exist on the page 🠋|--\\
          let [overlayBlock, mainBlock, headBlock, footBlock, leftBlock, rightBlock] = await Promise.all([
            asynchObserve(`#${pageName}-${blockName}`, waitingTime), //--|🠈 AI Code: Review Please 2026-11-11 · <Overlay> itself, found after it renders 🠈|--\\
            asynchObserve(`#${pageName}-main`, waitingTime),
            asynchObserve(`#${pageName}-header`, waitingTime),
            asynchObserve(`#${pageName}-footer`, waitingTime),
            asynchObserve(`#${pageName}-leftbar`, waitingTime),
            asynchObserve(`#${pageName}-rightbar`, waitingTime),
          ]);
          setTimeout(() => {
            clearBlur(pageName, headBlock, footBlock, leftBlock, rightBlock); //--|🠈 AI Code: Review Please 2026-11-08 · <main> is left to obnubilateMain() 🠈|--\\
          }, 250);

          setTimeout(() => {
            shrinkBlocks(headBlock, footBlock, leftBlock, rightBlock);
            blockViews(overlayBlock, pageName, 'overlay', 'collapsed'); //--|🠈 AI Code: Review Please 2026-11-08 · Hidden through hidingOverlay(), then <main> checks again 🠈|--\\
            forgetReload(pageName); //--|🠈 AI Code: Review Please 2026-11-11 · Loaded fine: the next visit may reload once again 🠈|--\\
          }, 2750);
        }
      } catch (error) {
        //--|🠊 AI Code: Review Please 2026-11-11 · A container still missing after waitingTime: the download stalled 🠈|--\\
        console.error(error);
        reloadOnce(pageName); //--|🠈 AI Code: Review Please 2026-11-11 · Reload once, what's already downloaded comes from the cache 🠈|--\\
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
//--|🠊 AI Code: Review Please 2026-11-08 · <main> follows obnubilateMain(): blurred while the overlay is .loading/.update or any container is .expanded 🠈|--\\
let clearBlur = async (
  pageName: string,
  headerContainer: HTMLElement,
  footerContainer: HTMLElement,
  leftbarContainer: HTMLElement,
  rightbarContainer: HTMLElement,
) => {
  //--|🠋 Sharpen Containers 🠋|--\\
  [headerContainer, footerContainer, leftbarContainer, rightbarContainer].forEach((el) => el.classList.remove('obnubilate'));
  obnubilateMain(pageName);
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
//--|🠊 AI Code: Review Please 2026-11-11 · Stalled Downloads 🠈|--\\
/*--|🠋
  Why: A stalled first load left the loading screen up until the visitor reloaded by hand.
  How: reloadOnce() writes a note in sessionStorage, then reloads the page.
  If the note is already there, this tab has reloaded once before, so it doesn't
  reload again: a dead connection would otherwise reload forever.
  forgetReload() wipes the note once the overlay hides, so a later stall can reload again.
  Note: sessionStorage throws in some private windows, so both read it inside a try.
🠉|--*/
let reloadOnce = (pageName: string) => {
  let reloadNote = null as string | null;
  try {
    reloadNote = sessionStorage.getItem('reloaded');
  } catch (error) {
    return; //--|🠈 No storage: no note, so no reload either 🠈|--\\
  }
  switch (reloadNote === null) {
    case true:
      sessionStorage.setItem('reloaded', pageName);
      window.location.reload();
      break;
    case false:
      console.warn(`//--|🠊 #${pageName}-body already reloaded once, waiting on a manual reload 🠈|--\\\\`);
      break;
  }
};
let forgetReload = (_pageName: string) => {
  try {
    sessionStorage.removeItem('reloaded');
  } catch (error) {
    return;
  }
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
