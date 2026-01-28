//--|🠊 Menu.landing.tsx 🠈|--\\
import React, { useEffect } from 'react';
//--|🠋 Styles 🠋|--\\
import './Menu.landing.scss';
//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../scripts/landing';
//--|🠋 Extensions 🠋|--\\
import LandingOverlay from './extensions/overlay/LandingOverlay';

interface InfoProps {
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}
const MenuLanding: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'landing';
  const blockName = stripBrackets(info.blockName, '<>') as string;

  const handleLanding = (
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string
  ) => {
    switch (blockName) {
      case '<overlay>':
        return <LandingOverlay info={info} />;
      case '<leftbar>':
        return (
          <>
            <li>Leftbar content</li>
          </>
        );
      case '<rightbar>':
        return (
          <>
            <li>Rightbar content</li>
          </>
        );
      case '<header>':
        return (
          <>
            <li>Header Content</li>
          </>
        );
      case '<footer>':
        return (
          <>
            <li>Footer Content</li>
          </>
        );
      case '<main>':
      default:
        return (
          <>
            <li>Main content</li>
          </>
        );
    }
  };

  useEffect(() => {}, [pageName, blockName]);

  return <menu className={`${pageName}-menu`}>{handleLanding(info.blockName)}</menu>;
};
export default MenuLanding;
