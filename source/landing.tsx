// landing.tsx
import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';

import './styles/LandingBody.scss';

import { getSVG } from './modules/utilities/getFile';
import getResolution from './modules/utilities/getResolution';
import getOrientation from './modules/utilities/getOrientation';

// Import container components
//--|🠋 Styles 🠋|--//
import './styles/ResumeBody.scss';
import './styles/LandingBody.scss';
//--|🠉 Styles 🠉|--//

//--|🠋 Containers 🠋|--//
import LandingMain from './layouts/containers/Main/LandingMain/LandingMain';
import LandingLeftbar from './layouts/containers/Leftbar/LandingLeftbar/LandingLeftbar';
import LandingRightbar from './layouts/containers/Rightbar/LandingRightbar/LandingRightbar';
//--|🠉 Containers 🠉|--//

const pageName = 'landing';
const landingBody = document.getElementById(`${pageName}-body`) as HTMLElement;
function Landing() {
  let information = {
    resolution: `${getResolution()}`,
    orientation: `${getOrientation()}`,
    identification: pageName,
  };
  return (
    <>
      <LandingMain info={information} />
      <LandingLeftbar info={information} />
      <LandingRightbar info={information} />
    </>
  );
}

if (landingBody) {
  ReactDOM.createRoot(landingBody).render(<Landing />);
} else {
  console.error(`Can't find with #${pageName}-body`);
}
