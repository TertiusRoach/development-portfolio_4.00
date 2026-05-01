//--|🠊 Section_launch.ts 🠈|--//
export function defineButton(
  button: 'track-day' | 'log-ticket' | 'find-link',
  info: { blockName: string; pageName: string }
) {
  const { blockName, pageName } = info;
  //--|🠋 Always Return an Object 🠋|--//
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
}

export function animateGrid(
  action: 'highlight' | 'downplay',
  division: 'overtime' | 'ticketing' | 'hyperlink',
  pageName: 'landing' | string
) {
  const element = document.querySelector(`#${pageName}-${division}`) as HTMLElement;
  switch (action) {
    case 'highlight':
      if (element.classList.contains('downplay')) {
        element.classList.remove('downplay'); //--|🠈 Remove '.downplay' 🠈|--//
        element.classList.toggle('highlight'); //--|🠈 Toggle '.highlight' 🠈|--//
      }
      break;
    case 'downplay':
      if (element.classList.contains('highlight')) {
        element.classList.remove('highlight'); //--|🠈 Remove '.highlight' 🠈|--//
        element.classList.toggle('downplay'); //--|🠈 Toggle '.downplay' 🠈|--//
      }
      break;
  }
}
