//--|🠊 layouts/containers 🠈|--\\

//--|🠋 Type Definitions 🠋|--\\
type Handler = (pageName: string) => void;
type blockName = 'overlay' | 'header' | 'footer' | 'leftbar' | 'rightbar' | 'main';
type alterAction = 'expanded' | 'collapsed' | 'unfolded' | 'squaring' | 'loading' | 'update';
//--|🠋 Select Function 🠋|--\\
function blockViews(thisItem: HTMLElement, pageName: string, blockName: blockName, alterAction: alterAction) {
  const lockedElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  const selectElement = thisItem.classList[0].split('-')[1] as 'overlay' | 'header' | 'footer' | 'leftbar' | 'rightbar' | 'main';
  //--|===|--\\
  const toggleLocked: boolean = lockedElement.classList.contains(`locked-${blockName}`) as true | false;
  const toggleFrozen: boolean = lockedElement.classList.contains(`frozen-${blockName}`) as true | false;
  switch (toggleFrozen) {
    case false:
      if (selectElement === 'main') {
        let lockBody = document.querySelector(`#${pageName}-${blockName}`)?.parentElement as HTMLDivElement;
        switch (!lockBody.className.includes('locked-body')) {
          case true:
            return blockHandlers[blockName]?.[alterAction]?.(pageName);
        }
      } else {
        if (toggleLocked) return;
        //--|===|--\\
        blockHandlers[blockName]?.[alterAction]?.(pageName);
        lockedElement.className = `locked-${blockName} ${lockedElement.className}`;
        setTimeout(() => {
          lockedElement.classList.remove(`locked-${blockName}`);
        }, 1500);
      }
      break;
  }
}

//--|🠊 1. Expanded Functions 🠈|--\\
let expandHeader = (pageName: string, blockName: 'header') => {
  console.log(`//--|🠊 Expand: #${pageName}-${blockName} 🠈|--\\\\`);
};
let expandFooter = (pageName: string, blockName: 'footer') => {
  console.log(`//--|🠊 Expand: #${pageName}-${blockName} 🠈|--\\\\`);
};
let expandLeftbar = (pageName: string, blockName: 'leftbar') => {
  console.log(`//--|🠊 Expand: #${pageName}-${blockName} 🠈|--\\\\`);
};
let expandRightbar = (pageName: string, blockName: 'rightbar') => {
  console.log(`//--|🠊 Expand: #${pageName}-${blockName} 🠈|--\\\\`);
};
let expandOverlay = (pageName: string, blockName: 'overlay') => {
  console.log(`//--|🠊 Visible: #${pageName}-${blockName} 🠈|--\\\\`);
};

//--|🠊 2. Collapsed Functions 🠈|--\\
let collapseHeader = (pageName: string, blockName: 'header') => {
  console.log(`//--|🠊 Collapse: #${pageName}-${blockName} 🠈|--\\\\`);
};
let collapseFooter = (pageName: string, blockName: 'footer') => {
  console.log(`//--|🠊 Collapse: #${pageName}-${blockName} 🠈|--\\\\`);
};
let collapseLeftbar = (pageName: string, blockName: 'leftbar') => {
  let leftbarElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  leftbarElement.classList.replace(leftbarElement.classList[leftbarElement.classList.length - 1], 'collapsed');
  /* console.log(`//--|🠊 Collapse: #${pageName}-${blockName} 🠈|--\\\\`); */
};
let collapseRightbar = (pageName: string, blockName: 'rightbar') => {
  let rightbarElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  rightbarElement.classList.replace(rightbarElement.classList[rightbarElement.classList.length - 1], 'collapsed');
  /* console.log(`//--|🠊 Collapse: #${pageName}-${blockName} 🠈|--\\\\`); */
};

//--|🠊 3. Unfolded Functions 🠈|--\\\\
let unfoldHeader = (pageName: string, blockName: 'header') => {
  let headerElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  headerElement.classList.replace(headerElement.classList[headerElement.classList.length - 1], 'unfolded');
  /* console.log(`//--|🠊 Unfold: #${pageName}-${blockName} 🠈|--\\\\`); */
};
let unfoldFooter = (pageName: string, blockName: 'footer') => {
  let footerElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  footerElement.classList.replace(footerElement.classList[footerElement.classList.length - 1], 'unfolded');
  /* console.log(`//--|🠊 Unfold: #${pageName}-${blockName} 🠈|--\\\\`); */
};
let unfoldLeftbar = (pageName: string, blockName: 'leftbar') => {
  let leftbarElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  leftbarElement.classList.replace(leftbarElement.classList[leftbarElement.classList.length - 1], 'unfolded');
  /* console.log(`//--|🠊 Unfold: #${pageName}-${blockName} 🠈|--\\\\`); */
};
let unfoldRightbar = (pageName: string, blockName: 'rightbar') => {
  let rightbarElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  rightbarElement.classList.replace(rightbarElement.classList[rightbarElement.classList.length - 1], 'unfolded');
  /* console.log(`//--|🠊 Unfold: #${pageName}-${blockName} 🠈|--\\\\`); */
};

//--|🠊 4. Squaring Functions 🠈|--\\
let squaringHeader = (pageName: string, blockName: 'header') => {
  let headerElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  headerElement.classList.replace(headerElement.classList[headerElement.classList.length - 1], 'squaring');
  /* console.log(`//--|🠊 Squaring: #${pageName}-${blockName} 🠈|--\\\\`); */
};
let squaringFooter = (pageName: string, blockName: 'footer') => {
  let footerElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  footerElement.classList.replace(footerElement.classList[footerElement.classList.length - 1], 'squaring');
  /* console.log(`//--|🠊 Squaring: #${pageName}-${blockName} 🠈|--\\\\`); */
};
let squaringLeftbar = (pageName: string, blockName: 'leftbar') => {
  let leftbarElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  leftbarElement.classList.replace(leftbarElement.classList[leftbarElement.classList.length - 1], 'squaring');
  /* console.log(`//--|🠊 Squaring: #${pageName}-${blockName} 🠈|--\\\\`); */
};
let squaringRightbar = (pageName: string, blockName: 'rightbar') => {
  let rightbarElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  rightbarElement.classList.replace(rightbarElement.classList[rightbarElement.classList.length - 1], 'squaring');
  /* console.log(`//--|🠊 Squaring: #${pageName}-${blockName} 🠈|--\\\\`); */
};

//--|🠊 Update & Loading Overlay 🠈|--\\
let hidingOverlay = (pageName: string, blockName: 'overlay') => {
  let overlayElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  overlayElement.classList.replace(overlayElement.classList[1], 'hidden');
  /* console.log(`//--|🠊 Hidden: #${pageName}-${blockName} 🠈|--\\\\`); */
};
let updateOverlay = (pageName: string, blockName: 'overlay') => {
  let overlayElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  overlayElement.classList.replace(overlayElement.classList[1], 'update');
  /* console.log(`//--|🠊 Update: #${pageName}-${blockName} 🠈|--\\\\`); */
};
let loadingOverlay = (pageName: string, blockName: 'overlay') => {
  let overlayElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  overlayElement.classList.replace(overlayElement.classList[1], 'loading');
  /* console.log(`//--|🠊 Loading: #${pageName}-${blockName} 🠈|--\\\\`); */
};

const blockHandlers: Partial<Record<blockName, Partial<Record<alterAction, Handler>>>> = {
  header: {
    expanded: (pageName) => expandHeader(pageName, 'header'),
    collapsed: (pageName) => collapseHeader(pageName, 'header'),
    unfolded: (pageName) => unfoldHeader(pageName, 'header'),
    squaring: (pageName) => squaringHeader(pageName, 'header'),
  },
  footer: {
    expanded: (pageName) => expandFooter(pageName, 'footer'),
    collapsed: (pageName) => collapseFooter(pageName, 'footer'),
    unfolded: (pageName) => unfoldFooter(pageName, 'footer'),
    squaring: (pageName) => squaringFooter(pageName, 'footer'),
  },
  overlay: {
    expanded: (pageName) => expandOverlay(pageName, 'overlay'),
    collapsed: (pageName) => hidingOverlay(pageName, 'overlay'),
    update: (pageName) => updateOverlay(pageName, 'overlay'),
    loading: (pageName) => loadingOverlay(pageName, 'overlay'),
  },
  leftbar: {
    expanded: (pageName) => expandLeftbar(pageName, 'leftbar'),
    collapsed: (pageName) => collapseLeftbar(pageName, 'leftbar'),
    unfolded: (pageName) => unfoldLeftbar(pageName, 'leftbar'),
    squaring: (pageName) => squaringLeftbar(pageName, 'leftbar'),
  },
  rightbar: {
    expanded: (pageName) => expandRightbar(pageName, 'rightbar'),
    collapsed: (pageName) => collapseRightbar(pageName, 'rightbar'),
    unfolded: (pageName) => unfoldRightbar(pageName, 'rightbar'),
    squaring: (pageName) => squaringRightbar(pageName, 'rightbar'),
  },
};
export default blockViews;
