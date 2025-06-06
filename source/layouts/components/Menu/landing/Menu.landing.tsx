//--|🠊 Menu.landing.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Menu.landing.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../scripts/landing';
//--|🠉 Functions 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//

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

  const handleLanding = (blockName: 'overlay' | 'leftbar' | 'rightbar' | 'header' | 'footer' | 'main' | string) => {
    switch (blockName) {
      case 'overlay':
        return (
          <ul className={`${blockName}-list`}>
            <li>Overlay content</li>
          </ul>
        );
      case 'leftbar':
        return (
          <ul className={`${blockName}-list`}>
            <li>Leftbar content</li>
          </ul>
        );
      case 'rightbar':
        return (
          <ul className={`${blockName}-list`}>
            <li>Rightbar content</li>
          </ul>
        );
      case 'header':
        return (
          <ul className={`${blockName}-list`}>
            <li>Header Content</li>
          </ul>
        );
      case 'footer':
        return (
          <ul className={`${blockName}-list`}>
            <li>Footer Content</li>
          </ul>
        );
      case 'main':
      default:
        return (
          <ul className={`${blockName}-list`}>
            <li>Main content</li>
          </ul>
        );
    }
  };

  useEffect(() => {}, [pageName, blockName]);

  return <menu className={`${pageName}-menu`}>{handleLanding(blockName)}</menu>;
};
export default MenuLanding;
