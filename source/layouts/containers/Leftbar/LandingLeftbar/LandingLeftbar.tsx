// LandingLeftbar.tsx
//--|🠋 Frameworks 🠋|--//
import axios from 'axios';
import ReactDOM from 'react-dom/client';
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
//--|🠉 Components 🠉|--//
//--|🠋 Containers 🠋|--//

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

const LandingLeftbar: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'leftbar';
  const pageName = info.identification;

  const [showLeftbar, setShowLeftbar] = useState(true);

  const toggleLeftbar = () => {
    setShowLeftbar(!showLeftbar);
  };

  const [currentView, setCurrentView] = useState<'default' | 'unverified' | 'authorized' | 'recovery'>('default');

  // Shared input states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Registration-specific input states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // Feedback messages for user interactions
  const [loginMessage, setLoginMessage] = useState('');
  const [registerMessage, setRegisterMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');

  // Other UI states
  const [isSubmitting, setIsSubmitting] = useState(false); // Prevents multiple submissions
  const [loggedIn, setLoggedIn] = useState(false); // Tracks login state
  const handleData = async (event: React.FormEvent, slide: 'register' | 'login' | 'password') => {
    event.preventDefault(); // Prevents refresh
    let eventForm = event.currentTarget as HTMLFormElement;
    switch (slide) {
      case 'login':
        console.log('//--|🠊 Test Login 🠈|--//');
        break;
      case 'register':
        console.log('//--|🠊 Test Register 🠈|--//');
        break;
      case 'password':
        console.log('//--|🠊 Test Password 🠈|--//');
        break;
    }
  };
  const renderForm = () => {
    return (
      <form className="login-form" onSubmit={(event) => handleData(event, 'login')}>
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
            required
            id="email"
            name="Email"
            type="email"
            placeholder="Email"
            // --- //
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            required
            id="password"
            name="Password"
            type="password"
            placeholder="Password"
            // --- //
            value={password}
            onChange={(event) => setPassword(event.target.value)}
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
    );
  };

  useEffect(() => {
    console.log(`//--|🠊 Initialized ${pageName}-${blockName} 🠈|--//`);
  }, [pageName, blockName, currentView]);

  const viewCarousel = (slide: 'register' | 'login' | 'password') => {
    let carouselContainer = document.querySelector('.landing-carousel') as HTMLElement;
    carouselContainer.style.transform = {
      register: 'translateX(0vw)',
      login: 'translateX(-100vw)',
      password: 'translateX(-200vw)',
    }[slide];
  };

  return (
    <aside id={`${pageName}-${blockName}`} style={{ zIndex: 5 }} className={`default-${blockName} expanded`}>
      <section className="login-section">
        <div className="login-container">{renderForm()}</div>
      </section>
      {/* <div className="landing-carousel">
        <section className="register-section">
          <div className="register-container">{renderForm('register')}</div>
        </section>
        <section className="login-section">
          <div className="login-container">{renderForm('login')}</div>
        </section>
        <section className="password-section">
          <div className="password-container">{renderForm('password')}</div>
        </section>
      </div> */}
    </aside>
  );
};
export default LandingLeftbar;
