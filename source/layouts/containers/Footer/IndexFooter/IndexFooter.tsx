import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import MenuAnchor from '../../../components/Menu/anchor/Menu.anchor';
import MenuButton from '../../../components/Menu/button/Menu.button';
import ButtonFade from '../../../components/Button/fade/Button.fade';

import {
  getResolution,
  getOrientation,
  getIdentification,
  getScroll,
  showAside,
  getSVG,
  setActive,
} from '../../../../scripts/index';

interface FooterProps {
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
  info: {
    resolution: string;
    orientation: string | 'landscape' | 'portrait';
    identification: string | 'index' | 'resume' | 'ticket' | 'university' | 'fitness';
  };
}
const IndexFooter: React.FC<FooterProps> = () => {
  const loadTimer: number = 2000;
  const blockName: String = 'footer';
  const pageName: String = getIdentification();
  const mobile: boolean = useMediaQuery({ query: '(orientation: portrait)' });
  const desktop: boolean = useMediaQuery({ query: '(orientation: landscape)' });
  // type Anchor = {
  //   href: string;
  //   text?: string;
  //   index?: number;
  //   state?: 'active' | undefined;
  //   style: 'downplay' | 'highlight' | string;
  //   align: 'left' | 'center' | 'right' | string;
  //   label?: 'home' | 'skills' | 'contact' | string;
  //   target: '_blank' | '_self' | '_parent' | '_top';
  //   block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
  //   icon: { dark: string; medium: string; light: string }[];
  // };
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        setTimeout(() => jQueryFooter(pageName, blockName), loadTimer);
      },
      false
    );
    setTimeout(() => jQueryFooter(pageName, blockName), loadTimer);
  }, []);
  let anchors = [
    {
      href: 'https://github.com/TertiusRoach',
      target: '_blank',
      text: 'GitHub',
      style: 'downplay',
      align: 'center',
      label: 'github',
      state: '',
      block: 'footer',
      icon: getSVG('github') as { dark: 'dark'; medium: 'medium'; light: 'light' },
    },
    {
      href: 'https://www.youtube.com/@TertiusRoach',
      target: '_blank',
      text: 'YouTube',
      style: 'downplay',
      align: 'center',
      label: 'linkedin',
      state: '',
      block: 'footer',
      icon: getSVG('youtube') as { dark: 'dark'; medium: 'medium'; light: 'light' },
    },
    {
      href: 'https://www.linkedin.com/in/tertius-roach/',
      target: '_blank',
      text: 'LinkedIn',
      style: 'downplay',
      align: 'center',
      label: 'youtube',
      state: '',
      block: 'footer',
      icon: getSVG('linkedIn') as { dark: 'dark'; medium: 'medium'; light: 'light' },
    },
  ] as {
    text: string;
    href: string;
    state?: 'active' | '';
    style: 'downplay' | 'highlight' | string;
    align: 'left' | 'center' | 'right' | string;
    label: 'github' | 'linkedin' | 'youtube' | string;
    target: '_blank' | '_parent' | '_self' | '_top' | string;
    icon: undefined | { dark: string; medium: string; light: string };
    block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
  }[];

  let buttons = [
    {
      text: 'Home',
      label: 'home',
      align: 'left',
      block: 'footer',
      style: 'highlight',
      icon: getSVG('career') as { dark: string; medium: string; light: string },
    },
    {
      text: 'Skills',
      label: 'skills',
      align: 'center',
      block: 'footer',
      style: 'highlight',
      icon: getSVG('skills') as { dark: string; medium: string; light: string },
    },
    /*
    {
      text: 'Contact',
      label: 'contact',
      align: 'center',
      block: 'footer',
      style: 'highlight',
      icon: getSVG('projects') as { dark: string; medium: string; light: string },
    },
    */
  ];
  return (
    <>
      {/* How do I refresh the useEffect every time the screen rotates? */}
      <footer id="index-footer" className="default-footer" style={{ zIndex: 1 }}>
        {desktop && (
          <>
            <MenuAnchor selectDesign="icon" info={anchors} />
          </>
        )}
        {mobile && (
          <>
            <ButtonFade
              text="Home"
              label="home"
              align="left"
              block="footer"
              state="active"
              style="highlight"
              icon={getSVG('career') as { dark: string; medium: string; light: string }}
            />
            <ButtonFade
              text="Skills"
              label="skills"
              block="footer"
              align="center"
              style="highlight"
              icon={getSVG('skills') as { dark: string; medium: string; light: string }}
            />
            {/* <MenuButton info={buttons} selectDesign="fade" /> */}
            <ButtonFade
              align="right"
              text="Projects"
              block="rightbar"
              label="projects"
              style="downplay"
              icon={getSVG('projects') as { dark: string; medium: string; light: string }}
            />
          </>
        )}
      </footer>
    </>
  );
  console.log('IndexFooter Loaded');
};
export default IndexFooter;
function jQueryFooter(pageName: String, blockName: String) {
  const containerElement = `${pageName}-${blockName}`;
  $(`#${containerElement} button[class*="${blockName}"]`).on('click', function () {
    //--|🠋 Safety Check 🠋|--//
    if (!this.id) {
      let buttonElement = this as HTMLButtonElement;
      let mainContainer = document.querySelector('#index-main') as HTMLElement;
      let scrollPixels = getScroll(buttonElement, mainContainer, blockName)?.scrollTop;
      $(mainContainer).animate({ scrollTop: `${scrollPixels}px` }, 1000);
      setActive(this as HTMLButtonElement, 'footer');
    }
  });
  $(`#${containerElement} .rightbar-projects`).on('click', function () {
    let rightbar = document.querySelector(`#${pageName}-rightbar`) as HTMLElement;
    showAside(rightbar.classList[0].split('-')[1] as string);
  });
  console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
