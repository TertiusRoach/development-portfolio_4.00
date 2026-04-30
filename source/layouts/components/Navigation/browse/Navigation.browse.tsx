//--|🠊 Navigation.profile.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Navigation.browse.scss';
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Functions 🠋|--\\
import { viewDisplay } from './Navigation_browse';
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

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const NavigationBrowse: React.FC<TheseProps> = ({ info }) => {
  let svgPath: Array<String> = [
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7/source/assets/svg-files/archive-images/my-signature/signature-icon/primary-medium.svg',
  ];

  const pageName: string = info.pageName as 'overtime';
  const blockName: string = info.blockName as 'header';
  const labelName: string = info.labelName as 'profile';

  const [getView, setView] = useState(viewDisplay() as 'top-lef' | 'bot-rig');

  useEffect(() => {
    //--|🠋 1. Define the media query for landscape 🠈|--\\
    const mediaQuery = window.matchMedia('(orientation: landscape)');
    const handleOrientationChange = () => {
      //--|🠋 2. Create the handler function 🠈|--\\
      setView(viewDisplay() as 'top-lef' | 'bot-rig'); //--|🠈 Update state by calling viewDisplay again 🠈|--\\
    };
    mediaQuery.addEventListener('change', handleOrientationChange); //--|🠈 3. Add the listener 🠈|--\\
    return () => mediaQuery.removeEventListener('change', handleOrientationChange); //--|🠈 4. Cleanup on unmount 🠈|--\\
  }, [pageName, blockName]);

  return (
    <nav className={`browse-${blockName}`}>
      <ol>
        <li className="close-head">
          <ButtonRouting
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: `${pageName}-${blockName}_close-head`,
            }}
            style={{
              size: '<h1>',
              color: '(mono)',
              shade: '~light~',
              type: '{button}',
              view: viewDisplay() as 'top-lef' | 'bot-rig',
              image: `${svgPath[0]}`,
            }}
            onMouseEnter={() => {
              if (blockName === 'main') {
                unfoldHeader(pageName, 'hover', 'header');
                unfoldLeftbar(pageName, 'hover', 'leftbar');
              } else if (blockName === 'header') {
                unfoldHeader(pageName, 'hover', 'header');
                unfoldLeftbar(pageName, 'hover', 'leftbar');
              }
            }}
            onClick={() => {
              if (blockName === 'header') {
                squaringHeader(pageName, 'click', 'header');
                collapseLeftbar(pageName, 'click', 'leftbar');
              }
            }}
          />
        </li>
      </ol>
    </nav>
  );
};
export default NavigationBrowse;
