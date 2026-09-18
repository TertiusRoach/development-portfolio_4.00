//--|🠊 Division_conveyor.ts 🠈|--\\

import reloadElements from '../../Menu/swipe/Menu_swipe';

function findSpot(pageName: string, blockName: string, labelName: string): void {
  const carousel = document.querySelector(`#${pageName}-main .${labelName}-main_carousel-default li[class*="carousel"]`) as HTMLLIElement;
  const conveyor = document.querySelector(`#${pageName}-${blockName} .${labelName}-${blockName}_conveyor-default li[class*="conveyor"]`) as HTMLLIElement;

  console.log('CHANGED!!!!!!');
  let prevView: string = conveyor.classList[0];
  let nextView: string = `${conveyor.classList[0].split('_')[0]}_${carousel.classList[0].split('_')[1]}`;

  conveyor.classList.replace(prevView, nextView);
}

//--|🠋 Functions & Elements 🠋|--\\
function listenEvent(pageName: string, blockName: string, labelName: string): void {
  const carousel = document.querySelector<HTMLLIElement>(`#${pageName}-main .${labelName}-main_carousel-default li[class*="carousel"]`);
  const conveyor = document.querySelector<HTMLLIElement>(`#${pageName}-${blockName} .${labelName}-${blockName}_conveyor-default li[class*="conveyor"]`);

  if (!carousel || !conveyor) {
    return;
  }

  let position = carousel.classList[0].split('_')[1];

  const observer = new MutationObserver(() => {
    position = carousel.classList[0].split('_')[1];

    findSpot(pageName, blockName, labelName);
  });

  observer.observe(carousel, {
    attributes: true,
    attributeFilter: ['class'],
  });
}
export default listenEvent;
