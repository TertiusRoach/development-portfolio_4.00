//--|🠊 HeaderComponents.tsx 🠈|--\\

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Functions 🠋|--\\
import { viewDisplay } from './Header_components';
import {
  unfoldHeader,
  unfoldLeftbar,
  squaringHeader,
  collapseLeftbar,
  expandLeftbar,
  collapseHeader,
  expandHeader,
} from '../../../../../../scripts';
import ButtonRouting from '../../../../Button/routing/Button.routing';

//--|🠋 Components 🠋|--\\

interface TheseProps {
  info: {
    pageName: string;
    blockName: 'header';
    labelName: 'components' | string;
  };
}
const HeaderComponents: React.FC<TheseProps> = ({ info }) => {
  let svgPath: Array<String> = [
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7/source/assets/svg-files/archive-images/my-signature/signature-icon/primary-medium.svg',
  ];

  const pageName: string = info.pageName as 'components';
  const blockName: string = info.blockName as 'header';
  const labelName: string = info.labelName as string;

  const [getView, setView] = useState(viewDisplay() as 'top-lef' | 'bot-rig');

  useEffect(() => {
    //--|🠋 1. Define the media query for landscape 🠈|--\\
    let mediaQuery = window.matchMedia('(orientation: landscape)');
    let handleOrientationChange = () => {
      //--|🠋 2. Create the handler function 🠈|--\\
      setView(viewDisplay() as 'top-lef' | 'bot-rig'); //--|🠈 Update state by calling viewDisplay again 🠈|--\\
    };
    mediaQuery.addEventListener('change', handleOrientationChange); //--|🠈 3. Add the listener 🠈|--\\
    return () => mediaQuery.removeEventListener('change', handleOrientationChange); //--|🠈 4. Cleanup on unmount 🠈|--\\
  }, [pageName, blockName]);

  return (
    <nav className={`${pageName}-header_${labelName}`}>
      <ButtonRouting
        info={{
          pageName: pageName,
          blockName: blockName,
          labelName: `${pageName}-${blockName}_view-head`,
        }}
        style={{
          size: '<h1>',
          color: '(mono)',
          shade: '~dark~',
          type: '{button}',
          view: viewDisplay() as 'top-lef' | 'bot-rig',
          image: `${svgPath[0]}`,
        }}
        onMouseEnter={() => {
          unfoldHeader(pageName, 'hover', 'header');
          // if (blockName === 'header') {
          // }
        }}
        // onClick={() => {
        //   if (blockName === 'header') {
        //     unfoldLeftbar(pageName, 'click', 'leftbar');
        //   }
        // }}
      />
    </nav>
  );
};
export default HeaderComponents;
