//--|🠊 Header/ArchiveFunctions.ts 🠈|--\\
import blockViews from '../../containers';
import { freezeContainer } from '../../../scripts/Head_Foot';
export function unfoldHeaders(thisItem: HTMLElement) {
  if (Array.from(thisItem.classList).pop() !== 'expanded') {
    blockViews(thisItem, 'components', 'header', 'unfolded');
    blockViews(thisItem, 'components', 'leftbar', 'unfolded');
  }
}
export function squareHeaders(thisItem: HTMLElement) {
  let leftbarElement = document.querySelector('#components-leftbar') as HTMLElement;
  switch (Array.from(thisItem.classList).pop()) {
    case 'unfolded':
      thisItem.classList.remove('locked-header'); //--|🠈 A deliberate leave wins over the hover's lock 🠈|--\\
      leftbarElement.classList.remove('locked-leftbar');
      blockViews(thisItem, 'components', 'header', 'squaring');
      blockViews(thisItem, 'components', 'leftbar', 'collapsed');
      break;
  }
}
export function freezeHeaders(pageName: 'components', styleView: 'top-lef') {
  switch (styleView) {
    case 'top-lef':
      freezeContainer(pageName, 'header');
      freezeContainer(pageName, 'leftbar');
      break;
  }
}
