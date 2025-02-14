// Form.password.tsx
import './Form.password.scss';
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { viewCarousel, toggleText, toggleAside } from '../../../containers/Main/LandingMain/LandingMain';

import { useEmail } from '../../../../modules/context/EmailContext';

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

  //--|🠋 Shared input states 🠋|--//
  let { email, setEmail } = useEmail(); //--|🠈 Use the global email state 🠈|--//
  let [password, setPassword] = useState('');

  //--|🠋 Registration-specific input states 🠋|--//
  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');

  //--|🠋 Feedback messages for user interactions 🠋|--//
  let [loginMessage, setLoginMessage] = useState('');
  let [registerMessage, setRegisterMessage] = useState('');
  let [passwordMessage, setPasswordMessage] = useState('');

  //--|🠋 Action Element(s) 🠋|--//
  let [submit, setSubmit] = useState(false); //--|🠈 Prevents Multiple Submissions 🠈|--//

  const handlePassword = async (event: React.FormEvent) => {
    event.preventDefault(); //--|🠈 Prevents Refresh 🠈|--//
    /*
    setSubmit(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const userEmail = document.querySelector('.password-inputs #email') as HTMLInputElement;

    if (!emailRegex.test(userEmail.value)) {
      // setPasswordMessage('Please enter a valid email address.');
      setSubmit(false); //--|🠈 Indicate submission is blocked 🠈|--//
      // return; //
    }

    let dialogue: string;
    try {
      const response = await axios.post('http://localhost:3000/users/password', { email: userEmail.value });
      const { message, status } = response.data;

      //--|🠊 Validate User Status 🠈|--//
      switch (status) {
        case 'pending': //--|🠈 Account still needs to be verified before a password reset can take place. 🠈|--//
          dialogue = `Your account hasn't been verified yet.`;

          viewCarousel('register'); //--|🠈 Scroll to Login 🠈|--//
          toggleText('.verify-text', dialogue); //--|🠈 Provide Guidance 🠈|--//
          toggleAside('#landing-leftbar', 'show'); //--|🠈 Show Verify 🠈|--//

          let passwordEmail = document.querySelector('.password-inputs #email') as HTMLInputElement;
          let registerEmail = document.querySelector('.register-inputs #email') as HTMLInputElement;
          registerEmail.value = passwordEmail.value;

          break;
        case 'created': //--|🠈 Password change requested and sent to designated email 🠈|--//
          dialogue = `Please check your email for the verification code.`;

          toggleText('.reset-text', dialogue); //--|🠈 Provide Guidance 🠈|--//
          toggleAside('#landing-rightbar', 'show'); //--|🠈 Show Reset 🠈|--//
          break;
        case 'waiting': //--|🠈 User already requested a password change 🠈|--//
          dialogue = 'Please check your email for the verification code.';

          toggleText('.reset-text', dialogue); //--|🠈 Provide Guidance 🠈|--//
          toggleAside('#landing-rightbar', 'show'); //--|🠈 Show Reset 🠈|--//
          break;
        default:
          setRegisterMessage('Unexpected response from the server. Please try again.');
      }
    } catch (error) {
      //--|🠋 Account doesn't exist 🠋|--//
      let dialogue: string = 'Account not found. Please register.';

      viewCarousel('register'); //--|🠈 Scroll to Register 🠈|--//
      toggleText('.register-text', dialogue); //--|🠈 Provide Guidance 🠈|--//
    } finally {
      setSubmit(false);
    }
    */
  };

  useEffect(() => {}, [pageName, blockName]);

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
          <button className="password-button" disabled={submit}>
            <h6>Change</h6>
          </button>
        </menu>
        <nav className="password-buttons">
          <button className="password-login" type="button" onClick={() => viewCarousel('login')}>
            <h6>Enter Account</h6>
          </button>
          <button className="password-register" type="button" onClick={() => viewCarousel('register')}>
            <h6>Register Account</h6>
          </button>
        </nav>
      </div>
    </form>
  );
};
export default FormPassword;
