//--|🠊 Navigation.password.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Navigation.password.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Functions 🠋|--//
import { showDemos, defineButton } from './Navigation_password';
import { viewBlock, viewText, axiosError, retrieveEndpoint, viewWord } from '../../../../pages/landing';
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
const NavigationPassword: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'main';
  const pageName = info.identification as 'landing' | 'overtime' | 'ticketing' | 'hyperlink' | string;

  //--|🠋 Local Input States 🠋|--//
  // let { email, setEmail } = useEmail();
  // let { password, setPassword } = usePassword();

  //--|🠋 Action States 🠋|--//
  // let [submit, setSubmit] = useState(false);
  // let [attempts, setAttempts] = useState(0);

  const handlePassword = async () => {};

  useEffect(() => {}, [pageName, blockName]);

  return (
    <nav className="password-navigation">
      <ButtonDefault
        text={''}
        type="button"
        onClick={() => showDemos(pageName)}
        style={defineButton('demo', { pageName, blockName })}
      />
      <h4 className="password-label display-4">Password</h4>
    </nav>
  );
};
export default NavigationPassword;
