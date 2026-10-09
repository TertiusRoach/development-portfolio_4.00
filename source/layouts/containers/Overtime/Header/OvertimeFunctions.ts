//--|🠊 Header/OvertimeFunctions.ts 🠈|--\\
import blockViews from '../../containers';
export function unfoldHeaders(thisItem: HTMLElement) {
  if (Array.from(thisItem.classList).pop() !== 'expanded') {
    blockViews(thisItem, 'overtime', 'header', 'unfolded');
    blockViews(thisItem, 'overtime', 'leftbar', 'unfolded');
  }
}
