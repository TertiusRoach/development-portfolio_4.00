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
      <ol className="week-list">
        {weekdays.map((day) => (
          <li key={day} className={`${day}-row`}>
            {toggleFont()}
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

const toggleFont = () => {
  let portrait = window.matchMedia('(orientation: portrait)').matches;
  let landscape = window.matchMedia('(orientation: landscape)').matches;

  if (landscape) {
    if (window.innerHeight < 360) {
      return <p className="date">DD Month</p>; //--|🠈 Landscape < 360px (Less than) 🠈|--//
    } else if (window.innerHeight < 480) {
      return <h6 className="date">DD Month</h6>; //--|🠈 Landscape < 480px (Less than) 🠈|--//
    } else if (window.innerHeight < 768) {
      return <h2 className="date">DD Month</h2>; //--|🠈 Landscape < 768px (Less than) 🠈|--//
    } else {
      return <h1 className="date">DD Month</h1>; //--|🠈 Landscape > 768px (Larger than) 🠈|--//
    }
  } else if (portrait) {
    if (window.innerWidth < 360) {
      return <p className="date">DD Month</p>; //--|🠈 Portrait < 360px (Less than) 🠈|--//
    } else if (window.innerWidth < 480) {
      return <h6 className="date">DD Month</h6>; //--|🠈 Portrait < 480px (Less than) 🠈|--//
    } else if (window.innerWidth < 768) {
      return <h2 className="date">DD Month</h2>; //--|🠈 Portrait < 768px (Less than) 🠈|--//
    } else {
      return <h1 className="date">DD Month</h1>; //--|🠈 Portrait > 768px (Larger than) 🠈|--//
    }
  }
};
