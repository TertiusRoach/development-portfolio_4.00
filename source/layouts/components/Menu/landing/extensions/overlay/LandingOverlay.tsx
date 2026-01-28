//--|🠉 pageName: [landing] 🠉|--\\
//--|🠊 LandingOverlay.tsx 🠈|--\\
import React, { useEffect } from 'react';
//--|🠋 Styles 🠋|--\\
import './LandingOverlay.scss';
//--|🠋 Functions 🠋|--\\
// import { viewSize, viewColor } from '../../Menu_landing';
import { stripBrackets } from '../../../../../scripts/buttons';
//--|🠋 Components 🠋|--\\
import ButtonDefault from '../../../../Button/default/Button.default';
import ButtonCleaned from '../../../../Button/cleaned/Button.cleaned';

interface InfoProps {
  info: {
    blockName: '<main>' | string;
    pageName: '[buttons]' | string;
  };
}
const MenuOverlay: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'landing';
  const blockName = stripBrackets(info.blockName, '<>') as 'overlay';

  const handleOverlay = (pageName: string, blockName: string) => {
    let page: string = pageName;
    let block: string = blockName;
  };

  useEffect(() => {}, [pageName, blockName]);

  return (
    <ul className={`${blockName}-list`}>
      <li>
        <img
          src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3518122412fa887d7f7d7d894f05346860b8181c/source/assets/svg-files/archive-images/tertius-roach/signature-adjacent/primary-dark.svg"
          alt=""
        />
      </li>
    </ul>
  );
};
export default MenuOverlay;
