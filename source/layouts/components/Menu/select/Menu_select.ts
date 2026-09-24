//--|🠊 Menu_select.ts 🠈|--\\

//--|🠋 Functions 🠋|--\\
import { abbrView, abbrShade, abbrColor } from '../../components';
import { stripBrackets, arabicToRoman, romanToArabic } from '../../../../scripts';
//--|🠋 Default Starting Point 🠋|--\\
/*--|🠋

🠉|--*/
export const modifyControl = (pageName: string, blockName: string, labelName: string, menuAxis: '[x]' | '[y]'): void => {
  let axisType: 'horizontal' | 'vertical';
  switch (menuAxis) {
    case '[x]':
      axisType = 'horizontal';
      break;
    case '[y]':
      axisType = 'vertical';
      break;
  }

  setTimeout(() => {
    revealButtons(pageName, blockName, labelName, axisType);
  }, 1500);
};
let revealButtons = (pageName: string, blockName: string, labelName: string, menuAxis: 'horizontal' | 'vertical'): void => {
  const control = findTags(pageName, blockName, labelName).controller as HTMLMenuElement;
  const carousel = findTags(pageName, blockName, labelName).carousel as HTMLDivElement | null;

  //--|🠋 Step 1: Select Active Button 🠋|--\\
  const revealActiveTitle = (container: HTMLDivElement | null, controller: HTMLMenuElement, carousel: 'present' | 'missing', orientation: 'horizontal' | 'vertical') => {
    //--|🠊 Reveal Active Title 🠈|--\\
    const controllerShowing = controller.querySelector(`li[class*="preview-${orientation}"]`) as HTMLLIElement;
    if (carousel === 'present') {
      let carouselPosition = container?.querySelector(`li[class*="carousel-${menuAxis}"]`)?.classList[0].split('_')[1] as string;

      var viewPrev: string = controllerShowing.classList[0];
      var viewNext: string = `${controllerShowing.classList[0].split('_')[0]}_${carouselPosition}`;

      controllerShowing.classList.replace(viewPrev, viewNext);
    }
    emphasizeDefaultParameters(container, controller, carousel, orientation);
  };

  //--|🠋 Step 2: Mark Active Title 🠋|--\\
  const emphasizeDefaultParameters = (
    container: HTMLDivElement | null,
    controller: HTMLMenuElement,
    carousel: 'present' | 'missing',
    orientation: 'horizontal' | 'vertical',
  ) => {
    //--|🠊 Emphasize Default Parameters 🠈|--\\
    const showingCarousel = container?.querySelector(`li[class*="carousel-${orientation}"]`) as HTMLLIElement;
    const showingController = controller.querySelector(`li[class*="preview-${orientation}"]`) as HTMLLIElement;

    if (carousel === 'present') {
      let carouselPosition = (romanToArabic(showingCarousel.classList[0].split('_')[1]) - 1) as number;
      if (showingController.querySelector('.downplay')) {
        var viewTitle = showingController.children[carouselPosition] as HTMLElement;
        viewTitle.classList.replace('downplay', 'highlight');
      }
    }
  };
  if (carousel) {
    return revealActiveTitle(carousel, control, 'present', menuAxis);
  } else {
    return revealActiveTitle(carousel as null, control, 'missing', menuAxis);
  }
};

//--|🠋 Functions & Elements 🠋|--\\
function reloadElements(pageName: string, blockName: string, labelName: string) {
  let timeout: ReturnType<typeof setTimeout>;
  const handleResize = (): void => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
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
export const selectCarousel = (thisItem: HTMLDivElement, pageName: string, blockName: string, labelName: string, menuAxis: '[x]' | '[y]'): void => {
  let orientation: 'horizontal' | 'vertical';
  switch (menuAxis) {
    case '[x]':
      orientation = 'horizontal';
      break;
    case '[y]':
      orientation = 'vertical';
      break;
  }

  const control = findTags(pageName, blockName, labelName).controller as HTMLMenuElement;
  const carousel = findTags(pageName, blockName, labelName).carousel as HTMLDivElement | null;
  const preview = control.querySelector(`li[class*="preview-${orientation}"]`) as HTMLLIElement;

  let nextView = thisItem as HTMLDivElement;
  let prevView = preview.querySelector('.highlight') as HTMLDivElement;

  if (carousel) {
    const previewCarousel = carousel.querySelector(`li[class*="carousel-${orientation}"]`) as HTMLLIElement;
    const previewContainer = thisItem.parentElement ? Array.from(thisItem.parentElement.children).indexOf(thisItem) : (-1 as number);

    let prevSlide = previewCarousel.classList[0] as string;
    let nextSlide = `carousel-${orientation}_${arabicToRoman(previewContainer + 1)}` as string;

    nextView.classList.replace('downplay', 'highlight');
    prevView.classList.replace('highlight', 'downplay');

    previewCarousel.classList.replace(prevSlide, nextSlide);
  } else {
    switch (Boolean(preview.querySelector(':scope > .highlight'))) {
      case false:
        thisItem.classList.replace('downplay', 'highlight');
        break;
      case true:
        nextView.classList.replace('downplay', 'highlight');
        prevView.classList.replace('highlight', 'downplay');
        break;
    }
  }
};

//--|🠋 Configures Buttons & Elements 🠋|--\\
interface ChainedElements {
  controller: HTMLMenuElement;

  carousel: HTMLDivElement | null;
}
interface StyleProps {
  shade: '~dark~' | '~light~';
  image: string | Array<string>;
  color: '(red)' | '(green)' | '(blue)' | '(mono)';
  size: '<h1>' | '<h4>' | '<p>' | Array<'<h1>' | '<h4>' | '<p>'>;
  view: 'top-cen' | 'mid-lef' | 'mid-cen' | 'mid-rig' | 'bot-cen';
  align: '-top-' | '-rig-' | '-mid-' | '-cen-' | '-bot-' | '-lef-';
}

function findTags(pageName: string, blockName: string, labelName: string): ChainedElements {
  const menuType = 'select';
  const container = `${pageName}-${blockName}`;

  let controller = (document.querySelector(`#${container} menu[class="${labelName}-${blockName}_${menuType}-default"]`) ??
    document.querySelector(`#${pageName}-leftbar menu[class="${labelName}-leftbar_${menuType}-default"]`) ??
    document.querySelector(`#${pageName}-rightbar menu[class="${labelName}-rightbar_${menuType}-default"]`)) as HTMLMenuElement;

  let carousel = (document.querySelector(`#${container} div[class="${labelName}-${blockName}_carousel-default"]`) ??
    document.querySelector(`#${pageName}-main div[class="${labelName}-main_carousel-default"]`)) as HTMLDivElement | null;

  return {
    carousel,
    controller,
  };
}
export function createClass(axis: '[x]' | '[y]', style: StyleProps): string {
  //--|🠊 Class Build for <MenuSelect> 🠈|--\\
  const viewClass: Record<StyleProps['view'], Record<'[x]' | '[y]', string>> = {
    'bot-cen': { '[x]': `bot_${stripBrackets(style.align, '--')}`, '[y]': `rig_${stripBrackets(style.align, '--')}` },
    'top-cen': { '[x]': `top_${stripBrackets(style.align, '--')}`, '[y]': `lef_${stripBrackets(style.align, '--')}` },
    'mid-cen': { '[x]': `${stripBrackets(style.align, '--')}_cen`, '[y]': `${stripBrackets(style.align, '--')}_mid` },
    'mid-lef': { '[x]': `top_${stripBrackets(style.align, '--')}`, '[y]': `lef_${stripBrackets(style.align, '--')}` },
    'mid-rig': { '[x]': `bot_${stripBrackets(style.align, '--')}`, '[y]': `rig_${stripBrackets(style.align, '--')}` },
  };

  return `${viewClass[style.view][axis]}_${abbrShade(style.shade)}_${abbrColor(style.color)}`;
}
