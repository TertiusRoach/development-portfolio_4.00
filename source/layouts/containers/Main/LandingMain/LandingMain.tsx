// LandingMain.tsx
//--|🠋 Frameworks 🠋|--//
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
//--|🠉 Frameworks 🠉|--//
//--|🠋 Utilities 🠋|--//

//--|🠉 Utilities 🠉|--//
//--|🠋 Components 🠋|--//

//--|🠉 Components 🠉|--//
//--|🠋 Containers 🠋|--//
import VerifyMain from '../VerifyMain/VerifyMain';
//--|🠉 Containers 🠉|--//
function Desktop({ pageName, blockName }: { pageName: string; blockName: string }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [loginMessage, setLoginMessage] = useState('');
  const [registerMessage, setRegisterMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleDatabase = async (event: React.FormEvent, slide: 'register' | 'login' | 'password') => {
    event.preventDefault(); // Prevents refresh
    const eventForm = event.currentTarget as HTMLFormElement;
    switch (slide) {
      case 'login':
        let loginEmail = eventForm.childNodes[1].childNodes[0] as HTMLInputElement;
        let loginPassword = eventForm.childNodes[1].childNodes[1] as HTMLInputElement;
        if (loginEmail.value !== '' && loginPassword.value !== '') {
          setIsSubmitting(true);
          try {
            const response = await axios.post('http://localhost:3000/users/login', {
              email,
              passwordHash: password,
            });
            setLoggedIn(true);
            setLoginMessage(response.data); // Success message
            console.log('//--|🠊 Security Cleared: Load Application 🠈|--//');
          } catch (error) {
            setLoginMessage('Invalid credentials.'); // User feedback
            console.error('Error during login:', error);

            console.log('//--|🠊 Invalid Credentials: Block Login 🠈|--//');
          } finally {
            setIsSubmitting(false);
          }
        }
        break;
      case 'register':
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
        //--|🠊 Test Register 🠈|--//
        break;
      case 'password':
        //--|🠊 Test Password 🠈|--//
        break;
    }
  };

  if (loggedIn) {
    return (
      <>
        <VerifyMain />
      </>
    );
  }

  return (
    <div className="landing-carousel">
      <section className="register-section">
        <div className="register-container">
          <form className="register-form" onSubmit={(event) => handleDatabase(event, 'register')}>
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
        </div>
      </section>
      <section className="login-section">
        <div className="login-container">
          <form className="login-form" onSubmit={(event) => handleDatabase(event, 'login')}>
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
        </div>
      </section>
      <section className="password-section">
        <div className="password-container">
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
              <input placeholder="New Password" type="password" id="password" name="password" />
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
        </div>
      </section>
    </div>
  );
  console.log(`Refreshed: Desktop Orientation <main id="${pageName}-${blockName}">`);
}
function Mobile({ pageName, blockName }: { pageName: string; blockName: string }) {
  return (
    <div className="landing-carousel">
      <section className="register-section">
        <div className="register-container">
          <form className="register-form">
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
                <input placeholder="First Name" type="text" id="first-name" name="First Name" />
                <input placeholder="Last Name" type="text" id="last-name" name="Last Name" />
              </div>

              <input placeholder="Email" type="text" id="email" name="Email" />
              <input placeholder="Password" type="password" id="password" name="password" />
            </div>
            {/* ----- */}
            <div className="register-footer">
              <mark className="register-action">
                <button className="register-button">
                  <h6>Register</h6>
                </button>
                <div className="register-message">
                  <h6>Email already exists.</h6>
                </div>
              </mark>
              <menu className="register-buttons">
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
        </div>
      </section>
      <section className="login-section">
        <div className="login-container">
          <form className="login-form">
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
              <input placeholder="Email" type="text" id="email" name="Email" />
              <input placeholder="Password" type="password" id="password" name="password" />
            </div>
            {/* ----- */}
            <div className="login-footer">
              <mark className="login-action">
                <button className="login-button">
                  <h6>Login</h6>
                </button>
                <div className="login-message">
                  <h6>Password is incorrect.</h6>
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
        </div>
      </section>
      <section className="password-section">
        <div className="password-container">
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
              <input placeholder="New Password" type="password" id="password" name="password" />
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
        </div>
      </section>
    </div>
  );
  console.log(`Refreshed: Mobile Orientation <main id="${pageName}-${blockName}">`);
}

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

  useEffect(() => {
    console.log(`Initialized ${pageName}-${blockName}`);
  }, [pageName, blockName]);

  return (
    <main id={`${pageName}-${blockName}`} style={{ zIndex: 3 }} className={`default-${blockName}`}>
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: landscape)' }) && <Desktop pageName={pageName} blockName={blockName} />}

      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: portrait)' }) && <Mobile pageName={pageName} blockName={blockName} />}
    </main>
  );
};
export default LandingMain;

const viewCarousel = (slide: 'register' | 'login' | 'password') => {
  let carouselContainer = document.querySelector('.landing-carousel') as HTMLElement;
  switch (slide) {
    case 'register':
      return (carouselContainer.style.transform = 'translateX(0vw)');
    case 'login':
      return (carouselContainer.style.transform = 'translateX(-100vw)');
    case 'password':
      return (carouselContainer.style.transform = 'translateX(-200vw)');
  }
};
