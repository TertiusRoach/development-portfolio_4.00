// Aside.rightbar.tsx
import $ from 'jquery';
import './Aside.rightbar.scss';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import ButtonFade from '../../Button/bin/fade/Button.fade';
import MenuButton from '../../Menu/button/Menu.button';
import { getSVG } from '../../../../modules/utilities/bin/getFile';
import toggleAside from '../../../../modules/utilities/bin/toggleAside';

interface RightbarProps {
  labelName: 'default';
  stateType: 'active' | '';
  blockName: 'rightbar' | 'coworkers' | 'employees' | string;

  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
}
const AsideRightbar: React.FC<RightbarProps> = ({ labelName, blockName, info }) => {
  const jQueryTimer: number = 6000;
  const block = `${blockName}` as 'rightbar';
  const label: string = `${labelName}` as 'rightbar';
  const page: String = info.identification as String;
  setTimeout(() => jQueryRightbar(page, block), jQueryTimer);
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
    <aside id={`${page}-${block}`} className={`${label}-${block} collapsed`} style={{ zIndex: 5 }}>
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {(useMediaQuery({ query: '(orientation: landscape)' }) as boolean) && (
        <>
          <header className={`${label}-foreground`} style={{ zIndex: 2 }}>
            <menu>
              <ButtonFade
                href=""
                text="Close"
                label="close"
                align="center"
                block="leftbar"
                style="downplay"
                state="disabled"
                axis="<horizontal>"
                icon={getSVG('close') as { dark: string; medium: string; light: string }}
              />
            </menu>
          </header>
          <div className={`${label}-background`} style={{ zIndex: 0 }}>
            <MenuButton criteria={desktopElements.criteria} input={desktopElements.buttons} />
            <section>
              {/* <menu>
              <a target="_blank" className="left" href="https://github.com/TertiusRoach">
                <h3>GitHub</h3>
                <img src={getSVG('github').medium as string} alt="github" />
              </a>

              <a target="_blank" className="center" href="">
                <h3>LinkedIn</h3>
                <img src={getSVG('linkedin').medium as string} alt="linkedin" />
              </a>
              <a target="_blank" className="right" href="">
                <h3>YouTube</h3>
                <img src={getSVG('youtube').medium as string} alt="youtube" />
              </a>
            </menu> */}
            </section>
          </div>
          <footer className={`${label}-midground`} style={{ zIndex: 1 }}></footer>
        </>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {(useMediaQuery({ query: '(orientation: portrait)' }) as boolean) && (
        <>
          <header className="rightbar-foreground" style={{ zIndex: 2 }}></header>
          <div className="rightbar-background" style={{ zIndex: 0 }}>
            <MenuButton criteria={mobileElements.criteria} input={mobileElements.buttons} />
            <section></section>
          </div>
          <footer className="rightbar-midground" style={{ zIndex: 1 }}>
            <menu>
              <ButtonFade
                href=""
                text="Close"
                label="close"
                align="center"
                state="enabled"
                block="rightbar"
                style="downplay"
                axis="<horizontal>"
                icon={getSVG('close') as { dark: string; medium: string; light: string }}
              />
            </menu>
          </footer>
        </>
      )}
    </aside>
  );
};
export default AsideRightbar;
function getElements(orientation: '<desktop>' | '<mobile>' | '<close>') {
  switch (orientation) {
    case '<desktop>':
      return {
        buttons: [
          {
            href: '',
            state: '',
            label: 'home',
            align: 'left',
            block: 'leftbar',
            style: 'downplay',
            icon: getSVG('home'),
            text: 'My Portfolio',
          },
          {
            href: '',
            state: '',
            label: 'skills',
            align: 'left',
            block: 'leftbar',
            style: 'highlight',
            text: 'Log a Ticket',
            icon: getSVG('skills'),
          },
          {
            href: '',
            state: '',
            align: 'left',
            label: 'contact',
            block: 'leftbar',
            style: 'downplay',
            text: 'Univer Track',
            icon: getSVG('contact'),
          },
          {
            href: '',
            state: '',
            align: 'left',
            block: 'leftbar',
            label: 'projects',
            style: 'highlight',
            text: 'Journal Fits',
            icon: getSVG('projects'),
          },
        ],
        criteria: {
          buildDesign: '<fade>',
          buildAxis: '<vertical>',
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
            label: 'home',
            align: 'center',
            block: 'leftbar',
            style: 'downplay',
            icon: getSVG('home'),
            text: 'My Portfolio',
          },
          {
            href: '',
            state: '',
            align: 'center',
            label: 'skills',
            block: 'leftbar',
            style: 'highlight',
            text: 'Log a Ticket',
            icon: getSVG('skills'),
          },
          {
            href: '',
            state: '',
            align: 'center',
            label: 'contact',
            block: 'leftbar',
            style: 'downplay',
            text: 'Univer Track',
            icon: getSVG('contact'),
          },
          {
            href: '',
            state: '',
            align: 'center',
            block: 'leftbar',
            label: 'projects',
            style: 'highlight',
            text: 'Journal Fits',
            icon: getSVG('projects'),
          },
        ],
        criteria: {
          buildDesign: '<fade>',
          buildAxis: '<vertical>',
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
    default:
      return {
        button: [
          {
            href: '',
            state: '',
            text: 'Close',
            label: 'close',
            align: 'center',
            block: 'leftbar',
            style: 'downplay',
            icon: getSVG('home'),
          },
        ],
        criteria: {
          buildDesign: '<fade>',
          buildAxis: '<horizontal>',
          buildElement: '<buttons>',
        },
      } as {
        button: {
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
function jQueryRightbar(pageName: String, blockName: string) {
  const containerElement = `${pageName}-${blockName}` as String;
  $(`#${containerElement} button[id*='close']`).on('click', function () {
    let element = document.querySelector(`aside#${containerElement}`) as HTMLElement;
    let safety = element?.className as string;
    //--|🠋 Safety Check 🠋|--//
    if (!safety.includes('blocked') && safety.includes(blockName)) {
      toggleAside(element.id);
    }
  });
  // return console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
