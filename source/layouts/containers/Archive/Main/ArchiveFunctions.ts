//--|🠊 Main/ArchiveFunctions.ts 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { arabicToRoman, stripBrackets } from '../../../tools/conversions';
import { asynchObserve } from '../../../tools/synching'; //--|🠊 AI Code: Review Please 2026-11-09 10:54 🠈|--\\

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
  //--|🠊 AI Code: Review Please 2026-11-09 10:54 · Each <li> is reached through its known parent, and waits until it exists 🠈|--\\
  const labelName = stripBrackets(element, '()') as string;
  let fullscreen = null as HTMLLIElement | null;
  let carousel = null as HTMLLIElement | null;
  try {
    fullscreen = (await asynchObserve(`#components-main div[class="elements-main_fullscreen-default"] > ol > li`)) as HTMLLIElement;
    carousel = (await asynchObserve(
      `#components-main div[class="elements-main_fullscreen-default"] > ol > li div[class="${labelName}-main_fullscreen-default"] > ul > li`,
    )) as HTMLLIElement;
  } catch {
    console.log(`|🠊 Warning: ${element} never showed up in #components-main, so its preview stays where it is 🠈|`); //--|🠊 AI Code: Review Please 2026-11-09 11:12 🠈|--\\
    return;
  }
  const slides = carousel.querySelector(`:scope > div[class="${labelName}-main_container"]`) as HTMLDivElement;

  //--|===|--\\

  //--|🠊 AI Code: Review Please 2026-11-09 11:30 · Below the first slide shows nothing (O), past the last shows the last 🠈|--\\
  let showSlide = preview as number;
  switch (true) {
    case preview < 1:
      console.log(`|🠊 Warning: ${element} has no preview ${preview}, so nothing shows (O) 🠈|`);
      showSlide = 0 as number;
      break;
    case preview > slides.children.length:
      showSlide = slides.children.length as number;
      break;
    default:
      showSlide = preview as number;
  }
  let prevClass = carousel.className as string;
  let nextClass = `${carousel.className.split('_')[0]}_${arabicToRoman(showSlide as number)}` as string;

  carousel.classList.replace(prevClass, nextClass);
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
}

export default startingPreview;
