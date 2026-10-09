//--|🠊 Footer/HyperlinkFunctions.ts 🠈|--\\
import blockViews from '../../containers';
export function unfoldFooters(thisItem: HTMLElement) {
  if (Array.from(thisItem.classList).pop() !== 'expanded') {
    blockViews(thisItem, 'hyperlink', 'footer', 'unfolded');
    blockViews(thisItem, 'hyperlink', 'rightbar', 'unfolded');
  }
}
