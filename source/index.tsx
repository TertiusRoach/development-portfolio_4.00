//--|🠊 index.tsx (Entry Point) 🠈|--//
//--|🠋 Styles 🠋|--//
import './index.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import ReactDOM from 'react-dom/client';
import axios, { AxiosError } from 'axios';
import React, { useState, useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Containers 🠋|--//
import Buttons from './layouts/pages/buttons';
import Landing from './layouts/pages/landing';
import Overtime from './layouts/pages/overtime';
import Ticketing from './layouts/pages/ticketing';
import Hyperlink from './layouts/pages/hyperlink';
//--|🠉 Containers 🠉|--//

//--|🠋 Component Mapping 🠋|--//
const pages: { [key: string]: React.ElementType } = {
  'buttons-body': Buttons,
  'landing-body': Landing,
  'overtime-body': Overtime,
  'ticketing-body': Ticketing,
  'hyperlink-body': Hyperlink,
};

//--|🠋 Render Components 🠋|--//
Object.entries(pages).forEach(([id]) => {
  const elementBody = document.getElementById(id) as HTMLElement;
  const pageName = elementBody.id.split('-')[0] as 'landing' | 'overtime' | 'ticketing' | 'hyperlink';
  if (elementBody.classList.contains('active')) {
    switch (pageName) {
      case 'landing':
        ReactDOM.createRoot(elementBody).render(<Landing />);
        break;
      default:
        loadDemo(pageName);
        break;
    }
  }

  /*
  // console.log(elementBody.id.split('-')[0]);
  // console.log(elementBody.classList.contains('active'));
  // console.log(elementBody.classList.contains('asleep'));
  // const landingBody = document.getElementById('landing-body') as HTMLElement;
  */
  /*
  if (landingBody) {
    ReactDOM.createRoot(landingBody).render(<Landing />);
  } else {
    console.error("Can't find #landing-body");
  }
  */
});

export function loadDemo(pageName: 'overtime' | 'ticketing' | 'hyperlink' | 'buttons') {
  const safeRender = (id: string, component: React.ReactElement) => {
    let elementBody = document.getElementById(id) as HTMLElement;
    if (!elementBody) {
      console.error(`Can't find #${id}`);
      return;
    }

    if (elementBody.innerHTML === '') {
      ReactDOM.createRoot(elementBody).render(component);
    } else {
      console.warn(`Element #${id} is not empty. Skipping render to avoid overwrite.`);
    }
  };
  const setView = (pageName: 'overtime' | 'ticketing' | 'hyperlink' | 'buttons') => {
    let element = document.querySelector(`#${pageName}-body`) as HTMLElement; //--|🠈 Select the new view element using its dynamic ID 🠈|--//
    let active = document.querySelector("div[id*='body'].active") as HTMLElement; //--|🠈 Find the 'div[id*='body']' tag with a '.active' class 🠈|--//

    /*
    if (!(element instanceof HTMLElement)) {
      //--|🠉 Safeguard: Ensure the element exists and is an HTMLElement 🠈|--//
      console.warn(`Element for view "${pageName}" not found.`);
      return;
    }
    */

    if (active) {
      //--|🠉 If there's a visible element, hide it 🠈|--//
      active.classList.add('asleep'); //--|🠈 Hide it by adding 'asleep' 🠈|--//
      active.classList.remove('active'); //--|🠈 And remove 'active' class 🠈|--//
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
  };

  switch (pageName) {
    case 'buttons':
      setView(pageName);
      safeRender(`${pageName}-body`, React.createElement(Buttons));
      setTimeout(() => {}, 250);
      break;
    case 'overtime':
      setView(pageName);
      safeRender(`${pageName}-body`, React.createElement(Overtime));
      break;
    case 'ticketing':
      safeRender(`${pageName}-body`, React.createElement(Ticketing));
      break;
    case 'hyperlink':
      safeRender(`${pageName}-body`, React.createElement(Hyperlink));
      break;
  }
}

export function openApps(view: 'track-day' | 'log-ticket' | 'find-link') {
  const elementBody = document.getElementsByTagName('body');

  switch (view) {
    case 'track-day':
      break;
    case 'log-ticket':
      break;
    case 'find-link':
      break;
  }
}
