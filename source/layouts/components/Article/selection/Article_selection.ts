export function defineButton(
  button: 'track-day' | 'log-ticket' | 'find-link',
  info: { blockName: string; pageName: string }
) {
  const { blockName, pageName } = info;
  //--|🠋 Always Return an Object 🠋|--//
  switch (button) {
    case 'track-day':
      return {
        fontSize: '<h3>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'center' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'overtime' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink: '',
      };
    case 'log-ticket':
      return {
        fontSize: '<h3>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'center' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'ticketing' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink: '',
      };
    case 'find-link':
      return {
        fontSize: '<h3>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'center' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'hyperlink' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink: '',
      };
  }
}
