import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import ButtonFade from '../../../components/Button/fade/Button.fade';

import getSVG from '../../../../utilities/getSVG';
import getResolution from '../../../../utilities/getResolution';
import getOrientation from '../../../../utilities/getOrientation';
import getIdentification from '../../../../utilities/getIdentification';

const close: string =
  'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c90755c6fcf73d52bfd7e974d1f9946dbbddb8f4/source/assets/svg-files/font-awesome/testing-icons/solid/times.svg';
const download: string =
  'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c90755c6fcf73d52bfd7e974d1f9946dbbddb8f4/source/assets/svg-files/font-awesome/testing-icons/solid/download.svg';

interface InfoProps {
  icons: {
    projects: string;
  };
  info: {
    resolution: string;
    orientation: string | 'landscape' | 'portrait';
    identification: string | 'index' | 'resume' | 'ticket' | 'university' | 'fitness';
  };
}
const IndexRightbar: React.FC<InfoProps> = () => {
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
        <header className="rightbar-foreground" style={{ zIndex: 2 }}>
          <ButtonFade
            text=""
            label="close"
            block="rightbar"
            style="highlight"
            align="center"
            icon={getSVG('close') as { dark: string; medium: string; light: string }}
          />
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

function jQueryRightbar(pageName: String, blockName: String) {
  const containerElement = `${pageName}-${blockName}` as String;

  $(`#${containerElement} div[class*="background"] ul`).on('click', () => {
    if (getOrientation().includes('portrait')) {
      // toggleState(containerElement);
    }
  });
  $(`#${containerElement} .${blockName}-foreground`).on('click', () => {
    let safety = document.getElementById(`${pageName}-${blockName}`)?.className as string;
    if (!safety.includes('blocked')) {
      $(`#${containerElement}.expanded`).addClass('collapsed');
      $(`#${containerElement}.collapsed`).removeClass('expanded');
    }
  });
  return console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);

  // const toggleState = function (containerElement: String) {
  //   let element = document.querySelector(`#${containerElement}`)?.className as string;
  //   if (!element.includes('blocked')) {
  //     var status = element.split(' ').pop() as string;
  //     switch (status) {
  //       case 'expanded':
  //         $(`#${containerElement}.expanded`).toggleClass('collapsed');
  //         $(`#${containerElement}.expanded`).removeClass('expanded');
  //         break;
  //       case 'collapsed':
  //         $(`#${containerElement}.collapsed`).toggleClass('expanded');
  //         $(`#${containerElement}.collapsed`).removeClass('collapsed');
  //         break;
  //     }
  //   }
  // };
}
