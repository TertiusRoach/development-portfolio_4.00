//--|🠊 TicketingFooter.tsx 🠈|--//
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
