// IndexHeader.tsx
import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import MenuButton from '../../../components/Menu/button/Menu.button';
import { getResolution, getOrientation, getIdentification, getScroll, getSVG, setActive } from '../../../../scripts/index';

interface InfoProps {
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
}
const IndexHeader: React.FC<InfoProps> = ({ icons }) => {
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
      style: 'downplay',
      icon: getSVG('home') as { dark: 'dark'; medium: 'medium'; light: 'light' },
    },
    {
      align: 'left',
      label: 'skills',
      text: 'Skills',
      block: 'header',
      style: 'highlight',
      icon: getSVG('skills') as { dark: 'dark'; medium: 'medium'; light: 'light' },
    },
    {
      text: 'Contact',
      label: 'contact',
      align: 'left',
      block: 'header',
      style: 'highlight',
      icon: getSVG('contact') as { dark: 'dark'; medium: 'medium'; light: 'light' },
    },
  ] as {
    text: string;
    icon: { dark: string; medium: string; light: string };
    label: 'rightbar' | string;
    style: 'highlight' | 'downplay' | string;
    align: 'left' | 'center' | 'right' | string;
    block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
  }[];

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
          <img className="signature-adjacent" src={icons.signatureAdjacent} alt="Tertius Roach" />
          <MenuButton selectDesign="fade" info={buttons} />
        </>
      )}
      {mobile && (
        <>
          <img className="signature-adjacent" src={icons.signatureAdjacent} alt="Tertius Roach" />
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
      let scrollPixels = getScroll(buttonElement, mainContainer, blockName)?.scrollTop as Number;

      setActive(this as HTMLButtonElement, blockName);
      $(mainContainer).animate({ scrollTop: `${scrollPixels}px` }, 1000);
    }
  });
  console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
