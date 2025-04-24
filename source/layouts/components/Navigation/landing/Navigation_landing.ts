//--|🠊 Navigation_landing.ts 🠈|--//
export function defineButton(
  button: 'demo',
  form: 'register' | 'login' | 'password',
  info: { blockName: string; pageName: string }
) {
  const { blockName, pageName } = info;

  const toggleColor = (form: 'register' | 'login' | 'password') => {
    if (form === 'register') {
      return 'overtime';
    } else if (form === 'login') {
      return 'ticketing';
    } else if (form === 'password') {
      return 'hyperlink';
    }
  };
  const toggleImage = () => {
    const portrait = window.matchMedia('(orientation: portrait)').matches;
    const landscape = window.matchMedia('(orientation: landscape)').matches;

    if (landscape === true) {
      return 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/5b4f05101faa950cc42bccad844732e5336af955/source/assets/svg-files/landing-page/laptop.svg';
    } else if (portrait === true) {
      return 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/5b4f05101faa950cc42bccad844732e5336af955/source/assets/svg-files/landing-page/mobile-alt.svg';
    }
  };
  const toggleFont = () => {
    const portrait = window.innerWidth < 768 && window.matchMedia('(orientation: portrait)').matches;
    const landscape = window.innerHeight < 768 && window.matchMedia('(orientation: landscape)').matches;

    if (landscape === true || portrait === true) {
      return '<h6>';
    } else {
      return '<h4>';
    }
  };

  //--|🠋 Always Return an Object 🠋|--//
  switch (button) {
    case 'demo':
      return {
        fontSize: toggleFont() as '<h4>' | '<h6>',
        layoutView: 'icon' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'medium' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: toggleColor(form) as 'hyperlink' | 'ticketing' | 'overtime',
        imageLink: toggleImage() as string,
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
