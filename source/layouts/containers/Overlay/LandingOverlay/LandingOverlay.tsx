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
import MenuBranding from '../../../components/Menu/branding/Menu.branding';
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

  let headImage =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/bad07f5fd906593a1c3faf5b0810941d4a9acaf5/source/assets/svg-files/archive-images/tertius-roach/signature-adjacent/primary-dark.svg';
  let brandImage =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/861d6c3d25d45ec174c8d12aedc407f59dc85317/source/assets/svg-files/trinity-apps/trinity-apps.svg';

  return (
    <section className={`default-${blockName} ${stateName}`} style={{ zIndex: 3 }} id={`${pageName}-${blockName}`}>
      <div className="selection-division">
        <header className="navigation-branding">
          <MenuBranding src={headImage} style={{ brandView: 'left', blockName: blockName, pageName: pageName }} />
        </header>
        <article className="article-selection">
          <aside className="left-overlay">open-apps</aside>
          <aside className="right-overlay">view-demos</aside>

          <nav className="open-apps">
            <ul className="content"></ul>
          </nav>
          <nav className="view-demo">
            <ul className="landing"></ul>
          </nav>

          <div className="selection-icon">
            <img style={{ maskImage: `url(${brandImage})`, WebkitMaskImage: `url(${brandImage})` }} />
          </div>
        </article>
      </div>
      <div className="loading-division"></div>
    </section>
  );
};
export default LandingOverlay;
