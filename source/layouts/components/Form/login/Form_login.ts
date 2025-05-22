//--|🠊 Form_login.ts 🠈|--//
export function defineButton(
  button: 'observe' | 'register' | 'login' | 'password',
  info: { blockName: string; pageName: string }
) {
  const { blockName, pageName } = info;

  const portrait =
    window.innerWidth < 768 && window.matchMedia('(orientation: portrait)').matches;
  const landscape =
    window.innerHeight < 768 && window.matchMedia('(orientation: landscape)').matches;

  let layoutView: '-left-' | '-right-' | '-center-' | '-icon-' | '-text-';
  let fontSize: '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>';

  //--|🠋 Always Return an Object 🠋|--//
  switch (button) {
    case 'login':
    default:
      return {
        fontSize: '<h3>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-text-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'light' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'ticketing' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/95cb0b63850941f4de8b0d021e44f529819fe627/source/assets/svg-files/landing-page/sign-in-alt.svg',
      };
    case 'register':
      if (landscape === true || portrait === true) {
        fontSize = '<p>';
        layoutView = '-icon-';
      } else {
        fontSize = '<h6>';
        layoutView = '-left-';
      }
      return {
        fontSize: fontSize as '<h6>' | '<p>',
        layoutView: layoutView as '-left-' | '-icon-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'ticketing' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/95cb0b63850941f4de8b0d021e44f529819fe627/source/assets/svg-files/landing-page/user-plus.svg',
      };
    case 'password':
      if (landscape === true || portrait === true) {
        fontSize = '<p>';
        layoutView = '-icon-';
      } else {
        fontSize = '<h6>';
        layoutView = '-right-';
      }
      return {
        fontSize: fontSize as '<h6>' | '<p>',
        layoutView: layoutView as '-right-' | '-icon-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'ticketing' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/95cb0b63850941f4de8b0d021e44f529819fe627/source/assets/svg-files/landing-page/user-lock.svg',
      };
    case 'observe':
      return {
        fontSize: '<p>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-icon-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'light' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'ticketing' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/6e8c50fc3d2d3a45cee89b33a4a81d8685a2888b/source/assets/svg-files/landing-page/eye.svg',
      };
  }
}
