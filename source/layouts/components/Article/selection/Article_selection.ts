//--|🠊 Article_selection.ts 🠈|--//
export function defineButton(
  button: 'login' | 'register' | 'track-day' | 'log-ticket' | 'find-link' | 'index-land',
  info: { blockName: string; pageName: string }
) {
  const { blockName, pageName } = info;

  //--|🠋 Always Return an Object 🠋|--//
  switch (button) {
    case 'login':
      return {
        fontSize: '<h4>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'right' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'landing' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/95cb0b63850941f4de8b0d021e44f529819fe627/source/assets/svg-files/landing-page/sign-in-alt.svg',
      };
    case 'register':
      return {
        fontSize: '<h4>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'right' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'landing' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/95cb0b63850941f4de8b0d021e44f529819fe627/source/assets/svg-files/landing-page/user-plus.svg',
      };
    case 'track-day':
      return {
        fontSize: '<h5>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'left' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'overtime' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/933b2050d063d05d5c7ca0f4122f613511cc68c9/source/assets/svg-files/trinity-apps/rebrand/track-day/track-day-medium.svg',
      };
    case 'log-ticket':
      return {
        fontSize: '<h5>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'left' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'ticketing' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/933b2050d063d05d5c7ca0f4122f613511cc68c9/source/assets/svg-files/trinity-apps/rebrand/log-ticket/log-ticket-medium.svg',
      };
    case 'find-link':
      return {
        fontSize: '<h5>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'left' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'hyperlink' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/933b2050d063d05d5c7ca0f4122f613511cc68c9/source/assets/svg-files/trinity-apps/rebrand/find-link/find-link-medium.svg',
      };
    case 'index-land':
      return {
        fontSize: '<h5>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'center' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'landing' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink: '',
      };
  }
}

//--|🠋 Declare a variable to store the debounce timer. 🠋|--//
let debounceTimer: NodeJS.Timeout | null = null; //--|🠈 This ensures we can clear previous timers to prevent rapid re-triggering. 🠈|--//
export function hideFigure(event: React.MouseEvent<HTMLElement>) {
  //--|🠋 Get the figure element that triggered the event. 🠋|--//
  const tag = event.currentTarget as HTMLElement; //--|🠈 `event.currentTarget` refers to the element the event is bound to (the <figure>). 🠈|--//
  if (!tag) return; //--|🠈 Safety check: If for some reason the element is null, exit the function. 🠈|--//
  if (debounceTimer) clearTimeout(debounceTimer); //--|🠈 Clear any previously set debounce timer to prevent multiple rapid executions. 🠈|--//

  setTimeout(() => {
    //--|🠉 Delay execution slightly (125ms) to allow for smooth transitions. 🠈|--//
    tag.style.zIndex = '0'; //--|🠈 Move the element behind other elements. 🠈|--//
    tag.style.opacity = '0'; //--|🠈 Fully hide the element with opacity. 🠈|--//
  }, 250);
}
export function showFigure(overlay: 'apps' | 'demo') {
  //--|🠋 Find the correct figure element based on the `overlay` parameter. 🠋|--//
  // The `class*=` selector matches elements where class names contain `overlay` ("apps" or "demo").
  const tag = document.querySelector(`figure[class*="${overlay}"]`) as HTMLElement | null;

  //--|🠋 Safety check: If no matching element is found, exit the function. 🠋|--//
  if (!tag) return;

  //--|🠋 Clear any previously set debounce timer to prevent rapid execution. 🠋|--//
  if (debounceTimer) clearTimeout(debounceTimer);

  //--|🠋 Delay execution for 1 second (1000ms) to prevent flickering effects. 🠋|--//
  setTimeout(() => {
    //--|🠉 Re-query the DOM to get the element again, ensuring we have the latest state. 🠈|--//
    let tag = document.querySelector(`figure[class*="${overlay}"]`) as HTMLElement;

    //--|🠋 Check if the element exists and has inline styles for `z-index` or `opacity`. 🠋|--//
    //--|🠊 If it does, remove those properties to restore its default styles. 🠈|--//
    if (tag && (tag.style.zIndex || tag.style.opacity)) {
      tag.style.removeProperty('z-index'); //--|🠈 Remove the inline z-index style. 🠈|--//
      tag.style.removeProperty('opacity'); //--|🠈 Remove the inline opacity style. 🠈|--//
    }
  }, 1500);
}

export function showMain(view: 'register' | 'login', pageName: string) {
  const overlay = document.querySelector(`#${pageName}-overlay`) as HTMLElement;
  const carousel = document.querySelector('main .landing-carousel') as HTMLElement;

  let register = carousel.childNodes[0] as HTMLElement;
  let login = carousel.childNodes[1] as HTMLElement;

  overlay.className = 'default-overlay hidden';
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 500);

  switch (view) {
    case 'register':
      carousel.style.transform = 'translateX(0vw)';

      register.className = `${view}-section visible`;
      login.className = `${view}-section hidden`;
      break;
    case 'login':
      carousel.style.transform = 'translateX(-100vw)';

      register.className = `${view}-section hidden`;
      login.className = `${view}-section visible`;
      break;
  }
}
/*
export function viewDemo(view: 'track-day' | 'log-ticket' | 'find-link', pageName: string) {}
*/
