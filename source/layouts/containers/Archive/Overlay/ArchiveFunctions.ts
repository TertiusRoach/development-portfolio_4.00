//--|🠊 Overlay/ComponentsFunctions.ts 🠈|--\\
//--|🠋 Loading Functions 🠋|--\\
async function obnubilateContainers(pageName: string, blockName: string) {
  const [mainContainer, headerContainer, footerContainer, leftbarContainer, rightbarContainer] = await Promise.all([
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

  assignState(headerContainer, footerContainer, leftbarContainer, rightbarContainer);
  removeBlur(mainContainer, headerContainer, footerContainer, leftbarContainer, rightbarContainer);
}

const removeBlur = async (
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
const assignState = (headerContainer: HTMLElement, footerContainer: HTMLElement, leftbarContainer: HTMLElement, rightbarContainer: HTMLElement) => {
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

let asynchObserve = (selector: string, timeout = 5000): Promise<HTMLElement> => {
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

export default obnubilateContainers;
