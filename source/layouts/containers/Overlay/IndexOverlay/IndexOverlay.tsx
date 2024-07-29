import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import ButtonFade from '../../../components/Button/fade/Button.fade';

import { getSVG } from '../../../../modules/utilities/getFile';
import getResolution from '../../../../modules/utilities/getResolution';
import getOrientation from '../../../../modules/utilities/getOrientation';
import getIdentification from '../../../../modules/utilities/getIdentification';

interface InfoProps {
  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
}
const IndexOverlay: React.FC<InfoProps> = ({ info }) => {
  const loadTimer: number = 3000;
  const blockName: String = 'overlay';
  const pageName: String = info.identification;
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        setTimeout(() => jQueryOverlay(pageName, blockName), 250);
      },
      false
    );
    setTimeout(() => jQueryOverlay(pageName, blockName), loadTimer);
  }, []);
  let mobileDevice: boolean = useMediaQuery({ query: '(orientation: portrait)' });
  let desktopDevice: boolean = useMediaQuery({ query: '(orientation: landscape)' });
  return (
    <section id="index-overlay" className="default-overlay hidden" style={{ zIndex: 3, display: 'none' }}>
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {desktopDevice && (
        <>
          <header className="overlay-foreground" style={{ zIndex: 2 }}>
            {/* <ButtonFade
              state=""
              label="close"
              align="center"
              block="overlay"
              style="highlight"
              icon={getSVG('close') as { dark: string; medium: string; light: string }}
            /> */}
          </header>

          <div className="overlay-midground" style={{ zIndex: 1 }}>
            <h1>Build style here.</h1>
          </div>

          <footer className="overlay-background" style={{ zIndex: 0 }}></footer>
        </>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {mobileDevice && (
        <>
          <header className="overlay-foreground" style={{ zIndex: 2 }}></header>

          <div className="overlay-midground" style={{ zIndex: 1 }}>
            <h1>Build style here.</h1>
          </div>

          <footer className="overlay-background" style={{ zIndex: 0 }}>
            {/* <ButtonFade
              state=""
              label="close"
              align="center"
              block="overlay"
              style="highlight"
              icon={getSVG('close') as { dark: string; medium: string; light: string }}
            /> */}
          </footer>
        </>
      )}
    </section>
  );
};
export default IndexOverlay;
function jQueryOverlay(pageName: String, blockName: String) {
  const containerElement = `${pageName}-${blockName}` as String;
  $(`#${containerElement} button[class*="close"]`).on('click', () => {
    let element = document.getElementById('index-overlay') as HTMLElement;
    let safety: boolean = element?.className.includes('blocked');
    let status = element?.className.split(' ').pop() as string;
    if (!safety) {
      switch (status) {
        case 'visible':
          $(`#${pageName}-overlay.visible`).addClass('blocked');
          $(`#${pageName}-overlay.visible`).toggleClass('hidden');
          $(`#${pageName}-overlay.visible`).removeClass('visible');

          setTimeout(() => {
            $(`#${pageName}-overlay`).css('display', 'none');
            $(`#${pageName}-overlay`).removeClass('blocked');

            $(`#${pageName}-header`).removeClass('disabled');
            $(`#${pageName}-main`).removeClass('disabled');
            $(`#${pageName}-footer`).removeClass('disabled');
          }, 1000);
          break;
        case 'hidden':
          $(`#${pageName}-overlay.hidden`).removeClass('blocked');
          $(`#${pageName}-overlay.hidden`).toggleClass('visible');
          $(`#${pageName}-overlay.hidden`).removeClass('hidden');

          $(`#${pageName}-header`).removeClass('disabled');
          $(`#${pageName}-main`).removeClass('disabled');
          $(`#${pageName}-footer`).removeClass('disabled');
          setTimeout(() => {
            $(`#${pageName}-overlay`).css('display', '');
          }, 1000);
          break;
        default:
          alert('ERROR!');
      }
    }
  });
  console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
