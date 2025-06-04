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
import ButtonGrading from '../../../components/Button/grade/Button.grading';
import DivisionLoading from '../../../components/Division/loading/Division.loading';
import ArticleSelection from '../../../components/Article/selection/Article.selection';
import DivisionSelection from '../../../components/Division/selection/Division.selection';
//--|🠉 Components 🠉|--//
//--|🠋 Functions 🠋|--//
// import { viewBlock, viewText, outputDisplay } from '../../../pages/landing';
import HeaderBranding from '../../../components/Header/branding/Header.branding';
//--|🠉 Functions 🠉|--//

interface InfoProps {
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName:
      | '<overlay>'
      | '<leftbar>'
      | '<rightbar>'
      | '<header>'
      | '<footer>'
      | '<main>'
      | string;
    roleName?:
      | '(established)'
      | '(freelancing)'
      | '(manager)'
      | '(employee)'
      | '(specialist)'
      | '(technician)'
      | string;
  };
}
const LandingOverlay: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'overlay';
  const pageName = info.pageName as 'landing';
  const stateName: 'visible' | 'hidden' = 'visible';

  useEffect(() => {
    /*
    let sectionElement = document.querySelector('section[class*="login-section"]') as HTMLElement;
    outputDisplay(sectionElement);
    */
  }, [pageName, blockName]);

  let imageLink: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/gif-files/trinity-apps/1280x720%2C%2015fps/1280x720%2C%2015fps_white.gif';

  return (
    <section
      className={`default-${blockName} ${stateName}`}
      id={`${pageName}-${blockName}`}
      style={{ zIndex: 3 }}
    >
      <div className="landing-carousel" style={{ zIndex: 0 }}>
        <section className="loading-section">
          <img src={imageLink} alt="loading-logo" />
        </section>
        <section className="selection-section">
          {/* <HeaderBranding info={info} /> */}
          {/* <ArticleSelection info={info} /> */}
        </section>
      </div>
    </section>
  );
};
export default LandingOverlay;
