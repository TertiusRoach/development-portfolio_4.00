//--|🠊 Form.login.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Form.login.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Functions 🠋|--//
import { viewBlock, viewText, axiosError, retrieveEndpoint } from '../../../../landing';
//--|🠉 Functions 🠉|--//
//--|🠋 Context 🠋|--//
import { useEmail } from '../../../../modules/scripts/context/EmailContext';
import { usePassword } from '../../../../modules/scripts/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
import ButtonDefault from '../../Button/default/Button.default';
//--|🠉 Components 🠉|--//
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
      setSubmit(false);
    }
  };

  useEffect(() => {
    showDemos(pageName);
  }, [pageName, blockName]);

  const observe = defineButton('observe', pageName, blockName);
  /* || {
    pageName: '',
    blockName: '',
    className: '',
    imageLink: '',
    layoutView: 'icon' as 'left' | 'right' | 'center' | 'text' | 'icon',
    shadingView: 'dark' as 'dark' | 'medium' | 'light',
    captionView: '',
  }; */

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
        <ButtonDefault style={observe} />
      </div>
      <div className="login-footer">
        <menu className="login-action">
          <button className="login-button" type="submit" disabled={submit}>
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

const showDemos = (pageName: 'landing' | string) => {
  let closeLogin = document.querySelector('.login-close') as HTMLElement;
  let header = document.querySelector(`#${pageName}-header`) as HTMLElement;

  if (closeLogin && header) {
    var closeClick = () => {
      header.classList.toggle('expanded'); // Toggle '.expanded'
      header.classList.remove('collapsed'); // Remove '.collapsed'
    };

    closeLogin.addEventListener('click', closeClick);
    return () => closeLogin.removeEventListener('click', closeClick);
  }
};

/*
const defineButton = (style: 'observe' | 'register' | 'login' | 'password', blockName: string, pageName: string) => {
  // Ensure `defineButton` always returns an object
  const buttonStyles = {
    observe: {
      pageName,
      blockName,
      className: 'observe',
      imageLink:
        'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/6e8c50fc3d2d3a45cee89b33a4a81d8685a2888b/source/assets/svg-files/landing-page/eye.svg',
      layoutView: 'icon' as const,
      shadingView: 'dark' as const,
      captionView: '---',
    },
    register: {
      pageName,
      blockName,
      className: 'register',
      imageLink: '',
      layoutView: 'text' as const,
      shadingView: 'medium' as const,
      captionView: 'Register',
    },
    login: {
      pageName,
      blockName,
      className: 'login',
      imageLink: '',
      layoutView: 'text' as const,
      shadingView: 'light' as const,
      captionView: 'Login',
    },
    password: {
      pageName,
      blockName,
      className: 'password',
      imageLink: '',
      layoutView: 'text' as const,
      shadingView: 'dark' as const,
      captionView: 'Reset Password',
    },
  };

  return buttonStyles[style] || buttonStyles['observe']; // Always return a valid button
};
*/
const defineButton = (style: 'observe' | 'register' | 'login' | 'password', blockName: string, pageName: string) => {
  switch (style) {
    case 'observe':
      return {
        pageName: pageName,
        blockName: blockName,
        className: 'observe',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/6e8c50fc3d2d3a45cee89b33a4a81d8685a2888b/source/assets/svg-files/landing-page/eye.svg',
        layoutView: 'icon' as 'left' | 'right' | 'center' | 'text' | 'icon',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',
        captionView: '---',
      };
    case 'register':
      return {
        pageName: pageName,
        blockName: blockName,
        className: 'register',
        imageLink: '',
        layoutView: 'text' as 'left' | 'right' | 'center' | 'text' | 'icon',
        shadingView: 'medium' as 'dark' | 'medium' | 'light',
        captionView: 'Register',
      };
    case 'login':
      return {
        pageName: pageName,
        blockName: blockName,
        className: 'login',
        imageLink: '',
        layoutView: 'text' as 'left' | 'right' | 'center' | 'text' | 'icon',
        shadingView: 'light' as 'dark' | 'medium' | 'light',
        captionView: 'Login',
      };
    case 'password':
      return {
        pageName: pageName,
        blockName: blockName,
        className: 'password',
        imageLink: '',
        layoutView: 'text' as 'left' | 'right' | 'center' | 'text' | 'icon',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',
        captionView: 'Reset Password',
      };
    default:
      return {
        pageName: '' as string,
        blockName: '' as string,
        className: 'button' as string,
        imageLink: '' as string,
        layoutView: 'text' as 'left' | 'right' | 'center' | 'text' | 'icon',
        shadingView: 'medium' as 'dark' | 'medium' | 'light',
        captionView: 'Default Button' as string,
      };
  }
};
