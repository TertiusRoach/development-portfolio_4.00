//--|🠊 Main/ArchiveFunctions.ts 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { asynchObserve } from '../../../tools/synching';
import { arabicToRoman, stripBrackets } from '../../../tools/conversions';

async function startingPreview(
  element:
    | '(article)'
    | '(aside)'
    | '(button)'
    | '(division)'
    | '(figure)'
    | '(form)'
    | '(label)'
    | '(menu)'
    | '(navigation)'
    | '(section)'
    | '(table)'
    | '(time)',
  preview: number,
): Promise<void> {
  const labelName = stripBrackets(element, '()') as string;
  const containers = (await findTags(labelName)) as Array<HTMLLIElement>;
  if (containers.length < 2) {
    return;
  }
  const carousel = containers[1] as HTMLLIElement;
  const fullscreen = containers[0] as HTMLLIElement;

  carouselPreview(element, fullscreen);
  containerPreview(element, preview, labelName, carousel);
}

//--|🠋 Configure Preview 🠋|--\\
const containerPreview = (
  element:
    | '(article)'
    | '(aside)'
    | '(button)'
    | '(division)'
    | '(figure)'
    | '(form)'
    | '(label)'
    | '(menu)'
    | '(navigation)'
    | '(section)'
    | '(table)'
    | '(time)',
  preview: number,
  labelName: string,
  carousel: HTMLLIElement,
): void => {
  //--|🠋 Carousel: keeps the preview inside the slides (below I shows nothing, past the last shows the last), then swaps the numeral class 🠋|--\\
  let showSlide = preview as number;
  let slides = carousel.querySelector(`:scope > div[class="${labelName}-main_container"]`) as HTMLDivElement | null; //--|🠊 AI Code: Review Please 2026-11-09 13:08 🠈|--\\
  switch (true) {
    case !slides:
      console.log(`|🠊 Warning: ${element} has no ${labelName}-main_container, so its preview stays where it is 🠈|`); //--|🠊 AI Code: Review Please 2026-11-09 13:08 🠈|--\\
      return; //--|🠊 AI Code: Review Please 2026-11-09 13:08 🠈|--\\
    case preview === 0: //--|🠊 AI Code: Review Please 2026-11-09 13:33 · Deliberate: 0 shows nothing (O), no warning 🠈|--\\
      showSlide = 0 as number; //--|🠊 AI Code: Review Please 2026-11-09 13:33 🠈|--\\
      break; //--|🠊 AI Code: Review Please 2026-11-09 13:33 🠈|--\\
    case preview < 0: //--|🠊 AI Code: Review Please 2026-11-09 13:33 · Only a negative is a mistake now 🠈|--\\
      console.log(`|🠊 Warning: ${element} has no preview ${preview}, so nothing shows (O) 🠈|`);
      showSlide = 0 as number;
      break;
    case preview > (slides as HTMLDivElement).children.length: //--|🠊 AI Code: Review Please 2026-11-09 13:08 · Safe: !slides returned above 🠈|--\\
      showSlide = (slides as HTMLDivElement).children.length as number; //--|🠊 AI Code: Review Please 2026-11-09 13:08 🠈|--\\
      break;
    default:
      showSlide = preview as number;
  }

  let prevClass = carousel.className as string;
  let nextClass = `${carousel.className.split('_')[0]}_${arabicToRoman(showSlide as number)}` as string;

  carousel.classList.replace(prevClass, nextClass);
};
const carouselPreview = (
  element:
    | '(article)'
    | '(aside)'
    | '(button)'
    | '(division)'
    | '(figure)'
    | '(form)'
    | '(label)'
    | '(menu)'
    | '(navigation)'
    | '(section)'
    | '(table)'
    | '(time)',
  fullscreen: HTMLLIElement,
): void => {
  //--|🠋 Fullscreen: every element owns one page (article I … time XII), so the numeral class jumps to that element's page 🠋|--\\
  let prevClass: string;
  let nextClass: string;
  switch (element) {
    case '(article)':
      prevClass = fullscreen.className as string;
      nextClass = `${fullscreen.className.split('_')[0]}_${arabicToRoman(1)}` as string;
      break;
    case '(aside)':
      prevClass = fullscreen.className as string;
      nextClass = `${fullscreen.className.split('_')[0]}_${arabicToRoman(2)}` as string;
      break;
    case '(button)':
      prevClass = fullscreen.className as string;
      nextClass = `${fullscreen.className.split('_')[0]}_${arabicToRoman(3)}` as string;
      break;
    case '(division)':
      prevClass = fullscreen.className as string;
      nextClass = `${fullscreen.className.split('_')[0]}_${arabicToRoman(4)}` as string;
      break;
    case '(figure)':
      prevClass = fullscreen.className as string;
      nextClass = `${fullscreen.className.split('_')[0]}_${arabicToRoman(5)}` as string;
      break;
    case '(form)':
      prevClass = fullscreen.className as string;
      nextClass = `${fullscreen.className.split('_')[0]}_${arabicToRoman(6)}` as string;
      break;
    case '(label)':
      prevClass = fullscreen.className as string;
      nextClass = `${fullscreen.className.split('_')[0]}_${arabicToRoman(7)}` as string;
      break;
    case '(menu)':
      prevClass = fullscreen.className as string;
      nextClass = `${fullscreen.className.split('_')[0]}_${arabicToRoman(8)}` as string;
      break;
    case '(navigation)':
      prevClass = fullscreen.className as string;
      nextClass = `${fullscreen.className.split('_')[0]}_${arabicToRoman(9)}` as string;
      break;
    case '(section)':
      prevClass = fullscreen.className as string;
      nextClass = `${fullscreen.className.split('_')[0]}_${arabicToRoman(10)}` as string;
      break;
    case '(table)':
      prevClass = fullscreen.className as string;
      nextClass = `${fullscreen.className.split('_')[0]}_${arabicToRoman(11)}` as string;
      break;
    case '(time)':
      prevClass = fullscreen.className as string;
      nextClass = `${fullscreen.className.split('_')[0]}_${arabicToRoman(12)}` as string;
      break;
    default: //--|🠈 Move (default) up & down 🠈|--\\
      prevClass = fullscreen.className as string;
      nextClass = `${fullscreen.className.split('_')[0]}_${arabicToRoman(3)}` as string;
  }
  fullscreen.classList.replace(prevClass, nextClass);
};

//--|🠋 Load Tags 🠋|--\\
let findTags = async (labelName: string): Promise<Array<HTMLLIElement>> => {
  try {
    let fullscreen = (await asynchObserve(`#components-main div[class="elements-main_fullscreen-default"] > ol > li`)) as HTMLLIElement;
    let carousel = (await asynchObserve(
      `#components-main div[class="elements-main_fullscreen-default"] > ol > li div[class="${labelName}-main_fullscreen-default"] > ul > li`,
    )) as HTMLLIElement;
    return [fullscreen, carousel] as Array<HTMLLIElement>;
  } catch {
    console.log(`|🠊 Warning: ${labelName} never showed up in #components-main, so its preview stays where it is 🠈|`);
    return [] as Array<HTMLLIElement>;
  }
};

export default startingPreview;
