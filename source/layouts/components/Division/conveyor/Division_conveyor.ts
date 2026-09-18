//--|🠊 Division_conveyor.ts 🠈|--\\

import reloadElements from '../../Menu/swipe/Menu_swipe';

function findSpot(carousel: HTMLLIElement, conveyor: HTMLLIElement): void {
  /*
  const carousel = document.querySelector(`#${pageName}-main .${labelName}-main_carousel-default li[class*="carousel"]`) as HTMLLIElement;
  const conveyor = document.querySelector(`#${pageName}-${blockName} .${labelName}-${blockName}_conveyor-default li[class*="conveyor"]`) as HTMLLIElement;
  */
  let prevView: string = conveyor.classList[0];
  let nextView: string = `${conveyor.classList[0].split('_')[0]}_${carousel.classList[0].split('_')[1]}`;

  conveyor.classList.replace(prevView, nextView);
}

//--|🠋 Functions & Elements 🠋|--\\
function listenEvent(pageName: string, blockName: string, labelName: string): void {
  const carousel = findTags(pageName, blockName, labelName).carousel as HTMLLIElement;
  const conveyor = findTags(pageName, blockName, labelName).conveyor as HTMLLIElement;
  if (!carousel || !conveyor) {
    return;
  }

  const observer = new MutationObserver(() => {
    findSpot(carousel, conveyor);
  });

  observer.observe(carousel, {
    attributes: true,
    attributeFilter: ['class'],
  });
}

//--|🠋 Configures Buttons & Elements 🠋|--\\
interface ChainedElements {
  carousel: HTMLLIElement;
  conveyor: HTMLLIElement;
}
function findTags(pageName: string, blockName: string, labelName: string): ChainedElements {
  const menuType = 'swipe';
  const container = `${pageName}-${blockName}`;

  const carousel = document.querySelector(`#${pageName}-main .${labelName}-main_carousel-default li[class*="carousel"]`) as HTMLLIElement;
  const conveyor = (document.querySelector(`#${container} .${labelName}-${blockName}_conveyor-default li[class*="conveyor"]`) ??
    document.querySelector(`#${pageName}-header .${labelName}-header_conveyor-default li[class*="conveyor"]`) ??
    document.querySelector(`#${pageName}-header .${labelName}-header_conveyor-default li[class*="conveyor"]`)) as HTMLLIElement;

  return {
    carousel,
    conveyor,
  };
}

export default listenEvent;
