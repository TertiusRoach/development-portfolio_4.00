// Division.carousel.tsx

/*
import $ from 'jquery';
import React from 'react';
import './Section.home.scss';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';

import { getSVG } from '../../../../modules/utilities/getFile';
import ButtonFade from '../../Button/fade/Button.fade';
// import setButton from '../../../../modules/utilities/setActive';
import getScroll from '../../../../modules/utilities/getScroll';
import showAside from '../../../../modules/utilities/toggleAside';
import toggleSection from '../../../../modules/utilities/toggleSection';
import DivisionWorking from '../working/Division.working';
import getIdentification from '../../../../modules/utilities/getIdentification';

interface CarouselProps {
  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
  labelName: 'home';
  stateType: 'active' | '';
  blockName: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
}
const DivisionCarousel: React.FC<CarouselProps> = ({ info, labelName, blockName, stateType }) => {
  const loadTimer = 1000;
  const width = info.resolution.split('x')[0];
  const height = info.resolution.split('x')[1];
  const pageName: String = getIdentification();
  useEffect(() => {
    let handleResize = () => {
      jQueryCarousel(pageName, blockName);
    };

    window.addEventListener('resize', handleResize);
    setTimeout(() => jQueryCarousel(pageName, blockName), loadTimer);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let mobile: boolean = useMediaQuery({ query: '(orientation: portrait)' });
  let desktop: boolean = useMediaQuery({ query: '(orientation: landscape)' });

  let career = getSVG('career') as { dark: string; medium: string; light: string };
  let contact = getSVG('contact') as { dark: string; medium: string; light: string };
  let projects = getSVG('projects') as { dark: string; medium: string; light: string };
  return (
    <section
      className={`${blockName}-${labelName}`}
      id={stateType === 'active' ? `${blockName}-active` : ''}
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      {// <DivisionWorking align="center" text="Home" info={info} icon={icons.home} /> //}
      {//--|🠋 Desktop (Landscape) 🠋|--//}
      {desktop && (
        <>
          <div id={`${labelName}-foreground`} style={{ zIndex: 2 }}></div>
          <div id={`${labelName}-midground`} style={{ zIndex: 1 }}></div>
          <div id={`${labelName}-background`} style={{ zIndex: 0 }}></div>
        </>
      )}
      {//--|🠋 Mobile (Portrait) 🠋|--//}
      {mobile && (
        <>
          <div id={`${labelName}-foreground`} style={{ zIndex: 2 }}></div>
          <div id={`${labelName}-midground`} style={{ zIndex: 1 }}></div>
          <div id={`${labelName}-background`} style={{ zIndex: 0 }}></div>
        </>
      )}
    </section>
  );
};

export default DivisionCarousel;

function jQueryCarousel(pageName: String, blockName: string) {
  const containerElement = `${pageName}-${blockName}`;
  //
  // $(`#${containerElement} section`).on('click', function (event) {
  //   let navigation = ['header', 'footer'];
  //   let mainContainer = document.querySelector(`#${pageName}-main`) as HTMLElement;
  //   let parent = event.target.parentElement?.parentElement as HTMLButtonElement;
  //   let tagName = parent.tagName as 'BUTTON' | string;
  //   if (tagName === 'BUTTON') {
  //     for (let i = 0; i < navigation.length; i++) {
  //       var labelName = parent.classList[0].split('-')[1] as string;
  //       var buttonElement = document.querySelector(`button[class*="${labelName}"]`) as HTMLButtonElement;
  //       $(mainContainer).animate({ scrollTop: `${getScroll(buttonElement, mainContainer)?.scrollTop as Number}px` }, 750);
  //     }
  //   } else {
  //     var buttonElement = this as HTMLButtonElement;
  //     for (let i = 0; i < navigation.length; i++) {
  //       setActive(this as HTMLButtonElement, navigation[i]);
  //     }
  //     $(mainContainer).animate({ scrollTop: `${getScroll(buttonElement, mainContainer)?.scrollTop as Number}px` }, 250);
  //   }
  // });
  // $(`#${containerElement} .rightbar-projects`).on('click', function () {
  //   const rightbar = this.classList[0].split('-')[0];
  //   if (rightbar.includes('rightbar')) {
  //     showAside(rightbar);
  //   }
  // });
  // $(`#${containerElement} .overlay-career`).on('click', function () {
  //   const overlay = this.classList[0].split('-')[0];
  //   if (overlay.includes('overlay')) {
  //     showSection(`${pageName}`, overlay);
  //   }
  // });
  //

  console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
*/
