//--|🠊 layouts/tools/components.ts 🠈|--\\
export function showingBootstrap(): string {
  let windowScreen: number = 0;
  let displayText: string = 'display-0';
  const desktop: boolean = window.matchMedia('(orientation: landscape)').matches;
  const mobile: boolean = window.matchMedia('(orientation: portrait)').matches;
  //--|🠊 AI Code: Review Please 2026-11-01 🠈|--\\
  const tablet: boolean = window.matchMedia('(max-aspect-ratio: 15.99/9) and (min-aspect-ratio: 9/15.99)').matches;
  if (tablet === true) {
    //--|🠋 Same query as tablet-squaring: measures the long side and wins over both orientations 🠋|--\\
    windowScreen = Math.max(window.innerWidth, window.innerHeight) as number;
    switch (true) {
      case windowScreen >= 1920:
        displayText = 'display-3'; //--|🠈 1920px 🠈|--\\
        break;
      case windowScreen >= 1366:
        displayText = 'display-4'; //--|🠈 1366px 🠈|--\\
        break;
      case windowScreen >= 854:
        displayText = 'display-5'; //--|🠈 854px 🠈|--\\
        break;
      case windowScreen >= 640:
        displayText = 'display-6'; //--|🠈 640px 🠈|--\\
        break;
    }
  } else if (desktop === true) {
    windowScreen = window.innerHeight as number;
    switch (true) {
      case windowScreen >= 1080:
        displayText = 'display-1'; //--|🠈 1920px 🠈|--\\
        break;
      case windowScreen >= 768:
        displayText = 'display-3'; //--|🠈 1366px 🠈|--\\
        break;
      case windowScreen >= 480:
        displayText = 'display-4'; //--|🠈 854px 🠈|--\\
        break;
      case windowScreen >= 360:
        displayText = 'display-6'; //--|🠈 640px 🠈|--\\
        break;
    }
  } else if (mobile === true) {
    windowScreen = window.innerWidth as number;
    switch (true) {
      case windowScreen >= 1080:
        displayText = 'display-3'; //--|🠈 1920px 🠈|--\\
        break;
      case windowScreen >= 768:
        displayText = 'display-4'; //--|🠈 1366px 🠈|--\\
        break;
      case windowScreen >= 480:
        displayText = 'display-5'; //--|🠈 854px 🠈|--\\
        break;
      case windowScreen >= 360:
        displayText = 'display-6'; //--|🠈 640px 🠈|--\\
        break;
    }
  }

  return displayText as string;
}
