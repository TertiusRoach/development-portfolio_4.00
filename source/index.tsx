//--|🠊 index.tsx (Entry Point) 🠈|--\\
import React from 'react';
import ReactDOM from 'react-dom/client';
//--|🠋 Styles 🠋|--\\
import './index.scss';
//--|🠋 Containers 🠋|--\\
import Buttons from './layouts/pages/buttons';
import Landing from './layouts/pages/landing';
import Overtime from './layouts/pages/overtime';
import Ticketing from './layouts/pages/ticketing';
import Hyperlink from './layouts/pages/hyperlink';

//--|🠋 Component Mapping 🠋|--\\
const pages: { [key: string]: React.ElementType } = {
  'buttons-body': Buttons,
  'landing-body': Landing,
  'overtime-body': Overtime,
  'ticketing-body': Ticketing,
  'hyperlink-body': Hyperlink,
};

//--|🠋 Render Components 🠋|--\\
Object.entries(pages).forEach(([id]) => {
  const elementBody = document.getElementById(id) as HTMLElement;
  const pageName = elementBody.id.split('-')[0] as 'landing' | 'buttons' | 'overtime' | 'ticketing' | 'hyperlink';
  const setView = (pageName: 'overtime' | 'ticketing' | 'hyperlink' | 'buttons' | 'landing') => {
    let element = document.querySelector(`#${pageName}-body`) as HTMLElement; //--|🠈 Select the new view element using its dynamic ID 🠈|--\\
    let active = document.querySelector("div[id*='body'].active") as HTMLElement; //--|🠈 Find the 'div[id*='body']' tag with a '.active' class 🠈|--\\
    if (active) {
      //--|🠉 If there's a visible element, hide it 🠈|--\\
      active.classList.add('asleep'); //--|🠈 Hide it by adding 'asleep' 🠈|--\\
      active.classList.remove('active'); //--|🠈 And remove 'active' class 🠈|--\\
    }
    switch (true) {
      case element.classList.contains('asleep'):
        //--|🠉 Show the selected view only if it’s currently hidden 🠈|--\\
        element.classList.remove('asleep'); //--|🠈 Remove '.asleep' 🠈|--\\
        return element.classList.add('active'); //--|🠈 Toggle '.active' 🠈|--\\
      case element.classList.contains('active'):
        //--|🠉 Optional toggle: allow hiding the current element again 🠈|--\\
        element.classList.remove('active'); //--|🠈 Remove '.active' 🠈|--\\
        return element.classList.add('asleep'); //--|🠈 Toggle '.asleep' 🠈|--\\
    }
  };
  const safeLoad = (identification: string, container: React.ReactElement) => {
    let elementBody = document.getElementById(identification) as HTMLElement;
    if (!elementBody) {
      console.error(`Can't find #${identification}`);
      return;
    }
    if (elementBody.innerHTML === '') {
      ReactDOM.createRoot(elementBody).render(<React.StrictMode>{container}</React.StrictMode>);
    } else {
      console.warn(`Element #${identification} is not empty. Skipping render to avoid overwrite.`);
    }
  };

  switch (pageName) {
    case 'buttons':
      setView('buttons');
      safeLoad(`${pageName}-body`, React.createElement(Buttons));
      break;
    case 'overtime':
      // setView('overtime');
      safeLoad(`${pageName}-body`, React.createElement(Overtime));
      break;
    case 'ticketing':
      // setView('ticketing');
      safeLoad(`${pageName}-body`, React.createElement(Ticketing));
      break;
    case 'hyperlink':
      // setView('hyperlink');
      safeLoad(`${pageName}-body`, React.createElement(Hyperlink));
      break;
    case 'landing':
    default:
      // setView('landing');
      ReactDOM.createRoot(elementBody).render(<Landing />);
      break;
  }

  /*
  if (elementBody.classList.contains('active')) {
  }
  */
});

export function stripBrackets(thisText: string, wrapType: '[]' | '<>' | '()' | '{}' | '--' | '~~'): string {
  switch (wrapType) {
    case '[]':
      return thisText.replace(/[\[\]]/g, '');
    case '<>':
      return thisText.replace(/[<>]/g, '');
    case '()':
      return thisText.replace(/[()]/g, '');
    case '{}':
      return thisText.replace(/[{}]/g, '');
    case '--':
      return thisText.replace(/[--]/g, '');
    case '~~':
      return thisText.replace(/[~~]/g, '');
  }
}
/*
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
*/
