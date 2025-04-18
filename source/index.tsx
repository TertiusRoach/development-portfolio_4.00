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
// import Overtime from './layouts/pages/overtime';
// import Ticketing from './layouts/pages/ticketing';
// import Hyperlink from './layouts/pages/hyperlink';
//--|🠉 Styles 🠉|--//

//--|🠋 Component Mapping 🠋|--//
const layouts: { [key: string]: React.ElementType } = {
  'landing-body': Landing,
  // 'overtime-body': Overtime,
  // 'ticketing-body': Ticketing,
  // 'hyperlink-body': Hyperlink,
};
//--|🠋 Render Components 🠋|--//
Object.entries(layouts).forEach(([id]) => {
  const element = document.getElementById(id);
  const landingBody = document.getElementById('landing-body') as HTMLElement;
  if (landingBody) {
    ReactDOM.createRoot(landingBody).render(<Landing />);
  } else {
    console.error("Can't find #landing-body");
  }

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
});

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
