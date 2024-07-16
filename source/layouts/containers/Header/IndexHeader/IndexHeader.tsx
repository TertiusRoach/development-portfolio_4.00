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
          {desktop && <MenuButton block="header" style="fade" items={buttons} align="left" />}
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
    icon: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/home.svg',
  },
  {
    text: 'Skills',
    icon: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/lightbulb.svg',
  },
  {
    text: 'Contact',
    icon: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/phone.svg',
  },
];

export default IndexHeader;

function runJquery() {
  const toggleID = function (button: HTMLElement) {
    let activeButton = document.querySelector('#header-active') as HTMLElement;

    if (activeButton) {
      activeButton.removeAttribute('id');
    } else {
      console.log('No element with id "header-active" found.');
    }

    button.id = 'header-active';
    console.log(button);
  };

  $('#index-header button').on('click', function () {
    toggleID(this as HTMLElement);
  });

  // $('#index-footer button[class*="main"]').on('click', () => {
  // });

  /*

  console.log(`Leftbar: ${getResolution()}`);
  console.log(`Leftbar: ${getOrientation()}`);
  console.log(`Leftbar: ${getIdentification()}`);
  */
  // });
  // $('#index-leftbar div[class*="background"] ul').on('click', () => {
  //   if (getOrientation().includes('portrait')) {
  //     toggleState();
  //   }
  // });
  // $('#index-leftbar article[class*="preview"]').on('click', () => {
  //   let safety = document.getElementById('index-leftbar')?.className as string;
  //   if (!safety.includes('blocked')) {
  //     if (getOrientation().includes('landscape')) {
  //       $('#index-leftbar.expanded').addClass('collapsed');
  //       $('#index-leftbar.collapsed').removeClass('expanded');
  //     }
  //   }
  // });
  /*
  $('#index-leftbar footer[class*="midground"]').on('click', () => {
    if (getOrientation().includes('portrait')) {
      toggleState();
    }
  });
  */
  /*
    {
      text: 'Projects',
      icon: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/code.svg',
    },
    {
      text: 'Career',
      icon: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/briefcase.svg',
    },
    */
}
