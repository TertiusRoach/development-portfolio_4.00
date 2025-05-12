//--|🠊 OvertimeFooter.tsx 🠈|--//
//--|🠋 Dependencies 🠋|--//
import ReactDOM from 'react-dom/client';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
import SpanScrolling from '../../../components/Span/scrolling/Span.scrolling';
// import ListScrolling from '../../../components/List/scrolling/List.scrolling';
//--|🠉 Components 🠉|--//

interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | string;
    identification: 'landing' | 'overtime' | 'ticketing' | 'hyperlink';
  };
}
const OvertimeFooter: React.FC<InfoProps> = ({ info }) => {
  const blockName: string = 'footer';
  const stateName: 'expanded' | 'collapsed' = 'collapsed';
  const pageName: string = info.identification as 'overtime';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <footer
      className={`default-${blockName} collapsed`}
      id={`${pageName}-${blockName}`}
      style={{ zIndex: 1 }}
    >
      <menu className={`${pageName}-menu`}>
        <SpanScrolling block={'<footer>'} info={info} />
      </menu>

      {/* <section className={`${pageName}-section`}></section> */}
    </footer>
  );
};
export default OvertimeFooter;
