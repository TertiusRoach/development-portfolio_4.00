//--|🠊 Article_landing.ts 🠈|--\\

export function defineButton(
  button: 'login' | 'register' | 'track-day' | 'log-ticket' | 'find-link' | 'index-land',
  info: { blockName: string; pageName: string }
) {
  const { blockName, pageName } = info;
  const toggleFont = () => {
    let portrait = window.matchMedia('(orientation: portrait)').matches;
    let landscape = window.matchMedia('(orientation: landscape)').matches;
    if (landscape) {
      if (window.innerHeight < 360) {
        return '<p>'; //--|🠈 Landscape < 360px (Less than) 🠈|--//
      } else if (window.innerHeight < 480) {
        return '<p>'; //--|🠈 Landscape < 480px (Less than) 🠈|--//
      } else if (window.innerHeight < 768) {
        return '<h6>'; //--|🠈 Landscape < 768px (Less than) 🠈|--//
      } else {
        return '<h5>'; //--|🠈 Landscape > 768px (Larger than) 🠈|--//
      }
    } else if (portrait) {
      if (window.innerWidth < 360) {
        return '<p>'; //--|🠈 Portrait < 360px (Less than) 🠈|--//
      } else if (window.innerWidth < 480) {
        return '<h6>'; //--|🠈 Portrait < 480px (Less than) 🠈|--//
      } else if (window.innerWidth < 768) {
        return '<h3>'; //--|🠈 Portrait < 768px (Less than) 🠈|--//
      } else {
        return '<h1>'; //--|🠈 Portrait > 768px (Larger than) 🠈|--//
      }
    }
  };

  //--|🠋 Always Return an Object 🠋|--//
  switch (button) {
    case 'login':
      return {
        fontSize: toggleFont() as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-right-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'landing' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/95cb0b63850941f4de8b0d021e44f529819fe627/source/assets/svg-files/landing-page/sign-in-alt.svg',
      };
    case 'register':
      return {
        fontSize: toggleFont() as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-right-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'landing' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/95cb0b63850941f4de8b0d021e44f529819fe627/source/assets/svg-files/landing-page/user-plus.svg',
      };
    case 'track-day':
      return {
        fontSize: toggleFont() as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-left-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'overtime' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/933b2050d063d05d5c7ca0f4122f613511cc68c9/source/assets/svg-files/trinity-apps/rebrand/track-day/track-day-medium.svg',
      };
    case 'log-ticket':
      return {
        fontSize: toggleFont() as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-left-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'ticketing' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/933b2050d063d05d5c7ca0f4122f613511cc68c9/source/assets/svg-files/trinity-apps/rebrand/log-ticket/log-ticket-medium.svg',
      };
    case 'find-link':
      return {
        fontSize: toggleFont() as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-left-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'hyperlink' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/933b2050d063d05d5c7ca0f4122f613511cc68c9/source/assets/svg-files/trinity-apps/rebrand/find-link/find-link-medium.svg',
      };
    case 'index-land':
      return {
        fontSize: toggleFont() as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-center-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'landing' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink: '',
      };
  }
}

export function showMain(view: 'register' | 'login', pageName: string) {
  const overlay = document.querySelector(`#${pageName}-overlay`) as HTMLElement;
  const carouselMain = document.querySelector('main .landing-carousel') as HTMLElement;

  let login = carouselMain.childNodes[1] as HTMLElement;
  let register = carouselMain.childNodes[0] as HTMLElement;

  overlay.className = 'default-overlay hidden';
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 500);

  switch (view) {
    case 'register':
      login.className = 'login-section hidden';
      carouselMain.style.transform = 'translateX(0vw)';
      register.className = `${view}-section visible`;
      break;
    case 'login':
      login.className = `${view}-section visible`;
      register.className = 'register-section hidden';
      carouselMain.style.transform = 'translateX(-100vw)';
      break;
  }
}

export function getIcon(image: 'brand' | 'demo' | 'apps') {
  switch (image) {
    case 'brand':
      return 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/861d6c3d25d45ec174c8d12aedc407f59dc85317/source/assets/svg-files/trinity-apps/trinity-apps.svg';
    case 'demo':
      return 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/7e2882f29c5a3697900192c18bec75aa5916b207/source/assets/svg-files/landing-page/laptop.svg';
    case 'apps':
      return 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/7e2882f29c5a3697900192c18bec75aa5916b207/source/assets/svg-files/landing-page/door-open.svg';
  }
}

//--|🠋 Declare a variable to store the debounce timer. 🠋|--//
let debounceTimer: NodeJS.Timeout | null = null; //--|🠈 This ensures we can clear previous timers to prevent rapid re-triggering. 🠈|--//
export function hideFigure(event: React.MouseEvent<HTMLElement>) {
  const activeElement = event.currentTarget as HTMLElement; //--|🠈 `event.currentTarget` refers to the element the event is bound to (the <figure>). 🠈|--//
  const demoNav = document.querySelector('.demo-navigation') as HTMLElement;

  if (debounceTimer) clearTimeout(debounceTimer); //--|🠈 Clear any previously set debounce timer to prevent multiple rapid executions. 🠈|--//

  //--|🠋 Get the figure element that triggered the event. 🠋|--//
  if (!activeElement) return; //--|🠈 Safety check: If for some reason the element is null, exit the function. 🠈|--//

  if (demoNav.classList.contains('downplay')) {
    demoNav.classList.add('highlight');
    demoNav.classList.remove('downplay');
  }

  setTimeout(() => {
    //--|🠉 Delay execution slightly (125ms) to allow for smooth transitions. 🠈|--//
    activeElement.style.zIndex = '0'; //--|🠈 Move the element behind other elements. 🠈|--//
    activeElement.style.opacity = '0'; //--|🠈 Fully hide the element with opacity. 🠈|--//
  }, 250);
}
export function showFigure(overlay: 'apps' | 'demo') {
  //--|🠋 Find the correct figure element based on the `overlay` parameter. 🠋|--//
  // The `class*=` selector matches elements where class names contain `overlay` ("apps" or "demo").
  const figureElement = document.querySelector(`figure[class*="${overlay}"]`) as HTMLElement;
  const demoNav = document.querySelector('.demo-navigation') as HTMLElement;

  //--|🠋 Clear any previously set debounce timer to prevent rapid execution. 🠋|--//
  if (debounceTimer) clearTimeout(debounceTimer);

  //--|🠋 Safety check: If no matching element is found, exit the function. 🠋|--//
  if (!figureElement) return;

  //--|🠋 Delay execution for 1 second (1000ms) to prevent flickering effects. 🠋|--//
  setTimeout(() => {
    //--|🠉 Re-query the DOM to get the element again, ensuring we have the latest state. 🠈|--//
    let tag = document.querySelector(`figure[class*="${overlay}"]`) as HTMLElement;

    if (demoNav.classList.contains('highlight')) {
      demoNav.classList.add('downplay');
      demoNav.classList.remove('highlight');
    }
    //--|🠋 Check if the element exists and has inline styles for `z-index` or `opacity`. 🠋|--//
    //--|🠊 If it does, remove those properties to restore its default styles. 🠈|--//
    if (tag && (tag.style.zIndex || tag.style.opacity)) {
      tag.style.removeProperty('z-index'); //--|🠈 Remove the inline z-index style. 🠈|--//
      tag.style.removeProperty('opacity'); //--|🠈 Remove the inline opacity style. 🠈|--//
    }
  }, 3000);
}
