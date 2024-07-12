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

const SectionHome: React.FC<HomeProps> = ({ info }) => {
  // Destructure info props for cleaner code
  const { resolution, orientation, identification } = info;

  // Parse resolution (consider robust parsing if format isn't guaranteed)
  let width = parseInt(resolution.split('x')[0], 10);
  let height = parseInt(resolution.split('x')[1], 10);

  return (
    <section style={{ height: `${height}px`, width: `${width}px` }}>
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: landscape)' }) && (
        <>{/* <DivisionWorking info={info} /> Pass info props to DivisionWorking */}</>
      )}

      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: portrait)' }) && <>{/* Replace this with your mobile view content */}</>}
    </section>
  );
};

export default SectionHome;
