//--|🠊 landing.tsx 🠈|--//
//--|🠋 Dependencies 🠋|--//
import React, { Suspense, lazy } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Context 🠋|--//
import { EmailProvider } from '../../modules/context/EmailContext';
import { PasswordProvider } from '../../modules/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Containers 🠋|--//
const LandingMain = lazy(() => import('../containers/Main/LandingMain/LandingMain'));
const LandingHeader = lazy(() => import('../containers/Header/LandingHeader/LandingHeader'));
const LandingFooter = lazy(() => import('../containers/Footer/LandingFooter/LandingFooter'));
const LandingOverlay = lazy(() => import('../containers/Overlay/LandingOverlay/LandingOverlay'));
const LandingLeftbar = lazy(() => import('../containers/Leftbar/LandingLeftbar/LandingLeftbar'));
const LandingRightbar = lazy(() => import('../containers/Rightbar/LandingRightbar/LandingRightbar'));
//--|🠉 Containers 🠉|--//

function Landing() {
  return (
    <EmailProvider>
      <PasswordProvider>
        <LandingOverlay info={{ pageName: '[landing]', blockName: '<overlay>' }} />
        <LandingMain info={{ pageName: '[landing]', blockName: '<main>' }} />

        <Suspense fallback={<div className="display-1">Loading...</div>}>
          <LandingLeftbar info={{ pageName: '[landing]', blockName: '<leftbar>' }} />
          <LandingRightbar info={{ pageName: '[landing]', blockName: '<rightbar>' }} />

          <LandingHeader info={{ pageName: '[landing]', blockName: '<header>' }} />
          <LandingFooter info={{ pageName: '[landing]', blockName: '<footer>' }} />
        </Suspense>
      </PasswordProvider>
    </EmailProvider>
  );
}
export default Landing;
