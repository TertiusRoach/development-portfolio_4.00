// Section.default.tsx
import React from 'react';
import './Section.default.scss';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';

import MenuButton from '../../Menu/button/Menu.button';
import ButtonFade from '../../Button/fade/Button.fade';

import getSVG from '../../../../utilities/getSVG';
import DivisionWorking from '../../Division/working/Division.working';
import getIdentification from '../../../../utilities/getIdentification';

interface DefaultProps {
  label: 'default';
  state: 'active' | '';
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar';
  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
}
const SectionDefault: React.FC<DefaultProps> = ({ info, block, state }) => {
  const pageName: String = getIdentification();
  let loadTimer = 1000 as number;
  let blockName = 'main' as string;
  let mobile = useMediaQuery({ query: '(orientation: portrait)' }) as boolean;
  let desktop = useMediaQuery({ query: '(orientation: landscape)' }) as boolean;
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        setTimeout(() => jQueryDefault(pageName, blockName), loadTimer);
      },
      false
    );
    setTimeout(() => jQueryDefault(pageName, blockName), loadTimer);
  }, []);
  let width = info.resolution.split('x')[0];
  let height = info.resolution.split('x')[1];
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
  return (
    <section
      className={`${block}-default`}
      id={state === 'active' ? `${block}-active` : ''}
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
};
export default SectionDefault;

function jQueryDefault(pageName: String, blockName: string) {
  const containerElement = `${pageName}-${blockName}`;

  console.log('Yay, jQuery!');
}
