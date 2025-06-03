//--|🠊 OvertimeHeader.tsx 🠈|--//
//--|🠋 Dependencies 🠋|--//
import ReactDOM from 'react-dom/client';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
import MenuOvertime from '../../../components/Menu/overtime/Menu.overtime';
import SectionPreview from '../../../components/Section/preview/Section.preview';
//--|🠉 Components 🠉|--//
//--|🠋 Functions 🠋|--//
//--|🠉 Functions 🠉|--//

interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'landing' | 'overtime' | 'ticketing' | 'hyperlink';
  };
}
const OvertimeHeader: React.FC<InfoProps> = ({ info }) => {
  const blockName: string = 'header';
  const stateName: 'expanded' | 'collapsed' = 'collapsed';
  const pageName: string = info.identification as 'overtime';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <header
      style={{ zIndex: 2 }}
      id={`${pageName}-${blockName}`}
      className={`default-${blockName} ${stateName}`}
    >
      <MenuOvertime info={{ pageName, blockName: '<header>' }} />

      <SectionPreview info={info} />
    </header>
  );
};
export default OvertimeHeader;
