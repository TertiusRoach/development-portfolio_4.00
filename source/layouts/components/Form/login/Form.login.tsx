// Section.home.tsx
import $ from 'jquery';
import React from 'react';
import './Form.login.scss';
import axios, { AxiosError } from 'axios';

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
const FormLogin: React.FC<InfoProps> = ({ info }) => {
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

  const handleData = async (event: React.FormEvent, slide: 'register' | 'login' | 'password') => {
    event.preventDefault(); //--|🠈 Prevents refresh 🠈|--//
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //--|🠈 Regular expression to validate email format 🠈|--//

    switch (slide) {
      case 'login':
        setIsSubmitting(true); //--|🠈 Indicate submission in progress 🠈|--//
        try {
          const response = await axios.post('http://localhost:3000/users/login', {
            email, //--|🠈 Email entered by the user 🠈|--//
            passwordHash: password, //--|🠈 Password entered by the user 🠈|--//
          });

          const { status } = response.data; //--|🠈 Extract the status from server response 🠈|--//

          //--|🠊 Validate User Status 🠈|--//
          switch (status) {
            case 'pending':
              // alert('Account not verified. Expanding left sidebar for further steps.');
              console.log('//--|🠊 Account not verified. Expanding landingLeftbar (Verify Page) for further steps. 🠈|--//');

              setLoggedIn(false); //--|🠈 User is not fully authorized 🠈|--//
              setCurrentView('unverified'); //--|🠈 Show unverified page 🠈|--//

              document.querySelector('#landing-leftbar')?.classList.toggle('collapsed', false);
              document.querySelector('#landing-leftbar')?.classList.toggle('expanded', true); //--|🠈 Expand left sidebar 🠈|--//
              break;
            case 'enabled':
              alert('Login successful. Loading application...');

              setLoggedIn(true); //--|🠈 User is fully authorized 🠈|--//
              setCurrentView('authorized'); //--|🠈 Show the authorized page 🠈|--//

              // loadResume(); //--|🠈 Load the main application 🠈|--//
              break;
            default:
              alert('Unknown status returned from the server.');
          }
        } catch (error) {
          //--|🠊 Handle Login Errors 🠈|--//
          const axiosError = error as AxiosError;

          if (axiosError.response?.status === 404) {
            //--|🠊 User not found 🠈|--//
            alert('Email not found. Redirecting to registration page.');
            viewCarousel('register'); //--|🠈 Redirect to the registration page 🠈|--//
          } else if (axiosError.response?.status === 401) {
            //--|🠊 Invalid password 🠈|--//
            alert('Invalid password. Redirecting to password reset section.');
            viewCarousel('password'); //--|🠈 Redirect to password reset section 🠈|--//
          } else {
            alert('An error occurred during login. Please try again later.');
            console.error('Error during login:', error); //--|🠈 Log unexpected errors for debugging 🠈|--//
          }
        } finally {
          setIsSubmitting(false); //--|🠈 Reset submission state 🠈|--//
        }
        break;
      case 'register':
        //--|🠋 Input Validation: Ensure all fields are filled 🠋|--//
        if (!firstName.trim() || !lastName.trim() || !email.trim() || !password.trim()) {
          setRegisterMessage('All fields are required.');
          return;
        }

        //--|🠋 Email Validation: Check format 🠋|--//
        if (!emailRegex.test(email)) {
          setRegisterMessage('Please enter a valid email address.');
          return;
        }

        setIsSubmitting(true); //--|🠈 Disable button during submission 🠈|--//
        try {
          const response = await axios.post('http://localhost:3000/users/register', {
            firstName,
            lastName,
            email,
            passwordHash: password, // Password sent to back-end for hashing
          });

          const { message, status } = response.data; //--|🠈 Back-end response 🠈|--//
          alert(message);

          switch (status) {
            case 'pending': //--|🠈 Pending user 🠈|--//
            case 'created': //--|🠈 Created user 🠈|--//
              viewCarousel('login'); //--|🠈 Scroll to login 🠈|--//
              document.querySelector('#landing-leftbar')?.classList.toggle('collapsed', false);
              document.querySelector('#landing-leftbar')?.classList.toggle('expanded', true); //--|🠈 Expand Sidebar 🠈|--//
              break;
            case 'enabled': //--|🠈 Enabled user 🠈|--//
              viewCarousel('login'); //--|🠈 Scroll to login 🠈|--//
              break;
            case 'password': //--|🠈 Incorrect password 🠈|--//
              viewCarousel('password'); //--|🠈 Redirect to password reset 🠈|--//
              break;
            default:
              setRegisterMessage('Unexpected response from the server. Please try again.');
          }
        } catch (error) {
          //--|🠋 Handle Axios errors 🠋|--//
          if (axios.isAxiosError(error)) {
            setRegisterMessage(error.response?.data?.err || 'Registration failed.');
          } else {
            setRegisterMessage('An unexpected error occurred.');
          }
        } finally {
          setIsSubmitting(false); //--|🠈 Re-enable the button 🠈|--//
        }
        break;
      case 'password':
        event.preventDefault(); //--|🠈 Prevents page refresh 🠈|--//
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
        break;
    }
  };
  const viewCarousel = (slide: 'register' | 'login' | 'password') => {
    let carouselContainer = document.querySelector('.landing-carousel') as HTMLElement;
    carouselContainer.style.transform = {
      register: 'translateX(0vw)',
      login: 'translateX(-100vw)',
      password: 'translateX(-200vw)',
    }[slide];
  };

  return (
    <form className="login-form" onSubmit={(event) => handleData(event, 'login')}>
      <div className="login-header">
        <div className="login-label">
          <h6 className="display-6">Login</h6>
        </div>
        <button className="login-demo" type="button">
          <img
            src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d96e3df748dac85a20c559b47659c1a3763a5fe/source/assets/svg-files/index-page/close/close-light.svg"
            alt=""
          />
        </button>
        <div className="login-logo">
          <img
            src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d11394a960db3ea88c21e28aa8035c3f40bdad7c/source/assets/svg-files/archive-images/tertius-roach/signature-icon/primary-light.svg"
            alt="Login Logo"
          />
        </div>
      </div>
      <div className="login-inputs">
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
          name="Password"
          type="password"
          placeholder="//--|🠊 Your Password 🠈|--//"
          // --- //
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="login-footer">
        <mark className="login-action">
          <button className="login-button" disabled={isSubmitting}>
            <h6>Login</h6>
          </button>
          <div className={`login-message ${loginMessage.includes('Success') ? 'success' : 'error'}`}>
            <h6>{loginMessage}</h6>
          </div>
        </mark>
        <menu className="login-buttons">
          <button className="login-register" type="button" onClick={() => viewCarousel('register')}>
            <h6>Register Account</h6>
          </button>
          <button className="login-password" type="button" onClick={() => viewCarousel('password')}>
            <h6>Forgot Password</h6>
          </button>
        </menu>
      </div>
    </form>
  );
};
export default FormLogin;

/*
function getElements(orientation: '<desktop>' | '<mobile>') {
  switch (orientation) {
    case '<desktop>':
      return {
        button: [
          {
            href: '',
            text: 'Send',
            label: 'send',
            block: 'main',
            state: 'submit',
            align: 'left',
            style: 'downplay',
            icon: getSVG('home'),
          },
        ],
        criteria: {
          buildAxis: '<horizontal>',
          buildDesign: '<fade>',
          buildElement: '<buttons>',
        },
      } as {
        button: {
          text: string;
          href?: string;
          state: 'submit' | string;
          label: 'home' | string;
          style: 'highlight' | 'downplay';
          align: 'left' | 'center' | 'right' | string;
          icon: { dark: string; medium: string; light: string };
          block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
        }[];
        criteria: {
          buildAxis: '<vertical>' | '<horizontal>';
          buildDesign: '<fade>' | '<icon>' | '<text>';
          buildElement: '<buttons>' | '<anchors>' | '<ordered>' | '<unordered>';
        };
      };
    case '<mobile>':
      return {
        button: [
          {
            href: '',
            text: 'Send',
            label: 'send',
            block: 'main',
            state: 'submit',
            align: 'center',
            style: 'downplay',
            icon: getSVG('home'),
          },
        ],
        criteria: {
          buildDesign: '<fade>',
          buildAxis: '<horizontal>',
          buildElement: '<buttons>',
        },
      } as {
        button: {
          text?: string;
          href?: string;
          state?: 'submit';
          label?: 'home' | string;
          style?: 'highlight' | 'downplay';
          align?: 'left' | 'center' | 'right' | string;
          icon?: { dark: string; medium: string; light: string };
          block?: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
        }[];
        criteria: {
          buildAxis: '<vertical>' | '<horizontal>';
          buildDesign: '<fade>' | '<icon>' | '<text>';
          buildElement: '<buttons>' | '<anchors>' | '<ordered>' | '<unordered>';
        };
      };
  }
}
function jQueryContact(pageName: String, blockName: string) {
  const containerElement = `main#${pageName}-${blockName} section.${blockName}-home`;
  // console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
*/
