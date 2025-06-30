//--|🠊 Section_buttons.ts 🠈|--//
import { stripBrackets } from '../../../scripts/buttons';
export function defineButton(info: { pageName: string; blockName: string }) {
  const { pageName, blockName } = info;
  //--|🠋 Always Return an Object 🠋|--//
  /*
  switch(pageName){
    
  }
  */
  /*
  switch (button) {
    case 'track-day':
      return {
        fontSize: '<h1>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-text-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'overtime' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink: '',
      };
    case 'log-ticket':
      return {
        fontSize: '<h1>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-text-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'ticketing' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink: '',
      };
    case 'find-link':
      return {
        fontSize: '<h1>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-text-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'hyperlink' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink: '',
      };
  }
  */
}

export function classShade(specShade: '~dark~' | '~medium~' | '~light~') {
  switch (specShade) {
    case '~dark~':
      return 'dar';
    case '~medium~':
      return 'med';
    case '~light~':
      return 'lig';
    default:
      return null;
  }
}
export function classLoad(pageName: string): '[default]' | '[cleaned]' | string {
  const viewLoad = document.querySelector(
    `#${stripBrackets(pageName, '[]')}-header .buttons-menu li[class*="load"] select`
  ) as HTMLSelectElement | null;

  if (!viewLoad) {
    return '[default]';
  }

  switch (viewLoad.value) {
    case 'cleaned':
      return '[cleaned]';
    default:
      return '[default]';
  }
}
export function sizeDivs(pageName: string, blockName: string) {
  const mainBlock = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  const mainDivs = mainBlock.querySelectorAll('section div[class*="size"]') as NodeListOf<HTMLDivElement>;
  for (let i = 0; i < mainDivs.length; i++) {
    let mainDiv = mainDivs[i] as HTMLDivElement;
    mainDiv.style.width = `${mainBlock.offsetWidth}px`;
    mainDiv.style.height = `${mainBlock.offsetHeight}px`;
  }
}
export function viewColor(pageName: string) {
  const viewColor = document.querySelector(
    `#${pageName}-header .buttons-menu li[class*="color"] select`
  ) as HTMLSelectElement;
  switch (viewColor.value) {
    case 'mono-color':
      return console.log(`${viewColor.value}`);
    case 'red-color':
      return console.log(`${viewColor.value}`);
    case 'green-color':
      return console.log(`${viewColor.value}`);
    case 'blue-color':
      return console.log(`${viewColor.value}`);
    default:
      return console.log(`${viewColor.value}`);
  }
}
