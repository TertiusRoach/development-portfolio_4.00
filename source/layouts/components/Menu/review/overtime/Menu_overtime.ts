//--|🠊 Menu_overtime.ts 🠈|--//
export function defineButton(button: 'header' | string, info: { pageName: string; blockName: string }) {
  const { pageName, blockName } = info;

  //--|🠋 Always Return an Object 🠋|--//
  switch (button) {
    case 'header':
      return {
        fontSize: '<h4>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-icon-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button as 'header',
        blockName: blockName as 'header',
        pageName: pageName as 'overtime',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/bceb9b5c3c0d1fb7db1578aa69cd781471337a19/source/assets/svg-files/overtime-page/eye.svg',
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
