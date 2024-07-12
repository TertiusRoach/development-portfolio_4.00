// Section.contact.tsx
import React from 'react';
import './Section.contact.scss';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';

import DivisionWorking from '../../Division/working/Division.working';
interface ContactProps {
  info: {
    resolution: string;
    orientation: string;
    identification: string;
  };
  icons: {
    working: string;
    close: string;
    download: string;
    home: string;
    skills: string;
    contact: string;
    projects: string;
    career: string;
    viewOverlay: string;
    viewLeftbar: string;
    viewRightbar: string;
    signatureStacked: string;
    signatureAdjacent: string;
    gitHub: string;
    youTube: string;
    linkedIn: string;
  };
}
const SectionContact: React.FC<ContactProps> = ({ info, icons }) => {
  let width = info.resolution.split('x')[0];
  let height = info.resolution.split('x')[1];
  let working = icons.working as string;

  /*
  console.log(`Width: ${width}`);
  console.log(`Height: ${height}`);
  
  console.log(info.orientation);
  console.log(info.identification);
  */

  return (
    <section style={{ height: `${height}px`, width: `${width}px` }}>
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: landscape)' }) && (
        <>
          <DivisionWorking align="center" info={info} icon={working} />
        </>
      )}

      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: portrait)' }) && (
        <>
          <DivisionWorking align="center" info={info} icon={working} />
        </>
      )}
    </section>
  );
};
export default SectionContact;
