//--|🠊 Navigation_preview.ts 🠈|--//
export function defineButton(
  button: 'preview',
  info: { blockName: string; pageName: string }
) {
  const { blockName, pageName } = info;
  //--|🠋 Always Return an Object 🠋|--//
  switch (button) {
    case 'preview':
      return {
        fontSize: '<h4>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-icon-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'light' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'header',
        pageName: pageName as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/bceb9b5c3c0d1fb7db1578aa69cd781471337a19/source/assets/svg-files/overtime-page/eye.svg',
      };
  }
}

export function toggleHeader(pageName: 'overtime' | 'ticketing' | 'hyperlink') {
  const element = document.querySelector(`#${pageName}-header`) as HTMLElement;
  if (element.classList.contains('collapsed')) {
    element.classList.remove('collapsed'); //--|🠈 Remove '.collapsed' 🠈|--//
    element.classList.toggle('expanded'); //--|🠈 Toggle '.expanded' 🠈|--//
  } else if (element.classList.contains('expanded')) {
    element.classList.toggle('collapsed'); //--|🠈 Toggle '.collapsed' 🠈|--//
    element.classList.remove('expanded'); //--|🠈 Remove '.expanded' 🠈|--//
  }
}
