//--|🠊 Form.login.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Form.login.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Functions 🠋|--//
import { showDemos, defineButton } from './Form_login';
import { viewBlock, viewText, axiosError, retrieveEndpoint, viewWord } from '../../../../landing';
//--|🠉 Functions 🠉|--//
//--|🠋 Context 🠋|--//
import { useEmail } from '../../../../modules/context/EmailContext';
import { usePassword } from '../../../../modules/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
import ButtonDefault from '../../Button/default/Button.default';
//--|🠉 Components 🠉|--//
interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | string;
    identification: 'landing' | 'overtime' | 'ticketing' | 'hyperlink';
  };
}
const FormLogin: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'main';
  const pageName = info.identification as 'landing' | 'overtime' | 'ticketing' | 'hyperlink' | string;

  //--|🠋 Local Input States 🠋|--//
  let { email, setEmail } = useEmail();
  let { password, setPassword } = usePassword();

  //--|🠋 Action States 🠋|--//
  let [submit, setSubmit] = useState(false);
  let [attempts, setAttempts] = useState(0);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmit(true);
    try {
      // const route = 'login';
      const endpoint = retrieveEndpoint('login', 'http://localhost:3000');
      const response = await axios.post(endpoint, {
        email,
        passwordHash: password,
      });
      const { view, data } = response.data;

      let dialogue: string;
      switch (view) {
        case 'launch':
          dialogue = 'Login successful, please select the application you want to use.';

          viewBlock('launch');

          /*
          setTimeout(() => {
            alert(dialogue);
          }, 250);
          */
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
          dialogue = `Your account has been ${view} until ${data.restrictionExpiresAt}.`;

          viewBlock('blocked');
          viewText('blocked', dialogue);
          /*
          setTimeout(() => {
            alert(dialogue);
          }, 250);
          */
          break;
      }
    } catch (error) {
      axiosError(error);
    } finally {
      // Simulate a delay for login (optional)
      /*
      setTimeout(() => {
        setSubmit(false); // Reset button after process
      }, 2500);
      */
      setSubmit(false);
    }
  };

  useEffect(() => {
    showDemos(pageName);
  }, [pageName, blockName]);

  return (
    <form className="login-form" onSubmit={(event) => handleLogin(event)}>
      <div className="login-header">
        {/* <div className="login-label">
          <h6 className="display-6">Login</h6>
        </div> */}
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
          placeholder="Email Address"
          // --- //
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          required
          id="password"
          name="Password"
          type="password"
          placeholder="Password"
          // --- //
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <ButtonDefault
          text={''}
          type="button"
          onClick={() => viewWord('login')}
          style={defineButton('observe', { pageName, blockName })}
        />
      </div>
      <div className="login-footer">
        <menu className="login-action">
          <ButtonDefault
            type="submit"
            text={submit ? 'Logging in...' : 'Login'}
            style={defineButton('login', { pageName, blockName })}
          />
        </menu>
        <nav className="login-buttons">
          <ButtonDefault
            type="button"
            text={'Register Account'}
            onClick={() => viewBlock('register')}
            style={defineButton('register', { pageName, blockName })}
          />
          <ButtonDefault
            type="button"
            text={'Forgot Password'}
            onClick={() => viewBlock('password')}
            style={defineButton('password', { pageName, blockName })}
          />
        </nav>
      </div>
    </form>
  );
};
export default FormLogin;

const generatePassword = () => {};
