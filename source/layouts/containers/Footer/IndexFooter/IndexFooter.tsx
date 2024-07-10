import React from 'react';

import MenuButton from '../../../components/Menu/button/Menu.button';
interface InfoProps {
  resolution: string;
  orientation: string | 'landscape' | 'portrait' | boolean;
  identification: string;
}
const IndexFooter: React.FC<InfoProps> = ({ resolution, orientation, identification }) => {
  console.log('IndexFooter Loaded');
  console.log('IndexHeader Loaded');

  console.log(resolution);
  console.log(orientation);
  console.log(identification);
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
        <MenuButton block="header" style="fade" items={buttons} align="center" />
      </footer>
    </>
  );
};

export default IndexFooter;
