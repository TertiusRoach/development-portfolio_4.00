//--|🠊 Header/LandingFunctions.ts 🠈|--\\
import blockViews from '../../containers';
export function unfoldHeaders(thisItem: HTMLElement) {
  if (Array.from(thisItem.classList).pop() !== 'expanded') {
    blockViews(thisItem, 'landing', 'header', 'unfolded');
    blockViews(thisItem, 'landing', 'leftbar', 'unfolded');
  }
}
