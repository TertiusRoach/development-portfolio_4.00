// LandingRightbar.tsx
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
const LandingRightbar: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'rightbar';
  const pageName = info.identification;

  const [currentView, setCurrentView] = useState<'default' | 'unverified' | 'authorized' | 'recovery'>('recovery');

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

  const handleData = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true); // Prevent multiple submissions

    try {
      const userEmail = document.querySelector('#email') as HTMLInputElement;
      const userCode = document.querySelector('#reset-code') as HTMLInputElement;
      const userRecovery = document.querySelector('#recovery') as HTMLInputElement;

      if (!userEmail.value || !userCode.value || !userRecovery.value) {
        setLoginMessage('All fields are required.');
        setIsSubmitting(false);
        return;
      }

      const response = await axios.post('http://localhost:3000/users/reset', {
        email: userEmail.value.trim(),
        newHash: userRecovery.value.trim(),
        passwordCode: userCode.value.trim(),
      });

      const { status, message } = response.data;

      alert(message);
      setLoginMessage(message);

      if (status === 'recovered') {
        // Add logic to redirect or update UI for login
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setLoginMessage(error.response?.data?.message || 'An error occurred'); // Handle Axios-specific errors
      } else {
        setLoginMessage('An unexpected error occurred'); // Handle non-Axios errors (fallback)
      }
    } finally {
      setIsSubmitting(false); // Re-enable the submit button
    }
    /*
    event.preventDefault();
    setIsSubmitting(true); // Prevent multiple submissions

    try {
      const userEmail = document.querySelector('#email') as HTMLInputElement;
      const userCode = document.querySelector('#reset-code') as HTMLInputElement;
      const userRecovery = document.querySelector('#recovery') as HTMLInputElement;

      const response = await axios.post('http://localhost:3000/users/reset', {
        email: userEmail.value,
        newHash: userRecovery.value,
        passwordCode: userCode.value,
      });

      const { status, message } = response.data;

      alert(message);
      switch (status) {
        case 'recovered':
          setLoginMessage(message);

          
          // document.querySelector('#landing-leftbar')?.classList.toggle('expanded', false);
          // document.querySelector('#landing-leftbar')?.classList.toggle('collapsed', true); //--|🠈 Collapse Sidebar 🠈|--//
          
          break;
        case 'incorrect':
          setLoginMessage(message);
          break;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setLoginMessage(error.response?.data?.message || 'An error occurred'); // Handle Axios-specific errors
      } else {
        setLoginMessage('An unexpected error occurred'); // Handle non-Axios errors (fallback)
      }
    } finally {
      setIsSubmitting(false); // Re-enable the submit button
    }
    */
  };

  useEffect(() => {
    // console.log(`//--|🠊 Initialized ${pageName}-${blockName} 🠈|--//`);
  }, [pageName, blockName, currentView]);

  return (
    <aside id={`${pageName}-${blockName}`} style={{ zIndex: 5 }} className={`default-${blockName} collapsed`}>
      <form className="reset-form" onSubmit={handleData}>
        <div className="reset-header">
          <div className="reset-label">
            <h6 className="display-6">Reset</h6>
          </div>
          <button className="close-leftbar" type="button">
            <img
              src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d96e3df748dac85a20c559b47659c1a3763a5fe/source/assets/svg-files/index-page/close/close-light.svg"
              alt=""
            />
          </button>
          <div className="reset-logo">
            <img
              src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d11394a960db3ea88c21e28aa8035c3f40bdad7c/source/assets/svg-files/archive-images/tertius-roach/signature-icon/primary-light.svg"
              alt="Login Logo"
            />
          </div>
        </div>
        <div className="reset-inputs">
          <input
            required
            type="text"
            id="reset-code"
            name="Recovery Code"
            placeholder="🠊 Verification Code 🠈"
            // --- //
            // value={verificationCode}
            // onChange={(event) => setEmail(event.target.value)}
          />
          <input
            required
            id="recovery"
            name="Recovery"
            type="password"
            placeholder="//--|🠊 New Password 🠈|--//"
            // --- //
            // value={password}
            // onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="reset-footer">
          <mark className="reset-action">
            <button className="reset-button" disabled={isSubmitting}>
              {isSubmitting ? 'Processing...' : 'Reset'}
            </button>
            <div className={`reset-message ${loginMessage.includes('Success') ? 'success' : 'error'}`}>
              <h6>{loginMessage}</h6>
            </div>
          </mark>
          {/* <menu className="reset-buttons">
            <button className="reset-register" type="button">
              <h6>Register Account</h6>
            </button>
            <button className="reset-password" type="button">
              <h6>Forgot Password</h6>
            </button>
          </menu> */}
        </div>
      </form>
    </aside>
  );
};
export default LandingRightbar;
