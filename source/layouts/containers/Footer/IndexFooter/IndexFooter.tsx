import $ from 'jquery';
import React, { useEffect } from 'react';
import { getSVG } from '../../../../scripts';
import { useMediaQuery } from 'react-responsive';

import MenuAnchor from '../../../components/Menu/anchor/Menu.anchor';
import MenuButton from '../../../components/Menu/button/Menu.button';
import ButtonFade from '../../../components/Button/fade/Button.fade';

import { getResolution, getOrientation, getIdentification, getScroll, showAside } from '../../../../scripts/index';
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

  let buttons = [
    {
      text: 'Home',
      label: 'home',
      align: 'center',
      block: 'footer',
      style: 'highlight',
      icon: getSVG('career') as { dark: string; medium: string; light: string },
    },
    {
      icon: getSVG('leftbar') as { dark: string; medium: string; light: string },
      text: 'Skills',
      label: 'skills',
      align: 'center',
      block: 'footer',
      style: 'highlight',
    },
    {
      text: 'Contact',
      label: 'contact',
      align: 'center',
      block: 'footer',
      style: 'highlight',
      icon: getSVG('projects') as { dark: string; medium: string; light: string },
    },
  ];
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
            <MenuButton info={buttons} selectDesign="fade" />
            <ButtonFade
              text="Projects"
              block="rightbar"
              align="right"
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
      const buttonElement = this as HTMLButtonElement;
      const mainContainer = document.querySelector('main[id*="main"]') as HTMLElement;
      $(mainContainer).animate({ scrollTop: `${getScroll(buttonElement, mainContainer, blockName)?.scrollTop}px` }, 1000);
    }
  });
  $(`#${containerElement} .rightbar-button`).on('click', function () {
    let rightbar = this.classList[0].split('-')[0] as string;
    showAside(rightbar);
  });
  console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
