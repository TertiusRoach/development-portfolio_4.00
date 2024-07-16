// IndexHeader.tsx
import $ from 'jquery';
import React, { useEffect } from 'react';
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
  useEffect(() => {
    let handleClick = (event: JQuery.ClickEvent) => {
      let target = event.currentTarget as HTMLButtonElement;
      scrollToSection(target);
      toggleID(target, 'header');
      // console.log('//--|🠊 Clicked on Header Element 🠈|--//');
    };

    $('#index-header button[class*="header"]').on('click', handleClick);

    return () => {
      $('#index-header button[class*="header"]').off('click', handleClick);
    };
  }, []);

  const desktop = useMediaQuery({ query: '(orientation: landscape)' });
  const mobile = useMediaQuery({ query: '(orientation: portrait)' });

  return (
    <header id="index-header" className="default-header" style={{ zIndex: 2 }}>
      <img className="signature-adjacent" src={icons.signatureAdjacent} alt="Tertius Roach" />
      {desktop && <MenuButton block="header" style="fade" align="left" items={buttons} />}
      {/* {mobile && <></>} */}
    </header>
  );
};

export default IndexHeader;

function scrollToSection(button: HTMLButtonElement) {
  const label = button.className.split(' ')[0].split('-')[1] as string;
  const mainElement = document.querySelector('#index-main') as HTMLElement;
  const scrollingCalculations = getScroll(mainElement, label);

  console.log(scrollingCalculations);

  $('main').animate({ scrollTop: `${scrollingCalculations.above}px` }, 1000);
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
