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

export function selectCarousel(pageName: string, blockName: string, eventName: React.MouseEvent<HTMLElement>): number {
  /*--|🠋

  🠉|--*/
  const getTags = (axis: '[x]' | '[y]'): Record<string, HTMLElement> => {
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
  const disableTags = (pageName: string, blockName: string): void => {
    let carDisable = document.querySelector(`#${pageName}-main div[class*="carousel"] .visible`) as HTMLElement;
    let menDisable = document.querySelector(`#${pageName}-${blockName} menu[class*="carousel"] .highlight`) as HTMLElement;

    menDisable.classList.add('downplay');
    menDisable.classList.remove('highlight');

    carDisable.classList.add('hidden');
    carDisable.classList.remove('visible');
  };

  const carouselMenu = getTags('[y]').menu as HTMLElement;
  const carouselDivision = getTags('[y]').division as HTMLElement;
  const enableTags = (eventName: React.MouseEvent<HTMLElement>, linkTags: Array<HTMLElement>): void => {
    let clickedElement = eventName.currentTarget.parentElement as HTMLElement;
    //--|🠊 linkTags[0] = carouselMenu 🠈|--\\
    //--|🠊 linkTags[1] = carouselDivision 🠈|--\\
    const carContainer = linkTags[1].parentElement as HTMLElement;

    let selectPosition: number = 0;
    for (let i = 0; i < linkTags[0].childElementCount; i++) {
      var identifyElement: string = clickedElement.classList[0];
      var sectionElement = linkTags[1].childNodes[i] as HTMLElement;

      if (sectionElement.classList[0] === identifyElement) {
        carContainer.className = arabicToRoman(i + 1);
        selectPosition = i;

        //--|🠋 Synchronize with Carousel 🠋|--\\
        console.log(clickedElement);

        clickedElement.classList.add('highlight');
        clickedElement.classList.remove('downplay');

        sectionElement.classList.add('visible');
        sectionElement.classList.remove('hidden');
      }
    }
  };
  disableTags(pageName, blockName);
  enableTags(eventName, [carouselMenu, carouselDivision] as Array<HTMLElement>);

  return 0 as number;
}
