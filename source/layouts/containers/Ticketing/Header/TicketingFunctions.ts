//--|🠊 Header/TicketingFunctions.ts 🠈|--\\
//--|🠋 Functions 🠋|--\\
import blockViews from '../../containers';
import { synchDemo } from '../../../tools/synching';
import { freezeContainer } from '../../../scripts/Head_Foot';

function previewProfile(
  inputAction: 'enter' | 'click' | 'leave',
  thisItem: HTMLButtonElement,
  pageName: 'ticketing',
  blockName: 'header',
  labelName: 'demo-left' | 'demo-right',
): void {
  const orientation: string = 'horizontal';
  const character = thisItem.querySelector('.icon img') as HTMLImageElement;

  const selectedContainer = document.querySelector(
    `#${pageName}-${blockName} figure[class=${blockName}-midground] li[class*="sweeping-${orientation}"] div[class*="${labelName}"]`,
  ) as HTMLDivElement;
  const oppositeContainer = document.querySelector(
    `#${pageName}-${blockName} figure[class=${blockName}-midground] li[class*="sweeping-${orientation}"] div[class*="${labelName === 'demo-left' ? 'demo-right' : 'demo-left'}"]`,
  ) as HTMLDivElement;
  const demoCard = document.querySelector(
    `#${pageName}-${blockName} figure[class=${blockName}-midground] section[class*="demonstration"]`,
  ) as HTMLElement;

  let prevReset = oppositeContainer.parentElement?.className as string;
  let prevSlide = selectedContainer.parentElement?.className as string;

  let characterProfile: string;
  if (thisItem.className.includes('profile')) {
    characterProfile = character.src.split('/').pop()?.split('.')[0] as string;
  } else {
    characterProfile = 'randomize-character';
  }

  let nextReset = `sweeping-${orientation}_O` as string;
  let nextSlide = `${prevSlide.split('_')[0]}_${sequencedDemonstration(characterProfile)}` as string;

  switch (inputAction) {
    case 'enter':
      demoCard.classList.add('conceal');

      oppositeContainer.parentElement?.classList.replace(prevReset, nextReset);
      selectedContainer.parentElement?.classList.replace(prevSlide, nextSlide);
      break;
    case 'click':
      synchDemo(pageName, blockName, inputAction as 'click');
      //--|===|--\\
      return selectCharacter(thisItem, pageName, blockName);
    case 'leave':
      demoCard.classList.remove('conceal');

      selectedContainer.parentElement?.classList.replace(prevSlide, nextReset);
      break;
  }
}
//--|🠋 Container States 🠋|--\\
export function unfoldHeaders(thisItem: HTMLElement) {
  if (Array.from(thisItem.classList).pop() !== 'expanded') {
    blockViews(thisItem, 'ticketing', 'header', 'unfolded');
    blockViews(thisItem, 'ticketing', 'leftbar', 'unfolded');
  }
}
//--|🠊 AI Code: Review Please 2026-11-05 🠈|--\\
export function expandHeaders(thisItem: HTMLElement) {
  let leftbarElement = document.querySelector('#ticketing-leftbar') as HTMLElement;
  thisItem.classList.remove('locked-header'); //--|🠈 A deliberate click wins over the hover's lock 🠈|--\\
  leftbarElement.classList.remove('locked-leftbar');
  blockViews(thisItem, 'ticketing', 'header', 'expanded');
  blockViews(thisItem, 'ticketing', 'leftbar', 'unfolded'); //--|🠈 The pair matches the page's load state 🠈|--\\
}
//--|🠊 AI Code: Review Please 2026-11-08 🠈|--\\
export function squareHeaders(thisItem: HTMLElement) {
  let leftbarElement = document.querySelector('#ticketing-leftbar') as HTMLElement;
  switch (Array.from(thisItem.classList).pop()) {
    case 'unfolded':
      thisItem.classList.remove('locked-header'); //--|🠈 A deliberate leave wins over the hover's lock 🠈|--\\
      leftbarElement.classList.remove('locked-leftbar');
      blockViews(thisItem, 'ticketing', 'header', 'squaring');
      blockViews(thisItem, 'ticketing', 'leftbar', 'collapsed');
      break;
  }
}
export function freezeHeaders(pageName: 'ticketing', styleView: 'top-lef') {
  switch (styleView) {
    case 'top-lef':
      freezeContainer(pageName, 'header');
      freezeContainer(pageName, 'leftbar');
      break;
  }
}
//--|===|--\\
const selectCharacter = (_thisItem: HTMLElement, pageName: string, blockName: string): void => {
  console.log(`//--|🠊 Select Profile: #${pageName}-${blockName} 🠈|--\\\\`); //--|🠈 AI Code: Review Please 2026-11-12 · Was 'Select Profile...' 🠈|--\\
};
let sequencedDemonstration = (profile: string): string => {
  switch (profile) {
    case 'jane-lester':
    case 'hammad-dean':
      return 'I';
    case 'malik-tremaine-carter':
    case 'tasneem-kemp':
      return 'II';
    case 'dimitri-lewis':
    case 'elliot-crane':
      return 'III';
    case 'dale-sutton':
    case 'sipho-dlamini':
      return 'IV';
    case 'alaric-voss':
    case 'zuberi-thorne':
      return 'V';
    case 'conrad-guy':
    case 'nyra-solari':
      return 'VI';
    case 'daniel-meyers':
    case 'victor-langston':
      return 'VII';
    case 'kady-deacon':
    case 'danish-copeland':
      return 'VIII';
    case 'seamus-odonnell':
    case 'aelin-darrow':
      return 'IX';
    default:
    case 'randomize-character':
      return 'X';
  }
};
//--|===|--\\
export default previewProfile;
