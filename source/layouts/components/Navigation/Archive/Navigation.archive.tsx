//--|🠊 Navigation.archive.tsx 🠈|--\\

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Functions 🠋|--\\
import { viewDisplay } from './Navigation_archive';
import {
  unfoldHeader,
  unfoldLeftbar,
  squaringHeader,
  collapseLeftbar,
  expandLeftbar,
  collapseHeader,
  expandHeader,
} from '../../../../scripts';

//--|🠋 Components 🠋|--\\
import FooterComponents from './extensions/footer-components/FooterComponents';
import MainComponents from './extensions/main-components/MainComponents';
import HeaderComponents from './extensions/header-components/HeaderComponents';

interface TheseProps {
  info: {
    pageName: string;
    blockName: 'header' | 'footer' | 'main';
    labelName: string;
  };
}
const NavigationArchive: React.FC<TheseProps> = ({ info }) => {
  const labelName: string = info.labelName as string;
  const pageName: string = info.pageName as 'components';
  const blockName: string = info.blockName as 'header' | 'main' | 'footer';

  const [getView, setView] = useState(viewDisplay() as 'top-lef' | 'bot-rig');

  useEffect(() => {
    let mediaQuery = window.matchMedia('(orientation: landscape)');
    let handleOrientationChange = () => {
      setView(viewDisplay() as 'top-lef' | 'bot-rig');
    };

    mediaQuery.addEventListener('change', handleOrientationChange);
    return () => mediaQuery.removeEventListener('change', handleOrientationChange);
  }, [pageName, blockName]);
  let svgPath: Array<String> = [
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7/source/assets/svg-files/archive-images/my-signature/signature-icon/primary-medium.svg',
  ];
  return <>{layoutContainer(pageName, blockName as 'header' | 'main' | 'footer', labelName)}</>;
};
export default NavigationArchive;

//--|🠊 1. Create a quick render function here 🠈|--\\
const layoutContainer = (pageName: 'components' | string, blockName: 'header' | 'main' | 'footer', labelName: string) => {
  switch (blockName) {
    case 'header':
      return <HeaderComponents info={{ pageName, blockName, labelName }} />;
    case 'main':
      return <MainComponents info={{ pageName, blockName, labelName }} />;
    case 'footer':
      return <FooterComponents info={{ pageName, blockName, labelName }} />;
    default:
      return null; // Failsafe
  }
};
