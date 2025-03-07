// IndexHeader.tsx
import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import { getSVG } from '../../../../modules/utilities/bin/getFile';
import getScroll from '../../../../modules/utilities/bin/getScroll';
import MenuButton from '../../../components/Menu/bin/button/Menu.button';
import getResolution from '../../../../modules/utilities/getResolution';
import getOrientation from '../../../../modules/utilities/getOrientation';
import getIdentification from '../../../../modules/utilities/getIdentification';
interface HeaderProps {
  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
}
const ResumeHeader: React.FC<HeaderProps> = ({ info }) => {
  const blockName = 'header';
  const jQueryTimer: number = 0;
  const pageName = info.identification as String;
  useEffect(() => {
    let jQueryLoad = () => {
      window.addEventListener('resize', jQueryLoad);
      setTimeout(() => jQueryHeader(pageName, blockName), jQueryTimer);
      return () => {
        window.removeEventListener('resize', jQueryLoad);
      };
    };
    jQueryLoad();
  }, []);
  let desktopElements = getElements('<desktop>') as {
    criteria: {
      buildAxis: '<vertical>' | '<horizontal>';
      buildDesign: '<fade>' | '<icon>' | '<text>';
      buildElement: '<buttons>' | '<anchors>' | '<ordered>' | '<unordered>';
    };
    buttons: {
      label: 'home' | string;
      style: 'highlight' | 'downplay';
      align: 'left' | 'center' | 'right' | string;
      icon: { dark: string; medium: string; light: string };
      block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;

      text?: string;
      href?: string;
      state?: 'active' | '';
    }[];
  };
  return (
    <header id="resume-header" className="default-header" style={{ zIndex: 2 }}>
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {(useMediaQuery({ query: '(orientation: landscape)' }) as boolean) && (
        <>
          <img
            className="signature-adjacent"
            src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/45afd7cf137b42f3c936f230fdd8c58371f10d20/source/assets/svg-files/archive-images/tertius-roach/signature-adjacent/primary-light.svg"
            alt="Tertius Roach"
          />
          <MenuButton criteria={desktopElements.criteria} input={desktopElements.buttons} />
        </>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {(useMediaQuery({ query: '(orientation: portrait)' }) as boolean) && (
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
export default ResumeHeader;
function getElements(orientation: '<desktop>' | '<mobile>') {
  switch (orientation) {
    case '<desktop>':
      return {
        buttons: [
          {
            href: '',
            text: 'Home',
            label: 'home',
            align: 'left',
            state: 'active',
            block: 'header',
            style: 'downplay',
            icon: getSVG('home'),
          },
          {
            href: '',
            state: '',
            text: 'Skills',
            label: 'skills',
            align: 'center',
            block: 'header',
            style: 'downplay',
            icon: getSVG('skills'),
          },
          {
            href: '',
            state: '',
            align: 'right',
            text: 'Contact',
            block: 'header',
            label: 'contact',
            style: 'downplay',
            icon: getSVG('contact'),
          },
        ],
        criteria: {
          buildAxis: '<horizontal>',
          buildDesign: '<fade>',
          buildElement: '<buttons>',
        },
      } as {
        buttons: {
          text?: string;
          href?: string;
          state?: 'active' | '';
          label?: 'home' | string;
          style?: 'highlight' | 'downplay';
          align?: 'left' | 'center' | 'right' | string;
          icon?: { dark: string; medium: string; light: string };
          block?: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
        }[];
        criteria: {
          buildAxis: '<vertical>' | '<horizontal>';
          buildDesign: '<fade>' | '<icon>' | '<text>';
          buildElement: '<buttons>' | '<anchors>' | '<ordered>' | '<unordered>';
        };
      };
    case '<mobile>':
      return [
        {
          state: '',
          align: 'left',
          label: 'career',
          block: 'overlay',
          text: 'My Career',
          style: 'downplay',
          icon: getSVG('career') as { dark: 'dark'; medium: 'medium'; light: 'light' },
        },
        {
          state: '',
          block: 'main',
          align: 'right',
          label: 'contact',
          style: 'downplay',
          text: 'Contact Me',
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
  }
}
function jQueryHeader(pageName: String, blockName: String) {
  const containerElement = `${pageName}-${blockName}`;
  $(`header#${containerElement} menu button[id*='home']`).on('click', function () {
    scrollMain(this as HTMLButtonElement, pageName, blockName);
  });
  $(`header#${containerElement} menu button[id*='skills']`).on('click', function () {
    scrollMain(this as HTMLButtonElement, pageName, blockName);
  });
  $(`header#${containerElement} menu button[id*='contact']`).on('click', function () {
    scrollMain(this as HTMLButtonElement, pageName, blockName);
  });
  console.log(`//--|🠊 Refreshed: jQuery <${blockName}> 🠈|--//`);
}

function scrollMain(button: HTMLButtonElement, pageName: String, blockName: String) {
  const container = document.querySelector(`#${pageName}-main`) as HTMLElement;
  const scrollResult = getScroll(container, button);
  if (scrollResult && scrollResult.scrollTop !== undefined) {
    let enable = button as HTMLButtonElement;
    let disable = document.querySelector(`#${pageName}-${blockName} menu button[id*="active"]`) as HTMLButtonElement;
    if (enable !== disable) {
      enable.id = `${enable.id}-active`;
      disable.id = `${getIdentification()}-${disable.id.split('-')[1]}`;
    }
    $(container).animate({ scrollTop: `${scrollResult.scrollTop}px` }, 1000);
  }
}
