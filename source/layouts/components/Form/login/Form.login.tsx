// Section.home.tsx
import $ from 'jquery';
import React from 'react';
import './Form.login.scss';
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

const FormLogin: React.FC<InfoProps> = ({ info }) => {
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
    event.preventDefault(); //--|🠈 Prevents refresh 🠈|--//
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //--|🠈 Regular expression to validate email format 🠈|--//
    if (!emailRegex.test(email)) {
      setIsSubmitting(false); //--|🠈 Indicate submission is blocked 🠈|--//
      return;
    }

    setIsSubmitting(true); //--|🠈 Indicate submission in progress 🠈|--//
    try {
      const response = await axios.post('http://localhost:3000/users/login', {
        email, //--|🠈 Email entered by the user 🠈|--//
        passwordHash: password, //--|🠈 Password entered by the user 🠈|--//
      });

      const { status } = response.data; //--|🠈 Extract the status from server response 🠈|--//

      //--|🠊 Validate User Status 🠈|--//
      switch (status) {
        case 'pending': //--|🠈 Account not verified. Expanding landingLeftbar (Verify Page) for further steps. 🠈|--//
          toggleAside('#landing-leftbar', 'show'); //--|🠈 Show Verify 🠈|--//
          break;
        case 'enabled': //--|🠈 Load the main application 🠈|--//
          alert('Login successful. Loading application...');
          break;
        default:
          alert('Unknown status returned from the server.');
      }
    } catch (error) {
      //--|🠊 Handle Login Errors 🠈|--//
      const axiosError = error as AxiosError;
      let dialogue: string;
      if (axiosError.response?.status === 404) {
        //--|🠊 User not found 🠈|--//
        dialogue = "It looks like you're new here. Please sign up to get started.";

        viewCarousel('register'); //--|🠈 Redirect to the registration page 🠈|--//
        toggleText('.register-text', dialogue); //--|🠈 Provide guidance for new users 🠈|--//
      } else if (axiosError.response?.status === 401) {
        //--|🠊 Invalid password 🠈|--//
        dialogue = 'Forgot your password? You can reset it here.';

        /* alert('Invalid password. Redirecting to password reset section.'); */

        viewCarousel('password'); //--|🠈 Redirect to password reset section 🠈|--//
        toggleText('.password-text', dialogue); //--|🠈 Provide guidance for registered users 🠈|--//
      } else {
        alert('An error occurred during login. Please try again later.');
        console.error('Error during login:', error); //--|🠈 Log unexpected errors for debugging 🠈|--//
      }
    } finally {
      setIsSubmitting(false); //--|🠈 Reset submission state 🠈|--//
    }
  };

  return (
    <form className="login-form" onSubmit={(event) => handleData(event)}>
      <div className="login-header">
        <div className="login-logo">
          <img
            src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d11394a960db3ea88c21e28aa8035c3f40bdad7c/source/assets/svg-files/archive-images/tertius-roach/signature-icon/primary-light.svg"
            alt="Login Logo"
          />
        </div>
        <div className="login-label">
          <h6 className="display-6">Login</h6>
        </div>
        <button className="login-close" type="button">
          <img
            src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d96e3df748dac85a20c559b47659c1a3763a5fe/source/assets/svg-files/index-page/close/close-light.svg"
            alt=""
          />
        </button>
        <div className="login-text">
          <h4>Sign in to access your account.</h4>
        </div>
      </div>
      <div className="login-inputs">
        <input
          required
          id="email"
          name="Email"
          type="email"
          placeholder="//--|🠊 Email Address 🠈|--//"
          // --- //
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          required
          id="password"
          name="Password"
          type="password"
          placeholder="//--|🠊 Your Password 🠈|--//"
          // --- //
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
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
            <h6>Reset Password</h6>
          </button>
        </menu>
      </div>
    </form>
  );
};
export default FormLogin;
