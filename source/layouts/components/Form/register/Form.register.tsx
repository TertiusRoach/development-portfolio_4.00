// Form.register.tsx
import './Form.register.scss';
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { viewCarousel, toggleText, toggleAside, handleData } from '../../../containers/Main/LandingMain/LandingMain';

import { useEmail } from '../../../../modules/context/EmailContext';

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

  //--|🠋 Shared input states 🠋|--//
  let { email, setEmail } = useEmail(); //--|🠈 Use the global email state 🠈|--//
  let [password, setPassword] = useState('');

  //--|🠋 Registration-specific input states 🠋|--//
  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');

  //--|🠋 Action Element(s) 🠋|--//
  let [submit, setSubmit] = useState(false); //--|🠈 Prevents Multiple Submissions 🠈|--//

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault(); //--|🠈 Prevents Refresh 🠈|--//

    //--|🠋 Step 1: Validate Entered Email 🠋|--//
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmit(false); //--|🠈 Block Submission 🠈|--//
      return;
    }
    setSubmit(true); //--|🠈 Allow Submission 🠈|--//

    //--|🠋 Step 2: Connect to Database 🠋|--//
    const route: string = 'register'; //--|🠈 API Endpoint 🠈|--//
    const response = await axios.post(`http://localhost:3000/users/${route}`, {
      firstName,
      lastName,
      email, //--|🠈 Email entered by the user 🠈|--//
      passwordHash: password, //--|🠈 Password Entered by the User 🠈|--//
    });
    const { status, action } = response.data; //--|🠈 Extract the status from server response 🠈|--//

    handleData(setSubmit, status, action);

    /*
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //--|🠈 Regular expression to validate email format 🠈|--//

    //--|🠋 Input Validation: Ensure all fields are filled 🠋|--//
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !password.trim()) {
      // setRegisterMessage('All fields are required.');
      return;
    }

    //--|🠋 Email Validation: Check format 🠋|--//
    if (!emailRegex.test(email)) {
      // setRegisterMessage('Please enter a valid email address.');
      return;
    }

    setSubmit(true); //--|🠈 Disable button during submission 🠈|--//
    try {
      const response = await axios.post('http://localhost:3000/users/register', {
        firstName,
        lastName,
        email,
        passwordHash: password, // Password sent to back-end for hashing
      });

      const { message, status } = response.data; //--|🠈 Back-end response 🠈|--//

      let dialogue: string;
      //--|🠊 Validate User Status 🠈|--//
      switch (status) {
        case 'pending': //--|🠈 Pending user 🠈|--//
        case 'created': //--|🠈 Created user 🠈|--//
          dialogue = 'Registration successful, please check your email for the activation code.';

          toggleText('.verify-text', dialogue); //--|🠈 Provide Guidance 🠈|--//
          toggleAside('#landing-leftbar', 'show'); //--|🠈 Show Leftbar 🠈|--//
          break;
        case 'enabled': //--|🠈 Enabled user 🠈|--//
          dialogue = 'Account already exists. Please log in.';

          viewCarousel('login'); //--|🠈 Scroll to login 🠈|--//
          toggleText('.login-text', dialogue); //--|🠈 Provide Guidance 🠈|--//
          break;
        case 'password': //--|🠈 Incorrect password 🠈|--//
          dialogue = 'Forgotten your password? You can reset it here.';

          viewCarousel('password'); //--|🠈 Redirect to password reset 🠈|--//
          toggleText('.password-text', dialogue); //--|🠈 Provide Guidance 🠈|--//
          break;
        default:
        // setRegisterMessage('Unexpected response from the server. Please try again.');
      }
    } catch (error) {
      //--|🠋 Handle Axios errors 🠋|--//
      if (axios.isAxiosError(error)) {
        // setRegisterMessage(error.response?.data?.err || 'Registration failed.');
      } else {
        // setRegisterMessage('An unexpected error occurred.');
      }
    } finally {
      setSubmit(false); //--|🠈 Re-enable the button 🠈|--//
    }
    */
  };

  useEffect(() => {}, [pageName, blockName]);

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
        {/* <div className="register-logo">
              <img
                src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d11394a960db3ea88c21e28aa8035c3f40bdad7c/source/assets/svg-files/archive-images/tertius-roach/signature-icon/primary-light.svg"
                alt="Login Logo"
              />
            </div> */}
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
          {/* Type 'void' is not assignable to type 'MouseEventHandler<HTMLButtonElement> | undefined'. */}
          <button className="register-login" type="button" onClick={() => viewCarousel('login')}>
            <h6>Access Account</h6>
          </button>
          <button className="register-password" type="button" onClick={() => viewCarousel('password')}>
            <h6>Renew Password</h6>
          </button>
        </nav>
      </div>
    </form>
  );
};
export default FormRegister;
