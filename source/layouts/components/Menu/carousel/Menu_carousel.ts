//--|🠊 Menu_carousel.ts 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { romanToArabic } from '../../functions';
import { abbrAxis, abbrType, abbrView, abbrShade, abbrColor } from '../../functions';

export function markMenu(pageName: string, blockName: string) {
  /*--|🠋

  🠉|--*/
  const getTags = (axis: '[x]' | '[y]'): Record<string, HTMLElement | string> => {
    const xAxisUl = 'ul';
    if (axis === '[x]') {
      return {
        menu: document.querySelector(
          `#${pageName}-${blockName} menu[class*="carousel"] li[class*="_sel"] ${xAxisUl}`,
        ) as HTMLElement,
        division: document.querySelector(
          `#${pageName}-main div[class*="carousel"] ${xAxisUl} .I div[class*="container"]`,
        ) as HTMLElement,
      };
    }

    const yAxisOl = 'ol';
    return {
      menu: document.querySelector(
        `#${pageName}-${blockName} menu[class*="carousel"] li[class*="_sel"] ${yAxisOl}`,
      ) as HTMLElement,
      division: document.querySelector(
        `#${pageName}-main div[class*="carousel"] ${yAxisOl} li div[class*="container"]`,
      ) as HTMLElement,
    };
  };

  const carouselMenu = getTags('[y]').menu as HTMLElement;
  const carouselDivision = getTags('[y]').division as HTMLElement;
  const carouselParent = carouselDivision.parentElement as HTMLLIElement;
  const carouselPosition: string = carouselParent.className;

  /*
  //--|🠋|=================================================|🠋|--\\
  //--|🠊 See if the amount of children in <CarouselDivision>
  //--|🠊 Matches the amount of <button> tags in <CarouselMenu>
  //--|🠉|=================================================|🠉|--\\
  */
  if (carouselDivision.childElementCount === carouselMenu.childElementCount) {
    for (let i = 0; i < carouselDivision.childElementCount; i++) {
      //--|🠊 Match carousel identifiers to <li> items inside <menu>: Line 61 🠈|--\\
      const carMenu = carouselMenu.childNodes[i] as HTMLElement;
      //--|🠊 Emphasize with ".visible" or ".hidden": Line 63 🠈|--\\
      const carSection = carouselDivision.childNodes[i] as HTMLElement;
      //--|🠊 Emphasize with ".highlight" or ".downplay": Line 64 🠈|--\\
      const carButton = carMenu.childNodes[0] as HTMLButtonElement;
      //--|🠊 Retrieve the Roman String in the component container of the Carousel 🠈|--\\
      let carContainer = carSection.parentElement?.parentElement as HTMLElement;
      let carRoman = carContainer.classList[0] as string;
      if (romanToArabic(carRoman) === i + 1) {
        carMenu.className = `${carSection.className}`;
        setTimeout(() => {
          carSection.classList.add('visible');
          carButton.classList.add('highlight');
        }, 125);
      } else {
        carMenu.className = `${carSection.className}`;
        setTimeout(() => {
          carSection.classList.add('hidden');
          carButton.classList.add('downplay');
        }, 125);
      }
    }
  }
}
export function markClass(style: StyleProps): String {
  //--|🠊 Class Build for <DefaultButton> 🠈|--\\
  let axis = abbrAxis(style.axis);
  let type = abbrType(style.type);
  let view = abbrView(style.view);
  let shade = abbrShade(style.shade);
  let color = abbrColor(style.color);

  return `${axis}_${view}_${shade}_${color}_${type}`;
}
export function markStyle(type: '{select}' | '{scroll}', view: '-top-' | '-rig-' | '-bot-' | '-lef-'): string {
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
