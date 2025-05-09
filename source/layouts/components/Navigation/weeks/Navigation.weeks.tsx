//--|🠊 Navigation.weeks.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Navigation.weeks.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Functions 🠋|--//
//--|🠉 Functions 🠉|--//
//--|🠋 Context 🠋|--//
import { useEmail } from '../../../../modules/context/EmailContext';
import { usePassword } from '../../../../modules/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
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

  const handleWeeks = async () => {};

  useEffect(() => {}, [pageName, blockName]);

  return (
    <nav className="weeks-navigation">
      <ol className="fri-pm">
        <li className="mon-row">
          <h1>Monday, 0th Month</h1>
        </li>
        <li className="tue-row">
          <h1>Tuesday, 0th Month</h1>
        </li>
        <li className="wed-row">
          <h1>Wednesday, 0th Month</h1>
        </li>
        <li className="thu-row">
          <h1>Thursday, 0th Month</h1>
        </li>
        <li className="fri-row">
          <h1>Friday, 0th Month</h1>
        </li>
        <li className="sat-row">
          <h1>Saturday, 0th Month</h1>
        </li>
        <li className="sun-row">
          <h1>Sunday, 0th Month</h1>
        </li>
      </ol>
    </nav>
  );
};
export default NavigationWeeks;
