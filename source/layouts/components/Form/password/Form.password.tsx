// Form.password.tsx
import './Form.password.scss';
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { viewBlock, viewText, axiosError } from '../../../../landing';

import { useEmail } from '../../../../modules/utilities/context/EmailContext';

interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | 'landing' | string;
  };
}
const FormPassword: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'main';
  const pageName = info.identification;

  //--|🠋 Local Input States 🠋|--//
  let { email, setEmail } = useEmail(); //--|🠈 Use the global email state 🠈|--//

  //--|🠋 Button Action States 🠋|--//
  let [submit, setSubmit] = useState(false); //--|🠈 Prevents Multiple Submissions 🠈|--//

  const handlePassword = async (event: React.FormEvent) => {
    event.preventDefault(); //--|🠈 Prevents Refresh 🠈|--//
    setSubmit(true);
    let dialogue: string;
    try {
      let loginEmail = document.querySelector('.login-inputs #email') as HTMLInputElement;
      let loginPassword = document.querySelector('.login-inputs #password') as HTMLInputElement;

      const route = 'password';
      const response = await axios.post(`http://localhost:3000/users/${route}`, {
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

          setTimeout(() => {
            alert(dialogue);
          }, 250);
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
          <button className="password-button" type="submit" disabled={submit}>
            {submit ? 'Changing...' : 'Change'}
          </button>
        </menu>
        <nav className="password-buttons">
          <button className="password-login" type="button" onClick={() => viewBlock('login')}>
            <h6>Enter Account</h6>
          </button>
          <button className="password-register" type="button" onClick={() => viewBlock('register')}>
            <h6>Register Account</h6>
          </button>
        </nav>
      </div>
    </form>
  );
};
export default FormPassword;

const showDemos = (pageName: 'landing' | string) => {
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
};
