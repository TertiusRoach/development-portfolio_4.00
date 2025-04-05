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
import ButtonDefault from '../../../components/Button/default/Button.default';
import SectionPreview from '../../../components/Section/preview/Section.preview';
// import SectionFeatures from '../../../components/Section/features/Section.features';
//--|🠉 Components 🠉|--//

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

  let trackDay =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/5df756edd69f2539d713037b60064efc6165c2af/source/assets/svg-files/trinity-apps/rebrand/track-day/track-day-dark.svg';
  let logTicket =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/5df756edd69f2539d713037b60064efc6165c2af/source/assets/svg-files/trinity-apps/rebrand/log-ticket/log-ticket-dark.svg';
  let findLink =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/5df756edd69f2539d713037b60064efc6165c2af/source/assets/svg-files/trinity-apps/rebrand/find-link/find-link-dark.svg';
  return (
    <header className={`default-${blockName} ${stateName}`} id={`${pageName}-${blockName}`} style={{ zIndex: 1 }}>
      <div className="profile-division">
        <img src={trackDay} alt="track-day" />
      </div>
      <ButtonDefault
        text={''}
        type="button"
        onClick={() => expandHeader('overtime')}
        style={defineButton('preview', { pageName, blockName })}
      />
      <MenuFeatures style={{ blockName: blockName, pageName: pageName }} />
      <SectionPreview info={info} />
    </header>
  );
};
export default OvertimeHeader;

export function defineButton(button: 'preview', info: { blockName: string; pageName: string }) {
  const { blockName, pageName } = info;
  //--|🠋 Always Return an Object 🠋|--//
  switch (button) {
    case 'preview':
      return {
        fontSize: '<h4>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'icon' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'light' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'header',
        pageName: 'overtime' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/94b9b154ef383796b740c0fda2c413bf04b018c1/source/assets/svg-files/overtime-page/cog.svg',
      };
  }
}

export function expandHeader(pageName: string) {
  const element = document.querySelector(`#${pageName}-header`) as HTMLElement;
  if (element.classList.contains('collapsed')) {
    element.classList.remove('collapsed'); //--|🠈 Remove '.collapsed' 🠈|--//
    element.classList.toggle('expanded'); //--|🠈 Toggle '.expanded' 🠈|--//
  } else if (element.classList.contains('expanded')) {
    element.classList.toggle('collapsed'); //--|🠈 Toggle '.collapsed' 🠈|--//
    element.classList.remove('expanded'); //--|🠈 Remove '.expanded' 🠈|--//
    // setTimeout(() => {}, 5000);
  }
}
