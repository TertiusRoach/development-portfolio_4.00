//--|🠊 Division_conveyor.ts 🠈|--\\

export function findSpot(pageName: string, blockName: string, labelName: string) {
  setTimeout(() => {
    const carousel = document.querySelector(`#${pageName}-main .${labelName}-main_carousel-default li[class*="carousel"]`) as HTMLLIElement;
    const conveyor = document.querySelector(`#${pageName}-${blockName} .${labelName}-${blockName}_conveyor-default li[class*="conveyor"]`) as HTMLLIElement;
    return carousel.classList[0].split('_')[1] as string;
  }, 125);
}
