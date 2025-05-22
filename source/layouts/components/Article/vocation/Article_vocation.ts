//--|🠊 Article_vocation.ts 🠈|--//
export function defineButton(
  button: 'established' | 'freelancing',
  info: { pageName: string; blockName: string }
) {
  const { blockName, pageName } = info;

  const toggleFont = () => {
    let portrait = window.matchMedia('(orientation: portrait)').matches;
    let landscape = window.matchMedia('(orientation: landscape)').matches;
    if (landscape) {
      if (window.innerHeight < 360) {
        return '<p>'; //--|🠈 Landscape < 360px (Less than) 🠈|--//
      } else if (window.innerHeight < 480) {
        return '<h5>'; //--|🠈 Landscape < 480px (Less than) 🠈|--//
      } else if (window.innerHeight < 768) {
        return '<h4>'; //--|🠈 Landscape < 768px (Less than) 🠈|--//
      } else {
        return '<h3>'; //--|🠈 Landscape > 768px (Larger than) 🠈|--//
      }
    } else if (portrait) {
      if (window.innerWidth < 360) {
        return '<p>'; //--|🠈 Portrait < 360px (Less than) 🠈|--//
      } else if (window.innerWidth < 480) {
        return '<h5>'; //--|🠈 Portrait < 480px (Less than) 🠈|--//
      } else if (window.innerWidth < 768) {
        return '<h4>'; //--|🠈 Portrait < 768px (Less than) 🠈|--//
      } else {
        return '<h3>'; //--|🠈 Portrait > 768px (Larger than) 🠈|--//
      }
    }
  };

  //--|🠋 Always Return an Object 🠋|--//
  switch (button) {
    case 'established':
      return {
        fontSize: toggleFont() as
          | '<h1>'
          | '<h2>'
          | '<h3>'
          | '<h4>'
          | '<h5>'
          | '<h6>'
          | '<p>',
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
        fontSize: toggleFont() as
          | '<h1>'
          | '<h2>'
          | '<h3>'
          | '<h4>'
          | '<h5>'
          | '<h6>'
          | '<p>',
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
