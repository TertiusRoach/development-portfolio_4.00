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

      <aside className={`${pageName}-leave`}>
        <ArticleLeave info={info} />
      </aside>
    </main>
  );
};
export default OvertimeMain;
