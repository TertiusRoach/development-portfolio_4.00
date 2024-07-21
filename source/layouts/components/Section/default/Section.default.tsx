// Section.default.tsx
import React from 'react';
import './Section.default.scss';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';

import { getIdentification, getSVG } from '../../../../scripts';
import MenuButton from '../../Menu/button/Menu.button';
import ButtonFade from '../../Button/fade/Button.fade';
import DivisionWorking from '../../Division/working/Division.working';

interface DefaultProps {
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
  state?: 'active';
  label?: 'default' | 'home' | 'skills' | 'contact';
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar';
}
const SectionDefault: React.FC<DefaultProps> = ({ info, block, state }) => {
  const loadTimer: number = 1000;
  const blockName: String = 'main';
  const pageName: String = getIdentification();

  const mobile: boolean = useMediaQuery({ query: '(orientation: portrait)' });
  const desktop: boolean = useMediaQuery({ query: '(orientation: landscape)' });
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        setTimeout(() => jQueryDefault, 1000);
      },
      false
    );
    setTimeout(() => jQueryDefault, 1000);
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
            <ButtonFade
              text="My Career"
              block="overlay"
              align="left"
              label="career"
              style="highlight"
              icon={getSVG('career') as { dark: string; medium: string; light: string }}
            />
            <ButtonFade
              text="My Projects"
              label="projects"
              block="rightbar"
              style="highlight"
              align="right"
              icon={getSVG('projects') as { dark: string; medium: string; light: string }}
            />
          </>

          {/* <MenuButton selectDesign="fade" info={buttons} /> */}
        </>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {mobile && (
        <>
          <ButtonFade
            text="Contact Me"
            label="contact"
            block="main"
            style="highlight"
            align="center"
            icon={getSVG('contact') as { dark: string; medium: string; light: string }}
          />
        </>
      )}
    </section>
  );
};
export default SectionDefault;

function jQueryDefault() {
  console.log('Yay, jQuery!');
}
