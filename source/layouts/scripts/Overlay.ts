//--|🠊 Overlay.ts 🠈|--\\
import blockViews from '../containers/containers';

//--|🠋 Disable Overlay 🠋|--\\
const transitioning = new Set<string>();
const watchedBodies = new WeakSet<HTMLDivElement>();
async function obnubilateContainers(pageName: string, blockName: string) {
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

//--|🠋 Element Observers 🠋|--\\
const asynchObserve = (selector: string, timeout = 6000): Promise<HTMLElement> => {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLElement>(selector);
    if (existing) {
      resolve(existing);
      return;
    }

    const observer = new MutationObserver(() => {
      const el = document.querySelector<HTMLElement>(selector);
      if (el) {
        observer.disconnect();
        clearTimeout(timer);
        resolve(el);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    const timer = setTimeout(() => {
      observer.disconnect();
      reject(new Error(`//--|🠊 Error: ${selector} not found 🠈|--\\`));
    }, timeout);
  });
};
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
        obnubilateContainers(activeWrapper, blockName);
      }
    });

    observer.observe(element, { attributes: true, attributeFilter: ['class'] });
  });
};

//--|🠋 Class Toggles 🠋|--\\
let clearBlur = async (
  mainContainer: HTMLElement,
  headerContainer: HTMLElement,
  footerContainer: HTMLElement,
  leftbarContainer: HTMLElement,
  rightbarContainer: HTMLElement,
) => {
  //--|🠋 Sharpen Containers 🠋|--\\
  mainContainer.classList.remove('obnubilate');
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

export default obnubilateContainers;
