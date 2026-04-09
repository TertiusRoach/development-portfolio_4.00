//--|🠊 TicketingOverlay.tsx 🠈|--//
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
import ButtonGrade from '../../../components/Button/archive/grade/Button.grade';
import DivisionLoading from '../../../components/Division/loading/Division.loading';
import ArticleSelection from '../../../components/Article/archive/selection/Article.selection';
import DivisionSelection from '../../../components/Division/selection/Division.selection';
//--|🠉 Components 🠉|--//
//--|🠋 Functions 🠋|--//
// import { viewBlock, viewText, outputDisplay } from '../../../pages/landing';
import HeaderBranding from '../../../components/Header/branding/Header.branding';
//--|🠉 Functions 🠉|--//

interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | string;
    identification: 'landing' | 'overtime' | 'ticketing' | 'hyperlink';
  };
}
const TicketingOverlay: React.FC<InfoProps> = ({ info }) => {
  const pageName: string = info.identification as 'ticketing';
  const blockName: string = 'overlay';
  const roleName: string = '' as 'manager' | 'employee';

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
        <section className="loading-section">
          <img
            src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/gif-files/trinity-apps/1280x720%2C%2015fps/1280x720%2C%2015fps_black.gif"
            alt="loading-logo"
          />
        </section>
        <section className="selection-section">
          {/* <HeaderBranding info={info} /> */}
          {/* <ArticleSelection info={info} /> */}
        </section>
      </div>
    </section>
  );
};
export default TicketingOverlay;
