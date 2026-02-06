//--|🠊 ButtonsHeader.tsx 🠈|--//
//--|🠋 Functions 🠋|--//
import { toggleHeader } from './ButtonsFunctions';
import { stripBrackets } from '../../../scripts/buttons';
//--|🠋 Dependencies 🠋|--//
import React, { useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
import MenuButtons from '../../../components/Menu/buttons/Menu.buttons';
//--|🠉 Components 🠉|--//
interface InfoProps {
  info: {
    pageName: '[buttons]' | string;
    blockName: '<header>' | string;
    roleName?: string;
  };
}
const ButtonsHeader: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'buttons';
  const blockName = stripBrackets(info.blockName, '<>') as 'header';
  const stateName: 'expanded' | 'unfolded' | 'collapsed' = 'collapsed';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <header
      className={`default-${blockName} ${stateName}`}
      id={`${pageName}-${blockName}`}
      style={{ zIndex: 1 }}
      onMouseLeave={() => toggleHeader(pageName, blockName)}
    >
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

      {/* <MenuButtons info={info} /> */}
      {/* <section className={`${pageName}-section`}></section> */}
    </header>
  );
};
export default ButtonsHeader;
