// IndexHeader.tsx
import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import MenuButton from '../../../components/Menu/button/Menu.button';
import { getResolution, getOrientation, getIdentification, scrollInfo } from '../../../../scripts/index';

const buttons = [
  {
    text: 'Home',
    align: 'left',
    label: 'home',
    block: 'header',
    icon: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/home.svg',
  },
  {
    align: 'left',
    text: 'Skills',
    label: 'skills',
    block: 'header',
    icon: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/lightbulb.svg',
  },
  {
    align: 'left',
    text: 'Contact',
    label: 'contact',
    block: 'header',
    icon: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/phone.svg',
  },
];
interface InfoProps {
  icons: {
    signatureAdjacent: string;
  };
  info: {
    resolution: string;
    orientation: string | 'landscape' | 'portrait';
    identification: string | 'index' | 'resume' | 'ticket' | 'university' | 'fitness';
  };
}
const IndexHeader: React.FC<InfoProps> = ({ icons }) => {
  const loadTimer: number = 0;
  const blockName: String = 'header';
  const pageName: String = getIdentification();
  const mobile: boolean = useMediaQuery({ query: '(orientation: portrait)' });
  const desktop: boolean = useMediaQuery({ query: '(orientation: landscape)' });

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
      $(mainContainer).animate({ scrollTop: `${scrollInfo(buttonElement, mainContainer, blockName)?.scrollTop}px` }, 1000);
    }
  });
  console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
