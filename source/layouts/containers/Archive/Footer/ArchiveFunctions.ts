//--|🠊 Footer/ArchiveFunctions.ts 🠈|--\\
import blockViews from '../../containers';
export function unfoldFooters(thisItem: HTMLElement) {
  if (Array.from(thisItem.classList).pop() !== 'expanded') {
    blockViews(thisItem, 'components', 'footer', 'unfolded');
    blockViews(thisItem, 'components', 'rightbar', 'unfolded');
  }
}
