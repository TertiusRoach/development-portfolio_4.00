// Form.password.tsx
import $ from 'jquery';
import React from 'react';
import './Form.password.scss';
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
const FormPassword: React.FC<InfoProps> = ({ info }) => {
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
    setIsSubmitting(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const userEmail = document.querySelector('.password-inputs #email') as HTMLInputElement;

    if (!emailRegex.test(userEmail.value)) {
      // setPasswordMessage('Please enter a valid email address.');
      setIsSubmitting(false); //--|🠈 Indicate submission is blocked 🠈|--//
      /* return; */
    }

    let dialogue: string;
    try {
      const response = await axios.post('http://localhost:3000/users/password', { email: userEmail.value });
      const { message, status } = response.data;

      //--|🠊 Validate User Status 🠈|--//
      switch (status) {
        case 'pending': //--|🠈 Account still needs to be verified before a password reset can take place. 🠈|--//
          dialogue = `Your account hasn't been verified yet.`;

          viewCarousel('register'); //--|🠈 Scroll to Login 🠈|--//
          toggleText('.verify-text', dialogue); //--|🠈 Provide Guidance 🠈|--//
          toggleAside('#landing-leftbar', 'show'); //--|🠈 Show Verify 🠈|--//

          let passwordEmail = document.querySelector('.password-inputs #email') as HTMLInputElement;
          let registerEmail = document.querySelector('.register-inputs #email') as HTMLInputElement;
          registerEmail.value = passwordEmail.value;

          break;
        case 'created': //--|🠈 Password change requested and sent to designated email 🠈|--//
          dialogue = `Please check your email for the verification code.`;

          toggleText('.reset-text', dialogue); //--|🠈 Provide Guidance 🠈|--//
          toggleAside('#landing-rightbar', 'show'); //--|🠈 Show Reset 🠈|--//
          break;
        case 'waiting': //--|🠈 User already requested a password change 🠈|--//
          dialogue = 'Please check your email for the verification code.';

          toggleText('.reset-text', dialogue); //--|🠈 Provide Guidance 🠈|--//
          toggleAside('#landing-rightbar', 'show'); //--|🠈 Show Reset 🠈|--//
          break;
        default:
          setRegisterMessage('Unexpected response from the server. Please try again.');
      }
    } catch (error) {
      //--|🠋 Account doesn't exist 🠋|--//
      let dialogue: string = 'Account not found. Please register.';

      viewCarousel('register'); //--|🠈 Scroll to Register 🠈|--//
      toggleText('.register-text', dialogue); //--|🠈 Provide Guidance 🠈|--//
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="password-form" onSubmit={(event) => handleData(event)}>
      <div className="password-header">
        <div className="password-label">
          <h6 className="display-6">Password</h6>
        </div>
        <button className="password-close" type="button">
          <img
            src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d96e3df748dac85a20c559b47659c1a3763a5fe/source/assets/svg-files/index-page/close/close-light.svg"
            alt=""
          />
        </button>
        <div className="password-text">
          <h4>You can update your password here.</h4>
        </div>
        {/* <div className="password-logo">
              <img
                src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d11394a960db3ea88c21e28aa8035c3f40bdad7c/source/assets/svg-files/archive-images/tertius-roach/signature-icon/primary-light.svg"
                alt="Login Logo"
              />
            </div> */}
      </div>
      <div className="password-inputs">
        <input
          required
          id="email"
          name="Email"
          type="email"
          placeholder="//--|🠊 Registered Email 🠈|--//"
          // --- //
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="password-footer">
        <menu className="password-action">
          <button className="password-button" disabled={isSubmitting}>
            <h6>Change</h6>
          </button>
        </menu>
        <nav className="password-buttons">
          <button className="password-login" type="button" onClick={() => viewCarousel('login')}>
            <h6>Enter Account</h6>
          </button>
          <button className="password-register" type="button" onClick={() => viewCarousel('register')}>
            <h6>Register Account</h6>
          </button>
        </nav>
      </div>
    </form>
  );
};
export default FormPassword;
