//--|🠊 Scroll_carousel.ts 🠈|--\\

//--|🠋 Functions 🠋|--\\
import { romanToArabic, arabicToRoman } from '../../../../functions';

function scrollCarousel(
  pageName: string,
  blockName: string,
  labelName: string,
  blockAction: 'go-left' | 'go-right',
): number {
  /*--|🠋
  
  🠉|--*/
  const findPreview: string = `#${pageName}-${blockName} section.${blockName}-foreground li[class*="${labelName}-${blockName}_preview"]`;
  const findButtons: string = `#${pageName}-${blockName} section.${blockName}-foreground li[class*="${labelName}-${blockName}_buttons"]`;
  const findDivision: string = `#${pageName}-main section.main-foreground div.${labelName}-main_carousel li:first-child`;

  const carouselPreview = document.querySelector(findPreview) as HTMLElement;
  const carouselButtons = document.querySelector(findButtons) as HTMLElement;
  const prevButton = carouselButtons.childNodes[0] as HTMLElement;
  const nextButton = carouselButtons.childNodes[1] as HTMLElement;
  const carouselDivision = document.querySelector(findDivision) as HTMLElement;

  let prevSlide: number = romanToArabic(carouselDivision.classList[0]) - 1;
  let currSlide: number = romanToArabic(carouselDivision.classList[0]) + 0;
  let nextSlide: number = romanToArabic(carouselDivision.classList[0]) + 1;
  let lastSlide: number = carouselDivision.childNodes[0].childNodes.length;
  switch (blockAction) {
    case 'go-left':
      if (prevButton.classList.contains('downplay')) return 0 as number;

      carouselPreview.classList.add(arabicToRoman(prevSlide));
      carouselDivision.classList.add(arabicToRoman(prevSlide));

      carouselPreview.classList.remove(arabicToRoman(currSlide));
      carouselDivision.classList.remove(arabicToRoman(currSlide));

      if (prevSlide === 1) {
        prevButton.classList.add('downplay');
        prevButton.classList.remove('highlight');
      } else if (nextButton.classList.contains('downplay')) {
        nextButton.classList.add('highlight');
        nextButton.classList.remove('downplay');
      }
      return prevSlide as number;
    case 'go-right':
      if (nextButton.classList.contains('downplay')) return 0 as number;

      carouselPreview.classList.add(arabicToRoman(nextSlide));
      carouselDivision.classList.add(arabicToRoman(nextSlide));

      carouselPreview.classList.remove(arabicToRoman(currSlide));
      carouselDivision.classList.remove(arabicToRoman(currSlide));

      console.log(nextSlide);

      if (nextSlide === lastSlide) {
        nextButton.classList.add('downplay');
        nextButton.classList.remove('highlight');
      } else if (prevButton.classList.contains('downplay')) {
        prevButton.classList.add('highlight');
        prevButton.classList.remove('downplay');
      }
      return nextSlide as number;
  }
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

export default scrollCarousel;

//--|===|--\\
const retrieveTags = (pageName: string, blockName: string, axis: '[x]' | '[y]'): Record<string, HTMLElement> | undefined => {
  if (axis === '[x]') {
    let AxisX = 'ul';
    let TypeXScr = 'scr';
    return {
      menu: document.querySelector(
        `#${pageName}-header menu[class*="carousel"] li[class*="_${TypeXScr}"] ${AxisX} li[class*="preview"]`,
      ) as HTMLElement,
      division: document.querySelector(
        `#${pageName}-main div[class*="carousel"] ${AxisX} .I div[class*="container"]`,
      ) as HTMLElement,
    };
  } else if (axis === '[y]') {
    let AxisY = 'ol';
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
};
const markMenu = (pageName: string, blockName: string) => {
  //--|🠋|==============================================|🠋|--\\
  //--|🠊 See if <CarouselDivision> is on ".I" position to
  //--|🠊 Match the emphasis on the <button> tags in <CarouselMenu>
  //--|🠉|==============================================|🠉|--\\
  const scrollXMenu = retrieveTags(pageName, blockName, '[x]')?.menu as HTMLElement;
  const scrollXCarousel = retrieveTags(pageName, blockName, '[x]')?.division as HTMLElement;
  const scrollXSection = scrollXCarousel.childNodes[0].childNodes as NodeListOf<HTMLElement>;
  /*--|🠋

  🠉|--*/
  if (scrollXCarousel.childElementCount === scrollXMenu.childElementCount) {
    let prevMenu = scrollXMenu.parentElement?.querySelector('li[class*="_buttons"] div[class*="prev"]') as HTMLElement;
    let nextMenu = scrollXMenu.parentElement?.querySelector('li[class*="_buttons"] div[class*="next"]') as HTMLElement;
    if (scrollXMenu.childNodes[0].childNodes.length === 1) {
      console.log(scrollXMenu.parentElement?.querySelector('li[class*="preview"] div')?.childNodes);
      // console.log(scrollXMenu.querySelector(``));
      nextMenu.classList.add('highlight');
      nextMenu.classList.remove('downplay');
    }
    /*

    */
  }
};
//--|===|--\\
