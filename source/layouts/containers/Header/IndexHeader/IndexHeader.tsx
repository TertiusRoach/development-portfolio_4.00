// IndexHeader.tsx
import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import MenuButton from '../../../components/Menu/button/Menu.button';

import getSVG from '../../../../utilities/getSVG';
import setActive from '../../../../utilities/setActive';
import getScroll from '../../../../utilities/getScroll';
import getResolution from '../../../../utilities/getResolution';
import getOrientation from '../../../../utilities/getOrientation';
import getIdentification from '../../../../utilities/getIdentification';

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
  const mobile: boolean = useMediaQuery({ query: '(orientation: portrait)' });
  const desktop: boolean = useMediaQuery({ query: '(orientation: landscape)' });
  let buttons = [
    {
      text: 'Home',
      label: 'home',
      align: 'left',
      block: 'header',
      state: 'active',
      style: 'downplay',
      icon: getSVG('home') as { dark: 'dark'; medium: 'medium'; light: 'light' },
    },
    {
      state: '',
      align: 'left',
      label: 'skills',
      text: 'Skills',
      block: 'header',
      style: 'downplay',

      icon: getSVG('skills') as { dark: 'dark'; medium: 'medium'; light: 'light' },
    },
    {
      state: '',
      text: 'Contact',
      label: 'contact',
      align: 'left',
      block: 'header',
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
  const signatureAdjacent =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3624e61a970d65f1835a191c0d76220c13db85b4/source/assets/svg-files/archive-images/tertius-roach/signature-adjacent/primary-medium.svg';

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
      {desktop && (
        <>
          <img className="signature-adjacent" src={signatureAdjacent} alt="Tertius Roach" />
          <MenuButton selectDesign="fade" info={buttons} />
        </>
      )}
      {mobile && (
        <>
          <img className="signature-adjacent" src={signatureAdjacent} alt="Tertius Roach" />
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
