//--|🠉 pageName: [buttons] 🠉|--\\
//--|🠊 ButtonsHeader.tsx 🠈|--\\
import React, { useEffect } from 'react';
//--|🠋 Styles 🠋|--\\
import './ButtonsHeader.scss';
//--|🠋 Functions 🠋|--\\
import { viewSize, viewColor } from '../../Menu_buttons';
import { stripBrackets } from '../../../../../scripts/buttons';

interface InfoProps {
  info: {
    blockName: '<main>' | string;
    pageName: '[buttons]' | string;
  };
}
const MenuHeader: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'buttons';
  const blockName = stripBrackets(info.blockName, '<>') as 'header';

  useEffect(() => {
    let selectSize = document.querySelector(
      `#${pageName}-header .${pageName}-menu li[class*="size"] select`
    ) as HTMLSelectElement | null;
    if (selectSize) {
      viewSize(pageName); //--|🠊 Initial Loading 🠈|--\\
      selectSize.addEventListener('change', () => viewSize(pageName));
    }

    let selectColor = document.querySelector(
      `#${pageName}-header .${pageName}-menu li[class*="color"] select`
    ) as HTMLSelectElement | null;
    if (selectColor) {
      viewSize(pageName); //--|🠊 Initial Loading 🠈|--\\
      selectColor.addEventListener('change', () => viewColor(pageName));
    }

    /*
    const handleChange = (event: Event) => {
      const target = event.target as HTMLSelectElement;
      console.log('Selected:', target.value);
      viewSize(pageName);
    };
    */

    return () => {
      selectSize?.removeEventListener('change', () => viewSize(pageName));
      selectColor?.removeEventListener('change', () => viewColor(pageName));
    };
  }, [pageName, blockName]);

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
};
export default MenuHeader;
