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
Object.entries(pages).forEach(([id]) => {
  //--|🠋 Render Components 🠋|--\\
  const elementBody = document.getElementById(id) as HTMLDivElement;
  const pageName: string = elementBody.id.split('-')[0] as 'landing' | 'buttons' | 'overtime' | 'ticketing' | 'hyperlink';
  switch (pageName) {
    case 'buttons':
      safeLoad(`${pageName}-body`, React.createElement(Buttons));
      break;
    case 'overtime':
      safeLoad(`${pageName}-body`, React.createElement(Overtime));
      break;
    case 'ticketing':
      safeLoad(`${pageName}-body`, React.createElement(Ticketing));
      break;
    case 'hyperlink':
      safeLoad(`${pageName}-body`, React.createElement(Hyperlink));
      break;
    case 'landing':
    default:
      ReactDOM.createRoot(elementBody).render(<Landing />);
      break;
  }
});

function setView(pageName: 'overtime' | 'ticketing' | 'hyperlink' | 'buttons' | 'landing') {
  let element = document.querySelector(`#${pageName}-body`) as HTMLDivElement; //--|🠈 Select the new view element using its dynamic ID 🠈|--\\
  switch (true) {
    case element.classList.contains('asleep'):
      //--|🠉 Show if element is hidden 🠈|--\\
      element.classList.remove('asleep'); //--|🠈 Remove '.asleep' 🠈|--\\
      console.log(`|🠊 Loaded: <div id="${pageName}-body"> 🠈|`);

      return element.classList.add('active'); //--|🠈 Toggle '.active' 🠈|--\\
    case element.classList.contains('active'):
      //--|🠉 Optional toggle: allow hiding the current element again 🠈|--\\
      element.classList.remove('active'); //--|🠈 Remove '.active' 🠈|--\\
      return element.classList.add('asleep'); //--|🠈 Toggle '.asleep' 🠈|--\\
  }
}
setView('overtime');

function safeLoad(identification: string, container: React.ReactElement) {
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
}
