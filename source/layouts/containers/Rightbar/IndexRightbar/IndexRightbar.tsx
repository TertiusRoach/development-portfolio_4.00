import $ from 'jquery';
import { iconsHREF } from '../../../..';
import React, { useEffect } from 'react';
import ButtonFade from '../../../components/Button/fade/Button.fade';
import { getResolution, getOrientation, getIdentification } from '../../../../scripts/index';

interface InfoProps {
  info: Object;

  resolution?: string;
  orientation?: 'landscape' | 'portrait' | string;
  identification?: string;
}
const IndexRightbar: React.FC<InfoProps> = () => {
  setTimeout(runJquery, 1000);

  return (
    <>
      <aside id="index-rightbar" className="default-rightbar collapsed" style={{ zIndex: 5 }}>
        <header className="rightbar-foreground" style={{ zIndex: 2 }}></header>
        <footer className="rightbar-midground" style={{ zIndex: 1 }}>
          <ButtonFade block="footer" view="downplay" align="center" /*text="View Left"*/ icon={close} />
        </footer>

        <div className="rightbar-background" style={{ zIndex: 0 }}>
          <ul className="rightbar-listing"></ul>
          <article className="rightbar-preview"></article>
        </div>
      </aside>
    </>
  );
  console.log('IndexRightbar Loaded');
};
export default IndexRightbar;
let close: string =
  'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c90755c6fcf73d52bfd7e974d1f9946dbbddb8f4/source/assets/svg-files/font-awesome/testing-icons/solid/times.svg';
let download: string =
  'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c90755c6fcf73d52bfd7e974d1f9946dbbddb8f4/source/assets/svg-files/font-awesome/testing-icons/solid/download.svg';

function runJquery() {
  /*
  console.log(`Rightbar: ${getResolution()}`);
  console.log(`Rightbar: ${getOrientation()}`);
  console.log(`Rightbar: ${getIdentification()}`);
  */

  const toggleState = () => {
    let element = document.getElementById('index-rightbar')?.className as string;
    if (!element.includes('blocked')) {
      var status = element.split(' ').pop() as string;
      switch (status) {
        case 'expanded':
          $('#index-rightbar.expanded').toggleClass('collapsed');
          $('#index-rightbar.expanded').removeClass('expanded');

          break;
        case 'collapsed':
          $('#index-rightbar.collapsed').toggleClass('expanded');
          $('#index-rightbar.collapsed').removeClass('collapsed');
          break;
      }
    }
  };
  $('#index-rightbar div[class*="background"] ul').on('click', () => {
    if (getOrientation().includes('portrait')) {
      toggleState();
    }
  });
  $('#index-rightbar div[class*="background"] article').on('click', () => {
    if (getOrientation().includes('landscape')) {
      toggleState();
    }
  });
  $('#index-rightbar article[class*="preview"]').on('click', () => {
    let safety = document.getElementById('index-rightbar')?.className as string;
    if (!safety.includes('blocked')) {
      if (getOrientation().includes('landscape')) {
        $('#index-rightbar.expanded').addClass('collapsed');
        $('#index-rightbar.collapsed').removeClass('expanded');
      }
    }
  });
}
