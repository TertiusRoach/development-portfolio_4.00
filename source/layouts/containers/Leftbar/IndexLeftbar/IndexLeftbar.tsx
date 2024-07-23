import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import ButtonFade from '../../../components/Button/fade/Button.fade';

import getSVG from '../../../../modules/utilities/getSVG';
import getResolution from '../../../../modules/utilities/getResolution';
import getOrientation from '../../../../modules/utilities/getOrientation';
import getIdentification from '../../../../modules/utilities/getIdentification';

interface InfoProps {
  info: {
    resolution: String;
    orientation: String | 'landscape' | 'portrait';
    identification: String | 'index' | 'resume' | 'ticket' | 'university' | 'fitness';
  };
}
const IndexLeftbar: React.FC<InfoProps> = ({ info }) => {
  console.log(info);
  const loadTimer: number = 4000;
  const blockName: String = 'leftbar';
  const pageName: String = getIdentification();
  const mobile: boolean = useMediaQuery({ query: '(orientation: portrait)' });
  const desktop: boolean = useMediaQuery({ query: '(orientation: landscape)' });
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        setTimeout(() => jQueryLeftbar(pageName, blockName), loadTimer);
      },
      false
    );
    setTimeout(() => jQueryLeftbar(pageName, blockName), loadTimer);
  }, []);
  return (
    <>
      <aside id="index-leftbar" className="default-leftbar collapsed" style={{ zIndex: 5 }}>
        <header className="leftbar-foreground" style={{ zIndex: 2 }}>
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
        <footer className="leftbar-midground" style={{ zIndex: 1 }}></footer>

        <div className="leftbar-background" style={{ zIndex: 0 }}>
          <ul className="leftbar-listing">
            <h1 className="content-1">Leftbar Listing</h1>
          </ul>
          <article className="leftbar-preview"></article>
        </div>
      </aside>
    </>
  );
  // console.log(info);
  console.log('IndexLeftbar Loaded');
};
export default IndexLeftbar;

function jQueryLeftbar(pageName: String, blockName: String) {
  const containerElement = `${pageName}-${blockName}` as String;
  const toggleState = function (containerElement: String) {
    let element = document.querySelector(`#${containerElement}`)?.className as string;
    if (!element.includes('blocked')) {
      var status = element.split(' ').pop() as string;
      switch (status) {
        case 'expanded':
          $(`#${containerElement}.expanded`).toggleClass('collapsed');
          $(`#${containerElement}.expanded`).removeClass('expanded');
          break;
        case 'collapsed':
          $(`#${containerElement}.collapsed`).toggleClass('expanded');
          $(`#${containerElement}.collapsed`).removeClass('collapsed');
          break;
      }
    }
  };

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
  console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
