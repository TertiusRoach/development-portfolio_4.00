//--|🠊 ButtonsMain.tsx 🠈|--//
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../scripts/buttons';
//--|🠉 Functions 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
//--|🠉 Components 🠉|--//

interface InfoProps {
  info: {
    pageName: '[buttons]' | string;
    blockName: '<main>' | string;
    roleName?: string;
  };
}

const ButtonsMain: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'buttons';
  const blockName = stripBrackets(info.blockName, '<>') as 'main';

  useEffect(() => {}, [pageName, blockName]);

  return <main style={{ zIndex: 0 }} id={`${pageName}-${blockName}`} className={`default-${blockName}`}></main>;
};
export default ButtonsMain;
