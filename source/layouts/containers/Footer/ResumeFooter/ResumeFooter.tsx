// IndexFooter.tsx
//--|🠋 Frameworks 🠋|--//
import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
//--|🠉 Frameworks 🠉|--//
//--|🠋 Utilities 🠋|--//
import { getSVG } from '../../../../modules/utilities/bin/getFile';
import getScroll from '../../../../modules/utilities/bin/getScroll';
import toggleAside from '../../../../modules/utilities/bin/toggleAside';
import getResolution from '../../../../modules/utilities/getResolution';
import getOrientation from '../../../../modules/utilities/bin/getOrientation';
import getIdentification from '../../../../modules/utilities/bin/getIdentification';

//--|🠉 Utilities 🠉|--//
//--|🠋 Components 🠋|--//
import MenuAnchor from '../../../components/Menu/anchor/Menu.anchor';
import MenuButton from '../../../components/Menu/button/Menu.button';
import ButtonFade from '../../../components/Button/fade/Button.fade';
//--|🠉 Components 🠉|--//
//--|🠋 Design 🠋|--//
//--|🠉 Design 🠉|--//
interface FooterProps {
  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
}

const ResumeFooter: React.FC<FooterProps> = () => {
  function getElements(orientation: '<desktop>' | '<mobile>') {
    switch (orientation) {
      case '<desktop>':
        return {
          anchors: [
            {
              state: '',
              text: 'GitHub',
              label: 'github',
              target: '_blank',
              align: 'center',
              block: 'footer',
              style: 'downplay',
              href: 'https://github.com/TertiusRoach',
              icon: getSVG('github') as { dark: string; medium: string; light: string },
            },
            {
              state: '',
              text: 'LinkedIn',
              target: '_blank',
              label: 'linkedin',
              align: 'center',
              block: 'footer',
              style: 'highlight',
              href: 'https://www.linkedin.com/in/tertius-roach/',
              icon: getSVG('linkedin') as { dark: string; medium: string; light: string },
            },
            {
              state: '',
              text: 'YouTube',
              label: 'youtube',
              target: '_blank',
              align: 'center',
              block: 'footer',
              style: 'downplay',
              href: 'https://www.youtube.com/@TertiusRoach',
              icon: getSVG('youtube') as { dark: string; medium: string; light: string },
            },
          ],
          criteria: {
            buildAxis: '<horizontal>',
            buildDesign: '<fade>',
            buildElement: '<buttons>',
          },
        };
      case '<mobile>':
        return {
          buttons: [
            {
              href: '',
              text: 'Home',
              label: 'home',
              align: 'left',
              block: 'footer',
              state: 'active',
              style: 'downplay',
              icon: getSVG('home'),
            },
            {
              href: '',
              state: '',
              text: 'Skills',
              label: 'skills',
              align: 'center',
              block: 'footer',
              style: 'downplay',
              icon: getSVG('skills'),
            },
            {
              href: '',
              state: '',
              align: 'right',
              text: 'Profile',
              block: 'rightbar',
              label: 'projects',
              style: 'downplay',
              icon: getSVG('profile'),
            },
          ],
          criteria: {
            buildDesign: '<fade>',
            buildAxis: '<horizontal>',
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
    }
  }
  let loadTimer: number = 2000;
  const blockName: string = 'footer';
  const pageName: String = getIdentification();
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

  let desktopElements = getElements('<desktop>') as {
    anchors: {
      label: 'home' | string;
      style: 'highlight' | 'downplay';
      align: 'left' | 'center' | 'right' | string;
      icon: { dark: string; medium: string; light: string };
      block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;

      text?: string;
      href?: string;
      state?: 'active' | '';
    }[];
    criteria: {
      buildAxis: '<vertical>' | '<horizontal>';
      buildDesign: '<fade>' | '<icon>' | '<text>';
      buildElement: '<buttons>' | '<anchors>' | '<ordered>' | '<unordered>';
    };
  };
  let mobileElements = getElements('<mobile>') as {
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
    criteria: {
      buildAxis: '<vertical>' | '<horizontal>';
      buildDesign: '<fade>' | '<icon>' | '<text>';
      buildElement: '<buttons>' | '<anchors>' | '<ordered>' | '<unordered>';
    };
  };
  return (
    <footer id="resume-footer" className="default-footer" style={{ zIndex: 1 }}>
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {(useMediaQuery({ query: '(orientation: landscape)' }) as boolean) && (
        <>
          <MenuAnchor criteria={desktopElements.criteria} input={desktopElements.anchors} />
        </>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {(useMediaQuery({ query: '(orientation: portrait)' }) as boolean) && (
        <>
          <MenuButton criteria={mobileElements.criteria} input={mobileElements.buttons} />
        </>
      )}
    </footer>
  );
};
export default ResumeFooter;
function jQueryFooter(pageName: String, blockName: string) {
  const containerElement = `${pageName}-${blockName}`;
  $(`footer#${containerElement} menu button[id*='home']`).on('click', function () {
    scrollMain(this as HTMLButtonElement, pageName, blockName);
  });
  $(`footer#${containerElement} menu button[id*='skills']`).on('click', function () {
    scrollMain(this as HTMLButtonElement, pageName, blockName);
  });
  $(`footer#${containerElement} menu button[id*='contact']`).on('click', function () {
    scrollMain(this as HTMLButtonElement, pageName, blockName);
  });

  $(`#${containerElement} #${pageName}-projects`).on('click', function () {
    if (this.className.split('-')[0] === 'rightbar') {
      $(`#${pageName}-main`).animate({ scrollTop: `0px` }, 500);
      toggleAside(`${pageName}-${this.className.split('-')[0] as 'rightbar'}`);
    }
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
