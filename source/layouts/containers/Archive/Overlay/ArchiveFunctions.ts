//--|🠊 Overlay/ComponentsFunctions.ts 🠈|--\\
//--|🠋 Loading Functions 🠋|--\\
async function obnubilateContainers(pageName: string, blockName: string) {
  //--|🠋 Sharpen Containers 🠋|--\\
  let [mainContainer, headerContainer, footerContainer, leftbarContainer, rightbarContainer] = await Promise.all([
    asynchObserve(`#${pageName}-main`),
    asynchObserve(`#${pageName}-header`),
    asynchObserve(`#${pageName}-footer`),
    asynchObserve(`#${pageName}-leftbar`),
    asynchObserve(`#${pageName}-rightbar`),
  ]);
  mainContainer.classList.remove('obnubilate');
  setTimeout(() => {
    [headerContainer, footerContainer, leftbarContainer, rightbarContainer].forEach((el) => el.classList.remove('obnubilate'));
  }, 125);

  let headClass = [...headerContainer.classList] as Array<string>;
  let footClass = [...footerContainer.classList] as Array<string>;
  let leftClass = [...leftbarContainer.classList] as Array<string>;
  let rightClass = [...rightbarContainer.classList] as Array<string>;

  let headState = headClass[headClass.length - 1] as 'expanded' | 'collapsed' | 'unfolded' | 'squaring';
  let footState = footClass[footClass.length - 1] as 'expanded' | 'collapsed' | 'unfolded' | 'squaring';
  let leftState = leftClass[leftClass.length - 1] as 'expanded' | 'collapsed' | 'unfolded' | 'squaring';
  let rightState = rightClass[rightClass.length - 1] as 'expanded' | 'collapsed' | 'unfolded' | 'squaring';
  setTimeout(() => {
    headerContainer.classList.replace(headState, 'squaring');
    footerContainer.classList.replace(footState, 'squaring');
    leftbarContainer.classList.replace(leftState, 'collapsed');
    rightbarContainer.classList.replace(rightState, 'collapsed');

    console.log('Header:', headerContainer);
    console.log('Footer:', footerContainer);
  }, 2250);
}

const asynchObserve = (selector: string, timeout = 5000): Promise<HTMLElement> => {
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
