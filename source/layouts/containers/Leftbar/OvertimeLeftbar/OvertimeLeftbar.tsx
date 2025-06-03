//--|🠊 OvertimeLeftbar.tsx 🠈|--//
//--|🠋 Frameworks 🠋|--//
import ReactDOM from 'react-dom/client';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
//--|🠉 Frameworks 🠉|--//
//--|🠋 Components 🠋|--//
import TimeDaily from '../../../components/Time/daily/Time.daily';
import MenuOvertime from '../../../components/Menu/overtime/Menu.overtime';
import SpanScrolling from '../../../components/Span/scrolling/Span.scrolling';
import DivisionIdentity from '../../../components/Division/identity/Division.identity';
import NavigationPreview from '../../../components/Navigation/preview/Navigation.preview';
import NavigationOvertime from '../../../components/Navigation/overtime/Navigation.overtime';
//--|🠉 Components 🠉|--//

interface InfoProps {
  info: {
    pageName: string;
    blockName:
      | string
      | '<overlay>'
      | '<leftbar>'
      | '<rightbar>'
      | '<header>'
      | '<footer>'
      | '<main>';
    stateName?: 'established' | 'freelancing';
  };
}
const OvertimeLeftbar: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'leftbar';
  const pageName = info.pageName;
  const stateName: 'expanded' | 'collapsed' = 'collapsed';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <aside
      style={{ zIndex: 4 }}
      id={`${pageName}-${blockName}`}
      className={`default-${blockName} collapsed`}
    >
      <header className="clocking-header">
        <TimeDaily info={info} />
        <NavigationOvertime info={info} />
        <SpanScrolling block="<header>" info={info} />
      </header>
      <section className="clocking-section">
        <div className="ante-meridiem"></div>
        <div className="post-meridiem"></div>
      </section>
      <footer className="clocking-footer">
        <SpanScrolling block="<footer>" info={info} />
      </footer>
    </aside>
  );
};
export default OvertimeLeftbar;
