// Aside.projects.tsx
import $ from 'jquery';
import './Aside.projects.scss';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import ButtonFade from '../../Button/fade/Button.fade';
import MenuButton from '../../Menu/button/Menu.button';
import { getSVG } from '../../../../modules/utilities/getFile';
import toggleAside from '../../../../modules/utilities/toggleAside';

interface ProjectsProps {
  labelName: 'projects';
  stateType: 'active' | 'enabled' | 'disabled' | string;
  blockName: 'rightbar' | 'coworkers' | 'employees' | string;

  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
}
const AsideProjects: React.FC<ProjectsProps> = ({ labelName, blockName, info }) => {
  const jQueryTimer: number = 6000;
  const block = `${blockName}` as 'rightbar';
  const label: string = `${labelName}` as 'rightbar';
  const pageName: String = info.identification as String;
  useEffect(() => {
    const jQueryStart = () => {
      jQueryProjects(pageName, blockName);
    };
    window.addEventListener('resize', jQueryStart);
    setTimeout(() => jQueryProjects(pageName, blockName), jQueryTimer);
    return () => {
      window.removeEventListener('resize', jQueryStart);
    };
  }, [pageName, blockName]);
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
    <aside id={`${pageName}-${blockName}`} className={`${label}-${blockName} collapsed`} style={{ zIndex: 5 }}>
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
            <section></section>
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
export default AsideProjects;
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
function jQueryProjects(pageName: String, blockName: string) {
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
