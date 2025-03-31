//--|🠊 source/script/index.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './layouts/styles/index.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import ReactDOM from 'react-dom/client';
import axios, { AxiosError } from 'axios';
import React, { useState, useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Context 🠋|--//

//--|🠉 Context 🠉|--//
//--|🠋 Containers 🠋|--//
import Landing from './script/landing';
import Overtime from './script/overtime';
import Ticketing from './script/ticketing';
import Hyperlink from './script/hyperlink';
//--|🠉 Containers 🠉|--//
//--|🠋 Utilities 🠋|--//

//--|🠉 Utilities 🠉|--//

//--|🠋 Component Mapping 🠋|--//
const components: { [key: string]: React.ElementType } = {
  'landing-body': Landing,
  'overtime-body': Overtime,
  'ticketing-body': Ticketing,
  'hyperlink-body': Hyperlink,
};
//--|🠋 Render Components 🠋|--//
Object.entries(components).forEach(([id, Component]) => {
  const element = document.getElementById(id);
  if (element) {
    ReactDOM.createRoot(element).render(<Component />);
  } else {
    console.error(`Can't find #${id}`);
  }
});

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
