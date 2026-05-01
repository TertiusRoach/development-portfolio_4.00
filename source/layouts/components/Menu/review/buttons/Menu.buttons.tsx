//--|🠊 Menu.buttons.tsx 🠈|--\\
import { lazy } from 'react';
import React, { useEffect } from 'react';
//--|🠋 Styles 🠋|--\\
import './Menu.buttons.scss';
//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../scripts/buttons';
//--|🠋 Extensions 🠋|--\\
const ButtonsHeader = lazy(() => import('./extension/header/ButtonsHeader'));

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
    /*
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
    */
  }, [pageName, blockName]);

  return <menu className={`${pageName}-menu`}>{handleButtons(info.blockName)}</menu>;
};
export default MenuButtons;

interface InfoProps {
  info: {
    pageName: '[buttons]' | '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}
