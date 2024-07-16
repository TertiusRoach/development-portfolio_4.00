// IndexHeader.tsx
import $ from 'jquery';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import MenuButton from '../../../components/Menu/button/Menu.button';

import { getResolution, getOrientation, getIdentification, getIndex, getScroll } from '../../../../scripts/index';
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
    signatureAdjacent: string;
  };
  info: {
    resolution: string;
    orientation: string | 'landscape' | 'portrait';
    identification: string | 'index' | 'resume' | 'ticket' | 'university' | 'fitness';
  };
}

const IndexHeader: React.FC<InfoProps> = ({ icons }) => {
  $('#index-header button[class*="header"]').on('click', function () {
    console.log('//--|🠊 Clicked on Header Element 🠈|--//');
    let target = this as HTMLButtonElement;
    toggleID(target, 'header');
    // console.log('Adding click listener'); // This will log a message each time the listener is attached
    // console.log(event.currentTarget);
    scrollToSection(target);
  });
  // setTimeout(jQueryHeader, 1000);

  let desktop = useMediaQuery({ query: '(orientation: landscape)' });
  let mobile = useMediaQuery({ query: '(orientation: portrait)' });

  return (
    <>
      <header id="index-header" className="default-header" style={{ zIndex: 2 }}>
        <img className="signature-adjacent" src={icons.signatureAdjacent} alt="Tertius Roach" />
        <>
          {desktop && <MenuButton block="header" style="fade" align="left" items={buttons} />}
          {/* {mobile && <></>} */}
        </>
      </header>
    </>
  );
  console.log('IndexHeader Loaded');
};

export default IndexHeader;

function scrollToSection(event: HTMLButtonElement) {
  const label = event.className.split(' ')[0].split('-')[1] as string;
  const mainElement = document.querySelector('#index-main') as HTMLElement;
  const sectionElement = document.querySelector(`section[class*="${label}"]`) as HTMLElement;
  const scrollingCalculations: { above: Number; below: Number; active: Number; adjust: Number } = getScroll(
    mainElement,
    label
  );

  console.log(scrollingCalculations);

  $('main').animate({ scrollTop: `+=${scrollingCalculations.adjust}px` }, 1000);

  // console.log(`getScroll called for label: ${label}`);
  // console.log(
  //   `Above: ${scrolling.above}, Below: ${scrolling.below}, Active: ${scrolling.active}, Adjust: ${scrolling.adjust}`
  // );
}
function toggleID(button: HTMLButtonElement, block: 'header' | 'footer') {
  if (button.parentElement?.tagName === 'MENU') {
    let activeButton = document.querySelector(`#${block}-active`) as HTMLElement;

    if (activeButton) {
      activeButton.removeAttribute('id');
    } else {
      console.log(`//--|🠊 No Element: #${block}-active 🠈|--//`);
    }

    button.id = `${block}-active`;
    return `#${button.id}`;
  }
}

function jQueryHeader() {
  // $('button[class*="header"').on('click', (event) => {
  // });
  // console.log(document.querySelector('button[class*="header"]'));
}
