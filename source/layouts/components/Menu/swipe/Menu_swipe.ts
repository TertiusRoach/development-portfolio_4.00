//--|🠊 Menu_swipe.ts 🠈|--\\

//--|🠋 Functions 🠋|--\\
import { romanToArabic, arabicToRoman } from '../../functions';

function swipeCarousel(
  pageName: string,
  blockName: string,
  labelName: string,
  axisStyle: '[x]' | '[y]',
  buttonAction: 'view-prev' | 'view-next',
): number {
  /*--|🠋

  🠉|--*/
  const swipeFunc = (mainContainer: HTMLElement) => {
    const mainIdentifier: string = mainContainer.classList[0];
    const mainPosition: string = mainIdentifier.split('_')[1];
    if (buttonAction === 'view-next') {
      let mainDesignation = `${mainIdentifier.split('_')[0]}_${arabicToRoman(romanToArabic(mainPosition) + 1)}`;
      mainContainer.classList.add(mainDesignation);
      mainContainer.classList.remove(mainIdentifier);
    } else if (buttonAction === 'view-prev' && mainPosition !== 'I') {
      let mainDesignation = `${mainIdentifier.split('_')[0]}_${arabicToRoman(romanToArabic(mainPosition) - 1)}`;
      mainContainer.classList.add(mainDesignation);
      mainContainer.classList.remove(mainIdentifier);
    }
  };

  switch (axisStyle) {
    case '[x]':
      const mainHorizontal = document.querySelector(
        `#${pageName}-main div[class="${labelName}-main_carousel-default"] ul[class="hori-X-axis"] li[class*="carousel-horizontal"]`,
      ) as HTMLElement;
      swipeFunc(mainHorizontal as HTMLElement);
      break;
    case '[y]':
      const mainVertical = document.querySelector(
        `#${pageName}-main div[class="${labelName}-main_carousel-default"] ol[class="vert-Y-axis"] li[class*="carousel-vertical"]`,
      ) as HTMLElement;
      console.log(mainVertical, pageName, labelName, blockName);
      swipeFunc(mainVertical as HTMLElement);
      break;
  }
  return 0;
}

export default swipeCarousel;
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
