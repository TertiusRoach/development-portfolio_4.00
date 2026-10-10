//--|🠊 Header/ComponentsFunctions.ts 🠈|--\\
import blockViews from '../../containers';
import { freezeToggle } from '../../../scripts/Header';
export function unfoldHeaders(thisItem: HTMLElement) {
  if (Array.from(thisItem.classList).pop() !== 'expanded') {
    blockViews(thisItem, 'components', 'header', 'unfolded');
    blockViews(thisItem, 'components', 'leftbar', 'unfolded');
  }
}
export function squareHeaders(thisItem: HTMLElement) {
  const headerElement = document.querySelector(`#${thisItem.id}`) as HTMLElement;
  const leftbarElement = document.querySelector('#components-leftbar') as HTMLElement;
  switch (Array.from(thisItem.classList).pop()) {
    case 'unfolded':
      headerElement.className = `default-header squaring`;
      leftbarElement.className = `default-leftbar collapsed`;
      break;
  }
}
export function freezeHeaders(pageName: 'components', styleView: 'top-lef') {
  switch (styleView) {
    case 'top-lef':
      freezeToggle(pageName, 'header');
      freezeToggle(pageName, 'leftbar');
      break;
  }
}
