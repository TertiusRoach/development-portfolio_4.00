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
        return (
          <>
            <li className="logo-list">
              <img
                className="logo-image"
                src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/81562c9457867ac7e8724b068a85db04f094477a/source/assets/svg-files/my-signature/signature-icon/primary-medium.svg"
              />
            </li>
            <li className="load-list">
              <select id="load-select" defaultValue="[default]" name="style">
                <option value="[stretch]">[Stretch]</option>
                <option value="[cleaned]">[Cleaned]</option>
                <option value="[grading]">[Grading]</option>
                <option value="[framing]">[Framing]</option>
                <option value="[default]">[Default]</option>
              </select>
            </li>
            <li className="size-list">
              <select id="size-select" defaultValue="h1-size" name="size">
                <option value="h1-size">&lt;h1&gt;</option>
                <option value="h2-size">&lt;h2&gt;</option>
                <option value="h3-size">&lt;h3&gt;</option>
                <option value="h4-size">&lt;h4&gt;</option>
                <option value="h5-size">&lt;h5&gt;</option>
                <option value="h6-size">&lt;h6&gt;</option>
                <option value="p-size">&lt;p&gt;</option>
              </select>
            </li>
            <li className="color-list">
              <select id="color-select" defaultValue="(mono)" name="color">
                <option value="(red)">(Red)</option>
                <option value="(blue)">(Blue)</option>
                <option value="(green)">(Green)</option>
                <option value="(mono)">(Mono)</option>
              </select>
            </li>
          </>
        );
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
      console.log('Selected:', target.value);
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
