// IndexMain.tsx
import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import { getOrientation, getResolution, getIdentification } from '../../../../scripts/index';

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
  setTimeout(runJquery, 1000);
  return (
    <main id="index-main" className="default-main" style={{ zIndex: 0 }}>
      <SectionHome info={info} icons={icons} />
      <SectionSkills info={info} icons={icons} />
      <SectionContact info={info} icons={icons} />

      {/* <ButtonFade block="leftbar" state="downplay" align="left" icon={leftbarIcon} text="View Left" /> */}
      {/* <ButtonFade block="overlay" state="downplay" align="center" icon={overlayIcon} text="View Overlay" /> */}
      {/* <ButtonFade block="rightbar" state="downplay" align="right" icon={rightbarIcon} text="View Right" /> */}
    </main>
  );
  console.log('IndexMain Loaded');
};
export default IndexMain;

let leftbarIcon: string =
  'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d91af6bec60526e66cfb2dccee7248cce0ad035b/source/assets/svg-files/font-awesome/testing-icons/solid/angle-right.svg';
let overlayIcon: string =
  'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d91af6bec60526e66cfb2dccee7248cce0ad035b/source/assets/svg-files/font-awesome/testing-icons/solid/star.svg';
let rightbarIcon: string =
  'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d91af6bec60526e66cfb2dccee7248cce0ad035b/source/assets/svg-files/font-awesome/testing-icons/solid/angle-left.svg';

function runJquery() {
  $('#index-main .leftbar-button').on('click', () => {
    console.log('Leftbar Button Clicked');
    var element = document.getElementById('index-leftbar')?.className as string;
    var status = element.split(' ').pop() as string;
    // console.log(status);
    switch (status) {
      case 'expanded':
        $('#index-leftbar.expanded').toggleClass('collapsed');
        $('#index-leftbar.expanded').removeClass('expanded');
        break;
      case 'collapsed':
        $('#index-leftbar.collapsed').toggleClass('expanded');
        $('#index-leftbar.collapsed').removeClass('collapsed');
        break;
      default:
        alert('ERROR!');
    }
  });
  $('#index-main .overlay-button').on('click', () => {
    // console.log('Overlay Button Clicked');

    var element = document.getElementById('index-overlay') as HTMLElement;
    var safety: boolean = element?.className.includes('blocked');
    var status = element?.className.split(' ').pop() as string;
    if (!safety) {
      switch (status) {
        case 'visible':
          $('#index-overlay.visible').addClass('blocked');
          $('#index-overlay.visible').toggleClass('hidden');
          setTimeout(() => {
            $('#index-overlay').removeClass('blocked');
            $('#index-overlay').css('display', 'none');
            $('#index-overlay').removeClass('visible');
          }, 1000);
          break;
        case 'hidden':
          $('#index-overlay.hidden').css('display', 'grid');
          $('#index-overlay.hidden').addClass('blocked');
          $('#index-overlay.hidden').toggleClass('visible');
          setTimeout(() => {
            $('#index-overlay').removeClass('blocked');
            $('#index-overlay').removeClass('hidden');
          }, 1000);
          break;
        default:
          alert('ERROR!');
      }
    }
  });
  $('#index-main .rightbar-button').on('click', () => {
    console.log('Rightbar Button Clicked');
    var element = document.getElementById('index-rightbar')?.className as string;
    var status = element.split(' ').pop() as string;
    // console.log(status);
    switch (status) {
      case 'expanded':
        $('#index-rightbar.expanded').toggleClass('collapsed');
        $('#index-rightbar.expanded').removeClass('expanded');
        break;
      case 'collapsed':
        $('#index-rightbar.collapsed').toggleClass('expanded');
        $('#index-rightbar.collapsed').removeClass('collapsed');
        break;
      default:
        alert('ERROR!');
    }
  });
}
/*
  let pageName = getIdentification() as string;
  let blockName: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar';
  console.log(info);
  console.log(icons);
  */
