//--|🠊 Menu.buttons.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Menu.buttons.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Functions 🠋|--//
import { showSize } from './Menu_buttons';
import { stripBrackets } from '../../../scripts/buttons';
//--|🠉 Functions 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Extensions 🠋|--//
import ButtonsHeader from './extension/header/ButtonsHeader';
//--|🠉 Extensions 🠉|--//
interface InfoProps {
  info: {
    pageName: '[buttons]' | '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}
const MenuButtons: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'buttons';
  const blockName = stripBrackets(info.blockName, '<>') as string;

  const handleButtons = (
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string
  ) => {
    switch (blockName) {
      case '<overlay>':
        return <></>;
      case '<leftbar>':
        return <></>;
      case '<rightbar>':
        return <></>;
      case '<header>':
        return <ButtonsHeader info={info} />;
      case '<footer>':
        return <></>;
      case '<main>':
      default:
        return <></>;
    }
  };

  useEffect(() => {
    const select = document.querySelector(
      `#${pageName}-header .${pageName}-menu li[class*="size"] select`
    ) as HTMLSelectElement | null;

    const handleChange = (event: Event) => {
      const target = event.target as HTMLSelectElement;
      // console.log('Selected:', target.value);
      showSize(pageName);
    };

    if (select) {
      select.addEventListener('change', handleChange);
      showSize(pageName); // Initial run
    }

    return () => {
      select?.removeEventListener('change', handleChange);
    };
  }, [pageName, blockName]);

  return <menu className={`${pageName}-menu`}>{handleButtons(info.blockName)}</menu>;
};
export default MenuButtons;

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
