// Section.home.tsx
import $ from 'jquery';
import React from 'react';
import './Form.password.scss';
import axios, { AxiosError } from 'axios';
import { viewCarousel } from '../../../containers/Main/LandingMain/LandingMain';

import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';

import MenuButton from '../../Menu/button/Menu.button';
import ButtonFade from '../../Button/fade/Button.fade';

import { getSVG } from '../../../../modules/utilities/getFile';
import getScroll from '../../../../modules/utilities/getScroll';
import toggleAside from '../../../../modules/utilities/toggleAside';
import toggleSection from '../../../../modules/utilities/toggleSection';
import DivisionWorking from '../../Division/working/Division.working';
import getIdentification from '../../../../modules/utilities/getIdentification';

interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | 'landing' | string;
  };
}
const FormPassword: React.FC<InfoProps> = ({ info }) => {
  let information = info;
  const [currentView, setCurrentView] = useState<'default' | 'unverified' | 'authorized' | 'recovery'>('default');

  //--|🠋 Shared input states 🠋|--//
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  //--|🠋 Registration-specific input states 🠋|--//
  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');

  //--|🠋 Feedback messages for user interactions 🠋|--//
  let [loginMessage, setLoginMessage] = useState('');
  let [registerMessage, setRegisterMessage] = useState('');
  let [passwordMessage, setPasswordMessage] = useState('');

  //--|🠋 Other UI states 🠋|--//
  let [isSubmitting, setIsSubmitting] = useState(false); //--|🠈 Prevents multiple submissions 🠈|--//
  let [loggedIn, setLoggedIn] = useState(false); //--|🠈 Tracks login state 🠈|--//

  const handleData = async (event: React.FormEvent) => {
    event.preventDefault(); //--|🠈 Prevents Refreshing 🠈|--//
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //--|🠈 Regular expression to validate email format 🠈|--//

    let userEmail = document.querySelector('#email') as HTMLInputElement;
    try {
      //--|🠋 Send email to back-end for validation 🠋|--//
      let response = await axios.post('http://localhost:3000/users/password', {
        email: userEmail.value,
      });

      alert(response.data.message);
      console.log(response.data.message); //--|🠈 Log response for debugging 🠈|--//
      document.querySelector('#landing-rightbar')?.classList.toggle('collapsed', false);
      document.querySelector('#landing-rightbar')?.classList.toggle('expanded', true); //--|🠈 Expand Sidebar 🠈|--//
    } catch (error) {
      //--|🠋 Handle errors during the process 🠋|--//
      alert('An error occurred while processing your request. Please try again later.');
      console.error('Error during password reset:', error); //--|🠈 Log error for debugging 🠈|--//
      viewCarousel('login'); //--|🠈 Redirect to login 🠈|--//
    } finally {
      setIsSubmitting(false); //--|🠈 Reset submission state 🠈|--//
    }
  };

  return (
    <form className="password-form" onSubmit={(event) => handleData(event)}>
      <div className="password-header">
        <div className="password-logo">
          <img
            src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d11394a960db3ea88c21e28aa8035c3f40bdad7c/source/assets/svg-files/archive-images/tertius-roach/signature-icon/primary-light.svg"
            alt="Login Logo"
          />
        </div>
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
        <mark className="password-action">
          <button className="password-button" disabled={isSubmitting}>
            <h6>Change</h6>
          </button>
          <div className="password-message">
            <h6>Can't find Email.</h6>
          </div>
        </mark>
        <menu className="password-buttons">
          <button className="password-login" type="button" onClick={() => viewCarousel('login')}>
            <h6>Enter Account</h6>
          </button>
          <button className="password-register" type="button" onClick={() => viewCarousel('register')}>
            <h6>Register Account</h6>
          </button>
        </menu>
      </div>
    </form>
  );
};
export default FormPassword;
