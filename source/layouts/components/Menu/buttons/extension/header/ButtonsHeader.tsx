//--|🠉 pageName: [buttons] 🠉|--\\
//--|🠊 ButtonsHeader.tsx 🠈|--\\
import React, { useEffect } from 'react';
//--|🠋 Styles 🠋|--\\
import './ButtonsHeader.scss';
//--|🠋 Functions 🠋|--\\
import { viewSize, viewColor } from '../../Menu_buttons';
import { stripBrackets } from '../../../../../scripts/buttons';
//--|🠋 Components 🠋|--\\
import ButtonDefault from '../../../../Button/default/Button.default';
import ButtonCleaned from '../../../../Button/cleaned/Button.cleaned';

interface InfoProps {
  info: {
    blockName: '<main>' | string;
    pageName: '[buttons]' | string;
  };
}
const MenuHeader: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'buttons';
  const blockName = stripBrackets(info.blockName, '<>') as 'header';

  const handleHeader = () => {
    alert('Go to Landing Page');
  };

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
      <li className="land-list">
        <ButtonCleaned
          onClick={() => handleHeader()}
          info={{ pageName: pageName, blockName: blockName, labelName: 'landing-navigation' }}
          style={{
            size: '<h4>',
            view: '-icon-',
            color: '(mono)',
            type: '{button}',
            shade: '~medium~',
            image:
              'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3518122412fa887d7f7d7d894f05346860b8181c/source/assets/svg-files/archive-images/tertius-roach/signature-icon/primary-medium.svg',
          }}
        />
        {/* <ButtonDefault
          info={{ pageName: pageName, blockName: blockName, labelName: 'landing-navigation' }}
          style={{
            size: '<h4>',
            view: '-icon-',
            color: '(mono)',
            type: '{button}',
            shade: '~medium~',
            text: 'klfsdjlkjkfldasjlkas',
            // The HTML is there but why isn't it working?
            image:
              'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3518122412fa887d7f7d7d894f05346860b8181c/source/assets/svg-files/archive-images/tertius-roach/signature-icon/primary-medium.svg',
          }}
        /> */}
      </li>
      {/* <li className="logo-list">
        <img
          className="logo-image"
          src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/81562c9457867ac7e8724b068a85db04f094477a/source/assets/svg-files/my-signature/signature-icon/primary-medium.svg"
        />
      </li> */}
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
          <option value="(red)" disabled>
            (Red)
          </option>
          <option value="(blue)" disabled>
            (Blue)
          </option>
          <option value="(green)" disabled>
            (Green)
          </option>
          <option value="(mono)">(Mono)</option>
        </select>
      </li>
    </>
  );
};
export default MenuHeader;
