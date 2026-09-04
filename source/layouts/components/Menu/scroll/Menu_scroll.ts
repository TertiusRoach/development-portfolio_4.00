//--|🠊 Menu_scroll.ts 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { arabicToRoman, romanToArabic } from '../../../../scripts';
/*--|🠋

🠉|--*/
export function viewPrev(pageName: string, blockName: string, labelName: string): void {
  const controller = findTags(pageName, blockName, labelName).controller as HTMLMenuElement;
  const emphasisBlocker: string = controller.querySelector('div[class*="prev-view"')?.classList[1] as
    | 'highlight'
    | 'downplay';
  if (emphasisBlocker === 'highlight') {
    const container = findTags(pageName, blockName, labelName).container as HTMLDivElement;
    const convertCurrent = romanToArabic(`${container.parentElement?.classList[0].split('_')[1]}`) as number;

    var prevSlide = container.parentElement?.classList[0] as string;
    var nextSlide = `${container.parentElement?.classList[0].split('_')[0]}_${arabicToRoman(convertCurrent - 1)}` as string;

    container.parentElement?.classList.add(nextSlide);
    container.parentElement?.classList.remove(prevSlide);

    revealButtons(pageName, blockName, labelName);
  }
}
export function viewNext(pageName: string, blockName: string, labelName: string): void {
  const controller = findTags(pageName, blockName, labelName).controller as HTMLMenuElement;
  const emphasisBlocker: string = controller.querySelector('div[class*="next-view"')?.classList[1] as
    | 'highlight'
    | 'downplay';
  if (emphasisBlocker === 'highlight') {
    const container = findTags(pageName, blockName, labelName).container as HTMLDivElement;
    const convertCurrent = romanToArabic(`${container.parentElement?.classList[0].split('_')[1]}`) as number;

    var prevSlide = container.parentElement?.classList[0] as string;
    var nextSlide = `${container.parentElement?.classList[0].split('_')[0]}_${arabicToRoman(convertCurrent + 1)}` as string;

    container.parentElement?.classList.add(nextSlide);
    container.parentElement?.classList.remove(prevSlide);

    revealButtons(pageName, blockName, labelName);
  }
}
export function revealButtons(pageName: string, blockName: string, labelName: string): void {
  const container = findTags(pageName, blockName, labelName).container as HTMLDivElement;
  const controller = findTags(pageName, blockName, labelName).controller as HTMLMenuElement;

  let carouselChildren: number = container.childElementCount;
  let carouselPosition: number = romanToArabic(container.parentElement?.classList[0].split('_')[1] as string);

  var viewPrev = controller.querySelector('li[class*="preview-vertical"] div[class*="prev-view"]') as HTMLDivElement;
  var viewNext = controller.querySelector('li[class*="preview-vertical"] div[class*="next-view"]') as HTMLDivElement;

  switch (carouselPosition) {
    case 1:
      viewNext.classList.add('highlight');
      viewNext.classList.remove('downplay');

      viewPrev.classList.add('downplay');
      viewPrev.classList.remove('highlight');
      break;
    default:
      viewNext.classList.add('highlight');
      viewNext.classList.remove('downplay');

      viewPrev.classList.add('highlight');
      viewPrev.classList.remove('downplay');
      break;
    case carouselChildren:
      viewPrev.classList.add('highlight');
      viewPrev.classList.remove('downplay');

      viewNext.classList.add('downplay');
      viewNext.classList.remove('highlight');
      break;
  }
}

/*
//--|🠊 Messy Code: Rework it for better maintainability. 🠈|--\\
export function markCarousel(
  pageName: string,
  blockName: string,
  labelName: string,
  showCases: number,
  axisStyle: '[x]' | '[y]',
) {
  let prevView: HTMLElement;
  let nextView: HTMLElement;

  let slideMark: number;
  let slideCount: HTMLDivElement;

  switch (axisStyle) {
    case '[x]':
      const horizontalCarousel = document.querySelector(
        `#${pageName}-main div[class="${labelName}-main_carousel-default"] ul[class="hori-X-axis"] li[class*="carousel-horizontal"]`,
      ) as HTMLElement;
      if (horizontalCarousel !== null) {
        const horizontalPreview = document.querySelectorAll(
          `#${pageName}-${blockName} menu[class="${labelName}-${blockName}_scroll-default"] ul[class="hori-X-scroll"] li[class*="preview"] div[class*="view"]`,
        ) as NodeListOf<HTMLElement>;
        const horizontalShowing = document.querySelector(
          `#${pageName}-${blockName} menu[class="${labelName}-${blockName}_scroll-default"] ul[class="hori-X-scroll"] li[class*="showing"]`,
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
      }
      break;
    case '[y]':
      const verticalCarousel = document.querySelector(
        `#${pageName}-main div[class="${labelName}-main_carousel-default"] ol[class="vert-Y-axis"] li[class*="carousel-vertical"]`,
      ) as HTMLElement;
      if (verticalCarousel !== null) {
        const verticalController = document.querySelectorAll(
          `#${pageName}-${blockName} menu[class="${labelName}-${blockName}_scroll-default"] ol[class="vert-Y-scroll"] li`,
        ) as NodeListOf<HTMLElement>;

        prevView = Array.from(verticalController).find((li) => li.classList.contains('prev-view')) as HTMLElement;
        nextView = Array.from(verticalController).find((li) => li.classList.contains('next-view')) as HTMLElement;

        slideMark = romanToArabic(verticalCarousel.classList[0].split('_')[1]) as number;
        slideCount = verticalCarousel.querySelector(`div[class="${labelName}-main_container"]`) as HTMLDivElement;

        if (verticalCarousel.classList[0] === 'carousel-vertical_I') {
          //--|🠊 Hide TOP Button 🠈|--\\
          nextView.classList.add('highlight');
          nextView.classList.remove('downplay');

          prevView.classList.add('downplay');
          prevView.classList.remove('highlight');
        } else if (slideMark === slideCount.childElementCount) {
          //--|🠊 Hide BOT Button 🠈|--\\
          nextView.classList.add('downplay');
          nextView.classList.remove('highlight');

          prevView.classList.add('highlight');
          prevView.classList.remove('downplay');
        } else {
          //--|🠊 Show TOP & BOT Buttons 🠈|--\\
          nextView.classList.add('highlight');
          nextView.classList.remove('downplay');

          prevView.classList.add('highlight');
          prevView.classList.remove('downplay');
        }
      }
      break;
  }
}
export function loadCarousel(
  pageName: string,
  blockName: string,
  labelName: string,
  showCases: number,
  axisStyle: '[x]' | '[y]',
) {
  let prevView: HTMLElement;
  let nextView: HTMLElement;

  let slideMark: number;
  let slideCount: HTMLDivElement;

  let firstChild: string;
  let showChild: string;
  let lastChild: string;
  switch (axisStyle) {
    case '[x]':
      const horizontalCarousel = document.querySelector(
        `#${pageName}-main div[class="${labelName}-main_carousel-default"] ul[class="hori-X-axis"] li[class*="carousel-horizontal"]`,
      ) as HTMLElement | null;
      if (horizontalCarousel !== null) {
        const horizontalPreview = document.querySelectorAll(
          `#${pageName}-${blockName} menu[class="${labelName}-${blockName}_scroll-default"] ul[class="hori-X-scroll"] li[class*="preview"] div[class*="view"]`,
        ) as NodeListOf<HTMLElement>;

        prevView = Array.from(horizontalPreview).find((div) => div.classList.contains('prev-view')) as HTMLElement;
        nextView = Array.from(horizontalPreview).find((div) => div.classList.contains('next-view')) as HTMLElement;

        slideMark = romanToArabic(horizontalCarousel.classList[0].split('_')[1]) as number;
        slideCount = horizontalCarousel.querySelector(`div[class="${labelName}-main_container"]`) as HTMLDivElement;
        if (slideCount.childElementCount === 1) {
          //--|🠊 Do nothing. I might have to rework this code. It's messy. 🠈|--\\
        } else if (horizontalCarousel.classList[0] === 'carousel-horizontal_I') {
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
        const horizontalShowing = document.querySelector(
          `#${pageName}-${blockName} menu[class="${labelName}-${blockName}_scroll-default"] ul[class="hori-X-scroll"] li[class*="showing"]`,
        ) as HTMLElement;

        horizontalShowing.classList.remove(horizontalShowing.classList[0]);
        horizontalShowing.classList.add(`showing-horizontal_${arabicToRoman(slideMark)}`);
      }
      break;
    case '[y]':
      const verticalCarousel = document.querySelector(
        `#${pageName}-main div[class="${labelName}-main_carousel-default"] ol[class="vert-Y-axis"] li[class*="carousel-vertical"]`,
      ) as HTMLElement;
      if (verticalCarousel !== null) {
        const verticalElements = document.querySelector(
          `#${pageName}-main div[class="${labelName}-main_carousel-default"] ol[class="vert-Y-axis"] li[class*="carousel-vertical"] div[class*="container"]`,
        ) as HTMLElement;
        const verticalController = document.querySelectorAll(
          `#${pageName}-${blockName} menu[class="${labelName}-${blockName}_scroll-default"] ol[class="vert-Y-scroll"] li`,
        ) as NodeListOf<HTMLElement>;

        prevView = Array.from(verticalController).find((li) => li.classList.contains('prev-view')) as HTMLElement;
        nextView = Array.from(verticalController).find((li) => li.classList.contains('next-view')) as HTMLElement;

        slideMark = romanToArabic(verticalCarousel.classList[0].split('_')[1]) as number;
        slideCount = verticalCarousel.querySelector(`div[class="${labelName}-main_container"]`) as HTMLDivElement;

        firstChild = 'I';
        showChild = arabicToRoman(showCases);
        lastChild = arabicToRoman(verticalElements.childElementCount);

        verticalCarousel.classList.remove(`carousel-vertical_I`);
        if (`carousel-vertical_${firstChild}` === `carousel-vertical_${showChild}`) {
          //--|🠊 Hide TOP Button 🠈|--\\
          nextView.classList.add('highlight');
          nextView.classList.remove('downplay');

          prevView.classList.add('downplay');
          prevView.classList.remove('highlight');
          verticalCarousel.classList.add(`carousel-vertical_${firstChild}`);
        } else if (`carousel-vertical_${lastChild}` === `carousel-vertical_${showChild}`) {
          //--|🠊 Hide BOT Button 🠈|--\\
          prevView.classList.add('highlight');
          prevView.classList.remove('downplay');

          nextView.classList.add('downplay');
          nextView.classList.remove('highlight');

          verticalCarousel.classList.add(`carousel-vertical_${lastChild}`);
          console.log(slideMark, slideCount, verticalCarousel);
        } else {
          //--|🠊 Show TOP and BOT Button 🠈|--\\
          nextView.classList.add('highlight');
          nextView.classList.remove('downplay');

          prevView.classList.add('highlight');
          prevView.classList.remove('downplay');
          verticalCarousel.classList.add(`carousel-vertical_${showChild}`);
        }
      }
  }
}
export function scrollCarousel(
  pageName: string,
  labelName: string,
  axisStyle: '[x]' | '[y]',
  buttonAction: 'view-prev' | 'view-next',
): number {

  let scrollCarousel;
  switch (axisStyle) {
    case '[x]':
      const horizontalCarousel = document.querySelector(
        `#${pageName}-main div[class="${labelName}-main_carousel-default"] ul[class="hori-X-axis"] li[class*="carousel-horizontal"]`,
      ) as HTMLElement;
      if (horizontalCarousel !== null) {
        scrollCarousel = scrollWindow(labelName, horizontalCarousel as HTMLElement, buttonAction);
      }
      break;
    case '[y]':
      const verticalCarousel = document.querySelector(
        `#${pageName}-main div[class="${labelName}-main_carousel-default"] ol[class="vert-Y-axis"] li[class*="carousel-vertical"]`,
      ) as HTMLElement;
      if (verticalCarousel !== null) {
        scrollCarousel = scrollWindow(labelName, verticalCarousel as HTMLElement, buttonAction);
      }
      break;
  }
  return scrollCarousel as number;
}

const scrollWindow = (labelName: string, mainCarousel: HTMLElement, buttonAction: 'view-prev' | 'view-next') => {
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
};

  console.log(pageName, blockName, labelName);
  console.log(
    'Controller:',
    document.querySelector(`#${pageName}-${blockName} menu[class="${labelName}-${blockName}_scroll-default"]`),
  );
  console.log(
    'Carousel:',
    document.querySelector(`#${pageName}-${blockName} div[class="${labelName}-${blockName}_container"]`),
  );
*/
interface ChainedElements {
  container: HTMLDivElement | null;
  controller: HTMLMenuElement | null;
}
const findTags = (pageName: string, blockName: string, labelName: string): ChainedElements => {
  return {
    container: document.querySelector(`#${pageName}-${blockName} div[class="${labelName}-${blockName}_container"]`),
    controller: document.querySelector(`#${pageName}-${blockName} menu[class="${labelName}-${blockName}_scroll-default"]`),
  };
};
