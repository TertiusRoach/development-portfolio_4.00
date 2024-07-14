// Section.home.tsx
import React from 'react';
import './Section.home.scss';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';

import ButtonFade from '../../Button/fade/Button.fade';
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
  let leftbar = icons.viewLeftbar as string;
  let overlay = icons.viewOverlay as string;
  let rightbar = icons.viewRightbar as string;

  // console.log(icons);

  return (
    <section id={`${info.identification}-home`} style={{ height: `${height}px`, width: `${width}px` }}>
      {/* <DivisionWorking align="center" info={info} icon={working} /> */}

      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: landscape)' }) && (
        <>
          <ButtonFade block="rightbar" view="highlight" align="right" icon={icons.projects} text="My Projects" />
          {/* <ButtonFade block="leftbar" view="downplay" align="left" icon={leftbar} text="View Left" />
          <ButtonFade block="overlay" view="downplay" align="center" icon={overlay} text="View Overlay" />
          <ButtonFade block="rightbar" view="downplay" align="right" icon={rightbar} text="View Right" /> */}
        </>
      )}

      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: portrait)' }) && (
        <>
          <ButtonFade block="overlay" view="downplay" align="left" icon={icons.career} />

          {/* <ButtonFade block="leftbar" view="downplay" align="left" icon={leftbar} text="View Left" />
          <ButtonFade block="overlay" view="downplay" align="center" icon={overlay} text="View Overlay" />
          <ButtonFade block="rightbar" view="downplay" align="right" icon={rightbar} text="View Right" /> */}
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
