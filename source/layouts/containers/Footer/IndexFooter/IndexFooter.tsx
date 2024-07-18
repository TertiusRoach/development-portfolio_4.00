import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import MenuAnchor from '../../../components/Menu/anchor/Menu.anchor';
import MenuButton from '../../../components/Menu/button/Menu.button';
import ButtonFade from '../../../components/Button/fade/Button.fade';

import { getResolution, getOrientation, getIdentification, scrollInfo, showAside } from '../../../../scripts/index';
const anchors = [
  {
    name: 'GitHub',
    href: 'https://github.com/TertiusRoach',
    icon: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/06cff392403d55ce6dc06e713bda63625f1252f2/source/assets/svg-files/font-awesome/testing-icons/brands/github.svg',
    target: '_blank',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@TertiusRoach',
    icon: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/06cff392403d55ce6dc06e713bda63625f1252f2/source/assets/svg-files/font-awesome/testing-icons/brands/youtube.svg',
    target: '_blank',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tertius-roach/',
    icon: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/06cff392403d55ce6dc06e713bda63625f1252f2/source/assets/svg-files/font-awesome/testing-icons/brands/linkedin.svg',
    target: '_blank',
  },
];
const buttons = [
  {
    text: 'Home',
    label: 'home',
    align: 'center',
    block: 'footer',
    icon: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/home.svg',
  },
  {
    text: 'Skills',
    label: 'skills',
    align: 'center',
    block: 'footer',
    icon: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/lightbulb.svg',
  },
  {
    text: 'Contact',
    label: 'contact',
    align: 'center',
    block: 'footer',
    icon: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/phone.svg',
  },
];

interface FooterProps {
  icons: {
    projects: string;
  };
  info: {
    resolution: string;
    orientation: string | 'landscape' | 'portrait';
    identification: string | 'index' | 'resume' | 'ticket' | 'university' | 'fitness';
  };
}
const IndexFooter: React.FC<FooterProps> = ({ icons }) => {
  const loadTimer: number = 2000;
  const blockName: String = 'footer';
  const pageName: String = getIdentification();
  const mobile: boolean = useMediaQuery({ query: '(orientation: portrait)' });
  const desktop: boolean = useMediaQuery({ query: '(orientation: landscape)' });

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
  return (
    <>
      {/* How do I refresh the useEffect everytime the screen rotates? */}
      <footer id="index-footer" className="default-footer" style={{ zIndex: 1 }}>
        {desktop && (
          <>
            <MenuAnchor block="footer" items={anchors} style="icon" align="center" />
          </>
        )}
        {mobile && (
          <>
            <MenuButton info={buttons} style="fade" />
            <ButtonFade text="Projects" block="rightbar" align="right" view="downplay" icon={icons.projects} />
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
      const buttonElement = this as HTMLButtonElement;
      const mainContainer = document.querySelector('main[id*="main"]') as HTMLElement;
      $(mainContainer).animate({ scrollTop: `${scrollInfo(buttonElement, mainContainer, blockName)?.scrollTop}px` }, 1000);
    }
  });
  $(`#${containerElement} .rightbar-button`).on('click', function () {
    let rightbar = this.classList[0].split('-')[0] as string;
    showAside(rightbar);
  });
  console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
