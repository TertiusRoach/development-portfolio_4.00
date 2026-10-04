//--|🠊 Landing.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { Suspense, lazy, useState, useEffect } from 'react';

//--|🠋 Containers (*.tsx) 🠋|--\\
const LandingMain = lazy(() => import('./Main/LandingMain'));
const LandingHeader = lazy(() => import('./Header/LandingHeader'));
const LandingFooter = lazy(() => import('./Footer/LandingFooter'));

const LandingOverlay = lazy(() => import('./Overlay/LandingOverlay'));
const LandingLeftbar = lazy(() => import('./Leftbar/LandingLeftbar'));
const LandingRightbar = lazy(() => import('./Rightbar/LandingRightbar'));

//--|🠋 Styles (*.scss) 🠋|--\\
import './Main/LandingMain.scss';
import './Header/LandingHeader.scss';
import './Footer/LandingFooter.scss';

import './Overlay/LandingOverlay.scss';
import './Leftbar/LandingLeftbar.scss';
import './Rightbar/LandingRightbar.scss';

function Landing() {
  const [getMain, setMain] = useState(false);
  const [getHeader, setHeader] = useState(false);
  const [getFooter, setFooter] = useState(false);

  const [getOverlay, setOverlay] = useState(false);
  const [getLeftbar, setLeftbar] = useState(false);
  const [getRightbar, setRightbar] = useState(false);

  useEffect(() => {
    //--|🠋 Contains the Asynchronous References 🠋|--\\
    const overlayTimer = setTimeout(() => setOverlay(true), 0 * 0); //--|🠈 Must Load First and not allowed to reference <Main>. 🠈|--\\
    const mainTimer = setTimeout(() => setMain(true), 250 * 1); //--|🠈 Must Load First and not allowed to reference <Overlay>. 🠈|--\\

    //--|🠋 References <Main> block container 🠋|--\\
    const headerTimer = setTimeout(() => setHeader(true), 250 * 2);
    const footerTimer = setTimeout(() => setFooter(true), 250 * 2);

    const leftbarTimer = setTimeout(() => setLeftbar(true), 250 * 3);
    const rightbarTimer = setTimeout(() => setRightbar(true), 250 * 3);

    setTimeout(() => {
      /*--|🠋
      
      🠉|--*/
      console.log('|🠊 Entry Point: <div id="landing-body"> 🠈|');
    }, 60000);

    return () => {
      clearTimeout(headerTimer);
      clearTimeout(footerTimer);
      clearTimeout(mainTimer);

      clearTimeout(overlayTimer);
      clearTimeout(leftbarTimer);
      clearTimeout(rightbarTimer);
    };
  }, []);

  return (
    <>
      <Suspense fallback={<div className="display-1">Loading Header...</div>}>
        {getHeader && <LandingHeader info={{ pageName: '[landing]', blockName: '<header>', labelName: '(default)' }} />}
      </Suspense>
      <Suspense fallback={<div className="display-1">Loading Main...</div>}>
        {getMain && <LandingMain info={{ pageName: '[landing]', blockName: '<main>', labelName: '(default)' }} />}
      </Suspense>
      <Suspense fallback={<div className="display-1">Loading Footer...</div>}>
        {getFooter && <LandingFooter info={{ pageName: '[landing]', blockName: '<footer>', labelName: '(default)' }} />}
      </Suspense>
      //--|🟪|--\\
      <Suspense fallback={<div className="display-1">Loading Leftbar...</div>}>
        {getLeftbar && <LandingLeftbar info={{ pageName: '[landing]', blockName: '<leftbar>', labelName: '(default)' }} />}
      </Suspense>
      <Suspense fallback={<div className="display-1">Loading Overlay...</div>}>
        {getOverlay && <LandingOverlay info={{ pageName: '[landing]', blockName: '<overlay>', labelName: '(default)' }} />}
      </Suspense>
      <Suspense fallback={<div className="display-1">Loading Rightbar...</div>}>
        {getRightbar && <LandingRightbar info={{ pageName: '[landing]', blockName: '<rightbar>', labelName: '(default)' }} />}
      </Suspense>
    </>
  );
}
export default Landing;
