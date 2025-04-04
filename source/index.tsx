//--|🠊 source/script/index.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './styles/index.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import ReactDOM from 'react-dom/client';
import axios, { AxiosError } from 'axios';
import React, { useState, useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Containers 🠋|--//
import Landing from './pages/landing';
import Overtime from './pages/overtime';
import Ticketing from './pages/ticketing';
import Hyperlink from './pages/hyperlink';
//--|🠉 Styles 🠉|--//
//--|🠋 Component Mapping 🠋|--//
const components: { [key: string]: React.ElementType } = {
  'landing-body': Landing,
  'overtime-body': Overtime,
  'ticketing-body': Ticketing,
  'hyperlink-body': Hyperlink,
};
//--|🠋 Render Components 🠋|--//
Object.entries(components).forEach(([id, Pages]) => {
  const element = document.getElementById(id);
  if (element) {
    ReactDOM.createRoot(element).render(<Pages />);
  } else {
    console.error(`Can't find #${id}`);
  }
  /*
    const landingBody = document.getElementById('landing-body') as HTMLElement;
    if (landingBody) {
      ReactDOM.createRoot(landingBody).render(<Landing />);
    } else {
      console.error("Can't find #landing-body");
    }

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

export function viewDemo(view: 'track-day' | 'log-ticket' | 'find-link') {
  const elementBody = document.body as HTMLBodyElement;
  // console.log(elementBody);
  //  style="transform: translateY(-300vh); transition: transform 0.5s ease-in-out"

  switch (view) {
    case 'track-day':
      document.body.style.transform = 'translateY(-100vh)';
      break;
    case 'log-ticket':
      document.body.style.transform = 'translateY(-200vh)';
      break;
    case 'find-link':
      document.body.style.transform = 'translateY(-300vh)';
      break;
  }
}
export function openApps(view: 'track-day' | 'log-ticket' | 'find-link') {
  const elementBody = document.getElementsByTagName('body');
  console.log(elementBody);
  //  style="transform: translateY(-300vh); transition: transform 0.5s ease-in-out"

  switch (view) {
    case 'track-day':
      break;
    case 'log-ticket':
      break;
    case 'find-link':
      break;
  }
}
