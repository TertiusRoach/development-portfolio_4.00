// IndexHeader.tsx
import React from 'react';
import MenuButton from '../../../components/Menu/button/Menu.button';

const IndexHeader: React.FC = () => {
  console.log('IndexHeader Loaded');
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
      <header id="index-header" className="default-header" style={{ zIndex: 2 }}>
        <img
          className="signature-adjacent"
          src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/tertius-roach/signature-adjacent/primary-light.svg"
          alt="Tertius Roach"
        />
        <MenuButton items={buttons} block="header" align="left" />
      </header>
    </>
  );
};

export default IndexHeader;
