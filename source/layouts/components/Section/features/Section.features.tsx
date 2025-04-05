//--|🠊 Section.features.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Section.features.scss';
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
import { animateGrid, defineButton } from './Section_features';
import { viewBlock, viewText, axiosError } from '../../../../pages/landing';
//--|🠉 Functions 🠉|--//
//--|🠋 Components 🠋|--//
import ButtonDefault from '../../Button/default/Button.default';
//--|🠉 Components 🠉|--//
interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | 'landing' | string;
  };
}
const SectionFeatures: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'header';
  const pageName = info.identification;
  const stateName: 'highlight' | 'downplay' = 'downplay';

  //--|🠋 State Management 🠋|--//
  const [gridState, setGridState] = useState<'downplay' | 'highlight'>('downplay');

  const handleFeatures = async () => {};

  useEffect(() => {}, [pageName, blockName]);

  let trackDay: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/933b2050d063d05d5c7ca0f4122f613511cc68c9/source/assets/svg-files/trinity-apps/rebrand/track-day/track-day-medium.svg';
  let logTicket: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/933b2050d063d05d5c7ca0f4122f613511cc68c9/source/assets/svg-files/trinity-apps/rebrand/log-ticket/log-ticket-medium.svg';
  let findLink: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/933b2050d063d05d5c7ca0f4122f613511cc68c9/source/assets/svg-files/trinity-apps/rebrand/find-link/find-link-medium.svg';

  return (
    <section className="features-section">
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
export default SectionFeatures;
