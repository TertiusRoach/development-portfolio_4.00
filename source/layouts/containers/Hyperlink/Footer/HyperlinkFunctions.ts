//--|🠊 Footer/HyperlinkFunctions.ts 🠈|--\\
import blockViews from '../../containers';
import { freezeToggle } from '../../../scripts/Footer';
export default function previewProfile(
  inputAction: 'enter' | 'click' | 'leave',
  thisItem: HTMLButtonElement,
  pageName: 'hyperlink',
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
  console.log(oppositeContainer);
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
      demoCard.style.opacity = '0';
      demoCard.style.filter = 'blur(8px)';
      demoCard.style.transition = 'filter 250ms, opacity 750ms';

      oppositeContainer.parentElement?.classList.replace(prevReset, nextReset);
      selectedContainer.parentElement?.classList.replace(prevSlide, nextSlide);
      break;
    case 'click':
      return selectCharacter(thisItem, pageName, blockName);
    case 'leave':
      demoCard.style.opacity = '1';
      demoCard.style.filter = 'blur(0)';
      demoCard.style.transition = 'filter 750ms, opacity 250ms';

      selectedContainer.parentElement?.classList.replace(prevSlide, nextReset);
      break;
  }
}
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
export function unfoldFooters(thisItem: HTMLElement) {
  if (Array.from(thisItem.classList).pop() !== 'expanded') {
    blockViews(thisItem, 'hyperlink', 'footer', 'unfolded');
    blockViews(thisItem, 'hyperlink', 'rightbar', 'unfolded');
  }
}
export function squareFooters(thisItem: HTMLElement) {
  const headerElement = document.querySelector(`#${thisItem.id}`) as HTMLElement;
  const rightbarElement = document.querySelector('#hyperlink-rightbar') as HTMLElement;
  switch (Array.from(thisItem.classList).pop()) {
    case 'unfolded':
      headerElement.className = `default-footer squaring`;
      rightbarElement.className = `default-rightbar collapsed`;
      break;
  }
}
export function freezeFooters(pageName: 'hyperlink', styleView: 'bot-rig') {
  switch (styleView) {
    case 'bot-rig':
      freezeToggle(pageName, 'footer');
      freezeToggle(pageName, 'rightbar');
      break;
  }
}
