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

export function markMenu(pageName: string, blockName: string) {
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

  const carMenu = getTags('[y]').menu as HTMLElement;
  const carDivision = getTags('[y]').division as HTMLElement;
  const carPar = carDivision.parentElement as HTMLLIElement;
  const carPos: string = carPar.className;

  if (carDivision.childElementCount === carMenu.childElementCount) {
    for (let i = 0; i < carDivision.childElementCount; i++) {
      let carMen = carMenu.childNodes[i] as HTMLElement;
      let carDiv = carDivision.childNodes[i] as HTMLElement;
      let carBut = carMen.childNodes[0] as HTMLButtonElement;
      let carCon = carDiv.parentElement?.parentElement as HTMLElement;
      let carRoman = carCon.classList[0] as string;

      if (romanToArabic(carRoman) === i + 1) {
        carMen.className = `${carDiv.className}`;
        setTimeout(() => {
          carDiv.classList.add('visible');
          carBut.classList.add('highlight');
        }, 125);
      } else {
        carMen.className = `${carDiv.className}`;
        setTimeout(() => {
          carDiv.classList.add('hidden');
          carBut.classList.add('downplay');
        }, 125);
      }
    }
  }
}
export function selectSection(pageName: string, blockName: string, eventName: React.MouseEvent<HTMLElement>) {
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
  const carMenu = getTags('[y]').menu as HTMLElement;
  const carDivision = getTags('[y]').division as HTMLElement;

  const clickedElement = eventName.currentTarget.parentElement as HTMLElement;
  const identifyElement: string = clickedElement.classList[0];
  console.log(identifyElement);

  let selectPosition: number = 0;
  for (let i = 0; i < carMenu.childElementCount; i++) {
    var sectionElement = carDivision.childNodes[i] as HTMLElement;
    if (sectionElement.classList[0] === identifyElement) {
      var carContainer = carDivision.parentElement as HTMLElement;
      carContainer.className = arabicToRoman(i + 1);
    }
  }
}

const leftToMain = (pageName: string, blockName: 'leftbar') => {};
const rightToMain = () => {};
