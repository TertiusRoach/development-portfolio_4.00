// VerifyMain.tsx
//--|🠋 Frameworks 🠋|--//
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
//--|🠉 Frameworks 🠉|--//
//--|🠋 Utilities 🠋|--//

//--|🠉 Utilities 🠉|--//
//--|🠋 Components 🠋|--//

//--|🠉 Components 🠉|--//

/*
interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | 'landing' | string;
  };
}
*/
const VerifyMain: React.FC = () => {
  const blockName = 'main';
  const pageName = 'verify';

  useEffect(() => {
    console.log(`Initialized ${pageName}-${blockName}`);
  }, [pageName, blockName]);
  return (
    <main id={`${pageName}-${blockName}`} style={{ zIndex: 3 }} className={`default-${blockName}`}>
      <div className="test">
        <h1 className="display-1">Check your email for the verification code.</h1>
      </div>
    </main>
    // <main id={`${pageName}-${blockName}`} style={{ zIndex: 3 }} className={`default-${blockName}`}>

    // </main>
  );
};
export default VerifyMain;

function Desktop({ pageName, blockName }: { pageName: string; blockName: string }) {
  console.log(`Refreshed: Desktop Orientation <main id="${pageName}-${blockName}">`);
  return (
    <>
      <h1 className="display-1">Check your email for the verification code.</h1>
    </>
  );
}
function Mobile({ pageName, blockName }: { pageName: string; blockName: string }) {
  console.log(`Refreshed: Mobile Orientation <main id="${pageName}-${blockName}">`);
  return (
    <>
      <h1 className="display-1">Check your email for the verification code.</h1>
    </>
  );
}
