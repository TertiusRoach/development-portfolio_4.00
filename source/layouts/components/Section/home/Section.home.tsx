// Section.home.tsx
import $ from 'jquery';
import React from 'react';
import './Section.home.scss';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';

import MenuButton from '../../Menu/button/Menu.button';
import ButtonFade from '../../Button/fade/Button.fade';

import { getSVG } from '../../../../modules/utilities/getFile';
import setActive from '../../../../modules/utilities/setActive';
import getScroll from '../../../../modules/utilities/getScroll';
import showAside from '../../../../modules/utilities/showAside';
import showSection from '../../../../modules/utilities/showSection';
import DivisionWorking from '../../Division/working/Division.working';
import getIdentification from '../../../../modules/utilities/getIdentification';

interface HomeProps {
  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
  labelName: 'home';
  stateType: 'active' | '';
  blockName: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
}
const SectionHome: React.FC<HomeProps> = ({ info, labelName, blockName, stateType }) => {
  const jQueryTimer: number = 1000;
  const block: 'main' | string = `${blockName}`;
  const page: String = info.identification as String;

  useEffect(() => {
    let handleResize = () => {
      jQueryHome(page, block);
    };

    window.addEventListener('resize', handleResize);
    setTimeout(() => jQueryHome(page, block), jQueryTimer);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
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
  let mobileDevice = getElements('<mobile>') as {
    criteria: {
      buildAxis: '<vertical>' | '<horizontal>';
      buildDesign: '<fade>' | '<icon>' | '<text>' | string;
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

  let width = Number(info.resolution.split('x')[0]) as Number;
  let height = Number(info.resolution.split('x')[1]) as Number;

  return (
    <section
      className={`${blockName}-${labelName}`}
      style={{ height: `${height}px`, width: `${width}px` }}
      id={stateType === 'active' ? `${blockName}-active` : ''}
    >
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {(useMediaQuery({ query: '(orientation: landscape)' }) as boolean) && (
        <>
          <div id={`${labelName}-foreground`} style={{ zIndex: 2 }}>
            <MenuButton criteria={desktopDevice.criteria} information={desktopDevice.information} />
          </div>
          <div id={`${labelName}-midground`} style={{ zIndex: 1 }}></div>
          <div id={`${labelName}-background`} style={{ zIndex: 0 }}></div>
        </>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {(useMediaQuery({ query: '(orientation: portrait)' }) as boolean) && (
        <>
          <div style={{ zIndex: 2 }} id={`${labelName}-foreground`}>
            {/* <MenuButton selectInfo={mobileButtons} selectAxis="horizontal" selectDesign="fade" /> */}
          </div>
          <div style={{ zIndex: 1 }} id={`${labelName}-midground`}>
            <span className="home-title"></span>
            <span className="home-subject"></span>
            <span className="home-description"></span>
          </div>
          <div style={{ zIndex: 0 }} id={`${labelName}-background`}>
            <span className="home-profile"></span>
          </div>
        </>
      )}
    </section>
  );
};
export default SectionHome;
function jQueryHome(pageName: String, blockName: string) {
  const containerElement = `${pageName}-${blockName}`;
  $(`#${containerElement} section`).on('click', function (event) {
    let navigation = ['header', 'footer'];
    let mainContainer = document.querySelector(`#${pageName}-main`) as HTMLElement;
    let parent = event.target.parentElement?.parentElement as HTMLButtonElement;
    let tagName = parent.tagName as 'BUTTON' | string;
    if (tagName === 'BUTTON') {
      for (let i = 0; i < navigation.length; i++) {
        var labelName = parent.classList[0].split('-')[1] as string;
        var buttonElement = document.querySelector(`button[class*="${labelName}"]`) as HTMLButtonElement;
        $(mainContainer).animate({ scrollTop: `${getScroll(buttonElement, mainContainer)?.scrollTop as Number}px` }, 750);
      }
    } else {
      var buttonElement = this as HTMLButtonElement;
      for (let i = 0; i < navigation.length; i++) {
        setActive(this as HTMLButtonElement, navigation[i]);
      }
      $(mainContainer).animate({ scrollTop: `${getScroll(buttonElement, mainContainer)?.scrollTop as Number}px` }, 250);
    }
  });
  $(`#${containerElement} .rightbar-projects`).on('click', function () {
    const rightbar = this.classList[0].split('-')[0];
    if (rightbar.includes('rightbar')) {
      showAside(rightbar);
    }
  });
  $(`#${containerElement} button[class*="leftbar"]`).on('click', function () {
    const rightbar = this.classList[0].split('-')[0];
    if (rightbar.includes('leftbar')) {
      showAside(rightbar);
    }
  });
  $(`#${containerElement} .overlay-career`).on('click', function () {
    const overlay = this.classList[0].split('-')[0];
    if (overlay.includes('overlay')) {
      showSection(`${pageName}`, overlay);
    }
  });
  console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
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
            block: 'main',
          },
          {
            text: 'Skills',
            href: '',
            state: 'active',
            label: 'skills',
            style: 'downplay',
            align: 'right',
            icon: getSVG('skills'),
            block: 'main',
          },
          {
            text: 'Contact',
            href: '',
            state: 'active',
            label: 'contact',
            style: 'downplay',
            align: 'center',
            icon: getSVG('contact'),
            block: 'main',
          },
          // {
          //   text: 'Home',
          //   href: '',
          //   state: 'active',
          //   label: 'home',
          //   style: 'downplay',
          //   align: 'left',
          //   icon: getSVG('home'),
          //   block: 'main',
          // },
          // {
          //   text: 'Skills',
          //   href: '',
          //   state: 'active',
          //   label: 'skills',
          //   style: 'downplay',
          //   align: 'main',
          //   icon: getSVG('skills'),
          //   block: 'main',
          // },
          // {
          //   text: 'Contact',
          //   href: '',
          //   state: 'active',
          //   label: 'contact',
          //   style: 'downplay',
          //   align: 'left',
          //   icon: getSVG('contact'),
          //   block: 'main',
          // },
          // {
          //   text: 'Home',
          //   href: '',
          //   state: 'active',
          //   label: 'home',
          //   style: 'downplay',
          //   align: 'left',
          //   icon: getSVG('home'),
          //   block: 'main',
          // },
          // {
          //   text: 'Skills',
          //   href: '',
          //   state: 'active',
          //   label: 'skills',
          //   style: 'downplay',
          //   align: 'main',
          //   icon: getSVG('skills'),
          //   block: 'main',
          // },
          // {
          //   text: 'Contact',
          //   href: '',
          //   state: 'active',
          //   label: 'contact',
          //   style: 'downplay',
          //   align: 'left',
          //   icon: getSVG('contact'),
          //   block: 'main',
          // },
          // {
          //   text: 'Home',
          //   href: '',
          //   state: 'active',
          //   label: 'home',
          //   style: 'downplay',
          //   align: 'left',
          //   icon: getSVG('home'),
          //   block: 'main',
          // },
          // {
          //   text: 'Skills',
          //   href: '',
          //   state: 'active',
          //   label: 'skills',
          //   style: 'downplay',
          //   align: 'main',
          //   icon: getSVG('skills'),
          //   block: 'main',
          // },
          // {
          //   text: 'Contact',
          //   href: '',
          //   state: 'active',
          //   label: 'contact',
          //   style: 'downplay',
          //   align: 'left',
          //   icon: getSVG('contact'),
          //   block: 'main',
          // },
        ],
        criteria: {
          buildDesign: '<fade>',
          buildAxis: '<vertical>',
          buildElement: '<buttons>',
        },
      } as {
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
        criteria: {
          buildAxis: '<vertical>' | '<horizontal>';
          buildDesign: '<fade>' | '<icon>' | '<text>' | string;
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
