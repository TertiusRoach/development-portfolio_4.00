//--|🠊 Navigation.profile.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Navigation.profile.scss';
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Functions 🠋|--\\
import { expandLeftbar, expandHeader } from '../../../scripts/overtime';
import { viewDisplay } from './Navigation_profile';
import { scrollTable } from '../../Table/clocking/Table_clocking';

//--|🠋 Components 🠋|--\\
import ButtonDefault from '../../Button/default/Button.default';
import ButtonRouting from '../../Button/routing/Button.routing';
interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const NavigationProfile: React.FC<TheseProps> = ({ info }) => {
  const pageName: string = info.pageName as 'overtime';
  const blockName: string = info.blockName as 'leftbar';
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

  let svgPath: Array<String> = [
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/a2e108e4ff99bab6768dfd293556e017ee5da5b3/source/assets/svg-files/archive-images',
    '',
    '',
  ];

  return (
    <nav className={`${labelName}-${blockName}`}>
      <ol>
        <li className="open-head">
          <ButtonRouting
            style={{
              size: '<h1>',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              view: viewDisplay() as 'top-lef' | 'bot-rig',
              image: `${svgPath[0]}/trinity-apps/track-a-day/primary-light.svg`,
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: `${pageName}-${blockName}_open-head`,
            }}
            onClick={() => expandHeader(pageName, blockName, 'click')}
            onMouseEnter={() => expandHeader(pageName, blockName, 'hover')}
          />
        </li>
      </ol>
    </nav>
  );
};
export default NavigationProfile;
