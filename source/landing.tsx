// resume.tsx
import './styles/landing.scss';
import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';

// Import container components
import ResumeMain from './layouts/containers/Main/LandingMain/LandingMain';
import ResumeHeader from './layouts/containers/Header/LandingHeader/LandingHeader';
import ResumeFooter from './layouts/containers/Footer/LandingFooter/LandingFooter';
import ResumeOverlay from './layouts/containers/Overlay/LandingOverlay/LandingOverlay';
import ResumeLeftbar from './layouts/containers/Leftbar/LandingLeftbar/LandingLeftbar';
import ResumeRightbar from './layouts/containers/Rightbar/LandingRightbar/LandingRightbar';

import { getSVG } from './modules/utilities/getFile';
import getResolution from './modules/utilities/getResolution';
import getOrientation from './modules/utilities/getOrientation';

interface InfoProps {
  resolution: String;
  orientation: String;
  identification: String;
}
const pageName = 'landing';
const DefaultBody = document.getElementById(`${pageName}-body`) as HTMLElement;
function Body() {
  let information = {
    resolution: `${getResolution()}`,
    orientation: `${getOrientation()}`,
    identification: pageName,
  };
  return (
    <>
      {/* <ResumeHeader info={infoPROP} /> */}
      <ResumeMain info={information} />
      {/* <ResumeFooter info={infoPROP} /> */}

      {/* <ResumeOverlay info={infoPROP} /> */}
      {/* <ResumeLeftbar info={infoPROP} /> */}
      {/* <ResumeRightbar info={infoPROP} /> */}
    </>
  );
}

if (DefaultBody) {
  const root = ReactDOM.createRoot(DefaultBody);
  root.render(<Body />);
} else {
  console.error("Element with id 'resume-body' not found.");
}
