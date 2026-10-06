//--|🠊 Main.ts 🠈|--\\
import blockViews from '../containers/containers';
export function revertBlocks(thisItem: HTMLElement, pageName: 'landing' | 'overtime' | 'ticketing' | 'hyperlink' | 'components'): void {
  blockViews(thisItem, pageName, 'header', 'squaring');
  blockViews(thisItem, pageName, 'footer', 'squaring');

  blockViews(thisItem, pageName, 'leftbar', 'collapsed');
  blockViews(thisItem, pageName, 'rightbar', 'collapsed');
}
