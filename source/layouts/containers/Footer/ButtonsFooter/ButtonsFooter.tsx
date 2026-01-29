//--|🠊 ButtonsFooter.tsx 🠈|--//
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
    blockName: '<footer>' | string;
    roleName?: string;
  };
}
const ButtonsFooter: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'buttons';
  const blockName = stripBrackets(info.blockName, '<>') as 'footer';

  const stateName: 'expanded' | 'unfolded' | 'collapsed' = 'unfolded';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <footer className={`default-${blockName} ${stateName}`} id={`${pageName}-${blockName}`} style={{ zIndex: 1 }}>
      <div className="background">
        <header>
          <div></div>
          <div></div>
        </header>
        <aside className="left"></aside>
        <aside className="right"></aside>
        <footer>
          <div></div>
          <div></div>
        </footer>
      </div>

      {/* <menu></menu> */}
      {/* <MenuLanding info={info} /> */}
      {/* <SectionBlocked info={info} /> */}
    </footer>
  );
};
export default ButtonsFooter;
