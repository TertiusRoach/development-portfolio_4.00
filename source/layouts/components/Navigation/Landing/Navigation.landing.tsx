//--|🠊 Navigation.landing.tsx 🠈|--//
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../scripts/landing';
//--|🠉 Functions 🠉|--//
//--|🠋 Styles 🠋|--//
import './Navigation.landing.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Functions 🠋|--//
import { showDemos, defineButton } from './Navigation_landing';
// import { viewBlock, viewText, axiosError, retrieveEndpoint, viewPass } from '../../../../pages/landing';
//--|🠉 Functions 🠉|--//
//--|🠋 Context 🠋|--//
import { useEmail } from '../../../../modules/context/EmailContext';
import { usePassword } from '../../../../modules/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
import ButtonDefault from '../../Button/archive/default/Button.default';
//--|🠉 Components 🠉|--//
interface InfoProps {
  form: 'register' | 'login' | 'password';
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}
const NavigationLanding: React.FC<InfoProps> = ({ info, form }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'landing';
  const blockName = stripBrackets(info.blockName, '<>') as 'main';

  const handleLanding = async () => {};

  useEffect(() => {}, [pageName, blockName]);

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
