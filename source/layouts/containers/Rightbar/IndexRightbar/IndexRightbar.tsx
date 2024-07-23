import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import ButtonFade from '../../../components/Button/fade/Button.fade';

import getSVG from '../../../../utilities/getSVG';
import getResolution from '../../../../utilities/getResolution';
import getOrientation from '../../../../utilities/getOrientation';
import getIdentification from '../../../../utilities/getIdentification';

interface InfoProps {
  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
}
const IndexRightbar: React.FC<InfoProps> = ({ info }) => {
  const loadTimer: number = 5000;
  const blockName: String = 'rightbar';
  const pageName: String = getIdentification();
  const mobile: boolean = useMediaQuery({ query: '(orientation: portrait)' });
  const desktop: boolean = useMediaQuery({ query: '(orientation: landscape)' });
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        setTimeout(() => jQueryRightbar(pageName, blockName), loadTimer);
      },
      false
    );
    setTimeout(() => jQueryRightbar(pageName, blockName), loadTimer);
  }, []);
  return (
    <>
      <aside id="index-rightbar" className="default-rightbar collapsed" style={{ zIndex: 5 }}>
        <header className="rightbar-foreground" style={{ zIndex: 2 }}></header>
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

        <div className="rightbar-background" style={{ zIndex: 0 }}>
          <ul className="rightbar-listing">
            <h1 className="content-1">Rightbar Listing</h1>
          </ul>
          <article className="rightbar-preview"></article>
        </div>
      </aside>
    </>
  );
};
export default IndexRightbar;

function jQueryRightbar(pageName: String, blockName: String) {
  const containerElement = `${pageName}-${blockName}` as String;
  $(`button[class*="close"]`).on('click', () => {
    let safety = document.getElementById(`${pageName}-${blockName}`)?.className as string;
    if (!safety.includes('blocked')) {
      $(`#${containerElement}.expanded`).addClass('collapsed');
      $(`#${containerElement}.collapsed`).removeClass('expanded');
    }
  });
  return console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
