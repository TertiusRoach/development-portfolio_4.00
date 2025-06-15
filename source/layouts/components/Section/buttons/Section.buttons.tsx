//--|🠊 Section.buttons.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Section.buttons.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Functions 🠋|--//
import { defineButton } from './Section_buttons';
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
    console.log(`pageName: ${pageName}`);
    console.log(`blockName: ${blockName}`);
    console.log('handleButtons Reloaded!');

    // const header = document.querySelector(`#${pageName}-header`) as HTMLElement;
    // const selects = header?.querySelectorAll('select') || ({} as NodeListOf<HTMLSelectElement>);

    return (
      <>
        <div className="h1-size"></div>
        <div className="h2-size"></div>
        <div className="h3-size"></div>
        <div className="h4-size"></div>
        <div className="h5-size"></div>
        <div className="h6-size"></div>
        <div className="p-size"></div>
      </>
    );
  };

  useEffect(() => {
    /*
    const header = document.querySelector<HTMLElement>(`#${pageName}-header`);

    if (!header) return;

    const selects = header.querySelectorAll<HTMLSelectElement>('select');

    const handleChange = () => handleButtons(pageName, blockName);

    selects.forEach((select) => {
      select.addEventListener('change', handleChange);
    });

    return () => {
      selects.forEach((select) => {
        select.removeEventListener('change', handleChange);
      });
    };
    */
  }, [pageName, blockName]);

  /*
  console.log(`pageName: ${pageName}`);
  console.log(`blockName: ${blockName}`);
  */

  return (
    <section className="buttons-section">
      <div className="h1-size">
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
      </div>
      <div className="h2-size"></div>
      <div className="h3-size"></div>
      <div className="h4-size"></div>
      <div className="h5-size"></div>
      <div className="h6-size"></div>
      <div className="p-size"></div>
    </section>
  );
};
export default SectionButtons;
