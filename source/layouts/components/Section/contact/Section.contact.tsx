// Section.contact.tsx
import './Section.contact.scss';

import { useMediaQuery } from 'react-responsive';
import getSVG from '../../../../utilities/getSVG';
import React, { useEffect, useRef, useState } from 'react';
import DivisionWorking from '../../Division/working/Division.working';
import getIdentification from '../../../../utilities/getIdentification';

interface ContactProps {
  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
  labelName: 'contact';
  stateType: 'active' | '';
  blockName: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
}
const SectionContact: React.FC<ContactProps> = ({ info, labelName, blockName, stateType }) => {
  const loadTimer = 1000;
  const width = info.resolution.split('x')[0];
  const height = info.resolution.split('x')[1];
  const pageName: String = getIdentification();
  useEffect(() => {
    let handleResize = () => {
      setTimeout(() => jQueryContact(pageName, blockName), loadTimer);
    };

    window.addEventListener('resize', handleResize);
    setTimeout(() => jQueryContact(pageName, blockName), loadTimer);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let mobile: boolean = useMediaQuery({ query: '(orientation: portrait)' });
  let desktop: boolean = useMediaQuery({ query: '(orientation: landscape)' });

  let career = getSVG('career') as { dark: string; medium: string; light: string };
  let contact = getSVG('contact') as { dark: string; medium: string; light: string };
  let projects = getSVG('projects') as { dark: string; medium: string; light: string };
  return (
    <section
      className={`${blockName}-${labelName}`}
      id={stateType === 'active' ? `${blockName}-active` : ''}
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      {/* <DivisionWorking align="center" text="Home" info={info} icon={icons.home} /> */}
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {desktop && (
        <>
          <div id={`${labelName}-foreground`} style={{ zIndex: 2 }}></div>
          <div id={`${labelName}-midground`} style={{ zIndex: 1 }}></div>
          <div id={`${labelName}-background`} style={{ zIndex: 0 }}></div>
        </>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {mobile && (
        <>
          <div id={`${labelName}-foreground`} style={{ zIndex: 2 }}></div>
          <div id={`${labelName}-midground`} style={{ zIndex: 1 }}></div>
          <div id={`${labelName}-background`} style={{ zIndex: 0 }}></div>
        </>
      )}
    </section>
  );
};
export default SectionContact;

function jQueryContact(pageName: String, blockName: string) {
  const containerElement = `${pageName}-${blockName}`;
  console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
