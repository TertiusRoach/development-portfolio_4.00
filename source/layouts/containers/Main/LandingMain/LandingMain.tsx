// LandingMain.tsx
//--|🠋 Frameworks 🠋|--//
import $ from 'jquery';
import axios from 'axios';
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
  console.log(`Refreshed: Desktop Orientation <main id="${pageName}-${blockName}">`);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDatabase = async (event: React.FormEvent, slide: 'register' | 'login' | 'password') => {
    event.preventDefault(); // Prevents refresh
    switch (slide) {
      case 'login':
        let loginForm = event.currentTarget as HTMLFormElement;
        let loginEmail = loginForm.childNodes[1].childNodes[0] as HTMLInputElement;
        let loginPassword = loginForm.childNodes[1].childNodes[1] as HTMLInputElement;
        if (loginEmail.value !== '' || loginPassword.value !== '') {
          setIsSubmitting(true);
          try {
            const response = await axios.post('http://localhost:3000/users/login', {
              email,
              passwordHash: password,
            });
            setLoginMessage(response.data); // Success message

            //--|🠊 Security Cleared: Load Application 🠈|--//
          } catch (error) {
            setLoginMessage('Invalid credentials.'); // User feedback
            console.error('Error during login:', error);
          } finally {
            setIsSubmitting(false);
          }
        }
        break;
      case 'register':
        //--|🠊 Test Register 🠈|--//
        break;
      case 'password':
        //--|🠊 Test Password 🠈|--//
        break;
    }
  };

  return (
    <div className="landing-carousel">
      <section className="register-section">
        <div className="register-container">
          <form className="register-form">
            {/* ----- */}
            <div className="register-header">
              <div className="register-label">
                <h6 className="display-6">Register</h6>
              </div>
              <button className="register-demo">
                <img
                  src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d96e3df748dac85a20c559b47659c1a3763a5fe/source/assets/svg-files/index-page/close/close-dark.svg"
                  alt=""
                />
              </button>
              <div className="register-logo">
                <img
                  src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d11394a960db3ea88c21e28aa8035c3f40bdad7c/source/assets/svg-files/archive-images/tertius-roach/signature-icon/primary-light.svg"
                  alt="Login Logo"
                />
              </div>
            </div>
            {/* ----- */}
            <div className="register-inputs">
              <div className="fullname-inputs">
                <input placeholder="First Name" type="text" id="first-name" name="First Name" />
                <input placeholder="Last Name" type="text" id="last-name" name="Last Name" />
              </div>

              <input placeholder="Email" type="text" id="email" name="Email" />
              <input placeholder="Password" type="password" id="password" name="password" />
            </div>
            {/* ----- */}
            <div className="register-footer">
              <mark className="register-action">
                <button className="register-button">
                  <h6>Register</h6>
                </button>
                <div className="register-message">
                  <h6>Email already exists.</h6>
                </div>
              </mark>
              <menu className="register-buttons">
                {/* Type 'void' is not assignable to type 'MouseEventHandler<HTMLButtonElement> | undefined'. */}
                <button className="register-login" type="button" onClick={() => viewCarousel('login')}>
                  <h6>Access Account</h6>
                </button>
                <button className="register-password" type="button" onClick={() => viewCarousel('password')}>
                  <h6>Renew Password</h6>
                </button>
              </menu>
            </div>
            {/* ----- */}
          </form>
        </div>
      </section>
      <section className="login-section">
        <div className="login-container">
          {/* For now I just want to focus on this bit */}
          <form className="login-form" onSubmit={(event) => handleDatabase(event, 'login')}>
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
              <input
                id="email"
                name="Email"
                type="email"
                value={email}
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)} // Update state
              />
              <input
                id="password"
                name="Password"
                type="password"
                value={password}
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)} // Update state
              />
            </div>
            {/* ----- */}
            <div className="login-footer">
              <mark className="login-action">
                <button className="login-button" disabled={isSubmitting}>
                  <h6>Login</h6>
                </button>
                <div className={`login-message ${loginMessage.includes('Success') ? 'success' : 'error'}`}>
                  <h6>{loginMessage}</h6>
                </div>
              </mark>
              <menu className="login-buttons">
                <button className="login-register" type="button" onClick={() => viewCarousel('register')}>
                  <h6>Register Account</h6>
                </button>
                <button className="login-password" type="button" onClick={() => viewCarousel('password')}>
                  <h6>Forgot Password</h6>
                </button>
              </menu>
            </div>
            {/* ----- */}
          </form>
        </div>
      </section>
      <section className="password-section">
        <div className="password-container">
          <form className="password-form">
            {/* ----- */}
            <div className="password-header">
              <div className="password-label">
                <h6 className="display-6">Password</h6>
              </div>
              <button className="password-demo">
                <img
                  src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d96e3df748dac85a20c559b47659c1a3763a5fe/source/assets/svg-files/index-page/close/close-dark.svg"
                  alt=""
                />
              </button>
              <div className="password-logo">
                <img
                  src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d11394a960db3ea88c21e28aa8035c3f40bdad7c/source/assets/svg-files/archive-images/tertius-roach/signature-icon/primary-light.svg"
                  alt="Login Logo"
                />
              </div>
            </div>
            {/* ----- */}
            <div className="password-inputs">
              <input placeholder="Email" type="text" id="email" name="Email" />
              <input placeholder="New Password" type="password" id="password" name="password" />
            </div>
            {/* ----- */}
            <div className="password-footer">
              <mark className="password-action">
                <button className="password-button">
                  <h6>Change</h6>
                </button>
                <div className="password-message">
                  <h6>Can't find Email.</h6>
                </div>
              </mark>
              <menu className="password-buttons">
                <button className="password-login" type="button" onClick={() => viewCarousel('login')}>
                  <h6>Enter Account</h6>
                </button>
                <button className="password-register" type="button" onClick={() => viewCarousel('register')}>
                  <h6>Register Account</h6>
                </button>
              </menu>
            </div>
            {/* ----- */}
          </form>
        </div>
      </section>
    </div>
  );
}
function Mobile({ pageName, blockName }: { pageName: string; blockName: string }) {
  console.log(`Refreshed: Mobile Orientation <main id="${pageName}-${blockName}">`);
  return (
    <div className="landing-carousel">
      <section className="register-section">
        <div className="register-container">
          <form className="register-form">
            {/* ----- */}
            <div className="register-header">
              <div className="register-label">
                <h6 className="display-6">Register</h6>
              </div>
              <button className="register-demo">
                <img
                  src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d96e3df748dac85a20c559b47659c1a3763a5fe/source/assets/svg-files/index-page/close/close-dark.svg"
                  alt=""
                />
              </button>
              <div className="register-logo">
                <img
                  src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d11394a960db3ea88c21e28aa8035c3f40bdad7c/source/assets/svg-files/archive-images/tertius-roach/signature-icon/primary-light.svg"
                  alt="Login Logo"
                />
              </div>
            </div>
            {/* ----- */}
            <div className="register-inputs">
              <div className="fullname-inputs">
                <input placeholder="First Name" type="text" id="first-name" name="First Name" />
                <input placeholder="Last Name" type="text" id="last-name" name="Last Name" />
              </div>

              <input placeholder="Email" type="text" id="email" name="Email" />
              <input placeholder="Password" type="password" id="password" name="password" />
            </div>
            {/* ----- */}
            <div className="register-footer">
              <mark className="register-action">
                <button className="register-button">
                  <h6>Register</h6>
                </button>
                <div className="register-message">
                  <h6>Email already exists.</h6>
                </div>
              </mark>
              <menu className="register-buttons">
                <button className="register-login" type="button" onClick={() => viewCarousel('login')}>
                  <h6>Access Account</h6>
                </button>
                <button className="register-password" type="button" onClick={() => viewCarousel('password')}>
                  <h6>Renew Password</h6>
                </button>
              </menu>
            </div>
            {/* ----- */}
          </form>
        </div>
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
                  <h6>Password is incorrect.</h6>
                </div>
              </mark>
              <menu className="login-buttons">
                <button className="login-register" type="button" onClick={() => viewCarousel('register')}>
                  <h6>Register Account</h6>
                </button>
                <button className="login-password" type="button" onClick={() => viewCarousel('password')}>
                  <h6>Forgot Password</h6>
                </button>
              </menu>
            </div>
            {/* ----- */}
          </form>
        </div>
      </section>
      <section className="password-section">
        <div className="password-container">
          <form className="password-form">
            {/* ----- */}
            <div className="password-header">
              <div className="password-label">
                <h6 className="display-6">Password</h6>
              </div>
              <button className="password-demo">
                <img
                  src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d96e3df748dac85a20c559b47659c1a3763a5fe/source/assets/svg-files/index-page/close/close-dark.svg"
                  alt=""
                />
              </button>
              <div className="password-logo">
                <img
                  src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d11394a960db3ea88c21e28aa8035c3f40bdad7c/source/assets/svg-files/archive-images/tertius-roach/signature-icon/primary-light.svg"
                  alt="Login Logo"
                />
              </div>
            </div>
            {/* ----- */}
            <div className="password-inputs">
              <input placeholder="Email" type="text" id="email" name="Email" />
              <input placeholder="New Password" type="password" id="password" name="password" />
            </div>
            {/* ----- */}
            <div className="password-footer">
              <mark className="password-action">
                <button className="password-button">
                  <h6>Change</h6>
                </button>
                <div className="password-message">
                  <h6>Can't find Email.</h6>
                </div>
              </mark>
              <menu className="password-buttons">
                <button className="password-login" type="button" onClick={() => viewCarousel('login')}>
                  <h6>Enter Account</h6>
                </button>
                <button className="password-register" type="button" onClick={() => viewCarousel('register')}>
                  <h6>Register Account</h6>
                </button>
              </menu>
            </div>
            {/* ----- */}
          </form>
        </div>
      </section>
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

const viewCarousel = (slide: 'register' | 'login' | 'password') => {
  let carouselContainer = document.querySelector('.landing-carousel') as HTMLElement;
  switch (slide) {
    case 'register':
      return (carouselContainer.style.transform = 'translateX(0vw)');
    case 'login':
      return (carouselContainer.style.transform = 'translateX(-100vw)');
    case 'password':
      return (carouselContainer.style.transform = 'translateX(-200vw)');
  }
};
