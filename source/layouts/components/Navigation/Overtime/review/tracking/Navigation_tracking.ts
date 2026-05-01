//--|🠊 Navigation_tracking.ts 🠈|--\\
export function viewDisplay() {
  //--|🠊 Check if the window exists. 🠈|--\\
  if (typeof window === 'undefined') {
    //--|🠊 Safety for SSR/Node Environments. 🠈|--\\
    return 'mid-cen'; //--|🠈 Default Fallback 🠈|--\\
  }

  const isLandscape = window.matchMedia('(orientation: landscape)').matches;
  const isPortrait = window.matchMedia('(orientation: portrait)').matches;

  if (isLandscape) {
    return 'top-lef';
  }
  if (isPortrait) {
    return 'bot-rig';
  }

  return 'mid-cen'; //--|🠈 Default Fallback 🠈|--\\
}
