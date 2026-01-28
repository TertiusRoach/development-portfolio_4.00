//--|🠉 pageName: [buttons] 🠉|--//
//--|🠊 ButtonsMain.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './ButtonsMain.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Functions 🠋|--//
import { classShade, makeText } from '../../Aside_buttons';
import { stripBrackets } from '../../../../../scripts/buttons';
//--|🠉 Functions 🠉|--//
//--|🠋 Components 🠋|--//
import ButtonDefault from '../../../../Button/default/Button.default';
import ButtonCleaned from '../../../../Button/cleaned/Button.cleaned';
import ButtonStretch from '../../../../Button/stretch/Button.stretch';
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
    specShade: '~dark~' | '~medium~' | '~light~';
    specLoad: '[default]' | '[cleaned]' | '[stretch]' | string;
    specColor: '(red)' | '(green)' | '(blue)' | '(mono)' | string;
    specSize: '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>';
  };
}
const AsideMain: React.FC<InfoProps> = ({ info, style }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'buttons';
  const blockName = stripBrackets(info.blockName, '<>') as 'main';
  const imagePath: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3518122412fa887d7f7d7d894f05346860b8181c/source';

  useEffect(() => {}, [pageName, blockName]);

  switch (style.specLoad) {
    case '[stretch]':
      return (
        <>
          <ButtonStretch
            style={{
              view: '-top-',
              text: `top_${makeText(style)}`,
              shade: style.specShade as '~dark~' | '~medium~' | '~light~',
              color: style.specColor as '(red)' | '(green)' | '(blue)' | '(mono)',
              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg`,

              type: '{button}',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
            }}
          />
          <ButtonStretch
            style={{
              view: '-bottom-',
              type: '{button}',
              text: `bot_${makeText(style)}`,
              shade: style.specShade as '~dark~' | '~medium~' | '~light~',
              color: style.specColor as '(red)' | '(green)' | '(blue)' | '(mono)',
              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/02.svg`,
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
            }}
          />
          <ButtonStretch
            style={{
              view: '-left-',
              type: '{button}',
              text: `lef_${makeText(style)}`,
              shade: style.specShade as '~dark~' | '~medium~' | '~light~',
              color: style.specColor as '(red)' | '(green)' | '(blue)' | '(mono)',
              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/03.svg`,
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
            }}
          />
          <ButtonStretch
            style={{
              view: '-right-',
              type: '{button}',
              text: `rig_${makeText(style)}`,
              shade: style.specShade as '~dark~' | '~medium~' | '~light~',
              color: style.specColor as '(red)' | '(green)' | '(blue)' | '(mono)',
              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/04.svg`,
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
            }}
          />
          <ButtonStretch
            style={{
              view: '-center-',
              type: '{button}',
              text: `cen_${makeText(style)}`,
              shade: style.specShade as '~dark~' | '~medium~' | '~light~',
              color: style.specColor as '(red)' | '(green)' | '(blue)' | '(mono)',
              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/05.svg`,
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
            }}
          />
          <ButtonStretch
            style={{
              view: '-text-',
              type: '{button}',
              text: `tex_${makeText(style)}`,
              shade: style.specShade as '~dark~' | '~medium~' | '~light~',
              color: style.specColor as '(red)' | '(green)' | '(blue)' | '(mono)',
              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
            }}
          />
          <ButtonStretch
            style={{
              view: '-icon-',
              type: '{button}',
              text: `ico_${makeText(style)}`,
              shade: style.specShade as '~dark~' | '~medium~' | '~light~',
              color: style.specColor as '(red)' | '(green)' | '(blue)' | '(mono)',
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
    case '[cleaned]':
      return (
        <>
          <ButtonCleaned
            style={{
              view: '-top-',
              text: `top_${makeText(style)}`,
              shade: style.specShade as '~dark~' | '~medium~' | '~light~',
              color: style.specColor as '(red)' | '(green)' | '(blue)' | '(mono)',
              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg`,

              type: '{button}',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
            }}
          />
          <ButtonCleaned
            style={{
              view: '-bottom-',
              type: '{button}',
              text: `bot_${makeText(style)}`,
              shade: style.specShade as '~dark~' | '~medium~' | '~light~',
              color: style.specColor as '(red)' | '(green)' | '(blue)' | '(mono)',
              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/02.svg`,
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
            }}
          />
          <ButtonCleaned
            style={{
              view: '-left-',
              type: '{button}',
              text: `lef_${makeText(style)}`,
              shade: style.specShade as '~dark~' | '~medium~' | '~light~',
              color: style.specColor as '(red)' | '(green)' | '(blue)' | '(mono)',
              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/03.svg`,
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
            }}
          />
          <ButtonCleaned
            style={{
              view: '-right-',
              type: '{button}',
              text: `rig_${makeText(style)}`,
              shade: style.specShade as '~dark~' | '~medium~' | '~light~',
              color: style.specColor as '(red)' | '(green)' | '(blue)' | '(mono)',
              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/04.svg`,
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
            }}
          />
          <ButtonCleaned
            style={{
              view: '-center-',
              type: '{button}',
              text: `cen_${makeText(style)}`,
              shade: style.specShade as '~dark~' | '~medium~' | '~light~',
              color: style.specColor as '(red)' | '(green)' | '(blue)' | '(mono)',
              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/05.svg`,
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
            }}
          />
          <ButtonCleaned
            style={{
              view: '-text-',
              type: '{button}',
              text: `tex_${makeText(style)}`,
              shade: style.specShade as '~dark~' | '~medium~' | '~light~',
              color: style.specColor as '(red)' | '(green)' | '(blue)' | '(mono)',
              size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
            }}
          />
          <ButtonCleaned
            style={{
              view: '-icon-',
              type: '{button}',
              text: `ico_${makeText(style)}`,
              shade: style.specShade as '~dark~' | '~medium~' | '~light~',
              color: style.specColor as '(red)' | '(green)' | '(blue)' | '(mono)',
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
    case '[default]':
    default:
      return (
        <>
          <ButtonDefault
            style={{
              view: '-top-',
              text: `top_${makeText(style)}`,
              shade: style.specShade as '~dark~' | '~medium~' | '~light~',
              color: style.specColor as '(red)' | '(green)' | '(blue)' | '(mono)',
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
              type: '{button}',
              text: `bot_${makeText(style)}`,
              shade: style.specShade as '~dark~' | '~medium~' | '~light~',
              color: style.specColor as '(red)' | '(green)' | '(blue)' | '(mono)',
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
              type: '{button}',
              text: `lef_${makeText(style)}`,
              shade: style.specShade as '~dark~' | '~medium~' | '~light~',
              color: style.specColor as '(red)' | '(green)' | '(blue)' | '(mono)',
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
              type: '{button}',
              text: `rig_${makeText(style)}`,
              shade: style.specShade as '~dark~' | '~medium~' | '~light~',
              color: style.specColor as '(red)' | '(green)' | '(blue)' | '(mono)',
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
              type: '{button}',
              text: `cen_${makeText(style)}`,
              shade: style.specShade as '~dark~' | '~medium~' | '~light~',
              color: style.specColor as '(red)' | '(green)' | '(blue)' | '(mono)',
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
              type: '{button}',
              text: `tex_${makeText(style)}`,
              shade: style.specShade as '~dark~' | '~medium~' | '~light~',
              color: style.specColor as '(red)' | '(green)' | '(blue)' | '(mono)',
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
              type: '{button}',
              text: `ico_${makeText(style)}`,
              shade: style.specShade as '~dark~' | '~medium~' | '~light~',
              color: style.specColor as '(red)' | '(green)' | '(blue)' | '(mono)',
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
};
export default AsideMain;
