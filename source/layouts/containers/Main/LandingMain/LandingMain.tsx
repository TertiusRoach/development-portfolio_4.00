//--|🠊 LandingMain.tsx 🠈|--//
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
import FormLogin from '../../../components/Form/login/Form.login';
import FormRegister from '../../../components/Form/register/Form.register';
import FormPassword from '../../../components/Form/password/Form.password';
//--|🠉 Components 🠉|--//
//--|🠋 Functions 🠋|--//
import { viewBlock, viewText, outputDisplay } from '../../../../script/landing';
import FigureRotation from '../../../components/Figure/rotation/Figure.rotation';
//--|🠉 Functions 🠉|--//

interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'landing' | 'overtime' | 'ticketing' | 'hyperlink';
  };
}
const LandingMain: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'main';
  const pageName = info.identification;

  useEffect(() => {
    /*
    let sectionElement = document.querySelector('section[class*="login-section"]') as HTMLElement;
    outputDisplay(sectionElement);
    */
  }, [pageName, blockName]);

  return (
    <main id={`${pageName}-${blockName}`} style={{ zIndex: 0 }} className={`default-${blockName}`}>
      <div className="landing-carousel" style={{ zIndex: 0 }}>
        <section className="register-section hidden">
          <div className="register-container">
            <h4 className="register-label display-4">Register</h4>
            <FormRegister info={info} />
            <FigureRotation style={{ fadeView: 'track-a-day' }} />
          </div>
        </section>
        <section className="login-section visible">
          <div className="login-container">
            <h4 className="login-label display-4">Login</h4>
            <FormLogin info={info} />
            <FigureRotation style={{ fadeView: 'log-a-ticket' }} />
          </div>
        </section>
        <section className="password-section hidden">
          <div className="password-container">
            <h4 className="password-label display-4">Password</h4>
            <FormPassword info={info} />
            <FigureRotation style={{ fadeView: 'find-a-link' }} />
          </div>
        </section>
      </div>
    </main>
  );
};
export default LandingMain;
