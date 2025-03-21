export function defineButton(
  button: 'track-day' | 'log-ticket' | 'find-link' | 'index-land',
  info: { blockName: string; pageName: string }
) {
  const { blockName, pageName } = info;
  let trackDay: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/6691771f5bc62c020bbd95c2ed67a4351f2d3546/source/assets/svg-files/trinity-apps/primary-light/track-a-day.svg';
  let logTicket: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/6691771f5bc62c020bbd95c2ed67a4351f2d3546/source/assets/svg-files/trinity-apps/primary-light/log-a-ticket.svg';
  let findLink: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/6691771f5bc62c020bbd95c2ed67a4351f2d3546/source/assets/svg-files/trinity-apps/primary-light/find-a-link.svg';

  //--|🠋 Always Return an Object 🠋|--//
  switch (button) {
    case 'index-land':
      return {
        fontSize: '<h5>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'center' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'overtime' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink: trackDay,
      };
    case 'track-day':
      return {
        fontSize: '<h5>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'left' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'overtime' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink: trackDay,
      };
    case 'log-ticket':
      return {
        fontSize: '<h5>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'left' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'ticketing' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink: logTicket,
      };
    case 'find-link':
      return {
        fontSize: '<h5>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'left' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'hyperlink' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink: findLink,
      };
  }
}
