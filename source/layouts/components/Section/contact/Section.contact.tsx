// Section.contact.tsx
// Call: <SectionContact blockName="main" labelName="contact" stateType="" info={info} />
import './Section.contact.scss';

import { useMediaQuery } from 'react-responsive';
import FormContact from '../../Form/contact/Form.contact';
import React, { useEffect, useRef, useState } from 'react';
import { getSVG } from '../../../../modules/utilities/bin/getFile';
import DivisionWorking from '../../Division/bin/working/Division.working';
import getIdentification from '../../../../modules/utilities/getIdentification';

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
  return (
    <section
      className={`${blockName}-${labelName}`}
      id={stateType === 'active' ? `${blockName}-active` : ''}
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      {(useMediaQuery({ query: '(orientation: landscape)' }) as boolean) && (
        <>
          <div id={`${labelName}-foreground`} style={{ zIndex: 2 }}>
            <FormContact labelName="contact" blockName="main" stateType="enabled" info={info} />
          </div>
          <div id={`${labelName}-midground`} style={{ zIndex: 1 }}></div>
          <div id={`${labelName}-background`} style={{ zIndex: 0 }}></div>
        </>
      )}

      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {(useMediaQuery({ query: '(orientation: portrait)' }) as boolean) && (
        <>
          <div id={`${labelName}-foreground`} style={{ zIndex: 2 }}>
            <FormContact labelName="contact" blockName="main" stateType="enabled" info={info} />
          </div>
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
  console.log('Contact section loaded');
  console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
