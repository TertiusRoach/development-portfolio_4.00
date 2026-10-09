//--|🠊 Header/ComponentsFunctions.ts 🠈|--\\
import blockViews from '../../containers';
export function unfoldHeaders(thisItem: HTMLElement) {
  if (Array.from(thisItem.classList).pop() !== 'expanded') {
    blockViews(thisItem, 'components', 'header', 'unfolded');
    blockViews(thisItem, 'components', 'leftbar', 'unfolded');
  }
}
