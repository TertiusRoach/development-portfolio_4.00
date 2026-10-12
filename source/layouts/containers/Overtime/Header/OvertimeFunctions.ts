//--|🠊 Header/OvertimeFunctions.ts 🠈|--\\
import blockViews from '../../containers';
import { freezeToggle } from '../../../scripts/Header';

export default function designateCharacter(
  inputAction: 'enter' | 'click',
  thisItem: HTMLButtonElement,
  pageName: 'overtime',
  blockName: 'header',
  labelName: 'demo-left' | 'demo-right',
): void {
  switch (inputAction) {
    case 'enter':
      return previewProfile(thisItem, pageName, blockName, labelName);
    case 'click':
      return selectProfile(thisItem, pageName, blockName);
  }
}
const previewProfile = (thisItem: HTMLButtonElement, pageName: string, blockName: string, labelName: 'demo-left' | 'demo-right'): void => {
  const orientation: string = 'horizontal';
  const character = thisItem.querySelector('.icon img') as HTMLImageElement;

  const selectedContainer = document.querySelector(
    `#${pageName}-${blockName} figure[class=${blockName}-midground] li[class*="sweeping-${orientation}"] div[class*="${labelName}"]`,
  ) as HTMLDivElement;
  const oppositeContainer = document.querySelector(
    `#${pageName}-${blockName} figure[class=${blockName}-midground] li[class*="sweeping-${orientation}"] div[class*="${labelName === 'demo-left' ? 'demo-right' : 'demo-left'}"]`,
  ) as HTMLDivElement;

  let prevReset = oppositeContainer.parentElement?.className as string;
  let prevSlide = selectedContainer.parentElement?.className as string;

  let characterProfile = character.src.split('/').pop()?.split('.')[0] as string;

  let nextReset = 'sweeping-horizontal_O' as string;
  let nextSlide = `${prevSlide.split('_')[0]}_${sequencedCharacters(characterProfile)}` as string;

  oppositeContainer.parentElement?.classList.replace(prevReset, nextReset);
  selectedContainer.parentElement?.classList.replace(prevSlide, nextSlide);

  const randomize = document.querySelector(`#${pageName}-${blockName} figure div[class*="randomize-character"]`) as HTMLDivElement;

  randomize.classList.replace('highlight', 'downplay');
  console.log();
};
const selectProfile = (thisItem: HTMLElement, pageName: string, blockName: string): void => {
  console.log('Select Profile...');
};
let sequencedCharacters = (profile: string): string => {
  switch (profile) {
    default:
    case 'randomize-character':
      return 'O';
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
  }
};

export let randomizeCharacter = (vocation: 'established' | 'freelancing') => {
  console.log(vocation);
};
//--|===|--\\
export function freezeHeaders(pageName: 'overtime', styleView: 'top-lef') {
  switch (styleView) {
    case 'top-lef':
      freezeToggle(pageName, 'header');
      freezeToggle(pageName, 'leftbar');
      break;
  }
}
export function unfoldHeaders(thisItem: HTMLElement) {
  if (Array.from(thisItem.classList).pop() !== 'expanded') {
    blockViews(thisItem, 'overtime', 'header', 'unfolded');
    blockViews(thisItem, 'overtime', 'leftbar', 'unfolded');
  }
}
export function squareHeaders(thisItem: HTMLElement) {
  const headerElement = document.querySelector(`#${thisItem.id}`) as HTMLElement;
  const leftbarElement = document.querySelector('#overtime-leftbar') as HTMLElement;
  switch (Array.from(thisItem.classList).pop()) {
    case 'unfolded':
      headerElement.className = `default-header squaring`;
      leftbarElement.className = `default-leftbar collapsed`;
      break;
  }
}

//--|===|--\\
