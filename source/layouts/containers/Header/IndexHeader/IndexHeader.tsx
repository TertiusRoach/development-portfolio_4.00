// IndexHeader.tsx
import React from 'react';
import MenuButton from '../../../components/Menu/button/Menu.button';

import { getResolution, getOrientation, getIdentification } from '../../../../scripts/index';

interface InfoProps {
  info: Object;
  resolution?: string;
  orientation?: string | 'landscape' | 'portrait' | boolean;
  identification?: string;
}

const IndexHeader: React.FC<InfoProps> = (info) => {
  /*
  console.log(info);
  console.log(getResolution());
  console.log(getOrientation());
  console.log(getIdentification());
  */

  let buttons = [
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

  return (
    <>
      <header id="index-header" className="default-header" style={{ zIndex: 2 }}>
        <img
          className="signature-adjacent"
          src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/tertius-roach/signature-adjacent/primary-light.svg"
          alt="Tertius Roach"
        />
        <MenuButton block="header" style="fade" items={buttons} align="left" />
      </header>
    </>
  );
  console.log('IndexHeader Loaded');
};

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
