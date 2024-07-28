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

interface NoirProps {
  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
  labelName: 'home';
  stateType: 'active' | '';
  blockName: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
}
const SectionNoir: React.FC<NoirProps> = ({ info, labelName, blockName, stateType }) => {
  const jQueryTimer: number = 1000;
  const block: 'main' | string = `${blockName}`;
  const page: String = info.identification as String;

  useEffect(() => {
    let jQueryLoad = () => {
      jQueryNoir(page, block);
    };

    window.addEventListener('resize', jQueryLoad);
    setTimeout(() => jQueryNoir(page, block), jQueryTimer);

    return () => {
      window.removeEventListener('resize', jQueryLoad);
    };
  }, []);

  let desktopDevice = getElements('<desktop>') as {
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
  let mobileDevice = getElements('<mobile>') as {
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
      buildDesign: '<fade>' | '<icon>' | '<text>' | string;
      buildElement: '<buttons>' | '<anchors>' | '<ordered>' | '<unordered>';
    };
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
            <MenuButton criteria={desktopDevice.criteria} information={desktopDevice.buttons} />
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
export default SectionNoir;
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
        buttons: [
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
            style: 'highlight',
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
          {
            text: 'Home',
            href: '',
            state: 'active',
            label: 'home',
            style: 'highlight',
            align: 'right',
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
            style: 'highlight',
            align: 'center',
            icon: getSVG('contact'),
            block: 'main',
          },
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
            style: 'highlight',
            align: 'left',
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
          {
            text: 'Home',
            href: '',
            state: 'active',
            label: 'home',
            style: 'highlight',
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
            align: 'center',
            icon: getSVG('skills'),
            block: 'main',
          },
          {
            text: 'Contact',
            href: '',
            state: 'active',
            label: 'contact',
            style: 'highlight',
            align: 'right',
            icon: getSVG('contact'),
            block: 'main',
          },
        ],
        criteria: {
          buildDesign: '<fade>',
          buildAxis: '<vertical>',
          buildElement: '<buttons>',
        },
      } as {
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

// Noir Story Idea: The City's Heart of Darkness
// Logline:
// A down-on-his-luck private eye is drawn into a deadly game of deception when he's hired to find a missing femme fatale, only to discover a web of corruption that reaches the city's highest levels.

// Character:
// Jack Marlowe: A world-weary private detective with a penchant for whiskey and a cynical outlook on life. He's a shadow of his former self, haunted by a past mistake that cost him his badge.
// Setting:
// A rain-soaked, neon-lit city with towering skyscrapers and shadowy alleyways. Think classic noir cities like Los Angeles or New York, but with a modern twist.
// Plot:
// Jack Marlowe, once a promising detective, now spends his days chasing deadbeats and lost pets. His life takes a drastic turn when a mysterious woman, Evelyn, approaches him. She's looking for her missing sister, a glamorous actress who vanished without a trace.

// Intrigued by the case and the promise of a decent fee, Jack agrees to take it on. As he delves deeper into the glamorous world of Hollywood, he uncovers a sinister underbelly of power and corruption. Evelyn's sister, it turns out, was involved in something far more dangerous than a simple disappearance.

// Jack finds himself entangled in a dangerous game of cat and mouse with a ruthless crime boss who controls the city. The line between detective and target blurs as he's forced to confront his past demons and make a choice: walk away or risk everything to bring down the empire.

// Noir Elements:
// Atmosphere: Dark, brooding, and filled with suspense. Use vivid descriptions of rain-slicked streets, smoky jazz clubs, and dimly lit offices.
// Characters: Complex and morally ambiguous characters with hidden agendas.
// Plot: A labyrinthine plot filled with twists and turns.
// Dialogue: Hardboiled, cynical, and laced with double entendres.
// Themes: Corruption, betrayal, redemption, and the corrupting influence of power.
// Potential Story Arcs:
// A flashback to Jack's past as a cop, revealing the mistake that led to his downfall.
// A love interest who complicates Jack's life and puts her in danger.
// A moral dilemma where Jack must choose between his own safety and exposing the truth.
// Would you like to develop this idea further, or do you have a different direction in mind?

// I can also provide you with examples of noir dialogue, setting descriptions, or character development to help you get started.
