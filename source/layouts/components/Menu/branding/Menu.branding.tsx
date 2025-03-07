//--|🠊 Menu.branding.tsx 🠈|--//
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

//--|🠉 Components 🠉|--//
interface InfoProps {
  src: string;
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | string;
    identification: 'landing' | 'overtime' | 'ticketing' | 'hyperlink';
  };
}
const MenuBranding: React.FC<InfoProps> = ({ info, src }) => {
  const blockName = 'header';
  const pageName = info.identification as 'landing' | 'overtime' | 'ticketing' | 'hyperlink' | string;

  const handleBranding = async () => {};

  useEffect(() => {}, [pageName, blockName]);

  return (
    <menu className="branding-menu">
      <li>
        <img src={src} alt="branding-logo" />
      </li>
    </menu>
  );
};
export default MenuBranding;
