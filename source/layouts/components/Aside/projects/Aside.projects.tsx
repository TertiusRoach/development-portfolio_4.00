// Document #1: Aside.projects.tsx
import $ from 'jquery';
import './Aside.projects.scss';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { getSVG } from '../../../../modules/utilities/getFile';
import ButtonFade from '../../Button/fade/Button.fade';
import MenuButton from '../../Menu/button/Menu.button';

interface ProjectsProps {
  labelName: 'projects';
  stateType: 'active' | '';
  blockName: 'rightbar' | 'coworkers' | 'employees' | string;
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | string;
  };
}

const AsideProjects: React.FC<ProjectsProps> = ({ labelName, blockName, info }) => {
  const jQueryTimer = 5000;
  const block = `${blockName}` as 'rightbar';
  const label: string = `${labelName}` as 'projects';
  const page: String = info.identification as String;
  useEffect(() => {
    let jQueryLoad = () => {
      jQueryProjects(page, block);
    };
    window.addEventListener('resize', jQueryLoad);
    setTimeout(() => jQueryProjects(page, block), jQueryTimer);
    return () => {
      window.removeEventListener('resize', jQueryLoad);
    };
  }, []);

  const mobileDevice = useMediaQuery({ query: '(orientation: portrait)' });
  const desktopDevice = useMediaQuery({ query: '(orientation: landscape)' });

  const buttons = [
    {
      state: '',
      align: 'left',
      text: 'GitHub',
      label: 'github',
      target: '_blank',
      block: 'rightbar',
      style: 'downplay',
      icon: getSVG('github') as { dark: string; medium: string; light: string },

      axis: 'vertical',
      href: 'https://github.com/TertiusRoach',
    },
    // Add more buttons as needed
  ];

  return (
    <aside id="index-rightbar" className={`${labelName}-rightbar collapsed`} style={{ zIndex: 5 }}>
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {desktopDevice && (
        <>
          <div className="rightbar-background" style={{ zIndex: 0 }}>
            {/* <MenuButton selectAxis="vertical" selectDesign="fade" selectInfo={buttons} /> */}
            <section className="section-rightbar"></section>
          </div>

          <header className="rightbar-foreground" style={{ zIndex: 2 }}>
            <h3 className="display-6">My Projects</h3>
            {/* <ButtonFade
              text=""
              state=""
              label="close"
              align="center"
              block="rightbar"
              axis="horizontal"
              style="highlight"
              icon={getSVG('close') as { dark: string; medium: string; light: string }}
            /> */}
          </header>
          <footer className="rightbar-midground" style={{ zIndex: 1 }}></footer>
        </>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {mobileDevice && (
        <>
          <div className="rightbar-background" style={{ zIndex: 0 }}>
            <section></section>
          </div>

          <header className="rightbar-foreground" style={{ zIndex: 2 }}>
            <h6 className="display-3">My Projects</h6>
          </header>
          <footer className="rightbar-midground" style={{ zIndex: 1 }}>
            {/* <ButtonFade
              text=""
              state=""
              label="close"
              align="center"
              block="rightbar"
              style="highlight"
              axis="horizontal"
              icon={getSVG('close') as { dark: string; medium: string; light: string }}
            /> */}
          </footer>
        </>
      )}
    </aside>
  );
};

export default AsideProjects;

const jQueryProjects = (pageName: String, blockName: string) => {
  const containerElement = `${pageName}-${blockName}`;
  $(`#${containerElement} button[class*="close"]`).on('click', () => {
    const safety = document.getElementById(`${pageName}-${blockName}`)?.className || '';
    if (!safety.includes('blocked')) {
      $(`#${containerElement}.expanded`).addClass('collapsed');
      $(`#${containerElement}.collapsed`).removeClass('expanded');
    }
  });
  // console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
};
