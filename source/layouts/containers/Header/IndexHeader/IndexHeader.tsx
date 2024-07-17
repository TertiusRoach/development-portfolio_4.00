// IndexHeader.tsx
import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import MenuButton from '../../../components/Menu/button/Menu.button';
import { getResolution, getOrientation, getIdentification, showSection } from '../../../../scripts/index';

const buttons = [
  {
    text: 'Home',
    label: 'home',
    icon: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/home.svg',
  },
  {
    text: 'Skills',
    label: 'skills',
    icon: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/lightbulb.svg',
  },
  {
    text: 'Contact',
    label: 'contact',
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
  const blockName: String = 'header';
  const pageName: String = getIdentification();
  const desktop: boolean = useMediaQuery({ query: '(orientation: landscape)' });
  const mobile: boolean = useMediaQuery({ query: '(orientation: portrait)' });

  useEffect(() => {
    let jQueryHeader = function () {
      console.log(`Orientation refresh for ${blockName}`);
    };
    setTimeout(jQueryHeader, 1000);
    $(`#${pageName}-${blockName} button[class*="${blockName}"]`).on('click', function () {
      //--|🠋 Safety Check 🠋|--//
      if (!this.id) {
        let buttonElement = this as HTMLButtonElement;
        let mainElement = document.querySelector('main[id*="main"]') as HTMLElement;
        showSection(buttonElement, mainElement, blockName);
      }
    });
  }, []);

  return (
    <header id="index-header" className="default-header" style={{ zIndex: 2 }}>
      <img className="signature-adjacent" src={icons.signatureAdjacent} alt="Tertius Roach" />
      {desktop && <MenuButton block="header" style="fade" align="left" items={buttons} />}
      {/* {mobile && <></>} */}
    </header>
  );
};

export default IndexHeader;
