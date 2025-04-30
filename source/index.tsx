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
import Landing from './layouts/pages/landing';
import Overtime from './layouts/pages/overtime';
import Ticketing from './layouts/pages/ticketing';
import Hyperlink from './layouts/pages/hyperlink';
//--|🠉 Containers 🠉|--//

//--|🠋 Component Mapping 🠋|--//
const pages: { [key: string]: React.ElementType } = {
  'landing-body': Landing,
  'overtime-body': Overtime,
  'ticketing-body': Ticketing,
  'hyperlink-body': Hyperlink,
};

//--|🠋 Render Components 🠋|--//
Object.entries(pages).forEach(([id]) => {
  const elementBody = document.getElementById(id) as HTMLElement;
  const landingBody = document.getElementById('landing-body') as HTMLElement;
  console.log(elementBody.classList.contains('active'));
  /* console.log(elementBody.classList.contains('asleep')); */
  console.log(elementBody.id.split('-')[0]);
  if (elementBody.classList.contains('active')) {
    let pageName = elementBody.id.split('-')[0] as 'landing' | 'overtime' | 'ticketing' | 'hyperlink';
    switch (pageName) {
      case 'landing':
        ReactDOM.createRoot(elementBody).render(<Landing />);
        break;
      default:
        viewDemo(pageName);
        break;
    }
  }

  /*
  if (landingBody) {
    ReactDOM.createRoot(landingBody).render(<Landing />);
  } else {
    console.error("Can't find #landing-body");
  }
  */
});

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

/*
export function viewDemo(view: 'track-day' | 'log-ticket' | 'find-link') {
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
*/
/*
  if (element) {
    ReactDOM.createRoot(element).render(<Pages />);
  } else {
    console.error(`Can't find #${id}`);
  }
  */
/*


    const overtimeBody = document.getElementById('overtime-body') as HTMLElement;
    if (overtimeBody) {
      ReactDOM.createRoot(overtimeBody).render(<Overtime />);
    } else {
      console.error("Can't find #overtime-body");
    }

    const ticketingBody = document.getElementById('ticketing-body') as HTMLElement;
    if (ticketingBody) {
      ReactDOM.createRoot(ticketingBody).render(<Ticketing />);
    } else {
      console.error("Can't find #ticketing-body");
    }

    const hyperlinkBody = document.getElementById('hyperlink-body') as HTMLElement;
    if (hyperlinkBody) {
      ReactDOM.createRoot(hyperlinkBody).render(<Hyperlink />);
    } else {
      console.error("Can't find #ticketing-body");
    }
  */
