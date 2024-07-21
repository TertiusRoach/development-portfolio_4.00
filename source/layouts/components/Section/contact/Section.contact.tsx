// Section.contact.tsx
import React from 'react';
import './Section.contact.scss';
import { getSVG } from '../../../../scripts';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';

import DivisionWorking from '../../Division/working/Division.working';
interface ContactProps {
  state?: 'active';
  info: {
    resolution: string;
    orientation: string;
    identification: string;
  };
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar';
}
const SectionContact: React.FC<ContactProps> = ({ info, block, state }) => {
  setTimeout(runJquery, 1000);
  let width = info.resolution.split('x')[0];
  let height = info.resolution.split('x')[1];
  let working = getSVG('contact').dark as string;
  return (
    <section
      id={state === 'active' ? `${block}-active` : ''}
      className={`${block}-contact`}
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
