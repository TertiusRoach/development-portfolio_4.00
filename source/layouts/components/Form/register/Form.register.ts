export function showDemos(pageName: 'landing' | string) {
  let closeRegister = document.querySelector('.register-close') as HTMLElement;
  let header = document.querySelector(`#${pageName}-header`) as HTMLElement;

  if (closeRegister && header) {
    var closeClick = () => {
      header.classList.toggle('expanded'); // Toggle '.expanded'
      header.classList.remove('collapsed'); // Remove '.collapsed'
    };

    closeRegister.addEventListener('click', closeClick);
    return () => closeRegister.removeEventListener('click', closeClick);
  }
}
export function defineButton(
  button: 'observe' | 'generate' | 'register' | 'login' | 'password',
  info: { blockName: string; pageName: string }
) {
  const { blockName, pageName } = info;
  //--|🠋 Always Return an Object 🠋|--//
  switch (button) {
    case 'register':
      return {
        fontSize: '<h3>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'text' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'light' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'overtime' as 'landing',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/95cb0b63850941f4de8b0d021e44f529819fe627/source/assets/svg-files/landing-page/user-plus.svg',
      };
    case 'login':
      return {
        fontSize: '<h6>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'left' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'overtime' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/95cb0b63850941f4de8b0d021e44f529819fe627/source/assets/svg-files/landing-page/sign-in-alt.svg',
      };
    case 'password':
      return {
        fontSize: '<h6>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'right' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'overtime' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/95cb0b63850941f4de8b0d021e44f529819fe627/source/assets/svg-files/landing-page/user-lock.svg',
      };
    case 'observe':
      return {
        fontSize: '<p>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'icon' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'light' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'overtime' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/6e8c50fc3d2d3a45cee89b33a4a81d8685a2888b/source/assets/svg-files/landing-page/eye.svg',
      };
    case 'generate':
      return {
        fontSize: '<p>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'icon' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'light' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'overtime' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/6e8c50fc3d2d3a45cee89b33a4a81d8685a2888b/source/assets/svg-files/landing-page/sync-alt.svg',
      };
  }
}
