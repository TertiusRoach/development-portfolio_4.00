//--|🠊 Navigation.login.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Navigation.login.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Functions 🠋|--//
import { showDemos, defineButton } from './Navigation_login';
import { viewBlock, viewText, axiosError, retrieveEndpoint, viewWord } from '../../../../pages/landing';
//--|🠉 Functions 🠉|--//
//--|🠋 Context 🠋|--//
import { useEmail } from '../../../../modules/context/EmailContext';
import { usePassword } from '../../../../modules/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
import ButtonDefault from '../../Button/default/Button.default';
//--|🠉 Components 🠉|--//
interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | string;
    identification: 'landing' | 'overtime' | 'ticketing' | 'hyperlink';
  };
}
const NavigationLogin: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'main';
  const pageName = info.identification as 'landing' | 'overtime' | 'ticketing' | 'hyperlink' | string;

  //--|🠋 Local Input States 🠋|--//
  // let { email, setEmail } = useEmail();
  // let { password, setPassword } = usePassword();

  //--|🠋 Action States 🠋|--//
  // let [submit, setSubmit] = useState(false);
  // let [attempts, setAttempts] = useState(0);

  const handleLogin = async () => {
    /*
    event.preventDefault();
    setSubmit(true);
    try {
      const endpoint = retrieveEndpoint('login', 'http://localhost:3000');
      const response = await axios.post(endpoint, {
        email,
        passwordHash: password,
      });
      const { view, data } = response.data;

      let dialogue: string;
      switch (view) {
        case 'launch':
          dialogue = 'Login successful, please select the application you want to use.';
          viewBlock('launch');

          // setTimeout(() => {
          //   alert(dialogue);
          // }, 250);
          break;
        case 'register':
          dialogue = 'No account found with this email. Would you like to register?';
          viewBlock('register');
          break;
        case 'password':
          let messages: string[] = [
            'You have three attempts left.',
            'You have two attempts left.',
            'You have one attempt left.',
          ];
          if (attempts < 3) {
            dialogue = messages[attempts];

            setAttempts(attempts + 1);
            viewText('login', dialogue);
          } else {
            dialogue = 'Would you like to change your password?';
            setAttempts(0);
            viewBlock('password');
            viewText('password', dialogue);

            setTimeout(() => {
              dialogue = 'Sign in to access your account.';
              viewText('login', dialogue);
            }, 250);
          }
          break;
        case 'verify':
          dialogue = 'Please verify your account before signing in.';

          viewBlock('verify');
          viewText('verify', dialogue);
          break;
        case 'blocked':
          dialogue = `Your account has been ${view} until ${data.restrictionExpiresAt}.`;

          viewBlock('blocked');
          viewText('blocked', dialogue);
          break;
        default:
          viewBlock('login');
          break;
      }
    } catch (error) {
      axiosError(error);
    } finally {
      // Simulate a delay for login (optional)
      // setTimeout(() => {
      //   setSubmit(false); // Reset button after process
      // }, 2500);
      setSubmit(false);
    }
    */
  };

  useEffect(() => {
    // showDemos(pageName);
  }, [pageName, blockName]);

  // let viewDemo: string =
  //   'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/091d2513027e60e4346e3c2e02160c50474a90ad/source/assets/svg-files/landing-page/laptop.svg';

  return (
    <nav className="login-navigation">
      <ButtonDefault
        text={''}
        type="button"
        onClick={() => showDemos(pageName)}
        style={defineButton('demo', { pageName, blockName })}
      />
      <h4 className="login-label display-4">Login</h4>
      {/* <img src={viewDemo} alt="view-demo" /> */}
    </nav>
  );
};
export default NavigationLogin;
