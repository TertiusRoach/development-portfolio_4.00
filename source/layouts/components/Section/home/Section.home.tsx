// Section.home.tsx
import React from 'react';
import './Section.home.scss';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';

import getSVG from '../../../../utilities/getSVG';
import ButtonFade from '../../Button/fade/Button.fade';
import DivisionWorking from '../../Division/working/Division.working';
import getIdentification from '../../../../utilities/getIdentification';

interface HomeProps {
  state?: 'active';
  info: {
    resolution: string;
    orientation: string;
    identification: string;
  };
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar';
}
const SectionHome: React.FC<HomeProps> = ({ state, info, block }) => {
  const blockName: string = block;
  const width = info.resolution.split('x')[0];
  const height = info.resolution.split('x')[1];
  const pageName: String = getIdentification();
  const mobile: boolean = useMediaQuery({ query: '(orientation: portrait)' });
  const desktop: boolean = useMediaQuery({ query: '(orientation: landscape)' });
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        jQueryHome(pageName, blockName);
      },
      false
    );
  }, []);
  let career = getSVG('career') as { dark: string; medium: string; light: string };
  let contact = getSVG('contact') as { dark: string; medium: string; light: string };
  let projects = getSVG('projects') as { dark: string; medium: string; light: string };
  return (
    <section
      className={`${block}-home`}
      id={state === 'active' ? `${block}-active` : ''}
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {desktop && (
        <>
          <>
            <ButtonFade text="My Career" block="overlay" align="left" label="career" style="highlight" icon={career} />
            <ButtonFade
              align="right"
              icon={projects}
              label="projects"
              block="rightbar"
              style="highlight"
              text="My Projects"
            />
          </>

          {/* <MenuButton selectDesign="fade" info={buttons} /> */}
        </>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {mobile && (
        <>
          <menu>
            <ButtonFade text="My Career" label="career" block="overlay" align="left" style="downplay" icon={career} />
            <ButtonFade text="Contact Me" label="contact" block="main" align="right" style="downplay" icon={contact} />
          </menu>
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
{
  /* <DivisionWorking align="center" text="Home" info={info} icon={icons.home} /> */
}
export default SectionHome;

function jQueryHome(pageName: String, blockName: string) {
  const containerElement = `${pageName}-${blockName}`;
  console.log(`'Yay, jQuery!':${containerElement}`);
}
