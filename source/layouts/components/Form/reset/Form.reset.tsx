// Form.reset.tsx
import './Form.reset.scss';
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { viewCarousel, toggleText, toggleAside } from '../../../containers/Main/LandingMain/LandingMain';

import { useEmail } from '../../../../modules/context/EmailContext';
import { usePassword } from '../../../../modules/context/PasswordContext';

interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | 'landing' | string;
  };
}
const FormReset: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'main';
  const pageName = info.identification;

  //--|🠋 Shared input states 🠋|--//
  let { email, setEmail } = useEmail(); //--|🠈 Use the global email state 🠈|--//
  let { password, setPassword } = usePassword(); //--|🠈 Global Password State 🠈|--//

  //--|🠋 Feedback messages for user interactions 🠋|--//
  // let [resetMessage, setResetMessage] = useState('');

  //--|🠋 Other UI states 🠋|--//
  let [submit, setSubmit] = useState(false); //--|🠈 Prevents multiple submissions 🠈|--//

  const handleReset = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmit(true);
    try {
      /*
      const route = 'reset';
      const response = await axios.post(`http://localhost:3000/users/${route}`, {
        email,
        passwordHash: loginPassword.value,
        activation: activate,
      });
      const { view, data } = response.data;
      */
    } catch (error) {
      axiosError(error);
    } finally {
      setSubmit(false);
    }
    /*

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //--| Validate email format |--//
    let emailInput = document.querySelector('.password-inputs #email') as HTMLInputElement;
    let passwordInput = document.querySelector('.reset-inputs #password') as HTMLInputElement;
    let recoveryInput = document.querySelector('.reset-inputs #reset-code') as HTMLInputElement;

    if (!emailRegex.test(emailInput.value)) {
      // setResetMessage('Invalid email format.');
      setSubmit(false);
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:3000/users/reset',
        {
          email: emailInput.value,
          newHash: passwordInput.value,
          passwordCode: recoveryInput.value,
        }
      );

      const { status, message } = response.data;
      let dialogue: string;

      switch (status) {
        case 'authorized': //--| Reset successful |--//
          dialogue = 'Your password has been successfully reset.';
          viewCarousel('login');
          toggleText('.login-text', dialogue);
          toggleAside('#landing-rightbar', 'hide'); //--|🠈 Hide Reset 🠈|--//
          break;
        case 'remembered': //--| Password unchanged |--//
          dialogue = `You're all set! No password change was necessary.`;
          viewCarousel('login');
          toggleText('.login-text', dialogue);
          toggleAside('#landing-rightbar', 'hide'); //--|🠈 Hide Reset 🠈|--//
          break;
        case 'unverified': //--| Incorrect details |--//
          dialogue = `The details you've entered are incorrect. Please try again.`;

          toggleText('.reset-text', dialogue);
          break;
        default:
          dialogue = 'An unexpected error occurred. Please try again.';

          toggleText('.reset-text', dialogue);
          break;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // setResetMessage(error.response?.data?.message || 'An error occurred.');
      } else {
        // setResetMessage('An unexpected error occurred.');
      }
    } finally {
      setSubmit(false);
    }
    */
    /*
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //--|🠈 Regular expression to validate email format 🠈|--//
    let emailInput = document.querySelector('.password-inputs #email') as HTMLInputElement;
    let passwordInput = document.querySelector('.reset-inputs #password') as HTMLInputElement;
    let recoveryInput = document.querySelector('.reset-inputs #reset-code') as HTMLInputElement;

    if (!emailRegex.test(emailInput.value)) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/users/reset', {
        email: emailInput.value,
        newHash: passwordInput.value,
        passwordCode: recoveryInput.value,
      });

      const { status, message } = response.data;
      let dialogue: string;
      //--|🠊 Validate User Status 🠈|--//

      switch (status) {
        case 'authorized': //--|🠈 Reset code matches database. Password reset confirmed. 🠈|--//
          dialogue = 'Your password has been successfully reset.';

          viewCarousel('login'); //--|🠈 Scroll to Register 🠈|--//
          toggleText('.login-text', dialogue); //--|🠈 Provide Guidance 🠈|--//
          break;
        case 'remembered': //--|🠈 Password reset cancelled. User remembered their password. 🠈|--//
          dialogue = `You're all set! No password change was necessary.`;

          viewCarousel('login'); //--|🠈 Scroll to Register 🠈|--//
          toggleText('.login-text', dialogue); //--|🠈 Provide Guidance 🠈|--//
          break;
        case 'unverified': //--|🠈 Incorrect details were inserted into inputs. 🠈|--//
          dialogue = `The details you've entered are incorrect. Please try again.`;

          toggleText('.reset-text', dialogue); //--|🠈 Provide Guidance 🠈|--//
          break;
      }
    } catch (error: AxiosError | unknown) {
      if (axios.isAxiosError(error)) {
        setResetMessage(error.response?.data?.message || 'An error occurred');
      } else {
        setResetMessage('An unexpected error occurred');
      }
    } finally {
      setIsSubmitting(false);
    }
    */
  };

  useEffect(() => {
    let closeButton = document.querySelector('.reset-close');
    let handleClose = () => {
      toggleAside('#landing-rightbar', 'hide');
    };

    if (closeButton) {
      closeButton.addEventListener('click', handleClose);
    }

    return () => {
      if (closeButton) {
        closeButton.removeEventListener('click', handleClose);
      }
    };
  }, [pageName, blockName]);

  return (
    <form className="reset-form" onSubmit={(event) => handleReset(event)}>
      <div className="reset-header">
        <div className="reset-label">
          <h6 className="display-6">Reset</h6>
        </div>
        <button className="reset-close" type="button">
          <img
            src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d96e3df748dac85a20c559b47659c1a3763a5fe/source/assets/svg-files/index-page/close/close-light.svg"
            alt=""
          />
        </button>
        <div className="reset-text">
          <h4>Reset your password.</h4>
        </div>
      </div>
      <div className="reset-inputs">
        <input
          required
          type="text"
          id="reset-code"
          name="Recovery Code"
          placeholder="//--|🠊 Recovery Code 🠈|--//"
          // --- //
          // value={code}
        />
        <input
          required
          id="password"
          name="Password"
          type="password"
          placeholder="//--|🠊 New Password 🠈|--//"
          // --- //
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="reset-footer">
        <menu className="reset-action">
          <button className="reset-button" type="submit" disabled={submit}>
            {submit ? 'Resetting...' : 'Reset'}
          </button>
        </menu>
      </div>
    </form>
  );
};
export default FormReset;

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
