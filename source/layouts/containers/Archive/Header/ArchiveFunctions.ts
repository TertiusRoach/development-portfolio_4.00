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
      freezeContainer(pageName, 'header');
      freezeContainer(pageName, 'leftbar');
      break;
  }
}
