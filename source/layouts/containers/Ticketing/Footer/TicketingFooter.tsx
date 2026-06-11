//--|🠊 TicketingFooter.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import FooterApplications from '../../../components/Footer/applications/Footer.applications';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../scripts/archive';

interface InfoProps {
  info: {
    pageName: '[ticketing]';
    blockName: '<footer>';
    labelName: '(default)' | string;
  };
}
const TicketingFooter: React.FC<InfoProps> = ({ info }) => {
  const blockName = stripBrackets(info.blockName, '<>') as 'footer';
  const pageName = stripBrackets(info.pageName, '[]') as 'ticketing';
  const labelName = stripBrackets(info.labelName, '()') as 'default';

  useEffect(() => {}, [pageName, blockName, labelName]);

  let stateName: 'expanded' | 'unfolded' | 'collapsed' | 'squaring' = 'unfolded';
  return (
    <footer id={`${pageName}-${blockName}`} className={`${labelName}-${blockName} ${stateName}`}>
      <section className={`${blockName}-foreground`}>
        <FooterApplications
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </footer>
  );
};
export default TicketingFooter;
/*
//--|🠋 Dependencies 🠋|--//
import ReactDOM from 'react-dom/client';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
//--|🠉 Components 🠉|--//

interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'landing' | 'overtime' | 'ticketing' | 'hyperlink';
  };
}
const TicketingFooter: React.FC<InfoProps> = ({ info }) => {
  const blockName: string = 'footer';
  const stateName: 'expanded' | 'collapsed' = 'collapsed';
  const pageName: string = info.identification as 'ticketing';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <footer className={`default-${blockName} collapsed`} id={`${pageName}-${blockName}`} style={{ zIndex: 1 }}>
      <menu></menu>
      <section></section>
    </footer>
  );
};
export default TicketingFooter;
*/
