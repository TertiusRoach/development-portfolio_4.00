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

  const [currentView, setCurrentView] = useState<'default' | 'unverified' | 'authorized' | 'recovery'>('unverified');

  // Shared input states
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  // Registration-specific input states
  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');

  // Feedback messages for user interactions
  let [loginMessage, setLoginMessage] = useState('');
  let [registerMessage, setRegisterMessage] = useState('');
  let [passwordMessage, setPasswordMessage] = useState('');

  // Other UI states
  let [isSubmitting, setIsSubmitting] = useState(false); // Prevents multiple submissions
  let [loggedIn, setLoggedIn] = useState(false); // Tracks login state
  let handleData = async (event: React.FormEvent, slide: 'register' | 'login' | 'password') => {
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

  useEffect(() => {
    // console.log(`//--|🠊 Initialized ${pageName}-${blockName} 🠈|--//`);
  }, [pageName, blockName, currentView]);

  return (
    <aside id={`${pageName}-${blockName}`} style={{ zIndex: 5 }} className={`default-${blockName} collapsed`}>
      <form className="verify-form">
        <div className="verify-header">
          <div className="verify-label">
            <h6 className="display-6">Verify</h6>
          </div>
          <button className="close-leftbar" type="button">
            <img
              src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d96e3df748dac85a20c559b47659c1a3763a5fe/source/assets/svg-files/index-page/close/close-light.svg"
              alt=""
            />
          </button>
          <div className="verify-logo">
            <img
              src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d11394a960db3ea88c21e28aa8035c3f40bdad7c/source/assets/svg-files/archive-images/tertius-roach/signature-icon/primary-light.svg"
              alt="Login Logo"
            />
          </div>
        </div>
        <div className="verify-inputs">
          <input
            required
            id="code"
            name="Verification Code"
            type="email"
            placeholder="//--|🠊 Verification Code 🠈|--//"
            // --- //
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="verify-footer">
          <mark className="verify-action">
            <button className="verify-button" disabled={isSubmitting}>
              <h6>Authorize</h6>
            </button>
            <div className={`verify-message ${loginMessage.includes('Success') ? 'success' : 'error'}`}>
              <h6>{loginMessage}</h6>
            </div>
          </mark>
          {/* <menu className="verify-buttons">
            <button className="verify-register" type="button">
              <h6>Register Account</h6>
            </button>
            <button className="verify-password" type="button">
              <h6>Forgot Password</h6>
            </button>
          </menu> */}
        </div>
      </form>
    </aside>
  );
};
export default LandingLeftbar;
