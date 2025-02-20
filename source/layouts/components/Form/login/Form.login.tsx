// Form.login.tsx
import './Form.login.scss';
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, createContext, useContext } from 'react';
import { viewCarousel, toggleText, toggleAside, handleData } from '../../../containers/Main/LandingMain/LandingMain';

import { useEmail } from '../../../../modules/context/EmailContext';
import { usePassword } from '../../../../modules/context/PasswordContext';

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

  //--|🠋 Shared Inputs 🠋|--//
  let { email, setEmail } = useEmail(); //--|🠈 Global Email State 🠈|--//
  let { password, setPassword } = usePassword(); //--|🠈 Global Password State 🠈|--//

  //--|🠋 Action Element(s) 🠋|--//
  let [submit, setSubmit] = useState(false); //--|🠈 Prevents Multiple Submissions 🠈|--//

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
      let counter: number = 0; // Declare outside the function so it persists
      switch (view) {
        case 'register':
          viewCarousel('register');
          break;
        case 'login':
          window.location.href = '/dashboard';
          break;
        case 'password':
          /*
          if (counter < 3) {
            alert(`You have ${3 - counter} attempts left.`);
            counter++;
          } else {
            viewCarousel('password');
            counter = 0; // Reset counter after lockout
          }
          */
          break;
        case 'verify':
          viewCarousel('verify');
          break;
        default:
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
          <button className="login-register" type="button" onClick={() => viewCarousel('register')}>
            <h6>Register Account</h6>
          </button>
          <button className="login-password" type="button" onClick={() => viewCarousel('password')}>
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

/*
      //--| Step 2: Extract response |--//
      // const { page, status, action, message, token } = response.data;
      //--| Step 3: Validate User Status |--//
      let dialogue = ''; // Message for the User

      if (status === 'missing') {
        dialogue = 'No account found with this email. Would you like to register?';
        viewCarousel('register');
        toggleText('.register-text', dialogue);
      } else if (status === 'authorized') {
        //--| Successful Login |--//
        alert('✅ Login Successful!');
        localStorage.setItem('token', token); // Store token for authentication
        window.location.href = '/dashboard'; // Redirect to main app
      } else if (status === 'unverified') {
        //--| Handle Incorrect Credentials |--//
        switch (page) {
          case 'verify':
            dialogue = 'Your account has been created. Please verify your email to activate it.';
            toggleText('.verify-text', dialogue);
            toggleAside('#landing-leftbar', 'show');
            break;
        }
      } else if (status === 'incorrect') {
        switch (page) {
          case 'password':
            dialogue = 'Too many attempts! Reset your password.';
            viewCarousel('password');
            toggleText('.password-text', dialogue);
            break;
        }
      } else if (status === 'blocked') {

      }
      */
/*
  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault(); //--|🠈 Prevents Refresh 🠈|--//
    setSubmit(true); //--|🠈 Allow Submission 🠈|--//

    //--|🠋 Step 1: Error Handling 🠋|--//
    try {
      //--|🠋 Step 2: Connect to Database 🠋|--//
      const route = 'login'; //--|🠈 API Endpoint, ('register' | 'login' | 'password' | 'verify' | 'reset') 🠈|--//
      const response = await axios.post(`http://localhost:3000/users/${route}`, {
        email, //--|🠈 Email entered by the user 🠈|--//
        passwordHash: password, //--|🠈 Password entered by the user 🠈|--//
      });
      const { page, status, action, message } = response.data; //--|🠈 Extract the status from server response 🠈|--//

      //--|🠋 Step 3: Validate User Status 🠋|--//
      let dialogue: string; //--|🠈 Message for the User 🠈|--//
      if (status === 'missing') {
        dialogue = '//--|🠊 No account found with this email. Would you like to register? 🠈|--//';
        viewCarousel('register');
        toggleText('.register-text', dialogue);
      } else if (status === 'authorized') {
        //--|🠉 Step 3.1: Handle Authorized Status 🠉|--//
        alert('//--|🠊 If the "passwordHash" matches the "email" entered by the user. 🠈|--//');
        alert('//--|🠊 status(200): OK 🠈|--//');
        alert('//--|🠊 Trinity Apps Login SUCCESSFUL 🠈|--//');
        window.location.href = '/dashboard'; // Redirect to main app
      } else if (status === 'registered') {
        //--|🠉 Step 3.2: Handle Registered Status 🠉|--//
        switch (page) {
          case 'login':
            dialogue = '//--|🠊 Conflict because User already exists 🠈|--//';
            viewCarousel('login');
            toggleText('.login-text', dialogue);
            break;
        }
      } else if (status === 'incorrect') {
        //--|🠉 Step 3.2: Handle Incorrect Status 🠉|--//
        switch (page) {
          case 'verify':
            dialogue = '//--|🠊 Your account has been created. Please verify your email to activate it. 🠈|--//';
            toggleText('.verify-text', dialogue);
            toggleAside('#landing-leftbar', 'show');
            break;
          case 'password':
            dialogue = `//--|🠊 Too many attempts! Reset your password. 🠈|--//`;
            viewCarousel('password');
            toggleText('.password-text', dialogue);
            break;
        }
      }
      // handleData(status, action); //--|🠈 Handle the response (could be redirection or updating the UI) 🠈|--//
    } catch (error) {
      axiosError(error); //--|🠈 Handle Login Errors 🠈|--//
    } finally {
      setSubmit(false); //--|🠈 Reset Submission State 🠈|--//
    }
  };
  */
