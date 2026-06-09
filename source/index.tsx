//--|🠊 index.tsx (Entry Point) 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './index.scss';

//--|🠋 React 🠋|--\\
import React from 'react';
import ReactDOM from 'react-dom/client';

//--|🠋 Applications 🠋|--\\
import Landing from './layouts/pages/landing';
import Overtime from './layouts/pages/overtime';
import Ticketing from './layouts/pages/ticketing';
import Hyperlink from './layouts/pages/hyperlink';
import Archive from './layouts/containers/Archive/Archive';

//--|🠋 Functions 🠋|--\\
setTimeout(() => {
  themeScheme('light');
  viewBody('components');
}, 250);

function loadPage(identification: string, container: React.ReactElement) {
  const element = document.getElementById(identification) as HTMLDivElement;
  if (!element) {
    console.error(`Can't find #${identification}`);
    return;
  }
  if (element.innerHTML === '') {
    ReactDOM.createRoot(element).render(<React.StrictMode>{container}</React.StrictMode>);
  } else {
    console.warn(`Element #${identification} is not empty. Skipping render to avoid overwrite.`);
  }
}
function themeScheme(colorScheme: 'light' | 'dark'): void {
  const element: HTMLBodyElement = document.getElementsByTagName('body')[0];
  const currentHour = new Date().getHours(); // Gets the hour from 0 to 23

  // Between 05:00 and 12:59
  if (currentHour >= 5 && currentHour < 12) {
    element.classList.remove('post-meridiem');
    element.classList.add('ante-meridiem');
    setTimeout(() => {
      //--|🠊 alert("It's morning people, rise and shine."); 🠈|--\\
      console.log('|🠊 <body class="ante-meridiem"> 🠈|');
    }, 240000);
  }
  // Between 13:00 and 04:59
  else {
    element.classList.remove('ante-meridiem');
    element.classList.add('post-meridiem');
    console.log('|🠊 <body class="post-meridiem"> 🠈|');
    //--|🠊 alert("It's afternoon, log work and wind down."); 🠈|--\\
  }
}
//--|🠋 Component Mapping 🠋|--\\
const pages: { [key: string]: React.ElementType } = {
  // 'buttons-body': Buttons,
  'landing-body': Landing,
  'components-body': Archive,

  'overtime-body': Overtime,
  'ticketing-body': Ticketing,
  'hyperlink-body': Hyperlink,
};
Object.entries(pages).forEach(([id]) => {
  //--|🠋 Render Components 🠋|--\\
  const container = document.getElementById(id) as HTMLDivElement;
  const pageName: string = container.id.split('-')[0] as
    | 'overtime'
    | 'ticketing'
    | 'hyperlink'
    | 'landing'
    | 'buttons'
    | 'archive';

  switch (pageName) {
    case 'archive':
    default:
      loadPage('components-body', React.createElement(Archive));
      break;
    case 'overtime':
      /* loadPage(`${pageName}-body`, React.createElement(Overtime)); */
      break;
    case 'ticketing':
      /* loadPage(`${pageName}-body`, React.createElement(Ticketing)); */
      break;
    case 'hyperlink':
      /* loadPage(`${pageName}-body`, React.createElement(Hyperlink)); */
      break;
    case 'landing':
      /* ReactDOM.createRoot(container).render(<Landing />); */
      break;
  }
});

export function viewBody(pageName: 'overtime' | 'ticketing' | 'hyperlink' | 'landing' | 'components') {
  const enable = document.querySelector(`#${pageName}-body`) as HTMLDivElement; //--|🠈 Select the new view element using its dynamic ID 🠈|--\\
  const disable = document.querySelector('body .active') as HTMLDivElement; //--|🠈 Select the new view element using its dynamic ID 🠈|--\\

  if (disable !== null) {
    disable.classList.add('asleep');
    disable.classList.remove('active');
  }
  enable.classList.add('active');
  enable.classList.remove('asleep');
  console.log(`|🠊 View: <div id="${pageName}-body"> 🠈|`);
}
