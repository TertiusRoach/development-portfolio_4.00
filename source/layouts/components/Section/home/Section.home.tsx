// Section.home.tsx
import React from 'react';
import './Section.home.scss';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';

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
const SectionHome: React.FC<HomeProps> = ({ info, icons }) => {
  //   console.log(icons.projects);
  let width = info.resolution.split('x')[0];
  let height = info.resolution.split('x')[1];
  return (
    <section style={{ height: `${height}px`, width: `${width}px` }}>
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: landscape)' }) && <></>}

      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: portrait)' }) && <></>}
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
