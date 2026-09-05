//--|🠊 Menu_scroll.ts 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { arabicToRoman, romanToArabic, showingBootstrap } from '../../../../scripts';

//--|🠋 Functions & Elements 🠋|--\\
interface ChainedElements {
  container: HTMLDivElement | null;
  controller: HTMLMenuElement | null;
}
function findTags(pageName: string, blockName: string, labelName: string): ChainedElements {
  return {
    container: document.querySelector(`#${pageName}-${blockName} div[class="${labelName}-${blockName}_container"]`),
    controller: document.querySelector(`#${pageName}-${blockName} menu[class="${labelName}-${blockName}_scroll-default"]`),
  };
}
function reloadElements(pageName: string, blockName: string, labelName: string) {
  let timeout: ReturnType<typeof setTimeout>;
  const handleResize = (): void => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      revealTitles(pageName, blockName, labelName);
      revealButtons(pageName, blockName, labelName);
    }, 125);
  };

  window.addEventListener('resize', handleResize);

  return () => {
    clearTimeout(timeout);
    window.removeEventListener('resize', handleResize);
  };
}
export default reloadElements;

//--|🠋 Configures Headings 🠋|--\\
export const showingTitles = (
  showTask: 'show-prev' | 'show-next',
  pageName: string,
  blockName: string,
  labelName: string,
): void => {
  switch (showTask) {
    case 'show-prev':
      return showPrev(pageName, blockName, labelName);
    case 'show-next':
      return showNext(pageName, blockName, labelName);
  }
};
let showPrev = (pageName: string, blockName: string, labelName: string): void => {
  const controller = findTags(pageName, blockName, labelName).controller as HTMLMenuElement;
  const emphasisBlocker: string = controller.querySelector('div[class*="prev-view"')?.classList[1] as
    | 'highlight'
    | 'downplay';
  if (emphasisBlocker === 'highlight') {
    let prevSlide = controller.querySelector('li[class*="showing-vertical"] aside.highlight') as HTMLElement;
    let nextSlide = prevSlide.previousElementSibling as HTMLElement;

    prevSlide.classList.replace('highlight', 'downplay');
    nextSlide.classList.replace('downplay', 'highlight');

    //--|🠊 console.log('Show Prev <aside>'); 🠈|--\\
  }
};
let showNext = (pageName: string, blockName: string, labelName: string): void => {
  const controller = findTags(pageName, blockName, labelName).controller as HTMLMenuElement;
  const emphasisBlocker: string = controller.querySelector('div[class*="next-view"')?.classList[1] as
    | 'highlight'
    | 'downplay';
  if (emphasisBlocker === 'highlight') {
    let prevSlide = controller.querySelector('li[class*="showing-vertical"] aside.highlight') as HTMLElement;
    let nextSlide = prevSlide.nextElementSibling as HTMLElement;

    prevSlide.classList.replace('highlight', 'downplay');
    nextSlide.classList.replace('downplay', 'highlight');

    //--|🠊 console.log('Show Next <aside>'); 🠈|--\\
  }
};

//--|🠋 Configures Buttons 🠋|--\\
export const previewButtons = (
  viewTask: 'view-prev' | 'view-next',
  pageName: string,
  blockName: string,
  labelName: string,
): void => {
  switch (viewTask) {
    case 'view-prev':
      return viewPrev(pageName, blockName, labelName);
    case 'view-next':
      return viewNext(pageName, blockName, labelName);
  }
};
let viewPrev = (pageName: string, blockName: string, labelName: string): void => {
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
};
let viewNext = (pageName: string, blockName: string, labelName: string): void => {
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
};

//--|🠋 Default Starting Point 🠋|--\\
export const modifyingController = (pageName: string, blockName: string, labelName: string): void => {
  /*--|🠋

  🠉|--*/
  setTimeout(() => {
    revealTitles(pageName, blockName, labelName);
    revealButtons(pageName, blockName, labelName);
  }, 1500);
};
let revealButtons = (pageName: string, blockName: string, labelName: string): void => {
  const container = findTags(pageName, blockName, labelName).container as HTMLDivElement;
  const controller = findTags(pageName, blockName, labelName).controller as HTMLMenuElement;

  let carouselChildren: number = container.childElementCount;
  let carouselPosition: number = romanToArabic(container.parentElement?.classList[0].split('_')[1] as string);

  var viewPrev = controller.querySelector('li[class*="preview-vertical"] div[class*="prev-view"]') as HTMLDivElement;
  var viewNext = controller.querySelector('li[class*="preview-vertical"] div[class*="next-view"]') as HTMLDivElement;

  revealTitles(pageName, blockName, labelName);
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
};
let revealTitles = (pageName: string, blockName: string, labelName: string): void => {
  const container = findTags(pageName, blockName, labelName).container as HTMLDivElement;
  const controller = findTags(pageName, blockName, labelName).controller as HTMLMenuElement;

  const revealActiveTitle = (container: HTMLDivElement, controller: HTMLMenuElement) => {
    //--|🠊 Reveal Active Title 🠈|--\\
    let carouselPosition = container.parentElement?.classList[0].split('_')[1] as string;
    let controllerShowing = controller.querySelector('li[class*="showing-vertical"]') as HTMLLIElement;

    var viewPrev: string = controllerShowing.classList[0];
    var viewNext: string = `${controllerShowing.classList[0].split('_')[0]}_${carouselPosition}`;

    controllerShowing.classList.replace(viewPrev, viewNext);
    assignBootstrapClasses(container, controller);
  };

  const assignBootstrapClasses = (container: HTMLDivElement, controller: HTMLMenuElement) => {
    //--|🠊 Assign Bootstrap Classes 🠈|--\\
    const controllerShowing = controller.querySelector('li[class*="showing-vertical"]') as HTMLLIElement;
    let controllerBootstrap = controllerShowing.querySelectorAll('aside h3[class*="display"]') as NodeListOf<HTMLElement>;
    for (let i = 0; i < controllerBootstrap.length; i++) {
      var element = controllerBootstrap[i] as HTMLElement;
      var prevClass = element.classList[0] as string;
      var nextClass = showingBootstrap() as string;
      element.classList.replace(prevClass, nextClass);
    }
    emphasizeDefaultParameters(container, controller);
  };

  const emphasizeDefaultParameters = (container: HTMLDivElement, controller: HTMLMenuElement) => {
    //--|🠊 Emphasize Default Parameters 🠈|--\\
    const carouselPosition = container.parentElement?.classList[0].split('_')[1] as string;
    const controllerShowing = controller.querySelector('li[class*="showing-vertical"]') as HTMLLIElement;
    if (!controllerShowing.querySelector('.highlight')) {
      let viewTitle = controllerShowing.children[romanToArabic(carouselPosition) - 1] as HTMLElement;
      viewTitle.classList.replace('downplay', 'highlight');
    }
  };

  revealActiveTitle(container, controller);
};
