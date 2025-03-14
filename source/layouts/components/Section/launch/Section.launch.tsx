//--|🠊 Section.launch.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Section.launch.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Context 🠋|--//
import { useEmail } from '../../../../modules/context/EmailContext';
import { usePassword } from '../../../../modules/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
//--|🠉 Components 🠉|--//
//--|🠋 Functions 🠋|--//
import { animateGrid } from './Section_launch';
import { viewBlock, viewText, axiosError } from '../../../../landing';
//--|🠉 Functions 🠉|--//
interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | 'landing' | string;
  };
}
const SectionLaunch: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'header';
  const pageName = info.identification;

  //--|🠋 State Management 🠋|--//
  const [gridState, setGridState] = useState<'downplay' | 'highlight'>('downplay');

  const handleLaunch = async (event: any) => {
    console.log(event);
    /* window.location.href = '/dashboard'; */
    /*
    event.preventDefault();
    setSubmit(true);
    try {
      const route = 'login';
      const response = await axios.post(`http://localhost:3000/users/${route}`, {
        email,
        passwordHash: password,
      });
      const { view, data } = response.data;

      let dialogue: string;
      switch (view) {
        case 'launch':
          dialogue = 'Login successful, please select the application you want to use.';

          viewBlock('launch');
          // window.location.href = '/dashboard';

          setTimeout(() => {
            alert(dialogue);
          }, 250);
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

          setTimeout(() => {
            alert(dialogue);
          }, 250);
          break;
      }
    } catch (error) {
      axiosError(error);
    } finally {
      setSubmit(false);
    }
    */
  };

  useEffect(() => {}, [pageName, blockName]);
  let trackDay: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/6691771f5bc62c020bbd95c2ed67a4351f2d3546/source/assets/svg-files/trinity-apps/primary-light/track-a-day.svg';
  let logTicket: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/6691771f5bc62c020bbd95c2ed67a4351f2d3546/source/assets/svg-files/trinity-apps/primary-light/log-a-ticket.svg';
  let findLink: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/6691771f5bc62c020bbd95c2ed67a4351f2d3546/source/assets/svg-files/trinity-apps/primary-light/find-a-link.svg';

  return (
    <section className="launch-section" onSubmit={(event) => handleLaunch(event)}>
      <div id="landing-overtime" className="downplay" onMouseLeave={() => animateGrid('downplay', 'overtime', pageName)}>
        {/*--|🠋 Track a Day 🠋|--*/}
        <picture className="track-day" onMouseEnter={() => animateGrid('highlight', 'overtime', pageName)}>
          <img src={trackDay} alt="track-a-day" />
        </picture>
        <p className="track-day">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div id="landing-ticketing" className="downplay" onMouseLeave={() => animateGrid('downplay', 'ticketing', pageName)}>
        {/*--|🠋 Log a Ticket 🠋|--*/}
        <picture className="log-ticket" onMouseEnter={() => animateGrid('highlight', 'ticketing', pageName)}>
          <img src={logTicket} alt="log-a-ticket" />
        </picture>
        <p className="log-ticket">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div id="landing-hyperlink" className="downplay" onMouseLeave={() => animateGrid('downplay', 'hyperlink', pageName)}>
        {/*--|🠋 Find a Link 🠋|--*/}
        <picture className="find-link" onMouseEnter={() => animateGrid('highlight', 'hyperlink', pageName)}>
          <img src={findLink} alt="find-a-link" />
        </picture>
        <p className="find-link">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
};
export default SectionLaunch;

/*
//--|🠋 Local Input States 🠋|--//
let { email, setEmail } = useEmail();
let { password, setPassword } = usePassword();

//--|🠋 Button Action States 🠋|--//
let [submit, setSubmit] = useState(false);
let [attempts, setAttempts] = useState(0);
*/
