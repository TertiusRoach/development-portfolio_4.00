import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { getSVG } from '../../../../modules/utilities/getFile';
import ButtonFade from '../../../components/Button/fade/Button.fade';
import MenuButton from '../../../components/Menu/button/Menu.button';
import getResolution from '../../../../modules/utilities/getResolution';
import getOrientation from '../../../../modules/utilities/getOrientation';
import toggleSection from '../../../../modules/utilities/toggleSection';
import getIdentification from '../../../../modules/utilities/getIdentification';

interface InfoProps {
  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
}

const LandingOverlay: React.FC<InfoProps> = ({ info }) => {
  const jQueryTimer: number = 3000;
  const blockName: String = 'overlay';
  const pageName: String = info.identification;

  useEffect(() => {}, [pageName, blockName]);
  function getElements(orientation: '<desktop>' | '<mobile>') {
    switch (orientation) {
      case '<desktop>':
        return {
          buttons: [
            {
              href: '',
              state: '',
              text: 'Close',
              label: 'close',
              align: 'center',
              block: 'rightbar',
              style: 'downplay',
              icon: getSVG('close'),
            },
            {
              href: '',
              state: '',
              align: 'center',
              text: 'Download',
              label: 'download',
              block: 'rightbar',
              style: 'downplay',
              icon: getSVG('download'),
            },
          ],
          criteria: {
            buildDesign: '<fade>',
            buildAxis: '<horizontal>',
            buildElement: '<buttons>',
          },
        } as {
          buttons: {
            text?: string;
            href?: string;
            state?: 'active' | '';
            label: 'home' | string;
            style: 'highlight' | 'downplay';
            align: 'left' | 'center' | 'right' | string;
            icon: { dark: string; medium: string; light: string };
            block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
          }[];
          criteria: {
            buildAxis: '<vertical>' | '<horizontal>';
            buildDesign: '<fade>' | '<icon>' | '<text>' | string;
            buildElement: '<buttons>' | '<anchors>' | '<ordered>' | '<unordered>';
          };
        };
      case '<mobile>':
        return {
          buttons: [
            {
              href: '',
              state: '',
              text: 'Close',
              label: 'close',
              align: 'center',
              block: 'overlay',
              style: 'downplay',
              icon: getSVG('close'),
            },
          ],
          criteria: {
            buildDesign: '<fade>',
            buildAxis: '<horizontal>',
            buildElement: '<buttons>',
          },
        } as {
          buttons: {
            text?: string;
            href?: string;
            state?: 'active' | '';
            label: 'home' | string;
            style: 'highlight' | 'downplay';
            align: 'left' | 'center' | 'right' | string;
            icon: { dark: string; medium: string; light: string };
            block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
          }[];
          criteria: {
            buildAxis: '<vertical>' | '<horizontal>';
            buildDesign: '<fade>' | '<icon>' | '<text>' | string;
            buildElement: '<buttons>' | '<anchors>' | '<ordered>' | '<unordered>';
          };
        };
    }
  }
  let desktopElements = getElements('<desktop>') as {
    buttons: {
      label: 'home' | string;
      style: 'highlight' | 'downplay';
      align: 'left' | 'center' | 'right' | string;
      icon: { dark: string; medium: string; light: string };
      block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;

      text?: string;
      href?: string;
      state?: 'active' | '';
    }[];
    criteria: {
      buildAxis: '<vertical>' | '<horizontal>';
      buildDesign: '<fade>' | '<icon>' | '<text>';
      buildElement: '<buttons>' | '<anchors>' | '<ordered>' | '<unordered>';
    };
  };
  let mobileElements = getElements('<mobile>') as {
    buttons: {
      label: 'home' | string;
      style: 'highlight' | 'downplay';
      align: 'left' | 'center' | 'right' | string;
      icon: { dark: string; medium: string; light: string };
      block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;

      text?: string;
      href?: string;
      state?: 'active' | '';
    }[];
    criteria: {
      buildAxis: '<vertical>' | '<horizontal>';
      buildDesign: '<fade>' | '<icon>' | '<text>';
      buildElement: '<buttons>' | '<anchors>' | '<ordered>' | '<unordered>';
    };
  };
  return (
    <section id="resume-overlay" className="default-overlay hidden" style={{ zIndex: 3, display: 'none' }}>
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {(useMediaQuery({ query: '(orientation: landscape)' }) as boolean) && (
        <>
          <header className="overlay-foreground" style={{ zIndex: 2 }}>
            <MenuButton criteria={desktopElements.criteria} input={desktopElements.buttons} />
          </header>
          <div className="overlay-midground" style={{ zIndex: 1 }}>
            <iframe src="https://drive.google.com/file/d/1VWkjmzFQ-LgJP5-PAEh5PV1-uMaFKB3e/preview"></iframe>
            {/* <img
              alt="Page One"
              className="page-one"
              src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/main/source/assets/png-files/resume-page/curriculum-vitae/page-1.png"
            /> */}
          </div>
          <footer className="overlay-background" style={{ zIndex: 0 }}></footer>
        </>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {(useMediaQuery({ query: '(orientation: portrait)' }) as boolean) && (
        <>
          <header className="overlay-foreground" style={{ zIndex: 2 }}></header>

          <div className="overlay-midground" style={{ zIndex: 1 }}>
            <h1>Build style here.</h1>
          </div>

          <footer className="overlay-background" style={{ zIndex: 0 }}>
            <MenuButton criteria={mobileElements.criteria} input={mobileElements.buttons} />
          </footer>
        </>
      )}
    </section>
  );
};
export default LandingOverlay;
