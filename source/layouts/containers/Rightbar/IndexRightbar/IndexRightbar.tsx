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
        <header className="rightbar-foreground" style={{ zIndex: 2 }}>
          <ButtonFade block="header" view="downplay" align="center" /*text="View Left"*/ icon={close} />
        </header>
        <footer className="rightbar-midground" style={{ zIndex: 1 }}></footer>

        <div className="rightbar-background" style={{ zIndex: 0 }}>
          <ul className="rightbar-listing">
            <h1 className="content-1">Rightbar Listing</h1>
          </ul>
          <article className="rightbar-preview"></article>
        </div>
      </aside>
    </>
  );
  // console.log(info);
  console.log('IndexLeftbar Loaded');
};
export default IndexRightbar;

const close: string =
  'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c90755c6fcf73d52bfd7e974d1f9946dbbddb8f4/source/assets/svg-files/font-awesome/testing-icons/solid/times.svg';
const download: string =
  'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c90755c6fcf73d52bfd7e974d1f9946dbbddb8f4/source/assets/svg-files/font-awesome/testing-icons/solid/download.svg';

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
function runJquery() {
  /*
  console.log(`Leftbar: ${getResolution()}`);
  console.log(`Leftbar: ${getOrientation()}`);
  console.log(`Leftbar: ${getIdentification()}`);
  */

  $('#index-rightbar').on('click', () => {
    let safety = document.getElementById('index-rightbar')?.className as string;
    if (!safety.includes('blocked')) {
      $('#index-rightbar.expanded').addClass('collapsed');
      $('#index-rightbar.collapsed').removeClass('expanded');
    }
  });
  $('#index-rightbar div[class*="background"] ul').on('click', () => {
    if (getOrientation().includes('portrait')) {
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

  /*
  $('#index-rightbar footer[class*="midground"]').on('click', () => {
    if (getOrientation().includes('portrait')) {
      toggleState();
    }
  });
  */
}
