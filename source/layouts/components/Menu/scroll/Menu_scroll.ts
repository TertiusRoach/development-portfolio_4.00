//--|🠊 Menu_scroll.ts 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { arabicToRoman, romanToArabic } from '../../../../scripts';
/*--|🠋

🠉|--*/

interface ChainedElements {
  container: HTMLDivElement | null;
  controller: HTMLMenuElement | null;
}
const findTags = (pageName: string, blockName: string, labelName: string): ChainedElements => {
  return {
    container: document.querySelector(`#${pageName}-${blockName} div[class="${labelName}-${blockName}_container"]`),
    controller: document.querySelector(`#${pageName}-${blockName} menu[class="${labelName}-${blockName}_scroll-default"]`),
  };
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

export function revealButtons(pageName: string, blockName: string, labelName: string): void {
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
}
export function revealTitles(pageName: string, blockName: string, labelName: string): void {
  const container = findTags(pageName, blockName, labelName).container as HTMLDivElement;
  const controller = findTags(pageName, blockName, labelName).controller as HTMLMenuElement;

  let carouselPosition = container.parentElement?.classList[0].split('_')[1] as string;
  let controllerShowing = controller.querySelector('li[class*="showing-vertical"]') as HTMLLIElement;

  var viewPrev: string = controllerShowing.classList[0];
  var viewNext: string = `${controllerShowing.classList[0].split('_')[0]}_${carouselPosition}`;

  controllerShowing.classList.remove(viewPrev); //--|🠈 Step 1: Remove the class 🠈|--\\
  controllerShowing.classList.add(viewNext); //--|🠈 Step 2: Add the generated class 🠈|--\\
}

function previewControl(viewTask: 'view-prev' | 'view-next', pageName: string, blockName: string, labelName: string): void {
  switch (viewTask) {
    case 'view-prev':
      return viewPrev(pageName, blockName, labelName);
    case 'view-next':
      return viewNext(pageName, blockName, labelName);
  }
}
export function reloadButtons(pageName: string, blockName: string, labelName: string) {
  let timeout: ReturnType<typeof setTimeout>;
  const handleResize = (): void => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      revealButtons(pageName, blockName, labelName);
    }, 125);
  };

  window.addEventListener('resize', handleResize);

  return () => {
    clearTimeout(timeout);
    window.removeEventListener('resize', handleResize);
  };
}
export default previewControl;
