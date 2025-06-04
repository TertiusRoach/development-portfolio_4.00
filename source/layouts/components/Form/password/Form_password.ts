//--|🠊 Form_password.ts 🠈|--//
export function defineButton(button: 'register' | 'login' | 'password', info: { blockName: string; pageName: string }) {
  const { blockName, pageName } = info;
  //--|🠋 Always Return an Object 🠋|--//
  const portrait = window.innerWidth < 768 && window.matchMedia('(orientation: portrait)').matches;
  const landscape = window.innerHeight < 768 && window.matchMedia('(orientation: landscape)').matches;

  let layoutView: '-left-' | '-right-' | '-center-' | '-icon-' | '-text-';
  let fontSize: '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>';
  switch (button) {
    case 'login':
      if (landscape === true || portrait === true) {
        fontSize = '<p>';
        layoutView = '-icon-';
      } else {
        fontSize = '<h6>';
        layoutView = '-right-';
      }
      return {
        fontSize: fontSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: layoutView as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'hyperlink' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/95cb0b63850941f4de8b0d021e44f529819fe627/source/assets/svg-files/landing-page/sign-in-alt.svg',
      };
    case 'register':
      if (landscape === true || portrait === true) {
        fontSize = '<p>';
        layoutView = '-icon-';
      } else {
        fontSize = '<h6>';
        layoutView = '-right-';
      }
      return {
        fontSize: fontSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: layoutView as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'hyperlink' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/95cb0b63850941f4de8b0d021e44f529819fe627/source/assets/svg-files/landing-page/user-plus.svg',
      };
    case 'password':
    default:
      return {
        fontSize: '<h3>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-text-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'light' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'hyperlink' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/95cb0b63850941f4de8b0d021e44f529819fe627/source/assets/svg-files/landing-page/user-lock.svg',
      };
  }
}
export function showDemos(pageName: 'landing' | string) {
  let closePassword = document.querySelector('.password-close') as HTMLElement;
  let header = document.querySelector(`#${pageName}-header`) as HTMLElement;

  if (closePassword && header) {
    var closeClick = () => {
      header.classList.toggle('expanded'); // Toggle '.expanded'
      header.classList.remove('collapsed'); // Remove '.collapsed'
    };

    closePassword.addEventListener('click', closeClick);
    return () => closePassword.removeEventListener('click', closeClick);
  }
}
