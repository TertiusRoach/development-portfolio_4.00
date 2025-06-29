//--|🠉 pageName: [buttons] 🠉|--//
//--|🠊 Aside-main.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Aside-main.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../../scripts/buttons';
// import { defineButton, sizeDivs } from './Aside_buttons';
//--|🠉 Functions 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
// import { reloadDesign } from './extension/Section_reload';
import ButtonDefault from '../../../Button/default/Button.default';
//--|🠉 Components 🠉|--//

interface InfoProps {
  info: {
    pageName: '[buttons]' | string;
    blockName: '<main>' | string;
    roleName?: string;
  };
  tags: {
    mainPage: HTMLElement | null;
    headPage: HTMLElement | null;
    footPage: HTMLElement | null;
    overPage: HTMLElement | null;
    leftPage: HTMLElement | null;
    rightPage: HTMLElement | null;
  };
}
const AsideMain: React.FC<InfoProps> = ({ info, tags }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'buttons';
  const blockName = stripBrackets(info.blockName, '<>') as 'main';

  const findSize = (pageName: string, blockName: string) => {
    console.log(blockName);
    console.log(pageName);

    console.log(tags.mainPage, tags.headPage, tags.footPage, tags.overPage, tags.leftPage, tags.rightPage);
  };

  useEffect(() => {
    findSize(pageName, blockName);
  }, [pageName, blockName]);

  let imagePath: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3518122412fa887d7f7d7d894f05346860b8181c/source';

  return (
    <section className="buttons-section">
      <div className="h1-size visible">
        {/* <aside className="dar-aside">
          <ButtonDefault
            style={{
              view: '-top-',
              color: '(mono)',
              shade: '~dark~',
              text: 'top_dar_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/02.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/03.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/04.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/05.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,

              size: '<h1>',
              type: '{button}',
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
        </aside>
        <aside className="med-aside">
          <ButtonDefault
            style={{
              view: '-top-',
              color: '(mono)',
              shade: '~medium~',
              text: 'top_med_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/07.svg`,

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
              color: '(mono)',
              view: '-bottom-',
              shade: '~medium~',
              text: 'bot_med_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/08.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/09.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/10.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/11.svg`,

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
              size: '<h1>',
              view: '-icon-',
              color: '(mono)',
              type: '{button}',
              shade: '~medium~',
              text: 'ico_med_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/12.svg`,
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
        </aside>
        <aside className="lig-aside">
          <ButtonDefault
            style={{
              view: '-top-',
              color: '(mono)',
              shade: '~light~',
              text: 'top_lig_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/13.svg`,

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
              color: '(mono)',
              view: '-bottom-',
              shade: '~light~',
              text: 'bot_lig_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/14.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/15.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/16.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/17.svg`,

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
              size: '<h1>',
              view: '-text-',
              color: '(mono)',
              shade: '~light~',
              type: '{button}',
              text: 'tex_lig_mon',
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
          <ButtonDefault
            style={{
              size: '<h1>',
              view: '-icon-',
              color: '(mono)',
              type: '{button}',
              shade: '~light~',
              text: 'ico_lig_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/18.svg`,
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
        </aside> */}
      </div>
      <div className="h2-size hidden">
        {/* <aside className="dar-aside">
          <ButtonDefault
            style={{
              view: '-top-',
              color: '(mono)',
              shade: '~dark~',
              text: 'top_dar_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/02.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/03.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/04.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/05.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,

              size: '<h2>',
              type: '{button}',
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
        </aside>
        <aside className="med-aside">
          <ButtonDefault
            style={{
              view: '-top-',
              color: '(mono)',
              shade: '~medium~',
              text: 'top_med_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/07.svg`,

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
              color: '(mono)',
              view: '-bottom-',
              shade: '~medium~',
              text: 'bot_med_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/08.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/09.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/10.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/11.svg`,

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
              size: '<h2>',
              view: '-icon-',
              color: '(mono)',
              type: '{button}',
              shade: '~medium~',
              text: 'ico_med_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/12.svg`,
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
        </aside>
        <aside className="lig-aside">
          <ButtonDefault
            style={{
              view: '-top-',
              color: '(mono)',
              shade: '~light~',
              text: 'top_lig_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/13.svg`,

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
              color: '(mono)',
              view: '-bottom-',
              shade: '~light~',
              text: 'bot_lig_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/14.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/15.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/16.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/17.svg`,

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
              size: '<h2>',
              view: '-text-',
              color: '(mono)',
              shade: '~light~',
              type: '{button}',
              text: 'tex_lig_mon',
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
          <ButtonDefault
            style={{
              size: '<h2>',
              view: '-icon-',
              color: '(mono)',
              type: '{button}',
              shade: '~light~',
              text: 'ico_lig_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/18.svg`,
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
        </aside> */}
      </div>
      <div className="h3-size hidden">
        {/* <aside className="dar-aside">
          <ButtonDefault
            style={{
              view: '-top-',
              color: '(mono)',
              shade: '~dark~',
              text: 'top_dar_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/02.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/03.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/04.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/05.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,

              size: '<h3>',
              type: '{button}',
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
        </aside>
        <aside className="med-aside">
          <ButtonDefault
            style={{
              view: '-top-',
              color: '(mono)',
              shade: '~medium~',
              text: 'top_med_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/07.svg`,

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
              color: '(mono)',
              view: '-bottom-',
              shade: '~medium~',
              text: 'bot_med_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/08.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/09.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/10.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/11.svg`,

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
              size: '<h3>',
              view: '-icon-',
              color: '(mono)',
              type: '{button}',
              shade: '~medium~',
              text: 'ico_med_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/12.svg`,
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
        </aside>
        <aside className="lig-aside">
          <ButtonDefault
            style={{
              view: '-top-',
              color: '(mono)',
              shade: '~light~',
              text: 'top_lig_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/13.svg`,

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
              color: '(mono)',
              view: '-bottom-',
              shade: '~light~',
              text: 'bot_lig_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/14.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/15.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/16.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/17.svg`,

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
              size: '<h3>',
              view: '-text-',
              color: '(mono)',
              shade: '~light~',
              type: '{button}',
              text: 'tex_lig_mon',
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
          <ButtonDefault
            style={{
              size: '<h3>',
              view: '-icon-',
              color: '(mono)',
              type: '{button}',
              shade: '~light~',
              text: 'ico_lig_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/18.svg`,
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
        </aside> */}
      </div>
      <div className="h4-size hidden">
        {/* <aside className="dar-aside">
          <ButtonDefault
            style={{
              view: '-top-',
              color: '(mono)',
              shade: '~dark~',
              text: 'top_dar_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/02.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/03.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/04.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/05.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,

              size: '<h4>',
              type: '{button}',
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
        </aside>
        <aside className="med-aside">
          <ButtonDefault
            style={{
              view: '-top-',
              color: '(mono)',
              shade: '~medium~',
              text: 'top_med_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/07.svg`,

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
              color: '(mono)',
              view: '-bottom-',
              shade: '~medium~',
              text: 'bot_med_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/08.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/09.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/10.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/11.svg`,

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
              size: '<h4>',
              view: '-icon-',
              color: '(mono)',
              type: '{button}',
              shade: '~medium~',
              text: 'ico_med_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/12.svg`,
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
        </aside>
        <aside className="lig-aside">
          <ButtonDefault
            style={{
              view: '-top-',
              color: '(mono)',
              shade: '~light~',
              text: 'top_lig_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/13.svg`,

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
              color: '(mono)',
              view: '-bottom-',
              shade: '~light~',
              text: 'bot_lig_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/14.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/15.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/16.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/17.svg`,

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
              size: '<h4>',
              view: '-text-',
              color: '(mono)',
              shade: '~light~',
              type: '{button}',
              text: 'tex_lig_mon',
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
          <ButtonDefault
            style={{
              size: '<h4>',
              view: '-icon-',
              color: '(mono)',
              type: '{button}',
              shade: '~light~',
              text: 'ico_lig_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/18.svg`,
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
        </aside> */}
      </div>
      <div className="h5-size hidden">
        {/* <aside className="dar-aside">
          <ButtonDefault
            style={{
              view: '-top-',
              color: '(mono)',
              shade: '~dark~',
              text: 'top_dar_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/02.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/03.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/04.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/05.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,

              size: '<h5>',
              type: '{button}',
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
        </aside>
        <aside className="med-aside">
          <ButtonDefault
            style={{
              view: '-top-',
              color: '(mono)',
              shade: '~medium~',
              text: 'top_med_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/07.svg`,

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
              color: '(mono)',
              view: '-bottom-',
              shade: '~medium~',
              text: 'bot_med_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/08.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/09.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/10.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/11.svg`,

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
              size: '<h5>',
              view: '-icon-',
              color: '(mono)',
              type: '{button}',
              shade: '~medium~',
              text: 'ico_med_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/12.svg`,
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
        </aside>
        <aside className="lig-aside">
          <ButtonDefault
            style={{
              view: '-top-',
              color: '(mono)',
              shade: '~light~',
              text: 'top_lig_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/13.svg`,

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
              color: '(mono)',
              view: '-bottom-',
              shade: '~light~',
              text: 'bot_lig_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/14.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/15.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/16.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/17.svg`,

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
              size: '<h5>',
              view: '-text-',
              color: '(mono)',
              shade: '~light~',
              type: '{button}',
              text: 'tex_lig_mon',
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
          <ButtonDefault
            style={{
              size: '<h5>',
              view: '-icon-',
              color: '(mono)',
              type: '{button}',
              shade: '~light~',
              text: 'ico_lig_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/18.svg`,
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
        </aside> */}
      </div>
      <div className="h6-size hidden">
        {/* <aside className="dar-aside">
          <ButtonDefault
            style={{
              view: '-top-',
              color: '(mono)',
              shade: '~dark~',
              text: 'top_dar_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/02.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/03.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/04.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/05.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,

              size: '<h6>',
              type: '{button}',
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
        </aside>
        <aside className="med-aside">
          <ButtonDefault
            style={{
              view: '-top-',
              color: '(mono)',
              shade: '~medium~',
              text: 'top_med_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/07.svg`,

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
              color: '(mono)',
              view: '-bottom-',
              shade: '~medium~',
              text: 'bot_med_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/08.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/09.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/10.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/11.svg`,

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
              size: '<h6>',
              view: '-icon-',
              color: '(mono)',
              type: '{button}',
              shade: '~medium~',
              text: 'ico_med_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/12.svg`,
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
        </aside>
        <aside className="lig-aside">
          <ButtonDefault
            style={{
              view: '-top-',
              color: '(mono)',
              shade: '~light~',
              text: 'top_lig_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/13.svg`,

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
              color: '(mono)',
              view: '-bottom-',
              shade: '~light~',
              text: 'bot_lig_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/14.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/15.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/16.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/17.svg`,

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
              size: '<h6>',
              view: '-text-',
              color: '(mono)',
              shade: '~light~',
              type: '{button}',
              text: 'tex_lig_mon',
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
          <ButtonDefault
            style={{
              size: '<h6>',
              view: '-icon-',
              color: '(mono)',
              type: '{button}',
              shade: '~light~',
              text: 'ico_lig_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/18.svg`,
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
        </aside> */}
      </div>
      <div className="p-size hidden">
        {/* <aside className="dar-aside">
          <ButtonDefault
            style={{
              view: '-top-',
              color: '(mono)',
              shade: '~dark~',
              text: 'top_dar_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/02.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/03.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/04.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/05.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,

              size: '<p>',
              type: '{button}',
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
        </aside>
        <aside className="med-aside">
          <ButtonDefault
            style={{
              view: '-top-',
              color: '(mono)',
              shade: '~medium~',
              text: 'top_med_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/07.svg`,

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
              color: '(mono)',
              view: '-bottom-',
              shade: '~medium~',
              text: 'bot_med_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/08.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/09.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/10.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/11.svg`,

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
              size: '<p>',
              view: '-icon-',
              color: '(mono)',
              type: '{button}',
              shade: '~medium~',
              text: 'ico_med_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/12.svg`,
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
        </aside>
        <aside className="lig-aside">
          <ButtonDefault
            style={{
              view: '-top-',
              color: '(mono)',
              shade: '~light~',
              text: 'top_lig_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/13.svg`,

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
              color: '(mono)',
              view: '-bottom-',
              shade: '~light~',
              text: 'bot_lig_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/14.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/15.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/16.svg`,

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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/17.svg`,

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
              size: '<p>',
              view: '-text-',
              color: '(mono)',
              shade: '~light~',
              type: '{button}',
              text: 'tex_lig_mon',
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
          <ButtonDefault
            style={{
              size: '<p>',
              view: '-icon-',
              color: '(mono)',
              type: '{button}',
              shade: '~light~',
              text: 'ico_lig_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/18.svg`,
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
        </aside> */}
      </div>
    </section>
  );
};
export default AsideMain;

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
