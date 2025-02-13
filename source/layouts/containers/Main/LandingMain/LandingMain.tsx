// LandingMain.tsx
//--|🠋 Frameworks 🠋|--//
import ReactDOM from 'react-dom/client';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
//--|🠉 Frameworks 🠉|--//
//--|🠋 Modules 🠋|--//
import { EmailProvider } from '../../../../modules/context/EmailContext';
//--|🠉 Modules 🠉|--//
//--|🠋 Utilities 🠋|--//
import getResolution from '../../../../modules/utilities/getResolution';
import getOrientation from '../../../../modules/utilities/getOrientation';
import getIdentification from '../../../../modules/utilities/getIdentification';
//--|🠉 Utilities 🠉|--//
//--|🠋 Components 🠋|--//
import FormLogin from '../../../components/Form/login/Form.login';
import FormRegister from '../../../components/Form/register/Form.register';
import FormPassword from '../../../components/Form/password/Form.password';
//--|🠉 Components 🠉|--//
//--|🠋 Containers 🠋|--//
import ResumeMain from '../ResumeMain/ResumeMain';
import ResumeHeader from '../../Header/ResumeHeader/ResumeHeader';
import ResumeFooter from '../../Footer/ResumeFooter/ResumeFooter';
import ResumeOverlay from '../../Overlay/ResumeOverlay/ResumeOverlay';
import ResumeLeftbar from '../../Leftbar/ResumeLeftbar/ResumeLeftbar';
import ResumeRightbar from '../../Rightbar/ResumeRightbar/ResumeRightbar';
//--|🠉 Containers 🠉|--//
//--|🠋 Root 🠋|--//
import Resume from '../../../../resume';
//--|🠉 Root 🠉|--//

interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | 'landing' | string;
  };
}
const LandingMain: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'main';
  const pageName = info.identification;

  useEffect(() => {}, [pageName, blockName]);

  return (
    <main id={`${pageName}-${blockName}`} style={{ zIndex: 3 }} className={`default-${blockName}`}>
      <EmailProvider>
        <div className="landing-branding" style={{ zIndex: 1 }}>
          <img
            src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d11394a960db3ea88c21e28aa8035c3f40bdad7c/source/assets/svg-files/archive-images/tertius-roach/signature-icon/primary-light.svg"
            alt="Login Logo"
          />
        </div>
        <div className="landing-carousel" style={{ zIndex: 0 }}>
          <section className="register-section">
            <div className="register-container">
              <FormRegister info={info} />
            </div>
          </section>
          <section className="login-section">
            <div className="login-container">
              <FormLogin info={info} />
            </div>
          </section>
          <section className="password-section">
            <div className="password-container">
              <FormPassword info={info} />
            </div>
          </section>
        </div>
      </EmailProvider>
    </main>
  );
};
export default LandingMain;

export const viewCarousel = (page: 'register' | 'login' | 'password') => {
  let carouselContainer = document.querySelector('.landing-carousel') as HTMLElement;
  carouselContainer.style.transform = {
    register: 'translateX(0vw)',
    login: 'translateX(-100vw)',
    password: 'translateX(-200vw)',
  }[page];
};
export const toggleText = (element: string, dialogue: string) => {
  let tagText = document.querySelector(`${element}`)?.firstChild as HTMLElement;
  tagText.innerText = dialogue;
};
export const toggleAside = (element: string, toggle: 'show' | 'hide') => {
  let sidebar = document.querySelector(element) as HTMLElement;
  switch (toggle) {
    case 'show':
      sidebar.classList.toggle('collapsed', false);
      sidebar.classList.toggle('expanded', true); //--|🠈 Expand Sidebar 🠈|--//
      break;
    case 'hide':
      sidebar.classList.toggle('expanded', false);
      sidebar.classList.toggle('collapsed', true); //--|🠈 Collapse Sidebar 🠈|--//
      break;
  }
};
export const refreshInputs = (page: 'register' | 'login' | 'password') => {
  switch (page) {
    case 'register':
      break;
    case 'login':
      break;
    case 'password':
      break;
  }
};
