//--|🠊 OvertimeMain.tsx 🠈|--//
//--|🠋 Dependencies 🠋|--//
import ReactDOM from 'react-dom/client';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Context 🠋|--//
import { EmailProvider } from '../../../../modules/context/EmailContext';
import { PasswordProvider } from '../../../../modules/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
import FormLogin from '../../../components/Form/login/Form.login';
import FormRegister from '../../../components/Form/register/Form.register';
import FormPassword from '../../../components/Form/password/Form.password';
import FigureRotation from '../../../components/Figure/rotation/Figure.rotation';
import NavigationLogin from '../../../components/Navigation/login/Navigation.login';
import NavigationPassword from '../../../components/Navigation/password/Navigation.password';
import NavigationRegister from '../../../components/Navigation/register/Navigation.register';
//--|🠉 Components 🠉|--//
//--|🠋 Functions 🠋|--//
import { viewBlock, viewText, outputDisplay } from '../../../pages/landing';
//--|🠉 Functions 🠉|--//

interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'landing' | 'overtime' | 'ticketing' | 'hyperlink';
  };
}
const OvertimeMain: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'main';
  const pageName = info.identification as 'overtime';

  useEffect(() => {
    /*
    let sectionElement = document.querySelector('section[class*="login-section"]') as HTMLElement;
    outputDisplay(sectionElement);
    */
  }, [pageName, blockName]);

  return <main id={`${pageName}-${blockName}`} style={{ zIndex: 0 }} className={`default-${blockName}`}></main>;
};
export default OvertimeMain;
