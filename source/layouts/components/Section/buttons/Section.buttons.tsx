//--|🠊 Section.buttons.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Section.buttons.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../scripts/overtime';
import { defineButton, sizeDivs } from './Section_buttons';
//--|🠉 Functions 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
// import { reloadDesign } from './extension/Section_reload';
import AsideButtons from '../../Aside/buttons/Aside.buttons';
import ButtonDefault from '../../Button/default/Button.default';
// import AsideMain from '../../Aside/buttons/extensions/Aside-main';
//--|🠉 Components 🠉|--//

interface InfoProps {
  info: {
    pageName: '[buttons]' | string;
    blockName: '<main>' | string;
    roleName?: string;
  };
}
const SectionButtons: React.FC<InfoProps> = ({ info }) => {
  const handleButtons = (pageName: string, blockName: string) => {
    console.log(`#${pageName}-${blockName}`);
    // setTimeout(() => {
    //   return (
    //     <>
    //       <AsideButtons info={info} style={style} />
    //     </>
    //   );
    // }, 250);
  };

  const pageName = stripBrackets(info.pageName, '[]') as 'buttons';
  const blockName = stripBrackets(info.blockName, '<>') as 'main';

  useEffect(() => {
    sizeDivs(pageName, blockName);
    window.addEventListener('resize', () => sizeDivs(pageName, blockName));
    return () => {
      window.removeEventListener('resize', () => sizeDivs(pageName, blockName));
    };
  }, [pageName, blockName]);
  let style = {
    specShade: ['~dark~', '~medium~', '~light~'],
    specSize: ['<h1>', '<h2>', '<h3>', '<h4>', '<h5>', '<h6>', '<p>'],
    specView: ['-top-', '-bottom-', '-left-', '-right-', '-center-', '-text-', '-icon-'],
  };

  return <section className="buttons-section">{<AsideButtons info={info} style={style} />}</section>;
};
export default SectionButtons;

export function viewColor(pageName: string) {
  let viewColor = document.querySelector(`#${pageName}-header .buttons-menu li[class*="color"] select`) as HTMLSelectElement;
  switch (viewColor.value) {
    case 'mono-color':
      return console.log(`${viewColor.value}`);
    case 'red-color':
      return console.log(`${viewColor.value}`);
    case 'green-color':
      return console.log(`${viewColor.value}`);
    case 'blue-color':
      return console.log(`${viewColor.value}`);
    default:
      return console.log(`${viewColor.value}`);
  }
}
