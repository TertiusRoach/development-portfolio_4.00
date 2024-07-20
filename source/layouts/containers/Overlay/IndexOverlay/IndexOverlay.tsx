import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import ButtonFade from '../../../components/Button/fade/Button.fade';

import { getResolution, getOrientation, getIdentification, getSVG } from '../../../../scripts/index';

interface InfoProps {
  icon: {
    home: string;
    close: string;
    career: string;
    skills: string;
    contact: string;
    working: string;
    projects: string;
    download: string;

    viewOverlay: string;
    viewLeftbar: string;
    viewRightbar: string;

    signatureStacked: string;
    signatureAdjacent: string;

    gitHub: string;
    youTube: string;
    linkedIn: string;
  };
  info: {
    resolution: string;
    orientation: string | 'landscape' | 'portrait';
    identification: string | 'index' | 'resume' | 'ticket' | 'university' | 'fitness';
  };
}
const IndexOverlay: React.FC<InfoProps> = () => {
  const loadTimer: number = 3000;
  const blockName: String = 'overlay';
  const pageName: String = getIdentification();
  const mobile: boolean = useMediaQuery({ query: '(orientation: portrait)' });
  const desktop: boolean = useMediaQuery({ query: '(orientation: landscape)' });
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        setTimeout(() => jQueryOverlay(pageName, blockName), loadTimer);
      },
      false
    );
    setTimeout(() => jQueryOverlay(pageName, blockName), loadTimer);
  }, []);
  return (
    <>
      <section id="index-overlay" className="default-overlay hidden" style={{ zIndex: 3, display: 'none' }}>
        <header className="overlay-foreground" style={{ zIndex: 2 }}>
          <ButtonFade
            label="close"
            block="overlay"
            style="highlight"
            align="center"
            icon={getSVG('close') as { dark: string; medium: string; light: string }}
          />
        </header>

        {/* <header className="overlay-foreground" style={{ zIndex: 2 }}></header> */}

        <div className="overlay-midground" style={{ zIndex: 1 }}>
          <h1>Build style here.</h1>
        </div>

        <footer className="overlay-background" style={{ zIndex: 0 }}></footer>
      </section>
    </>
  );
  console.log('IndexOverlay Loaded');
};
export default IndexOverlay;
function jQueryOverlay(pageName: String, blockName: String) {
  const containerElement = `${pageName}-${blockName}` as String;
  $(`#${containerElement} .${blockName}-foreground`).on('click', () => {
    let element = document.getElementById('index-overlay') as HTMLElement;
    let safety: boolean = element?.className.includes('blocked');
    let status = element?.className.split(' ').pop() as string;
    if (!safety) {
      switch (status) {
        case 'visible':
          $('#index-overlay.visible').addClass('blocked');
          $('#index-overlay.visible').toggleClass('hidden');
          $('#index-overlay.visible').removeClass('visible');
          setTimeout(() => {
            $('#index-overlay').css('display', 'none');
            $('#index-overlay').removeClass('blocked');
          }, 1000);
          break;
        case 'hidden':
          $('#index-overlay.hidden').removeClass('blocked');
          $('#index-overlay.hidden').toggleClass('visible');
          $('#index-overlay.hidden').removeClass('hidden');
          setTimeout(() => {
            $('#index-overlay').css('display', '');
          }, 1000);
          break;
        default:
          alert('ERROR!');
      }
    }
    /*
    let safety = document.getElementById(`${pageName}-${blockName}`)?.className as string;
    if (!safety.includes('blocked')) {
      $(`#${containerElement}.expanded`).addClass('collapsed');
      $(`#${containerElement}.collapsed`).removeClass('expanded');
    }
    */
  });
  $(`#${containerElement} .${blockName}-foreground`).on('click', () => {});
  /*
  $(`#${containerElement}`).on('click', () => {

  });
  */
  console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
