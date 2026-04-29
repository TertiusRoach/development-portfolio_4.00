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
import { viewBlock, viewText, axiosError, retrieveEndpoint } from '../../../../pages/landing';
//--|🠉 Functions 🠉|--//
//--|🠋 Context 🠋|--//
import { useEmail } from '../../../../../modules/context/EmailContext';
import { usePassword } from '../../../../../modules/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
//--|🠉 Components 🠉|--//
interface InfoProps {
  src: string;

  style: {
    pageName: string;
    blockName: string;
    brandView: 'left' | 'right' | 'center';
  };
}
const MenuBranding: React.FC<InfoProps> = ({ style, src }) => {
  const brandView = style.brandView;
  const blockName = style.blockName;
  const pageName = style.pageName as 'landing' | 'overtime' | 'ticketing' | 'hyperlink' | string;

  const handleBranding = async () => {};

  useEffect(() => {}, [pageName, blockName]);

  return (
    <menu className="branding-menu">
      <li className={`${brandView}`}>
        <img src={src} alt="branding-logo" />
      </li>
    </menu>
  );
};
export default MenuBranding;
