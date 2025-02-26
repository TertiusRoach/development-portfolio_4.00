import './layouts/styles/landing.scss';

import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';

import getResolution from './modules/scripts/getResolution';
import getOrientation from './modules/scripts/getOrientation';

//--|🠋 Context 🠋|--//
import { EmailProvider } from './modules/utilities/context/EmailContext';
import { PasswordProvider } from './modules/utilities/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Containers 🠋|--//
import LandingHeader from './layouts/containers/Header/LandingHeader/LandingHeader';

import LandingLeftbar from './layouts/containers/Leftbar/LandingLeftbar/LandingLeftbar';
import LandingMain from './layouts/containers/Main/LandingMain/LandingMain';
import LandingRightbar from './layouts/containers/Rightbar/LandingRightbar/LandingRightbar';

import LandingFooter from './layouts/containers/Footer/LandingFooter/LandingFooter';
//--|🠉 Containers 🠉|--//
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
