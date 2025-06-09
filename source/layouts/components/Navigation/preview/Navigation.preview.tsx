//--|🠊 Navigation.preview.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Navigation.preview.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Functions 🠋|--//
import { toggleHeader, defineButton } from './Navigation_preview';
//--|🠉 Functions 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
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
