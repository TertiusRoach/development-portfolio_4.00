//--|🠊 Time.daily.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Time.daily.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Context 🠋|--//
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
//--|🠉 Components 🠉|--//
//--|🠋 Functions 🠋|--//
import { updateDate } from './Time_daily';
//--|🠉 Functions 🠉|--//
//--|🠋 Components 🠋|--//
import ButtonDefault from '../../Button/archive/default/Button.default';
//--|🠉 Components 🠉|--//
interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
  };
}
const TimeDaily: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'header';
  const pageName = info.pageName;
  const stateName: 'highlight' | 'downplay' = 'downplay';

  const handleDaily = async () => {};

  useEffect(() => {
    setTimeout(() => updateDate(), 1500);
  }, [pageName, blockName]);

  return (
    <time className="daily-time">
      <h1>Weekday, 0th Month YYYY</h1>
    </time>
  );
};
export default TimeDaily;
