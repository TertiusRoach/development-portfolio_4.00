// Form.login.tsx
import './Form.login.scss';
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, createContext, useContext } from 'react';

import { viewBlock, toggleText } from '../../../../landing';

import { useEmail } from '../../../../modules/utilities/context/EmailContext';
import { usePassword } from '../../../../modules/utilities/context/PasswordContext';

interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | 'landing' | string;
  };
}
const FormLogin: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'main';
  const pageName = info.identification;

  //--|🠋 Local Input States 🠋|--//
  let { email, setEmail } = useEmail(); //--|🠈 Global Email State 🠈|--//
  let { password, setPassword } = usePassword(); //--|🠈 Global Password State 🠈|--//

  //--|🠋 Button Action States 🠋|--//
  let [submit, setSubmit] = useState(false); //--|🠈 Prevents Multiple Submissions 🠈|--//
  let [attempts, setAttempts] = useState(0);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmit(true);
    try {
      const route = 'login';
      const response = await axios.post(`http://localhost:3000/users/${route}`, {
        email,
        passwordHash: password,
      });
      const { view, data } = response.data;

      let dialogue: string;
      switch (view) {
        case 'launch':
          alert('//--|🠊 Expand Header.launch 🠈|--//');

          /* window.location.href = '/dashboard'; */

          break;
        case 'register':
          dialogue = 'No account found with this email. Would you like to register?';
          viewBlock('register');
          break;
        case 'password':
          let messages: string[] = [
            'You have three attempts left.',
            'You have two attempts left.',
            'You have one attempt left.',
          ];
          if (attempts < 3) {
            dialogue = messages[attempts];

            setAttempts(attempts + 1);
            toggleText('login', dialogue);
          } else {
            dialogue = 'Would you like to change your password?';
            setAttempts(0);
            viewBlock('password');
            toggleText('password', dialogue);

            setTimeout(() => {
              dialogue = 'Sign in to access your account.';
              toggleText('login', dialogue);
            }, 250);
          }
          break;
        case 'verify':
          dialogue = 'Please verify your account before signing in.';

          viewBlock('verify');
          toggleText('verify', dialogue);
          break;
        case 'blocked':
          alert('//--|🠊 Expand Footer.blocked 🠈|--//');
          /*
          dialogue = `Your account has been ${view} until ${data.restrictionExpiresAt}.`;
          viewCarousel('login');
          toggleText('login', dialogue);
          */
          break;
      }
    } catch (error) {
      axiosError(error);
    } finally {
      setSubmit(false);
    }
  };

  useEffect(() => {}, [pageName, blockName]);

  return (
    <form className="login-form" onSubmit={(event) => handleLogin(event)}>
      <div className="login-header">
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
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="login-footer">
        <menu className="login-action">
          <button className="login-button" type="submit" disabled={submit}>
            {/* <h6>Login</h6> */}
            {submit ? 'Logging in...' : 'Login'}
          </button>
        </menu>
        <nav className="login-buttons">
          <button className="login-register" type="button" onClick={() => viewBlock('register')}>
            <h6>Register Account</h6>
          </button>
          <button className="login-password" type="button" onClick={() => viewBlock('password')}>
            <h6>Reset Password</h6>
          </button>
        </nav>
      </div>
    </form>
  );
};
export default FormLogin;
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
