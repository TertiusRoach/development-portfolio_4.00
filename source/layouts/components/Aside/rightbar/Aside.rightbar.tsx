// Aside.rightbar.tsx
import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import ButtonFade from '../../Button/fade/Button.fade';

import { getSVG } from '../../../../modules/utilities/getFile';

interface RightbarProps {
  stateType: 'active' | '';
  blockName: 'rightbar' | string;

  labelName: 'rightbar' | 'projects' | string;
  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
}
const AsideRightbar: React.FC<RightbarProps> = ({ info }) => {
  const loadTimer: number = 5000;
  const blockName: String = 'rightbar';
  const pageName: String = info.identification;
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        setTimeout(() => jQueryRightbar(pageName, blockName), 250);
      },
      false
    );
    setTimeout(() => jQueryRightbar(pageName, blockName), loadTimer);
  }, []);
  let mobileDevice: boolean = useMediaQuery({ query: '(orientation: portrait)' });
  let desktopDevice: boolean = useMediaQuery({ query: '(orientation: landscape)' });
  return (
    <aside id="index-rightbar" className="default-rightbar collapsed" style={{ zIndex: 5 }}>
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {desktopDevice && (
        <>
          <header className="rightbar-foreground" style={{ zIndex: 2 }}>
            <ButtonFade
              state=""
              label="close"
              block="rightbar"
              style="highlight"
              align="center"
              icon={getSVG('close') as { dark: string; medium: string; light: string }}
            />
          </header>
          <div className="rightbar-background" style={{ zIndex: 0 }}>
            <ul className="rightbar-listing">
              <h1 className="content-1">Rightbar Listing</h1>
            </ul>
            <article className="rightbar-preview"></article>
          </div>
          <footer className="rightbar-midground" style={{ zIndex: 1 }}></footer>
        </>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {mobileDevice && (
        <>
          <header className="rightbar-foreground" style={{ zIndex: 2 }}></header>
          <div className="rightbar-background" style={{ zIndex: 0 }}>
            <ul className="rightbar-listing">
              <h1 className="content-1">Rightbar Listing</h1>
            </ul>
            <article className="rightbar-preview"></article>
          </div>
          <footer className="rightbar-midground" style={{ zIndex: 1 }}>
            <ButtonFade
              state=""
              label="close"
              block="rightbar"
              style="highlight"
              align="center"
              icon={getSVG('close') as { dark: string; medium: string; light: string }}
            />
          </footer>
        </>
      )}
    </aside>
  );
};
export default AsideRightbar;

function jQueryRightbar(pageName: String, blockName: String) {
  const containerElement = `${pageName}-${blockName}` as String;
  $(`#${containerElement} button[class*="close"]`).on('click', () => {
    let safety = document.getElementById(`${pageName}-${blockName}`)?.className as string;
    if (!safety.includes('blocked')) {
      $(`#${containerElement}.expanded`).addClass('collapsed');
      $(`#${containerElement}.collapsed`).removeClass('expanded');
    }
  });
  return console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
