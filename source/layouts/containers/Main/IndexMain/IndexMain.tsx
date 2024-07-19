// IndexMain.tsx
import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  showAside,
  setActive,
  scrollInfo,
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
    window.addEventListener(
      'resize',
      () => {
        setTimeout(() => jQueryMain(pageName, blockName), loadTimer);
      },
      false
    );
    setTimeout(() => jQueryMain(pageName, blockName), loadTimer);
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
  $(`#${containerElement} section`)
    .on('click', function () {
      let labelName = this.className.split('-')[1];
      let mainBlock = document.querySelector('main[id*="main"]') as HTMLElement;
      let buttonTag = document.querySelector(`.${blockName}-${labelName}`) as HTMLButtonElement;
      $(mainBlock).animate({ scrollTop: `${scrollInfo(buttonTag, mainBlock, blockName)?.scrollTop}px` }, 500);
      setTimeout(() => setMenu(blockName, labelName), 1000);
    })
    .on('mouseenter', function () {
      let labelName = this.className.split('-')[1];
      setMenu(blockName, labelName);
    });

  $(`#${containerElement} .${blockName}-leftbar`).on('click', function () {
    let leftbar = this.classList[0].split('-')[1] as string;
    // alert(leftbar);
    showAside(leftbar as string);
  });
  $(`#${containerElement} .${blockName}-overlay`).on('click', function () {
    // console.log(overlay);
    let overlay = this.classList[0].split('-')[1] as string;
    showSection(pageName, overlay);
  });
  $(`#${containerElement} .${blockName}-rightbar`).on('click', function () {
    let rightbar = this.classList[0].split('-')[1] as string;
    showAside(rightbar as string);
  });

  console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
