//--|🠊 Select_carousel.ts 🠈|--\\

//--|🠋 Functions 🠋|--\\
import { romanToArabic, arabicToRoman } from '../../../../../components';

function selectCarousel(pageName: string, blockName: string, eventName: React.MouseEvent<HTMLElement>): Array<HTMLElement> {
  /*--|🠋

  🠉|--*/
  const carouselMenu = retrieveTags(pageName, blockName, '[y]').menu as HTMLElement;
  const carouselDivision = retrieveTags(pageName, blockName, '[y]').division as HTMLElement;
  //--|🠊 Must be done in this order for function to work 🠈|--\\
  //--|🠋 Step 1 🠋|--\\
  toggleTags([carouselMenu, carouselDivision] as Array<HTMLElement>, pageName, blockName, eventName); //--|🠈 Disable elements for a default value 🠈|--\\
  //--|🠋 Step 2 🠋|--\\
  revealPreview(pageName, 'header', [eventName, [carouselMenu, carouselDivision]]); //--|🠈 Enable elements based on the default value 🠈|--\\

  return [carouselMenu, carouselDivision] as Array<HTMLElement>;
}

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

export default selectCarousel;

//--|===|--\\
const revealPreview = (
  pageName: string,
  blockName: string,
  eventName: Array<React.MouseEvent<HTMLElement> | Array<HTMLElement>>,
): void => {
  /*--|🠋

  🠉|--*/
  const menuFind: string = `#${pageName}-${blockName} section.${blockName}-foreground ${blockName}`;
  const menuElement = document.querySelector(menuFind) as HTMLElement;
  const carouselElement = enableTags(
    eventName[0] as React.MouseEvent<HTMLElement>,
    eventName[1] as Array<HTMLElement>,
  ) as HTMLElement;

  let prevSelect: string = menuElement.classList[1];
  let currSelect: string = carouselElement.classList[0];

  menuElement.classList.add(currSelect);
  menuElement.classList.remove(prevSelect);
};
const retrieveTags = (pageName: string, blockName: string, axis: '[x]' | '[y]'): Record<string, HTMLElement> => {
  switch (axis) {
    case '[x]':
      const xAxis = 'ul';
      return {
        menu: document.querySelector(
          `#${pageName}-${blockName} menu[class*="carousel"] li[class*="_sel"] ${xAxis}`,
        ) as HTMLElement,
        division: document.querySelector(
          `#${pageName}-main div[class*="carousel"] ${xAxis} .I div[class*="container"]`,
        ) as HTMLElement,
      };
    case '[y]':
      const yAxis = 'ol';
      return {
        menu: document.querySelector(
          `#${pageName}-${blockName} menu[class*="carousel"] li[class*="_sel"] ${yAxis}`,
        ) as HTMLElement,
        division: document.querySelector(
          `#${pageName}-main div[class*="carousel"] ${yAxis} li div[class*="container"]`,
        ) as HTMLElement,
      };
  }
};
const disableTags = (pageName: string, blockName: string): void => {
  let carouselElement = document.querySelector(`#${pageName}-main div[class*="carousel"] .visible`) as HTMLElement;
  let menuElement = document.querySelector(`#${pageName}-${blockName} menu[class*="carousel"] .highlight`) as HTMLElement;

  menuElement.classList.add('downplay');
  menuElement.classList.remove('highlight');

  carouselElement.classList.add('hidden');
  carouselElement.classList.remove('visible');
};
const enableTags = (eventName: React.MouseEvent<HTMLElement>, tagsName: Array<HTMLElement>): HTMLElement | undefined => {
  let clickedElement = eventName.currentTarget.parentElement as HTMLElement;
  //--|🠊 linkTags[0] = carouselMenu 🠈|--\\
  //--|🠊 linkTags[1] = carouselDivision 🠈|--\\
  const carContainer = tagsName[1].parentElement as HTMLElement;

  let selectPosition: number = 0;
  for (let i = 0; i < tagsName[0].childElementCount; i++) {
    var identifyElement: string = clickedElement.classList[0];
    var sectionElement = tagsName[1].childNodes[i] as HTMLElement;

    if (sectionElement.classList[0] === identifyElement) {
      carContainer.className = arabicToRoman(i + 1);
      selectPosition = i;

      //--|🠋 Synchronize with Carousel 🠋|--\\

      clickedElement.classList.add('highlight');
      clickedElement.classList.remove('downplay');

      sectionElement.classList.add('visible');
      sectionElement.classList.remove('hidden');

      return sectionElement.parentElement?.parentElement as HTMLElement;
    }
  }
};
const toggleTags = (
  tagsName: Array<HTMLElement>,
  pageName: string,
  blockName: string,
  eventName: React.MouseEvent<HTMLElement>,
) => {
  //--|🠊 Must be done in this order for function to work 🠈|--\\
  //--|🠋 Step 1 🠋|--\\
  disableTags(pageName, blockName); //--|🠈 Disable elements for a default value 🠈|--\\
  //--|🠋 Step 2 🠋|--\\
  enableTags(eventName, tagsName); //--|🠈 Enable elements based on the default value 🠈|--\\
};
//--|===|--\\
