//--|🠊 Header/HyperlinkFunctions.ts 🠈|--\\
import blockViews from '../../containers';
export function unfoldHeaders(thisItem: HTMLElement) {
  if (Array.from(thisItem.classList).pop() !== 'expanded') {
    blockViews(thisItem, 'hyperlink', 'header', 'unfolded');
    blockViews(thisItem, 'hyperlink', 'leftbar', 'unfolded');
  }
}
