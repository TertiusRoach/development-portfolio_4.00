//--|🠊 Header/OvertimeFunctions.ts 🠈|--\\
import blockViews from '../../containers';
import { freezeToggle } from '../../../scripts/Header';

export default function designateCharacter(inputAction: 'enter' | 'click', thisItem: HTMLButtonElement, pageName: string, blockName: string): void {
  switch (inputAction) {
    case 'enter':
      return previewProfile(thisItem, pageName, blockName);
    case 'click':
      return selectProfile(thisItem, pageName, blockName);
  }
}
const previewProfile = (thisItem: HTMLButtonElement, pageName: string, blockName: string): void => {
  const character = thisItem.querySelector('.icon img') as HTMLImageElement;
  const carousel = document.querySelector(
    `#${pageName}-${blockName} figure[class=${blockName}-midground] li[class*="carousel-horizontal"]`,
  ) as HTMLLIElement;

  let prevSlide = carousel.className as string;
  let characterProfile = character.src.split('/').pop()?.split('.')[0] as string;
  let nextSlide = `${prevSlide.split('_')[0]}_${sequencedCharacters(characterProfile)}` as string;

  carousel.classList.replace(prevSlide, nextSlide);
};
const selectProfile = (thisItem: HTMLElement, pageName: string, blockName: string): void => {
  console.log('Select Profile...');
};
let sequencedCharacters = (profile: string): string => {
  switch (profile) {
    default:
    case 'randomize-character':
      return 'I';
    case 'jane-lester':
      return 'II';
    case 'malik-tremaine-carter':
      return 'III';
    case 'dimitri-lewis':
      return 'IV';
    case 'dale-sutton':
      return 'V';
    case 'alaric-voss':
      return 'VI';
    case 'conrad-guy':
      return 'VII';
    case 'daniel-meyers':
      return 'VIII';
    case 'kady-deacon':
      return 'IX';
    case 'seamus-odonnell':
      return 'X';
    case 'hammad-dean':
      return 'XI';
    case 'tasneem-kemp':
      return 'XII';
    case 'elliot-crane':
      return 'XIII';
    case 'sipho-dlamini':
      return 'XIV';
    case 'zuberi-thorne':
      return 'XV';
    case 'nyra-solari':
      return 'XVI';
    case 'victor-langston':
      return 'XVII';
    case 'danish-copeland':
      return 'XVIII';
    case 'aelin-darrow':
      return 'XIX';
  }
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
