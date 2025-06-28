//--|🠊 ButtonsMain.tsx 🠈|--//
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../scripts/buttons';
//--|🠉 Functions 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
import SectionButtons from '../../../components/Section/buttons/Section.buttons';
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

  useEffect(() => {
    /*
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowUp') {
        console.log('Go to previous size');
      }
      if (event.key === 'ArrowDown') {
        console.log('Go to next size');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Clean up on unmount or dependency change
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    */
  }, [pageName, blockName]);

  return (
    <main style={{ zIndex: 0 }} id={`${pageName}-${blockName}`} className={`default-${blockName}`}>
      <SectionButtons info={info} />
    </main>
  );
};
export default ButtonsMain;
