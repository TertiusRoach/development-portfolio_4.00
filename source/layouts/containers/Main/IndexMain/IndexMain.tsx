// IndexMain.tsx
import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import ButtonFade from '../../../components/Button/fade/Button.fade';
import SectionHome from '../../../components/Section/home/Section.home';
import SectionSkills from '../../../components/Section/skills/Section.skills';
import SectionContact from '../../../components/Section/contact/Section.contact';
import SectionDefault from '../../../components/Section/default/Section.default';
import { showAside, setActive, getScroll, showSection, getIdentification, getSVG } from '../../../../scripts/index';

interface InfoProps {
  info: {
    resolution: string;
    orientation: string;
    identification: string;
  };
}

const IndexMain: React.FC<InfoProps> = ({ info }) => {
  const loadTimer = 1000;
  const blockName = 'main';
  const pageName = getIdentification() as String;
  const mobile = useMediaQuery({ query: '(orientation: portrait)' });
  const desktop = useMediaQuery({ query: '(orientation: landscape)' });

  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => jQueryMain(pageName, blockName), loadTimer);
    };

    window.addEventListener('resize', handleResize);
    setTimeout(() => jQueryMain(pageName, blockName), loadTimer);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main id="index-main" className="default-main" style={{ zIndex: 0 }}>
      <SectionHome info={info} block="main" state="active" />
      <div style={{ height: '250px', background: 'green' }}>
        <h1 className="display-1">ADDSPACE!!!!</h1>
      </div>
      <SectionSkills info={info} block="main" />
      <div style={{ height: '500px', background: 'darkgreen' }}>
        <h1 className="display-1">MORE ADDSPACE!!!!</h1>
      </div>
      <SectionContact info={info} block="main" />
      {/* <SectionDefault info={info} block="main" state="active" /> */}
    </main>
  );
  console.log('IndexMain Loaded');
};
export default IndexMain;

function jQueryMain(pageName: String, blockName: string) {
  const containerElement = `${pageName}-${blockName}`;
  $(`#${containerElement} section`).on('click', function (event) {
    let navigation = ['header', 'footer'];
    let mainContainer = document.querySelector(`#${pageName}-main`) as HTMLElement;
    let tagName = event.target.parentElement?.tagName as 'BUTTON' | string;
    let parent = event.target.parentElement as HTMLElement;
    if (tagName === 'BUTTON') {
      for (let i = 0; i < navigation.length; i++) {
        var labelName = parent.classList[0].split('-')[1] as string;
        var buttonElement = document.querySelector(`button[class*="${labelName}"]`) as HTMLButtonElement;
        $(mainContainer).animate({ scrollTop: `${getScroll(buttonElement, mainContainer)?.scrollTop as Number}px` }, 750);
      }
    } else {
      var buttonElement = this as HTMLButtonElement;
      for (let i = 0; i < navigation.length; i++) {
        setActive(this as HTMLButtonElement, navigation[i]);
      }
      $(mainContainer).animate({ scrollTop: `${getScroll(buttonElement, mainContainer)?.scrollTop as Number}px` }, 250);
    }
  });
  $(`#${containerElement} .rightbar-projects`).on('click', function () {
    const rightbar = this.classList[0].split('-')[0];
    if (rightbar.includes('rightbar')) {
      showAside(rightbar);
    }
  });
  $(`#${containerElement} .overlay-career`).on('click', function () {
    const overlay = this.classList[0].split('-')[0];
    if (overlay.includes('overlay')) {
      showSection(`${pageName}`, overlay);
    }
  });

  console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
