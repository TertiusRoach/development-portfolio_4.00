// IndexHeader.tsx
import $ from 'jquery';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import MenuButton from '../../../components/Menu/button/Menu.button';

import { getResolution, getOrientation, getIdentification } from '../../../../scripts/index';

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
  setTimeout(runJquery, 1000);
  let desktop = useMediaQuery({ query: '(orientation: landscape)' });
  let mobile = useMediaQuery({ query: '(orientation: portrait)' });

  return (
    <>
      <header id="index-header" className="default-header" style={{ zIndex: 2 }}>
        <img className="signature-adjacent" src={icons.signatureAdjacent} alt="Tertius Roach" />

        <>
          {desktop && <MenuButton block="header" style="fade" align="left" items={buttons} />}
          {mobile && <></>}
        </>
      </header>
    </>
  );
  console.log('IndexHeader Loaded');
};

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

export default IndexHeader;

function runJquery() {
  $('#index-header button').on('click', function () {
    let test = document.querySelector(`#main-active`) as HTMLElement;
    console.log(test);
    // setTimeout(() => , 1000);
    toggleID(this as HTMLElement, 'header');

    // let parent = this.parentElement as HTMLMenuElement;
    // let block = ;
    // let link = block.id.split('-')[0];

    // console.log(link);
  });

  const toggleID = function (button: HTMLElement, block: 'header' | 'footer') {
    if (button.parentElement?.tagName === 'MENU') {
      // console.log
      let activeButton = document.querySelector(`#${block}-active`) as HTMLElement;

      if (activeButton) {
        activeButton.removeAttribute('id');
      } else {
        console.log(`//--|🠊 No Element: #${block}-active 🠈|--//`);
      }

      button.id = `${block}-active`;
      return `#${button.id}`;
    }
  };
}
