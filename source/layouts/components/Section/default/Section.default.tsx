// Section.default.tsx
import React from 'react';
import './Section.default.scss';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';

import MenuButton from '../../Menu/button/Menu.button';
import ButtonFade from '../../Button/fade/Button.fade';

import { getSVG } from '../../../../modules/utilities/bin/getFile';
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
const SectionDefault: React.FC<DefaultProps> = ({ labelName, blockName, stateType, info }) => {
  const jQueryTimer = 1000 as number;
  const block = `${blockName}` as 'main';
  const label: string = `${labelName}` as 'default';
  const page: String = info.identification as String;
  useEffect(() => {
    let jQueryLoad = () => {
      jQueryDefault(page, block);
    };
    window.addEventListener('resize', jQueryLoad);
    setTimeout(() => jQueryDefault(page, block), jQueryTimer);
    return () => {
      window.removeEventListener('resize', jQueryLoad);
    };
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
      {(useMediaQuery({ query: '(orientation: landscape)' }) as boolean) && (
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
      {(useMediaQuery({ query: '(orientation: portrait)' }) as boolean) && (
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
  console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);

  /*
    // let buttons = [
  //   {
  //     text: 'My Career',
  //     block: 'main',
  //     align: 'center',
  //     label: 'career',
  //     style: 'highlight',
  //     icon: getSVG('career') as { dark: string; medium: string; light: string },
  //   },
  //   {
  //     text: 'View Leftbar',
  //     label: 'leftbar',
  //     block: 'main',
  //     style: 'highlight',
  //     align: 'left',
  //     icon: getSVG('leftbar') as { dark: string; medium: string; light: string },
  //   },
  //   {
  //     text: 'My Projects',
  //     label: 'projects',
  //     block: 'main',
  //     style: 'highlight',
  //     align: 'right',
  //     icon: getSVG('projects') as { dark: string; medium: string; light: string },
  //   },
  // ];
  $(`#${containerElement} section`).on('click', function (event) {
    let navigation = ['header', 'footer'];
    let mainContainer = document.querySelector(`#${pageName}-main`) as HTMLElement;
    let parent = event.target.parentElement?.parentElement as HTMLButtonElement;
    let tagName = parent.tagName as 'BUTTON' | string;
    if (tagName === 'BUTTON') {
      for (let i = 0; i < navigation.length; i++) {
        var labelName = parent.classList[0].split('-')[1] as string;
        var buttonElement = document.querySelector(`button[class*="${labelName}"]`) as HTMLButtonElement;
        $(mainContainer).animate({ scrollTop: `${getScroll(buttonElement, mainContainer)?.scrollTop as Number}px` }, 750);
      }
    } else {
      var buttonElement = this as HTMLButtonElement;
      for (let i = 0; i < navigation.length; i++) {
        setActive(this as HTMLButtonElement, navigation[i]);
      }
      $(mainContainer).animate({ scrollTop: `${getScroll(buttonElement, mainContainer)?.scrollTop as Number}px` }, 250);
    }
  });
  $(`#${containerElement} .rightbar-projects`).on('click', function () {
    const rightbar = this.classList[0].split('-')[0];
    if (rightbar.includes('rightbar')) {
      showAside(rightbar);
    }
  });
  $(`#${containerElement} .overlay-career`).on('click', function () {
    const overlay = this.classList[0].split('-')[0];
    if (overlay.includes('overlay')) {
      showSection(`${pageName}`, overlay);
    }
  });

  console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
  */
}
