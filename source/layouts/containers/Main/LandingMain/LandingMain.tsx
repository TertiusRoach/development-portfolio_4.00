// LandingMain.tsx
//--|🠋 Frameworks 🠋|--//
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
//--|🠉 Frameworks 🠉|--//
//--|🠋 Utilities 🠋|--//
import getResolution from '../../../../modules/utilities/getResolution';
import getOrientation from '../../../../modules/utilities/getOrientation';
import getIdentification from '../../../../modules/utilities/getIdentification';
//--|🠉 Utilities 🠉|--//
//--|🠋 Components 🠋|--//
//--|🠉 Components 🠉|--//
//--|🠋 Containers 🠋|--//
import ResumeMain from '../ResumeMain/ResumeMain';
import ResumeHeader from '../../Header/ResumeHeader/ResumeHeader';
import ResumeFooter from '../../Footer/ResumeFooter/ResumeFooter';
import ResumeOverlay from '../../Overlay/ResumeOverlay/ResumeOverlay';
import ResumeLeftbar from '../../Leftbar/ResumeLeftbar/ResumeLeftbar';
import ResumeRightbar from '../../Rightbar/ResumeRightbar/ResumeRightbar';
//--|🠉 Containers 🠉|--//
//--|🠋 Root 🠋|--//
import Resume from '../../../../resume';
//--|🠉 Root 🠉|--//

interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | 'landing' | string;
  };
}
const LandingMain: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'main';
  const pageName = info.identification;

  const [currentView, setCurrentView] = useState<'default' | 'unverified' | 'authorized' | 'recovery'>('default');

  // Shared input states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Registration-specific input states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // Feedback messages for user interactions
  const [loginMessage, setLoginMessage] = useState('');
  const [registerMessage, setRegisterMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');

  // Other UI states
  const [isSubmitting, setIsSubmitting] = useState(false); // Prevents multiple submissions
  const [loggedIn, setLoggedIn] = useState(false); // Tracks login state

  const handleData = async (event: React.FormEvent, slide: 'register' | 'login' | 'password') => {
    event.preventDefault(); // Prevents refresh
    let eventForm = event.currentTarget as HTMLFormElement;
    switch (slide) {
      case 'login':
        setIsSubmitting(true);
        try {
          const response = await axios.post('http://localhost:3000/users/login', {
            email,
            passwordHash: password,
          });
          switch (response.data) {
            case 'pending':
              setLoggedIn(false);
              setCurrentView('unverified');
              break;
            case 'enabled':
              setLoggedIn(true);
              setCurrentView('authorized');
              break;
          }
        } catch (error) {
          setLoginMessage('Invalid Credentials'); // User feedback
          console.error('Error during login:', error);

          console.log('//--|🠊 Invalid Credentials: Block Login 🠈|--//');
        } finally {
          setIsSubmitting(false);
        }
        break;
      case 'register':
        console.log('//--|🠊 Test Register 🠈|--//');
        break;
      case 'password':
        console.log('//--|🠊 Test Password 🠈|--//');
        break;
    }
  };
  const renderForm = (type: 'register' | 'login' | 'password') => {
    switch (type) {
      case 'register':
        return (
          <form className="register-form" onSubmit={(event) => handleData(event, 'register')}>
            {/* ----- */}
            <div className="register-header">
              <div className="register-label">
                <h6 className="display-6">Register</h6>
              </div>
              <button className="register-demo">
                <img
                  src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d96e3df748dac85a20c559b47659c1a3763a5fe/source/assets/svg-files/index-page/close/close-dark.svg"
                  alt=""
                />
              </button>
              <div className="register-logo">
                <img
                  src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d11394a960db3ea88c21e28aa8035c3f40bdad7c/source/assets/svg-files/archive-images/tertius-roach/signature-icon/primary-light.svg"
                  alt="Login Logo"
                />
              </div>
            </div>
            {/* ----- */}
            <div className="register-inputs">
              <div className="fullname-inputs">
                <input
                  required
                  type="text"
                  id="first-name"
                  name="First Name"
                  placeholder="First Name"
                  pattern="[A-Z][a-zA-Z\s]+"
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
                  placeholder="Last Name"
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
                placeholder="Email"
                // --- //
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                required
                id="password"
                type="password"
                name="Password"
                placeholder="Password"
                // --- //
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            {/* ----- */}
            <div className="register-footer">
              <mark className="register-action">
                <button className="register-button" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Registering...' : 'Register'}
                </button>
                <div className="register-message">
                  <h6>{registerMessage}</h6>
                </div>
              </mark>
              <menu className="register-buttons">
                {/* Type 'void' is not assignable to type 'MouseEventHandler<HTMLButtonElement> | undefined'. */}
                <button className="register-login" type="button" onClick={() => viewCarousel('login')}>
                  <h6>Access Account</h6>
                </button>
                <button className="register-password" type="button" onClick={() => viewCarousel('password')}>
                  <h6>Renew Password</h6>
                </button>
              </menu>
            </div>
            {/* ----- */}
          </form>
        );
      case 'login':
        return (
          <form className="login-form" onSubmit={(event) => handleData(event, 'login')}>
            {/* ----- */}
            <div className="login-header">
              <div className="login-label">
                <h6 className="display-6">Login</h6>
              </div>
              <button className="login-demo">
                <img
                  src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d96e3df748dac85a20c559b47659c1a3763a5fe/source/assets/svg-files/index-page/close/close-dark.svg"
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
            {/* ----- */}
            <div className="login-inputs">
              <input
                required
                id="email"
                name="Email"
                type="email"
                placeholder="Email"
                // --- //
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                required
                id="password"
                name="Password"
                type="password"
                placeholder="Password"
                // --- //
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            {/* ----- */}
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
            {/* ----- */}
          </form>
        );
      case 'password':
        return (
          <form className="password-form">
            {/* ----- */}
            <div className="password-header">
              <div className="password-label">
                <h6 className="display-6">Password</h6>
              </div>
              <button className="password-demo">
                <img
                  src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d96e3df748dac85a20c559b47659c1a3763a5fe/source/assets/svg-files/index-page/close/close-dark.svg"
                  alt=""
                />
              </button>
              <div className="password-logo">
                <img
                  src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d11394a960db3ea88c21e28aa8035c3f40bdad7c/source/assets/svg-files/archive-images/tertius-roach/signature-icon/primary-light.svg"
                  alt="Login Logo"
                />
              </div>
            </div>
            {/* ----- */}
            <div className="password-inputs">
              <input placeholder="Email" type="text" id="email" name="Email" />
              {/* <input placeholder="New Password" type="password" id="password" name="password" /> */}
            </div>
            {/* ----- */}
            <div className="password-footer">
              <mark className="password-action">
                <button className="password-button">
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
            {/* ----- */}
          </form>
        );
    }
  };

  const loadPage = () => {
    let landingBody = document.querySelector(`#${pageName}-body`) as HTMLDivElement;
    let resumeBody = document.querySelector('#resume-body') as HTMLDivElement;
    landingBody.remove();
    return ReactDOM.createRoot(resumeBody).render(<Resume />);
  };

  let resumeBody = document.querySelector('#resume-body') as HTMLDivElement;

  useEffect(() => {
    console.log(currentView);
    switch (currentView) {
      case 'default':
        return ReactDOM.createRoot(resumeBody).render(<main className="default-main" />);
      case 'authorized':
        loadPage();
        break;
        alert('//--|🠊 Login Successful: Load Page 🠈|--//');
      case 'unverified':
        let test = document.querySelector('#landing-leftbar') as HTMLElement;
        if (test) {
          // Check if the element exists before accessing its properties
          if (test.classList.contains('collapsed')) {
            test.classList.remove('collapsed');
          }
          test.classList.add('expanded');
        }
        break;
        alert('//--|🠊 Registration Pending: Confirm Email 🠈|--//');
      case 'recovery':
        alert('//--|🠊 Password Request: Confirm Email 🠈|--//');
        break;
      default:
        // ReactDOM.createRoot(resumeBody).render(<div />);
        break;
    }
    // console.log(`//--|🠊 Initialized ${pageName}-${blockName} 🠈|--//`);
  }, [pageName, blockName, currentView]);
  const viewCarousel = (slide: 'register' | 'login' | 'password') => {
    let carouselContainer = document.querySelector('.landing-carousel') as HTMLElement;
    carouselContainer.style.transform = {
      register: 'translateX(0vw)',
      login: 'translateX(-100vw)',
      password: 'translateX(-200vw)',
    }[slide];
  };
  return (
    <main id={`${pageName}-${blockName}`} style={{ zIndex: 3 }} className={`default-${blockName}`}>
      <div className="landing-carousel">
        <section className="register-section">
          <div className="register-container">{renderForm('register')}</div>
        </section>
        <section className="login-section">
          <div className="login-container">{renderForm('login')}</div>
        </section>
        <section className="password-section">
          <div className="password-container">{renderForm('password')}</div>
        </section>
      </div>
    </main>
  );
};
export default LandingMain;

/*
        let registerFirstName = eventForm.childNodes[1].childNodes[0].childNodes[0] as HTMLInputElement;
        let registerLastName = eventForm.childNodes[1].childNodes[0].childNodes[1] as HTMLInputElement;
        let registerEmail = eventForm.childNodes[1].childNodes[1] as HTMLInputElement;
        let registerPassword = eventForm.childNodes[1].childNodes[2] as HTMLInputElement;

        // Basic input validation
        if (!firstName.trim() || !lastName.trim() || !email.trim() || !password.trim()) {
          setRegisterMessage('All fields are required.');
          return;
        }

        if (
          registerFirstName.value !== '' &&
          registerLastName.value !== '' &&
          registerEmail.value !== '' &&
          registerPassword.value !== ''
        ) {
          // Email format validation
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
            setRegisterMessage('Please enter a valid email address.');
            return;
          }

          setIsSubmitting(true); // Disable button during submission
          try {
            // Send POST request to the server
            const response = await axios.post('http://localhost:3000/users', {
              firstName,
              lastName,
              email,
              passwordHash: password,
            });

            console.log('//--|🠊 Registration Cleared: Load Activation 🠈|--//');
            // Display success message
            setRegisterMessage('User registered successfully! Please check your email.');
          } catch (error) {
            // Improved error handling
            if (axios.isAxiosError(error)) {
              console.error('Registration Error:', error.message);
              setRegisterMessage(error.response?.data?.err || 'Registration failed.');
            } else {
              console.error('Unexpected Error:', error);
              setRegisterMessage('An unexpected error occurred.');
            }
          } finally {
            setIsSubmitting(false); // Re-enable the button
          }
        }
        */
