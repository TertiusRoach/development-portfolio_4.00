// Section.home.tsx
import $ from 'jquery';
import React from 'react';
import './Section.home.scss';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';

import MenuButton from '../../Menu/button/Menu.button';
import ButtonFade from '../../Button/fade/Button.fade';

import { getSVG } from '../../../../modules/utilities/getFile';
import { setButton } from '../../../../modules/utilities/setActive';
import scrollMain from '../../../../modules/utilities/scrollMain';
import { toggleAside } from '../../../../modules/utilities/toggleAside';
import { toggleSection } from '../../../../modules/utilities/toggleSection';
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
  const jQueryTimer: number = 1000;
  const block = `${blockName}` as 'main';
  const label: string = `${labelName}` as 'home';
  const page: String = info.identification as String;
  useEffect(() => {
    let jQueryStart = () => {
      jQueryHome(page, block);
    };
    window.addEventListener('resize', jQueryStart);
    setTimeout(() => jQueryHome(page, block), jQueryTimer);
    return () => {
      window.removeEventListener('resize', jQueryStart);
    };
  }, []);
  let width = info.resolution.split('x')[0] as string;
  let height = info.resolution.split('x')[1] as string;

  let article = {
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
      `Well this pitch took an unexpected turn.`,
    ],
  };

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
            <span className={`${block}-description`}>
              <p>
                {article.description[0]}
                <br />
                <br />
                {article.description[1]}
              </p>
              <h3>{article.description[2]}</h3>
            </span>
          </div>
          <div id={`${labelName}-midground`} style={{ zIndex: 1 }}>
            {/* I'm done with the noir! It was a phase! */}
            {/* <aside className="profile">
              <img
                src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/main/source/assets/png-files/index-page/1280x1280%2C%20noir.png"
                alt=""
              />
            </aside> */}
          </div>
          <div id={`${labelName}-background`} style={{ zIndex: 0 }}>
            <span className={`${block}-title`}>
              <h3 className="display-3" data-text="The Colorless Pursuit of Function">
                Multimedia Programmer
              </h3>
            </span>
            <span className={`${block}-subject`}>
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
            <span className={`${block}-description`}>
              <p>
                {article.description[0]}
                <br />
                <br />
                {article.description[1]}
              </p>
              <h3>{article.description[2]}</h3>
            </span>
          </div>
          <div id={`${labelName}-midground`} style={{ zIndex: 1, width: Number(width) - 64, height: Number(height) - 98 }}>
            {/* <aside className="profile">
              <img
                src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/main/source/assets/png-files/index-page/1280x1280%2C%20noir.png"
                alt=""
              />
            </aside> */}
            {/* It was a phase. */}
          </div>
          <div id={`${labelName}-background`} style={{ zIndex: 0, width: Number(width) - 64, height: Number(height) - 98 }}>
            <span className={`${block}-title`}>
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
            align: 'left',
            block: 'main',
            label: 'leftbar',
            style: 'downplay',
            text: 'View Leftbar',
            icon: getSVG('leftbar'),
          },
          {
            href: '',
            state: '',
            block: 'main',
            align: 'center',
            label: 'overlay',
            style: 'highlight',
            text: 'View Overlay',
            icon: getSVG('overlay'),
          },
          {
            href: '',
            state: '',
            block: 'main',
            align: 'right',
            style: 'downplay',
            label: 'rightbar',
            text: 'View Rightbar',
            icon: getSVG('rightbar'),
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
            block: 'main',
            label: 'leftbar',
            style: 'downplay',
            text: 'View Leftbar',
            icon: getSVG('leftbar'),
          },
          {
            href: '',
            state: '',
            block: 'main',
            align: 'center',
            label: 'overlay',
            style: 'highlight',
            text: 'View Overlay',
            icon: getSVG('overlay'),
          },
          {
            href: '',
            state: '',
            block: 'main',
            align: 'right',
            style: 'downplay',
            label: 'rightbar',
            text: 'View Rightbar',
            icon: getSVG('rightbar'),
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
  const containerElement = `${pageName}-${blockName}`;

  $(`#${containerElement} button[id*='leftbar']`).on('click', function () {
    if (this.id.includes('leftbar')) {
      toggleAside(this.id);
    }
  });
  $(`#${containerElement} button[id*='rightbar']`).on('click', function () {
    if (this.id.includes('rightbar')) {
      toggleAside(this.id);
    }
  });
  $(`#${containerElement} button[id*="overlay"]`).on('click', function () {
    if (this.id.includes('overlay')) {
      toggleSection(this.id);
    }
  });
  console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
