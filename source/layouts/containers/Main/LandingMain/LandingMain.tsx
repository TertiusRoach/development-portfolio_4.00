// IndexMain.tsx
//--|🠋 Frameworks 🠋|--//
import $ from 'jquery';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
//--|🠉 Frameworks 🠉|--//
//--|🠋 Utilities 🠋|--//
import { getSVG } from '../../../../modules/utilities/getFile';
import getScroll from '../../../../modules/utilities/getScroll';
import toggleAside from '../../../../modules/utilities/toggleAside';
import getIdentification from '../../../../modules/utilities/getIdentification';
//--|🠉 Utilities 🠉|--//
//--|🠋 Components 🠋|--//
import ButtonFade from '../../../components/Button/fade/Button.fade';
import MenuButton from '../../../components/Menu/button/Menu.button';
import SectionHome from '../../../components/Section/home/Section.home';
import SectionNoir from '../../../components/Section/noir/Section.noir';
import SectionSkills from '../../../components/Section/skills/Section.skills';
import SectionContact from '../../../components/Section/contact/Section.contact';
import SectionDefault from '../../../components/Section/default/Section.default';
//--|🠉 Components 🠉|--//

function Desktop({ pageName, blockName }: { pageName: string; blockName: string }) {
  console.log(`Refreshed: Desktop Orientation <${blockName}>`);
  console.log(pageName);
  return (
    <div className="landing-carousel">
      <section className="register-section">
        <h1>Register Section</h1>
      </section>
      <section className="login-section">
        <div className="login-container">
          <form className="login-form">
            {/* ----- */}
            <div className="login-header">
              <div className="login-label">
                <h6 className="display-6">Login</h6>
              </div>
              <button className="login-demo">
                <img
                  src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d96e3df748dac85a20c559b47659c1a3763a5fe/source/assets/svg-files/index-page/close/close-dark.svg"
                  alt=""
                />
              </button>
              <div className="login-logo">
                <img
                  src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d11394a960db3ea88c21e28aa8035c3f40bdad7c/source/assets/svg-files/archive-images/tertius-roach/signature-icon/primary-light.svg"
                  alt="Login Logo"
                />
              </div>
            </div>
            {/* ----- */}
            <div className="login-inputs">
              <input placeholder="Email" type="text" id="email" name="Email" />
              <input placeholder="Password" type="password" id="password" name="password" />
            </div>
            {/* ----- */}
            <div className="login-footer">
              <mark className="login-action">
                <button className="login-button">
                  <h6>Login</h6>
                </button>
                <div className="login-message">
                  <h6>Incorrect Password</h6>
                </div>
              </mark>
              <menu className="login-buttons">
                <button className="login-register">
                  <h6>Register Account</h6>
                </button>
                <button className="login-password">
                  <h6>Forgot Password?</h6>
                </button>
              </menu>
            </div>
            {/* ----- */}
          </form>
        </div>
      </section>
      <section className="password-section">
        <h1>Password Section</h1>
      </section>

      {/* 
      <section className="login-section">
        <header className="login-header">
          <div className="login-label">
            <h6 className="display-6">Login</h6>
          </div>
          <button className="login-demo">
            <img
              src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d96e3df748dac85a20c559b47659c1a3763a5fe/source/assets/svg-files/index-page/close/close-dark.svg"
              alt=""
            />
          </button>
          <div className="login-logo">
            <img
              src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d11394a960db3ea88c21e28aa8035c3f40bdad7c/source/assets/svg-files/archive-images/tertius-roach/signature-icon/primary-light.svg"
              alt="Login Logo"
            />
          </div>
        </header>
        <form className="login-form">
          <input placeholder="Email" type="text" id="email" name="Email" />
          <input placeholder="Password" type="password" id="password" name="password" />
        </form>
        <footer className="login-footer">
          <mark className="login-action">
            <button className="login-button">
              <h6>Login</h6>
            </button>
            <div className="login-message">
              <h6>Incorrect Password</h6>
            </div>
          </mark>
          <menu className="login-buttons">
            <button className="login-register">
              <h6>Register Account</h6>
            </button>
            <button className="login-password">
              <h6>Forgot Password?</h6>
            </button>
          </menu>
        </footer>
      </section> 
      */}
    </div>
  );
}
function Mobile({ pageName, blockName }: { pageName: string; blockName: string }) {
  console.log(`Refreshed: Desktop Orientation <${blockName}>`);
  return (
    <div>
      <h1>Mobile View for {pageName}</h1>
    </div>
  );
}

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

  useEffect(() => {
    console.log(`Initialized ${pageName}-${blockName}`);
  }, [pageName, blockName]);

  return (
    <main id={`${pageName}-${blockName}`} style={{ zIndex: 3 }} className={`default-${blockName}`}>
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: landscape)' }) && <Desktop pageName={pageName} blockName={blockName} />}

      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: portrait)' }) && <Mobile pageName={pageName} blockName={blockName} />}
    </main>
  );
};

export default LandingMain;
