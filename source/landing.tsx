//--|🠋 Styles 🠋|--//
import './layouts/styles/landing.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Context 🠋|--//
import { EmailProvider } from './modules/utilities/context/EmailContext';
import { PasswordProvider } from './modules/utilities/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Containers 🠋|--//
import LandingMain from './layouts/containers/Main/LandingMain/LandingMain';
import LandingHeader from './layouts/containers/Header/LandingHeader/LandingHeader';
import LandingFooter from './layouts/containers/Footer/LandingFooter/LandingFooter';
/* import LandingOverlay from './layouts/containers/Overlay/LandingOverlay/LandingOverlay'; */
import LandingLeftbar from './layouts/containers/Leftbar/LandingLeftbar/LandingLeftbar';
import LandingRightbar from './layouts/containers/Rightbar/LandingRightbar/LandingRightbar';
//--|🠉 Containers 🠉|--//
//--|🠋 Utilities 🠋|--//
import getResolution from './modules/scripts/getResolution';
import getOrientation from './modules/scripts/getOrientation';
import getIdentification from './modules/scripts/getIdentification';
//--|🠉 Utilities 🠉|--//
const pageName = 'landing';
const elementBody = document.getElementById(`${pageName}-body`) as HTMLElement;
function Landing() {
  let information = {
    resolution: `${getResolution()}`,
    orientation: `${getOrientation()}`,
    identification: pageName,
  };
  return (
    <EmailProvider>
      <PasswordProvider>
        <LandingHeader info={information} />

        <LandingLeftbar info={information} />
        <LandingMain info={information} />
        <LandingRightbar info={information} />

        <LandingFooter info={information} />
      </PasswordProvider>
    </EmailProvider>
  );
}
if (elementBody) {
  ReactDOM.createRoot(elementBody).render(<Landing />);
} else {
  console.error(`Can't find with #${pageName}-body`);
}

export function viewBlock(page: 'register' | 'login' | 'password' | 'verify' | 'reset' | 'launch' | 'blocked') {
  const carousel = document.querySelector('main .landing-carousel') as HTMLElement;
  const unifyLayouts = (overlays: {
    header: HTMLElement;
    leftbar: HTMLElement;
    rightbar: HTMLElement;
    footer: HTMLElement;
  }) => {
    for (let [key, element] of Object.entries(overlays)) {
      if (element.classList.contains('expanded')) {
        toggleMargins(element, 'hide');
        /* console.log(`Collapsed ${key}`); // Optional logging for debugging */
      }
    }

    /*
    if (overlays.leftbar.className.includes('expanded')) {
      toggleMargins(overlays.leftbar, 'hide'); //--|🠈 Collapse Verify 🠈|--//
    }
    if (overlays.rightbar.className.includes('expanded')) {
      toggleMargins(overlays.rightbar, 'hide'); //--|🠈 Collapse Reset 🠈|--//
    }
    if (overlays.header.className.includes('expanded')) {
      toggleMargins(overlays.header, 'hide'); //--|🠈 Collapse Launch 🠈|--//
    }
    if (overlays.footer.className.includes('expanded')) {
      toggleMargins(overlays.footer, 'hide'); //--|🠈 Collapse Blocked 🠈|--//
    }
    */
  };
  const toggleMargins = (element: HTMLElement, view: 'show' | 'hide') => {
    //--|🠊 The <aside>, <header>, and <footer> elements will be collectively referred to as 'margins'. 🠈|--//
    element.classList.toggle('collapsed', view === 'hide');
    element.classList.toggle('expanded', view === 'show');
  };

  let register = carousel.childNodes[0] as HTMLElement;
  let login = carousel.childNodes[1] as HTMLElement;
  let password = carousel.childNodes[2] as HTMLElement;

  let verify = document.querySelectorAll("aside[class*='leftbar']")[0] as HTMLElement;
  let reset = document.querySelectorAll("aside[class*='rightbar']")[0] as HTMLElement;

  let launch = document.querySelector("header[id*='header']") as HTMLElement;
  let blocked = document.querySelector("footer[id*='footer']") as HTMLElement;

  if (page === 'register' || page === 'login' || page === 'password') {
    unifyLayouts({ header: launch, leftbar: verify, rightbar: reset, footer: blocked });
  }
  switch (page) {
    case 'register':
      carousel.style.transform = 'translateX(0vw)';

      register.className = `${page}-section visible`;
      login.className = `${page}-section hidden`;
      password.className = `${page}-section hidden`;
      break;
    case 'login':
      carousel.style.transform = 'translateX(-100vw)';

      register.className = `${page}-section hidden`;
      login.className = `${page}-section visible`;
      password.className = `${page}-section hidden`;
      break;
    case 'password':
      carousel.style.transform = 'translateX(-200vw)';

      register.className = `${page}-section hidden`;
      login.className = `${page}-section hidden`;
      password.className = `${page}-section visible`;
      break;
    case 'verify':
      toggleMargins(verify, 'show'); //--|🠈 Expand Verify 🠈|--//
      break;
    case 'reset':
      toggleMargins(reset, 'show'); //--|🠈 Expand Reset 🠈|--//
      break;
    case 'launch':
      toggleMargins(launch, 'show'); //--|🠈 Expand Launch 🠈|--//
      break;
    case 'blocked':
      toggleMargins(blocked, 'show'); //--|🠈 Expand Blocked 🠈|--//
      break;
  }
  /*
  const carouselContainer = document.querySelector('.landing-carousel') as HTMLElement;
  let register: HTMLElement;
  let login: HTMLElement;
  let password: HTMLElement;
  let verify = document.querySelectorAll("aside[class*='leftbar']")[0] as HTMLElement;
  let reset = document.querySelectorAll("aside[class*='rightbar']")[0] as HTMLElement;
  if (page === 'register' || page === 'login' || page === 'password') {
    register = carouselContainer.childNodes[0] as HTMLElement;
    login = carouselContainer.childNodes[1] as HTMLElement;
    password = carouselContainer.childNodes[2] as HTMLElement;
    carouselContainer.style.transform = {
      register: 'translateX(0vw)',
      login: 'translateX(-100vw)',
      password: 'translateX(-200vw)',
    }[page];
    switch (page) {
      case 'register':
        register.className = `${page}-section visible`;
        login.className = `${page}-section hidden`;
        password.className = `${page}-section hidden`;
        break;
      case 'login':
        register.className = `${page}-section hidden`;
        login.className = `${page}-section visible`;
        password.className = `${page}-section hidden`;
        break;
      case 'password':
        register.className = `${page}-section hidden`;
        login.className = `${page}-section hidden`;
        password.className = `${page}-section visible`;
        break;
    }
    if (verify.className.includes('expanded')) {
      toggleAside('#landing-leftbar', 'hide'); //--|🠈 Collapse Verify 🠈|--//
    }
    if (reset.className.includes('expanded')) {
      toggleAside('#landing-rightbar', 'hide'); //--|🠈 Collapse Reset 🠈|--//
    }
  } else if (page === 'verify' || 'reset') {
    switch (page) {
      case 'verify':
        toggleAside('#landing-leftbar', 'show'); //--|🠈 Expand Verify 🠈|--//
        break;
      case 'reset':
        toggleAside('#landing-rightbar', 'show'); //--|🠈 Expand Reset 🠈|--//
        break;
    }
  }
  */
}
export const toggleText = (page: 'login' | 'register' | 'password' | 'verify' | 'reset', text: string) => {
  let element = document.querySelector(`.${page}-text`)?.firstChild as HTMLElement;
  element.innerText = text;
};
export const toggleAside = (element: '#landing-leftbar' | '#landing-rightbar' | string, toggle: 'show' | 'hide') => {
  let sidebar = document.querySelector(element) as HTMLElement;
  switch (toggle) {
    case 'show':
      sidebar.classList.toggle('collapsed', false);
      sidebar.classList.toggle('expanded', true); //--|🠈 Expand Sidebar 🠈|--//
      break;
    case 'hide':
      sidebar.classList.toggle('expanded', false);
      sidebar.classList.toggle('collapsed', true); //--|🠈 Collapse Sidebar 🠈|--//
      break;
  }
};
export const refreshInputs = (page: 'register' | 'login' | 'password') => {
  switch (page) {
    case 'register':
      break;
    case 'login':
      break;
    case 'password':
      break;
  }
};
