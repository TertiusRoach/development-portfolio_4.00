import $ from 'jquery';
import React, { useEffect } from 'react';
import { iconsHREF } from '../../../..';
import ButtonFade from '../../../components/Button/fade/Button.fade';
import { getResolution, getOrientation, getIdentification } from '../../../../scripts/index';

interface InfoProps {
  info: Object;
  resolution?: string;
  orientation?: 'landscape' | 'portrait' | string;
  identification?: string;
}
const IndexLeftbar: React.FC<InfoProps> = () => {
  setTimeout(runJquery, 1000);
  return (
    <>
      <aside id="index-leftbar" className="default-leftbar collapsed" style={{ zIndex: 5 }}>
        <header className="leftbar-foreground" style={{ zIndex: 2 }}></header>
        <footer className="leftbar-midground" style={{ zIndex: 1 }}>
          <ButtonFade block="footer" view="downplay" align="center" /*text="View Left"*/ icon={close} />
        </footer>

        <div className="leftbar-background" style={{ zIndex: 0 }}>
          <ul className="leftbar-listing"></ul>
          <article className="leftbar-preview"></article>
        </div>
      </aside>
    </>
  );
  // console.log(info);
  console.log('IndexLeftbar Loaded');
};
export default IndexLeftbar;

let close: string =
  'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c90755c6fcf73d52bfd7e974d1f9946dbbddb8f4/source/assets/svg-files/font-awesome/testing-icons/solid/times.svg';
let download: string =
  'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c90755c6fcf73d52bfd7e974d1f9946dbbddb8f4/source/assets/svg-files/font-awesome/testing-icons/solid/download.svg';

function runJquery() {
  /*
  console.log(`Leftbar: ${getResolution()}`);
  console.log(`Leftbar: ${getOrientation()}`);
  console.log(`Leftbar: ${getIdentification()}`);
  */

  const toggleState = () => {
    let element = document.getElementById('index-leftbar')?.className as string;
    if (!element.includes('blocked')) {
      var status = element.split(' ').pop() as string;
      switch (status) {
        case 'expanded':
          $('#index-leftbar.expanded').toggleClass('collapsed');
          $('#index-leftbar.expanded').removeClass('expanded');

          break;
        case 'collapsed':
          $('#index-leftbar.collapsed').toggleClass('expanded');
          $('#index-leftbar.collapsed').removeClass('collapsed');
          break;
      }
    }
  };
  $('#index-leftbar div[class*="background"] ul').on('click', () => {
    if (getOrientation().includes('portrait')) {
      toggleState();
    }
  });
  $('#index-leftbar article[class*="preview"]').on('click', () => {
    let safety = document.getElementById('index-leftbar')?.className as string;
    if (!safety.includes('blocked')) {
      if (getOrientation().includes('landscape')) {
        $('#index-leftbar.expanded').addClass('collapsed');
        $('#index-leftbar.collapsed').removeClass('expanded');
      }
    }
  });

  /*
  $('#index-leftbar footer[class*="midground"]').on('click', () => {
    if (getOrientation().includes('portrait')) {
      toggleState();
    }
  });
  */
}
