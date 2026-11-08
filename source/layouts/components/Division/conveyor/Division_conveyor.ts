//--|🠊 Division_conveyor.ts 🠈|--\\

function findSpot(fullscreen: HTMLLIElement, conveyor: HTMLLIElement): void {
  /*
  const fullscreen = document.querySelector(`#${pageName}-main .${labelName}-main_fullscreen-default li[class*="fullscreen"]`) as HTMLLIElement;
  const conveyor = document.querySelector(`#${pageName}-${blockName} .${labelName}-${blockName}_conveyor-default li[class*="conveyor"]`) as HTMLLIElement;
  */
  let prevView: string = conveyor.classList[0];
  let nextView: string = `${conveyor.classList[0].split('_')[0]}_${fullscreen.classList[0].split('_')[1]}`;

  conveyor.classList.replace(prevView, nextView);
}

//--|🠋 Functions & Elements 🠋|--\\
//--|🠊 AI Code: Review Please 2026-11-08 · Returns a cleanup, so the observer stops when the conveyor unmounts on the flip 🠈|--\\
function listenEvent(pageName: string, blockName: string, labelName: string): (() => void) | undefined {
  const fullscreen = findTags(pageName, blockName, labelName).fullscreen as HTMLLIElement;
  const conveyor = findTags(pageName, blockName, labelName).conveyor as HTMLLIElement;
  if (!fullscreen || !conveyor) {
    return;
  }

  const observer = new MutationObserver(() => {
    findSpot(fullscreen, conveyor);
  });

  observer.observe(fullscreen, {
    attributes: true,
    attributeFilter: ['class'],
  });

  return () => {
    observer.disconnect(); //--|🠈 Stop watching once this conveyor is gone 🠈|--\\
  };
}

//--|🠋 Configures Buttons & Elements 🠋|--\\
interface ChainedElements {
  fullscreen: HTMLLIElement;
  conveyor: HTMLLIElement;
}
function findTags(pageName: string, blockName: string, labelName: string): ChainedElements {
  const container = `${pageName}-${blockName}`;
  const fullscreen = document.querySelector(`#${pageName}-main .${labelName}-main_fullscreen-default li[class*="fullscreen"]`) as HTMLLIElement;
  const conveyor = (document.querySelector(`#${container} .${labelName}-${blockName}_conveyor-default li[class*="conveyor"]`) ??
    document.querySelector(`#${pageName}-header .${labelName}-header_conveyor-default li[class*="conveyor"]`) ??
    document.querySelector(`#${pageName}-footer .${labelName}-footer_conveyor-default li[class*="conveyor"]`)) as HTMLLIElement;

  return {
    fullscreen,
    conveyor,
  };
}

export default listenEvent;
