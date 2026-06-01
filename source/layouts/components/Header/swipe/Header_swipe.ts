//--|🠊 Header_swipe.ts 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../../scripts';
import { romanToArabic, arabicToRoman } from '../../functions';

export function markCarousel(
  pageName: string,
  blockName: string,
  labelName: string,
  chainName: string,
  axisStyle: '[x]' | '[y]',
) {
  const loadingElement = (selector: string, callback: (element: HTMLElement) => void): (() => void) => {
    const existing = document.querySelector<HTMLElement>(selector);

    if (existing) {
      callback(existing);
      return () => {};
    }

    const observer = new MutationObserver(() => {
      const element = document.querySelector<HTMLElement>(selector);

      if (element) {
        callback(element);
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  };

  switch (axisStyle) {
    case '[x]':
      break;
    case '[y]':
      const chainBlock: string = stripBrackets(chainName, '<>');
      const verticalController = document.querySelector(
        `#${pageName}-${blockName} header[class*="header_swipe"] ol[class*="vert-Y-swipe"] li[class*="showing-vertical"]`,
      ) as HTMLElement;

      let locateYReference: string = `#${pageName}-${chainBlock} menu[class*="${chainBlock}"] ol[class*="vert-Y"] li[class*="showing-vertical"]`;
      loadingElement(locateYReference, (verticalReference) => {
        let nextView: string = verticalReference.classList[0];
        let prevView: string = verticalController.classList[0];

        verticalController.classList.replace(prevView, nextView);

        console.log('Swipe to', verticalReference);
      });
      break;
  }
}

export function loadCarousel(
  pageName: string,
  blockName: string,
  labelName: string,
  chainName: string,
  axisStyle: '[x]' | '[y]',
) {
  const loadingElement = (selector: string, callback: (element: HTMLElement) => void): (() => void) => {
    const existing = document.querySelector<HTMLElement>(selector);

    if (existing) {
      callback(existing);
      return () => {};
    }

    const observer = new MutationObserver(() => {
      const element = document.querySelector<HTMLElement>(selector);

      if (element) {
        callback(element);
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  };
  /*--|🠋

  🠉|--*/

  switch (axisStyle) {
    case '[x]':
      break;
    case '[y]':
      const chainBlock: string = stripBrackets(chainName, '<>');
      const verticalController = document.querySelector(
        `#${pageName}-${blockName} header[class*="header_swipe"] ol[class*="vert-Y-swipe"] li[class*="showing-vertical"]`,
      ) as HTMLElement;

      let locateYReference: string = `#${pageName}-${chainBlock} menu[class*="${chainBlock}"] ol[class*="vert-Y"] li[class*="showing-vertical"]`;
      loadingElement(locateYReference, (verticalReference) => {
        setTimeout(() => {
          let nextView: string = verticalReference.classList[0];
          let prevView: string = verticalController.classList[0];

          verticalController.classList.replace(prevView, nextView);

          console.log(verticalReference);
          // Can you add an event listener on verticalReference.
          // When there's a class change then run markCarousel again.
        }, 250);
      });
      break;
  }
}

export function swipeCarousel(
  pageName: string,
  labelName: string,
  axisStyle: '[x]' | '[y]',
  buttonAction: 'view-prev' | 'view-next',
): number {
  /*--|🠋

  🠉|--*/
  /*
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
  */
  return 0;
}

const swipeWindow = (labelName: string, mainCarousel: HTMLElement, buttonAction: 'view-prev' | 'view-next') => {
  /*
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
  */
};
