// IndexLeftbar.tsx
import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { getSVG } from '../../../../modules/utilities/getFile';
import ButtonFade from '../../../components/Button/fade/Button.fade';
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
  const loadTimer: number = 4000;
  const blockName: String = 'leftbar';
  const pageName: String = info.identification;
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        setTimeout(() => jQueryLeftbar(pageName, blockName), 250);
      },
      false
    );
    setTimeout(() => jQueryLeftbar(pageName, blockName), loadTimer);
  }, []);
  let mobileDevice: boolean = useMediaQuery({ query: '(orientation: portrait)' });
  let desktopDevice: boolean = useMediaQuery({ query: '(orientation: landscape)' });

  return (
    <aside id="index-leftbar" className="default-leftbar collapsed" style={{ zIndex: 5 }}>
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {desktopDevice && (
        <>
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
          <div className="leftbar-background" style={{ zIndex: 0 }}>
            <ul className="leftbar-listing">
              <h1 className="content-1">Leftbar Listing</h1>
            </ul>
            <article className="leftbar-preview"></article>
          </div>
          <footer className="leftbar-midground" style={{ zIndex: 1 }}></footer>
        </>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {mobileDevice && (
        <>
          <header className="leftbar-foreground" style={{ zIndex: 2 }}></header>
          <div className="leftbar-background" style={{ zIndex: 0 }}>
            <ul className="leftbar-listing">
              <h1 className="content-1">Leftbar Listing</h1>
            </ul>
            <article className="leftbar-preview"></article>
          </div>
          <footer className="leftbar-midground" style={{ zIndex: 1 }}>
            <ButtonFade
              text=""
              state=""
              label="close"
              align="center"
              block="rightbar"
              style="highlight"
              icon={getSVG('close') as { dark: string; medium: string; light: string }}
            />
          </footer>
        </>
      )}
    </aside>
  );
};
export default IndexLeftbar;

function jQueryLeftbar(pageName: String, blockName: String) {
  const containerElement = `${pageName}-${blockName}` as String;

  $(`#${containerElement} button[class*="close"]`).on('click', () => {
    let safety = document.getElementById(`${pageName}-${blockName}`)?.className as string;
    if (!safety.includes('blocked')) {
      $(`#${containerElement}.expanded`).addClass('collapsed');
      $(`#${containerElement}.collapsed`).removeClass('expanded');
    }
  });
  console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
  // $(`#${containerElement} div[class*="background"] ul`).on('click', () => {
  //   if (getOrientation().includes('portrait')) {
  //     // toggleState(containerElement);
  //   }
  // });
}
