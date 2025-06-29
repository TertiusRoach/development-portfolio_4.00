//--|🠉 pageName: [buttons] 🠉|--//
//--|🠊 Aside-main.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Aside-main.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Functions 🠋|--//
import { classShade } from '../Aside_buttons';
import { stripBrackets } from '../../../../scripts/buttons';
//--|🠉 Functions 🠉|--//
//--|🠋 Components 🠋|--//
import ButtonDefault from '../../../Button/default/Button.default';
//--|🠉 Components 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//

interface InfoProps {
  info: {
    blockName: '<main>' | string;
    pageName: '[buttons]' | string;
  };
  style: {
    specShade: '~dark~' | '~medium~' | '~light~' | string;
    specSize: '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>' | string;
    specView: '-top-' | '-bottom-' | '-left-' | '-right-' | '-center-' | '-text-' | '-icon-' | string;
  };
}
const AsideMain: React.FC<InfoProps> = ({ info, style }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'buttons';
  const blockName = stripBrackets(info.blockName, '<>') as 'main';

  const handleAside = (pageName: string, blockName: string, infoStyle: Array<object>) => {
    let info = infoStyle[0] as InfoProps['info'];
    let style = infoStyle[1] as InfoProps['style'];

    console.log(`#${pageName}-${blockName}`);

    return (
      <>
        <aside className={`${classShade('~dark~')}-aside`}>
          <ButtonDefault
            style={{
              view: '-top-',
              color: '(mono)',
              shade: '~dark~',
              text: 'top_dar_mon',
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
              shade: '~dark~',

              text: 'bot_dar_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/02.svg`,

              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
              type: '{button}',
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
              shade: '~dark~',

              text: 'lef_dar_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/03.svg`,

              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
              type: '{button}',
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
              shade: '~dark~',

              text: 'rig_dar_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/04.svg`,

              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
              type: '{button}',
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
              shade: '~dark~',

              text: 'cen_dar_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/05.svg`,

              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
              type: '{button}',
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
              shade: '~dark~',

              text: 'tex_dar_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,

              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
              type: '{button}',
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
              shade: '~dark~',

              text: 'ico_dar_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,

              size: '<h1>',
              type: '{button}',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
            }}
          />
        </aside>
        <aside className={`${classShade('~medium~')}-aside`}>
          <ButtonDefault
            style={{
              view: '-top-',
              color: '(mono)',
              shade: '~medium~',
              text: 'top_med_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/07.svg`,

              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
              type: '{button}',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
            }}
          />
          <ButtonDefault
            style={{
              color: '(mono)',
              view: '-bottom-',
              shade: '~medium~',
              text: 'bot_med_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/08.svg`,

              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
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

              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
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

              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
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

              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
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

              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
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
              type: '{button}',
              shade: '~medium~',
              text: 'ico_med_mon',
              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/12.svg`,
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
        </aside>
        <aside className={`${classShade('~light~')}-aside`}>
          <ButtonDefault
            style={{
              view: '-top-',
              color: '(mono)',
              shade: '~light~',
              text: 'top_lig_mon',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/13.svg`,

              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
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

              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
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

              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
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

              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
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
              shade: '~light~',
              view: '-center-',
              type: '{button}',
              text: 'cen_lig_mon',
              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/17.svg`,
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
          <ButtonDefault
            style={{
              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
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
              view: '-icon-',
              color: '(mono)',
              type: '{button}',
              shade: '~light~',
              text: 'ico_lig_mon',
              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/18.svg`,
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
        </aside>
      </>
    );
  };

  useEffect(() => {
    // handleAside(pageName, blockName);
  }, [pageName, blockName]);

  console.log(style.specShade);

  let imagePath: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3518122412fa887d7f7d7d894f05346860b8181c/source';

  console.log();
  switch (style.specSize) {
    case '<h1>':
      return handleAside(pageName, blockName, [info, style]);
    case '<h2>':
      return handleAside(pageName, blockName, [info, style]);
    case '<h3>':
      return handleAside(pageName, blockName, [info, style]);
    case '<h4>':
      return handleAside(pageName, blockName, [info, style]);
    case '<h5>':
      return handleAside(pageName, blockName, [info, style]);
    case '<h6>':
      return handleAside(pageName, blockName, [info, style]);
    case '<p>':
      return handleAside(pageName, blockName, [info, style]);
  }

  // alert('YOU FOUND IT!');
};
export default AsideMain;
