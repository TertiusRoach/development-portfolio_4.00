import React from 'react';
import MenuAnchor from '../../../components/Menu/anchor/Menu.anchor';

import { getResolution, getOrientation, getIdentification } from '../../../../scripts/index';
interface InfoProps {
  icons: Object;

  resolution: string;
  orientation: string | 'landscape' | 'portrait' | boolean;
  identification: string;
}
const IndexFooter: React.FC<InfoProps> = () => {
  /*
  console.log(resolution);
  console.log(orientation);
  console.log(identification);
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
    // {
    //   text: 'Projects',
    //   icon: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/code.svg',
    // },
    // {
    //   text: 'Career',
    //   icon: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/briefcase.svg',
    // },
  ];
  return (
    <>
      <footer id="index-footer" className="default-footer" style={{ zIndex: 1 }}>
        <MenuAnchor block="footer" style="icon" items={buttons} align="center" />
      </footer>
    </>
  );
  console.log('IndexFooter Loaded');
};

export default IndexFooter;
