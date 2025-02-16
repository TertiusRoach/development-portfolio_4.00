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

    //--|🠋 Step 1: Error Handling 🠋|--//
    setSubmit(true); //--|🠈 Allow Submission 🠈|--//
    try {
      //--|🠋 Step 3: Connect to Database 🠋|--//
      const route: 'register' | 'login' | 'password' | 'verify' | 'reset' = 'login'; //--|🠈 API Endpoint 🠈|--//
      const response = await axios.post(`http://localhost:3000/users/${route}`, {
        email, //--|🠈 Email entered by the user 🠈|--//
        passwordHash: password, //--|🠈 Password entered by the user 🠈|--//
      });
      const { status, action } = response.data; //--|🠈 Extract the status from server response 🠈|--//

      /*
      let visible = document.querySelectorAll("section[class*='visible']")[0] as HTMLElement;
      let page = visible.className.split('-')[0];
      */

      //--|🠊 Validate User Status 🠈|--//
      let dialogue: string;
      if (status === 'missing') {
        //--|🠉 If the user email doesn't exist inside 'pending', 'enabled', or 'blocked' collections 🠈|--//
        //--|🠋 Step 4.4: Perform Desired Action 🠋|--//
        switch (action) {
          case 'register': //--|🠈 If the user interacts with any page and "email" isn't in any database then return this. 🠈|--//
            //--|🠊 12. register: Form.login + Form.password 🠈|--//
            //--|🠊 status(404): Not Found 🠈|--//
            dialogue = '//--|🠊 No account found with this email. Would you like to register? 🠈|--//';
            viewCarousel('register');
            toggleText('.register-text', dialogue);
            break;
        }
      }
      // handleData(status, action); //--|🠈 Handle the response (could be redirection or updating the UI) 🠈|--//
    } catch (error) {
      //--|🠊 Handle Login Errors 🠈|--//
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 404) {
        alert('Axios Error: Server not found. Please try again later.');
      } else if (axiosError.response?.status === 401) {
        alert('Axios Error: Unauthorized access. Please check your credentials and try again.');
      } else {
        alert('Axios Error: A network error occurred. Please check your connection.');
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
