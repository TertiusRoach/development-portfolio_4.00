//--|🠊 Navigation.preview.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Navigation.preview.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Functions 🠋|--//
import { toggleHeader, defineButton } from './Navigation_preview';
import {
  viewBlock,
  viewText,
  axiosError,
  retrieveEndpoint,
  viewPass,
} from '../../../pages/landing';
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
    pageName: string;
    blockName: string;
  };
}
const NavigationPreview: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'header';
  const pageName = info.pageName as 'overtime' | 'ticketing' | 'hyperlink';

  const handlePreview = async () => {};

  useEffect(() => {}, [pageName, blockName]);

  return (
    <nav className="preview-navigation">
      <ButtonDefault
        text={''}
        type="button"
        onClick={() => toggleHeader(pageName)}
        style={defineButton('preview', { pageName, blockName })}
      />
    </nav>
  );
};
export default NavigationPreview;
