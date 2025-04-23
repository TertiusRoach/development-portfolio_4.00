//--|🠊 LandingHeader.tsx 🠈|--//
//--|🠋 Dependencies 🠋|--//
/*
import ReactDOM from 'react-dom/client';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
*/
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
  const blockName: string = 'header';
  const stateName: 'expanded' | 'collapsed' = 'collapsed';
  const pageName: string = info.identification as 'landing';
  const imageLink: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/bad07f5fd906593a1c3faf5b0810941d4a9acaf5/source/assets/svg-files/archive-images/tertius-roach/signature-adjacent/primary-dark.svg';

  useEffect(() => {}, [pageName, blockName]);

  function getOrientation() {
    if (window.matchMedia('(orientation: landscape)').matches) {
      return 'landscape';
    } else {
      return 'portrait';
    }
  }

  const desktop = window.matchMedia('(orientation: landscape)').matches;
  // console.log(orientation);
  return (
    <header className={`default-${blockName} ${stateName}`} id={`${pageName}-${blockName}`} style={{ zIndex: 1 }}>
      <MenuBranding
        src={imageLink}
        style={{ brandView: desktop ? 'left' : 'center', blockName: blockName, pageName: pageName }}
      />
      <SectionLaunch info={info} />
    </header>
  );
};
export default LandingHeader;
