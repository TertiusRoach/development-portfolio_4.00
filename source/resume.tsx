// resume.tsx
import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';

// Import container components
import './styles/ResumeBody.scss';
import ResumeMain from './layouts/containers/Main/ResumeMain/ResumeMain';
import ResumeHeader from './layouts/containers/Header/ResumeHeader/ResumeHeader';
import ResumeFooter from './layouts/containers/Footer/ResumeFooter/ResumeFooter';
import ResumeOverlay from './layouts/containers/Overlay/ResumeOverlay/ResumeOverlay';
import ResumeLeftbar from './layouts/containers/Leftbar/ResumeLeftbar/ResumeLeftbar';
import ResumeRightbar from './layouts/containers/Rightbar/ResumeRightbar/ResumeRightbar';

import { getSVG } from './modules/utilities/bin/getFile';
import getResolution from './modules/utilities/getResolution';
import getOrientation from './modules/utilities/getOrientation';
import getIdentification from './modules/utilities/getIdentification';

const pageName = 'resume';
const DefaultBody = document.getElementById(`${pageName}-body`) as HTMLElement;

function Resume() {
  let information = {
    resolution: `${getResolution()}`,
    orientation: `${getOrientation()}`,
    identification: pageName,
  };
  return (
    <>
      {/* <ResumeHeader info={information} /> */}
      <ResumeMain info={information} />
      {/* <ResumeFooter info={information} /> */}
      {/* <ResumeOverlay info={information} /> */}
      {/* <ResumeLeftbar info={information} /> */}
      {/* <ResumeRightbar info={information} /> */}

      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {/* {useMediaQuery({ query: '(orientation: landscape)' }) && <Desktop pageName={pageName} blockName={blockName} />} */}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {/* {useMediaQuery({ query: '(orientation: portrait)' }) && <Mobile pageName={pageName} blockName={blockName} />} */}
    </>
  );
}
export default Resume;

if (DefaultBody) {
  const root = ReactDOM.createRoot(DefaultBody);
  root.render(<Resume />);
} else {
  console.error("Element with id 'resume-body' not found.");
}
