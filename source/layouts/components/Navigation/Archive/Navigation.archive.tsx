//--|🠊 Navigation.profile.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Navigation.archive.scss';
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

interface TheseProps {
  info: {
    pageName: string;
    blockName: 'header' | 'footer' | 'main' | string;
    labelName: string;
  };
}
const NavigationBrowse: React.FC<TheseProps> = ({ info }) => {
  let svgPath: Array<String> = [
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7/source/assets/svg-files/archive-images/my-signature/signature-icon/primary-medium.svg',
  ];

  const pageName: string = info.pageName as 'archive';
  const blockName: string = info.blockName as string;
  const labelName: string = info.labelName as 'default';

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
    <nav className={`${pageName}-${blockName}`}>
      <ol>
        <li className="view-head">
          <ButtonRouting
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: `${pageName}-${blockName}_view-head`,
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
              if (blockName === 'header') {
                unfoldHeader(pageName, 'hover', 'header');
              }
            }}
            onClick={() => {
              if (blockName === 'header') {
                unfoldLeftbar(pageName, 'click', 'leftbar');
              }
            }}
          />
        </li>
        <li className="view-foot">
          <ButtonRouting
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: `${pageName}-${blockName}_view-head`,
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
              if (blockName === 'header') {
                unfoldHeader(pageName, 'hover', 'header');
              }
            }}
            onClick={() => {
              if (blockName === 'header') {
                unfoldLeftbar(pageName, 'click', 'leftbar');
              }
            }}
          />
        </li>
      </ol>
    </nav>
  );
};
export default NavigationBrowse;
