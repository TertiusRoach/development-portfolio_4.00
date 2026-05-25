//--|🠊 Menu_swipe.ts 🠈|--\\

//--|🠋 Functions 🠋|--\\
import { romanToArabic, arabicToRoman } from '../../functions';

export function markCarousel(pageName: string, blockName: string, labelName: string, axisStyle: '[x]' | '[y]') {
  /*--|🠋

  let prevView: HTMLElement;
  let nextView: HTMLElement;

  let slideMark: number;
  let slideCount: HTMLDivElement;

  switch (axisStyle) {
    case '[x]':
      const horizontalCarousel = document.querySelector(
        `#${pageName}-main div[class="${labelName}-main_carousel-default"] ul[class="hori-X-axis"] li[class*="carousel-horizontal"]`,
      ) as HTMLElement;
      const horizontalPreview = document.querySelectorAll(
        `#${pageName}-${blockName} menu[class="${labelName}-${blockName}_swipe-default"] ul[class="hori-X-swipe"] li[class*="preview"] div[class*="view"]`,
      ) as NodeListOf<HTMLElement>;
      const horizontalShowing = document.querySelector(
        `#${pageName}-${blockName} menu[class="${labelName}-${blockName}_swipe-default"] ul[class="hori-X-swipe"] li[class*="showing"]`,
      ) as HTMLElement;

      prevView = Array.from(horizontalPreview).find((div) => div.classList.contains('prev-view')) as HTMLElement;
      nextView = Array.from(horizontalPreview).find((div) => div.classList.contains('next-view')) as HTMLElement;

      slideMark = romanToArabic(horizontalCarousel.classList[0].split('_')[1]) as number;
      slideCount = horizontalCarousel.querySelector(`div[class="${labelName}-main_container"]`) as HTMLDivElement;

      if (horizontalCarousel.classList[0] === 'carousel-horizontal_I') {
        nextView.classList.add('highlight');
        nextView.classList.remove('downplay');

        prevView.classList.add('downplay');
        prevView.classList.remove('highlight');
      } else if (slideMark === slideCount.childElementCount) {
        nextView.classList.add('downplay');
        nextView.classList.remove('highlight');

        prevView.classList.add('highlight');
        prevView.classList.remove('downplay');
      } else {
        nextView.classList.add('highlight');
        nextView.classList.remove('downplay');

        prevView.classList.add('highlight');
        prevView.classList.remove('downplay');
      }

      horizontalShowing.classList.remove(horizontalShowing.classList[0]);
      horizontalShowing.classList.add(`showing-horizontal_${arabicToRoman(slideMark)}`);
      break;
    case '[y]':
      const verticalCarousel = document.querySelector(
        `#${pageName}-main div[class="${labelName}-main_carousel-default"] ol[class="vert-Y-axis"] li[class*="carousel-vertical"]`,
      ) as HTMLElement;
      const verticalController = document.querySelectorAll(
        `#${pageName}-${blockName} menu[class="${labelName}-${blockName}_swipe-default"] ol[class="vert-Y-swipe"] li`,
      ) as NodeListOf<HTMLElement>;

      prevView = Array.from(verticalController).find((li) => li.classList.contains('prev-view')) as HTMLElement;
      nextView = Array.from(verticalController).find((li) => li.classList.contains('next-view')) as HTMLElement;

      slideMark = romanToArabic(verticalCarousel.classList[0].split('_')[1]) as number;
      slideCount = verticalCarousel.querySelector(`div[class="${labelName}-main_container"]`) as HTMLDivElement;

      if (verticalCarousel.classList[0] === 'carousel-vertical_I') {
        nextView.classList.add('highlight');
        nextView.classList.remove('downplay');

        prevView.classList.add('downplay');
        prevView.classList.remove('highlight');
      } else if (slideMark === slideCount.childElementCount) {
        nextView.classList.add('downplay');
        nextView.classList.remove('highlight');

        prevView.classList.add('highlight');
        prevView.classList.remove('downplay');
      } else {
        nextView.classList.add('highlight');
        nextView.classList.remove('downplay');

        prevView.classList.add('highlight');
        prevView.classList.remove('downplay');
      }
      break;
  }

  🠉|--*/
}

export function selectCarousel(pageName: string, labelName: string, chainName: string, axisStyle: '[x]' | '[y]'): number {
  let selectCarousel;
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
        console.log(i, chainName);
        console.log(element.classList);
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
