//--|🠊 Footer/HyperlinkFunctions.ts 🠈|--\\
import blockViews from '../../containers';
import { freezeToggle } from '../../../scripts/Footer';
export function unfoldFooters(thisItem: HTMLElement) {
  if (Array.from(thisItem.classList).pop() !== 'expanded') {
    blockViews(thisItem, 'hyperlink', 'footer', 'unfolded');
    blockViews(thisItem, 'hyperlink', 'rightbar', 'unfolded');
  }
}
export function squareFooters(thisItem: HTMLElement) {
  const headerElement = document.querySelector(`#${thisItem.id}`) as HTMLElement;
  const rightbarElement = document.querySelector('#hyperlink-rightbar') as HTMLElement;
  switch (Array.from(thisItem.classList).pop()) {
    case 'unfolded':
      headerElement.className = `default-footer squaring`;
      rightbarElement.className = `default-rightbar collapsed`;
      break;
  }
}
export function freezeFooters(pageName: 'hyperlink', styleView: 'bot-rig') {
  switch (styleView) {
    case 'bot-rig':
      freezeToggle(pageName, 'footer');
      freezeToggle(pageName, 'rightbar');
      break;
  }
}
