// LandingMain.tsx
//--|🠋 Frameworks 🠋|--//
import ReactDOM from 'react-dom/client';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
//--|🠉 Frameworks 🠉|--//
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
  const [currentView, setCurrentView] = useState<'default' | 'unverified' | 'authorized' | 'recovery'>('default');

  useEffect(() => {
    // console.log(currentView);
    switch (currentView) {
      case 'default':
        let resumeBody = document.querySelector('#resume-body') as HTMLDivElement;
        resumeBody.innerHTML = '<main class="default-main" />';
        // return ReactDOM.createRoot(resumeBody).render(<main className="default-main" />);
        break;
      case 'authorized':
        // loadResume();
        alert('//--|🠊 Login Successful: Load Page 🠈|--//');
        break;
      case 'unverified':
        let landingLeftbar = document.querySelector('#landing-leftbar') as HTMLElement;
        if (landingLeftbar) {
          // Check if the element exists before accessing its properties
          if (landingLeftbar.classList.contains('collapsed')) {
            landingLeftbar.classList.remove('collapsed');
          }
          landingLeftbar.classList.add('expanded');
        }
        break;
        alert('//--|🠊 Registration Pending: Confirm Email 🠈|--//');
      case 'recovery':
        let landingRightbar = document.querySelector('#landing-leftbar') as HTMLElement;
        if (landingRightbar) {
          // Check if the element exists before accessing its properties
          if (landingRightbar.classList.contains('collapsed')) {
            landingRightbar.classList.remove('collapsed');
          }
          landingRightbar.classList.add('expanded');
        }
        alert('//--|🠊 Password Request: Confirm Code 🠈|--//');
        break;
      default:
        // ReactDOM.createRoot(resumeBody).render(<div />);
        break;
    }
    // console.log(`//--|🠊 Initialized ${pageName}-${blockName} 🠈|--//`);
  }, [pageName, blockName, currentView]);

  return (
    <main id={`${pageName}-${blockName}`} style={{ zIndex: 3 }} className={`default-${blockName}`}>
      <div className="landing-carousel">
        <section className="register-section">
          <div className="register-container">
            <FormRegister info={info} />
          </div>
          {/* <div className="register-container">{renderForm('register')}</div> */}
        </section>
        <section className="login-section">
          <div className="login-container">
            <FormLogin info={info} />
          </div>
          {/* <div className="login-container">{renderForm('login')}</div> */}
        </section>
        <section className="password-section">
          <div className="password-container">
            <FormPassword info={info} />
          </div>
          {/* <div className="password-container">{renderForm('password')}</div> */}
        </section>
      </div>
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
