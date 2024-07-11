import $ from 'jquery';
import React, { useEffect } from 'react';
import useMediaQuery from 'react-responsive';
import ButtonFade from '../../../components/Button/fade/Button.fade';

import { getOrientation, getResolution, getIdentification } from '../../../../scripts/index';

interface InfoProps {
  icons: Object;

  resolution?: string;
  orientation?: string | 'landscape' | 'portrait' | boolean;
  identification?: string;
}
const IndexMain: React.FC<InfoProps> = (icons) => {
  let pageName = getIdentification() as string;
  let blockName: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar';

  console.log(icons);
  setTimeout(runJquery, 1000);

  let leftbarIcon: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d91af6bec60526e66cfb2dccee7248cce0ad035b/source/assets/svg-files/font-awesome/testing-icons/solid/angle-right.svg';
  let overlayIcon: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d91af6bec60526e66cfb2dccee7248cce0ad035b/source/assets/svg-files/font-awesome/testing-icons/solid/star.svg';
  let rightbarIcon: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d91af6bec60526e66cfb2dccee7248cce0ad035b/source/assets/svg-files/font-awesome/testing-icons/solid/angle-left.svg';

  return (
    <main id="index-main" className="default-main" style={{ zIndex: 0 }}>
      <ButtonFade block="leftbar" state="downplay" align="left" icon={leftbarIcon} /*text="View Left"*/ />
      <ButtonFade block="overlay" state="highlight" align="center" icon={overlayIcon} text="My Career" />
      <ButtonFade block="rightbar" state="downplay" align="right" icon={rightbarIcon} /* text="View Right" */ />

      {/* <button className="leftbar-button">
        <h1>leftbar-button</h1>
      </button> */}
      {/* <button className="overlay-button">
        <h1>overlay-button</h1>
      </button> */}
      {/* <button className="rightbar-button">
        <h1>rightbar-button</h1>
      </button> */}
    </main>
  );
  console.log('IndexMain Loaded');
};
export default IndexMain;

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
