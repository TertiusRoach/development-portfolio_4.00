//--|🠊 Footer/OvertimeFunctions.ts 🠈|--\\
import blockViews from '../../containers';
export function unfoldFooters(thisItem: HTMLElement) {
  if (Array.from(thisItem.classList).pop() !== 'expanded') {
    blockViews(thisItem, 'overtime', 'footer', 'unfolded');
    blockViews(thisItem, 'overtime', 'rightbar', 'unfolded');
  }
}
