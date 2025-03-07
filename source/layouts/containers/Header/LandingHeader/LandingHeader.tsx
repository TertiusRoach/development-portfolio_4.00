// LandingHeader.tsx
//--|🠋 Dependencies 🠋|--//
import ReactDOM from 'react-dom/client';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
import MenuBranding from '../../../components/Menu/branding/Menu.branding';
import SectionLaunch from '../../../components/Section/launch/Section.launch';
//--|🠉 Components 🠉|--//
interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'landing' | 'overtime' | 'ticketing' | 'hyperlink';
  };
}
const LandingHeader: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'header';
  const pageName = info.identification;

  useEffect(() => {}, [pageName, blockName]);

  return (
    <header id={`${pageName}-${blockName}`} style={{ zIndex: 1 }} className={`default-${blockName} collapsed`}>
      <MenuBranding
        src={
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/bad07f5fd906593a1c3faf5b0810941d4a9acaf5/source/assets/svg-files/archive-images/tertius-roach/signature-adjacent/primary-dark.svg'
        }
        info={info}
      />
      <SectionLaunch info={info} />
    </header>
  );
};
export default LandingHeader;
