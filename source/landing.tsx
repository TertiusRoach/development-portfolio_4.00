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

import ResumeMain from './layouts/containers/Main/ResumeMain/ResumeMain';
import ResumeHeader from './layouts/containers/Header/ResumeHeader/ResumeHeader';
import ResumeFooter from './layouts/containers/Footer/ResumeFooter/ResumeFooter';
import ResumeOverlay from './layouts/containers/Overlay/ResumeOverlay/ResumeOverlay';
import ResumeLeftbar from './layouts/containers/Leftbar/ResumeLeftbar/ResumeLeftbar';
import ResumeRightbar from './layouts/containers/Rightbar/ResumeRightbar/ResumeRightbar';
//--|🠉 Containers 🠉|--//

const pageName = 'landing';
const ResumeBody = document.getElementById('resume-body') as HTMLElement;
const LandingBody = document.getElementById(`${pageName}-body`) as HTMLElement;
function Landing() {
  let information = {
    resolution: `${getResolution()}`,
    orientation: `${getOrientation()}`,
    identification: pageName,
  };
  return (
    <>
      <LandingMain info={information} />
    </>
  );
}
function Resume() {
  let information = {
    resolution: `${getResolution()}`,
    orientation: `${getOrientation()}`,
    identification: 'resume',
  };
  return (
    <>
      {/* <ResumeHeader info={information} /> */}
      <ResumeMain info={information} />
      {/* <ResumeFooter info={information} /> */}

      {/* <ResumeOverlay info={information} /> */}
      {/* <ResumeLeftbar info={information} /> */}
      {/* <ResumeRightbar info={information} /> */}
    </>
  );
}
export default Resume;

if (LandingBody) {
  ReactDOM.createRoot(LandingBody).render(<Landing />);
} else {
  console.error(`Can't find with #${pageName}-body`);
}
