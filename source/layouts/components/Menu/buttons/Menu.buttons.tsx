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
            <li className="style-list">
              <select id="style-select" defaultValue="default-style" name="style">
                <option value="stretch-style">[Stretch]</option>
                <option value="cleaned-style">[Cleaned]</option>
                <option value="grading-style">[Grading]</option>
                <option value="framing-style">[Framing]</option>
                <option value="default-style">[Default]</option>
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
              <select id="color-select" defaultValue="mono-color" name="color">
                <option value="red-color">(Red)</option>
                <option value="blue-color">(Blue)</option>
                <option value="green-color">(Green)</option>
                <option value="mono-color">(Mono)</option>
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
    //--|🠋 Event Listeners 🠋|--//
    let selectStyle = document.querySelector(
      `#${pageName}-header .buttons-menu li[class*="style"] select`
    ) as HTMLSelectElement;
    let selectSize = document.querySelector(
      `#${pageName}-header .buttons-menu li[class*="size"] select`
    ) as HTMLSelectElement;
    let selectColor = document.querySelector(
      `#${pageName}-header .buttons-menu li[class*="color"] select`
    ) as HTMLSelectElement;

    const cleanupArray: (() => void)[] = [];

    if (selectSize) {
      const handleSize = () => showSize(pageName);
      selectSize.addEventListener('change', handleSize);
      cleanupArray.push(() => selectSize.removeEventListener('change', handleSize));
    }
    if (selectStyle) {
      const handleStyle = () => reloadDesign(pageName);
      selectStyle.addEventListener('change', handleStyle);
      cleanupArray.push(() => selectStyle.removeEventListener('change', handleStyle));
    }
    if (selectColor) {
      const handleColor = () => viewColor(pageName);
      selectColor.addEventListener('change', handleColor);
      cleanupArray.push(() => selectSize.removeEventListener('change', handleColor));
    }

    return () => {
      cleanupArray.forEach((cleanupFunction) => cleanupFunction());
    };
  }, [pageName, blockName]);

  return <menu className={`${pageName}-menu`}>{handleButtons(info.blockName)}</menu>;
};
export default MenuButtons;

const viewColor = (pageName: string) => {
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
};
const reloadDesign = (pageName: string) => {
  let viewStyle = document.querySelector(`#${pageName}-header .buttons-menu li[class*="style"] select`) as HTMLSelectElement;

  switch (viewStyle.value) {
    case 'stretch-style':
      return console.log(`${viewStyle.value}`);
    case 'cleaned-style':
      return console.log(`${viewStyle.value}`);
    case 'grading-style':
      return console.log(`${viewStyle.value}`);

    case 'framing-style':
      return console.log(`${viewStyle.value}`);
    default:
      return console.log(`${viewStyle.value}`);
  }
};
