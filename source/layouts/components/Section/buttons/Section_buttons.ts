//--|🠊 Section_buttons.ts 🠈|--//
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

export function loadStyle(pageName: string): string | undefined {
  let result: string | undefined;
  setTimeout(() => {
    let viewLoad = document.querySelector(
      `#${pageName}-header .${pageName}-menu li[class*="load"] select`
    ) as HTMLSelectElement;
    switch (viewLoad?.value) {
      default:
        result = undefined;
        break;
      case '[default]':
        result = viewLoad.value as '[default]';
        break;
      case '[cleaned]':
        result = viewLoad.value as '[cleaned]';
        break;
    }
  }, 125);
  return result;
}
export function sizeDivs(pageName: string, blockName: string) {
  setTimeout(() => {
    const mainBlock = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
    const mainDivs = mainBlock.querySelectorAll('section div[class*="size"]') as NodeListOf<HTMLDivElement>;
    for (let i = 0; i < mainDivs.length; i++) {
      let mainDiv = mainDivs[i] as HTMLDivElement;
      mainDiv.style.width = `${mainBlock.offsetWidth}px`;
      mainDiv.style.height = `${mainBlock.offsetHeight}px`;
    }
  }, 125);
}
export function viewColor(pageName: string) {
  let viewColor = document.querySelector(
    `#${pageName}-header .${pageName}-menu li[class*="color"] select`
  ) as HTMLSelectElement;
  switch (viewColor.value) {
    case '(red)':
      return console.log(`${viewColor.value}`);
    case '(green)':
      return console.log(`${viewColor.value}`);
    case '(blue)':
      return console.log(`${viewColor.value}`);
    case '(mono)':
    default:
      return console.log(`${viewColor.value}`);
  }
}
