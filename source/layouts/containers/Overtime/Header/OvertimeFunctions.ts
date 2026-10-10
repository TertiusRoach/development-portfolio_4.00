//--|🠊 Header/OvertimeFunctions.ts 🠈|--\\
import blockViews from '../../containers';
import { freezeToggle } from '../../../scripts/Header';
export function unfoldHeaders(thisItem: HTMLElement) {
  if (Array.from(thisItem.classList).pop() !== 'expanded') {
    blockViews(thisItem, 'overtime', 'header', 'unfolded');
    blockViews(thisItem, 'overtime', 'leftbar', 'unfolded');
  }
}
export function squareHeaders(thisItem: HTMLElement) {
  const headerElement = document.querySelector(`#${thisItem.id}`) as HTMLElement;
  const leftbarElement = document.querySelector('#overtime-leftbar') as HTMLElement;
  switch (Array.from(thisItem.classList).pop()) {
    case 'unfolded':
      headerElement.className = `default-header squaring`;
      leftbarElement.className = `default-leftbar collapsed`;
      break;
  }
}
export function freezeHeaders(pageName: 'overtime', styleView: 'top-lef') {
  switch (styleView) {
    case 'top-lef':
      freezeToggle(pageName, 'header');
      freezeToggle(pageName, 'leftbar');
      break;
  }
}
