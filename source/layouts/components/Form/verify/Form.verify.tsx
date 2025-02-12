// Form.verify.tsx
import $ from 'jquery';
import React from 'react';
import './Form.verify.scss';
import axios, { AxiosError } from 'axios';
import { viewCarousel, toggleText, toggleAside } from '../../../containers/Main/LandingMain/LandingMain';

import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';

import MenuButton from '../../Menu/button/Menu.button';
import ButtonFade from '../../Button/fade/Button.fade';

import { getSVG } from '../../../../modules/utilities/getFile';
import getScroll from '../../../../modules/utilities/getScroll';
// import toggleAside from '../../../../modules/utilities/toggleAside';
import toggleSection from '../../../../modules/utilities/toggleSection';
import DivisionWorking from '../../Division/working/Division.working';
import getIdentification from '../../../../modules/utilities/getIdentification';

interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | 'landing' | string;
  };
}
const FormVerify: React.FC<InfoProps> = ({ info }) => {
  let information = info;
  const [currentView, setCurrentView] = useState<'default' | 'unverified' | 'authorized' | 'recovery'>('default');

  //--|🠋 Shared input states 🠋|--//
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  //--|🠋 Registration-specific input states 🠋|--//
  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');

  //--|🠋 Feedback messages for user interactions 🠋|--//
  let [loginMessage, setLoginMessage] = useState('');
  let [registerMessage, setRegisterMessage] = useState('');
  let [passwordMessage, setPasswordMessage] = useState('');

  //--|🠋 Other UI states 🠋|--//
  let [isSubmitting, setIsSubmitting] = useState(false); //--|🠈 Prevents multiple submissions 🠈|--//
  let [loggedIn, setLoggedIn] = useState(false); //--|🠈 Tracks login state 🠈|--//

  const handleData = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevents page refresh

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression to validate email format

    let emailInput = '';
    let passwordInput = '';
    let verificationCode = '';

    let landingInputs = document.querySelectorAll('input') as NodeListOf<HTMLInputElement>;

    // Iterate through all inputs and assign values based on ID
    landingInputs.forEach((input) => {
      if (input.id === 'email' && emailRegex.test(input.value)) {
        emailInput = input.value;
      }
      if (input.id === 'password' && input.value.trim() !== '') {
        passwordInput = input.value;
      }
      if (input.id === 'verify-code' && input.value.trim() !== '') {
        verificationCode = input.value;
      }
    });

    // Ensure required fields are present before proceeding
    if (!emailInput || !passwordInput || !verificationCode) {
      setLoginMessage('All fields are required');
      return;
    }

    setIsSubmitting(true); // Lock to prevent multiple submissions

    try {
      const response = await axios.post('http://localhost:3000/users/verify', {
        email: emailInput,
        passwordHash: passwordInput, // Backend will handle hashing
        verificationCode: verificationCode,
      });

      const { status, message } = response.data;
      // alert(message);

      let dialogue: string = message;
      switch (status) {
        case 'authorized':
          // setLoginMessage(message);
          toggleText('.login-text', dialogue); //--|🠈 Provide Guidance 🠈|--//
          toggleAside('#landing-leftbar', 'hide'); //--|🠈 Hide Leftbar 🠈|--//
          break;
        case 'unverified':
          toggleText('.verify-text', message); //--|🠈 Provide Guidance 🠈|--//
          // setLoginMessage(message);
          break;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setLoginMessage(error.response?.data?.message || 'An error occurred');
      } else {
        setLoginMessage('An unexpected error occurred');
      }
    } finally {
      setIsSubmitting(false); // Re-enable the submit button
    }
  };

  return (
    <form className="verify-form" onSubmit={handleData}>
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
        <div className="verify-text">
          <h4>Check your email for verification code.</h4>
        </div>
      </div>
      <div className="verify-inputs">
        <input
          required
          type="text"
          id="verify-code"
          name="Verification Code"
          placeholder="🠊 Verification Code 🠈"
          // --- //
          // value={verificationCode}
          // onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="verify-footer">
        <mark className="verify-action">
          <button className="verify-button" disabled={isSubmitting}>
            {isSubmitting ? 'Processing...' : 'Verify'}
          </button>
          {loginMessage && (
            <div className={`verify-message ${loginMessage.includes('successfully') ? 'success' : 'error'}`}>
              {loginMessage}
            </div>
          )}
          {/* <button className="verify-button" disabled={isSubmitting}>
          <h6>Authorize</h6>
        </button>
        <div className={`verify-message ${loginMessage.includes('Success') ? 'success' : 'error'}`}>
          <h6>{loginMessage}</h6>
        </div> */}
        </mark>
      </div>
    </form>
  );
};
export default FormVerify;
