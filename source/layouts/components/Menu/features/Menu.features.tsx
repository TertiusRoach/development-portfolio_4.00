//--|🠊 Menu.features.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Menu.features.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Functions 🠋|--//
// import { showDemos, defineButton } from './Form.login.ts';
import { viewBlock, viewText, axiosError, retrieveEndpoint } from '../../../pages/landing';
//--|🠉 Functions 🠉|--//
//--|🠋 Context 🠋|--//
import { useEmail } from '../../../../modules/context/EmailContext';
import { usePassword } from '../../../../modules/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
//--|🠉 Components 🠉|--//
interface InfoProps {
  style: {
    pageName: string;
    blockName: string;
  };
}
const MenuFeatures: React.FC<InfoProps> = ({ style }) => {
  const blockName = style.blockName as 'header';
  const pageName = style.pageName as 'overtime' | 'ticketing' | 'hyperlink';

  const handleFeatures = async () => {};

  useEffect(() => {}, [pageName, blockName]);

  return (
    <menu className={`features-menu ${pageName}`}>
      <li></li>
    </menu>
  );
};
export default MenuFeatures;
