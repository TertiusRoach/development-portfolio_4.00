import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  showAside,
  setActive,
  getScroll,
  showSection,
  getResolution,
  getOrientation,
  getIdentification,
  setMenu,
} from '../../../../scripts/index';

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
  const loadTimer: number = 1000;
  const blockName: String = 'main';
  const pageName: String = getIdentification();
  const mobile: boolean = useMediaQuery({ query: '(orientation: portrait)' });
  const desktop: boolean = useMediaQuery({ query: '(orientation: landscape)' });

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

function jQueryMain(pageName: String, blockName: String) {
  const containerElement = `${pageName}-${blockName}`;
  const $container = $(`#${containerElement}`);

  $container.find('section').on('click', function () {
    const $this = $(this);
    const $main = $this.closest(`#${containerElement}`);

    if ($main.length) {
      const labelName = this.className.split('-')[1];
      const buttonTag = document.querySelector(`.${blockName}-${labelName}`) as HTMLButtonElement;
      if (buttonTag && $main.length) {
        $main.animate({ scrollTop: `${getScroll(buttonTag, $main[0], blockName)?.scrollTop}px` }, 500);
        setTimeout(() => setMenu(blockName, labelName), 1000);
      }
    }
  });

  $container.find(`.${blockName}-leftbar`).on('click', function () {
    const leftbar = this.classList[0].split('-')[1];
    showAside(leftbar);
  });

  $container.find(`.${blockName}-overlay`).on('click', function () {
    const overlay = this.classList[0].split('-')[1];
    showSection(`${getIdentification()}`, overlay);
  });

  $container.find(`.${blockName}-rightbar`).on('click', function () {
    const rightbar = this.classList[0].split('-')[1];
    showAside(rightbar);
  });

  console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
