// Aside.projects.tsx
import $ from 'jquery';
import './Aside.projects.scss';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import ButtonFade from '../../Button/fade/Button.fade';
import { getSVG } from '../../../../modules/utilities/getFile';
import MenuAnchor from '../../Menu/anchor/Menu.anchor';

interface ProjectsProps {
  stateType: 'active' | '';
  labelName: 'projects' | string;
  blockName: 'rightbar' | 'coworkers' | 'employees' | string;

  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
}
const AsideProjects: React.FC<ProjectsProps> = ({ labelName, info }) => {
  const loadTimer: number = 5000;
  const blockName: String = 'rightbar';
  const pageName: String = info.identification;
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        setTimeout(() => jQueryProjects(pageName, blockName), 250);
      },
      false
    );
    setTimeout(() => jQueryProjects(pageName, blockName), loadTimer);
  }, []);

  let mobileDevice: boolean = useMediaQuery({ query: '(orientation: portrait)' });
  let desktopDevice: boolean = useMediaQuery({ query: '(orientation: landscape)' });
  let anchor = [
    {
      state: '',
      align: 'left',
      text: 'GitHub',
      label: 'github',
      target: '_blank',
      block: 'rightbar',
      style: 'downplay',
      href: 'https://github.com/TertiusRoach',
      icon: getSVG('github') as { dark: 'dark'; medium: 'medium'; light: 'light' },
    },
    {
      state: '',
      align: 'left',
      text: 'LinkedIn',
      target: '_blank',
      label: 'linkedin',
      block: 'rightbar',
      style: 'highlight',
      href: 'https://www.linkedin.com/in/tertius-roach/',
      icon: getSVG('linkedin') as { dark: 'dark'; medium: 'medium'; light: 'light' },
    },
    {
      state: '',
      align: 'left',
      text: 'YouTube',
      label: 'youtube',
      target: '_blank',
      block: 'rightbar',
      style: 'downplay',
      href: 'https://www.youtube.com/@TertiusRoach',
      icon: getSVG('youtube') as { dark: 'dark'; medium: 'medium'; light: 'light' },
    },
    // {
    //   href: '',
    //   state: '',
    //   align: 'left',
    //   text: 'Home',
    //   label: 'home',
    //   target: '_blank',
    //   block: 'rightbar',
    //   style: 'downplay',
    //   icon: getSVG('home') as { dark: 'dark'; medium: 'medium'; light: 'light' },
    // },
    // {
    //   href: '',
    //   state: '',
    //   align: 'left',
    //   text: 'Skills',
    //   label: 'skills',
    //   target: '_blank',
    //   block: 'rightbar',
    //   style: 'downplay',
    //   icon: getSVG('skills') as { dark: 'dark'; medium: 'medium'; light: 'light' },
    // },
    // {
    //   href: '',
    //   state: '',
    //   align: 'left',
    //   text: 'Contact',
    //   label: 'contact',
    //   target: '_blank',
    //   block: 'rightbar',
    //   style: 'downplay',
    //   icon: getSVG('contact') as { dark: 'dark'; medium: 'medium'; light: 'light' },
    // },
  ] as {
    text: string;
    state: 'active' | '';
    href: string | 'disabled';
    style: 'downplay' | 'highlight';
    align: 'left' | 'center' | 'right' | string;
    label: 'home' | 'skills' | 'contact' | string;
    target: '_blank' | '_parent' | '_self' | '_top' | string;
    icon: { dark: 'dark'; medium: 'medium'; light: 'light' };
    block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
  }[];
  return (
    <aside id="index-rightbar" className={`${labelName}-rightbar collapsed`} style={{ zIndex: 5 }}>
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {desktopDevice && (
        <>
          <div className="rightbar-background" style={{ zIndex: 0 }}>
            <MenuAnchor selectDesign="fade" info={anchor} />
            {/* <menu className="menu-anchor">
              <a target="_blank" className="left" href="">
                <h3>YouTube</h3>
                <img src={getSVG('youtube').medium as string} alt="youtube" />
              </a>
              <a target="_blank" className="left" href="">
                <h3>LinkedIn</h3>
                <img src={getSVG('linkedin').medium as string} alt="linkedin" />
              </a>
              <a target="_blank" className="left" href="https://github.com/TertiusRoach">
                <h3>GitHub</h3>
                <img src={getSVG('github').medium as string} alt="github" />
              </a>
            </menu> */}
            <section className="section-rightbar"></section>
          </div>

          <header className="rightbar-foreground" style={{ zIndex: 2 }}>
            <h3 className="display-6">My Projects</h3>
            <ButtonFade
              text=""
              state=""
              label="close"
              align="center"
              block="rightbar"
              style="highlight"
              icon={getSVG('close') as { dark: string; medium: string; light: string }}
            />
          </header>
          <footer className="rightbar-midground" style={{ zIndex: 1 }}></footer>
        </>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {mobileDevice && (
        <>
          <header className="rightbar-foreground" style={{ zIndex: 2 }}>
            <h6 className="display-3">My Projects</h6>
          </header>
          <div className="rightbar-background" style={{ zIndex: 0 }}>
            <menu>
              <a target="_blank" className="center" href="https://github.com/TertiusRoach">
                <h6 className="display-3">GitHub</h6>
                <img src={getSVG('github').medium as string} alt="github" />
              </a>
              <a target="_blank" className="center" href="https://www.linkedin.com/in/tertius-roach/">
                <h6 className="display-3">LinkedIn</h6>
                <img src={getSVG('linkedin').medium as string} alt="linkedin" />
              </a>
              <a target="_blank" className="center" href="https://www.youtube.com/@TertiusRoach">
                <h6 className="display-3">YouTube</h6>
                <img src={getSVG('youtube').medium as string} alt="youtube" />
              </a>
            </menu>
            <section></section>
          </div>
          <footer className="rightbar-midground" style={{ zIndex: 1 }}>
            <ButtonFade
              text=""
              state=""
              label="close"
              align="center"
              block="rightbar"
              style="highlight"
              icon={getSVG('close') as { dark: string; medium: string; light: string }}
            />
          </footer>
        </>
      )}
    </aside>
  );
};
export default AsideProjects;
let jQueryProjects = function (pageName: String, blockName: String) {
  const containerElement = `${pageName}-${blockName}` as String;
  $(`#${containerElement} button[class*="close"]`).on('click', () => {
    let safety = document.getElementById(`${pageName}-${blockName}`)?.className as string;
    if (!safety.includes('blocked')) {
      $(`#${containerElement}.expanded`).addClass('collapsed');
      $(`#${containerElement}.collapsed`).removeClass('expanded');
    }
  });
  return console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
};
