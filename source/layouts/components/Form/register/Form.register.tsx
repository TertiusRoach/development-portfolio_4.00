// Form.register.tsx
import './Form.register.scss';
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { viewBlock, viewText, axiosError } from '../../../../landing';

import { useEmail } from '../../../../modules/scripts/context/EmailContext';
import { usePassword } from '../../../../modules/scripts/context/PasswordContext';

interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | 'landing' | string;
  };
}
const FormRegister: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'main';
  const pageName = info.identification;

  //--|🠋 Local Input States 🠋|--//
  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');
  let { email, setEmail } = useEmail(); //--|🠈 Use the global email state 🠈|--//
  let { password, setPassword } = usePassword(); //--|🠈 Global Password State 🠈|--//

  //--|🠋 Button Action States 🠋|--//
  let [submit, setSubmit] = useState(false); //--|🠈 Prevents Multiple Submissions 🠈|--//

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmit(true);
    try {
      const route = 'register';
      const response = await axios.post(`http://localhost:3000/users/${route}`, {
        firstName,
        lastName,
        email,
        passwordHash: password,
      });
      const { view, data } = response.data;

      let dialogue: string;
      switch (view) {
        case 'login':
          dialogue = 'You already have an account.';

          viewBlock('login');
          viewText('login', dialogue);
          break;
        case 'password':
          dialogue = 'You already have an account. Reset your password here.';

          viewBlock('password');
          viewText('password', dialogue);
          break;
        case 'verify':
          dialogue = 'Please check your email for the activation code.';

          viewBlock('verify');
          viewText('verify', dialogue);
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
    <form className="register-form" onSubmit={(event) => handleRegister(event)}>
      <div className="register-header">
        <div className="register-label">
          <h6 className="display-6">Register</h6>
        </div>
        <button className="register-close" type="button">
          <img
            src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d96e3df748dac85a20c559b47659c1a3763a5fe/source/assets/svg-files/index-page/close/close-light.svg"
            alt=""
          />
        </button>
        <div className="register-text">
          <h4>Sign up to use application.</h4>
        </div>
      </div>
      <div className="register-inputs">
        <div className="fullname-inputs">
          <input
            required
            type="text"
            id="first-name"
            name="First Name"
            pattern="[A-Z][a-zA-Z\s]+"
            placeholder="//--|🠊 First Name 🠈|--//"
            title="Name must start with a capital letter and contain only letters and spaces"
            // --- //
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <input
            required
            type="text"
            id="last-name"
            name="Last Name"
            pattern="[a-zA-Z\s]+"
            placeholder="//--|🠊 Last Name 🠈|--//"
            title="Surname can't contain any numerical values or special characters"
            // --- //
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
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
          type="password"
          name="Password"
          placeholder="//--|🠊 Insert Password 🠈|--//"
          // --- //
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="register-footer">
        <menu className="register-action">
          <button className="register-button" type="submit" disabled={submit}>
            {submit ? 'Registering...' : 'Register'}
          </button>
        </menu>
        <nav className="register-buttons">
          <button className="register-login" type="button" onClick={() => viewBlock('login')}>
            <h6>Access Account</h6>
          </button>
          <button className="register-password" type="button" onClick={() => viewBlock('password')}>
            <h6>Renew Password</h6>
          </button>
        </nav>
      </div>
    </form>
  );
};
export default FormRegister;

const showDemos = (pageName: 'landing' | string) => {
  let closeRegister = document.querySelector('.register-close') as HTMLElement;
  let header = document.querySelector(`#${pageName}-header`) as HTMLElement;

  if (closeRegister && header) {
    var closeClick = () => {
      header.classList.toggle('expanded'); // Toggle '.expanded'
      header.classList.remove('collapsed'); // Remove '.collapsed'
    };

    closeRegister.addEventListener('click', closeClick);
    return () => closeRegister.removeEventListener('click', closeClick);
  }
};
