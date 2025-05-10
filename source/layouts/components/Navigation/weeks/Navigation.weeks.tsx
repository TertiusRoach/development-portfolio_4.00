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

  const handleWeeks = () => {};

  useEffect(() => {
    const now = new Date();
    const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    const today = weekdays[(now.getDay() + 6) % 7]; // adjusts Sunday (0) → index 6 (sun)

    const weekLayout = (
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

    const timeout = setTimeout(() => fillWeek(pageName, blockName), 1500);
    return () => clearTimeout(timeout);
  }, [pageName, blockName]);

  return <nav className="weeks-navigation">{layout}</nav>;
};
export default NavigationWeeks;

/*
    let now = new Date() as Date;
    let week = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'] as Array<String>; // Fix order — JS `getDay()` starts on Sunday
    let today = week[now.getDay()] as string;

    switch (today) {
      case 'mon':
        return setLayout(
          <ol className="view-week">
            <li className="mon-row">
              <h1 className="date">DD Month</h1>
              <div className="clock-time">
                <ButtonStretch
                  type="button"
                  text={'Clock-in'}
                  style={defineButton('clock-in', { pageName, blockName })}
                />
                <ButtonStretch
                  type="button"
                  text={'Clock-out'}
                  style={defineButton('clock-out', { pageName, blockName })}
                />
              </div>
            </li>
            <li className="tue-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="wed-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="thu-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="fri-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="sat-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="sun-row">
              <h1 className="date">DD Month</h1>
            </li>
          </ol>
        );
      case 'tue':
        return setLayout(
          <ol className="view-week">
            <li className="mon-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="tue-row">
              <h1 className="date">DD Month</h1>
              <div className="clock-time">
                <ButtonStretch
                  type="button"
                  text={'Clock-in'}
                  style={defineButton('clock-in', { pageName, blockName })}
                />
                <ButtonStretch
                  type="button"
                  text={'Clock-out'}
                  style={defineButton('clock-out', { pageName, blockName })}
                />
              </div>
            </li>
            <li className="wed-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="thu-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="fri-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="sat-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="sun-row">
              <h1 className="date">DD Month</h1>
            </li>
          </ol>
        );
      case 'wed':
        return setLayout(
          <ol className="view-week">
            <li className="mon-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="tue-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="wed-row">
              <h1 className="date">DD Month</h1>
              <div className="clock-time">
                <ButtonStretch
                  type="button"
                  text={'Clock-in'}
                  style={defineButton('clock-in', { pageName, blockName })}
                />
                <ButtonStretch
                  type="button"
                  text={'Clock-out'}
                  style={defineButton('clock-out', { pageName, blockName })}
                />
              </div>
            </li>
            <li className="thu-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="fri-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="sat-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="sun-row">
              <h1 className="date">DD Month</h1>
            </li>
          </ol>
        );
      case 'thu':
        return setLayout(
          <ol className="view-week">
            <li className="mon-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="tue-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="wed-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="thu-row">
              <h1 className="date">DD Month</h1>
              <div className="clock-time">
                <ButtonStretch
                  type="button"
                  text={'Clock-in'}
                  style={defineButton('clock-in', { pageName, blockName })}
                />
                <ButtonStretch
                  type="button"
                  text={'Clock-out'}
                  style={defineButton('clock-out', { pageName, blockName })}
                />
              </div>
            </li>
            <li className="fri-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="sat-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="sun-row">
              <h1 className="date">DD Month</h1>
            </li>
          </ol>
        );
      case 'fri':
        return setLayout(
          <ol className="view-week">
            <li className="mon-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="tue-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="wed-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="thu-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="fri-row">
              <h1 className="date">DD Month</h1>
              <div className="clock-time">
                <ButtonStretch
                  type="button"
                  text={'Clock-in'}
                  style={defineButton('clock-in', { pageName, blockName })}
                />
                <ButtonStretch
                  type="button"
                  text={'Clock-out'}
                  style={defineButton('clock-out', { pageName, blockName })}
                />
              </div>
            </li>
            <li className="sat-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="sun-row">
              <h1 className="date">DD Month</h1>
            </li>
          </ol>
        );
      case 'sat':
        return setLayout(
          <ol className="view-week">
            <li className="mon-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="tue-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="wed-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="thu-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="fri-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="sat-row">
              <h1 className="date">DD Month</h1>
              <div className="clock-time">
                <ButtonStretch
                  type="button"
                  text={'Clock-in'}
                  style={defineButton('clock-in', { pageName, blockName })}
                />
                <ButtonStretch
                  type="button"
                  text={'Clock-out'}
                  style={defineButton('clock-out', { pageName, blockName })}
                />
              </div>
            </li>
            <li className="sun-row">
              <h1 className="date">DD Month</h1>
            </li>
          </ol>
        );
      case 'sun':
        return setLayout(
          <ol className="view-week">
            <li className="mon-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="tue-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="wed-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="thu-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="fri-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="sat-row">
              <h1 className="date">DD Month</h1>
            </li>
            <li className="sun-row">
              <h1 className="date">DD Month</h1>
              <div className="clock-time">
                <ButtonStretch
                  type="button"
                  text={'Clock-in'}
                  style={defineButton('clock-in', { pageName, blockName })}
                />
                <ButtonStretch
                  type="button"
                  text={'Clock-out'}
                  style={defineButton('clock-out', { pageName, blockName })}
                />
              </div>
            </li>
          </ol>
        );
    }
    */
