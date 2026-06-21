//--|🠊 index.tsx (Entry Point) 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './index.scss';

//--|🠋 React 🠋|--\\
import React from 'react';
import ReactDOM from 'react-dom/client';

//--|🠋 Applications 🠋|--\\
import Archive from './layouts/containers/Archive/Archive';
import Overtime from './layouts/containers/Overtime/Overtime';
import Ticketing from './layouts/containers/Ticketing/Ticketing';
import Hyperlink from './layouts/containers/Hyperlink/Hyperlink';
// import Landing from './layouts/containers/Landing/Landing';

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
    element.classList.add('ante-meridiem');
    element.classList.remove('post-meridiem');
    setTimeout(() => {
      //--|🠊 alert("It's morning people, rise and shine."); 🠈|--\\
      console.log('|🠊 <body class="ante-meridiem"> 🠈|');
    }, 15000);
  }
  // Between 13:00 and 04:59
  else {
    element.classList.add('post-meridiem');
    element.classList.remove('ante-meridiem');
    console.log('|🠊 <body class="post-meridiem"> 🠈|');
    //--|🠊 alert("It's afternoon, log work and wind down."); 🠈|--\\
  }
}
//--|🠋 Component Mapping 🠋|--\\
const pages: { [key: string]: React.ElementType } = {
  // 'landing-body': Landing,

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
    default:
    case 'archive':
      return loadPage('components-body', React.createElement(Archive));
    case 'overtime':
      loadPage(`${pageName}-body`, React.createElement(Overtime));
      break;
    case 'ticketing':
      loadPage(`${pageName}-body`, React.createElement(Ticketing));
      break;
    case 'hyperlink':
      loadPage(`${pageName}-body`, React.createElement(Hyperlink));
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
