//--|🠊 Overlay.ts 🠈|--\\
//--|🠋 Disable Overlay 🠋|--\\
async function obnubilateContainers(pageName: string, blockName: string) {
  const targetElement = document.querySelector(`#${pageName}-body.active`) as HTMLDivElement;
  if (targetElement) {
    //--|🠊 Wait until all five containers exist on the page 🠈|--\\
    const [mainBlock, headBlock, footBlock, leftBlock, rightBlock] = await Promise.all([
      asynchObserve(`#${pageName}-main`),
      asynchObserve(`#${pageName}-header`),
      asynchObserve(`#${pageName}-footer`),
      asynchObserve(`#${pageName}-leftbar`),
      asynchObserve(`#${pageName}-rightbar`),
    ]);

    let overlayContainer = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
    setTimeout(() => {
      overlayContainer.classList.replace(overlayContainer.classList[1], 'hidden');
    }, 2750);

    mutateObserve(blockName);
    shrinkBlocks(headBlock, footBlock, leftBlock, rightBlock);
    clearBlur(mainBlock, headBlock, footBlock, leftBlock, rightBlock);
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
const mutateObserve = (blockName: string) => {
  const unusedElement = document.querySelectorAll(`div[id*="body"].asleep`) as NodeListOf<HTMLDivElement>;
  unusedElement.forEach((element) => {
    const observer = new MutationObserver(() => {
      //--|🠊 Check whether this particular block has become active 🠈|--\\
      if (element.classList.contains('active')) {
        const newPageName = element.id.replace('-body', ''); //--|🠈 Get the page name from the element's ID 🠈|--\\
        observer.disconnect(); //--|🠈 Stop watching this element now that it has become active 🠈|--\\
        obnubilateContainers(newPageName, blockName); //--|🠈 Run your existing function again for the newly active page 🠈|--\\
      }
    });
    observer.observe(element, {
      attributes: true,
      attributeFilter: ['class'],
    });
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
  setTimeout(() => {
    mainContainer.classList.remove('obnubilate');
    [headerContainer, footerContainer, leftbarContainer, rightbarContainer].forEach((el) => el.classList.remove('obnubilate'));
  }, 125);
};
let shrinkBlocks = (headerContainer: HTMLElement, footerContainer: HTMLElement, leftbarContainer: HTMLElement, rightbarContainer: HTMLElement) => {
  const headClass = [...headerContainer.classList] as Array<string>;
  const footClass = [...footerContainer.classList] as Array<string>;
  const leftClass = [...leftbarContainer.classList] as Array<string>;
  const rightClass = [...rightbarContainer.classList] as Array<string>;

  let headState = headClass[headClass.length - 1] as 'unfolded';
  let footState = footClass[footClass.length - 1] as 'unfolded';
  let leftState = leftClass[leftClass.length - 1] as 'unfolded';
  let rightState = rightClass[rightClass.length - 1] as 'unfolded';
  setTimeout(() => {
    headerContainer.classList.replace(headState, 'squaring');
    footerContainer.classList.replace(footState, 'squaring');
    leftbarContainer.classList.replace(leftState, 'collapsed');
    rightbarContainer.classList.replace(rightState, 'collapsed');
  }, 2250);
};
export default obnubilateContainers;
