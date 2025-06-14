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

            text: 'top-dar-mon',

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
            shade: '~dark~',

            text: 'bot-dar-mon',

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

            text: 'lef-dar-mon',

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

            text: 'rig-dar-mon',

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

            text: 'cen-dar-mon',

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

            text: 'tex-dar-mon',

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

            text: 'ico-dar-mon',

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

            text: 'top-med-mon',

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

            text: 'bot-med-mon',

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

            text: 'lef-med-mon',

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

            text: 'rig-med-mon',

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

            text: 'cen-med-mon',

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

            text: 'tex-med-mon',

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

            text: 'ico-med-mon',

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

            text: 'top-lig-mon',

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

            text: 'bot-lig-mon',

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

            text: 'lef-lig-mon',

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

            text: 'rig-lig-mon',

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

            text: 'cen-lig-mon',

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

            text: 'tex-lig-mon',

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

            text: 'ico-lig-mon',

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

/*
  const handleButtons = (select: string) => {
    console.log(select);
  };
  */
/*
    function logSelectValues() {
      selects.forEach((select) => {
        handleButtons(select.value);
      });
    }
    */

// {
//   /* <div className="h1-size"></div>
//       <div className="h2-size"></div>
//       <div className="h3-size"></div>
//       <div className="h4-size"></div>
//       <div className="h5-size"></div>
//       <div className="h6-size"></div>
//       <div className="p-size"></div> */
// }

// {
//   /* <div className="buttons-dark">
//         <button>Top</button>
//         <button>Bottom</button>

//         <button>Left</button>
//         <button>Right</button>
//         <button>Center</button>

//         <button>Text</button>
//         <button>Icon</button>
//       </div> */
// }

// {
//   /* <div className="buttons-medium">
//         <button>Top</button>
//         <button>Bottom</button>

//         <button>Left</button>
//         <button>Right</button>
//         <button>Center</button>

//         <button>Text</button>
//         <button>Icon</button>
//       </div> */
// }

// {
//   /* <div className="buttons-light">
//         <button>Top</button>
//         <button>Bottom</button>

//         <button>Left</button>
//         <button>Right</button>
//         <button>Center</button>

//         <button>Text</button>
//         <button>Icon</button>
//       </div> */
// }
