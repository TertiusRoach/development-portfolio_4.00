// Form.login.tsx
import './Form.login.scss';
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, createContext, useContext } from 'react';
import { viewCarousel, toggleText, toggleAside, handleData } from '../../../containers/Main/LandingMain/LandingMain';

import { useEmail } from '../../../../modules/context/EmailContext';

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
  let { email, setEmail } = useEmail(); //--|🠈 Use the global email state 🠈|--//
  let [password, setPassword] = useState('');

  //--|🠋 Action Element(s) 🠋|--//
  let [submit, setSubmit] = useState(false); //--|🠈 Prevents Multiple Submissions 🠈|--//

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault(); //--|🠈 Prevents Refresh 🠈|--//

    //--|🠋 Step 1: Validate Entered Email 🠋|--//
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmit(false); //--|🠈 Block Submission 🠈|--//
      return;
    }
    setSubmit(true); //--|🠈 Allow Submission 🠈|--//

    //--|🠋 Step 2: Connect to Database 🠋|--//
    /*
    const route: string = 'login'; //--|🠈 API Endpoint 🠈|--//
    const response = await axios.post('http://localhost:3000/users/login', {
      email, //--|🠈 Email entered by the user 🠈|--//
      passwordHash: password, //--|🠈 Password entered by the user 🠈|--//
    });
    */

    try {
      const response = await axios.post('http://localhost:3000/users/login', {
        email, //--|🠈 Email entered by the user 🠈|--//
        passwordHash: password, //--|🠈 Password entered by the user 🠈|--//
      });

      const { status } = response.data; //--|🠈 Extract the status from server response 🠈|--//

      //--|🠊 Validate User Status 🠈|--//
      handleData(setSubmit, response.data); //--|🠈 Handle the response (could be redirection or updating the UI) 🠈|--//

      /*
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
      */
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

        // alert('Invalid password. Redirecting to password reset section.'); //

        viewCarousel('password'); //--|🠈 Redirect to password reset section 🠈|--//
        toggleText('.password-text', dialogue); //--|🠈 Provide guidance for registered users 🠈|--//

        let loginEmail = document.querySelector('.login-inputs #email') as HTMLInputElement;
        let passwordEmail = document.querySelector('.password-inputs #email') as HTMLInputElement;
        let registerEmail = document.querySelector('.register-inputs #email') as HTMLInputElement;
      } else {
        alert('An error occurred during login. Please try again later.');
        console.error('Error during login:', error); //--|🠈 Log unexpected errors for debugging 🠈|--//
      }
    } finally {
      setSubmit(false); //--|🠈 Reset Submission State 🠈|--//
    }

    /*
    
    const response = await axios.post(`http://localhost:3000/users/${route}`, {
      email, //--|🠈 Email entered by the user 🠈|--//
      passwordHash: password, //--|🠈 Password entered by the user 🠈|--//
    });
    const { status, action } = response.data; //--|🠈 Extract the status from server response 🠈|--//
    */

    /*
    switch (route) {
      case 'register':
        break;
      case 'login':
        break;
      case 'password':
        break;
      case 'verify':
        break;
      case 'reset':
        break;
    }
    */
    /*
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //--|🠈 Regular expression to validate email format 🠈|--//
    if (!emailRegex.test(email)) {
      setSubmit(false); //--|🠈 Indicate submission is blocked 🠈|--//
      return;
    }

    setSubmit(true); //--|🠈 Indicate submission in progress 🠈|--//

    */
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
          // --- //
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="login-footer">
        <menu className="login-action">
          <button className="login-button" disabled={submit}>
            <h6>Login</h6>
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
