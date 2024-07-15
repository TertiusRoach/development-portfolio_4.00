// IndexHeader.tsx
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
  let desktop = useMediaQuery({ query: '(orientation: landscape)' });
  let mobile = useMediaQuery({ query: '(orientation: portrait)' });
  return (
    <>
      <header id="index-header" className="default-header" style={{ zIndex: 2 }}>
        <img className="signature-adjacent" src={icons.signatureAdjacent} alt="Tertius Roach" />

        <>
          {desktop && <MenuButton block="main" style="fade" items={buttons} align="left" />}
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
