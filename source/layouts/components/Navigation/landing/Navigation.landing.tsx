//--|🠊 Navigation.landing.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Navigation.landing.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Functions 🠋|--//
import { showDemos, defineButton } from './Navigation_landing';
import { viewBlock, viewText, axiosError, retrieveEndpoint, viewPass } from '../../../pages/landing';
//--|🠉 Functions 🠉|--//
//--|🠋 Context 🠋|--//
import { useEmail } from '../../../../modules/context/EmailContext';
import { usePassword } from '../../../../modules/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
import ButtonDefault from '../../Button/default/Button.default';
//--|🠉 Components 🠉|--//
interface InfoProps {
  form: 'register' | 'login' | 'password';
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | string;
    identification: 'landing' | 'overtime' | 'ticketing' | 'hyperlink';
  };
}
const NavigationLanding: React.FC<InfoProps> = ({ info, form }) => {
  const blockName = 'main';
  const pageName = info.identification as 'landing';

  const handleLanding = async () => {};

  useEffect(() => {
    // showDemos(pageName);
  }, [pageName, blockName]);

  return (
    <nav className={`${form}-navigation`}>
      <ButtonDefault
        text={''}
        type="button"
        onClick={() => showDemos(pageName)}
        style={defineButton('demo', form, { pageName, blockName })}
      />
      <h6 className={`${form}-label display-6`}>{form.charAt(0).toUpperCase() + form.slice(1)}</h6>
    </nav>
  );
};
export default NavigationLanding;
