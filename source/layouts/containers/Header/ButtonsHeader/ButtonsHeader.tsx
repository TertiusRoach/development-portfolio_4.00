//--|🠊 ButtonsHeader.tsx 🠈|--//
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
    blockName: '<header>' | string;
    roleName?: string;
  };
}
const ButtonsHeader: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'buttons';
  const blockName = stripBrackets(info.blockName, '<>') as 'header';

  const stateName: 'expanded' | 'collapsed' = 'collapsed';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <header className={`default-${blockName} ${stateName}`} id={`${pageName}-${blockName}`} style={{ zIndex: 1 }}>
      <menu className={`${pageName}-menu`}>
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
            <option value="stretch-style">[Stretch]</option>
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
      </menu>
      {/* <section className={`${pageName}-section`}></section> */}
    </header>
  );
};
export default ButtonsHeader;
