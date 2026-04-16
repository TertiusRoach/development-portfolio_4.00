//--|🠊 Navigation.track-main.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Navigation.tracking.scss';
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Functions 🠋|--\\
import { expandLeftbar, expandHeader } from '../../../scripts/overtime';
import { viewDisplay } from './Navigation_tracking';
import { scrollTable } from '../../Table/tracking/Table_tracking';

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
const NavigationTracking: React.FC<TheseProps> = ({ info }) => {
  const blockName: string = info.blockName as 'main';
  const pageName: string = info.pageName as 'overtime';
  const labelName: string = info.labelName as 'tracking';

  console.log(labelName);

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

        <li className="prev-table">
          <ButtonDefault
            info={{
              labelName: `${pageName}-${blockName}_view-previous`,
              blockName: blockName,
              pageName: pageName,
            }}
            style={{
              size: '<h1>',
              view: '-icon-',
              text: 'Down',
              shade: '~light~',
              color: '(mono)',

              type: '{button}',
              image:
                'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7/source/assets/svg-files/project-pages/overtime-page/%7Esort/prev-week.svg',
            }}
            onClick={() => scrollTable('go-up')}
          />
        </li>
        <li className="next-table">
          <ButtonDefault
            info={{
              labelName: `${pageName}-${blockName}_view-future`,
              blockName: blockName,
              pageName: pageName,
            }}
            style={{
              size: '<h1>',
              view: '-icon-',
              text: 'Up',
              shade: '~light~',
              color: '(mono)',

              type: '{button}',
              image:
                'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7/source/assets/svg-files/project-pages/overtime-page/%7Esort/next-week.svg',
            }}
            onClick={() => scrollTable('scroll-down')}
          />
        </li>

        <li className="open-right">
          <ButtonDefault
            info={{
              labelName: `${pageName}-${blockName}_request-leave`,
              blockName: blockName,
              pageName: pageName,
            }}
            style={{
              size: '<h1>',
              view: '-center-',
              text: `Request`,
              shade: '~light~',
              color: '(mono)',

              type: '{button}',
              image:
                'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7/source/assets/svg-files/project-pages/overtime-page/%7Esort/clock-time.svg',
            }}
          />
        </li>
        <li className="open-left saturday">
          <ButtonDefault
            info={{
              labelName: `${pageName}-${blockName}_clock-in`,
              blockName: blockName,
              pageName: pageName,
            }}
            style={{
              size: '<h3>',
              view: '-text-',
              text: `Clock-in`,
              shade: '~dark~',
              color: '(mono)',

              type: '{button}',
              image:
                'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7/source/assets/svg-files/project-pages/overtime-page/%7Esort/clock-time.svg',
            }}
            onClick={() => expandLeftbar(pageName, blockName)}
          />
        </li>
        <li className="open-left saturday">
          <ButtonDefault
            info={{
              labelName: `${pageName}-${blockName}_clock-out`,
              blockName: blockName,
              pageName: pageName,
            }}
            style={{
              size: '<h3>',
              view: '-text-',
              text: `Clock-out`,
              shade: '~dark~',
              color: '(mono)',

              type: '{button}',
              image:
                'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7/source/assets/svg-files/project-pages/overtime-page/%7Esort/clock-time.svg',
            }}
          />
        </li>
      </ol>
    </nav>
  );
};
export default NavigationTracking;
