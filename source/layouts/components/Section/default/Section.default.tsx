// Section.default.tsx
import React from 'react';
import './Section.default.scss';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';

import MenuButton from '../../Menu/button/Menu.button';
import ButtonFade from '../../Button/fade/Button.fade';
import DivisionWorking from '../../Division/working/Division.working';

interface DefaultProps {
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
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar';
  state?: 'active';
  label?: 'default' | 'home' | 'skills' | 'contact';
}
const SectionDefault: React.FC<DefaultProps> = ({ info, icons, block, state }) => {
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        setTimeout(() => runJquery, 1000);
      },
      false
    );
    setTimeout(() => runJquery, 1000);
  }, []);
  let width = info.resolution.split('x')[0];
  let height = info.resolution.split('x')[1];
  let buttons = [
    {
      text: 'View Leftbar',
      label: 'leftbar',
      align: 'left',
      block: 'main',
      icon: icons.viewLeftbar,
    },
    {
      text: 'View Overlay',
      label: 'overlay',
      align: 'center',
      block: 'main',
      icon: icons.viewOverlay,
    },
    {
      text: 'View Rightbar',
      label: 'rightbar',
      align: 'right',
      block: 'main',
      icon: icons.viewRightbar,
    },
  ];

  return (
    <section
      className={`${block}-default`}
      id={state === 'active' ? `${block}-active` : ''}
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: landscape)' }) && (
        <>
          <MenuButton style="fade" info={buttons} />
        </>
      )}

      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: portrait)' }) && (
        <>
          <MenuButton style="fade" info={buttons} />
        </>
      )}
    </section>
  );
};
export default SectionDefault;

function runJquery() {
  console.log('Yay, jQuery!');
  // $('#index-main .leftbar-button').on('click', () => {
  //   console.log('Leftbar Button Clicked');
  //   var element = document.getElementById('index-leftbar') as HTMLElement;
  //   var safety: boolean = element?.className.includes('blocked');
  //   var status = element?.className.split(' ').pop() as string;
  //   if (!safety) {
  //     switch (status) {
  //       case 'expanded':
  //         $('#index-leftbar.expanded').addClass('blocked');
  //         $('#index-leftbar.expanded').addClass('expanded');
  //         setTimeout(() => {
  //           $('#index-leftbar').removeClass('blocked');
  //           $('#index-leftbar').css('display', 'none');
  //           $('#index-leftbar').removeClass('expanded');
  //         }, 1000);
  //         break;
  //       case 'collapsed':
  //         $('#index-leftbar.collapsed').css('display', 'grid');
  //         $('#index-leftbar.collapsed').addClass('blocked');
  //         $('#index-leftbar.collapsed').addClass('expanded');
  //         setTimeout(() => {
  //           $('#index-leftbar').removeClass('blocked');
  //           $('#index-leftbar').removeClass('collapsed');
  //         }, 1000);
  //         break;
  //       default:
  //         alert('ERROR!');
  //     }
  //   }
  // });
  // $('#index-main .overlay-button').on('click', () => {
  //   // console.log('Overlay Button Clicked');
  //   var element = document.getElementById('index-overlay') as HTMLElement;
  //   var safety: boolean = element?.className.includes('blocked');
  //   var status = element?.className.split(' ').pop() as string;
  //   if (!safety) {
  //     switch (status) {
  //       case 'visible':
  //         $('#index-overlay.visible').addClass('blocked');
  //         $('#index-overlay.visible').toggleClass('hidden');
  //         setTimeout(() => {
  //           $('#index-overlay').removeClass('blocked');
  //           $('#index-overlay').css('display', 'none');
  //           $('#index-overlay').removeClass('visible');
  //         }, 1000);
  //         break;
  //       case 'hidden':
  //         $('#index-overlay.hidden').css('display', 'grid');
  //         $('#index-overlay.hidden').addClass('blocked');
  //         $('#index-overlay.hidden').toggleClass('visible');
  //         setTimeout(() => {
  //           $('#index-overlay').removeClass('blocked');
  //           $('#index-overlay').removeClass('hidden');
  //         }, 1000);
  //         break;
  //       default:
  //         alert('ERROR!');
  //     }
  //   }
  // });
  // $('#index-main .rightbar-button').on('click', () => {
  //   console.log('Rightbar Button Clicked');
  //   var element = document.getElementById('index-rightbar') as HTMLElement;
  //   var safety: boolean = element?.className.includes('blocked');
  //   var status = element?.className.split(' ').pop() as string;
  //   if (!safety) {
  //     switch (status) {
  //       case 'expanded':
  //         $('#index-rightbar.expanded').addClass('blocked');
  //         $('#index-rightbar.expanded').addClass('expanded');
  //         setTimeout(() => {
  //           $('#index-rightbar').css('display', 'none');
  //           $('#index-rightbar').removeClass('blocked');
  //           $('#index-rightbar').removeClass('expanded');
  //         }, 1000);
  //         break;
  //       case 'collapsed':
  //         $('#index-rightbar.collapsed').addClass('blocked');
  //         $('#index-rightbar.collapsed').addClass('expanded');
  //         $('#index-rightbar.collapsed').css('display', 'grid');
  //         setTimeout(() => {
  //           $('#index-rightbar').removeClass('blocked');
  //           $('#index-rightbar').removeClass('collapsed');
  //         }, 1000);
  //         break;
  //       default:
  //         alert('ERROR!');
  //     }
  //   }
  // });
}
