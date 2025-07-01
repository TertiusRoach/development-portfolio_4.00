//--|🠉 pageName: [buttons] 🠉|--//
//--|🠊 ButtonsHeader.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './ButtonsHeader.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Functions 🠋|--//
import { showSize } from '../../Menu_buttons';
import { stripBrackets } from '../../../../../scripts/buttons';
//--|🠉 Functions 🠉|--//
//--|🠋 Components 🠋|--//
import ButtonDefault from '../../../../Button/default/Button.default';
import ButtonCleaned from '../../../../Button/cleaned/Button.cleaned';
//--|🠉 Components 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//

interface InfoProps {
  info: {
    blockName: '<main>' | string;
    pageName: '[buttons]' | string;
  };
}
const MenuHeader: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'buttons';
  const blockName = stripBrackets(info.blockName, '<>') as 'main';

  return (
    <>
      {' '}
      <li className="logo-list">
        <img
          className="logo-image"
          src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/81562c9457867ac7e8724b068a85db04f094477a/source/assets/svg-files/my-signature/signature-icon/primary-medium.svg"
        />
      </li>
      <li className="load-list">
        <select id="load-select" defaultValue="[cleaned]" name="style">
          <option value="[stretch]">[Stretch]</option>
          <option value="[cleaned]">[Cleaned]</option>
          <option value="[grading]">[Grading]</option>
          <option value="[framing]">[Framing]</option>
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
  /*
  const imagePath: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3518122412fa887d7f7d7d894f05346860b8181c/source';

  const handleMenu = (pageName: string, blockName: string, infoStyle: Array<object>) => {
    let info = infoStyle[0] as InfoProps['info'];
    let style = infoStyle[1] as InfoProps['style'];

    switch (style.specLoad) {
      case '[cleaned]':
        // alert('Event Listener Activated!');
        return (
          <>
            <aside className={`${classShade('~dark~')}-aside`}>
              <ButtonCleaned
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
              <ButtonCleaned
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
              <ButtonCleaned
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
              <ButtonCleaned
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
              <ButtonCleaned
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
              <ButtonCleaned
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
              <ButtonCleaned
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
              <ButtonCleaned
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
              <ButtonCleaned
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
              <ButtonCleaned
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
              <ButtonCleaned
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
              <ButtonCleaned
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
              <ButtonCleaned
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
              <ButtonCleaned
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
              <ButtonCleaned
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
              <ButtonCleaned
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
              <ButtonCleaned
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
              <ButtonCleaned
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
              <ButtonCleaned
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
              <ButtonCleaned
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
              <ButtonCleaned
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

        return <></>;
      case '[default]':
      default:
        return (
          <>
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
                type: '{button}',
                text: 'bot_dar_mon',
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
                shade: '~dark~',
                type: '{button}',
                text: 'lef_dar_mon',
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
                shade: '~dark~',
                type: '{button}',
                text: 'rig_dar_mon',
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
                shade: '~dark~',
                type: '{button}',
                text: 'cen_dar_mon',
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
                shade: '~dark~',
                type: '{button}',
                text: 'tex_dar_mon',
                size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
                image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,
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
                type: '{button}',
                text: 'ico_dar_mon',
                size: style.specSize as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
                image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,
              }}
              info={{
                pageName: pageName,
                blockName: blockName,
              }}
            />

            <aside className={`${classShade('~dark~')}-aside`}>

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
    }
  };

  useEffect(() => {}, [pageName, blockName]);

  console.log(style.specLoad);
  switch (style.specLoad) {
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
  }
  */
};
export default MenuHeader;
