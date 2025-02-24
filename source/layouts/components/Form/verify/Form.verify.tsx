// Form.verify.tsx
import './Form.verify.scss';
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { viewCarousel, toggleText, toggleAside } from '../../../containers/Main/LandingMain/LandingMain';

interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | 'landing' | string;
  };
}
const FormVerify: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'main';
  const pageName = info.identification;

  //--|🠋 Local Input States 🠋|--//
  let [activate, setActivate] = useState('');

  //--|🠋 Other UI states 🠋|--//
  let [submit, setSubmit] = useState(false); //--|🠈 Prevents Multiple Submissions 🠈|--//

  const handleVerify = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmit(true);
    try {
      let registerEmail = document.querySelector('.register-inputs #email') as HTMLInputElement;
      let registerPassword = document.querySelector('.register-inputs #password') as HTMLInputElement;
      const route = 'verify';
      const response = await axios.post(`http://localhost:3000/users/${route}`, {
        email: registerEmail.value,
        passwordHash: registerPassword.value,
        activation: activate,
      });
      const { view, data } = response.data;

      let dialogue: string;
      switch (view) {
        case 'login':
          dialogue = 'Account authorization complete.';

          viewCarousel('login');
          toggleText('login', dialogue);
          break;
        case 'verify':
          let messages: string[] = [
            '',
            'You have three attempts left.',
            'You have two attempts left.',
            'You have one attempt left.',
          ];
          let attempts: number = data.activationAttempts;
          dialogue = messages[attempts] || '';

          toggleText('verify', dialogue);
          break;
        case 'blocked':
          dialogue = `Your account has been ${view} until ${data.restrictionExpiresAt}.`;

          viewCarousel('login');
          toggleText('login', dialogue);
          break;
      }
    } catch (error) {
      axiosError(error);
    } finally {
      setSubmit(false);
    }
  };

  useEffect(() => {
    let closeButton = document.querySelector('.verify-close');
    let handleClose = () => {
      toggleAside('#landing-leftbar', 'hide');
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
    <form className="verify-form" onSubmit={(event) => handleVerify(event)}>
      <div className="verify-header">
        <div className="verify-label">
          <h6 className="display-6">Verify</h6>
        </div>
        <button className="verify-close" type="button">
          <img
            src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d96e3df748dac85a20c559b47659c1a3763a5fe/source/assets/svg-files/index-page/close/close-light.svg"
            alt=""
          />
        </button>

        <div className="verify-text">
          <h4>Check your email for verification code.</h4>
        </div>
      </div>
      <div className="verify-inputs">
        <input
          required
          type="text"
          id="verify-code"
          name="Verification Code"
          placeholder="//--|🠊 Verification Code 🠈|--//"
          // --- //
          value={activate}
          onChange={(event) => setActivate(event.target.value)}
        />
      </div>
      <div className="verify-footer">
        <menu className="verify-action">
          <button className="verify-button" type="submit" disabled={submit}>
            {submit ? 'Verifying...' : 'Verify'}
          </button>
        </menu>
      </div>
    </form>
  );
};
export default FormVerify;

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
