// Form.login.tsx
import './Form.login.scss';

import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, createContext, useContext } from 'react';

import { viewBlock, viewText, axiosError } from '../../../../landing';

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
            viewText('login', dialogue);
          } else {
            dialogue = 'Would you like to change your password?';
            setAttempts(0);
            viewBlock('password');
            viewText('password', dialogue);

            setTimeout(() => {
              dialogue = 'Sign in to access your account.';
              viewText('login', dialogue);
            }, 250);
          }
          break;
        case 'verify':
          dialogue = 'Please verify your account before signing in.';

          viewBlock('verify');
          viewText('verify', dialogue);
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
