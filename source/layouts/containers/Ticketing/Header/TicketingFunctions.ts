//--|🠊 Header/TicketingFunctions.ts 🠈|--\\
import blockViews from '../../containers';
export function unfoldHeaders(thisItem: HTMLElement) {
  if (Array.from(thisItem.classList).pop() !== 'expanded') {
    blockViews(thisItem, 'ticketing', 'header', 'unfolded');
    blockViews(thisItem, 'ticketing', 'leftbar', 'unfolded');
  }
}
