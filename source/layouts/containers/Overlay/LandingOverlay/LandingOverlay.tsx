//--|🠊 LandingOverlay.tsx 🠈|--//
//--|🠋 Dependencies 🠋|--//
import ReactDOM from 'react-dom/client';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Context 🠋|--//
import { EmailProvider } from '../../../../modules/context/EmailContext';
import { PasswordProvider } from '../../../../modules/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
import DivisionLoading from '../../../components/Division/loading/Division.loading';
import DivisionSelection from '../../../components/Division/selection/Division.selection';
//--|🠉 Components 🠉|--//
//--|🠋 Functions 🠋|--//
import { viewBlock, viewText, outputDisplay } from '../../../../landing';
//--|🠉 Functions 🠉|--//

interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'landing' | 'overtime' | 'ticketing' | 'hyperlink';
  };
}
const LandingOverlay: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'overlay';
  const pageName = info.identification;
  const stateName: 'visible' | 'hidden' = 'visible';

  useEffect(() => {
    /*
    let sectionElement = document.querySelector('section[class*="login-section"]') as HTMLElement;
    outputDisplay(sectionElement);
    */
  }, [pageName, blockName]);

  return (
    <section className={`default-${blockName} ${stateName}`} id={`${pageName}-${blockName}`} style={{ zIndex: 3 }}>
      <div className="landing-carousel" style={{ zIndex: 0 }}>
        <section className="loading-section visible">
          <div className="loading-container">
            {/*  */}
            <DivisionLoading info={info} />
            {/*  */}
          </div>
        </section>
        <section className="selection-section hidden">
          <div className="selection-container">
            {/*  */}
            <DivisionSelection info={info} />
            {/*  */}
          </div>
        </section>
      </div>

      {/* <div className="landing-carousel" style={{ zIndex: 0 }}></div> */}

      {/* <div className="loading-division"></div> */}
    </section>
  );
};
export default LandingOverlay;
