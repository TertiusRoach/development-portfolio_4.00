//--|🠊 Navigation_overtime.ts 🠈|--//
export function defineButton(
  button: '<leftbar>' | '<rightbar>',
  info: { pageName: string; blockName: string }
) {
  const { pageName, blockName } = info;
  //--|🠋 Always Return an Object 🠋|--//
  switch (button) {
    case '<leftbar>':
      return {
        fontSize: '<h4>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-icon-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: stripBrackets(button, '<>'),
        blockName: blockName as 'leftbar',
        pageName: pageName as 'overtime',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/f0b97f9709d41ba1eb26604b703de11c10b4e4ac/source/assets/svg-files/overtime-page/close-leftbar.svg',
      };
    case '<rightbar>':
      return {
        fontSize: '<h4>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-icon-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: stripBrackets(button, '<>'),
        blockName: blockName as 'rightbar',
        pageName: pageName as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/f0b97f9709d41ba1eb26604b703de11c10b4e4ac/source/assets/svg-files/overtime-page/close-rightbar.svg',
      };
  }
}

export function stripBrackets(blockName: string, stripType: '<>' | '()'): string {
  switch (stripType) {
    case '<>':
      return blockName.replace(/[<>]/g, '');
    case '()':
      return blockName.replace(/[()]/g, '');
  }
}
