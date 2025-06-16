//--|🠊 Section.buttons.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Section.buttons.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Functions 🠋|--//
import { defineButton, showSize } from './Section_buttons';
import { stripBrackets } from '../../../scripts/overtime';
//--|🠉 Functions 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
import ButtonDefault from '../../Button/default/Button.default';
//--|🠉 Components 🠉|--//

interface InfoProps {
  info: {
    pageName: '[buttons]' | string;
    blockName: '<main>' | string;
    roleName?: string;
  };
}
const SectionButtons: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'buttons';
  const blockName = stripBrackets(info.blockName, '<>') as 'main';

  const handleButtons = (pageName: string, blockName: string) => {
    let page = pageName as string;
    let block = blockName as string;
    /*
    console.log(`pageName: ${pageName}`);
    console.log(`blockName: ${blockName}`);
    console.log('handleButtons Reloaded!');
    */
  };

  useEffect(() => {
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
      const handleSize = () => showSize(pageName, blockName);
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

  return (
    <section className="buttons-section">
      <div className="h1-size visible">
        {/* Dark */}
        <ButtonDefault
          style={{
            view: '-top-',
            color: '(mono)',
            shade: '~dark~',

            text: 'top_dar_mon',

            image:
              'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3518122412fa887d7f7d7d894f05346860b8181c/source/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg',
            size: '<h1>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-bottom-',
            color: '(mono)',
            shade: '~dark~',

            text: 'bot_dar_mon',

            image: '',
            size: '<h1>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-left-',
            color: '(mono)',
            shade: '~dark~',

            text: 'lef_dar_mon',

            image: '',
            size: '<h1>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-right-',
            color: '(mono)',
            shade: '~dark~',

            text: 'rig_dar_mon',

            image: '',
            size: '<h1>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-center-',
            color: '(mono)',
            shade: '~dark~',

            text: 'cen_dar_mon',

            image: '',
            size: '<h1>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-text-',
            color: '(mono)',
            shade: '~dark~',

            text: 'tex_dar_mon',

            image: '',
            size: '<h1>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-icon-',
            color: '(mono)',
            shade: '~dark~',

            text: 'ico_dar_mon',

            image: '',
            size: '<h1>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />

        {/* Medium */}
        <ButtonDefault
          style={{
            view: '-top-',
            color: '(mono)',
            shade: '~medium~',

            text: 'top_med_mon',

            image: '',
            size: '<h1>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-bottom-',
            color: '(mono)',
            shade: '~medium~',

            text: 'bot_med_mon',

            image: '',
            size: '<h1>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-left-',
            color: '(mono)',
            shade: '~medium~',

            text: 'lef_med_mon',

            image: '',
            size: '<h1>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-right-',
            color: '(mono)',
            shade: '~medium~',

            text: 'rig_med_mon',

            image: '',
            size: '<h1>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-center-',
            color: '(mono)',
            shade: '~medium~',

            text: 'cen_med_mon',

            image: '',
            size: '<h1>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-text-',
            color: '(mono)',
            shade: '~medium~',

            text: 'tex_med_mon',

            image: '',
            size: '<h1>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-icon-',
            color: '(mono)',
            shade: '~medium~',

            text: 'ico_med_mon',

            image: '',
            size: '<h1>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />

        {/* Light */}
        <ButtonDefault
          style={{
            view: '-top-',
            color: '(mono)',
            shade: '~light~',

            text: 'top_lig_mon',

            image: '',
            size: '<h1>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-bottom-',
            color: '(mono)',
            shade: '~light~',

            text: 'bot_lig_mon',

            image: '',
            size: '<h1>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-left-',
            color: '(mono)',
            shade: '~light~',

            text: 'lef_lig_mon',

            image: '',
            size: '<h1>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-right-',
            color: '(mono)',
            shade: '~light~',

            text: 'rig_lig_mon',

            image: '',
            size: '<h1>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-center-',
            color: '(mono)',
            shade: '~light~',

            text: 'cen_lig_mon',

            image: '',
            size: '<h1>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-text-',
            color: '(mono)',
            shade: '~light~',

            text: 'tex_lig_mon',

            image: '',
            size: '<h1>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-icon-',
            color: '(mono)',
            shade: '~light~',

            text: 'ico_lig_mon',

            image: '',
            size: '<h1>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <section className="design-section">
          <div className="dar_mon"></div>
          <div className="med_mon"></div>
          <div className="lig_mon"></div>
        </section>
      </div>
      <div className="h2-size visible">
        {/* Dark */}
        <ButtonDefault
          style={{
            view: '-top-',
            color: '(mono)',
            shade: '~dark~',

            text: 'top_dar_mon',

            image:
              'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3518122412fa887d7f7d7d894f05346860b8181c/source/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg',
            size: '<h2>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-bottom-',
            color: '(mono)',
            shade: '~dark~',

            text: 'bot_dar_mon',

            image: '',
            size: '<h2>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-left-',
            color: '(mono)',
            shade: '~dark~',

            text: 'lef_dar_mon',

            image: '',
            size: '<h2>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-right-',
            color: '(mono)',
            shade: '~dark~',

            text: 'rig_dar_mon',

            image: '',
            size: '<h2>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-center-',
            color: '(mono)',
            shade: '~dark~',

            text: 'cen_dar_mon',

            image: '',
            size: '<h2>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-text-',
            color: '(mono)',
            shade: '~dark~',

            text: 'tex_dar_mon',

            image: '',
            size: '<h2>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-icon-',
            color: '(mono)',
            shade: '~dark~',

            text: 'ico_dar_mon',

            image: '',
            size: '<h2>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />

        {/* Medium */}
        <ButtonDefault
          style={{
            view: '-top-',
            color: '(mono)',
            shade: '~medium~',

            text: 'top_med_mon',

            image: '',
            size: '<h2>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-bottom-',
            color: '(mono)',
            shade: '~medium~',

            text: 'bot_med_mon',

            image: '',
            size: '<h2>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-left-',
            color: '(mono)',
            shade: '~medium~',

            text: 'lef_med_mon',

            image: '',
            size: '<h2>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-right-',
            color: '(mono)',
            shade: '~medium~',

            text: 'rig_med_mon',

            image: '',
            size: '<h2>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-center-',
            color: '(mono)',
            shade: '~medium~',

            text: 'cen_med_mon',

            image: '',
            size: '<h2>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-text-',
            color: '(mono)',
            shade: '~medium~',

            text: 'tex_med_mon',

            image: '',
            size: '<h2>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-icon-',
            color: '(mono)',
            shade: '~medium~',

            text: 'ico_med_mon',

            image: '',
            size: '<h2>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />

        {/* Light */}
        <ButtonDefault
          style={{
            view: '-top-',
            color: '(mono)',
            shade: '~light~',

            text: 'top_lig_mon',

            image: '',
            size: '<h2>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-bottom-',
            color: '(mono)',
            shade: '~light~',

            text: 'bot_lig_mon',

            image: '',
            size: '<h2>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-left-',
            color: '(mono)',
            shade: '~light~',

            text: 'lef_lig_mon',

            image: '',
            size: '<h2>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-right-',
            color: '(mono)',
            shade: '~light~',

            text: 'rig_lig_mon',

            image: '',
            size: '<h2>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-center-',
            color: '(mono)',
            shade: '~light~',

            text: 'cen_lig_mon',

            image: '',
            size: '<h2>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-text-',
            color: '(mono)',
            shade: '~light~',

            text: 'tex_lig_mon',

            image: '',
            size: '<h2>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-icon-',
            color: '(mono)',
            shade: '~light~',

            text: 'ico_lig_mon',

            image: '',
            size: '<h2>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
      </div>
      <div className="h3-size visible">
        {/* Dark */}
        <ButtonDefault
          style={{
            view: '-top-',
            color: '(mono)',
            shade: '~dark~',

            text: 'top_dar_mon',

            image:
              'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3518122412fa887d7f7d7d894f05346860b8181c/source/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg',
            size: '<h3>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-bottom-',
            color: '(mono)',
            shade: '~dark~',

            text: 'bot_dar_mon',

            image: '',
            size: '<h3>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-left-',
            color: '(mono)',
            shade: '~dark~',

            text: 'lef_dar_mon',

            image: '',
            size: '<h3>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-right-',
            color: '(mono)',
            shade: '~dark~',

            text: 'rig_dar_mon',

            image: '',
            size: '<h3>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-center-',
            color: '(mono)',
            shade: '~dark~',

            text: 'cen_dar_mon',

            image: '',
            size: '<h3>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-text-',
            color: '(mono)',
            shade: '~dark~',

            text: 'tex_dar_mon',

            image: '',
            size: '<h3>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-icon-',
            color: '(mono)',
            shade: '~dark~',

            text: 'ico_dar_mon',

            image: '',
            size: '<h3>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />

        {/* Medium */}
        <ButtonDefault
          style={{
            view: '-top-',
            color: '(mono)',
            shade: '~medium~',

            text: 'top_med_mon',

            image: '',
            size: '<h3>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-bottom-',
            color: '(mono)',
            shade: '~medium~',

            text: 'bot_med_mon',

            image: '',
            size: '<h3>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-left-',
            color: '(mono)',
            shade: '~medium~',

            text: 'lef_med_mon',

            image: '',
            size: '<h3>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-right-',
            color: '(mono)',
            shade: '~medium~',

            text: 'rig_med_mon',

            image: '',
            size: '<h3>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-center-',
            color: '(mono)',
            shade: '~medium~',

            text: 'cen_med_mon',

            image: '',
            size: '<h3>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-text-',
            color: '(mono)',
            shade: '~medium~',

            text: 'tex_med_mon',

            image: '',
            size: '<h3>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-icon-',
            color: '(mono)',
            shade: '~medium~',

            text: 'ico_med_mon',

            image: '',
            size: '<h3>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />

        {/* Light */}
        <ButtonDefault
          style={{
            view: '-top-',
            color: '(mono)',
            shade: '~light~',

            text: 'top_lig_mon',

            image: '',
            size: '<h3>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-bottom-',
            color: '(mono)',
            shade: '~light~',

            text: 'bot_lig_mon',

            image: '',
            size: '<h3>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-left-',
            color: '(mono)',
            shade: '~light~',

            text: 'lef_lig_mon',

            image: '',
            size: '<h3>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-right-',
            color: '(mono)',
            shade: '~light~',

            text: 'rig_lig_mon',

            image: '',
            size: '<h3>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-center-',
            color: '(mono)',
            shade: '~light~',

            text: 'cen_lig_mon',

            image: '',
            size: '<h3>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-text-',
            color: '(mono)',
            shade: '~light~',

            text: 'tex_lig_mon',

            image: '',
            size: '<h3>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-icon-',
            color: '(mono)',
            shade: '~light~',

            text: 'ico_lig_mon',

            image: '',
            size: '<h3>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
      </div>
      <div className="h4-size visible">
        {/* Dark */}
        <ButtonDefault
          style={{
            view: '-top-',
            color: '(mono)',
            shade: '~dark~',

            text: 'top_dar_mon',

            image:
              'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3518122412fa887d7f7d7d894f05346860b8181c/source/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg',
            size: '<h4>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-bottom-',
            color: '(mono)',
            shade: '~dark~',

            text: 'bot_dar_mon',

            image: '',
            size: '<h4>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-left-',
            color: '(mono)',
            shade: '~dark~',

            text: 'lef_dar_mon',

            image: '',
            size: '<h4>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-right-',
            color: '(mono)',
            shade: '~dark~',

            text: 'rig_dar_mon',

            image: '',
            size: '<h4>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-center-',
            color: '(mono)',
            shade: '~dark~',

            text: 'cen_dar_mon',

            image: '',
            size: '<h4>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-text-',
            color: '(mono)',
            shade: '~dark~',

            text: 'tex_dar_mon',

            image: '',
            size: '<h4>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-icon-',
            color: '(mono)',
            shade: '~dark~',

            text: 'ico_dar_mon',

            image: '',
            size: '<h4>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />

        {/* Medium */}
        <ButtonDefault
          style={{
            view: '-top-',
            color: '(mono)',
            shade: '~medium~',

            text: 'top_med_mon',

            image: '',
            size: '<h4>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-bottom-',
            color: '(mono)',
            shade: '~medium~',

            text: 'bot_med_mon',

            image: '',
            size: '<h4>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-left-',
            color: '(mono)',
            shade: '~medium~',

            text: 'lef_med_mon',

            image: '',
            size: '<h4>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-right-',
            color: '(mono)',
            shade: '~medium~',

            text: 'rig_med_mon',

            image: '',
            size: '<h4>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-center-',
            color: '(mono)',
            shade: '~medium~',

            text: 'cen_med_mon',

            image: '',
            size: '<h4>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-text-',
            color: '(mono)',
            shade: '~medium~',

            text: 'tex_med_mon',

            image: '',
            size: '<h4>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-icon-',
            color: '(mono)',
            shade: '~medium~',

            text: 'ico_med_mon',

            image: '',
            size: '<h4>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />

        {/* Light */}
        <ButtonDefault
          style={{
            view: '-top-',
            color: '(mono)',
            shade: '~light~',

            text: 'top_lig_mon',

            image: '',
            size: '<h4>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-bottom-',
            color: '(mono)',
            shade: '~light~',

            text: 'bot_lig_mon',

            image: '',
            size: '<h4>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-left-',
            color: '(mono)',
            shade: '~light~',

            text: 'lef_lig_mon',

            image: '',
            size: '<h4>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-right-',
            color: '(mono)',
            shade: '~light~',

            text: 'rig_lig_mon',

            image: '',
            size: '<h4>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-center-',
            color: '(mono)',
            shade: '~light~',

            text: 'cen_lig_mon',

            image: '',
            size: '<h4>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-text-',
            color: '(mono)',
            shade: '~light~',

            text: 'tex_lig_mon',

            image: '',
            size: '<h4>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-icon-',
            color: '(mono)',
            shade: '~light~',

            text: 'ico_lig_mon',

            image: '',
            size: '<h4>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
      </div>
      <div className="h5-size visible">
        {/* Dark */}
        <ButtonDefault
          style={{
            view: '-top-',
            color: '(mono)',
            shade: '~dark~',

            text: 'top_dar_mon',

            image:
              'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3518122412fa887d7f7d7d894f05346860b8181c/source/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg',
            size: '<h5>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-bottom-',
            color: '(mono)',
            shade: '~dark~',

            text: 'bot_dar_mon',

            image: '',
            size: '<h5>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-left-',
            color: '(mono)',
            shade: '~dark~',

            text: 'lef_dar_mon',

            image: '',
            size: '<h5>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-right-',
            color: '(mono)',
            shade: '~dark~',

            text: 'rig_dar_mon',

            image: '',
            size: '<h5>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-center-',
            color: '(mono)',
            shade: '~dark~',

            text: 'cen_dar_mon',

            image: '',
            size: '<h5>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-text-',
            color: '(mono)',
            shade: '~dark~',

            text: 'tex_dar_mon',

            image: '',
            size: '<h5>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-icon-',
            color: '(mono)',
            shade: '~dark~',

            text: 'ico_dar_mon',

            image: '',
            size: '<h5>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />

        {/* Medium */}
        <ButtonDefault
          style={{
            view: '-top-',
            color: '(mono)',
            shade: '~medium~',

            text: 'top_med_mon',

            image: '',
            size: '<h5>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-bottom-',
            color: '(mono)',
            shade: '~medium~',

            text: 'bot_med_mon',

            image: '',
            size: '<h5>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-left-',
            color: '(mono)',
            shade: '~medium~',

            text: 'lef_med_mon',

            image: '',
            size: '<h5>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-right-',
            color: '(mono)',
            shade: '~medium~',

            text: 'rig_med_mon',

            image: '',
            size: '<h5>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-center-',
            color: '(mono)',
            shade: '~medium~',

            text: 'cen_med_mon',

            image: '',
            size: '<h5>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-text-',
            color: '(mono)',
            shade: '~medium~',

            text: 'tex_med_mon',

            image: '',
            size: '<h5>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-icon-',
            color: '(mono)',
            shade: '~medium~',

            text: 'ico_med_mon',

            image: '',
            size: '<h5>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />

        {/* Light */}
        <ButtonDefault
          style={{
            view: '-top-',
            color: '(mono)',
            shade: '~light~',

            text: 'top_lig_mon',

            image: '',
            size: '<h5>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-bottom-',
            color: '(mono)',
            shade: '~light~',

            text: 'bot_lig_mon',

            image: '',
            size: '<h5>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-left-',
            color: '(mono)',
            shade: '~light~',

            text: 'lef_lig_mon',

            image: '',
            size: '<h5>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-right-',
            color: '(mono)',
            shade: '~light~',

            text: 'rig_lig_mon',

            image: '',
            size: '<h5>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-center-',
            color: '(mono)',
            shade: '~light~',

            text: 'cen_lig_mon',

            image: '',
            size: '<h5>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-text-',
            color: '(mono)',
            shade: '~light~',

            text: 'tex_lig_mon',

            image: '',
            size: '<h5>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-icon-',
            color: '(mono)',
            shade: '~light~',

            text: 'ico_lig_mon',

            image: '',
            size: '<h5>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
      </div>
      <div className="h6-size hidden">
        {/* Dark */}
        <ButtonDefault
          style={{
            view: '-top-',
            color: '(mono)',
            shade: '~dark~',

            text: 'top_dar_mon',

            image:
              'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3518122412fa887d7f7d7d894f05346860b8181c/source/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg',
            size: '<h6>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-bottom-',
            color: '(mono)',
            shade: '~dark~',

            text: 'bot_dar_mon',

            image: '',
            size: '<h6>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-left-',
            color: '(mono)',
            shade: '~dark~',

            text: 'lef_dar_mon',

            image: '',
            size: '<h6>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-right-',
            color: '(mono)',
            shade: '~dark~',

            text: 'rig_dar_mon',

            image: '',
            size: '<h6>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-center-',
            color: '(mono)',
            shade: '~dark~',

            text: 'cen_dar_mon',

            image: '',
            size: '<h6>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-text-',
            color: '(mono)',
            shade: '~dark~',

            text: 'tex_dar_mon',

            image: '',
            size: '<h6>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-icon-',
            color: '(mono)',
            shade: '~dark~',

            text: 'ico_dar_mon',

            image: '',
            size: '<h6>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />

        {/* Medium */}
        <ButtonDefault
          style={{
            view: '-top-',
            color: '(mono)',
            shade: '~medium~',

            text: 'top_med_mon',

            image: '',
            size: '<h6>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-bottom-',
            color: '(mono)',
            shade: '~medium~',

            text: 'bot_med_mon',

            image: '',
            size: '<h6>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-left-',
            color: '(mono)',
            shade: '~medium~',

            text: 'lef_med_mon',

            image: '',
            size: '<h6>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-right-',
            color: '(mono)',
            shade: '~medium~',

            text: 'rig_med_mon',

            image: '',
            size: '<h6>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-center-',
            color: '(mono)',
            shade: '~medium~',

            text: 'cen_med_mon',

            image: '',
            size: '<h6>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-text-',
            color: '(mono)',
            shade: '~medium~',

            text: 'tex_med_mon',

            image: '',
            size: '<h6>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-icon-',
            color: '(mono)',
            shade: '~medium~',

            text: 'ico_med_mon',

            image: '',
            size: '<h6>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />

        {/* Light */}
        <ButtonDefault
          style={{
            view: '-top-',
            color: '(mono)',
            shade: '~light~',

            text: 'top_lig_mon',

            image: '',
            size: '<h6>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-bottom-',
            color: '(mono)',
            shade: '~light~',

            text: 'bot_lig_mon',

            image: '',
            size: '<h6>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-left-',
            color: '(mono)',
            shade: '~light~',

            text: 'lef_lig_mon',

            image: '',
            size: '<h6>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-right-',
            color: '(mono)',
            shade: '~light~',

            text: 'rig_lig_mon',

            image: '',
            size: '<h6>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-center-',
            color: '(mono)',
            shade: '~light~',

            text: 'cen_lig_mon',

            image: '',
            size: '<h6>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-text-',
            color: '(mono)',
            shade: '~light~',

            text: 'tex_lig_mon',

            image: '',
            size: '<h6>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-icon-',
            color: '(mono)',
            shade: '~light~',

            text: 'ico_lig_mon',

            image: '',
            size: '<h6>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
      </div>
      <div className="p-size visible">
        {/* Dark */}
        <ButtonDefault
          style={{
            view: '-top-',
            color: '(mono)',
            shade: '~dark~',

            text: 'top_dar_mon',

            image:
              'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3518122412fa887d7f7d7d894f05346860b8181c/source/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg',
            size: '<p>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-bottom-',
            color: '(mono)',
            shade: '~dark~',

            text: 'bot_dar_mon',

            image: '',
            size: '<p>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-left-',
            color: '(mono)',
            shade: '~dark~',

            text: 'lef_dar_mon',

            image: '',
            size: '<p>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-right-',
            color: '(mono)',
            shade: '~dark~',

            text: 'rig_dar_mon',

            image: '',
            size: '<p>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-center-',
            color: '(mono)',
            shade: '~dark~',

            text: 'cen_dar_mon',

            image: '',
            size: '<p>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-text-',
            color: '(mono)',
            shade: '~dark~',

            text: 'tex_dar_mon',

            image: '',
            size: '<p>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-icon-',
            color: '(mono)',
            shade: '~dark~',

            text: 'ico_dar_mon',

            image: '',
            size: '<p>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />

        {/* Medium */}
        <ButtonDefault
          style={{
            view: '-top-',
            color: '(mono)',
            shade: '~medium~',

            text: 'top_med_mon',

            image: '',
            size: '<p>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-bottom-',
            color: '(mono)',
            shade: '~medium~',

            text: 'bot_med_mon',

            image: '',
            size: '<p>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-left-',
            color: '(mono)',
            shade: '~medium~',

            text: 'lef_med_mon',

            image: '',
            size: '<p>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-right-',
            color: '(mono)',
            shade: '~medium~',

            text: 'rig_med_mon',

            image: '',
            size: '<p>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-center-',
            color: '(mono)',
            shade: '~medium~',

            text: 'cen_med_mon',

            image: '',
            size: '<p>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-text-',
            color: '(mono)',
            shade: '~medium~',

            text: 'tex_med_mon',

            image: '',
            size: '<p>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-icon-',
            color: '(mono)',
            shade: '~medium~',

            text: 'ico_med_mon',

            image: '',
            size: '<p>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />

        {/* Light */}
        <ButtonDefault
          style={{
            view: '-top-',
            color: '(mono)',
            shade: '~light~',

            text: 'top_lig_mon',

            image: '',
            size: '<p>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-bottom-',
            color: '(mono)',
            shade: '~light~',

            text: 'bot_lig_mon',

            image: '',
            size: '<p>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-left-',
            color: '(mono)',
            shade: '~light~',

            text: 'lef_lig_mon',

            image: '',
            size: '<p>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-right-',
            color: '(mono)',
            shade: '~light~',

            text: 'rig_lig_mon',

            image: '',
            size: '<p>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-center-',
            color: '(mono)',
            shade: '~light~',

            text: 'cen_lig_mon',

            image: '',
            size: '<p>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-text-',
            color: '(mono)',
            shade: '~light~',

            text: 'tex_lig_mon',

            image: '',
            size: '<p>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
        <ButtonDefault
          style={{
            view: '-icon-',
            color: '(mono)',
            shade: '~light~',

            text: 'ico_lig_mon',

            image: '',
            size: '<p>',
            type: '{button}',
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
        />
      </div>
    </section>
  );
};
export default SectionButtons;

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
