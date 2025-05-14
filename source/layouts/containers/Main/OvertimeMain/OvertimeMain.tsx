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

  let completedIcon: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/4e95ff5602e321d168607a00f27ac19a53db5eb3/source/assets/svg-files/overtime-page/completed-leave.svg';
  let remainingIcon: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/4e95ff5602e321d168607a00f27ac19a53db5eb3/source/assets/svg-files/overtime-page/remaining-leave.svg';
  let overtimeIcon: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/4e95ff5602e321d168607a00f27ac19a53db5eb3/source/assets/svg-files/overtime-page/overtime-leave.svg';
  return (
    <main
      style={{ zIndex: 0 }}
      id={`${pageName}-${blockName}`}
      className={`default-${blockName}`}
    >
      <aside className="leave-aside">
        <header className="fullname-header">
          <h1>Forename</h1>
          <br />
          <h1>Surname</h1>
        </header>

        <section className="metrics-section">
          <div className="completed-row">
            <time className="h1">--:--</time>
            <h3 className="h3">Completed</h3>
            <span>
              <img
                alt="completed"
                style={{
                  maskImage: `url(${completedIcon})`,
                  WebkitMaskImage: `url(${completedIcon})`,
                }}
              ></img>
            </span>
          </div>
          <div className="remaining-row">
            <time className="h1">--:--</time>
            <h3 className="h3">Remaining</h3>
            <span>
              <img
                alt="remaining"
                style={{
                  maskImage: `url(${remainingIcon})`,
                  WebkitMaskImage: `url(${remainingIcon})`,
                }}
              />
            </span>
          </div>
          <div className="overtime-row">
            <time className="h1">--:--</time>
            <h3 className="h3">Overtime</h3>
            <span>
              <img
                alt="overtime"
                style={{
                  maskImage: `url(${overtimeIcon})`,
                  WebkitMaskImage: `url(${overtimeIcon})`,
                }}
              />
            </span>
          </div>
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
        <div className="background-division">
          <figure className="fullname"></figure>
          <figure className="metrics">
            <span></span>
            <span></span>
          </figure>
          <figure className="leave"></figure>
          <figure className="hourly"></figure>
        </div>
      </aside>

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
