//--|🠊 Footer/LandingFunctions.ts 🠈|--\\
import blockViews from '../../containers';
export function unfoldFooters(thisItem: HTMLElement) {
  if (Array.from(thisItem.classList).pop() !== 'expanded') {
    blockViews(thisItem, 'landing', 'footer', 'unfolded');
    blockViews(thisItem, 'landing', 'rightbar', 'unfolded');
  }
}
