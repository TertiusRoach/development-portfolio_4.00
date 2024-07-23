// Section.contact.tsx
import React from 'react';
import './Section.contact.scss';

import { useMediaQuery } from 'react-responsive';
import getSVG from '../../../../utilities/getSVG';
import { useEffect, useRef, useState } from 'react';

import DivisionWorking from '../../Division/working/Division.working';
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
  setTimeout(runJquery, 1000);
  let width = info.resolution.split('x')[0];
  let height = info.resolution.split('x')[1];
  let working = getSVG('contact').dark as string;
  return (
    <section
      id={stateType === 'active' ? `${blockName}-active` : ''}
      className={`${blockName}-contact`}
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      <DivisionWorking align="center" text="Contact" info={info} icon={working} />

      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: landscape)' }) && (
        <>{/* <DivisionWorking align="center" info={info} icon={working} /> */}</>
      )}

      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: portrait)' }) && (
        <>{/* <DivisionWorking align="center" info={info} icon={working} /> */}</>
      )}
    </section>
  );
};
export default SectionContact;

function runJquery() {
  // console.log('Yay, jQuery!');
}
