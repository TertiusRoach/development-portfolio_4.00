//--|🠊 Navigation.archive.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './extensions/header-components/HeaderArchive.scss';
import './extensions/main-components/MainArchive.scss';
import './extensions/footer-components/FooterArchive.scss';

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
import ButtonRouting from '../../Button/routing/Button.routing';
import FooterArchive from './extensions/footer-components/FooterArchive';
import MainArchive from './extensions/main-components/MainArchive';
import HeaderArchive from './extensions/header-components/HeaderArchive';

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

  //--|🠊 2. Call the function cleanly inside your return 🠈|--\\
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
      return <HeaderArchive info={{ pageName, blockName, labelName }} />;
    case 'main':
      return <MainArchive info={{ pageName, blockName, labelName }} />;
    case 'footer':
      return <FooterArchive info={{ pageName, blockName, labelName }} />;
    default:
      return null; // Failsafe
  }
};
