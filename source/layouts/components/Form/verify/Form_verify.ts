//--|🠊 Form_verify.ts 🠈|--//
export function closeLeftbar(pageName: 'landing' | string) {
  let leftbar = document.querySelector(`#${pageName}-leftbar`) as HTMLElement;
  if (leftbar.classList.contains('expanded')) {
    leftbar.classList.remove('expanded'); //--|🠈 Remove '.expanded' 🠈|--//
    leftbar.classList.toggle('collapsed'); //--|🠈 Toggle '.collapsed' 🠈|--//
  }
}
export function defineButton(button: 'verify' | 'close', info: { blockName: string; pageName: string }) {
  const { blockName, pageName } = info;
  //--|🠋 Always Return an Object 🠋|--//
  const tabletSquare = window.innerWidth < 400 && window.matchMedia('(orientation: portrait)').matches;
  switch (button) {
    case 'verify':
      return {
        fontSize: '<h3>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'text' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'light' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'landing' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/91a25e4fa1bea9a24a757fad615acb2b7da41fc0/source/assets/svg-files/landing-page/key.svg',
      };
    case 'close':
      return {
        fontSize: '<p>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'icon' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'landing' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d96e3df748dac85a20c559b47659c1a3763a5fe/source/assets/svg-files/index-page/close/close-light.svg',
      };
  }
}
export function getCode(formName: 'verify' | 'reset') {
  let blockOne = document.querySelector(`.${formName}-inputs fieldset .digit-1`) as HTMLInputElement;
  let blockTwo = document.querySelector(`.${formName}-inputs fieldset .digit-2`) as HTMLInputElement;
  let blockThree = document.querySelector(`.${formName}-inputs fieldset .digit-3`) as HTMLInputElement;
  let blockFour = document.querySelector(`.${formName}-inputs fieldset .digit-4`) as HTMLInputElement;

  return `${blockOne.value}${blockTwo.value}${blockThree.value}${blockFour.value}`;
}
