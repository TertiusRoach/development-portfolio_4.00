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
  }, 1250);
};
let revealButtons = (pageName: string, blockName: string, labelName: string, menuAxis: 'horizontal' | 'vertical'): void => {
  const control = findTags(pageName, blockName, labelName).controller as HTMLMenuElement;
  const fullscreen = findTags(pageName, blockName, labelName).fullscreen as HTMLDivElement | null;

  //--|🠋 Step 1: Select Active Button 🠋|--\\
  const revealActiveTitle = (
    container: HTMLDivElement | null,
    controller: HTMLMenuElement,
    fullscreen: 'present' | 'missing',
    orientation: 'horizontal' | 'vertical',
  ) => {
    //--|🠊 Reveal Active Title 🠈|--\\
    const controllerShowing = controller.querySelector(`li[class*="preview-${orientation}"]`) as HTMLLIElement;
    if (fullscreen === 'present') {
      let fullscreenPosition = container?.querySelector(`li[class*="fullscreen-${menuAxis}"]`)?.classList[0].split('_')[1] as string;

      var viewPrev: string = controllerShowing.classList[0];
      var viewNext: string = `${controllerShowing.classList[0].split('_')[0]}_${fullscreenPosition}`;

      controllerShowing.classList.replace(viewPrev, viewNext);
    }
    emphasizeDefaultParameters(container, controller, fullscreen, orientation);
  };

  //--|🠋 Step 2: Mark Active Title 🠋|--\\
  const emphasizeDefaultParameters = (
    container: HTMLDivElement | null,
    controller: HTMLMenuElement,
    fullscreen: 'present' | 'missing',
    orientation: 'horizontal' | 'vertical',
  ) => {
    //--|🠊 Emphasize Default Parameters 🠈|--\\
    const showingFullscreen = container?.querySelector(`li[class*="fullscreen-${orientation}"]`) as HTMLLIElement;
    const showingController = controller.querySelector(`li[class*="preview-${orientation}"]`) as HTMLLIElement;

    if (fullscreen === 'present') {
      let fullscreenPosition = (romanToArabic(showingFullscreen.classList[0].split('_')[1]) - 1) as number;
      if (showingController.querySelector('.downplay')) {
        var viewTitle = showingController.children[fullscreenPosition] as HTMLElement;
        viewTitle.classList.replace('downplay', 'highlight');
      }
    }
  };
  if (control === null) return;
  return fullscreen ? revealActiveTitle(fullscreen, control, 'present', menuAxis) : revealActiveTitle(null, control, 'missing', menuAxis);
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
export const selectFullscreen = (thisItem: HTMLDivElement, pageName: string, blockName: string, labelName: string, menuAxis: '[x]' | '[y]'): void => {
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
  const fullscreen = findTags(pageName, blockName, labelName).fullscreen as HTMLDivElement | null;
  const preview = control.querySelector(`li[class*="preview-${orientation}"]`) as HTMLLIElement;

  let nextView = thisItem as HTMLDivElement;
  let prevView = preview.querySelector('.highlight') as HTMLDivElement;

  if (fullscreen) {
    const previewFullscreen = fullscreen.querySelector(`li[class*="fullscreen-${orientation}"]`) as HTMLLIElement;
    const previewContainer = thisItem.parentElement ? Array.from(thisItem.parentElement.children).indexOf(thisItem) : (-1 as number);

    let prevSlide = previewFullscreen.classList[0] as string;
    let nextSlide = `fullscreen-${orientation}_${arabicToRoman(previewContainer + 1)}` as string;

    nextView.classList.replace('downplay', 'highlight');
    prevView.classList.replace('highlight', 'downplay');

    previewFullscreen.classList.replace(prevSlide, nextSlide);
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

  fullscreen: HTMLDivElement | null;
}
interface StyleProps {
  shade: '~dark~' | '~light~';
  image: string | Array<string>;
  size: '<h1>' | '<h4>' | '<p>' | Array<'<h1>' | '<h4>' | '<p>'>;
  view: 'top-cen' | 'mid-lef' | 'mid-cen' | 'mid-rig' | 'bot-cen';
  color: Array<string> | '(mono)' | '(red)' | '(green)' | '(blue)';
  align: '-top-' | '-rig-' | '-mid-' | '-cen-' | '-bot-' | '-lef-';
}

function findTags(pageName: string, blockName: string, labelName: string): ChainedElements {
  const menuType = 'select';
  const container = `${pageName}-${blockName}`;

  let controller = (document.querySelector(`#${container} menu[class="${labelName}-${blockName}_${menuType}-default"]`) ??
    document.querySelector(`#${pageName}-header menu[class="${labelName}-header_${menuType}-default"]`) ??
    document.querySelector(`#${pageName}-footer menu[class="${labelName}-footer_${menuType}-default"]`) ??
    document.querySelector(`#${pageName}-leftbar menu[class="${labelName}-leftbar_${menuType}-default"]`) ??
    document.querySelector(`#${pageName}-rightbar menu[class="${labelName}-rightbar_${menuType}-default"]`)) as HTMLMenuElement;

  let fullscreen = (document.querySelector(`#${container} div[class="${labelName}-${blockName}_fullscreen-default"]`) ??
    document.querySelector(`#${pageName}-main div[class="${labelName}-main_fullscreen-default"]`)) as HTMLDivElement | null;

  return {
    fullscreen,
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

  return `${viewClass[style.view][axis]}_${abbrShade(style.shade)}_mon`;
  // return `${viewClass[style.view][axis]}_${abbrShade(style.shade)}_${abbrColor(style.color)}`;
}
