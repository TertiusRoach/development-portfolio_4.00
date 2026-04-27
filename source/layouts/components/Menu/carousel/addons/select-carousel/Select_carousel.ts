//--|🠊 Select_carousel.ts 🠈|--\\
import { romanToArabic, arabicToRoman } from '../../../../functions';

interface InfoProps {
  pageName: string;
  blockName: string;
}
interface StyleProps {
  type: '{select}';
  axis: '[x]' | '[y]';
}
interface CasesProps {
  array: Array<string>;
}

export function selectSection(pageName: string, blockName: string, eventName: React.MouseEvent<HTMLElement>): number {
  /*--|🠋

  🠉|--*/
  const getTags = (axis: '[x]' | '[y]'): Record<string, HTMLElement | string> => {
    const xAxis = 'ul';
    if (axis === '[x]') {
      return {
        menu: document.querySelector(
          `#${pageName}-${blockName} menu[class*="carousel"] li[class*="_sel"] ${xAxis}`,
        ) as HTMLElement,
        division: document.querySelector(
          `#${pageName}-main div[class*="carousel"] ${xAxis} .I div[class*="container"]`,
        ) as HTMLElement,
      };
    }

    const yAxis = 'ol';
    return {
      menu: document.querySelector(
        `#${pageName}-${blockName} menu[class*="carousel"] li[class*="_sel"] ${yAxis}`,
      ) as HTMLElement,
      division: document.querySelector(
        `#${pageName}-main div[class*="carousel"] ${yAxis} li div[class*="container"]`,
      ) as HTMLElement,
    };
  };
  const carouselMenu = getTags('[y]').menu as HTMLElement;
  const carouselDivision = getTags('[y]').division as HTMLElement;

  let clickedElement = eventName.currentTarget.parentElement as HTMLElement;
  let identifyElement: string = clickedElement.classList[0];
  let selectPosition: number = 0;
  for (let i = 0; i < carouselMenu.childElementCount; i++) {
    var sectionElement = carouselDivision.childNodes[i] as HTMLElement;
    if (sectionElement.classList[0] === identifyElement) {
      var carContainer = carouselDivision.parentElement as HTMLElement;
      carContainer.className = arabicToRoman(i + 1);
      selectPosition = i;
    }
  }
  return selectPosition as number;
}
