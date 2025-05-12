//--|🠊 Navigation.weeks.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Navigation.weeks.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Functions 🠋|--//
import { defineButton, fillWeek } from './Navigation_weeks';
//--|🠉 Functions 🠉|--//
//--|🠋 Context 🠋|--//
import { useEmail } from '../../../../modules/context/EmailContext';
import { usePassword } from '../../../../modules/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
import ButtonStretch from '../../Button/stretch/Button.stretch';
import ButtonDefault from '../../Button/default/Button.default';
//--|🠉 Components 🠉|--//
interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | string;
    identification: 'landing' | 'overtime' | 'ticketing' | 'hyperlink';
  };
}
const NavigationWeeks: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'main';
  const pageName = info.identification as 'overtime';

  const [layout, setLayout] = useState<React.ReactNode>(null);

  const handleWeeks = (pageName: string, blockName: string) => {
    let now = new Date();
    let weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    let today = weekdays[(now.getDay() + 6) % 7]; // adjusts Sunday (0) → index 6 (sun)

    let weekLayout = (
      <ol className="view-week">
        {weekdays.map((day) => (
          <li key={day} className={`${day}-row`}>
            <h1 className="date">DD Month</h1>
            {day === today && (
              <div className="clock-time">
                <ButtonStretch
                  type="button"
                  text="Clock-in"
                  style={defineButton('clock-in', { pageName, blockName })}
                />
                <ButtonStretch
                  type="button"
                  text="Clock-out"
                  style={defineButton('clock-out', { pageName, blockName })}
                />
              </div>
            )}
          </li>
        ))}
      </ol>
    );

    setLayout(weekLayout);
  };

  useEffect(() => {
    handleWeeks(pageName, blockName);

    let navigation = setTimeout(() => fillWeek(pageName, blockName), 1500);
    return () => clearTimeout(navigation);
  }, [pageName, blockName]);

  return <nav className="weeks-navigation">{layout}</nav>;
};
export default NavigationWeeks;
