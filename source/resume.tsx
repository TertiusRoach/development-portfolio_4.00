// resume.tsx
import './styles/resume.scss';
import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';

// Import container components
import ResumeMain from './layouts/containers/Main/ResumeMain/ResumeMain';
import ResumeHeader from './layouts/containers/Header/ResumeHeader/ResumeHeader';
import ResumeFooter from './layouts/containers/Footer/ResumeFooter/ResumeFooter';
import ResumeOverlay from './layouts/containers/Overlay/ResumeOverlay/ResumeOverlay';
import ResumeLeftbar from './layouts/containers/Leftbar/ResumeLeftbar/ResumeLeftbar';
import ResumeRightbar from './layouts/containers/Rightbar/ResumeRightbar/ResumeRightbar';

import { getSVG } from './modules/utilities/getFile';
import getResolution from './modules/utilities/getResolution';
import getOrientation from './modules/utilities/getOrientation';
import getIdentification from './modules/utilities/getIdentification';

// Download File
//raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d11394a960db3ea88c21e28aa8035c3f40bdad7c/source/assets/pdf-files/resume-page/curriculum-vitae.pdf

const DefaultBody = document.getElementById('resume-body') as HTMLElement;
function Body() {
  interface InfoProps {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  }

  let [infoPROP, newPROP] = useState<InfoProps>({
    resolution: `${getResolution()}`,
    orientation: `${getOrientation()}`,
    identification: `${getIdentification()}`,
  });

  useEffect(() => {
    function newInfo() {
      newPROP({
        resolution: `${getResolution()}`,
        orientation: `${getOrientation()}`,
        identification: `${getIdentification()}`,
      });
    }
    newInfo();
    window.addEventListener('resize', newInfo);

    return () => {
      window.removeEventListener('resize', newInfo);
    };
  }, []);
  return (
    <>
      <ResumeHeader info={infoPROP} />
      <ResumeMain info={infoPROP} />
      <ResumeFooter info={infoPROP} />

      <ResumeOverlay info={infoPROP} />
      <ResumeLeftbar info={infoPROP} />
      <ResumeRightbar info={infoPROP} />
    </>
  );
}

if (DefaultBody) {
  const root = ReactDOM.createRoot(DefaultBody);
  root.render(<Body />);
} else {
  console.error("Element with id 'resume-body' not found.");
}
