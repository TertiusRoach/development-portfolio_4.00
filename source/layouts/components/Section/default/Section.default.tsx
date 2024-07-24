// Section.default.tsx
import React from 'react';
import './Section.default.scss';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';

import MenuButton from '../../Menu/button/Menu.button';
import ButtonFade from '../../Button/fade/Button.fade';

import { getSVG } from '../../../../modules/utilities/getFile';
import DivisionWorking from '../../Division/working/Division.working';
import getIdentification from '../../../../modules/utilities/getIdentification';

interface DefaultProps {
  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
  labelName: 'default';
  stateType: 'active' | '';
  blockName: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
}
const SectionDefault: React.FC<DefaultProps> = ({ info, labelName, blockName, stateType }) => {
  console.log(`${info.identification}-${blockName}: ${labelName} <section>`);
  const loadTimer = 1000 as number;
  const pageName: String = getIdentification();

  let mobile = useMediaQuery({ query: '(orientation: portrait)' }) as boolean;
  let desktop = useMediaQuery({ query: '(orientation: landscape)' }) as boolean;
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        jQueryDefault(pageName, blockName);
      },
      false
    );
    setTimeout(() => jQueryDefault(pageName, blockName), loadTimer);
  }, []);

  let width = info.resolution.split('x')[0];
  let height = info.resolution.split('x')[1];
  return (
    <section
      className={`${blockName}-default`}
      id={stateType === 'active' ? `${blockName}-active` : ''}
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {desktop && (
        <>
          <>
            {/* <ButtonFade
              state=""
              text="My Career"
              block="overlay"
              align="left"
              label="career"
              style="highlight"
              icon={getSVG('career') as { dark: string; medium: string; light: string }}
            /> */}
            {/* <ButtonFade
              state=""
              text="My Projects"
              label="projects"
              block="rightbar"
              style="highlight"
              align="right"
              icon={getSVG('projects') as { dark: string; medium: string; light: string }}
            /> */}
          </>

          {/* <MenuButton selectDesign="fade" info={buttons} /> */}
        </>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {mobile && (
        <>
          {/* <ButtonFade
            state=""
            text="Contact Me"
            label="contact"
            block="main"
            style="highlight"
            align="center"
            icon={getSVG('contact') as { dark: string; medium: string; light: string }}
          /> */}
        </>
      )}
    </section>
  );
  let buttons = [
    {
      text: 'My Career',
      block: 'main',
      align: 'center',
      label: 'career',
      style: 'highlight',
      icon: getSVG('career') as { dark: string; medium: string; light: string },
    },
    {
      text: 'View Leftbar',
      label: 'leftbar',
      block: 'main',
      style: 'highlight',
      align: 'left',
      icon: getSVG('leftbar') as { dark: string; medium: string; light: string },
    },
    {
      text: 'My Projects',
      label: 'projects',
      block: 'main',
      style: 'highlight',
      align: 'right',
      icon: getSVG('projects') as { dark: string; medium: string; light: string },
    },
  ];
};
export default SectionDefault;

function jQueryDefault(pageName: String, blockName: string) {
  const layoutsContainer = `${pageName}-${blockName}`;
  console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
