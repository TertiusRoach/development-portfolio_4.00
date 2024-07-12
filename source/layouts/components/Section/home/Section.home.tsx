// Section.home.tsx
import React from 'react';
import './Section.home.scss';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';

import DivisionWorking from '../../Division/working/Division.working';

interface HomeProps {
  info: {
    resolution: string;
    orientation: string;
    identification: string;
  };
  icons: {
    home: string;
    close: string;
    career: string;
    skills: string;
    contact: string;
    working: string;
    projects: string;
    download: string;

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
const SectionHome: React.FC<HomeProps> = ({ info, icons }) => {
  let width = info.resolution.split('x')[0];
  let height = info.resolution.split('x')[1];
  let working = icons.working as string;
  console.log(icons);

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
          <DivisionWorking info={info} icon={working} />
        </>
      )}
    </section>
  );

  /*
  console.log(`Width: ${width}`);
  console.log(`Height: ${height}`);
  console.log(info.orientation);
  console.log(info.identification);
  */
};
export default SectionHome;
