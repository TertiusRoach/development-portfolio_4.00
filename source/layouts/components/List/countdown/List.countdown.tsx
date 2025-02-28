// List.countdown.tsx
//--|🠋 Styles 🠋|--//
import './List.countdown.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Context 🠋|--//
import { useEmail } from '../../../../modules/scripts/context/EmailContext';
import { usePassword } from '../../../../modules/scripts/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
//--|🠉 Components 🠉|--//
//--|🠋 Functions 🠋|--//
import { viewBlock, viewText, axiosError } from '../../../../landing';
//--|🠉 Functions 🠉|--//
interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | 'landing' | string;
  };
}
const ListCountdown: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'footer';
  const pageName = info.identification;

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const handleCountdown = async (event: any) => {
    console.log(event);
  };

  useEffect(() => {
    const targetDate = new Date('2025-03-06T06:21:19Z'); // Fixed future date

    const updateCountdown = () => {
      const now = new Date();
      console.log('Current Time (ISO):', now.toISOString());
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [pageName, blockName]);

  return (
    <ol className="list-countdown">
      <li className="calendar-days">
        {/* <span>7</span> */}
        <span>{timeLeft.days}</span>
        <span>Days</span>
      </li>
      <li className="clock-hours">
        {/* <span>23</span> */}
        <span>{String(timeLeft.hours).padStart(2, '0')}</span>
        <span>:</span>
      </li>
      <li className="clock-minutes">
        {/* <span>59</span> */}
        <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span>:</span>
      </li>
      <li className="clock-seconds">
        {/* <span>59</span> */}
        <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
      </li>
    </ol>
  );
};
export default ListCountdown;
