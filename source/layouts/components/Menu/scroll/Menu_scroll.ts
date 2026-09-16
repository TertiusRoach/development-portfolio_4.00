//--|🠊 Menu_scroll.ts 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { arabicToRoman, romanToArabic, showingBootstrap } from '../../../../scripts';
//--|🠋 Default Starting Point 🠋|--\\
export const modifyingController = (pageName: string, blockName: string, labelName: string): void => {
  /*--|🠋

  🠉|--*/
  setTimeout(() => {
    revealTitles(pageName, blockName, labelName, 'vertical');
    revealButtons(pageName, blockName, labelName, 'vertical');
  }, 1500);
};
let revealTitles = (pageName: string, blockName: string, labelName: string, menuAxis: 'vertical'): void => {
  const controller = findTags(pageName, blockName, labelName).controller as HTMLMenuElement;
  const container = findTags(pageName, blockName, labelName).container as HTMLDivElement | null;

  //--|🠋 Step 1: Swipe Visible Window 🠋|--\\
  const revealActiveTitle = (
    container: HTMLDivElement | null,
    controller: HTMLMenuElement,
    carousel: 'present' | 'missing',
    orientation: 'vertical',
  ) => {
    //--|🠊 Reveal Active Title 🠈|--\\
    const controllerShowing = controller.querySelector(`li[class*="showing-${orientation}"]`) as HTMLLIElement;
    switch (carousel) {
      case 'present':
        let carouselPosition = container?.parentElement?.classList[0].split('_')[1] as string;

        var viewPrev: string = controllerShowing.classList[0];
        var viewNext: string = `${controllerShowing.classList[0].split('_')[0]}_${carouselPosition}`;

        controllerShowing.classList.replace(viewPrev, viewNext);
        break;
      case 'missing':
        let previewDefault = controllerShowing.childNodes[1] as HTMLElement;
        previewDefault.classList.replace('downplay', 'highlight');

        controllerShowing.classList.replace(`showing-${orientation}_I`, `showing-${orientation}_II`);
        break;
    }
    assignBootstrapClasses(container, controller, carousel, orientation);
  };

  //--|🠋 Step 2: Scale Bootstrap Display 🠋|--\\
  const assignBootstrapClasses = (
    container: HTMLDivElement | null,
    controller: HTMLMenuElement,
    carousel: 'present' | 'missing',
    orientation: 'vertical',
  ) => {
    //--|🠊 Assign Bootstrap Classes 🠈|--\\
    const controllerShowing = controller.querySelector(`li[class*="showing-${orientation}"]`) as HTMLLIElement;
    let controllerBootstrap = controllerShowing.querySelectorAll('aside h3[class*="display"]') as NodeListOf<HTMLElement>;
    for (let i = 0; i < controllerBootstrap.length; i++) {
      var element = controllerBootstrap[i] as HTMLElement;
      var prevClass = element.classList[0] as string;
      var nextClass = showingBootstrap() as string;
      element.classList.replace(prevClass, nextClass);
    }
    if (container) {
      return emphasizeDefaultParameters(container, controller, orientation);
    }
  };

  //--|🠋 Step 3: Mark Active Title 🠋|--\\
  const emphasizeDefaultParameters = (container: HTMLDivElement, controller: HTMLMenuElement, orientation: 'vertical') => {
    //--|🠊 Emphasize Default Parameters 🠈|--\\
    const carouselPosition = container.parentElement?.classList[0].split('_')[1] as string;
    const controllerShowing = controller.querySelector(`li[class*="showing-${orientation}"]`) as HTMLLIElement;
    if (!controllerShowing.querySelector('.highlight')) {
      let viewTitle = controllerShowing.children[romanToArabic(carouselPosition) - 1] as HTMLElement;
      viewTitle.classList.replace('downplay', 'highlight');
    }
  };

  // let menuAxis: string = 'vertical';
  if (!container) {
    return revealActiveTitle(container as null, controller, 'missing', menuAxis);
  } else {
    return revealActiveTitle(container as HTMLDivElement, controller, 'present', menuAxis);
  }
};
let revealButtons = (pageName: string, blockName: string, labelName: string, menuAxis: 'vertical'): void => {
  //--|🠋 Step 1: Find Position 🠋|--\\
  const retrievePositions = (controller: HTMLMenuElement, orientation: 'vertical') => {
    let showingCarousel = findTags(pageName, blockName, labelName).container as HTMLDivElement | null;
    let showingController = controller.querySelector(`li[class*="showing-${orientation}"]`) as HTMLLIElement;

    var minimum: number = 0;
    var current: number = 1;
    var maximum: number = 2;
    if (showingCarousel) {
      minimum = 1 as number;
      current = romanToArabic(showingCarousel.parentElement?.classList[0].split('_')[1] as string) as number;
      maximum = showingCarousel.childElementCount as number;
    } else {
      minimum = 1 as number;
      current = romanToArabic(showingController.classList[0].split('_')[1]) as number;
      maximum = showingController.childElementCount as number;
    }
    assignPreview(controller, [minimum, current, maximum], orientation);
  };
  //--|🠋 Step 2: Toggle Preview 🠋|--\\
  const assignPreview = (controller: HTMLMenuElement, positions: Array<number>, orientation: 'vertical') => {
    const viewPrev = controller.querySelector(
      `li[class*="preview-${orientation}"] div[class*="prev-view"]`,
    ) as HTMLDivElement;
    const viewNext = controller.querySelector(
      `li[class*="preview-${orientation}"] div[class*="next-view"]`,
    ) as HTMLDivElement;
    switch (positions[1]) {
      case positions[0]:
        viewPrev.classList.replace('highlight', 'downplay');
        viewNext.classList.replace('downplay', 'highlight');
        break;
      default:
        viewPrev.classList.replace('downplay', 'highlight');
        viewNext.classList.replace('downplay', 'highlight');
        break;
      case positions[2]:
        viewPrev.classList.replace('downplay', 'highlight');
        viewNext.classList.replace('highlight', 'downplay');
        break;
    }
  };

  return retrievePositions(findTags(pageName, blockName, labelName).controller as HTMLMenuElement, menuAxis);
};

//--|🠋 Functions & Elements 🠋|--\\
function reloadElements(pageName: string, blockName: string, labelName: string) {
  let timeout: ReturnType<typeof setTimeout>;
  const handleResize = (): void => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      revealTitles(pageName, blockName, labelName, 'vertical');
      revealButtons(pageName, blockName, labelName, 'vertical');
    }, 125);
  };

  window.addEventListener('resize', handleResize);

  return () => {
    clearTimeout(timeout);
    window.removeEventListener('resize', handleResize);
  };
}
export default reloadElements;

interface ChainedElements {
  container: HTMLDivElement | null;
  controller: HTMLMenuElement | null;
}
function findTags(pageName: string, blockName: string, labelName: string): ChainedElements {
  const menuType: string = 'scroll';
  return {
    container: document.querySelector(`#${pageName}-main div[class="${labelName}-${blockName}_container"]`),
    controller: document.querySelector(
      `#${pageName}-${blockName} menu[class="${labelName}-${blockName}_${menuType}-default"]`,
    ),
  };
}

//--|🠋 Configures Headings 🠋|--\\
export const showingTitles = (
  showTask: 'show-prev' | 'show-next',
  pageName: string,
  blockName: string,
  labelName: string,
  menuAxis: 'vertical',
): void => {
  switch (showTask) {
    case 'show-prev':
      return showPrev(pageName, blockName, labelName, menuAxis);
    case 'show-next':
      return showNext(pageName, blockName, labelName, menuAxis);
  }
};

let showPrev = (pageName: string, blockName: string, labelName: string, menuAxis: 'vertical'): void => {
  const controller = findTags(pageName, blockName, labelName).controller as HTMLMenuElement;
  const container = findTags(pageName, blockName, labelName).container as HTMLMenuElement | null;
  const emphasisBlocker: string = controller.querySelector('div[class*="prev-view"]')?.classList[1] as
    | 'highlight'
    | 'downplay';
  if (emphasisBlocker === 'highlight') {
    let prevSlide = controller.querySelector(`li[class*="showing-${menuAxis}"] aside.highlight`) as HTMLElement;
    let nextSlide = prevSlide.previousElementSibling as HTMLElement;

    prevSlide.classList.replace('highlight', 'downplay');
    nextSlide.classList.replace('downplay', 'highlight');

    //--|🠊 console.log('Show Prev <aside>'); 🠈|--\\
  }
};
let showNext = (pageName: string, blockName: string, labelName: string, menuAxis: 'vertical'): void => {
  const controller = findTags(pageName, blockName, labelName).controller as HTMLMenuElement;
  const container = findTags(pageName, blockName, labelName).container as HTMLMenuElement | null;
  const emphasisBlocker: string = controller.querySelector('div[class*="next-view"]')?.classList[1] as
    | 'highlight'
    | 'downplay';
  if (emphasisBlocker === 'highlight') {
    let prevSlide = controller.querySelector(`li[class*="showing-${menuAxis}"] aside.highlight`) as HTMLElement;
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
  menuAxis: 'vertical',
): void => {
  switch (viewTask) {
    case 'view-prev':
      return viewPrev(pageName, blockName, labelName, menuAxis);
    case 'view-next':
      return viewNext(pageName, blockName, labelName, menuAxis);
  }
};
let viewPrev = (pageName: string, blockName: string, labelName: string, menuAxis: 'vertical'): void => {
  const controller = findTags(pageName, blockName, labelName).controller as HTMLMenuElement;
  const emphasisBlocker: string = controller.querySelector('div[class*="prev-view"')?.classList[1] as
    | 'highlight'
    | 'downplay';
  if (emphasisBlocker === 'highlight') {
    const container = findTags(pageName, blockName, labelName).container as HTMLDivElement | null;
    switch (container) {
      default:
        let carouselContainer: number = romanToArabic(`${container.parentElement?.classList[0].split('_')[1]}`);

        var prevSlide = container.parentElement?.classList[0] as string;
        var nextSlide =
          `${container.parentElement?.classList[0].split('_')[0]}_${arabicToRoman(carouselContainer - 1)}` as string;

        container.parentElement?.classList.add(nextSlide);
        container.parentElement?.classList.remove(prevSlide);
        break;
      case null:
        let controllerContainer = controller.querySelector(`li[class*="showing-${menuAxis}"]`) as HTMLLIElement;

        var prevSlide = controllerContainer.classList[0] as string;
        var nextSlide = `showing-${menuAxis}_${arabicToRoman(romanToArabic(`${prevSlide.split('_')[1]}`) - 1)}` as string;

        controllerContainer.classList.replace(prevSlide, nextSlide);
        break;
    }
    return revealButtons(pageName, blockName, labelName, menuAxis);
  }
};
let viewNext = (pageName: string, blockName: string, labelName: string, menuAxis: 'vertical'): void => {
  const controller = findTags(pageName, blockName, labelName).controller as HTMLMenuElement;
  const emphasisBlocker: string = controller.querySelector('div[class*="next-view"')?.classList[1] as
    | 'highlight'
    | 'downplay';
  if (emphasisBlocker === 'highlight') {
    const container = findTags(pageName, blockName, labelName).container as HTMLDivElement | null;
    switch (container) {
      default:
        let carouselPosition: number = romanToArabic(`${container.parentElement?.classList[0].split('_')[1]}`);

        var prevSlide = container.parentElement?.classList[0] as string;
        var nextSlide =
          `${container.parentElement?.classList[0].split('_')[0]}_${arabicToRoman(carouselPosition + 1)}` as string;

        container.parentElement?.classList.add(nextSlide);
        container.parentElement?.classList.remove(prevSlide);
        break;
      case null:
        let controllerContainer = controller.querySelector(`li[class*="showing-${menuAxis}"]`) as HTMLLIElement;

        var prevSlide = controllerContainer.classList[0] as string;
        var nextSlide = `showing-${menuAxis}_${arabicToRoman(romanToArabic(`${prevSlide.split('_')[1]}`) + 1)}` as string;

        controllerContainer.classList.replace(prevSlide, nextSlide);
        break;
    }
    revealButtons(pageName, blockName, labelName, menuAxis);
  }
};
