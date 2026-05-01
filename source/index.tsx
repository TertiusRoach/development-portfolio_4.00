//--|🠊 index.tsx (Entry Point) 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './index.scss';

//--|🠋 React 🠋|--\\
import React from 'react';
import ReactDOM from 'react-dom/client';

//--|🠋 Applications 🠋|--\\
import Buttons from './layouts/pages/buttons';
import Landing from './layouts/pages/landing';
import Overtime from './layouts/pages/overtime';
import Ticketing from './layouts/pages/ticketing';
import Hyperlink from './layouts/pages/hyperlink';
import Archive from './layouts/containers/archive';

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
function themeScheme(colorScheme: 'light' | 'dark') {
  const element: HTMLBodyElement = document.getElementsByTagName('body')[0];

  switch (colorScheme) {
    case 'light':
      console.log('|🠊 Theme: <body class="ante-meridiem"> 🠈|');
      return element.classList.add('ante-meridiem');
    case 'dark':
      console.log('|🠊 Theme: <body class="post-meridiem"> 🠈|');
      return element.classList.add('post-meridiem');
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
    | 'components';

  switch (pageName) {
    case 'buttons':
      loadPage(`${pageName}-body`, React.createElement(Buttons));
      break;
    case 'components':
      loadPage(`${pageName}-body`, React.createElement(Archive));
      break;
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
    default:
      ReactDOM.createRoot(container).render(<Landing />);
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
