import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import MenuAnchor from '../../../components/Menu/anchor/Menu.anchor';
import MenuButton from '../../../components/Menu/button/Menu.button';
import ButtonFade from '../../../components/Button/fade/Button.fade';

import { getResolution, getOrientation, getIdentification, getIndex, getScroll } from '../../../../scripts/index';
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
  setTimeout(jQueryFooter, 2000);
  useEffect(() => {
    let handleClick = (event: JQuery.ClickEvent) => {
      let target = event.currentTarget as HTMLButtonElement;
      scrollToSection(target);
      toggleID(target, 'footer');
      // console.log('//--|🠊 Clicked on Header Element 🠈|--//');
    };

    $(`#${getIdentification()}-footer button[class*="footer"]`).on('click', handleClick);

    return () => {
      $(`#${getIdentification()}-footer button[class*="footer"]`).off('click', handleClick);
    };
  }, []);

  let desktop = useMediaQuery({ query: '(orientation: landscape)' });
  let mobile = useMediaQuery({ query: '(orientation: portrait)' });
  return (
    <>
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
export default IndexFooter;

function jQueryFooter() {
  $('#index-footer button').on('click', function () {
    toggleID(this as HTMLElement, 'footer');
  });

  $('#index-footer .rightbar-button').on('click', () => {
    console.log('Rightbar Button Clicked');
    var element = document.getElementById('index-rightbar') as HTMLElement;
    var safety: boolean = element?.className.includes('blocked');
    var status = element?.className.split(' ').pop() as string;
    if (!safety) {
      switch (status) {
        case 'expanded':
          $('#index-rightbar.expanded').addClass('blocked');
          $('#index-rightbar.expanded').addClass('expanded');
          setTimeout(() => {
            $('#index-rightbar').removeClass('blocked');
            $('#index-rightbar').css('display', 'none');
            $('#index-rightbar').removeClass('expanded');
          }, 1000);
          break;
        case 'collapsed':
          $('#index-rightbar.collapsed').css('display', 'grid');
          $('#index-rightbar.collapsed').addClass('blocked');
          $('#index-rightbar.collapsed').addClass('expanded');
          setTimeout(() => {
            $('#index-rightbar').removeClass('blocked');
            $('#index-rightbar').removeClass('collapsed');
          }, 1000);
          break;
        default:
          alert('ERROR!');
      }
    }
  });

  const toggleID = function (button: HTMLElement, block: 'header' | 'footer') {
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
  };
}

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
