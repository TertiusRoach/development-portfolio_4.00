import $ from 'jquery';
import './Aside.leftbar.scss';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import ButtonFade from '../../Button/fade/Button.fade';
import { getSVG } from '../../../../modules/utilities/getFile';

interface LeftbarProps {
  labelName: 'leftbar';
  stateType: 'active' | '';
  blockName: 'leftbar' | 'coworkers' | 'employees' | string;

  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
}
const AsideLeftbar: React.FC<LeftbarProps> = ({ labelName, blockName, stateType, info }) => {
  const jQueryTimer: number = 4000;
  const block = `${blockName}` as 'leftbar';
  const label: string = `${labelName}` as 'leftbar';
  const page: String = info.identification as String;
  useEffect(() => {
    let jQueryLoad = () => {
      jQueryLeftbar(page, block);
    };
    window.addEventListener('resize', jQueryLoad);
    setTimeout(() => jQueryLeftbar(page, block), jQueryTimer);
    return () => {
      window.removeEventListener('resize', jQueryLoad);
    };
  }, []);
  let mobileDevice: boolean = useMediaQuery({ query: '(orientation: portrait)' });
  let desktopDevice: boolean = useMediaQuery({ query: '(orientation: landscape)' });
  return (
    <aside id="index-leftbar" className={`${labelName}-${blockName} collapsed`} style={{ zIndex: 5 }}>
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {desktopDevice && (
        <>
          <header className="leftbar-foreground" style={{ zIndex: 2 }}>
            {/* <ButtonFade
              text=""
              state=""
              label="close"
              align="center"
              block="rightbar"
              style="highlight"
              icon={getSVG('close') as { dark: string; medium: string; light: string }}
            /> */}
          </header>
          <div className="leftbar-background" style={{ zIndex: 0 }}>
            <menu>
              <a target="_blank" className="right" href="https://www.linkedin.com/in/tertius-roach/">
                <h3>LinkedIn</h3>
                <img src={getSVG('linkedin').medium as string} alt="linkedin" />
              </a>
              <a target="_blank" className="center" href="https://github.com/TertiusRoach">
                <h3>GitHub</h3>
                <img src={getSVG('github').medium as string} alt="github" />
              </a>
              <a target="_blank" className="left" href="https://www.youtube.com/@TertiusRoach">
                <h3>YouTube</h3>
                <img src={getSVG('youtube').medium as string} alt="youtube" />
              </a>
            </menu>
            <section></section>
          </div>
          <footer className="leftbar-midground" style={{ zIndex: 1 }}></footer>
        </>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {mobileDevice && (
        <>
          <header className="leftbar-foreground" style={{ zIndex: 2 }}></header>
          <div className="leftbar-background" style={{ zIndex: 0 }}>
            <menu>
              <a target="_blank" className="right" href="https://www.linkedin.com/in/tertius-roach/">
                <h6 className="display-3">LinkedIn</h6>
                <img src={getSVG('linkedin').medium as string} alt="linkedin" />
              </a>
              <a target="_blank" className="center" href="https://github.com/TertiusRoach">
                <h6 className="display-3">GitHub</h6>
                <img src={getSVG('github').medium as string} alt="github" />
              </a>
              <a target="_blank" className="left" href="https://www.youtube.com/@TertiusRoach">
                <h6 className="display-3">YouTube</h6>
                <img src={getSVG('youtube').medium as string} alt="youtube" />
              </a>
            </menu>
            <section></section>
          </div>
          <footer className="leftbar-midground" style={{ zIndex: 1 }}>
            {/* <ButtonFade
              text=""
              state=""
              label="close"
              align="center"
              block="rightbar"
              style="highlight"
              icon={getSVG('close') as { dark: string; medium: string; light: string }}
            /> */}
          </footer>
        </>
      )}
    </aside>
  );
};
export default AsideLeftbar;
let jQueryLeftbar = function (pageName: String, blockName: String) {
  const containerElement = `${pageName}-${blockName}` as String;
  $(`#${containerElement} button[class*="close"]`).on('click', () => {
    let safety = document.getElementById(`${pageName}-${blockName}`)?.className as string;
    if (!safety.includes('blocked')) {
      $(`#${containerElement}.expanded`).addClass('collapsed');
      $(`#${containerElement}.collapsed`).removeClass('expanded');

      $(`#${pageName}-header`).removeClass('disabled');
      $(`#${pageName}-main section`).removeClass('disabled');
      $(`#${pageName}-footer`).removeClass('disabled');
    }
  });
  console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
};
