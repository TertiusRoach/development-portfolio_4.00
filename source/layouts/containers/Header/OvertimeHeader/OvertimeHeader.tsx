//--|🠊 OvertimeHeader.tsx 🠈|--//
//--|🠋 Dependencies 🠋|--//
import ReactDOM from 'react-dom/client';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
import MenuFeatures from '../../../components/Menu/features/Menu.features';
import SectionPreview from '../../../components/Section/preview/Section.preview';
import DivisionIdentity from '../../../components/Division/branding/Division.identity';
import NavigationPreview from '../../../components/Navigation/preview/Navigation.preview';
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
    <header className={`default-${blockName} ${stateName}`} id={`${pageName}-${blockName}`} style={{ zIndex: 1 }}>
      <SectionPreview info={info} />
      <DivisionIdentity info={info} />
      <NavigationPreview info={info} />
      <MenuFeatures style={{ blockName: blockName, pageName: pageName }} />
    </header>
  );
};
export default OvertimeHeader;

/*
let trackDay =
'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/5df756edd69f2539d713037b60064efc6165c2af/source/assets/svg-files/trinity-apps/rebrand/track-day/track-day-dark.svg';
let logTicket =
'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/5df756edd69f2539d713037b60064efc6165c2af/source/assets/svg-files/trinity-apps/rebrand/log-ticket/log-ticket-dark.svg';
let findLink =
'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/5df756edd69f2539d713037b60064efc6165c2af/source/assets/svg-files/trinity-apps/rebrand/find-link/find-link-dark.svg';
*/
