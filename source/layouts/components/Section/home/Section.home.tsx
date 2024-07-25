// Section.home.tsx
import $ from 'jquery';
import React from 'react';
import './Section.home.scss';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';

import MenuButton from '../../Menu/button/Menu.button';
import ButtonFade from '../../Button/fade/Button.fade';

import { getSVG } from '../../../../modules/utilities/getFile';
import setActive from '../../../../modules/utilities/setActive';
import getScroll from '../../../../modules/utilities/getScroll';
import showAside from '../../../../modules/utilities/showAside';
import showSection from '../../../../modules/utilities/showSection';
import DivisionWorking from '../../Division/working/Division.working';
import getIdentification from '../../../../modules/utilities/getIdentification';

interface HomeProps {
  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
  labelName: 'home';
  stateType: 'active' | '';
  blockName: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
}
const SectionHome: React.FC<HomeProps> = ({ info, labelName, blockName, stateType }) => {
  const loadTimer = 1000;
  const width = info.resolution.split('x')[0];
  const height = info.resolution.split('x')[1];
  const pageName: String = getIdentification();
  useEffect(() => {
    let handleResize = () => {
      setTimeout(() => jQueryHome(pageName, blockName), loadTimer);
    };

    window.addEventListener('resize', handleResize);
    setTimeout(() => jQueryHome(pageName, blockName), loadTimer);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  let desktopDevice: boolean = useMediaQuery({ query: '(orientation: landscape)' });
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
      align: 'center',
      label: 'projects',
      block: 'rightbar',
      style: 'downplay',
      text: 'My Projects',
      icon: getSVG('projects') as { dark: 'dark'; medium: 'medium'; light: 'light' },
    },
  ] as {
    text: string;
    state: 'active' | '';
    style: 'highlight' | 'downplay';
    align: 'left' | 'center' | 'right' | string;
    label: 'rightbar' | 'leftbar' | 'overlay' | string;
    icon: { dark: string; medium: string; light: string };
    block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
  }[];
  let mobileDevice: boolean = useMediaQuery({ query: '(orientation: portrait)' });
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
      {desktopDevice && (
        <>
          <div id={`${labelName}-foreground`} style={{ zIndex: 2 }}>
            <MenuButton selectInfo={desktopButtons} selectAxis="horizontal" selectDesign="fade" />
          </div>
          <div id={`${labelName}-midground`} style={{ zIndex: 1 }}></div>
          <div id={`${labelName}-background`} style={{ zIndex: 0 }}></div>
        </>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {mobileDevice && (
        <>
          <div style={{ zIndex: 2 }} id={`${labelName}-foreground`}>
            <MenuButton selectInfo={mobileButtons} selectAxis="horizontal" selectDesign="fade" />
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
export default SectionHome;
function jQueryHome(pageName: String, blockName: string) {
  const containerElement = `${pageName}-${blockName}`;
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
  $(`#${containerElement} button[class*="leftbar"]`).on('click', function () {
    const rightbar = this.classList[0].split('-')[0];
    if (rightbar.includes('leftbar')) {
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
}
