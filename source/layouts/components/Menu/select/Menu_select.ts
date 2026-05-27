//--|🠊 Menu_select.ts 🠈|--\\

//--|🠋 Functions 🠋|--\\
import { romanToArabic, arabicToRoman } from '../../functions';

export function markCarousel(pageName: string, blockName: string, labelName: string, axisStyle: '[x]' | '[y]') {
  /*--|🠋

  🠉|--*/
  switch (axisStyle) {
    case '[x]':
      break;
    case '[y]':
      const verticalCarousel = document.querySelector(
        `#${pageName}-main div[class="${labelName}-main_carousel-default"] ol[class="vert-Y-axis"] li[class*="carousel-vertical"]`,
      ) as HTMLElement;
      const verticalController = document.querySelector(
        `#${pageName}-${blockName} menu[class*="${labelName}-${blockName}_select-default"] ol[class="vert-Y-select"] li[class*="preview"]`,
      ) as HTMLElement;

      let slideMark = romanToArabic(verticalCarousel.classList[0].split('_')[1]) as number;
      let slideShow = verticalController.childNodes[slideMark - 1] as HTMLElement;
      let slideCount = Array.from(verticalController.childNodes) as HTMLElement[];

      if (!slideCount.some((node) => node.classList.contains('downplay'))) {
        setTimeout(() => {
          slideShow.classList.add('downplay');
          slideShow.classList.remove('highlight');
        }, 125);
      } else {
        let slideHide = slideCount.find((node) => node.classList.contains('downplay')) as HTMLElement;

        slideHide.classList.add('highlight');
        slideHide.classList.remove('downplay');

        slideShow.classList.add('downplay');
        slideShow.classList.remove('highlight');
      }
      break;
  }
}

export function selectCarousel(pageName: string, labelName: string, chainName: string, axisStyle: '[x]' | '[y]'): number {
  let prevView: string;
  let nextView: string;
  let selectCarousel: string = '';
  switch (axisStyle) {
    case '[x]':
      break;
    case '[y]':
      const verticalCarousel = document.querySelector(
        `#${pageName}-main div[class="${labelName}-main_carousel-default"] ol[class="vert-Y-axis"] li[class*="carousel-vertical"]`,
      ) as HTMLElement;
      const verticalPreview = verticalCarousel.querySelector(`div[class="${labelName}-main_container"]`) as HTMLElement;

      for (let i = 0; i < verticalPreview.childElementCount; i++) {
        let element = verticalPreview.childNodes[i] as HTMLElement;
        if (element.classList[0].includes(chainName)) {
          selectCarousel = arabicToRoman(i + 1) as string;
          break;
        }
      }
      prevView = verticalCarousel.classList[0] as string;
      nextView = `carousel-vertical_${selectCarousel}` as string;

      if (prevView !== nextView) {
        verticalCarousel.classList.add(nextView);
        verticalCarousel.classList.remove(prevView);
      }
      break;
  }

  /*--|🠋

  let swipeCarousel;
  switch (axisStyle) {
    case '[x]':
      const horizontalCarousel = document.querySelector(
        `#${pageName}-main div[class="${labelName}-main_carousel-default"] ul[class="hori-X-axis"] li[class*="carousel-horizontal"]`,
      ) as HTMLElement;
      swipeCarousel = swipeWindow(labelName, horizontalCarousel as HTMLElement, buttonAction);
      break;
    case '[y]':
      const verticalCarousel = document.querySelector(
        `#${pageName}-main div[class="${labelName}-main_carousel-default"] ol[class="vert-Y-axis"] li[class*="carousel-vertical"]`,
      ) as HTMLElement;
      swipeCarousel = swipeWindow(labelName, verticalCarousel as HTMLElement, buttonAction);
      break;
  }
  return swipeCarousel as number;

  🠉|--*/

  return 0;
}

const swipeWindow = (labelName: string, mainCarousel: HTMLElement, buttonAction: 'view-prev' | 'view-next') => {
  /*--|🠋

  const mainIdentifier: string = mainCarousel.classList[0];
  const mainPosition: string = mainIdentifier.split('_')[1];

  let slideMark: number = romanToArabic(mainCarousel.classList[0].split('_')[1]);
  let slideCount = mainCarousel.querySelector(`div[class="${labelName}-main_container`) as HTMLDivElement;

  if (buttonAction === 'view-prev' && mainPosition !== 'I') {
    let mainDestination: number = romanToArabic(mainPosition) - 1;
    let mainDesignation = `${mainIdentifier.split('_')[0]}_${arabicToRoman(mainDestination)}`;
    mainCarousel.classList.add(mainDesignation);
    mainCarousel.classList.remove(mainIdentifier);
    return mainDestination as number;
  } else if (buttonAction === 'view-next' && slideCount.childElementCount !== slideMark) {
    let mainDestination: number = romanToArabic(mainPosition) + 1;
    let mainDesignation = `${mainIdentifier.split('_')[0]}_${arabicToRoman(mainDestination)}`;
    mainCarousel.classList.add(mainDesignation);
    mainCarousel.classList.remove(mainIdentifier);
    return mainDestination as number;
  }

  🠉|--*/
};
