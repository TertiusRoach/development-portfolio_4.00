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
    /*
    const carousel = document.querySelector("div[class*='carousel']") as HTMLElement;
    if (carousel) {
      carousel.scrollTop = (carousel.scrollHeight - carousel.clientHeight) / 2;
    }
    */
    /*
    let sectionElement = document.querySelector('section[class*="login-section"]') as HTMLElement;
    outputDisplay(sectionElement);
    */
  }, [pageName, blockName]);

  return (
    <main
      style={{ zIndex: 0 }}
      id={`${pageName}-${blockName}`}
      className={`default-${blockName}`}
    >
      <aside className={`${pageName}-carousel`} style={{ zIndex: 0 }}>
        <section className="workdays-section">
          <NavigationWeeks info={info} />
        </section>

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
      </aside>

      <aside className="leave-aside">
        <header className="fullname-header">
          <h1>Forename Surname</h1>
        </header>

        <section className="leave-section">
          <div className="completed-division">
            <time className="completed-time">
              <h1>--:--</h1>
            </time>
            <h1 className="completed">Completed</h1>
          </div>
          <div className="remaining-division">
            <time className="remaining-time">
              <h1>--:--</h1>
            </time>
            <h1 className="remaining">Remaining</h1>
          </div>
          <div className="overtime-division">
            <time className="overtime-time">
              <h1>--:--</h1>
            </time>
            <h1 className="overtime">Overtime</h1>
          </div>
          {/* <p className="remaining-paragraph">
            Remaining: <time>--:--</time>
          </p> */}
          {/* <p className="overtime-paragraph">
            Overtime: <time>--:--</time>
          </p> */}
        </section>

        <ButtonStretch
          type="button"
          text={'Leave'}
          // onClick={() => showWeek(pageName, '<y>', '-prev-')}
          style={defineButton('leave', { pageName, blockName })}
        />

        <time className="hourly-time">
          <h1 className="display-1">--:--</h1>
        </time>
        {/* <div className="foreground"></div> */}
        {/* <div className="midground"></div> */}
        <div className="background"></div>
      </aside>
    </main>
  );
};
export default OvertimeMain;

function defineButton(button: 'leave', info: { blockName: string; pageName: string }) {
  const { blockName, pageName } = info;
  //--|🠋 Always Return an Object 🠋|--//
  switch (button) {
    case 'leave':
      return {
        fontSize: '<h1>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-center-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        pageName: pageName as 'overtime',
        blockName: blockName as 'header' | 'footer' | 'leftbar',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/8a7cb8074548ad4c3610c581f3200097dcd52382/source/assets/svg-files/overtime-page/leave-request.svg',
      };
  }
}
