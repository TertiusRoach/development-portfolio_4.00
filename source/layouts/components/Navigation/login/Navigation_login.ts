//--|🠊 Navigation_password.ts 🠈|--//
export function defineButton(button: 'demo', info: { blockName: string; pageName: string }) {
  const { blockName, pageName } = info;
  //--|🠋 Always Return an Object 🠋|--//
  switch (button) {
    case 'demo':
      return {
        fontSize: '<h4>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'icon' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'medium' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'ticketing' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/091d2513027e60e4346e3c2e02160c50474a90ad/source/assets/svg-files/landing-page/laptop.svg',
      };
  }
}
export function showDemos(pageName: 'landing' | string) {
  let overlay = document.querySelector(`#${pageName}-overlay`) as HTMLElement;
  if (!overlay) return;

  overlay.classList.toggle('visible');
  overlay.style.removeProperty('display');
  setTimeout(() => {
    overlay.classList.remove('hidden');
  }, 250);
}
