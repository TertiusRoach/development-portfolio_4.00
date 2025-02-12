// Form.reset.tsx
import $ from 'jquery';
import React from 'react';
import './Form.reset.scss';
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
const FormReset: React.FC<InfoProps> = ({ info }) => {
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
    event.preventDefault();

    let emailInput = document.querySelector('.password-inputs #email') as HTMLInputElement;
    let passwordInput = document.querySelector('.reset-inputs #password') as HTMLInputElement;
    let recoveryInput = document.querySelector('.reset-inputs #reset-code') as HTMLInputElement;

    /*
    switch (status) {
      case 'authorized':
        break;
      case 'remembered':
        break;
      case 'unverified':
        break;
    }
    */

    /*
    if (!emailInput || !passwordInput || !recoveryInput) {
      setLoginMessage('All fields are required.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post('http://localhost:3000/users/reset', {
        email: emailInput,
        newHash: passwordInput,
        passwordCode: recoveryCode,
      });

      const { status, message } = response.data;
      setLoginMessage(message);


    } catch (error: AxiosError | unknown) {
      if (axios.isAxiosError(error)) {
        setLoginMessage(error.response?.data?.message || 'An error occurred');
      } else {
        setLoginMessage('An unexpected error occurred');
      }
    } finally {
      setIsSubmitting(false);
    }
    ---
    event.preventDefault(); // Prevents page refresh
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression to validate email format

    let emailInput = '';
    let passwordInput = '';
    let recoveryCode = '';

    let landingInputs = document.querySelectorAll('input') as NodeListOf<HTMLInputElement>;

    // Iterate through all inputs and assign values based on ID
    landingInputs.forEach((input) => {
      if (input.id === 'email' && emailRegex.test(input.value)) {
        emailInput = input.value;
      }
      if (input.id === 'password' && input.value.trim() !== '') {
        passwordInput = input.value;
      }
      if (input.id === 'reset-code' && input.value.trim() !== '') {
        recoveryCode = input.value;
      }
    });

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

      let dialogue: string = message;
      switch (status) {
        case 'authorized':
        case 'remembered':
          // setLoginMessage(message);
          toggleText('.login-text', dialogue); //--|🠈 Provide Guidance 🠈|--//
          toggleAside('#landing-leftbar', 'hide'); //--|🠈 Hide Leftbar 🠈|--//
          break;
        case 'unverified':
          toggleText('.verify-text', message); //--|🠈 Provide Guidance 🠈|--//
          // setLoginMessage(message);
          break;
      }
      // if (status === 'recovered') {
      //   // Add logic to redirect or update UI for login
      // }
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

  return (
    <form className="reset-form" onSubmit={handleData}>
      <div className="reset-header">
        <div className="reset-label">
          <h6 className="display-6">Reset</h6>
        </div>
        <button className="close-rightbar" type="button">
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
        <div className="reset-text">
          <h4>Reset your password.</h4>
        </div>
      </div>
      <div className="reset-inputs">
        <input
          required
          type="text"
          id="reset-code"
          name="Recovery Code"
          placeholder="//--|🠊 Recovery Code 🠈|--//"
          // --- //
          // value={verificationCode}
          // onChange={(event) => setEmail(event.target.value)}
        />
        <input
          required
          id="password"
          name="Password"
          type="password"
          placeholder="//--|🠊 New Password 🠈|--//"
          // --- //
          value={password}
          onChange={(event) => setPassword(event.target.value)}
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
  );
};
export default FormReset;
