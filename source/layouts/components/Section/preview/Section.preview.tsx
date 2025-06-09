//--|🠊 Section.preview.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Section.preview.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Context 🠋|--//
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
//--|🠉 Components 🠉|--//
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../scripts/overtime';
import { defineButton, togglePreview, viewDemo } from './Section_preview';
//--|🠉 Functions 🠉|--//
//--|🠋 Components 🠋|--//
import ButtonDefault from '../../Button/archive/default/Button.default';
//--|🠉 Components 🠉|--//

interface InfoProps {
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}
const SectionPreview: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'overtime';
  const blockName = stripBrackets(info.blockName, '<>') as 'header';

  const stateName: 'highlight' | 'downplay' = 'downplay';

  const handlePreview = async () => {};

  useEffect(() => {}, [pageName, blockName]);

  let trackDay: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/933b2050d063d05d5c7ca0f4122f613511cc68c9/source/assets/svg-files/trinity-apps/rebrand/track-day/track-day-medium.svg';
  let logTicket: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/933b2050d063d05d5c7ca0f4122f613511cc68c9/source/assets/svg-files/trinity-apps/rebrand/log-ticket/log-ticket-medium.svg';
  let findLink: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/933b2050d063d05d5c7ca0f4122f613511cc68c9/source/assets/svg-files/trinity-apps/rebrand/find-link/find-link-medium.svg';

  return (
    <section className="preview-section">
      <div
        className="preview-overtime downplay"
        onClick={() => viewDemo(pageName, 'overtime')}
        onMouseLeave={() => togglePreview(pageName, 'downplay', 'overtime')}
      >
        <header className="track-day">
          <h3 className="display-3">Track a Day</h3>
        </header>

        <picture className="track-day" onMouseEnter={() => togglePreview(pageName, 'highlight', 'overtime')}>
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
            <ButtonDefault type="button" text={'View'} style={defineButton('track-day', { pageName, blockName })} />
          </nav>
        </footer>
      </div>
      <div
        className="preview-ticketing downplay"
        onClick={() => viewDemo(pageName, 'ticketing')}
        onMouseLeave={() => togglePreview(pageName, 'downplay', 'ticketing')}
      >
        <header className="log-ticket">
          <h3 className="display-3">Log a Ticket</h3>
        </header>

        <picture className="log-ticket" onMouseEnter={() => togglePreview(pageName, 'highlight', 'ticketing')}>
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
            <ButtonDefault type="button" text={'View'} style={defineButton('log-ticket', { pageName, blockName })} />
          </nav>
        </footer>
      </div>
      <div
        className="preview-hyperlink downplay"
        onClick={() => viewDemo(pageName, 'hyperlink')}
        onMouseLeave={() => togglePreview(pageName, 'downplay', 'hyperlink')}
      >
        <header className="find-link">
          <h3 className="display-3">Find a Link</h3>
        </header>

        <picture className="find-link" onMouseEnter={() => togglePreview(pageName, 'highlight', 'hyperlink')}>
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
            <ButtonDefault type="button" text={'View'} style={defineButton('find-link', { pageName, blockName })} />
          </nav>
        </footer>
      </div>
    </section>
  );
};
export default SectionPreview;
