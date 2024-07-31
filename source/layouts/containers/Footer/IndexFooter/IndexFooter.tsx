// IndexFooter.tsx
//--|🠋 Frameworks 🠋|--//
import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
//--|🠉 Frameworks 🠉|--//
//--|🠋 Utilities 🠋|--//
import { getSVG } from '../../../../modules/utilities/getFile';
import showAside from '../../../../modules/utilities/showAside';
import getScroll from '../../../../modules/utilities/getScroll';
import { setButton } from '../../../../modules/utilities/setActive';
import getResolution from '../../../../modules/utilities/getResolution';
import getOrientation from '../../../../modules/utilities/getOrientation';
import getIdentification from '../../../../modules/utilities/getIdentification';
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

const IndexFooter: React.FC<FooterProps> = () => {
  const loadTimer: number = 2000;
  const blockName: String = 'footer';
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
  let anchors = [
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
  ] as {
    href: string;
    text: string;
    state: 'active' | '';
    style: 'downplay' | 'highlight';
    align: 'left' | 'center' | 'right' | string;
    label: 'home' | 'skills' | 'contact' | string;
    target: '_blank' | '_parent' | '_self' | '_top' | string;
    icon: { dark: 'dark'; medium: 'medium'; light: 'light' };
    block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
  }[];
  let buttons = [
    {
      text: 'View Leftbar',
      label: 'lefbar',
      align: 'left',
      block: 'footer',
      icon: getSVG('leftbar') as { dark: 'dark'; medium: 'medium'; light: 'light' },
    },
    {
      text: 'View Overlay',
      label: 'overlay',
      align: 'center',
      block: 'footer',
      icon: getSVG('overlay') as { dark: 'dark'; medium: 'medium'; light: 'light' },
    },
    {
      text: 'View Rightbar',
      label: 'rightbar',
      align: 'right',
      block: 'footer',
      icon: getSVG('rightbar') as { dark: 'dark'; medium: 'medium'; light: 'light' },
    },
  ] as {
    text: string;
    icon: { dark: string; medium: string; light: string };
    label: 'rightbar' | string;
    style: 'highlight' | 'downplay';
    align: 'left' | 'center' | 'right' | string;
    block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
  }[];

  let desktopDevice = getElements('<desktop>') as {
    criteria: {
      buildAxis: '<vertical>' | '<horizontal>';
      buildDesign: '<fade>' | '<icon>' | '<text>';
      buildElement: '<buttons>' | '<anchors>' | '<ordered>' | '<unordered>';
    };
    information: {
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
    <footer id="index-footer" className="default-footer" style={{ zIndex: 1 }}>
      {(useMediaQuery({ query: '(orientation: landscape)' }) as boolean) && (
        <>
          <MenuAnchor selectDesign="icon" info={anchors} />
        </>
      )}
      {(useMediaQuery({ query: '(orientation: portrait)' }) as boolean) && (
        <>
          <MenuButton criteria={desktopDevice.criteria} input={desktopDevice.information} />

          {/* <MenuButton selectDesign="fade" info={buttons} /> */}

          {/* <ButtonFade
            state="active"
            text="Home"
            label="home"
            align="left"
            block="footer"
            style="downplay"
            icon={getSVG('home') as { dark: 'dark'; medium: 'medium'; light: 'light' }}
          /> */}
          {/* <ButtonFade
            state=""
            text="Skills"
            label="skills"
            block="footer"
            align="center"
            style="downplay"
            icon={getSVG('skills') as { dark: string; medium: string; light: string }}
          /> */}
          {/* <ButtonFade
            state=""
            align="right"
            text="Projects"
            block="rightbar"
            label="projects"
            style="downplay"
            icon={getSVG('projects') as { dark: string; medium: string; light: string }}
          /> */}
        </>
      )}
    </footer>
  );
};
export default IndexFooter;

function jQueryFooter(pageName: String, blockName: String) {
  const containerElement = `${pageName}-${blockName}`;
  $(`#${containerElement} button[class*="${blockName}"]`).on('click', function () {
    if (!this.id) {
      let buttonElement = this as HTMLButtonElement;
      let mainContainer = document.querySelector(`#${pageName}-main`) as HTMLElement;
      let scrollPixels = getScroll(buttonElement, mainContainer)?.scrollTop as Number;
      $(mainContainer).animate({ scrollTop: `${scrollPixels}px` }, 1000);
    }
  });
  $(`#${containerElement} .rightbar-projects`).on('click', function () {
    let rightbar = document.querySelector(`#${pageName}-rightbar`) as HTMLElement;
    showAside(rightbar.classList[0].split('-')[1] as string);

    $(`#${pageName}-header`).addClass('disabled');
    $(`#${pageName}-main`).addClass('disabled');
    $(`#${pageName}-footer`).addClass('disabled');
  });
  console.log(`//--|🠊 Refreshed: jQuery <${blockName}> 🠈|--//`);
}
function getElements(orientation: '<desktop>' | '<mobile>') {
  switch (orientation) {
    case '<desktop>':
      return {
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
          // -- //
          {
            text: 'Skills',
            href: '',
            state: '',
            label: 'skills',
            style: 'highlight',
            align: 'center',
            icon: getSVG('skills'),
            block: 'header',
          },
          // -- //
          {
            text: 'Contact',
            href: '',
            state: '',
            label: 'contact',
            style: 'downplay',
            align: 'right',
            icon: getSVG('contact'),
            block: 'header',
          },
          // -- //
          // {
          //   text: 'Home',
          //   href: '',
          //   state: 'active',
          //   label: 'home',
          //   style: 'downplay',
          //   align: 'left',
          //   icon: getSVG('home'),
          //   block: 'header',
          // },
          // -- //
          // {
          //   text: 'Skills',
          //   href: '',
          //   state: '',
          //   label: 'skills',
          //   style: 'downplay',
          //   align: 'left',
          //   icon: getSVG('skills'),
          //   block: 'header',
          // },
          // -- //
          // {
          //   text: 'Contact',
          //   href: '',
          //   state: '',
          //   label: 'contact',
          //   style: 'downplay',
          //   align: 'left',
          //   icon: getSVG('contact'),
          //   block: 'header',
          // },
          // -- //
          /*
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
                // -- //
          {
            text: 'Skills',
            href: '',
            state: '',
            label: 'skills',
            style: 'downplay',
            align: 'left',
            icon: getSVG('skills'),
            block: 'header',
          },
                // -- //
          {
            text: 'Contact',
            href: '',
            state: '',
            label: 'contact',
            style: 'downplay',
            align: 'left',
            icon: getSVG('contact'),
            block: 'header',
          },
                // -- //
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
                // -- //
          {
            text: 'Skills',
            href: '',
            state: '',
            label: 'skills',
            style: 'downplay',
            align: 'left',
            icon: getSVG('skills'),
            block: 'header',
          },
                // -- //
          {
            text: 'Contact',
            href: '',
            state: '',
            label: 'contact',
            style: 'downplay',
            align: 'left',
            icon: getSVG('contact'),
            block: 'header',
          },
          */
        ],
        criteria: {
          buildAxis: '<horizontal>',
          buildDesign: '<fade>',
          buildElement: '<buttons>',
        },
      } as {
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
