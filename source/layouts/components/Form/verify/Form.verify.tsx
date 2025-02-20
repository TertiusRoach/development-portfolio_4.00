// Form.verify.tsx
import $ from 'jquery';
import React from 'react';
import './Form.verify.scss';
import axios, { AxiosError } from 'axios';
import { viewCarousel, toggleText, toggleAside } from '../../../containers/Main/LandingMain/LandingMain';

// import { useEmail } from '../../../../modules/context/EmailContext';
// import { usePassword } from '../../../../modules/context/PasswordContext';

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
  // let [email, setEmail] = useState('');
  // let { email, setEmail } = useEmail(); //--|🠈 Use the global email state 🠈|--//
  // let { password, setPassword } = usePassword(); //--|🠈 Global Password State 🠈|--//
  let [activate, setActivate] = useState('');

  //--|🠋 Other UI states 🠋|--//
  let [submit, setSubmit] = useState(false); //--|🠈 Prevents Multiple Submissions 🠈|--//

  const handleVerify = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmit(true);
    try {
      let loginEmail = document.querySelector('.login-inputs #email') as HTMLInputElement;
      let loginPassword = document.querySelector('.login-inputs #password') as HTMLInputElement;

      const route = 'verify';
      const response = await axios.post(`http://localhost:3000/users/${route}`, {
        email: loginEmail.value,
        passwordHash: loginPassword.value,
        activation: activate,
      });
      const { view, data } = response.data;

      let dialogue: string;
      switch (view) {
        case 'login':
          viewCarousel('login');
          break;
        case 'verify':
          alert(`You have ${data.activationAttempts} attempts left.`);
          break;
        default:
          alert(view);
          viewCarousel('verify');
      }
    } catch (error) {
      axiosError(error);
    } finally {
      setSubmit(false);
    }
  };

  return (
    <form className="verify-form" onSubmit={(event) => handleVerify(event)}>
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

        <div className="verify-text">
          <h4>Check your email for verification code.</h4>
        </div>
      </div>
      <div className="verify-inputs">
        {/* <input
          // required
          id="email"
          name="Email"
          type="email"
          placeholder="//--|🠊 Email Address 🠈|--//"
          // --- //
          value={email}
          // style={{ display: 'none' }}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          // required
          id="password"
          name="Password"
          type="password"
          placeholder="//--|🠊 Your Password 🠈|--//"
          // --- //
          value={password}
          // style={{ display: 'none' }}
          onChange={(event) => setPassword(event.target.value)}
        /> */}
        <input
          required
          type="text"
          id="verify-code"
          name="Verification Code"
          placeholder="//--|🠊 Verification Code 🠈|--//"
          // --- //
          value={activate}
          onChange={(event) => setActivate(event.target.value)}
        />
      </div>
      <div className="verify-footer">
        <menu className="verify-action">
          <button className="verify-button" type="submit" disabled={submit}>
            {submit ? 'Verifying...' : 'Verify'}
          </button>
        </menu>
      </div>
    </form>
  );
};
export default FormVerify;

const axiosError = (error: unknown) => {
  //--|🠉 First, we check if the error came from an Axios request. 🠉|--//
  //--|🠋 This is important because not all errors in JavaScript are Axios errors. 🠋|--//
  if (axios.isAxiosError(error)) {
    //--|🠋 We try to get the HTTP status code from the server's response. 🠋|--//
    const status = error.response?.status;
    //--|🠉 We also try to extract a meaningful error message from the response. 🠉|--//
    //--|🠋 If there's no specific message, we fall back to Axios's built-in error message. 🠋|--//
    const message = error.response?.data?.message || error.message;

    //--|🠋 Now we check the status code to decide what message to show the user. 🠋|--//
    switch (status) {
      case 404: //--|🠈 If the server is not found (wrong URL or down) 🠈|--//
        alert('status(404): Axios Error: Server not found. Please try again later.');
        break;
      case 401: //--|🠈 If the user is unauthorized (wrong username/password) 🠈|--//
        alert('status(401):Axios Error: Unauthorized access. Please check your credentials and try again.');
        break;
      case 500: //--|🠈 If the server itself has an error (internal server issue) 🠈|--//
        alert('status(500)): Axios Error: Internal Server Error. Please try again later.');
        break;
      default: //--|🠈 If it's some other error, we show a general network error message. 🠈|--//
        alert(`status(default):Axios Error: ${message || 'A network error occurred. Please check your connection.'}`);
    }

    //--|🠋 We log the error details in the console so developers can debug the issue. 🠋|--//
    console.error('Axios Error Details:', {
      status, //--|🠈 The HTTP status code (like 404, 500) 🠈|--//
      message, //--|🠈 The error message from the server 🠈|--//
      url: error.config?.url, //--|🠈 The URL that was requested 🠈|--//
      method: error.config?.method, //--|🠈 The HTTP method (GET, POST, etc.) 🠈|--//
    });
  } else {
    //--|🠋 If the error was not caused by Axios, it could be some other problem (like a coding mistake). 🠋|--//
    console.error('Unexpected Error:', error);
    alert('An unexpected error occurred. Please try again.');
  }
};
/*
    event.preventDefault(); //--|🠈 Prevents Refresh 🠈|--//
    setSubmit(true); //--|🠈 Allow Submission 🠈|--//

    //--|🠋 Step 2: Connect to Database 🠋|--//
    const route = 'verify'; //--|🠈 API Endpoint, ('register' | 'login' | 'password' | 'verify' | 'reset') 🠈|--//
    const response = await axios.post(`http://localhost:3000/users/${route}`, {
      email, //--|🠈 Email entered by the user 🠈|--//
      activation, //--|🠈 activationCode entered by the user 🠈|--//
    });
    const { page, status, action, message } = response.data; //--|🠈 Extract the status from server response 🠈|--//

    console.log(page, status, action, message);
    let dialogue: string;
    if (status === 'verified') {
      switch (page) {
        case 'login':
          dialogue = `//--|🠈 Thank you for registering to The Trinity {A]pp 🠈|--//`;
          viewCarousel('login');
          toggleText('.login-text', dialogue);
          toggleAside('#landing-leftbar', 'hide');
          break;
      }
    } else if (status === 'incorrect') {
      switch (page) {
        case 'verify':
          dialogue = `//--|🠈 Thank you for registering to The Trinity {A]pp 🠈|--//`;
          toggleText('.verify-text', dialogue);
          toggleAside('#landing-leftbar', 'show');
          break;
      }
    }
    */
/*
    alert(page);
    alert(status);
    alert(action);
    alert(message);
    */
/*
    setSubmit(true); // Lock to prevent multiple submissions

    try {
      const response = await axios.post('http://localhost:3000/users/verify', {
        email: emailInput,
        passwordHash: passwordInput, // Backend will handle hashing
        verificationCode: verificationCode,
      });

      const { status, message } = response.data;

      let dialogue: string;
      switch (status) {
        case 'authorized':
          dialogue = 'Account successfully verified. Please login.';

          // setLoginMessage(message);

          viewCarousel('login'); //--|🠈 Scroll to login 🠈|--//
          toggleText('.login-text', dialogue); //--|🠈 Provide Guidance 🠈|--//
          toggleAside('#landing-leftbar', 'hide'); //--|🠈 Hide Leftbar 🠈|--//
          break;
        case 'unverified':
          dialogue = 'Verification code is incorrect. Please try again.';

          // setLoginMessage(message);
          toggleText('.verify-text', dialogue); //--|🠈 Provide Guidance 🠈|--//
          break;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // setLoginMessage(error.response?.data?.message || 'An error occurred');
      } else {
        // setLoginMessage('An unexpected error occurred');
      }
    } finally {
      setSubmit(false); // Re-enable the submit button
    }
    */
/*
      const { page, status, action, message } = response.data;
      let dialogue = '';
      if (status === 'verified') {
        switch (page) {
          case 'login':
            dialogue = `//--|🠊 Verification successful! Welcome to Trinity {A]pps 🠈|--//`;
            viewCarousel('login'); // Navigate to correct page
            toggleText(`.login-text`, dialogue);
            toggleAside('#landing-leftbar', 'hide');
            break;
        }
      } else if (status === 'incorrect') {
        switch (page) {
          case 'verify':
            dialogue = `Incorrect verification code. Please try again.`;
            toggleText('.verify-text', dialogue);
            toggleAside('#landing-leftbar', 'show');
            break;
        }
      }
      */
