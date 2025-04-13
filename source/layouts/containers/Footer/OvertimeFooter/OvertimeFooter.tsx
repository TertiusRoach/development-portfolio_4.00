//--|🠊 OvertimeFooter.tsx 🠈|--//
//--|🠋 Dependencies 🠋|--//
import ReactDOM from 'react-dom/client';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
import ListOvertime from '../../../components/List/overtime/List.overtime';

//--|🠉 Components 🠉|--//

interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'landing' | 'overtime' | 'ticketing' | 'hyperlink';
  };
}
const OvertimeFooter: React.FC<InfoProps> = ({ info }) => {
  const blockName: string = 'footer';
  const stateName: 'expanded' | 'collapsed' = 'collapsed';
  const pageName: string = info.identification as 'overtime';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <footer className={`default-${blockName} collapsed`} id={`${pageName}-${blockName}`} style={{ zIndex: 1 }}>
      <ListOvertime block={'<footer>'} info={info} />

      {/* <menu></menu> */}
      <section></section>

      <div className="foreground"></div>
      <div className="midground"></div>
      <div className="background"></div>
    </footer>
  );
};
export default OvertimeFooter;
