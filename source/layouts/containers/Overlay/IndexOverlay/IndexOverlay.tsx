import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import ButtonFade from '../../../components/Button/fade/Button.fade';

import { getSVG } from '../../../../modules/utilities/getFile';
import toggleSection from '../../../../modules/utilities/toggleSection';
import MenuButton from '../../../components/Menu/button/Menu.button';
import getResolution from '../../../../modules/utilities/getResolution';
import getOrientation from '../../../../modules/utilities/getOrientation';
import getIdentification from '../../../../modules/utilities/getIdentification';

interface InfoProps {
  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
}
const IndexOverlay: React.FC<InfoProps> = ({ info }) => {
  const jQueryTimer: number = 3000;
  const blockName: String = 'overlay';
  const pageName: String = info.identification;
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

  setTimeout(() => jQueryOverlay(pageName, blockName), jQueryTimer);
  return (
    <section id="index-overlay" className="default-overlay hidden" style={{ zIndex: 3, display: 'none' }}>
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {(useMediaQuery({ query: '(orientation: landscape)' }) as boolean) && (
        <>
          <header className="overlay-foreground" style={{ zIndex: 2 }}>
            <MenuButton criteria={desktopElements.criteria} input={desktopElements.buttons} />
          </header>
          <div className="overlay-midground" style={{ zIndex: 1 }}>
            <h1>Build style here.</h1>
          </div>
          <footer className="overlay-background" style={{ zIndex: 0 }}></footer>
        </>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {(useMediaQuery({ query: '(orientation: portrait)' }) as boolean) && (
        <>
          <header className="overlay-foreground" style={{ zIndex: 2 }}></header>

          <div className="overlay-midground" style={{ zIndex: 1 }}>
            <h1>Build style here.</h1>
          </div>

          <footer className="overlay-background" style={{ zIndex: 0 }}>
            <MenuButton criteria={mobileElements.criteria} input={mobileElements.buttons} />
          </footer>
        </>
      )}
    </section>
  );
};
export default IndexOverlay;
function getElements(orientation: '<desktop>' | '<mobile>') {
  switch (orientation) {
    case '<desktop>':
      return {
        buttons: [
          {
            href: '',
            state: '',
            label: 'close',
            align: 'center',
            block: 'rightbar',
            style: 'downplay',
            text: 'Exit Rightbar',
            icon: getSVG('close'),
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
            label: 'close',
            align: 'center',
            block: 'rightbar',
            style: 'downplay',
            text: 'Exit Rightbar',
            icon: getSVG('close'),
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
function jQueryOverlay(pageName: String, blockName: String) {
  const containerElement = `${pageName}-${blockName}` as String;
  $(`#${containerElement} button[id*='close']`).on('click', function () {
    let element = document.querySelector(`section#${containerElement}`) as HTMLElement;
    //--|🠋 Safety Check 🠋|--//
    if (!element?.className.includes('blocked') as boolean) {
      toggleSection(element.id);
    }
  });
  console.log(`//--|🠊 Refreshed: jQuery <${blockName}> 🠈|--//`);
}

// let header = document.querySelector(`#${pageName}-header`) as HTMLElement;
// let main = document.querySelector(`#${pageName}-main section`) as HTMLElement;
// let footer = document.querySelector(`#${pageName}-footer`) as HTMLElement;

// if (header) {
//   $(header).removeClass('blurred');
// }
// if (main) {
//   $(main).removeClass('blurred');
// }
// if (footer) {
//   $(footer).removeClass('blurred');
// }

// $(`#${pageName}-header`).removeClass('blurred');
// $(`#${pageName}-main section`).removeClass('blurred');
// $(`#${pageName}-footer`).removeClass('blurred');
