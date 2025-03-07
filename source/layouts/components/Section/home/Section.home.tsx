// Section.home.tsx
import $ from 'jquery';
import React from 'react';
import './Section.home.scss';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';

import MenuButton from '../../Menu/bin/button/Menu.button';
import ButtonFade from '../../Button/bin/fade/Button.fade';

import { getSVG } from '../../../../modules/utilities/bin/getFile';
import getScroll from '../../../../modules/utilities/bin/getScroll';
import toggleAside from '../../../../modules/utilities/bin/toggleAside';
import toggleSection from '../../../../modules/utilities/bin/toggleSection';
import DivisionWorking from '../../Division/working/Division.working';
import getIdentification from '../../../../modules/utilities/getIdentification';

interface HomeProps {
  labelName: 'home';
  stateType: 'active' | 'enabled' | 'disabled';
  blockName: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;

  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
}
const SectionHome: React.FC<HomeProps> = ({ info, labelName, blockName, stateType }) => {
  const article = {
    title: 'Multimedia Programmer',
    subject: 'Welcome to my portfolio,',
    description: [
      `As a Multimedia Programmer, I create immersive websites, captivating animations, and interactive
       applications, blending cutting-edge technologies with an artistic vision for engaging experiences. My
       curiosity drives me to experiment with upcoming tools to stay ahead in this fast-paced world of computer
       technologies. I thrive in collaborative environments, and love to transform abstract ideas into impactful,
       long-lasting applications.`,
      `My strong work ethic and demonstrable skills equip me to excel in this field. I'm a quick learner, eager to
       prove myself and bring value to your team. So if you're willing to take a chance on me then we can create
       something extraordinary together. While I may not have a traditional "Computer Science De 😬 gree". Uhm, I
       shouldn't have used those air quotes...take a chance on me?`,
      `Apologies, I can make up for the wasted seconds by presenting you with 🎆effects🎉 and 🌟animations✨.`,
    ],
  };
  const jQueryTimer: number = 1000;
  const block = `${blockName}` as 'main';
  const label: string = `${labelName}` as 'home';
  const pageName: String = info.identification as String;
  useEffect(() => {
    const jQueryStart = () => {
      jQueryHome(pageName, blockName);
    };
    window.addEventListener('resize', jQueryStart);
    setTimeout(() => jQueryHome(pageName, blockName), jQueryTimer);
    return () => {
      window.removeEventListener('resize', jQueryStart);
    };
  }, [pageName, blockName]);
  let width = info.resolution.split('x')[0] as string;
  let height = info.resolution.split('x')[1] as string;
  let desktopElements = getElements('<desktop>') as {
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
    <section
      className={`${blockName}-${labelName}`}
      style={{ height: `${height}px`, width: `${width}px` }}
      id={stateType === 'active' ? `${blockName}-active` : ''}
    >
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {(useMediaQuery({ query: '(orientation: landscape)' }) as boolean) && (
        <>
          <div id={`${labelName}-foreground`} style={{ zIndex: 2 }}>
            <MenuButton criteria={desktopElements.criteria} input={desktopElements.buttons} />
            <span className={`${blockName}-description`}>
              <p>
                {article.description[0]}
                <br />
                <br />
                {article.description[1]}
                <br />
                <br />
                {article.description[2]}
              </p>
              <h3></h3>
            </span>
          </div>
          <div id={`${labelName}-midground`} style={{ zIndex: 1 }}>
            <aside className="profile">
              <img
                src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/main/source/assets/png-files/archive-images/tertius-roach/500x500%2C%20profile/profile-picture.png"
                alt="Tertius Roach"
              />
            </aside>
          </div>
          <div id={`${labelName}-background`} style={{ zIndex: 0 }}>
            <span className={`${blockName}-title`}>
              <h1 className="display-3" data-text="Software Developer">
                Software Developer
              </h1>
            </span>
            <span className={`${blockName}-subject`}>
              <h3>Welcome to my Portfolio,</h3>
            </span>
          </div>
        </>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {(useMediaQuery({ query: '(orientation: portrait)' }) as boolean) && (
        <>
          <div id={`${labelName}-foreground`} style={{ zIndex: 2, width: Number(width) - 64, height: Number(height) - 98 }}>
            <MenuButton criteria={mobileElements.criteria} input={mobileElements.buttons} />
            <span className={`${blockName}-description`}>
              <p>
                {article.description[0]}
                <br />
                <br />
                {article.description[1]}
                <br />
                <br />
                {article.description[2]}
              </p>
            </span>
          </div>
          <div id={`${labelName}-midground`} style={{ zIndex: 1, width: Number(width) - 64, height: Number(height) - 98 }}>
            <aside className="profile">
              <img
                src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/main/source/assets/png-files/archive-images/tertius-roach/500x500%2C%20profile/profile-picture.png"
                alt="Tertius Roach"
              />
            </aside>
          </div>
          <div id={`${labelName}-background`} style={{ zIndex: 0, width: Number(width) - 64, height: Number(height) - 98 }}>
            <span className={`${blockName}-title`}>
              <h6 className="display-6" data-text="The Colorless Pursuit of Function">
                Multimedia Programmer
              </h6>
            </span>
          </div>
        </>
      )}
    </section>
  );
};
export default SectionHome;
function getElements(orientation: '<desktop>' | '<mobile>') {
  switch (orientation) {
    case '<desktop>':
      return {
        buttons: [
          {
            href: '',
            state: '',
            text: 'Career',
            align: 'center',
            label: 'career',
            block: 'overlay',
            style: 'downplay',
            icon: getSVG('career'),
          },
          {
            href: '',
            state: '',
            align: 'center',
            text: 'Projects',
            label: 'projects',
            style: 'downplay',
            block: 'rightbar',
            icon: getSVG('projects'),
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
          label: 'home' | string;
          style: 'highlight' | 'downplay';
          align: 'left' | 'center' | 'right' | string;
          icon: { dark: string; medium: string; light: string };
          block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
        }[];
        criteria: {
          buildAxis: '<vertical>' | '<horizontal>';
          buildDesign: '<fade>' | '<icon>' | '<text>' | string;
          buildElement: '<buttons>' | '<anchors>' | '<ordered>' | '<unordered>';
        };
      };
    case '<mobile>':
      return {
        buttons: [
          {
            href: '',
            state: '',
            align: 'left',
            label: 'career',
            block: 'overlay',
            style: 'downplay',
            text: 'My Career',
            icon: getSVG('career'),
          },
          {
            href: '',
            state: '',
            block: 'main',
            align: 'right',
            label: 'contact',
            style: 'downplay',
            text: 'Contact Me',
            icon: getSVG('mobile'),
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
          label: 'home' | string;
          style: 'highlight' | 'downplay';
          align: 'left' | 'center' | 'right' | string;
          icon: { dark: string; medium: string; light: string };
          block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
        }[];
        criteria: {
          buildAxis: '<vertical>' | '<horizontal>';
          buildDesign: '<fade>' | '<icon>' | '<text>' | string;
          buildElement: '<buttons>' | '<anchors>' | '<ordered>' | '<unordered>';
        };
      };
  }
}
function jQueryHome(pageName: String, blockName: string) {
  const containerElement = `main#${pageName}-${blockName} section.${blockName}-home`;

  $(`${containerElement} button#${pageName}-career`).on('click', function () {
    let button = document.querySelector(`button#${pageName}-home`) as HTMLButtonElement;

    //--|🠋 Block Check 🠋|--//
    if (this.className.includes('overlay')) {
      console.log('TEST!!!!!');
      toggleSection(this);
      scrollMain(button, pageName);
    }
  });

  $(`${containerElement} button#${pageName}-projects`).on('click', function () {
    let button = document.querySelector(`button#${pageName}-home`) as HTMLButtonElement;
    if (this.className.split('-')[0] === 'rightbar') {
      var rightbar = this.className.split('-')[0] as 'rightbar';
      scrollMain(button, pageName);
      toggleAside(`${pageName}-${rightbar}`);
    }
  });

  $(`${containerElement} button#${pageName}-contact`).on('click', function () {
    let button = this as HTMLButtonElement;
    scrollMain(button, pageName);
  });
  $(`${containerElement} span.${blockName}-description`).on('click', function () {
    let button = document.querySelector(`button#${pageName}-home`) as HTMLButtonElement;
    scrollMain(button, pageName);
  });
  function scrollMain(button: HTMLButtonElement, pageName: String) {
    let container = document.querySelector(`#${pageName}-main`) as HTMLElement;
    let scrollResult = getScroll(container, button);
    if (scrollResult && scrollResult.scrollTop !== undefined) {
      $(container).animate({ scrollTop: `${scrollResult.scrollTop}px` }, 1000);
    }
  }
  // console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
