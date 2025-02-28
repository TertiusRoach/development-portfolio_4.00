// Section.home.tsx
import $ from 'jquery';
import React from 'react';
import './Section.career.scss';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';

import MenuButton from '../../Menu/button/Menu.button';
import ButtonFade from '../../Button/fade/Button.fade';

import { getSVG } from '../../../../modules/utilities/bin/getFile';
import getScroll from '../../../../modules/utilities/bin/getScroll';
import showAside from '../../../../modules/utilities/bin/toggleAside';
import toggleSection from '../../../../modules/utilities/bin/toggleSection';
import DivisionWorking from '../../Division/working/Division.working';
import getIdentification from '../../../../modules/utilities/getIdentification';

interface HomeProps {
  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: String;
  };
  labelName: 'home';
  stateType: 'active' | '';
  blockName: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
}
const SectionOverlay: React.FC<HomeProps> = ({ labelName, blockName, stateType, info }) => {
  const jQueryTimer = 1000;
  const block = `${blockName}` as 'main';
  const label: string = `${labelName}` as 'career';
  const page: String = info.identification as String;
  useEffect(() => {
    let jQueryLoad = () => {
      jQueryCareer(page, block);
    };
    window.addEventListener('resize', jQueryLoad);
    setTimeout(() => jQueryCareer(page, block), jQueryTimer);
    return () => {
      window.removeEventListener('resize', jQueryLoad);
    };
  }, []);
  let desktopButtons = [
    {
      state: '',
      label: 'career',
      align: 'center',
      block: 'overlay',
      style: 'downplay',
      text: 'My Career',
      icon: getSVG('career') as { dark: 'dark'; medium: 'medium'; light: 'light' },
    },
    {
      state: '',
      label: 'leftbar',
      align: 'center',
      block: 'leftbar',
      style: 'downplay',
      text: 'View Leftbar',
    },
    {
      state: '',
      align: 'center',
      label: 'projects',
      block: 'rightbar',
      style: 'highlight',
      text: 'My Projects',
      icon: getSVG('projects') as { dark: 'dark'; medium: 'medium'; light: 'light' },
    },
  ] as {
    text: string;
    state: 'active' | '';
    label: 'rightbar' | string;
    style: 'highlight' | 'downplay';
    align: 'left' | 'center' | 'right' | string;
    icon: { dark: string; medium: string; light: string };
    block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
  }[];

  let width = info.resolution.split('x')[0];
  let height = info.resolution.split('x')[1];
  let mobileButtons = [
    {
      state: '',
      align: 'left',
      label: 'career',
      block: 'overlay',
      text: 'My Career',
      style: 'downplay',
      icon: getSVG('career') as { dark: 'dark'; medium: 'medium'; light: 'light' },
    },
    {
      state: '',
      label: 'leftbar',
      align: 'center',
      block: 'leftbar',
      style: 'downplay',
      text: 'View Leftbar',
    },
    {
      state: '',
      block: 'main',
      align: 'right',
      label: 'contact',
      style: 'downplay',
      text: 'Contact Me',
      icon: getSVG('contact') as { dark: 'dark'; medium: 'medium'; light: 'light' },
    },
  ] as {
    text: string;
    state: 'active' | '';
    label: 'rightbar' | string;
    style: 'highlight' | 'downplay';
    align: 'left' | 'center' | 'right' | string;
    icon: { dark: string; medium: string; light: string };
    block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
  }[];
  return (
    <section
      className={`${blockName}-${labelName}`}
      style={{ height: `${height}px`, width: `${width}px` }}
      id={stateType === 'active' ? `${blockName}-active` : ''}
    >
      {/* <DivisionWorking align="center" text="Home" info={info} icon={icons.home} /> */}
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {(useMediaQuery({ query: '(orientation: landscape)' }) as boolean) && (
        <>
          <div id={`${labelName}-foreground`} style={{ zIndex: 2 }}>
            {/* <MenuButton selectDesign="fade" buttonInfo={desktopButtons} /> */}
          </div>
          <div id={`${labelName}-midground`} style={{ zIndex: 1 }}></div>
          <div id={`${labelName}-background`} style={{ zIndex: 0 }}></div>
        </>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {(useMediaQuery({ query: '(orientation: portrait)' }) as boolean) && (
        <>
          <div style={{ zIndex: 2 }} id={`${labelName}-foreground`}>
            {/* <MenuButton selectDesign="fade" buttonInfo={mobileButtons} /> */}
          </div>
          <div style={{ zIndex: 1 }} id={`${labelName}-midground`}>
            <span className="home-title"></span>
            <span className="home-subject"></span>
            <span className="home-description"></span>
          </div>
          <div style={{ zIndex: 0 }} id={`${labelName}-background`}>
            <span className="home-profile"></span>
          </div>
        </>
      )}
    </section>
  );
};
export default SectionOverlay;

function jQueryCareer(pageName: String, blockName: string) {
  const layoutsContainer = `${pageName}-${blockName}`;
  /*
  $(`#${layoutsContainer} section`).on('click', function (event) {
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
        setButton(this as HTMLButtonElement, navigation[i]);
      }
      $(mainContainer).animate({ scrollTop: `${getScroll(buttonElement, mainContainer)?.scrollTop as Number}px` }, 250);
    }
  });
  $(`#${layoutsContainer} .rightbar-projects`).on('click', function () {
    const rightbar = this.classList[0].split('-')[0];
    if (rightbar.includes('rightbar')) {
      showAside(rightbar);
    }
  });
  $(`#${layoutsContainer} button[class*="leftbar"]`).on('click', function () {
    const rightbar = this.classList[0].split('-')[0];
    if (rightbar.includes('leftbar')) {
      showAside(rightbar);
    }
  });
  $(`#${layoutsContainer} .overlay-career`).on('click', function () {
    const overlay = this.classList[0].split('-')[0];
    if (overlay.includes('overlay')) {
      toggleSection(`${pageName}`, overlay);
    }
  });
  */

  console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
