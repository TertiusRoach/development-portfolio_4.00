//--|🠊 OvertimeMain.tsx 🠈|--//
//--|🠋 Dependencies 🠋|--//
import ReactDOM from 'react-dom/client';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Context 🠋|--//
import { EmailProvider } from '../../../../modules/context/EmailContext';
import { PasswordProvider } from '../../../../modules/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
import TableWeeks from '../../../components/Table/weeks/Table.weeks';
import ArticleLeave from '../../../components/Article/leave/Article.leave';
import ButtonStretch from '../../../components/Button/stretch/Button.stretch';
import NavigationWeeks from '../../../components/Navigation/weeks/Navigation.weeks';
//--|🠉 Components 🠉|--//
//--|🠋 Functions 🠋|--//
//--|🠉 Functions 🠉|--//
interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | string;
    identification: 'landing' | 'overtime' | 'ticketing' | 'hyperlink';
  };
}
const OvertimeMain: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'main';
  const pageName = info.identification as 'overtime';

  useEffect(() => {
    let selector = `#${pageName}-${blockName} .marketing-section`;
    let addSpace = document.querySelector(selector) as HTMLElement;

    if (!addSpace) return;

    let hidePromo = () => {
      addSpace.style.opacity = '0';

      setTimeout(() => {
        addSpace.style.display = 'none';
      }, 250);
    };

    addSpace.addEventListener('mouseenter', hidePromo);
    return () => {
      addSpace.removeEventListener('mouseenter', hidePromo);
    };
  }, [pageName, blockName]);

  return (
    <main
      style={{ zIndex: 0 }}
      id={`${pageName}-${blockName}`}
      className={`default-${blockName}`}
    >
      <aside className={`${pageName}-carousel`} style={{ zIndex: 0 }}>
        <section className="weekdays-section">
          <div
            className="weekdays-container"
            style={{
              transform: 'translateY(0px)',
            }}
          >
            <TableWeeks info={info} />
          </div>
        </section>

        <section className="workdays-section">
          <NavigationWeeks info={info} />
        </section>
      </aside>

      <aside className={`${pageName}-metrics`}>
        <section className="marketing-section">
          <div className="foreground-division">
            <div>
              <img
                src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d47129c7c70ff10e3a52d0b6bc1d2036de6e5880/source/assets/svg-files/trinity-apps/rebrand/track-day/track-day-dark.svg"
                alt="track-day"
              />
              <h1 className="display-3">Add Space</h1>
            </div>
          </div>
          <div className="background-division"></div>
        </section>

        <ArticleLeave info={info} />
      </aside>
    </main>
  );
};
export default OvertimeMain;
