//--|🠊 Aside.buttons.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Aside.buttons.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../scripts/overtime';
import { defineButton, sizeDivs } from './Aside_buttons';
//--|🠉 Functions 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
// import AsideMain from './extensions/main/Aside-main';
import ButtonDefault from '../../Button/default/Button.default';
//--|🠉 Components 🠉|--//

interface InfoProps {
  info: {
    pageName: '[buttons]' | string;
    blockName: '<main>' | string;
  };
  load: '[default]' | '[cleaned]' | string;
  style: {
    specView: Array<string>;
    specShade: Array<string>;

    specLoad: '[default]' | '[cleaned]' | string;
    specSize: '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>';
  };
}
const AsideButtons: React.FC<InfoProps> = ({ info, style }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'buttons';
  const blockName = stripBrackets(info.blockName, '<>') as 'main';
  const imagePath: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3518122412fa887d7f7d7d894f05346860b8181c/source';

  const handleButtons = (pageName: string, blockName: 'main', shadeType: '~dark~' | '~medium~' | '~light~') => {
    switch (blockName) {
      case 'main':
        return (
          <>
            <ButtonDefault
              style={{
                view: '-top-',
                color: '(mono)',
                text: 'top_dar_mon',
                shade: shadeType as '~dark~' | '~medium~' | '~light~',
                size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
                image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg`,

                type: '{button}',
              }}
              info={{
                pageName: pageName,
                blockName: blockName,
              }}
            />
            <ButtonDefault
              style={{
                view: '-bottom-',
                color: '(mono)',
                type: '{button}',
                text: 'bot_dar_mon',
                shade: shadeType as '~dark~' | '~medium~' | '~light~',
                size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
                image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/02.svg`,
              }}
              info={{
                pageName: pageName,
                blockName: blockName,
              }}
            />
            <ButtonDefault
              style={{
                view: '-left-',
                color: '(mono)',
                type: '{button}',
                text: 'lef_dar_mon',
                shade: shadeType as '~dark~' | '~medium~' | '~light~',
                size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
                image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/03.svg`,
              }}
              info={{
                pageName: pageName,
                blockName: blockName,
              }}
            />
            <ButtonDefault
              style={{
                view: '-right-',
                color: '(mono)',
                type: '{button}',
                text: 'rig_dar_mon',
                shade: shadeType as '~dark~' | '~medium~' | '~light~',
                size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
                image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/04.svg`,
              }}
              info={{
                pageName: pageName,
                blockName: blockName,
              }}
            />
            <ButtonDefault
              style={{
                view: '-center-',
                color: '(mono)',
                type: '{button}',
                text: 'cen_dar_mon',
                shade: shadeType as '~dark~' | '~medium~' | '~light~',
                size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
                image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/05.svg`,
              }}
              info={{
                pageName: pageName,
                blockName: blockName,
              }}
            />
            <ButtonDefault
              style={{
                view: '-text-',
                color: '(mono)',
                type: '{button}',
                text: 'tex_dar_mon',
                shade: shadeType as '~dark~' | '~medium~' | '~light~',
                size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
              }}
              info={{
                pageName: pageName,
                blockName: blockName,
              }}
            />
            <ButtonDefault
              style={{
                view: '-icon-',
                color: '(mono)',
                type: '{button}',
                text: 'ico_dar_mon',
                shade: shadeType as '~dark~' | '~medium~' | '~light~',
                size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
                image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,
              }}
              info={{
                pageName: pageName,
                blockName: blockName,
              }}
            />
          </>
        );
    }

    const theseTags: { [key: string]: HTMLElement | null } = {
      bodyPage: document.querySelector(`body #${pageName}-body`) as HTMLElement | null,
      mainPage: document.querySelector(`main[id*="${pageName}-main"]`) as HTMLElement | null,
      headPage: document.querySelector(`header[id*="${pageName}-header"]`) as HTMLElement | null,
      footPage: document.querySelector(`footer[id*="${pageName}-footer"]`) as HTMLElement | null,
      overPage: document.querySelector(`section[id*="${pageName}-overlay"]`) as HTMLElement | null,
      leftPage: document.querySelector(`aside[id*="${pageName}-leftbar"]`) as HTMLElement | null,
      rightPage: document.querySelector(`aside[id*="${pageName}-rightbar"]`) as HTMLElement | null,
    };
    let specShade: Array<string> = ['~dark~', '~medium~', '~light~'];
  };

  useEffect(() => {}, [pageName, blockName]);

  return (
    <>
      <aside className={`${pageName}-aside dar`}>{handleButtons(pageName, blockName, '~dark~')}</aside>
      <aside className={`${pageName}-aside med`}>{handleButtons(pageName, blockName, '~medium~')}</aside>
      <aside className={`${pageName}-aside lig`}>{handleButtons(pageName, blockName, '~light~')}</aside>
    </>
  );
};
export default AsideButtons;

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
