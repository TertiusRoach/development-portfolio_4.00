// Form.register.tsx
import './Form.register.scss';
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { viewCarousel, toggleText, toggleAside, handleData } from '../../../containers/Main/LandingMain/LandingMain';

import { useEmail } from '../../../../modules/context/EmailContext';

interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | 'landing' | string;
  };
}
const FormRegister: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'main';
  const pageName = info.identification;

  //--|🠋 Login & Password input states 🠋|--//
  let { email, setEmail } = useEmail(); //--|🠈 Use the global email state 🠈|--//
  let [password, setPassword] = useState('');

  //--|🠋 Registration-specific input states 🠋|--//
  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');

  //--|🠋 Action Element(s) 🠋|--//
  let [submit, setSubmit] = useState(false); //--|🠈 Prevents Multiple Submissions 🠈|--//

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault(); //--|🠈 Prevents Refresh 🠈|--//
    setSubmit(true); //--|🠈 Allow Submission 🠈|--//

    //--|🠋 Step 1: Error Handling 🠋|--//
    try {
      //--|🠋 Step 2: Connect to Database 🠋|--//
      const route = 'register' as string; //--|🠈 API Endpoint, ('register' | 'login' | 'password' | 'verify' | 'reset') 🠈|--//
      const response = await axios.post(`http://localhost:3000/users/${route}`, {
        firstName,
        lastName,
        email,
        passwordHash: password,
      });
      const { page, status, action, message } = response.data;

      let dialogue: string; //--|🠈 Message for the User 🠈|--//
      switch (page) {
        case 'verify':
          dialogue = '//--|🠊 Your account has been created. Please verify your email to activate it. 🠈|--//';
          toggleText('.verify-text', dialogue);
          toggleAside('#landing-leftbar', 'show');
          break;
      }
      /*
      let visible = document.querySelectorAll("section[class*='visible']")[0] as HTMLElement;
      let page = visible.className.split('-')[0];
      */

      // handleData(status, action);
    } catch (error) {
      axiosError(error); //--|🠈 Handle Register Errors 🠈|--//
    } finally {
      setSubmit(false);
    }
  };

  useEffect(() => {}, [pageName, blockName]);

  return (
    <form className="register-form" onSubmit={(event) => handleRegister(event)}>
      <div className="register-header">
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
        {/* <div className="register-logo">
              <img
                src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d11394a960db3ea88c21e28aa8035c3f40bdad7c/source/assets/svg-files/archive-images/tertius-roach/signature-icon/primary-light.svg"
                alt="Login Logo"
              />
            </div> */}
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
            // value={'Tertius'}
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
            // value={'Embassy'}
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
          // value={'tertius.embassy@gmail.com'}
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
          // value={'password'}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="register-footer">
        <menu className="register-action">
          <button className="register-button" type="submit" disabled={submit}>
            {submit ? 'Registering...' : 'Register'}
          </button>
        </menu>
        <nav className="register-buttons">
          {/* Type 'void' is not assignable to type 'MouseEventHandler<HTMLButtonElement> | undefined'. */}
          <button className="register-login" type="button" onClick={() => viewCarousel('login')}>
            <h6>Access Account</h6>
          </button>
          <button className="register-password" type="button" onClick={() => viewCarousel('password')}>
            <h6>Renew Password</h6>
          </button>
        </nav>
      </div>
    </form>
  );
};
export default FormRegister;

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
        alert('Axios Error: Server not found. Please try again later.');
        break;
      case 401: //--|🠈 If the user is unauthorized (wrong username/password) 🠈|--//
        alert('Axios Error: Unauthorized access. Please check your credentials and try again.');
        break;
      case 500: //--|🠈 If the server itself has an error (internal server issue) 🠈|--//
        alert('Axios Error: Internal Server Error. Please try again later.');
        break;
      default: //--|🠈 If it's some other error, we show a general network error message. 🠈|--//
        alert(`Axios Error: ${message || 'A network error occurred. Please check your connection.'}`);
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
