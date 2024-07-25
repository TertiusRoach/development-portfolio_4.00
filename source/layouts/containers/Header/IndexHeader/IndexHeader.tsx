// IndexHeader.tsx
import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import { getSVG } from '../../../../modules/utilities/getFile';
import setActive from '../../../../modules/utilities/setActive';
import getScroll from '../../../../modules/utilities/getScroll';
import MenuButton from '../../../components/Menu/button/Menu.button';
import getResolution from '../../../../modules/utilities/getResolution';
import getOrientation from '../../../../modules/utilities/getOrientation';
import getIdentification from '../../../../modules/utilities/getIdentification';

interface InfoProps {
  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
}
const IndexHeader: React.FC<InfoProps> = () => {
  const loadTimer: number = 0;
  const blockName: String = 'header';
  const pageName: String = getIdentification();
  let buttons = [
    {
      text: 'Home',
      align: 'left',
      label: 'home',
      state: 'active',
      block: 'header',
      style: 'downplay',
      icon: getSVG('home') as { dark: 'dark'; medium: 'medium'; light: 'light' },
    },
    {
      state: '',
      align: 'left',
      text: 'Skills',
      label: 'skills',
      block: 'header',
      style: 'downplay',

      icon: getSVG('skills') as { dark: 'dark'; medium: 'medium'; light: 'light' },
    },
    {
      state: '',
      align: 'left',
      text: 'Contact',
      block: 'header',
      label: 'contact',
      style: 'downplay',
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
  let mobileDevice: boolean = useMediaQuery({ query: '(orientation: portrait)' });
  let desktopDevice: boolean = useMediaQuery({ query: '(orientation: landscape)' });
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        setTimeout(() => jQueryHeader(pageName, blockName), loadTimer);
      },
      false
    );
    setTimeout(() => jQueryHeader(pageName, blockName), loadTimer);
  }, []);

  return (
    <header id="index-header" className="default-header" style={{ zIndex: 2 }}>
      {desktopDevice && (
        <>
          <img
            className="signature-adjacent"
            src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/45afd7cf137b42f3c936f230fdd8c58371f10d20/source/assets/svg-files/archive-images/tertius-roach/signature-adjacent/primary-light.svg"
            alt="Tertius Roach"
          />
          {/* <MenuButton selectAxis="horizontal" selectDesign="fade" selectInfo={buttons} /> */}
        </>
      )}
      {mobileDevice && (
        <>
          <img
            className="signature-adjacent"
            src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/45afd7cf137b42f3c936f230fdd8c58371f10d20/source/assets/svg-files/archive-images/tertius-roach/signature-adjacent/primary-light.svg"
            alt="Tertius Roach"
          />
        </>
      )}
    </header>
  );
};
export default IndexHeader;

function jQueryHeader(pageName: String, blockName: String) {
  const containerElement = `${pageName}-${blockName}`;
  $(`#${containerElement} button[class*="${blockName}"]`).on('click', function () {
    //--|🠋 Safety Check 🠋|--//
    if (!this.id) {
      let buttonElement = this as HTMLButtonElement;
      let mainContainer = document.querySelector(`#${pageName}-main`) as HTMLElement;
      let scrollPixels = getScroll(buttonElement, mainContainer)?.scrollTop as Number;

      setActive(this as HTMLButtonElement, blockName);
      $(mainContainer).animate({ scrollTop: `${scrollPixels}px` }, 1000);
    }
  });
  console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
