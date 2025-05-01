//--|🠊 Time.daily.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Time.daily.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, {
  useEffect,
  useState,
  createContext,
  useContext,
} from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Context 🠋|--//
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
//--|🠉 Components 🠉|--//
//--|🠋 Functions 🠋|--//
import { updateDate } from './Time_daily';
//--|🠉 Functions 🠉|--//
//--|🠋 Components 🠋|--//
import ButtonDefault from '../../Button/default/Button.default';
//--|🠉 Components 🠉|--//
interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | string;
    identification:
      | 'landing'
      | 'overtime'
      | 'ticketing'
      | 'hyperlink'
      | string;
  };
}
const TimeDaily: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'header';
  const pageName = info.identification;
  const stateName: 'highlight' | 'downplay' = 'downplay';

  const handleDaily = async () => {};

  useEffect(() => {
    updateDate();
  }, [pageName, blockName]);

  return (
    <time className="daily-time">
      <h1 className="">Saturday, 1st January 2000</h1>
    </time>
  );
};
export default TimeDaily;
