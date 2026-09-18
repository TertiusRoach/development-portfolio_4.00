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
  const control = findTags(pageName, blockName, labelName).controller as HTMLMenuElement;
  const carousel = findTags(pageName, blockName, labelName).carousel as HTMLDivElement | null;

  //--|🠋 Step 1: Swipe Visible Window 🠋|--\\
  const revealActiveTitle = (container: HTMLDivElement | null, controller: HTMLMenuElement, carousel: 'present' | 'missing', orientation: 'vertical') => {
    //--|🠊 Reveal Active Title 🠈|--\\
    const controllerShowing = controller.querySelector(`li[class*="showing-${orientation}"]`) as HTMLLIElement;
    switch (carousel) {
      case 'present':
        let carouselPosition = container?.querySelector(`li[class*="carousel-${menuAxis}"]`)?.classList[0].split('_')[1] as string;

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
  const assignBootstrapClasses = (container: HTMLDivElement | null, controller: HTMLMenuElement, carousel: 'present' | 'missing', orientation: 'vertical') => {
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
      return emphasizeDefaultParameters(container, controller, carousel, orientation);
    }
  };

  //--|🠋 Step 3: Mark Active Title 🠋|--\\
  const emphasizeDefaultParameters = (container: HTMLDivElement, controller: HTMLMenuElement, carousel: 'present' | 'missing', orientation: 'vertical') => {
    //--|🠊 Emphasize Default Parameters 🠈|--\\
    const showingCarousel = container.querySelector(`li[class*="carousel-${orientation}"]`) as HTMLLIElement;
    const showingController = controller.querySelector(`li[class*="showing-${orientation}"]`) as HTMLLIElement;
    switch (carousel) {
      case 'present':
        let carouselPosition = (romanToArabic(showingCarousel.classList[0].split('_')[1]) - 1) as number;
        if (showingController.querySelector('.downplay')) {
          var viewTitle = showingController.children[carouselPosition] as HTMLElement;
          viewTitle.classList.replace('downplay', 'highlight');
        }
        break;
      case 'missing':
        let controllerPosition = container.parentElement?.classList[0].split('_')[1] as string;
        if (!showingController.querySelector('.highlight')) {
          var viewTitle = showingController.children[romanToArabic(controllerPosition) - 1] as HTMLElement;
          viewTitle.classList.replace('downplay', 'highlight');
        }
        break;
    }
  };

  if (carousel) {
    return revealActiveTitle(carousel, control, 'present', menuAxis);
  } else {
    return revealActiveTitle(carousel as null, control, 'missing', menuAxis);
  }
};
let revealButtons = (pageName: string, blockName: string, labelName: string, menuAxis: 'vertical'): void => {
  const control = findTags(pageName, blockName, labelName).controller as HTMLMenuElement;
  const carousel = findTags(pageName, blockName, labelName).carousel as HTMLDivElement | null;

  //--|🠋 Step 1: Find Position 🠋|--\\
  const retrievePositions = (container: HTMLDivElement | null, controller: HTMLMenuElement, carousel: 'present' | 'missing', orientation: 'vertical') => {
    let minimum: number = 0;
    let current: number = 1;
    let maximum: number = 2;

    switch (carousel) {
      case 'present':
        const showingCarousel = container?.querySelector(`li[class*="carousel-${orientation}"]`) as HTMLLIElement;

        minimum = 1 as number;
        current = romanToArabic(showingCarousel.classList[0].split('_')[1]) as number;
        maximum = showingCarousel.querySelector(`div[class*="${labelName}"`)?.childElementCount as number;
        break;
      case 'missing':
        const showingController = controller.querySelector(`li[class*="showing-${orientation}"]`) as HTMLLIElement;

        minimum = 1 as number;
        current = romanToArabic(showingController.classList[0].split('_')[1]) as number;
        maximum = showingController.childElementCount as number;
        break;
    }

    assignPreview(controller, [minimum, current, maximum], orientation);
  };
  //--|🠋 Step 2: Toggle Preview 🠋|--\\
  const assignPreview = (controller: HTMLMenuElement, positions: Array<number>, orientation: 'vertical') => {
    const viewPrev = controller.querySelector(`li[class*="preview-${orientation}"] div[class*="prev-view"]`) as HTMLDivElement;
    const viewNext = controller.querySelector(`li[class*="preview-${orientation}"] div[class*="next-view"]`) as HTMLDivElement;
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

  if (carousel) {
    return retrievePositions(carousel as HTMLDivElement, control, 'present', menuAxis);
  } else {
    return retrievePositions(carousel as null, control, 'missing', menuAxis);
  }
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

//--|🠋 Configures Headings 🠋|--\\
export const scrollingCarousel = (showTask: 'show-prev' | 'show-next', pageName: string, blockName: string, labelName: string, menuAxis: 'vertical'): void => {
  switch (showTask) {
    case 'show-prev':
      return showPrev(pageName, blockName, labelName, menuAxis);
    case 'show-next':
      return showNext(pageName, blockName, labelName, menuAxis);
  }
};
let showPrev = (pageName: string, blockName: string, labelName: string, menuAxis: 'vertical'): void => {
  const control = findTags(pageName, blockName, labelName).controller as HTMLMenuElement;
  const carousel = findTags(pageName, blockName, labelName).carousel as HTMLDivElement | null;
  const emphasisBlocker: string = control.querySelector('div[class*="prev-view"')?.classList[1] as 'highlight' | 'downplay';
  if (emphasisBlocker === 'highlight') {
    let showingControl: HTMLLIElement;
    let showingCarousel: HTMLLIElement;
    let prevShow: HTMLElement;
    let nextShow: HTMLElement;
    let prevTitle: number;
    let nextTitle: number;
    switch (!carousel) {
      default:
      case false:
        showingControl = control.querySelector(`li[class*="showing-${menuAxis}"]`) as HTMLLIElement;
        prevTitle = romanToArabic(showingControl.classList[0].split('_')[1]) as number;
        nextTitle = (romanToArabic(showingControl.classList[0].split('_')[1]) - 1) as number;

        prevShow = showingControl.children[prevTitle - 1] as HTMLElement;
        nextShow = showingControl.children[nextTitle - 1] as HTMLElement;

        showingCarousel = carousel?.querySelector(`li[class*="carousel-${menuAxis}"]`) as HTMLLIElement;
        let prevSlide: number = romanToArabic(showingCarousel.classList[0].split('_')[1]);
        let nextSlide: number = romanToArabic(showingCarousel.classList[0].split('_')[1]) - 1;

        showingControl.classList.replace(`showing-${menuAxis}_${arabicToRoman(prevTitle)}`, `showing-${menuAxis}_${arabicToRoman(nextTitle)}`);
        showingCarousel.classList.replace(`carousel-${menuAxis}_${arabicToRoman(prevSlide)}`, `carousel-${menuAxis}_${arabicToRoman(nextSlide)}`);

        prevShow.classList.replace('highlight', 'downplay');
        nextShow.classList.replace('downplay', 'highlight');

        revealButtons(pageName, blockName, labelName, menuAxis);
        //--|🠊 console.log('Present Carousel'); 🠈|--\\
        break;
      case true:
        showingControl = control.querySelector(`li[class*="showing-${menuAxis}"]`) as HTMLLIElement;
        prevTitle = romanToArabic(showingControl.classList[0].split('_')[1]) as number;
        nextTitle = (romanToArabic(showingControl.classList[0].split('_')[1]) - 1) as number;

        prevShow = showingControl.children[prevTitle - 1] as HTMLElement;
        nextShow = showingControl.children[nextTitle - 1] as HTMLElement;

        showingControl.classList.replace(`showing-${menuAxis}_${arabicToRoman(prevTitle)}`, `showing-${menuAxis}_${arabicToRoman(nextTitle)}`);

        prevShow.classList.replace('highlight', 'downplay');
        nextShow.classList.replace('downplay', 'highlight');
        //--|🠊 console.log('Missing Carousel'); 🠈|--\\
        break;
    }
  }
};
let showNext = (pageName: string, blockName: string, labelName: string, menuAxis: 'vertical'): void => {
  const control = findTags(pageName, blockName, labelName).controller as HTMLMenuElement;
  const carousel = findTags(pageName, blockName, labelName).carousel as HTMLDivElement | null;
  const emphasisBlocker: string = control.querySelector('div[class*="next-view"')?.classList[1] as 'highlight' | 'downplay';
  if (emphasisBlocker === 'highlight') {
    let showingControl: HTMLLIElement;
    let showingCarousel: HTMLLIElement;
    let prevShow: HTMLElement;
    let nextShow: HTMLElement;
    let prevTitle: number;
    let nextTitle: number;
    switch (!carousel) {
      default:
      case false:
        showingControl = control.querySelector(`li[class*="showing-${menuAxis}"]`) as HTMLLIElement;
        prevTitle = romanToArabic(showingControl.classList[0].split('_')[1]) as number;
        nextTitle = (romanToArabic(showingControl.classList[0].split('_')[1]) + 1) as number;

        prevShow = showingControl.children[prevTitle - 1] as HTMLElement;
        nextShow = showingControl.children[nextTitle - 1] as HTMLElement;

        showingCarousel = carousel?.querySelector(`li[class*="carousel-${menuAxis}"]`) as HTMLLIElement;
        let prevSlide: number = romanToArabic(showingCarousel.classList[0].split('_')[1]);
        let nextSlide: number = romanToArabic(showingCarousel.classList[0].split('_')[1]) + 1;

        showingControl.classList.replace(`showing-${menuAxis}_${arabicToRoman(prevTitle)}`, `showing-${menuAxis}_${arabicToRoman(nextTitle)}`);
        showingCarousel.classList.replace(`carousel-${menuAxis}_${arabicToRoman(prevSlide)}`, `carousel-${menuAxis}_${arabicToRoman(nextSlide)}`);

        prevShow.classList.replace('highlight', 'downplay');
        nextShow.classList.replace('downplay', 'highlight');
        //--|🠊 console.log('Present Carousel'); 🠈|--\\
        break;
      case true:
        showingControl = control.querySelector(`li[class*="showing-${menuAxis}"]`) as HTMLLIElement;
        prevTitle = romanToArabic(showingControl.classList[0].split('_')[1]) as number;
        nextTitle = (romanToArabic(showingControl.classList[0].split('_')[1]) + 1) as number;

        prevShow = showingControl.children[prevTitle - 1] as HTMLElement;
        nextShow = showingControl.children[nextTitle - 1] as HTMLElement;

        showingControl.classList.replace(`showing-${menuAxis}_${arabicToRoman(prevTitle)}`, `showing-${menuAxis}_${arabicToRoman(nextTitle)}`);

        prevShow.classList.replace('highlight', 'downplay');
        nextShow.classList.replace('downplay', 'highlight');
        //--|🠊 console.log('Missing Carousel'); 🠈|--\\
        break;
    }
  }
};

//--|🠋 Configures Buttons & Elements 🠋|--\\
interface ChainedElements {
  controller: HTMLMenuElement;

  carousel: HTMLDivElement | null;
}
function findTags(pageName: string, blockName: string, labelName: string): ChainedElements {
  const menuType = 'scroll';
  const container = `${pageName}-${blockName}`;

  let controller = (document.querySelector(`#${container} menu[class="${labelName}-${blockName}_${menuType}-default"]`) ??
    document.querySelector(`#${pageName}-header menu[class="${labelName}-header_${menuType}-default"]`) ??
    document.querySelector(`#${pageName}-footer menu[class="${labelName}-footer_${menuType}-default"]`)) as HTMLMenuElement;

  let carousel = (document.querySelector(`#${container} div[class="${labelName}-${blockName}_carousel-default"]`) ??
    document.querySelector(`#${pageName}-main div[class="${labelName}-main_carousel-default"]`)) as HTMLDivElement | null;

  return {
    carousel,
    controller,
  };
}
export const previewButtons = (viewTask: 'view-prev' | 'view-next', pageName: string, blockName: string, labelName: string, menuAxis: 'vertical'): void => {
  const control = findTags(pageName, blockName, labelName).controller as HTMLMenuElement;
  let emphasisBlocker: string;
  switch (viewTask) {
    case 'view-prev':
      emphasisBlocker = control.querySelector('div[class*="prev-view"]')?.classList[1] as 'highlight' | 'downplay';
      break;
    case 'view-next':
      emphasisBlocker = control.querySelector('div[class*="next-view"]')?.classList[1] as 'highlight' | 'downplay';
      break;
  }

  if (emphasisBlocker === 'highlight') {
    const showTitles = control.querySelector(`li[class*="showing-${menuAxis}"]`) as HTMLLIElement;
    const viewPrev = control.querySelector(`li[class*="preview-${menuAxis}"] div[class*="prev-view"]`) as HTMLDivElement;
    const viewNext = control.querySelector(`li[class*="preview-${menuAxis}"] div[class*="next-view"]`) as HTMLDivElement;

    switch (romanToArabic(showTitles.classList[0].split('_')[1])) {
      case 1:
        viewPrev.classList.replace('highlight', 'downplay');
        viewNext.classList.replace('downplay', 'highlight');
        break;
      default:
        viewPrev.classList.replace('downplay', 'highlight');
        viewNext.classList.replace('downplay', 'highlight');
        break;
      case showTitles.childElementCount:
        viewPrev.classList.replace('downplay', 'highlight');
        viewNext.classList.replace('highlight', 'downplay');
        break;
    }
  }
};
