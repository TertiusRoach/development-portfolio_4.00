//--|🠊 Section.launch.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Section.launch.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Context 🠋|--//
import { useEmail } from '../../../../../modules/context/EmailContext';
import { usePassword } from '../../../../../modules/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
//--|🠉 Components 🠉|--//
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../../scripts/landing';
import { animateGrid, defineButton } from './Section_launch';
import { viewBlock, viewText, axiosError } from '../../../../scripts/landing';
//--|🠉 Functions 🠉|--//
//--|🠋 Components 🠋|--//
import ButtonDefault from '../../../Button/ARCHIVE/default/Button.default';
//--|🠉 Components 🠉|--//
interface InfoProps {
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}

const SectionLaunch: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'landing';
  const blockName = stripBrackets(info.blockName, '<>') as 'header';

  const stateName: 'highlight' | 'downplay' = 'downplay';

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
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/933b2050d063d05d5c7ca0f4122f613511cc68c9/source/assets/svg-files/trinity-apps/rebrand/track-day/track-day-medium.svg';
  let logTicket: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/933b2050d063d05d5c7ca0f4122f613511cc68c9/source/assets/svg-files/trinity-apps/rebrand/log-ticket/log-ticket-medium.svg';
  let findLink: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/933b2050d063d05d5c7ca0f4122f613511cc68c9/source/assets/svg-files/trinity-apps/rebrand/find-link/find-link-medium.svg';

  return (
    <section className="launch-section" onSubmit={(event) => handleLaunch(event)}>
      <div id="landing-overtime" className="downplay" onMouseLeave={() => animateGrid('downplay', 'overtime', pageName)}>
        <header className="track-day">
          <h3 className="display-3">Track a Day</h3>
        </header>

        <picture className="track-day" onMouseEnter={() => animateGrid('highlight', 'overtime', pageName)}>
          <img src={trackDay} alt="track-a-day" />
        </picture>

        <footer className="track-day">
          <p className="h5">
            Built for one purpose only—tracking overtime faster than you can complain about it. No fluff, no friction, just
            pure efficiency. Log your hours, review them, and move on. A system so simple that even the most chaotic workdays
            stay accountable.
            <br />
            <br />
            Frustrated with spreadsheets? Done with guesswork? Just track your time, and let the numbers speak for
            themselves.
          </p>

          <nav>
            <ButtonDefault
              type="button"
              text={'Open'}
              // onClick={() => viewBlock('register')}
              style={defineButton('track-day', { pageName, blockName })}
            />
          </nav>
        </footer>
      </div>
      <div id="landing-ticketing" className="downplay" onMouseLeave={() => animateGrid('downplay', 'ticketing', pageName)}>
        <header className="log-ticket">
          <h3 className="display-3">Log a Ticket</h3>
        </header>

        <picture className="log-ticket" onMouseEnter={() => animateGrid('highlight', 'ticketing', pageName)}>
          <img src={logTicket} alt="log-a-ticket" />
        </picture>

        <footer className="log-ticket">
          <p className="h5">
            A ticketing system so intuitive that IT won’t have to explain it (again). No convoluted forms, no endless
            dropdowns—just a seamless path from problem to resolution. Submit, track, and resolve with zero friction. Whether
            it’s a critical issue or a quick request, the process is effortless.
            <br />
            <br />
            No one likes filling out tickets, but this makes it so easy, you won’t even think about it.
          </p>

          <nav>
            <ButtonDefault
              type="button"
              text={'Open'}
              // onClick={() => viewBlock('register')}
              style={defineButton('log-ticket', { pageName, blockName })}
            />
          </nav>
        </footer>
      </div>
      <div id="landing-hyperlink" className="downplay" onMouseLeave={() => animateGrid('downplay', 'hyperlink', pageName)}>
        <header className="find-link">
          <h3 className="display-3">Find a Link</h3>
        </header>

        <picture className="find-link" onMouseEnter={() => animateGrid('highlight', 'hyperlink', pageName)}>
          <img src={findLink} alt="find-a-link" />
        </picture>

        <footer className="find-link">
          <p className="h5">
            A hyper-organized, lightning-fast hub for every link your company needs. Paperwork, streamlined. No more
            searching, no more outdated bookmarks—just instant access to the right document when you need it. Whether it’s
            policies, reports, or approvals, everything is exactly where it should be.
            <br />
            <br />
            Instantly access knowledge bases for all your company's applications through streamlined links.
          </p>

          <nav>
            <ButtonDefault
              type="button"
              text={'Open'}
              // onClick={() => viewBlock('register')}
              style={defineButton('find-link', { pageName, blockName })}
            />
          </nav>
        </footer>
      </div>
    </section>
  );
};
export default SectionLaunch;
