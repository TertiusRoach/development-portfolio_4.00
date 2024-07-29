// Section.home.tsx
import $ from 'jquery';
import React from 'react';
import './Section.noir.scss';
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

interface NoirProps {
  labelName: 'noir';
  stateType: 'active' | '';
  blockName: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;

  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
}
const SectionNoir: React.FC<NoirProps> = ({ info, labelName, blockName, stateType }) => {
  const jQueryTimer: number = 1000;
  const block = `${blockName}` as 'main';
  const label: string = `${labelName}` as 'noir';
  const page: String = info.identification as String;

  useEffect(() => {
    let jQueryStart = () => {
      jQueryNoir(page, block);
    };
    window.addEventListener('resize', jQueryStart);
    setTimeout(() => jQueryNoir(page, block), jQueryTimer);
    return () => {
      window.removeEventListener('resize', jQueryStart);
    };
  }, []);

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
  let width = info.resolution.split('x')[0] as string;
  let height = info.resolution.split('x')[1] as string;
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
            <MenuButton criteria={desktopElements.criteria} information={desktopElements.buttons} />
            <span className={`${block}-description`}>
              <p>
                {/* Improve, 1960' mob drama */}
                In the smoky, neon-lit underworld of the city, Jack Marlowe was a figure man, a quiet soul in a bustling
                throng. While others chased the big dream, Marlowe was more interested in the cold facts. A lone wolf in a
                pack of hustlers, he navigated the shadowy alleys of the newfangled computing world, his mind a keen blade
                for numbers and logic.
                <br />
                <br />
                {/* Humor is key */}
                Marlowe was a minimalist, a man who believed in plain talk and straight deals. In a world of flash and
                promises, he was the steady hand, crafting sound solutions from raw data. From Wall Street titans to
                small-time gamblers, they sought Marlowe when the figures didn't jive. He was the fixer, the problem solver,
                the man who could turn a losing hand into a winning play.
                <br />
                <br />
                {/* End with something recruiters want to hear */}
                With a mind like a steel trap, Marlowe could spot a bad bet from across a crowded room. His reputation as a
                numbers wizard grew, and soon he was the go-to man for anyone wanting to stay ahead of the curve. In a world
                of quick riches and sudden falls, Marlowe was the rock, the man who knew that it wasn't always about the big
                score, but about the careful count.
              </p>
            </span>
          </div>
          <div id={`${labelName}-midground`} style={{ zIndex: 1 }}></div>
          <div id={`${labelName}-background`} style={{ zIndex: 0 }}>
            <aside className="profile">
              <img
                src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/main/source/assets/png-files/index-page/1280x1280%2C%20noir.png"
                alt=""
              />
            </aside>
          </div>
        </>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {(useMediaQuery({ query: '(orientation: portrait)' }) as boolean) && (
        <>
          <div id={`${labelName}-foreground`} style={{ zIndex: 2, width: Number(width) - 64, height: Number(height) - 98 }}>
            <MenuButton criteria={mobileElements.criteria} information={mobileElements.buttons} />
            <span className={`${block}-description`}>
              <p>
                {/* Improve, 1960' mob drama */}
                In the smoky, neon-lit underworld of the city, Jack Marlowe was a figure man, a quiet soul in a bustling
                throng. While others chased the big dream, Marlowe was more interested in the cold facts. A lone wolf in a
                pack of hustlers, he navigated the shadowy alleys of the newfangled computing world, his mind a keen blade
                for numbers and logic.
                <br />
                <br />
                {/* Humor is key */}
                Marlowe was a minimalist, a man who believed in plain talk and straight deals. In a world of flash and
                promises, he was the steady hand, crafting sound solutions from raw data. From Wall Street titans to
                small-time gamblers, they sought Marlowe when the figures didn't jive. He was the fixer, the problem solver,
                the man who could turn a losing hand into a winning play.
                <br />
                <br />
                {/* End with something recruiters want to hear */}
                With a mind like a steel trap, Marlowe could spot a bad bet from across a crowded room. His reputation as a
                numbers wizard grew, and soon he was the go-to man for anyone wanting to stay ahead of the curve. In a world
                of quick riches and sudden falls, Marlowe was the rock, the man who knew that it wasn't always about the big
                score, but about the careful count.
              </p>
            </span>
          </div>
          <div id={`${labelName}-midground`} style={{ zIndex: 1, width: Number(width) - 64, height: Number(height) - 98 }}>
            <span className="title"></span>
          </div>
          <div id={`${labelName}-background`} style={{ zIndex: 0, width: Number(width) - 64, height: Number(height) - 98 }}>
            <span className={`${block}-title`}>
              <h6 className="display-3" data-text="Functionality">
                Functionality
              </h6>
            </span>
            <aside className="profile">
              <img
                src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/main/source/assets/png-files/index-page/1280x1280%2C%20noir.png"
                alt=""
              />
            </aside>
          </div>
        </>
      )}
    </section>
  );
};
export default SectionNoir;

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
            block: 'main',
            align: 'right',
            state: 'active',
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
function jQueryNoir(pageName: String, blockName: string) {
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

  $(`#${containerElement} button[id*='leftbar']`).on('click', function () {
    const leftbar = this.id;

    if (leftbar.includes('leftbar')) {
      showAside(leftbar);
    }
  });
  $(`#${containerElement} button[id*='rightbar']`).on('click', function () {
    const rightbar = this.id;
    console.log(this.id);
    if (rightbar.includes('rightbar')) {
      showAside(rightbar);
    }
  });
  $(`#${containerElement} button[id*='overlay']`).on('click', function () {
    const overlay = this.id;
    console.log(overlay);
    if (overlay.includes('overlay')) {
      showSection(`${pageName}`, overlay);
    }
  });
  console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
