// LandingFooter.tsx
//--|🠋 Dependencies 🠋|--//
import ReactDOM from 'react-dom/client';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
import SectionBlocked from '../../../components/Section/blocked/Section.blocked';
//--|🠉 Components 🠉|--//

interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | 'landing' | string;
  };
}
const LandingFooter: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'footer';
  const pageName = info.identification;

  useEffect(() => {}, [pageName, blockName]);

  return (
    <footer id={`${pageName}-${blockName}`} style={{ zIndex: 1 }} className={`default-${blockName} collapsed`}>
      {/* <menu>Menu HTML Element</menu> */}
      <SectionBlocked info={info} />
      {/* <section>Section HTML Element</section> */}
    </footer>
  );
};
export default LandingFooter;
