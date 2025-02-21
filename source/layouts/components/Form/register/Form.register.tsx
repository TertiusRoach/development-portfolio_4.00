// Form.register.tsx
import './Form.register.scss';
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { viewCarousel, toggleText, toggleAside, handleData } from '../../../containers/Main/LandingMain/LandingMain';

import { useEmail } from '../../../../modules/context/EmailContext';
import { usePassword } from '../../../../modules/context/PasswordContext';

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
  let { password, setPassword } = usePassword(); //--|🠈 Global Password State 🠈|--//

  //--|🠋 Registration-specific input states 🠋|--//
  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');

  //--|🠋 Action Element(s) 🠋|--//
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
          viewCarousel('login');
          break;
        case 'password':
          viewCarousel('password');
          break;
        case 'verify':
          viewCarousel('verify');
          break;
        case 'blocked':
          alert(`Your account has been ${view}. ${data}`);
          break;
        default:
          alert(view);
          viewCarousel('register');
      }
    } catch (error) {
      axiosError(error);
    } finally {
      setSubmit(false);
    }
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

const axiosError = (error: unknown) => {
  //--|🠉 First, we check if the error came from an Axios request. 🠉|--//
  //--|🠋 This is important because not all errors in JavaScript are Axios errors. 🠋|--//
  if (axios.isAxiosError(error)) {
    //--|🠋 We try to get the HTTP status code from the server's response. 🠋|--//
    const status = error.response?.status;
    //--|🠉 We also try to extract a meaningful error message from the response. 🠉|--//
    //--|🠋 If there's no specific message, we fall back to Axios's built-in error message. 🠋|--//
    const message = error.response?.data?.message || error.message;

    //--|🠋 Now we check the status code to decide what message to show the user. 🠋|--//
    switch (status) {
      case 404: //--|🠈 If the server is not found (wrong URL or down) 🠈|--//
        alert('status(404): Axios Error: Server not found. Please try again later.');
        break;
      case 401: //--|🠈 If the user is unauthorized (wrong username/password) 🠈|--//
        alert('status(401):Axios Error: Unauthorized access. Please check your credentials and try again.');
        break;
      case 500: //--|🠈 If the server itself has an error (internal server issue) 🠈|--//
        alert('status(500)): Axios Error: Internal Server Error. Please try again later.');
        break;
      default: //--|🠈 If it's some other error, we show a general network error message. 🠈|--//
        alert(`status(default):Axios Error: ${message || 'A network error occurred. Please check your connection.'}`);
    }

    //--|🠋 We log the error details in the console so developers can debug the issue. 🠋|--//
    console.error('Axios Error Details:', {
      status, //--|🠈 The HTTP status code (like 404, 500) 🠈|--//
      message, //--|🠈 The error message from the server 🠈|--//
      url: error.config?.url, //--|🠈 The URL that was requested 🠈|--//
      method: error.config?.method, //--|🠈 The HTTP method (GET, POST, etc.) 🠈|--//
    });
  } else {
    //--|🠋 If the error was not caused by Axios, it could be some other problem (like a coding mistake). 🠋|--//
    console.error('Unexpected Error:', error);
    alert('An unexpected error occurred. Please try again.');
  }
};
/*
      //--|🠋 Step 3: Validate User Status 🠋|--//
      let dialogue: string; //--|🠈 Message for the User 🠈|--//
      if (status === 'pending') {
        switch (page) {
          case 'verify':
            dialogue = `//--|🠊 Please verify your email. 🠈|--//`;
            viewCarousel('verify');
            toggleText('.verify-text', dialogue);
            break;
        }
      } else if (status === 'incorrect') {
        switch (page) {
          case 'password':
            dialogue = `//--|🠊 Incorrect password, please try again. 🠈|--//`; // Use attemptsNum here as well
            runCounter(dialogue);
            break;
          case 'login':
            dialogue = `//--|🠊 Too many attempts! Reset your password. 🠈|--//`;
            viewCarousel('password');
            break;
        }
      } else if (status === 'enabled') {
        switch (page) {
          case 'login':
            viewCarousel('login');
            break;
        }
      }
*/
