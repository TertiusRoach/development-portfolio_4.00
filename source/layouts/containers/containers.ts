//--|🠊 layouts/containers 🠈|--\\
//--|🠋 Functions 🠋|--\\
import {
  expandHeader,
  expandFooter,
  collapseHeader,
  collapseFooter,
  unfoldHeader,
  unfoldFooter,
  squaringHeader,
  squaringFooter,
  obnubilateMain,
} from '../scripts/Head_Foot';
import {
  expandLeftbar,
  expandRightbar,
  collapseLeftbar,
  collapseRightbar,
  unfoldLeftbar,
  unfoldRightbar,
  squaringLeftbar,
  squaringRightbar,
} from '../scripts/Left_Right';
import { expandOverlay, hidingOverlay, updateOverlay, loadingOverlay } from '../scripts/Main_Over';

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
            return errorHandlers(pageName, blockName, alterAction);
        }
      } else {
        if (toggleLocked) return;
        //--|===|--\\
        errorHandlers(pageName, blockName, alterAction);
        lockedElement.className = `locked-${blockName} ${lockedElement.className}`;
        setTimeout(() => {
          lockedElement.classList.remove(`locked-${blockName}`);
        }, 1500);
      }
      break;
  }
}
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
    collapsed: (pageName) => hidingOverlay(pageName, 'overlay'), //--|🠈 Used in <Overlay> · obnubilateContainer(); 🠈|--\\
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
//--|🠊 AI Code: Review Please 2026-11-08 🠈|--\\
const errorHandlers = (pageName: string, blockName: blockName, alterAction: alterAction) => {
  try {
    blockHandlers[blockName]?.[alterAction]?.(pageName);
    return obnubilateMain(pageName); //--|🠈 AI Code: Review Please 2026-11-08 · After every change, <main> follows the one rule 🠈|--\\
  } catch (error) {
    if (error instanceof ReferenceError) {
      //--|🠋 Main_Over.ts and containers.ts import each other: a handler ran before both finished loading 🠋|--\\
      window.alert(`|🠊 Warning: <${blockName}> ${alterAction} ran before its handler loaded. Is blockViews() called outside a function? 🠈|`);
    }
    throw error;
  }
};

export default blockViews;
