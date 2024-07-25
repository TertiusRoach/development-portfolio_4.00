// IndexHeader.tsx
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
import MenuHorizontal from '../../../components/Menu/horizontal/Menu.horizontal';

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
  const desktopButtons = {
    criteria: {
      buildAxis: '<horizontal>',
      buildDesign: '<fade>',
      buildElement: '<buttons>',
    },
    information: [
      {
        text: 'Home',
        href: '',
        state: 'active',
        label: 'home',
        style: 'downplay',
        align: 'left',
        icon: getSVG('home'),
        block: 'header',
      },
      {
        text: 'Home',
        href: '',
        state: 'active',
        label: 'home',
        style: 'downplay',
        align: 'left',
        icon: getSVG('home'),
        block: 'header',
      },
      {
        text: 'Home',
        href: '',
        state: 'active',
        label: 'home',
        style: 'downplay',
        align: 'left',
        icon: getSVG('home'),
        block: 'header',
      },
    ],
  } as {
    criteria: {
      buildAxis: '<vertical>' | '<horizontal>';
      buildDesign: '<fade>' | '<icon>' | '<text>' | string;
      buildElement: '<buttons>' | '<anchors>' | '<ordered>' | '<unordered>';
    };
    information: {
      text?: string;
      href?: string;
      state?: 'active' | '';
      label?: 'home' | string;
      style?: 'highlight' | 'downplay';
      align?: 'left' | 'center' | 'right' | string;
      icon?: { dark: string; medium: string; light: string };
      block?: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
    }[];
  };
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
  let mobileDevice: boolean = useMediaQuery({ query: '(orientation: portrait)' });
  let desktopDevice: boolean = useMediaQuery({ query: '(orientation: landscape)' });
  return (
    <header id="index-header" className="default-header" style={{ zIndex: 2 }}>
      {desktopDevice && (
        <>
          <img
            className="signature-adjacent"
            src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/45afd7cf137b42f3c936f230fdd8c58371f10d20/source/assets/svg-files/archive-images/tertius-roach/signature-adjacent/primary-light.svg"
            alt="Tertius Roach"
          />
          <MenuHorizontal
            criteria={
              desktopButtons.criteria as {
                buildAxis: '<vertical>' | '<horizontal>';
                buildDesign: '<fade>' | '<icon>' | '<text>' | string;
                buildElement: '<buttons>' | '<anchors>' | '<ordered>' | '<unordered>' | string;
              }
            }
            information={
              desktopButtons.information as {
                label: 'home' | string;
                style: 'highlight' | 'downplay';
                align: 'left' | 'center' | 'right' | string;
                icon: { dark: string; medium: string; light: string };
                block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;

                text?: string | '';
                href?: string | '';
                state?: 'active' | '';
              }[]
            }
          />
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
