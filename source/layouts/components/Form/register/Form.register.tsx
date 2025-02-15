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

  //--|🠋 Login & Password input states 🠋|--//
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

    //--|🠋 Step 2: Error Handling 🠋|--//
    try {
      const route: 'register' | 'login' | 'password' | 'verify' | 'reset' = 'register';
      const response = await axios.post(`http://localhost:3000/users/${route}`, {
        firstName,
        lastName,
        email,
        passwordHash: password,
      });
      const { status, action } = response.data;
      handleData(status, action);
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
      setSubmit(false);
    }

    /*
    event.preventDefault(); //--|🠈 Prevents Refresh 🠈|--//

    //--|🠋 Step 1: Validate Entered Email 🠋|--//
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmit(false); //--|🠈 Block Submission 🠈|--//
      return;
    }
    setSubmit(true); //--|🠈 Allow Submission 🠈|--//

    //--|🠋 Step 2: Error Handling 🠋|--//
    try {
      //--|🠋 Step 3: Connect to Database 🠋|--//
      const route: string = 'register'; //--|🠈 API Endpoint 🠈|--//
      const response = await axios.post(`http://localhost:3000/users/${route}`, {
        firstName,
        lastName,
        email, //--|🠈 Email entered by the user 🠈|--//
        passwordHash: password, //--|🠈 Password entered by the user 🠈|--//
      });

      const { status, action } = response.data; //--|🠈 Extract the status from server response 🠈|--//

      //--|🠊 Step 4: Validate User Status 🠈|--//
      handleData(setSubmit, status, action); //--|🠈 Handle the response (could be redirection or updating the UI) 🠈|--//
    } catch (error) {
      //--|🠊 Handle Login Errors 🠈|--//
      alert('Axios ERROR!');
    } finally {
      setSubmit(false); //--|🠈 Reset Submission State 🠈|--//
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
            // value={'Tertius'}
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
            // value={'Embassy'}
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
          // value={'tertius.embassy@gmail.com'}
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
          // value={'password'}
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
