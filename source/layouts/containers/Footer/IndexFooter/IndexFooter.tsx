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
      href: '',
      icon: '',
      target: '_blank',
    },
    {
      href: '',
      name: 'YouTube',
      icon: '',
      target: '_blank',
    },
    {
      name: 'LinkedIn',
      href: '',
      icon: '',
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
