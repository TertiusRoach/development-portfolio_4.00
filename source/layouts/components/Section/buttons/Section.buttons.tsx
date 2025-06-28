//--|🠊 Section.buttons.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Section.buttons.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Functions 🠋|--//
import { defineButton, sizeDivs } from './Section_buttons';
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
  const imagePath: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3518122412fa887d7f7d7d894f05346860b8181c/source';

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
    // sizeDivs(pageName, blockName);

    const loadSize = () => {
      sizeDivs(pageName, blockName);
    };
    loadSize();
    window.addEventListener('resize', loadSize);

    return () => {
      window.removeEventListener('resize', loadSize);
    };
  }, [pageName, blockName]);

  return (
    <section className="buttons-section">
      <div className="h1-size visible">
        <aside className="dar-aside">
          {/* Dark */}
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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/07.svg`,

              size: '<h1>',
              type: '{button}',
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
        </aside>
        <aside className="med-aside">{/* Medium */}</aside>
        <aside className="lig-aside">{/* Light */}</aside>
      </div>
      <div className="h2-size hidden">
        <aside className="dar-aside">
          {/* Dark */}
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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/07.svg`,

              size: '<h2>',
              type: '{button}',
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
        </aside>
        <aside className="med-aside">{/* Medium */}</aside>
        <aside className="lig-aside">{/* Light */}</aside>
      </div>
      <div className="h3-size hidden">
        <aside className="dar-aside">
          {/* Dark */}
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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/07.svg`,

              size: '<h3>',
              type: '{button}',
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
        </aside>
        <aside className="med-aside">{/* Medium */}</aside>
        <aside className="lig-aside">{/* Light */}</aside>
      </div>
      <div className="h4-size hidden">
        <aside className="dar-aside">
          {/* Dark */}
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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/07.svg`,

              size: '<h4>',
              type: '{button}',
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
        </aside>
        <aside className="med-aside">{/* Medium */}</aside>
        <aside className="lig-aside">{/* Light */}</aside>
      </div>
      <div className="h5-size hidden">
        <aside className="dar-aside">
          {/* Dark */}
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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/07.svg`,

              size: '<h5>',
              type: '{button}',
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
        </aside>
        <aside className="med-aside">{/* Medium */}</aside>
        <aside className="lig-aside">{/* Light */}</aside>
      </div>
      <div className="h6-size hidden">
        <aside className="dar-aside">
          {/* Dark */}
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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/07.svg`,

              size: '<h6>',
              type: '{button}',
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
        </aside>
        <aside className="med-aside">{/* Medium */}</aside>
        <aside className="lig-aside">{/* Light */}</aside>
      </div>
      <div className="p-size hidden">
        <aside className="dar-aside">
          {/* Dark */}
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
              image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/07.svg`,

              size: '<p>',
              type: '{button}',
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
            }}
          />
        </aside>
        <aside className="med-aside">{/* Medium */}</aside>
        <aside className="lig-aside">{/* Light */}</aside>
      </div>
    </section>
  );
};
export default SectionButtons;
