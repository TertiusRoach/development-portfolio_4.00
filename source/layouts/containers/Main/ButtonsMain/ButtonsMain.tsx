//--|🠊 ButtonsMain.tsx 🠈|--\\
import { lazy } from 'react';
import React, { useEffect } from 'react';
//--|🠋 Functions 🠋|--\\
import { toggleAside, scrollSection, resizePreview } from './ButtonsFunctions';

import { stripBrackets } from '../../../scripts/buttons';
import { clearSection } from '../../../components/Section/buttons/Section_buttons';
//--|🠋 Components 🠋|--\\
// const SectionButtons = lazy(() => import('../../../components/Section/buttons/Section.buttons'));

import ButtonDefault from '../../../components/Button/default/Button.default';

interface InfoProps {
  info: {
    pageName: '[buttons]' | string;
    blockName: '<main>' | string;
    roleName?: string;
  };
}
const ButtonsMain: React.FC<InfoProps> = ({ info }) => {
  const blockName = stripBrackets(info.blockName, '<>') as 'main';
  const pageName = stripBrackets(info.pageName, '[]') as 'buttons';

  const handleButtons = (
    pageName: string,
    blockName: string,
    blockEvent: 'scroll-section' | 'toggle-aside',
    blockAction: 'open-dark' | 'close-dark' | 'open-light' | 'close-light' | 'go-up' | 'scroll-down',
  ) => {
    switch (blockEvent) {
      case 'toggle-aside':
        return toggleAside(pageName, blockName, blockAction);
      case 'scroll-section':
        return scrollSection(pageName, blockName, blockAction);
    }
  };

  useEffect(() => {
    //--|🠊 Execute this every time the screen size changes. 🠈|--\\
    setTimeout(() => {
      scrollSection(pageName, blockName, 'picked-default');
    }, 750);

    resizePreview(pageName, blockName);
  }, [pageName, blockName, [info]]);

  let imagePath =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3518122412fa887d7f7d7d894f05346860b8181c/source';

  return (
    <main style={{ zIndex: 0 }} id={`${pageName}-${blockName}`} className={`default-${blockName}`}>
      <section className="foreground">
        <aside
          className="dark-side"
          onMouseEnter={() => handleButtons(pageName, blockName, 'toggle-aside', 'open-dark')}
          onMouseLeave={() => handleButtons(pageName, blockName, 'toggle-aside', 'close-dark')}
        >
          <section className="size-track">
            <div className="h1-size hidden">
              <ButtonDefault
                style={{
                  size: '<h1>',
                  view: '-top-',
                  text: `one_top_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h1>',
                  view: '-bottom-',
                  text: `one_bot_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h1>',
                  view: '-left-',
                  text: `one_lef_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h1>',
                  view: '-right-',
                  text: `one_rig_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h1>',
                  view: '-center-',
                  text: `one_cen_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h1>',
                  view: '-text-',
                  text: `one_tex_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h1>',
                  view: '-icon-',
                  text: `one_ico_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
            </div>
            <div className="h2-size hidden">
              <ButtonDefault
                style={{
                  size: '<h2>',
                  view: '-top-',
                  text: `two_top_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/02.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h2>',
                  view: '-bottom-',
                  text: `two_bot_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/02.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h2>',
                  view: '-left-',
                  text: `two_lef_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/02.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h2>',
                  view: '-right-',
                  text: `two_rig_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/02.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h2>',
                  view: '-center-',
                  text: `two_cen_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/02.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h2>',
                  view: '-text-',
                  text: `two_tex_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/02.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h2>',
                  view: '-icon-',
                  text: `two_ico_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/02.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
            </div>
            <div className="h3-size hidden">
              <ButtonDefault
                style={{
                  size: '<h3>',
                  view: '-top-',
                  text: `thr_top_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/03.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h3>',
                  view: '-bottom-',
                  text: `thr_bot_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/03.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h3>',
                  view: '-left-',
                  text: `thr_lef_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/03.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h3>',
                  view: '-right-',
                  text: `thr_rig_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/03.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h3>',
                  view: '-center-',
                  text: `thr_cen_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/03.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h3>',
                  view: '-text-',
                  text: `thr_tex_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/03.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h3>',
                  view: '-icon-',
                  text: `thr_ico_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/03.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
            </div>
            <div className="h4-size visible">
              <ButtonDefault
                style={{
                  size: '<h4>',
                  view: '-top-',
                  text: `fou_top_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/04.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h4>',
                  view: '-bottom-',
                  text: `fou_bot_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/04.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h4>',
                  view: '-left-',
                  text: `fou_lef_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/04.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h4>',
                  view: '-right-',
                  text: `fou_rig_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/04.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h4>',
                  view: '-center-',
                  text: `fou_cen_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/04.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h4>',
                  view: '-text-',
                  text: `fou_tex_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/04.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h4>',
                  view: '-icon-',
                  text: `fou_ico_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/04.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
            </div>
            <div className="h5-size hidden">
              <ButtonDefault
                style={{
                  size: '<h5>',
                  view: '-top-',
                  text: `fiv_top_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/05.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h5>',
                  view: '-bottom-',
                  text: `fiv_bot_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/05.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h5>',
                  view: '-left-',
                  text: `fiv_lef_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/05.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h5>',
                  view: '-right-',
                  text: `fiv_rig_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/05.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h5>',
                  view: '-center-',
                  text: `fiv_cen_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/05.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h5>',
                  view: '-text-',
                  text: `fiv_tex_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/05.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h5>',
                  view: '-icon-',
                  text: `fiv_ico_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/05.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
            </div>
            <div className="h6-size hidden">
              <ButtonDefault
                style={{
                  size: '<h6>',
                  view: '-top-',
                  text: `six_top_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h6>',
                  view: '-bottom-',
                  text: `six_bot_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h6>',
                  view: '-left-',
                  text: `six_lef_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h6>',
                  view: '-right-',
                  text: `six_rig_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h6>',
                  view: '-center-',
                  text: `six_cen_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h6>',
                  view: '-text-',
                  text: `six_tex_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h6>',
                  view: '-icon-',
                  text: `six_ico_dar_mon`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
            </div>
            <div className="p-size hidden">
              <ButtonDefault
                style={{
                  size: '<p>',
                  view: '-top-',
                  text: `Button-------------------------`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/07.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<p>',
                  view: '-bottom-',
                  text: `Button-------------------------`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/07.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<p>',
                  view: '-left-',
                  text: `two_lef_dar_mon-------------------------`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/07.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<p>',
                  view: '-right-',
                  text: `two_rig_dar_mon-------------------------`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/07.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<p>',
                  view: '-center-',
                  text: `two_cen_dar_mon-------------------------`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/07.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<p>',
                  view: '-text-',
                  text: `two_tex_dar_mon-------------------------`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/07.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<p>',
                  view: '-icon-',
                  text: `two_ico_dar_mon-------------------------`,
                  shade: '~dark~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/07.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
            </div>
          </section>
        </aside>
        <aside
          className="light-side"
          onMouseEnter={() => handleButtons(pageName, blockName, 'toggle-aside', 'open-light')}
          onMouseLeave={() => handleButtons(pageName, blockName, 'toggle-aside', 'close-light')}
        >
          <section className="size-track">
            <div className="h1-size hidden">
              <ButtonDefault
                style={{
                  size: '<h1>',
                  view: '-top-',
                  text: `one_top_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h1>',
                  view: '-bottom-',
                  text: `one_bot_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h1>',
                  view: '-left-',
                  text: `one_lef_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h1>',
                  view: '-right-',
                  text: `one_rig_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h1>',
                  view: '-center-',
                  text: `one_cen_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h1>',
                  view: '-text-',
                  text: `one_tex_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h1>',
                  view: '-icon-',
                  text: `one_ico_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
            </div>
            <div className="h2-size hidden">
              <ButtonDefault
                style={{
                  size: '<h2>',
                  view: '-top-',
                  text: `two_top_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/02.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h2>',
                  view: '-bottom-',
                  text: `two_bot_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/02.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h2>',
                  view: '-left-',
                  text: `two_lef_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/02.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h2>',
                  view: '-right-',
                  text: `two_rig_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/02.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h2>',
                  view: '-center-',
                  text: `two_cen_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/02.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h2>',
                  view: '-text-',
                  text: `two_tex_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/02.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h2>',
                  view: '-icon-',
                  text: `two_ico_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/02.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
            </div>
            <div className="h3-size hidden">
              <ButtonDefault
                style={{
                  size: '<h3>',
                  view: '-top-',
                  text: `thr_top_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/03.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h3>',
                  view: '-bottom-',
                  text: `thr_bot_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/03.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h3>',
                  view: '-left-',
                  text: `thr_lef_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/03.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h3>',
                  view: '-right-',
                  text: `thr_rig_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/03.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h3>',
                  view: '-center-',
                  text: `thr_cen_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/03.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h3>',
                  view: '-text-',
                  text: `thr_tex_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/03.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h3>',
                  view: '-icon-',
                  text: `thr_ico_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/03.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
            </div>
            <div className="h4-size visible">
              <ButtonDefault
                style={{
                  size: '<h4>',
                  view: '-top-',
                  text: `fou_top_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/04.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h4>',
                  view: '-bottom-',
                  text: `fou_bot_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/04.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h4>',
                  view: '-left-',
                  text: `fou_lef_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/04.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h4>',
                  view: '-right-',
                  text: `fou_rig_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/04.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h4>',
                  view: '-center-',
                  text: `fou_cen_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/04.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h4>',
                  view: '-text-',
                  text: `fou_tex_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/04.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h4>',
                  view: '-icon-',
                  text: `fou_ico_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/04.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
            </div>
            <div className="h5-size hidden">
              <ButtonDefault
                style={{
                  size: '<h5>',
                  view: '-top-',
                  text: `fiv_top_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/05.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h5>',
                  view: '-bottom-',
                  text: `fiv_bot_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/05.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h5>',
                  view: '-left-',
                  text: `fiv_lef_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/05.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h5>',
                  view: '-right-',
                  text: `fiv_rig_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/05.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h5>',
                  view: '-center-',
                  text: `fiv_cen_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/05.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h5>',
                  view: '-text-',
                  text: `fiv_tex_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/05.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h5>',
                  view: '-icon-',
                  text: `fiv_ico_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/05.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
            </div>
            <div className="h6-size hidden">
              <ButtonDefault
                style={{
                  size: '<h6>',
                  view: '-top-',
                  text: `six_top_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h6>',
                  view: '-bottom-',
                  text: `six_bot_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h6>',
                  view: '-left-',
                  text: `six_lef_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h6>',
                  view: '-right-',
                  text: `six_rig_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h6>',
                  view: '-center-',
                  text: `six_cen_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<h6>',
                  view: '-text-',
                  text: `six_tex_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />

              <ButtonDefault
                style={{
                  size: '<h6>',
                  view: '-icon-',
                  text: `six_ico_lig_mon`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/06.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
            </div>
            <div className="p-size hidden">
              <ButtonDefault
                style={{
                  size: '<p>',
                  view: '-top-',
                  text: `Button-------------------------`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/07.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<p>',
                  view: '-bottom-',
                  text: `Button-------------------------`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/07.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<p>',
                  view: '-left-',
                  text: `two_lef_lig_mon-------------------------`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/07.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<p>',
                  view: '-right-',
                  text: `two_rig_lig_mon-------------------------`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/07.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<p>',
                  view: '-center-',
                  text: `two_cen_lig_mon-------------------------`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/07.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<p>',
                  view: '-text-',
                  text: `two_tex_lig_mon-------------------------`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/07.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
              <ButtonDefault
                style={{
                  size: '<p>',
                  view: '-icon-',
                  text: `two_ico_lig_mon-------------------------`,
                  shade: '~light~',
                  color: '(mono)',

                  type: '{button}',
                  image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/07.svg`,
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                }}
              />
            </div>
          </section>
        </aside>

        <nav className="scroll-sections">
          <ButtonDefault
            style={{
              size: '<h4>',
              view: '-icon-',
              text: `Go Up`,
              shade: '~light~',
              color: '(mono)',

              type: '{button}',
              image:
                'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b0979a4b3451384187fbb5eff59e42c84b0bdbbf/source/assets/svg-files/archive-images/font-awesome/6.5.1/solid/caret-up.svg',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: `${pageName}_${blockName}_go-up`,
            }}
            onClick={() => handleButtons(pageName, blockName, 'scroll-section', 'go-up')}
          />
          <ButtonDefault
            style={{
              size: '<h4>',
              view: '-icon-',
              text: 'Scroll Down',
              shade: '~dark~',
              color: '(mono)',

              type: '{button}',
              image:
                'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b0979a4b3451384187fbb5eff59e42c84b0bdbbf/source/assets/svg-files/archive-images/font-awesome/6.5.1/solid/caret-down.svg',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: `${pageName}_${blockName}_scroll-down`,
            }}
            onClick={() => handleButtons(pageName, blockName, 'scroll-section', 'scroll-down')}
          />
        </nav>
      </section>
      <figure className="midground">
        <aside className="dark-code hidden">
          <pre>
            <code></code>
          </pre>
        </aside>
        <section className="size-font visible">
          <ol>
            <h1 className="display-1">{'<​h1>'}</h1>
            <h2 className="display-1">{'<​h2>'}</h2>
            <h3 className="display-1">{'<​h3>'}</h3>
            <h4 className="display-1">{'<​h4>'}</h4>
            <h5 className="display-1">{'<​h5>'}</h5>
            <h6 className="display-1">{'<​h6>'}</h6>
            <p className="display-1">{'<p>'}</p>
          </ol>
        </section>
        <aside className="light-code hidden">
          <pre>
            <code></code>
          </pre>
        </aside>

        {/* <div className="preview"></div> */}
        {/* <div className="section"></div> */}
      </figure>
      <div className="background">
        <header>
          <div></div>
          <div></div>
        </header>
        <aside className="left"></aside>
        <aside className="right"></aside>
        <footer>
          <div></div>
          <div></div>
        </footer>
      </div>

      {/* {handleButtons(info.pageName, info.blockName)} */}
    </main>
  );
};
export default ButtonsMain;
