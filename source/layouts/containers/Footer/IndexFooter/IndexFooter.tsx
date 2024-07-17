import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import MenuAnchor from '../../../components/Menu/anchor/Menu.anchor';
import MenuButton from '../../../components/Menu/button/Menu.button';
import ButtonFade from '../../../components/Button/fade/Button.fade';

import { getResolution, getOrientation, getIdentification, showSection, showAside } from '../../../../scripts/index';
const anchors = [
  {
    name: 'GitHub',
    href: 'https://github.com/TertiusRoach',
    icon: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/06cff392403d55ce6dc06e713bda63625f1252f2/source/assets/svg-files/font-awesome/testing-icons/brands/github.svg',
    target: '_blank',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@TertiusRoach',
    icon: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/06cff392403d55ce6dc06e713bda63625f1252f2/source/assets/svg-files/font-awesome/testing-icons/brands/youtube.svg',
    target: '_blank',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tertius-roach/',
    icon: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/06cff392403d55ce6dc06e713bda63625f1252f2/source/assets/svg-files/font-awesome/testing-icons/brands/linkedin.svg',
    target: '_blank',
  },
];
const buttons = [
  {
    text: 'Home',
    label: 'home',
    icon: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/home.svg',
  },
  {
    text: 'Skills',
    label: 'skills',
    icon: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/lightbulb.svg',
  },
  {
    text: 'Contact',
    label: 'contact',
    icon: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/phone.svg',
  },
];

interface InfoProps {
  icons: {
    projects: string;
  };
  info: {
    resolution: string;
    orientation: string | 'landscape' | 'portrait';
    identification: string | 'index' | 'resume' | 'ticket' | 'university' | 'fitness';
  };
}
const IndexFooter: React.FC<InfoProps> = ({ icons }) => {
  const timer: number = 2000;
  const blockName: String = 'footer';
  const pageName: String = getIdentification();
  const desktop: boolean = useMediaQuery({ query: '(orientation: landscape)' });
  const mobile: boolean = useMediaQuery({ query: '(orientation: portrait)' });

  useEffect(() => {
    let element = document.getElementById(`${pageName}-${blockName}`) as HTMLElement;
    let jQueryFooter = function () {
      $(`#${pageName}-${blockName} button[class*="${blockName}"]`).on('click', function () {
        //--|🠋 Safety Check 🠋|--//
        if (!this.id) {
          let buttonElement = this as HTMLButtonElement;
          let mainElement = document.querySelector('main[id*="main"]') as HTMLElement;
          showSection(buttonElement, mainElement, 'footer');
        }
      });
      $(`#${pageName}-${blockName} .rightbar-button`).on('click', function () {
        let rightbar = this.classList[0].split('-')[0] as string;
        showAside(rightbar);
      });
      console.log(`Refreshed: jQuery ${blockName}`);
    };
    window.addEventListener(
      'resize',
      () => {
        setTimeout(jQueryFooter, timer);
      },
      false
    );
    setTimeout(jQueryFooter, timer);
  }, []);
  return (
    <>
      {/* How do I refresh the useEffect everytime the screen rotates? */}
      <footer id="index-footer" className="default-footer" style={{ zIndex: 1 }}>
        {desktop && (
          <>
            <MenuAnchor block="footer" items={anchors} style="icon" align="center" />
          </>
        )}
        {mobile && (
          <>
            <MenuButton block="footer" items={buttons} style="fade" align="center" />
            <ButtonFade block={`rightbar`} view="downplay" align="right" icon={icons.projects} text="Projects" />
          </>
        )}
      </footer>
    </>
  );
  console.log('IndexFooter Loaded');
};

export default IndexFooter;

// function scrollToSection(button: HTMLButtonElement) {
//   /*
//   const label = button.className.split(' ')[0].split('-')[1] as string;
//   const mainElement = document.querySelector('#index-main') as HTMLElement;
//   const scrollingCalculations = getScroll(mainElement, label);

//   console.log(scrollingCalculations);

//   $('main').animate({ scrollTop: `${scrollingCalculations.above}px` }, 1000);
//   */
// }
// function toggleID(button: HTMLButtonElement, block: 'header' | 'footer') {
//   if (button.parentElement?.tagName === 'MENU') {
//     let activeButton = document.querySelector(`#${block}-active`) as HTMLElement;

//     if (activeButton) {
//       activeButton.removeAttribute('id');
//     } else {
//       console.log(`//--|🠊 No Element: #${block}-active 🠈|--//`);
//     }

//     button.id = `${block}-active`;
//     return `#${button.id}`;
//   }
// }

// function getIndex(container: HTMLElement, label: string) {
//   console.log('FOOTER FUNCTION!');
// }
// function getScroll(container: HTMLElement, label: string) {
//   console.log('FOOTER FUNCTION!');
// }
/*
    $(`#${pageName}-${blockName} button`).on('click', function () {
      if (this.parentElement?.tagName === 'MENU') {
        let block = this.classList[0].split('-')[0];
        let selected = document.querySelector(`#${block}-active`) as HTMLElement;
        if (selected) {
          selected.removeAttribute('id');
        } else {
          console.log(`//--|🠊 No Element: #${block}-active 🠈|--//`);
        }

        this.id = `${block}-active`;
      }
    });
    */
