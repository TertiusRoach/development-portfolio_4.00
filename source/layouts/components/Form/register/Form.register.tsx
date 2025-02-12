// Section.home.tsx
import $ from 'jquery';
import React from 'react';
import './Form.register.scss';
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
const FormRegister: React.FC<InfoProps> = ({ info }) => {
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

    //--|🠋 Input Validation: Ensure all fields are filled 🠋|--//
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !password.trim()) {
      setRegisterMessage('All fields are required.');
      return;
    }

    //--|🠋 Email Validation: Check format 🠋|--//
    if (!emailRegex.test(email)) {
      setRegisterMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true); //--|🠈 Disable button during submission 🠈|--//
    try {
      const response = await axios.post('http://localhost:3000/users/register', {
        firstName,
        lastName,
        email,
        passwordHash: password, // Password sent to back-end for hashing
      });

      const { message, status } = response.data; //--|🠈 Back-end response 🠈|--//
      // alert(message);
      // alert(status);

      let dialogue: string;
      //--|🠊 Validate User Status 🠈|--//
      switch (status) {
        case 'pending': //--|🠈 Pending user 🠈|--//
        case 'created': //--|🠈 Created user 🠈|--//
          dialogue = 'Registration successful, please check your email for the activation code.';

          toggleText('.verify-text', dialogue); //--|🠈 Provide Guidance 🠈|--//
          toggleAside('#landing-leftbar', 'show'); //--|🠈 Show Leftbar 🠈|--//
          break;
        case 'enabled': //--|🠈 Enabled user 🠈|--//
          dialogue = 'Account already exists. Please log in.';

          viewCarousel('login'); //--|🠈 Scroll to login 🠈|--//
          toggleText('.login-text', dialogue); //--|🠈 Provide Guidance 🠈|--//
          break;
        case 'password': //--|🠈 Incorrect password 🠈|--//
          dialogue = 'Forgotten your password? You can reset it here.';

          viewCarousel('password'); //--|🠈 Redirect to password reset 🠈|--//
          toggleText('.password-text', dialogue); //--|🠈 Provide Guidance 🠈|--//
          break;
        default:
          setRegisterMessage('Unexpected response from the server. Please try again.');
      }
    } catch (error) {
      //--|🠋 Handle Axios errors 🠋|--//
      if (axios.isAxiosError(error)) {
        setRegisterMessage(error.response?.data?.err || 'Registration failed.');
      } else {
        setRegisterMessage('An unexpected error occurred.');
      }
    } finally {
      setIsSubmitting(false); //--|🠈 Re-enable the button 🠈|--//
    }
  };

  return (
    <form className="register-form" onSubmit={(event) => handleData(event)}>
      <div className="register-header">
        <div className="register-logo">
          <img
            src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d11394a960db3ea88c21e28aa8035c3f40bdad7c/source/assets/svg-files/archive-images/tertius-roach/signature-icon/primary-light.svg"
            alt="Login Logo"
          />
        </div>
        <div className="register-label">
          <h6 className="display-6">Register</h6>
        </div>
        <button className="register-close" type="button">
          <img
            src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d96e3df748dac85a20c559b47659c1a3763a5fe/source/assets/svg-files/index-page/close/close-light.svg"
            alt=""
          />
        </button>

        <div className="register-text">
          <h4>Sign up to use application.</h4>
        </div>
      </div>
      <div className="register-inputs">
        <div className="fullname-inputs">
          <input
            required
            type="text"
            id="first-name"
            name="First Name"
            pattern="[A-Z][a-zA-Z\s]+"
            placeholder="//--|🠊 First Name 🠈|--//"
            title="Name must start with a capital letter and contain only letters and spaces"
            // --- //
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <input
            required
            type="text"
            id="last-name"
            name="Last Name"
            pattern="[a-zA-Z\s]+"
            placeholder="//--|🠊 Last Name 🠈|--//"
            title="Surname can't contain any numerical values or special characters"
            // --- //
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
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
          type="password"
          name="Password"
          placeholder="//--|🠊 Insert Password 🠈|--//"
          // --- //
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="register-footer">
        <mark className="register-action">
          <button className="register-button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Registering...' : 'Register'}
          </button>
          <div className="register-message">
            <h6>{registerMessage}</h6>
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
    </form>
  );
};
export default FormRegister;
