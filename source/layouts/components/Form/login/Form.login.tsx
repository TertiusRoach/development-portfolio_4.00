// Form.login.tsx
import './Form.login.scss';
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, createContext, useContext } from 'react';
import { viewCarousel, toggleText, toggleAside } from '../../../containers/Main/LandingMain/LandingMain';

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
    /*
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //--|🠈 Regular expression to validate email format 🠈|--//
    if (!emailRegex.test(email)) {
      setSubmit(false); //--|🠈 Indicate submission is blocked 🠈|--//
      return;
    }

    setSubmit(true); //--|🠈 Indicate submission in progress 🠈|--//
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
    */
  };

  const handleData = async (event: React.FormEvent) => {
    event.preventDefault(); //--|🠈 Prevents Refresh 🠈|--//

    //--|🠋 Step 1: Validate Entered Email 🠋|--//
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmit(false); //--|🠈 Block Submission 🠈|--//
      return;
    }
    setSubmit(true); //--|🠈 Allow Submission 🠈|--//

    let dialogue: string; //--|🠈 Message for the user 🠈|--//
    try {
      //--|🠋 Step 2: Connect to Database 🠋|--//
      const route = 'login'; //--|🠈 API Endpoint 🠈|--//
      const response = await axios.post(`http://localhost:3000/users/${route}`, {
        email, //--|🠈 Email entered by the user 🠈|--//
        passwordHash: password, //--|🠈 Password entered by the user 🠈|--//
      });
      const { status, action } = response.data; //--|🠈 Extract the status from server response 🠈|--//

      //--|🠋 Step 3: Validate User Status 🠋|--//
      if (status === 'pending') {
        //--|🠉 If the user email exists inside the 'pending' collection 🠈|--//
        //--|🠋 Step 4.1: Perform Desired Action 🠋|--//
        switch (action) {
          case 'created': //--|🠈 If a new user is added/registered to the 'pending' collection. 🠈|--//
            //--|🠊 created: Form.register 🠈|--//
            dialogue = 'Your account has been created. Please verify your email to activate it.';
            break;
          case 'mismatch': //--|🠈 If the "activationCode" entered by the user doesn't match the "email" associated with the document. 🠈|--//
            //--|🠊 mismatch: Form.verify 🠈|--//
            dialogue = 'The verification code does not match our records. Please try again.';
            break;
          case 'unverified': //--|🠈 If the user requests a password, registers or logs in without having validated the account first. 🠈|--//
            //--|🠊 unverified: Form.register + Form.login + Form.password 🠈|--//
            dialogue = 'Your account is not verified. Please check your email for the activation link.';
            break;
          case 'halted': //--|🠈 If the user failed to enter the "activationCode" twelve times, move the user to the 'blocked' collection. 🠈|--//
            //--|🠊 halted: Form.verify 🠈|--//
            dialogue = 'Too many incorrect activation attempts. Your account has been temporarily blocked.';
            break;
        }
      } else if (status === 'enabled') {
        //--|🠉 If the user email exists inside the 'enabled' collection 🠈|--//
        //--|🠋 Step 4.2: Perform Desired Action 🠋|--//
        switch (action) {
          case 'authorized': //--|🠈 If the "passwordHash" matches the "email" entered by the user. 🠈|--//
            //--|🠊 authorized: Form.login 🠈|--//
            dialogue = 'Login successful. Redirecting to your dashboard...';
            break;
          case 'incorrect': //--|🠈 If the "passwordHash" doesn't match the "email" entered by the user. 🠈|--//
            //--|🠊 incorrect: Form.login 🠈|--//
            dialogue = 'Incorrect password. Please try again or reset your password.';
            break;
          case 'remembered': //--|🠈 If the newly entered password matches the current "passwordHash". 🠈|--//
            //--|🠊 remembered: Form.password 🠈|--//
            dialogue = 'New password matches the old one. Please choose a different password.';
            break;
          case 'renewed': //--|🠈 If the "passwordCode" matches the input of the user and a new password has been entered. 🠈|--//
            //--|🠊 renewed: Form.password 🠈|--//
            dialogue = 'Your password has been successfully reset.';
            break;
          case 'suspended': //--|🠈 If the user requested a new "passwordCode" six times without using it, move the user to 'blocked'. 🠈|--//
            //--|🠊 suspended: Form.login + Form.password 🠈|--//
            dialogue = 'Too many password reset requests. Your account has been temporarily blocked.';
            break;
        }
      } else if (status === 'blocked') {
        //--|🠉 If the user email exists inside the 'blocked' collection 🠈|--//
        //--|🠋 Step 4.3: Perform Desired Action 🠋|--//
        switch (action) {
          case 'recovered': //--|🠈 Move the user to 'pending' if "updatedAt" is older than seven days. 🠈|--//
            //--|🠊 recovered: Form.register + Form.login + Form.password 🠈|--//
            dialogue = 'Your account has been reinstated. Please verify your email to continue.';
            break;
          case 'declined': //--|🠈 Return this if the user is in the 'blocked' collection and "updatedAt" is less than seven days. 🠈|--//
            //--|🠊 declined: Form.register + Form.login + Form.password 🠈|--//
            dialogue = 'Your account is blocked. Please wait before attempting to access it again.';
            break;
        }
      } else if (status === 'missing') {
        //--|🠉 If the user email doesn't exist inside 'pending', 'enabled', or 'blocked' collections 🠈|--//
        //--|🠋 Step 4.4: Perform Desired Action 🠋|--//
        switch (action) {
          case 'register': //--|🠈 If the user interacts with any page and "email" isn't in any database then return this. 🠈|--//
            //--|🠊 register: Form.register + Form.login + Form.password 🠈|--//
            dialogue = 'No account found with this email. Would you like to register?';
            break;
        }
      } else {
        dialogue = 'An unexpected error occurred. Please try again later.';
      }
    } catch (error) {
      //--|🠊 Handle Login Errors 🠈|--//
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 404) {
        dialogue = 'Server not found. Please try again later.';
      } else if (axiosError.response?.status === 401) {
        dialogue = 'Unauthorized access. Please check your credentials and try again.';
      } else {
        dialogue = 'A network error occurred. Please check your connection.';
      }
    } finally {
      setSubmit(false); //--|🠈 Reset Submission State 🠈|--//
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
