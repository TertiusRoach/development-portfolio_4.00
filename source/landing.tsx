// import './styles/LandingBody.scss';
import './layouts/styles/LandingBody.scss';

import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';

import getResolution from './modules/scripts/getResolution';
import getOrientation from './modules/scripts/getOrientation';

import LandingMain from './layouts/containers/Main/LandingMain/LandingMain';
import LandingLeftbar from './layouts/containers/Leftbar/LandingLeftbar/LandingLeftbar';
import LandingRightbar from './layouts/containers/Rightbar/LandingRightbar/LandingRightbar';

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
      <LandingLeftbar info={information} />
      <LandingMain info={information} />
      <LandingRightbar info={information} />
    </>
  );
}
if (landingBody) {
  ReactDOM.createRoot(landingBody).render(<Landing />);
} else {
  console.error(`Can't find with #${pageName}-body`);
}
