//--|🠊 layouts/containers 🠈|--\\
//--|🠋 Select Function 🠋|--\\
type BlockName = 'overlay' | 'header' | 'footer' | 'leftbar' | 'rightbar' | 'main';
type AlterAction = 'expand' | 'collapsed' | 'unfold' | 'squaring' | 'loading' | 'update';

function blockViews(thisItem: HTMLElement, pageName: string, blockName: BlockName, alterAction: AlterAction) {
  const lockedElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  const toggleSafety = lockedElement.classList.contains(`locked-${blockName}`);
  const selectElement = thisItem.classList[0].split('-')[1] as 'overlay' | 'header' | 'footer' | 'leftbar' | 'rightbar' | 'main';

  if (selectElement === 'main') {
    return blockHandlers[blockName]?.[alterAction]?.(pageName);
  }

  if (toggleSafety) return;

  lockedElement.className = `locked-${blockName} ${lockedElement.className}`;
  blockHandlers[blockName]?.[alterAction]?.(pageName);
  setTimeout(() => {
    lockedElement.classList.remove(`locked-${blockName}`);
  }, 125);
  /*
  lockedElement.classList.add(`locked-${blockName}`);
  */
}

//--|🠊 Expand Functions 🠈|--\\
let expandHeader = (pageName: string, blockName: 'header') => {
  console.log(`//--|🠊 Expand: #${pageName}-${blockName} 🠈|--\\`);
};
let expandFooter = (pageName: string, blockName: 'footer') => {
  console.log(`//--|🠊 Expand: #${pageName}-${blockName} 🠈|--\\`);
};
let expandLeftbar = (pageName: string, blockName: 'leftbar') => {
  console.log(`//--|🠊 Expand: #${pageName}-${blockName} 🠈|--\\`);
};
let expandRightbar = (pageName: string, blockName: 'rightbar') => {
  console.log(`//--|🠊 Expand: #${pageName}-${blockName} 🠈|--\\`);
};
let expandOverlay = (pageName: string, blockName: 'overlay') => {
  console.log(`//--|🠊 Visible: #${pageName}-${blockName} 🠈|--\\`);
};

//--|🠊 Collapse Functions 🠈|--\\
let collapseHeader = (pageName: string, blockName: 'header') => {
  console.log(`//--|🠊 Collapse: #${pageName}-${blockName} 🠈|--\\`);
};
let collapseFooter = (pageName: string, blockName: 'footer') => {
  console.log(`//--|🠊 Collapse: #${pageName}-${blockName} 🠈|--\\`);
};
let collapseLeftbar = (pageName: string, blockName: 'leftbar') => {
  let leftbarElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  leftbarElement.classList.replace(leftbarElement.classList[leftbarElement.classList.length - 1], 'collapsed');
  console.log(`//--|🠊 Collapse: #${pageName}-${blockName} 🠈|--\\`);
};
let collapseRightbar = (pageName: string, blockName: 'rightbar') => {
  let rightbarElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  rightbarElement.classList.replace(rightbarElement.classList[rightbarElement.classList.length - 1], 'collapsed');
  console.log(`//--|🠊 Collapse: #${pageName}-${blockName} 🠈|--\\`);
};
let collapseOverlay = (pageName: string, blockName: 'overlay') => {
  console.log(`//--|🠊 Hidden: #${pageName}-${blockName} 🠈|--\\`);
};

//--|🠊 Unfold Functions 🠈|--\\
let unfoldHeader = (pageName: string, blockName: 'header') => {
  let headerElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  headerElement.classList.replace(headerElement.classList[headerElement.classList.length - 1], 'unfolded');
  console.log(`//--|🠊 Unfold: #${pageName}-${blockName} 🠈|--\\`);
};
let unfoldFooter = (pageName: string, blockName: 'footer') => {
  let footerElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  footerElement.classList.replace(footerElement.classList[footerElement.classList.length - 1], 'unfolded');
  console.log(`//--|🠊 Unfold: #${pageName}-${blockName} 🠈|--\\`);
};
let unfoldLeftbar = (pageName: string, blockName: 'leftbar') => {
  let leftbarElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  leftbarElement.classList.replace(leftbarElement.classList[leftbarElement.classList.length - 1], 'unfolded');
  console.log(`//--|🠊 Unfold: #${pageName}-${blockName} 🠈|--\\`);
};
let unfoldRightbar = (pageName: string, blockName: 'rightbar') => {
  let rightbarElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  rightbarElement.classList.replace(rightbarElement.classList[rightbarElement.classList.length - 1], 'unfolded');
  console.log(`//--|🠊 Unfold: #${pageName}-${blockName} 🠈|--\\`);
};

//--|🠊 Squaring Functions 🠈|--\\
let squaringHeader = (pageName: string, blockName: 'header') => {
  let headerElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  headerElement.classList.replace(headerElement.classList[headerElement.classList.length - 1], 'squaring');
  console.log(`//--|🠊 Squaring: #${pageName}-${blockName} 🠈|--\\`);
};
let squaringFooter = (pageName: string, blockName: 'footer') => {
  let footerElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  footerElement.classList.replace(footerElement.classList[footerElement.classList.length - 1], 'squaring');
  console.log(`//--|🠊 Squaring: #${pageName}-${blockName} 🠈|--\\`);
};
let squaringLeftbar = (pageName: string, blockName: 'leftbar') => {
  let leftbarElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  leftbarElement.classList.replace(leftbarElement.classList[leftbarElement.classList.length - 1], 'squaring');
  console.log(`//--|🠊 Squaring: #${pageName}-${blockName} 🠈|--\\`);
};
let squaringRightbar = (pageName: string, blockName: 'rightbar') => {
  let rightbarElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  rightbarElement.classList.replace(rightbarElement.classList[rightbarElement.classList.length - 1], 'squaring');
  console.log(`//--|🠊 Squaring: #${pageName}-${blockName} 🠈|--\\`);
};

//--|🠊 Update & Loading Overlay 🠈|--\\
let updateOverlay = (pageName: string, blockName: 'overlay') => {
  console.log(`//--|🠊 Update: #${pageName}-${blockName} 🠈|--\\`);
};
let loadingOverlay = (pageName: string, blockName: 'overlay') => {
  console.log(`//--|🠊 Loading: #${pageName}-${blockName} 🠈|--\\`);
};

type Handler = (pageName: string) => void;

const blockHandlers: Partial<Record<BlockName, Partial<Record<AlterAction, Handler>>>> = {
  header: {
    expand: (pageName) => expandHeader(pageName, 'header'),
    collapsed: (pageName) => collapseHeader(pageName, 'header'),
    unfold: (pageName) => unfoldHeader(pageName, 'header'),
    squaring: (pageName) => squaringHeader(pageName, 'header'),
  },
  footer: {
    expand: (pageName) => expandFooter(pageName, 'footer'),
    collapsed: (pageName) => collapseFooter(pageName, 'footer'),
    unfold: (pageName) => unfoldFooter(pageName, 'footer'),
    squaring: (pageName) => squaringFooter(pageName, 'footer'),
  },
  overlay: {
    expand: (pageName) => expandOverlay(pageName, 'overlay'),
    collapsed: (pageName) => collapseOverlay(pageName, 'overlay'),
    update: (pageName) => updateOverlay(pageName, 'overlay'),
    loading: (pageName) => loadingOverlay(pageName, 'overlay'),
  },
  leftbar: {
    expand: (pageName) => expandLeftbar(pageName, 'leftbar'),
    collapsed: (pageName) => collapseLeftbar(pageName, 'leftbar'),
    unfold: (pageName) => unfoldLeftbar(pageName, 'leftbar'),
    squaring: (pageName) => squaringLeftbar(pageName, 'leftbar'),
  },
  rightbar: {
    expand: (pageName) => expandRightbar(pageName, 'rightbar'),
    collapsed: (pageName) => collapseRightbar(pageName, 'rightbar'),
    unfold: (pageName) => unfoldRightbar(pageName, 'rightbar'),
    squaring: (pageName) => squaringRightbar(pageName, 'rightbar'),
  },
};
export default blockViews;
