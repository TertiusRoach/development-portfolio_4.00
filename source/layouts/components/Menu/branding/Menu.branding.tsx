//--|🠊 Form.login.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Menu.branding.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Functions 🠋|--//
// import { showDemos, defineButton } from './Form.login.ts';
import { viewBlock, viewText, axiosError, retrieveEndpoint } from '../../../../landing';
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
const MenuBranding: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'header';
  const pageName = info.identification as 'landing' | 'overtime' | 'ticketing' | 'hyperlink' | string;

  //--|🠋 Local Input States 🠋|--//
  let { email, setEmail } = useEmail();
  let { password, setPassword } = usePassword();

  //--|🠋 Action States 🠋|--//
  let [submit, setSubmit] = useState(false);
  let [attempts, setAttempts] = useState(0);

  const handleBranding = async () => {};

  useEffect(() => {}, [pageName, blockName]);

  return (
    <menu className="branding-menu">
      <li>
        <img
          src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/bad07f5fd906593a1c3faf5b0810941d4a9acaf5/source/assets/svg-files/archive-images/tertius-roach/signature-adjacent/primary-dark.svg"
          alt="branding-logo"
        />
      </li>
    </menu>
  );
};
export default MenuBranding;
