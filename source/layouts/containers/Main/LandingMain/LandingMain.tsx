// LandingMain.tsx
//--|🠋 Dependencies 🠋|--//
import ReactDOM from 'react-dom/client';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Context 🠋|--//
import { EmailProvider } from '../../../../modules/scripts/context/EmailContext';
import { PasswordProvider } from '../../../../modules/scripts/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
import FormLogin from '../../../components/Form/login/Form.login';
import FormRegister from '../../../components/Form/register/Form.register';
import FormPassword from '../../../components/Form/password/Form.password';
//--|🠉 Components 🠉|--//
//--|🠋 Functions 🠋|--//
import { viewBlock, viewText } from '../../../../landing';
//--|🠉 Functions 🠉|--//

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
    <main id={`${pageName}-${blockName}`} style={{ zIndex: 0 }} className={`default-${blockName}`}>
      <div className="landing-branding" style={{ zIndex: 1 }}>
        <img
          src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d11394a960db3ea88c21e28aa8035c3f40bdad7c/source/assets/svg-files/archive-images/tertius-roach/signature-icon/primary-light.svg"
          alt="Login Logo"
        />
      </div>
      <div className="landing-carousel" style={{ zIndex: 0 }}>
        <section className="register-section hidden">
          <div className="register-container">
            <FormRegister info={info} />
          </div>
        </section>
        <section className="login-section visible">
          <div className="login-container">
            <FormLogin info={info} />
          </div>
        </section>
        <section className="password-section hidden">
          <div className="password-container">
            <FormPassword info={info} />
          </div>
        </section>
      </div>
    </main>
  );
};
export default LandingMain;
