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

  //--|🠋 Local Input States 🠋|--//
  let { email, setEmail } = useEmail();
  let { password, setPassword } = usePassword();

  //--|🠋 Button Action States 🠋|--//
  let [submit, setSubmit] = useState(false);
  let [attempts, setAttempts] = useState(0);

  const handleCountdown = async (event: any) => {
    console.log(event);
  };

  useEffect(() => {}, [pageName, blockName]);

  return (
    <ol className="list-countdown">
      <li className="days-large">
        <span>7</span>
        <span>Days</span>
      </li>
      <li className="hours-small">
        <span>23</span>
        <span>:</span>
      </li>
      <li className="minutes-small">
        <span>59</span>
        <span>:</span>
      </li>
      <li className="seconds-small">
        <span>59</span>
      </li>
    </ol>
  );
};
export default ListCountdown;
