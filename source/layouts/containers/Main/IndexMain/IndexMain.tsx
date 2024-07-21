// IndexMain.tsx
import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { showAside, setActive, getScroll, showSection, getIdentification } from '../../../../scripts/index';

import ButtonFade from '../../../components/Button/fade/Button.fade';
import SectionHome from '../../../components/Section/home/Section.home';
import SectionSkills from '../../../components/Section/skills/Section.skills';
import SectionContact from '../../../components/Section/contact/Section.contact';
import SectionDefault from '../../../components/Section/default/Section.default';

interface InfoProps {
  info: {
    resolution: string;
    orientation: string;
    identification: string;
  };
  icons: {
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
}

const IndexMain: React.FC<InfoProps> = ({ info, icons }) => {
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
      <SectionDefault block="main" state="active" info={info} icons={icons} />
      <SectionHome info={info} icons={icons} block="main" state="active" />
      <div style={{ height: '256px', background: 'green' }}>
        <h1 className="display-1">ADDSPACE!!!!</h1>
      </div>
      <SectionSkills info={info} icons={icons} block="main" />
      <div style={{ height: '568px', background: 'darkgreen' }}>
        <h1 className="display-1">MORE ADDSPACE!!!!</h1>
      </div>
      <SectionContact info={info} icons={icons} block="main" />
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

    for (let i = 0; i < navigation.length; i++) {
      if (event.target.parentElement?.tagName === 'BUTTON') {
        var labelName = event.target.parentElement.classList[0].split('-')[1] as string;
        var buttonElement = document.querySelector(`button[class*="${labelName}"]`) as HTMLButtonElement;
        $(mainContainer).animate({ scrollTop: `${getScroll(buttonElement, mainContainer)?.scrollTop as Number}px` }, 1000);
      } else {
        var buttonElement = this as HTMLButtonElement;
        setActive(this as HTMLButtonElement, navigation[i]);
        $(mainContainer).animate({ scrollTop: `${getScroll(buttonElement, mainContainer)?.scrollTop as Number}px` }, 1000);
      }
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
