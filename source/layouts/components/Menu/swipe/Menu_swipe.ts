//--|🠊 Menu_swipe.ts 🠈|--\\

//--|🠋 Functions 🠋|--\\
import { romanToArabic, arabicToRoman } from '../../functions';

export function markCarousel(pageName: string, blockName: string, labelName: string, axisStyle: '[x]' | '[y]') {
  /*--|🠋

  🠉|--*/
  let prevView: HTMLElement;
  let nextView: HTMLElement;

  let slideMark: number;
  let slideCount: HTMLDivElement;

  switch (axisStyle) {
    case '[x]':
      const horizontalCarousel = document.querySelector(
        `#${pageName}-main div[class="${labelName}-main_carousel-default"] ul[class="hori-X-axis"] li[class*="carousel-horizontal"]`,
      ) as HTMLElement;
      const horizontalController = document.querySelectorAll(
        `#${pageName}-${blockName} menu[class="${labelName}-${blockName}_swipe-default"] ul[class="hori-X-swipe"] li`,
      ) as NodeListOf<HTMLElement>;

      prevView = Array.from(horizontalController).find((li) => li.classList.contains('prev-view')) as HTMLElement;
      nextView = Array.from(horizontalController).find((li) => li.classList.contains('next-view')) as HTMLElement;

      slideMark = romanToArabic(horizontalCarousel.classList[0].split('_')[1]) as number;
      slideCount = horizontalCarousel.querySelector(`div[class="${labelName}-main_container`) as HTMLDivElement;
      if (horizontalCarousel.classList[0] === 'carousel-horizontal_I') {
        nextView.classList.add('highlight');
        nextView.classList.remove('downplay');

        prevView.classList.add('downplay');
        prevView.classList.remove('highlight');
      } else {
        prevView.classList.add('highlight');
        prevView.classList.remove('downplay');
        if (slideMark === slideCount.childElementCount) {
          nextView.classList.add('downplay');
          nextView.classList.remove('highlight');
        }
      }
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
      slideCount = verticalCarousel.querySelector(`div[class="${labelName}-main_container`) as HTMLDivElement;

      if (verticalCarousel.classList[0] === 'carousel-vertical_I') {
        nextView.classList.add('highlight');
        nextView.classList.remove('downplay');

        prevView.classList.add('downplay');
        prevView.classList.remove('highlight');
      } else {
        prevView.classList.add('highlight');
        prevView.classList.remove('downplay');
        if (slideMark === slideCount.childElementCount) {
          nextView.classList.add('downplay');
          nextView.classList.remove('highlight');
        }
      }
      break;
  }
}

export function swipeCarousel(
  pageName: string,
  blockName: string,
  labelName: string,
  axisStyle: '[x]' | '[y]',
  buttonAction: 'view-prev' | 'view-next',
): number {
  /*--|🠋

  🠉|--*/
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
}

const swipeWindow = (labelName: string, mainCarousel: HTMLElement, buttonAction: 'view-prev' | 'view-next') => {
  const mainIdentifier: string = mainCarousel.classList[0];
  const mainPosition: string = mainIdentifier.split('_')[1];

  let slideMark: number = romanToArabic(mainCarousel.classList[0].split('_')[1]);
  let slideCount = mainCarousel.querySelector(`div[class="${labelName}-main_container`) as HTMLDivElement;

  if (buttonAction === 'view-next' && slideCount.childElementCount !== slideMark) {
    let mainDestination: number = romanToArabic(mainPosition) + 1;
    let mainDesignation = `${mainIdentifier.split('_')[0]}_${arabicToRoman(mainDestination)}`;
    mainCarousel.classList.add(mainDesignation);
    mainCarousel.classList.remove(mainIdentifier);
    return mainDestination as number;
  } else if (buttonAction === 'view-prev' && mainPosition !== 'I') {
    let mainDestination: number = romanToArabic(mainPosition) - 1;
    let mainDesignation = `${mainIdentifier.split('_')[0]}_${arabicToRoman(mainDestination)}`;
    mainCarousel.classList.add(mainDesignation);
    mainCarousel.classList.remove(mainIdentifier);
    return mainDestination as number;
  }
};
/*
import { abbrAxis, abbrType, abbrView, abbrShade, abbrColor } from '../../../functions';

function markMenu(pageName: string, blockName: string) {

  //--|🠋|==============================================|🠋|--\\
  //--|🠊 See if the amount of children in <CarouselDivision>
  //--|🠊 Matches the amount of <button> tags in <CarouselMenu>
  //--|🠉|==============================================|🠉|--\\
  const selectYMenu = retrieveTags(pageName, blockName, '[y]', '{select}')?.menu as HTMLElement;
  const selectYCarousel = retrieveTags(pageName, blockName, '[y]', '{select}')?.division as HTMLElement;
  const selectYSection = selectYCarousel.childNodes[0].childNodes as NodeListOf<HTMLElement>;
  if (selectYCarousel.childElementCount === selectYMenu.childElementCount) {
    for (let i = 0; i < selectYCarousel.childElementCount; i++) {
      let carMenu = selectYMenu.childNodes[i] as HTMLElement; //--|🠈 Match carousel identifiers to <li> items inside <menu> 🠈|--\\
      let carSection = selectYCarousel.childNodes[i] as HTMLElement; //--|🠈 Emphasize with ".visible" or ".hidden" 🠈|--\\

      var carContainer = carSection.parentElement?.parentElement as HTMLElement; //--|🠈 Retrieve the Roman String in the component container of the Carousel 🠈|--\\
      var carRoman = carContainer.classList[0] as string;
      if (romanToArabic(carRoman) === i + 1) {
        carSection.classList.add('visible');
        carSection.classList.remove('hidden');
        carMenu.className = `${carSection.classList[0]} highlight`;
      } else {
        carSection.classList.add('hidden');
        carSection.classList.remove('visible');
        carMenu.className = `${carSection.classList[0]} downplay`;
      }
    }
  }
}
export default markMenu;

export function loadClass(style: StyleProps): String {
  //--|🠊 Class Build for <DefaultButton> 🠈|--\\
  let axis = abbrAxis(style.axis);
  let type = abbrType(style.type);
  let view = abbrView(style.view);
  let shade = abbrShade(style.shade);
  let color = abbrColor(style.color);

  return `${axis}_${view}_${shade}_${color}_${type}`;
}
export function loadStyle(type: '{select}' | '{scroll}', view: '-top-' | '-rig-' | '-bot-' | '-lef-'): string {
  return `${abbrType(type)}_${abbrView(view)}`;
}

interface InfoProps {
  pageName: string;
  blockName: string;
}
interface StyleProps {
  axis: '[x]' | '[y]';
  type: '{select}' | '{scroll}';
  view: '-top-' | '-rig-' | '-bot-' | '-lef-';
  shade: '~dark~' | '~medium~' | '~light~';
  color: '(red)' | '(green)' | '(blue)' | '(mono)';
}
interface CasesProps {
  array: Array<string>;
}

export function labelList(style: StyleProps): string {
  return `${abbrAxis(style.axis)}_${abbrView(style.view)}`;
}
const retrieveTags = (
  pageName: string,
  blockName: string,
  axis: '[x]' | '[y]',
  type: '{select}' | '{scroll}' | string,
): Record<string, HTMLElement> | undefined => {
  if (axis === '[x]') {
    let AxisX = 'ul';

    switch (type) {
      case '{scroll}':
        let TypeX = 'scr';
        return {
          menu: document.querySelector(
            `#${pageName}-header menu[class*="carousel"] li[class*="_${TypeX}"] ${AxisX} li[class*="preview"]`,
          ) as HTMLElement,
          division: document.querySelector(
            `#${pageName}-main div[class*="carousel"] ${AxisX} .I div[class*="container"]`,
          ) as HTMLElement,
        };
      case '{select}':
        let TypeXSel = 'sel';
        return {
          menu: document.querySelector(
            `#${pageName}-header menu[class*="carousel"] li[class*="_${TypeXSel}"] ${AxisX}`,
          ) as HTMLElement,
          division: document.querySelector(
            `#${pageName}-main div[class*="carousel"] ${AxisX} .I div[class*="container"]`,
          ) as HTMLElement,
        };
    }
  } else if (axis === '[y]') {
    let AxisY = 'ol';
    switch (type) {
      case '{select}':
        let TypeY = 'sel';
        return {
          menu: document.querySelector(
            `#${pageName}-leftbar menu[class*="carousel"] li[class*="_${TypeY}"] ${AxisY}`,
          ) as HTMLElement,
          division: document.querySelector(
            `#${pageName}-main div[class*="carousel"] ${AxisY} li div[class*="container"]`,
          ) as HTMLElement,
        };
      case '{scroll}':
        let TypeYScr = 'scr';
        return {
          menu: document.querySelector(
            `#${pageName}-leftbar menu[class*="carousel"] li[class*="_${TypeYScr}"] ${AxisY}`,
          ) as HTMLElement,
          division: document.querySelector(
            `#${pageName}-main div[class*="carousel"] ${AxisY} li div[class*="container"]`,
          ) as HTMLElement,
        };
    }
  }
};
*/
