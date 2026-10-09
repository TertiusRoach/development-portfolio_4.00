//--|🠊 Footer/TicketingFunctions.ts 🠈|--\\
import blockViews from '../../containers';
export function unfoldFooters(thisItem: HTMLElement) {
  if (Array.from(thisItem.classList).pop() !== 'expanded') {
    blockViews(thisItem, 'ticketing', 'footer', 'unfolded');
    blockViews(thisItem, 'ticketing', 'rightbar', 'unfolded');
  }
}
