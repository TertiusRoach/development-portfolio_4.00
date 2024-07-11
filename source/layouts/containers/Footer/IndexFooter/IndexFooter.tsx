import React from 'react';
import MenuAnchor from '../../../components/Menu/anchor/Menu.anchor';

import { getResolution, getOrientation, getIdentification } from '../../../../scripts/index';
interface InfoProps {
  icons: Object;

  resolution?: string;
  orientation?: string | 'landscape' | 'portrait' | boolean;
  identification?: string;
}
const IndexFooter: React.FC<InfoProps> = () => {
  /*
  console.log(resolution);
  console.log(orientation);
  console.log(identification);
  */
  let icons = [
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

  return (
    <>
      <footer id="index-footer" className="default-footer" style={{ zIndex: 1 }}>
        <MenuAnchor block="footer" style="icon" items={icons} align="center" />
      </footer>
    </>
  );
  console.log('IndexFooter Loaded');
};

export default IndexFooter;
