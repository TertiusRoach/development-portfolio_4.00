//--|🠊 Article_vocation.ts 🠈|--//
export function defineButton(
  button: 'established' | 'freelancing',
  info: { pageName: string; blockName: string }
) {
  const { blockName, pageName } = info;
  //--|🠋 Always Return an Object 🠋|--//
  switch (button) {
    case 'established':
      return {
        fontSize: '<h3>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-text-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        pageName: pageName as 'overtime',
        blockName: blockName as 'overlay',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/dccac1bf36f260bb9cf957b78c37166d51845388/source/assets/svg-files/overtime-page/role-established.svg',
      };
    case 'freelancing':
      return {
        fontSize: '<h3>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-text-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        pageName: pageName as 'overtime',
        blockName: blockName as 'overlay',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/dccac1bf36f260bb9cf957b78c37166d51845388/source/assets/svg-files/overtime-page/role-freelancing.svg',
      };
  }
}
