// IndexMain.tsx
import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  getResolution,
  getOrientation,
  getIdentification,
  scrollInfo,
  showAside,
  showSection,
  setActive,
} from '../../../../scripts/index';

import ButtonFade from '../../../components/Button/fade/Button.fade';
import SectionHome from '../../../components/Section/home/Section.home';
import SectionSkills from '../../../components/Section/skills/Section.skills';
import SectionContact from '../../../components/Section/contact/Section.contact';

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
  const timer: number = 1000;
  const blockName: String = 'main';
  const pageName: String = getIdentification();
  const desktop: boolean = useMediaQuery({ query: '(orientation: landscape)' });
  const mobile: boolean = useMediaQuery({ query: '(orientation: portrait)' });
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        setTimeout(() => jQueryMain(blockName, pageName), timer);
      },
      false
    );
    setTimeout(() => jQueryMain(blockName, pageName), timer);
  }, []);
  return (
    <main id="index-main" className="default-main" style={{ zIndex: 0 }}>
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

function jQueryMain(blockName: String, pageName: String) {
  const blockElement = `${pageName}-${blockName}`;
  $(`#${blockElement} section`).on('mouseenter', function () {
    // Get the selected label from the button class name
    const selectLabel = this.className.split('-')[1];

    // Get currently active section and the selected section elements
    const activeSection = document.getElementById('main-active') as HTMLElement;
    const selectSection = document.querySelector(`.${blockName}-${selectLabel}`) as HTMLElement;

    // Update the active section
    if (activeSection) {
      activeSection.removeAttribute('id');
    }
    if (selectSection) {
      selectSection.setAttribute('id', 'main-active');
    }

    // Determine orientation and update the active button accordingly
    const updateActiveButton = (activeId: string, buttonClass: string) => {
      const activeButton = document.getElementById(activeId) as HTMLButtonElement;
      const selectButton = document.querySelector(`.${buttonClass}-${selectLabel}`) as HTMLButtonElement;

      if (activeButton) {
        activeButton.removeAttribute('id');
      }
      if (selectButton) {
        selectButton.setAttribute('id', activeId);
      }
    };

    const orientation = getOrientation();
    if (orientation === 'desktop-landscape') {
      updateActiveButton('header-active', 'header');
    } else if (orientation === 'mobile-portrait') {
      updateActiveButton('footer-active', 'footer');
    }
  });

  $(`#${blockElement} .leftbar-button`).on('click', function () {
    let leftbar = this.classList[0].split('-')[0] as string;
    showAside(leftbar as string);
  });
  $(`#${blockElement} .overlay-button`).on('click', function () {
    // console.log(overlay);
    let overlay = this.classList[0].split('-')[0] as string;
    showSection(pageName, overlay);
  });
  $(`#${blockElement} .rightbar-button`).on('click', function () {
    let rightbar = this.classList[0].split('-')[0] as string;
    showAside(rightbar as string);
  });

  console.log(`Refreshed: jQuery ${blockName}`);
}
