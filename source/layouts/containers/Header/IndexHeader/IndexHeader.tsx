// IndexHeader.tsx
import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import MenuButton from '../../../components/Menu/button/Menu.button';
import { getResolution, getOrientation, getIdentification, getScroll } from '../../../../scripts/index';

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
      icon: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/home.svg',
      view: 'downplay',
    },
    {
      align: 'left',
      label: 'skills',
      text: 'Skills',
      block: 'header',
      icon: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/lightbulb.svg',
      view: 'highlight',
    },
    {
      text: 'Contact',
      label: 'contact',
      align: 'left',
      block: 'header',
      icon: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/phone.svg',
      view: 'highlight',
    },
  ];

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
          <MenuButton style="fade" info={buttons} />
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
  const blockElement = `${pageName}-${blockName}`;
  $(`#${blockElement} button[class*="${blockName}"]`).on('click', function () {
    //--|🠋 Safety Check 🠋|--//
    if (!this.id) {
      const buttonElement = this as HTMLButtonElement;
      const mainContainer = document.querySelector('main[id*="main"]') as HTMLElement;
      // const scrollPixels =  as Number;
      $(mainContainer).animate({ scrollTop: `${getScroll(buttonElement, mainContainer, blockName)?.scrollTop}px` }, 1000);
    }
  });
  console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
