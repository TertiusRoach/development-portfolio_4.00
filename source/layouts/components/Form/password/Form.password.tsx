//--|🠊 Form.password.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Form.password.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Functions 🠋|--//
import { showDemos, defineButton } from './Form.password.ts';
import { viewBlock, viewText, axiosError, retrieveEndpoint } from '../../../../landing';
//--|🠉 Functions 🠉|--//
//--|🠋 Context 🠋|--//
import { useEmail } from '../../../../modules/context/EmailContext';
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
const FormPassword: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'main';
  const pageName = info.identification;

  //--|🠋 Local Input States 🠋|--//
  let { email, setEmail } = useEmail(); //--|🠈 Use the global email state 🠈|--//

  //--|🠋 Button States 🠋|--//
  let [submit, setSubmit] = useState(false); //--|🠈 Prevents Multiple Submissions 🠈|--//

  const handlePassword = async (event: React.FormEvent) => {
    event.preventDefault(); //--|🠈 Prevents Refresh 🠈|--//
    setSubmit(true);
    let dialogue: string;
    try {
      let loginEmail = document.querySelector('.login-inputs #email') as HTMLInputElement;
      let loginPassword = document.querySelector('.login-inputs #password') as HTMLInputElement;

      // const route = 'password';
      const endpoint = retrieveEndpoint('password', 'http://localhost:3000');
      const response = await axios.post(endpoint, {
        email,
        passwordHash: loginPassword.value,
      });
      const { view, data } = response.data;

      let dialogue: string;
      switch (view) {
        case 'register':
          dialogue = 'You cannot change the password for an account that has not been created.';

          viewBlock('register');
          viewText('register', dialogue);
          break;
        case 'login':
          dialogue = 'Account recovered. Please log in and check your email to authorize.';

          viewBlock('login');
          viewText('login', dialogue);
          break;
        case 'verify':
          dialogue = 'Please verify your account before requesting a password change.';

          viewBlock('verify');
          viewText('verify', dialogue);
          break;
        case 'reset':
          dialogue = 'Please enter the recovery code sent to your email, followed by the new password.';

          viewBlock('reset');
          viewText('reset', dialogue);
          break;
        case 'blocked':
          dialogue = `Your account has been ${view} until ${data.restrictionExpiresAt}.`;

          viewBlock('blocked');

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

  return (
    <form className="password-form" onSubmit={(event) => handlePassword(event)}>
      <div className="password-header">
        <div className="password-label">
          <h6 className="display-6">Password</h6>
        </div>
        <button className="password-close" type="button">
          <img
            src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d96e3df748dac85a20c559b47659c1a3763a5fe/source/assets/svg-files/index-page/close/close-light.svg"
            alt=""
          />
        </button>
        <div className="password-text">
          <h4>You can update your password here.</h4>
        </div>
        {/* <div className="password-logo">
              <img
                src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d11394a960db3ea88c21e28aa8035c3f40bdad7c/source/assets/svg-files/archive-images/tertius-roach/signature-icon/primary-light.svg"
                alt="Login Logo"
              />
            </div> */}
      </div>
      <div className="password-inputs">
        <input
          required
          id="email"
          name="Email"
          type="email"
          placeholder="//--|🠊 Registered Email 🠈|--//"
          // --- //
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="password-footer">
        <menu className="password-action">
          <ButtonDefault
            type="submit"
            text={submit ? 'Changing...' : 'Change'}
            style={defineButton('password', { pageName, blockName })}
          />
          {/* <button className="password-button" type="submit" disabled={submit}>
            
          </button> */}
        </menu>
        <nav className="password-buttons">
          <ButtonDefault
            type="button"
            text={'Enter Account'}
            onClick={() => viewBlock('login')}
            style={defineButton('login', { pageName, blockName })}
          />
          <ButtonDefault
            type="button"
            text={'Create Account'}
            onClick={() => viewBlock('register')}
            style={defineButton('register', { pageName, blockName })}
          />
        </nav>
      </div>
    </form>
  );
};
export default FormPassword;

/*
function showDemos(pageName: 'landing' | string) {
  let closePassword = document.querySelector('.password-close') as HTMLElement;
  let header = document.querySelector(`#${pageName}-header`) as HTMLElement;

  if (closePassword && header) {
    var closeClick = () => {
      header.classList.toggle('expanded'); // Toggle '.expanded'
      header.classList.remove('collapsed'); // Remove '.collapsed'
    };

    closePassword.addEventListener('click', closeClick);
    return () => closePassword.removeEventListener('click', closeClick);
  }
}
function defineButton(button: 'register' | 'login' | 'password', info: { blockName: string; pageName: string }) {
  const { blockName, pageName } = info;
  //--|🠋 Always Return an Object 🠋|--//
  switch (button) {
    case 'password':
      return {
        fontSize: '<h3>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'text' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'light' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'hyperlink' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/95cb0b63850941f4de8b0d021e44f529819fe627/source/assets/svg-files/landing-page/user-lock.svg',
      };
    case 'login':
      return {
        fontSize: '<h6>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'left' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'hyperlink' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/95cb0b63850941f4de8b0d021e44f529819fe627/source/assets/svg-files/landing-page/sign-in-alt.svg',
      };
    case 'register':
      return {
        fontSize: '<h6>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'right' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'hyperlink' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/95cb0b63850941f4de8b0d021e44f529819fe627/source/assets/svg-files/landing-page/user-plus.svg',
      };
  }
}
*/
