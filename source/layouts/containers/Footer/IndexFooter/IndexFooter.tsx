// IndexFooter.tsx
//--|🠋 Frameworks 🠋|--//
import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
//--|🠉 Frameworks 🠉|--//
//--|🠋 Utilities 🠋|--//
import getSVG from '../../../../utilities/getSVG';
import showAside from '../../../../utilities/showAside';
import getScroll from '../../../../utilities/getScroll';
import setActive from '../../../../utilities/setActive';
import getResolution from '../../../../utilities/getResolution';
import getOrientation from '../../../../utilities/getOrientation';
import getIdentification from '../../../../utilities/getIdentification';
//--|🠉 Utilities 🠉|--//
//--|🠋 Components 🠋|--//
import MenuAnchor from '../../../components/Menu/anchor/Menu.anchor';
import MenuButton from '../../../components/Menu/button/Menu.button';
import ButtonFade from '../../../components/Button/fade/Button.fade';
//--|🠉 Components 🠉|--//
//--|🠋 Design 🠋|--//
//--|🠉 Design 🠉|--//

interface FooterProps {
  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
}

const loadTimer: number = 2000;
const blockName: String = 'footer';
const pageName: String = getIdentification();
const IndexFooter: React.FC<FooterProps> = () => {
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

  let mobile = useMediaQuery({ query: '(orientation: portrait)' });
  let desktop = useMediaQuery({ query: '(orientation: landscape)' });

  let anchors = [
    {
      state: '',
      text: 'GitHub',
      label: 'github',
      target: '_blank',
      align: 'center',
      block: 'footer',
      style: 'downplay',
      href: 'https://github.com/TertiusRoach',
      icon: getSVG('github') as { dark: string; medium: string; light: string },
    },
    {
      state: '',
      text: 'LinkedIn',
      target: '_blank',
      label: 'linkedin',
      align: 'center',
      block: 'footer',
      style: 'highlight',
      href: 'https://www.linkedin.com/in/tertius-roach/',
      icon: getSVG('linkedin') as { dark: string; medium: string; light: string },
    },
    {
      state: '',
      text: 'YouTube',
      label: 'youtube',
      target: '_blank',
      align: 'center',
      block: 'footer',
      style: 'downplay',
      href: 'https://www.youtube.com/@TertiusRoach',
      icon: getSVG('youtube') as { dark: string; medium: string; light: string },
    },
  ] as {
    href: string;
    text: string;
    state: 'active' | '';
    style: 'downplay' | 'highlight';
    align: 'left' | 'center' | 'right' | string;
    label: 'home' | 'skills' | 'contact' | string;
    target: '_blank' | '_parent' | '_self' | '_top' | string;
    icon: { dark: 'dark'; medium: 'medium'; light: 'light' };
    block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
  }[];
  let buttons = [
    {
      text: 'Home',
      label: 'home',
      align: 'center',
      block: 'header',
      icon: getSVG('home') as { dark: 'dark'; medium: 'medium'; light: 'light' },
    },
    {
      align: 'left',
      label: 'skills',
      text: 'Skills',
      block: 'header',
      icon: getSVG('skills') as { dark: 'dark'; medium: 'medium'; light: 'light' },
    },
    {
      text: 'Contact',
      label: 'contact',
      align: 'left',
      block: 'header',
      icon: getSVG('contact') as { dark: 'dark'; medium: 'medium'; light: 'light' },
    },
  ] as {
    text: string;
    icon: { dark: string; medium: string; light: string };
    label: 'rightbar' | string;
    style: 'highlight' | 'downplay';
    align: 'left' | 'center' | 'right' | string;
    block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
  }[];

  return (
    <footer id="index-footer" className="default-footer" style={{ zIndex: 1 }}>
      {desktop && (
        <>
          <MenuAnchor selectDesign="icon" info={anchors} />
        </>
      )}
      {mobile && (
        <>
          {/* <MenuButton selectDesign="fade" info={buttons} /> */}

          <ButtonFade
            state="active"
            text="Home"
            label="home"
            align="left"
            block="footer"
            style="downplay"
            icon={getSVG('home') as { dark: 'dark'; medium: 'medium'; light: 'light' }}
          />
          <ButtonFade
            state=""
            text="Skills"
            label="skills"
            block="footer"
            align="center"
            style="downplay"
            icon={getSVG('skills') as { dark: string; medium: string; light: string }}
          />
          <ButtonFade
            state=""
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
  );
};

export default IndexFooter;

function jQueryFooter(pageName: String, blockName: String) {
  const containerElement = `${pageName}-${blockName}`;
  $(`#${containerElement} button[class*="${blockName}"]`).on('click', function () {
    if (!this.id) {
      let buttonElement = this as HTMLButtonElement;
      let mainContainer = document.querySelector(`#${pageName}-main`) as HTMLElement;
      let scrollPixels = getScroll(buttonElement, mainContainer)?.scrollTop as Number;
      setActive(this as HTMLButtonElement, blockName);
      $(mainContainer).animate({ scrollTop: `${scrollPixels}px` }, 1000);
    }
  });
  $(`#${containerElement} .rightbar-projects`).on('click', function () {
    let rightbar = document.querySelector(`#${pageName}-rightbar`) as HTMLElement;
    showAside(rightbar.classList[0].split('-')[1] as string);
  });
  console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
