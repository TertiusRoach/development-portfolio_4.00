const pageName = 'landing';
const landingBody = document.getElementById(`${pageName}-body`) as HTMLElement;

import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';

import './styles/LandingBody.scss';

import { getSVG } from './modules/utilities/getFile';
import getResolution from './modules/utilities/getResolution';
import getOrientation from './modules/utilities/getOrientation';

// Import container components
import './styles/ResumeBody.scss'; // You mentioned you're redoing this, so we can skip this for now.
import './styles/LandingBody.scss';

import LandingMain from './layouts/containers/Main/LandingMain/LandingMain';
import LandingLeftbar from './layouts/containers/Leftbar/LandingLeftbar/LandingLeftbar';
import LandingRightbar from './layouts/containers/Rightbar/LandingRightbar/LandingRightbar';

function Landing() {
  let information = {
    resolution: `${getResolution()}`,
    orientation: `${getOrientation()}`,
    identification: pageName,
  };
  return (
    <>
      <LandingLeftbar info={information} />
      <LandingMain info={information} />
      {/* <LandingRightbar info={information} /> */}
    </>
  );
}

if (landingBody) {
  ReactDOM.createRoot(landingBody).render(<Landing />);
} else {
  console.error(`Can't find with #${pageName}-body`);
}
