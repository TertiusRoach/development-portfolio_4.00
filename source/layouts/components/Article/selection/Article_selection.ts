//--|🠊 Article_selection.ts 🠈|--//
//--|🠋 Dependencies 🠋|--//
import ReactDOM from 'react-dom/client';
import axios, { AxiosError } from 'axios';
import React, { useState, useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Containers 🠋|--//
import Overtime from '../../../pages/overtime'; // Ensure this is a default export of a React component
import Ticketing from '../../../pages/ticketing';
import Hyperlink from '../../../pages/hyperlink';
//--|🠉 Styles 🠉|--//

export function defineButton(
  button: 'login' | 'register' | 'track-day' | 'log-ticket' | 'find-link' | 'index-land',
  info: { blockName: string; pageName: string }
) {
  const { blockName, pageName } = info;

  //--|🠋 Always Return an Object 🠋|--//
  const tabletSquare = window.innerHeight < 786;
  switch (button) {
    case 'login':
      return {
        fontSize: (tabletSquare ? '<h6>' : '<h4>') as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
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
        fontSize: (tabletSquare ? '<h6>' : '<h4>') as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
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
        fontSize: (tabletSquare ? '<p>' : '<h5>') as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
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
        fontSize: (tabletSquare ? '<p>' : '<h5>') as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
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
        fontSize: (tabletSquare ? '<p>' : '<h5>') as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
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
        fontSize: (tabletSquare ? '<p>' : '<h5>') as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
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
export function viewDemo(pageName: 'overtime' | 'ticketing' | 'hyperlink') {
  const safeRender = (id: string, component: React.ReactElement) => {
    const element = document.getElementById(id);
    if (!element) {
      console.error(`Can't find #${id}`);
      return;
    }
    if (element.childElementCount === 0) {
      ReactDOM.createRoot(element).render(component);
    }
  };

  safeRender('overtime-body', React.createElement(Overtime));
  safeRender('ticketing-body', React.createElement(Ticketing));
  safeRender('hyperlink-body', React.createElement(Hyperlink));

  const element = document.querySelector(`#${pageName}-body`); //--|🠈 Select the new view element using its dynamic ID 🠈|--//
  const visible = document.querySelector("div[id*='body'].active") as HTMLElement | null; //--|🠈 Find the 'div[id*='body']' tag with a '.active' class 🠈|--//

  if (!(element instanceof HTMLElement)) {
    //--|🠉 Safeguard: Ensure the element exists and is an HTMLElement 🠈|--//
    console.warn(`Element for view "${pageName}" not found.`);
    return;
  }

  if (visible) {
    //--|🠉 If there's a visible element, hide it 🠈|--//
    visible.classList.add('asleep'); //--|🠈 Hide it by adding 'asleep' 🠈|--//
    visible.classList.remove('active'); //--|🠈 And remove 'active' class 🠈|--//
  }

  switch (true) {
    case element.classList.contains('asleep'):
      //--|🠉 Show the selected view only if it’s currently hidden 🠈|--//
      element.classList.remove('asleep'); //--|🠈 Remove '.asleep' 🠈|--//
      return element.classList.add('active'); //--|🠈 Toggle '.active' 🠈|--//
    case element.classList.contains('active'):
      //--|🠉 Optional toggle: allow hiding the current element again 🠈|--//
      element.classList.remove('active'); //--|🠈 Remove '.active' 🠈|--//
      return element.classList.add('asleep'); //--|🠈 Toggle '.asleep' 🠈|--//
  }
}

//--|🠋 Declare a variable to store the debounce timer. 🠋|--//
let debounceTimer: NodeJS.Timeout | null = null; //--|🠈 This ensures we can clear previous timers to prevent rapid re-triggering. 🠈|--//
export function hideFigure(event: React.MouseEvent<HTMLElement>) {
  const activeElement = event.currentTarget as HTMLElement; //--|🠈 `event.currentTarget` refers to the element the event is bound to (the <figure>). 🠈|--//

  //--|🠋 Get the figure element that triggered the event. 🠋|--//
  if (!activeElement) return; //--|🠈 Safety check: If for some reason the element is null, exit the function. 🠈|--//

  setTimeout(() => {
    //--|🠉 Delay execution slightly (125ms) to allow for smooth transitions. 🠈|--//
    activeElement.style.zIndex = '0'; //--|🠈 Move the element behind other elements. 🠈|--//
    activeElement.style.opacity = '0'; //--|🠈 Fully hide the element with opacity. 🠈|--//
  }, 250);

  if (debounceTimer) clearTimeout(debounceTimer); //--|🠈 Clear any previously set debounce timer to prevent multiple rapid executions. 🠈|--//
}
export function showFigure(overlay: 'apps' | 'demo') {
  //--|🠋 Find the correct figure element based on the `overlay` parameter. 🠋|--//
  // The `class*=` selector matches elements where class names contain `overlay` ("apps" or "demo").
  const figureElement = document.querySelector(`figure[class*="${overlay}"]`) as HTMLElement;

  //--|🠋 Safety check: If no matching element is found, exit the function. 🠋|--//
  if (!figureElement) return;

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
  }, 3000);
}
