// LandingMain.tsx
//--|🠋 Frameworks 🠋|--//
import ReactDOM from 'react-dom/client';
import axios, { AxiosError } from 'axios';
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
              alert('Account not verified. Expanding left sidebar for further steps.');

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
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
              document.querySelector('#landing-leftbar')?.classList.toggle('expanded', true); //--|🠈 Expand sidebar 🠈|--//
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

        //--|🠋 Input Validation: Ensure email is provided 🠋|--//
        if (!email.trim()) {
          alert('Please enter an email address to proceed.'); //--|🠈 Alert user if the input is empty 🠈|--//
          return;
        }

        //--|🠋 Email Validation: Check format 🠋|--//
        if (!emailRegex.test(email)) {
          alert('Please enter a valid email address.'); //--|🠈 Notify user of invalid email format 🠈|--//
          return;
        }

        setIsSubmitting(true); //--|🠈 Indicates submission is in progress 🠈|--//

        try {
          //--|🠋 Send email to back-end for validation 🠋|--//
          const response = await axios.post('http://localhost:3000/users/password', { email });

          //--|🠋 Handle response from server 🠋|--//
          if (response.status === 200) {
            const { exists } = response.data; //--|🠈 Check if email exists in database 🠈|--//

            if (exists) {
              alert('Email found! Please check your email for the verification code to reset your password.');

              //--|🠋 Expand #landing-rightbar 🠋|--//
              const rightbar = document.querySelector('#landing-rightbar') as HTMLElement;
              rightbar.classList.toggle('collapsed', false);
              rightbar.classList.toggle('expanded', true); //--|🠈 Toggle sidebar to "expanded" state 🠈|--//
            } else {
              alert('Email not found! Redirecting to registration section.');
              viewCarousel('register'); //--|🠈 Move carousel to registration section 🠈|--//
            }
          } else {
            alert('Unexpected response from the server. Please try again later.');
          }
        } catch (error) {
          //--|🠋 Handle errors during the process 🠋|--//
          alert('An error occurred while processing your request. Please try again later.');
          console.error('Error during password reset:', error); //--|🠈 Log error for debugging 🠈|--//
        } finally {
          setIsSubmitting(false); //--|🠈 Reset submission state 🠈|--//
        }

        console.log('//--|🠊 Password Reset Flow Triggered 🠈|--//');
        break;
    }
  };
  const renderForm = (type: 'register' | 'login' | 'password') => {
    switch (type) {
      case 'register':
        return (
          <form className="register-form" onSubmit={(event) => handleData(event, 'register')}>
            <div className="register-header">
              <div className="register-label">
                <h6 className="display-6">Register</h6>
              </div>
              <button className="register-demo" type="button">
                <img
                  src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d96e3df748dac85a20c559b47659c1a3763a5fe/source/assets/svg-files/index-page/close/close-light.svg"
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
          </form>
        );
      case 'login':
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
      case 'password':
        return (
          <form className="password-form" onSubmit={(event) => handleData(event, 'password')}>
            <div className="password-header">
              <div className="password-label">
                <h6 className="display-6">Password</h6>
              </div>
              <button className="password-demo" type="button">
                <img
                  src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d96e3df748dac85a20c559b47659c1a3763a5fe/source/assets/svg-files/index-page/close/close-light.svg"
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
          </form>
        );
    }
  };
  /*
  const loadResume = () => {
    let landingBody = document.querySelector(`#${pageName}-body`) as HTMLDivElement;
    let resumeBody = document.querySelector('#resume-body') as HTMLDivElement;
    landingBody.remove();
    return ReactDOM.createRoot(resumeBody).render(<Resume />);
  };
  */
  const viewCarousel = (slide: 'register' | 'login' | 'password') => {
    let carouselContainer = document.querySelector('.landing-carousel') as HTMLElement;
    carouselContainer.style.transform = {
      register: 'translateX(0vw)',
      login: 'translateX(-100vw)',
      password: 'translateX(-200vw)',
    }[slide];
  };

  useEffect(() => {
    console.log(currentView);
    switch (currentView) {
      case 'default':
        let resumeBody = document.querySelector('#resume-body') as HTMLDivElement;
        resumeBody.innerHTML = '<main class="default-main" />';
        // return ReactDOM.createRoot(resumeBody).render(<main className="default-main" />);
        break;
      case 'authorized':
        // loadResume();
        alert('//--|🠊 Login Successful: Load Page 🠈|--//');
        break;
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
