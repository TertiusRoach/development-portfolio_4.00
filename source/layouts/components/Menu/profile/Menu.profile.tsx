//--|🠊 Menu.profile.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Menu.profile.scss';
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Functions 🠋|--\\
import { expandLeftbar, expandHeader } from '../../../scripts/overtime';
import { viewDisplay } from './Menu_profile';
import { scrollTable } from '../../Table/clocking/Table_clocking';

// import { scrollTable } from '../../Table/tracking/Table_tracking';

//--|🠋 Components 🠋|--\\
import ButtonDefault from '../../Button/default/Button.default';
import ButtonRouting from '../../Button/routing/Button.routing';
import ButtonProfile from '../../Button/profile/Button.profile';
interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const MenuProfile: React.FC<TheseProps> = ({ info }) => {
  const pageName: string = info.pageName as 'overtime';
  const blockName: string = info.blockName as 'header';
  const labelName: string = info.labelName as 'profile';

  useEffect(() => {}, [pageName, blockName]);

  let svgPath: Array<String> = [
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/tralogfin-demonstration/upscaled/Jane%20Lester.png',
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/tralogfin-demonstration/upscaled/Malik%20Tremaine%20Carter.png',
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/tralogfin-demonstration/upscaled/Hammad%20Dean.png',
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/tralogfin-demonstration/upscaled/Tasneem%20Kemp.png',
  ];

  return (
    <menu className={`${labelName}-${blockName}`}>
      <li className="left-side">
        <ButtonProfile
          style={{
            size: '<h1>',
            color: '(mono)',
            shade: '~light~',
            type: '{button}',
            image: `${svgPath[0]}`,
          }}
          info={{
            pageName: pageName,
            blockName: blockName,
          }}
        />
        <ButtonProfile
          style={{
            size: '<p>',
            color: '(mono)',
            shade: '~light~',
            type: '{button}',
            image: `${svgPath[1]}`,
          }}
          info={{
            pageName: pageName,
            blockName: blockName,
          }}
        />
      </li>
      <li className="right-side">
        <ButtonProfile
          style={{
            size: '<h1>',
            color: '(mono)',
            shade: '~light~',
            type: '{button}',
            image: `${svgPath[2]}`,
          }}
          info={{
            pageName: pageName,
            blockName: blockName,
          }}
        />
        <ButtonProfile
          style={{
            size: '<p>',
            color: '(mono)',
            shade: '~light~',
            type: '{button}',
            image: `${svgPath[3]}`,
          }}
          info={{
            pageName: pageName,
            blockName: blockName,
          }}
        />
      </li>
    </menu>
  );
};
export default MenuProfile;
