//--|🠊 Section_features.ts 🠈|--//
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
        layoutView: 'text' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'overtime' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink: '',
      };
    case 'log-ticket':
      return {
        fontSize: '<h1>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'text' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'ticketing' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink: '',
      };
    case 'find-link':
      return {
        fontSize: '<h1>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'text' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'hyperlink' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink: '',
      };
  }
}

export function togglePreview(
  // action: 'highlight' | 'downplay',
  division: 'overtime' | 'ticketing' | 'hyperlink',
  pageName: 'overtime' | 'ticketing' | 'hyperlink' | string
) {
  const element = document.querySelector(`#${pageName}-header section .preview-${division}`) as HTMLElement;
  if (!(element instanceof HTMLElement)) return;

  switch (true) {
    case element.classList.contains('highlight'):
      element.classList.remove('highlight'); //--|🠈 Remove '.highlight' 🠈|--//
      return element.classList.toggle('downplay'); //--|🠈 Toggle '.downplay' 🠈|--//
    case element.classList.contains('downplay'):
      element.classList.remove('downplay'); //--|🠈 Remove '.downplay' 🠈|--//
      return element.classList.toggle('highlight'); //--|🠈 Toggle '.highlight' 🠈|--//
    default:
      return element.classList.toggle('highlight'); //--|🠈 Default to highlight if neither class exists 🠈|--//
  }
}
