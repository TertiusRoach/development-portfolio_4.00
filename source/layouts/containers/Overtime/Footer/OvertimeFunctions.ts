//--|🠊 Footer/OvertimeFunctions.ts 🠈|--\\
//--|🠋 Functions 🠋|--\\
import blockViews from '../../containers';
import { synchDemo } from '../../../tools/synching';
import { freezeContainer } from '../../../scripts/Head_Foot';

function previewProfile(
  inputAction: 'enter' | 'click' | 'leave',
  thisItem: HTMLButtonElement,
  pageName: 'overtime',
  blockName: 'footer',
  labelName: 'demo-left' | 'demo-right',
): void {
  const orientation: string = 'vertical';
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
export function unfoldFooters(thisItem: HTMLElement) {
  if (Array.from(thisItem.classList).pop() !== 'expanded') {
    blockViews(thisItem, 'overtime', 'footer', 'unfolded');
    blockViews(thisItem, 'overtime', 'rightbar', 'unfolded');
  }
}
//--|🠊 AI Code: Review Please 2026-11-05 🠈|--\\
export function expandFooters(thisItem: HTMLElement) {
  let rightbarElement = document.querySelector('#overtime-rightbar') as HTMLElement;
  thisItem.classList.remove('locked-footer'); //--|🠈 A deliberate tap wins over the unfold's lock 🠈|--\\
  rightbarElement.classList.remove('locked-rightbar');
  blockViews(thisItem, 'overtime', 'footer', 'expanded');
  blockViews(thisItem, 'overtime', 'rightbar', 'unfolded'); //--|🠈 The pair matches the page's load state 🠈|--\\
}
export function squareFooters(thisItem: HTMLElement) {
  const footerElement = document.querySelector(`#${thisItem.id}`) as HTMLElement;
  let rightbarElement = document.querySelector('#overtime-rightbar') as HTMLElement;
  switch (Array.from(thisItem.classList).pop()) {
    case 'unfolded':
      footerElement.className = `default-footer squaring`;
      rightbarElement.className = `default-rightbar collapsed`;
      break;
  }
}
export function freezeFooters(pageName: 'overtime', styleView: 'bot-rig') {
  switch (styleView) {
    case 'bot-rig':
      freezeContainer(pageName, 'footer');
      freezeContainer(pageName, 'rightbar');
      break;
  }
}
//--|===|--\\
const selectCharacter = (thisItem: HTMLElement, pageName: string, blockName: string): void => {
  console.log('Select Profile...');
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
