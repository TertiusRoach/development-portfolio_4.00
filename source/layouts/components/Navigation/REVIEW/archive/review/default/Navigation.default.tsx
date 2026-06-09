//--|🠊 Navigation.default.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Navigation.default.scss';
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Functions 🠋|--\\
import { viewDisplay } from './Navigation_default';
import { unfoldLeftbar, unfoldHeader, expandHeader, collapseHeader, collapseLeftbar } from '../../../../../../../scripts';

//--|🠋 Components 🠋|--\\
import ButtonRouting from '../../../../../Button/routing/Button.routing';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const NavigationDefault: React.FC<TheseProps> = ({ info }) => {
  const svgPath: Array<String> = [
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7/source/assets/svg-files/archive-images/my-signature/signature-icon/primary-medium.svg',
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7/source/assets/svg-files/archive-images/trinity-apps/tralogfin/trinity-apps.svg',
  ];

  const pageName: string = info.pageName as string;
  const blockName: string = info.blockName as string;
  const labelName: string = info.labelName as 'default';

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
        <li className="open-head">
          <ButtonRouting
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: `${pageName}-${blockName}_open-head`,
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
              unfoldHeader(pageName, 'hover', blockName);
              unfoldLeftbar(pageName, 'click', 'leftbar');
            }}
            // onMouseEnter={() => unfoldHeader(pageName, 'hover', blockName)}
          />
        </li>
        {/* <li className="load-tags">
          <ButtonRouting
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: `${pageName}-${blockName}_load-tags`,
            }}
            style={{
              size: '<h1>',
              color: '(mono)',
              shade: '~dark~',
              type: '{button}',
              view: 'bot-rig',
              image: `${svgPath[1]}`,
            }}
            onClick={() => viewBody('components')}
            // onMouseEnter={() => collapseHeader(pageName, 'hover', blockName)}
          />
        </li> */}
      </ol>
    </nav>
  );
};
export default NavigationDefault;
