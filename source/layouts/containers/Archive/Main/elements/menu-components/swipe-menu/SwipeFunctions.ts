//--|🠊 swipe-menu/SwipeFunctions.ts 🠈|--\\
//--|🠋 Functions 🠋|--\\
export function togglePreview() {
  const controller = document.querySelector('#components-main menu.swipe-main_swipe-default') as HTMLMenuElement;
  const prevView = controller.querySelector('div[class*="prev-view"]') as HTMLDivElement;
  const nextView = controller.querySelector('div[class*="next-view"]') as HTMLDivElement;
  prevView.classList.replace('downplay', 'highlight');
  nextView.classList.replace('downplay', 'highlight');
}
