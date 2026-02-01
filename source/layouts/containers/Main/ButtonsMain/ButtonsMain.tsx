//--|🠊 ButtonsMain.tsx 🠈|--\\
import { lazy } from 'react';
import React, { useEffect } from 'react';
//--|🠋 Functions 🠋|--\\
import { toggleAside, resizeHeaders } from './ButtonsFunctions';

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
    blockAction: 'open-dark' | 'close-dark' | 'open-light' | 'close-light' | 'go-up' | 'scroll-down',
  ) => {
    if (blockAction === 'go-up' || blockAction === 'scroll-down') {
      let goUp = document.getElementById(`${pageName}_${blockName}_go-up`) as HTMLElement;
      let scrollDown = document.getElementById(`${pageName}_${blockName}_scroll-down`) as HTMLElement;

      let buttonTrack = document.querySelector(`#${pageName}-main .foreground .dark-side`) as HTMLElement;
      let sectionEndpoint = document.querySelector(`#${pageName}-main .foreground .dark-side section`) as HTMLElement;

      let prevElement: HTMLElement;
      let visibleElement = document.querySelector(
        `#${pageName}-${blockName} .foreground .dark-side .size-track .visible`,
      ) as HTMLElement;
      let nextElement: HTMLElement;
      if (blockAction === 'scroll-down') {
        console.log(visibleElement.classList);
        switch (visibleElement.classList[0]) {
          case 'h1-size':
            sectionEndpoint.children[1].classList.remove('hidden');
            sectionEndpoint.children[1].classList.add('visible');

            sectionEndpoint.children[0].classList.remove('visible');
            sectionEndpoint.children[0].classList.add('hidden');
            break;
          case 'h2-size':
            sectionEndpoint.children[2].classList.remove('hidden');
            sectionEndpoint.children[2].classList.add('visible');

            sectionEndpoint.children[1].classList.add('hidden');
            sectionEndpoint.children[1].classList.remove('visible');
            break;
          case 'h3-size':
            sectionEndpoint.children[3].classList.remove('hidden');
            sectionEndpoint.children[3].classList.add('visible');

            sectionEndpoint.children[2].classList.add('hidden');
            sectionEndpoint.children[2].classList.remove('visible');
            break;
          case 'h4-size':
            sectionEndpoint.children[3].classList.remove('visible');
            sectionEndpoint.children[3].classList.add('hidden');

            sectionEndpoint.children[4].classList.add('visible');
            sectionEndpoint.children[4].classList.remove('hidden');

            break;
          case 'h5-size':
            sectionEndpoint.children[4].classList.remove('visible');
            sectionEndpoint.children[4].classList.add('hidden');

            sectionEndpoint.children[5].classList.add('visible');
            sectionEndpoint.children[5].classList.remove('hidden');

            break;
          case 'h6-size':
            sectionEndpoint.children[5].classList.remove('visible');
            sectionEndpoint.children[5].classList.add('hidden');

            sectionEndpoint.children[6].classList.add('visible');
            sectionEndpoint.children[6].classList.remove('hidden');

            break;
          case 'p-size':
            sectionEndpoint.children[6].classList.remove('visible');
            sectionEndpoint.children[6].classList.add('hidden');

            sectionEndpoint.children[0].classList.add('visible');
            sectionEndpoint.children[0].classList.remove('hidden');
            break;
        }
      } else if (blockAction === 'go-up') {
        switch (visibleElement.classList[0]) {
          case 'h1-size':
            sectionEndpoint.children[0].classList.remove('visible');
            sectionEndpoint.children[0].classList.add('hidden');

            sectionEndpoint.children[6].classList.add('visible');
            sectionEndpoint.children[6].classList.remove('hidden');
            break;
          case 'h2-size':
            sectionEndpoint.children[1].classList.add('hidden');
            sectionEndpoint.children[1].classList.remove('visible');

            sectionEndpoint.children[0].classList.add('visible');
            sectionEndpoint.children[0].classList.remove('hidden');
            break;
          case 'h3-size':
            sectionEndpoint.children[1].classList.remove('hidden');
            sectionEndpoint.children[1].classList.add('visible');

            sectionEndpoint.children[2].classList.add('hidden');
            sectionEndpoint.children[2].classList.remove('visible');
            break;
          case 'h4-size':
            sectionEndpoint.children[2].classList.add('visible');
            sectionEndpoint.children[2].classList.remove('hidden');

            sectionEndpoint.children[3].classList.add('hidden');
            sectionEndpoint.children[3].classList.remove('visible');

            break;
          case 'h5-size':
            sectionEndpoint.children[4].classList.remove('visible');
            sectionEndpoint.children[4].classList.add('hidden');

            sectionEndpoint.children[3].classList.add('visible');
            sectionEndpoint.children[3].classList.remove('hidden');

            break;
          case 'h6-size':
            sectionEndpoint.children[5].classList.remove('visible');
            sectionEndpoint.children[5].classList.add('hidden');

            sectionEndpoint.children[4].classList.add('visible');
            sectionEndpoint.children[4].classList.remove('hidden');

            break;
          case 'p-size':
            sectionEndpoint.children[5].classList.add('visible');
            sectionEndpoint.children[5].classList.remove('hidden');

            sectionEndpoint.children[6].classList.remove('visible');
            sectionEndpoint.children[6].classList.add('hidden');
            break;
        }
      }
    } else {
      toggleAside(pageName, blockName, blockAction);
    }

    // scrollSections(pageName, blockName);
    // let previewTrack = document.querySelector(`#${pageName}-main .foreground .light-code`);
    // console.log(previewTrack);
  };

  useEffect(() => {
    // Execute this every time the screen size changes.
    resizeHeaders(pageName, blockName);
  }, [pageName, blockName, [info]]);

  let imagePath =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3518122412fa887d7f7d7d894f05346860b8181c/source';

  return (
    <main style={{ zIndex: 0 }} id={`${pageName}-${blockName}`} className={`default-${blockName}`}>
      <section className="foreground">
        {/* --Todo-- */}
        <aside
          className="dark-side"
          onMouseEnter={() => handleButtons(pageName, blockName, 'open-dark')}
          onMouseLeave={() => handleButtons(pageName, blockName, 'close-dark')}
        >
          <section className="size-track">
            <div className="h1-size visible">
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
            <div className="h4-size hidden">
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
          onMouseEnter={() => handleButtons(pageName, blockName, 'open-light')}
          onMouseLeave={() => handleButtons(pageName, blockName, 'close-light')}
        ></aside>

        <nav className="scroll-sections">
          <ButtonDefault
            style={{
              size: '<h1>',
              view: '-icon-',
              text: `Go Up`,
              shade: '~dark~',
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
            onClick={() => handleButtons(pageName, blockName, 'go-up')}
          />
          <ButtonDefault
            style={{
              size: '<h1>',
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
            onClick={() => handleButtons(pageName, blockName, 'scroll-down')}
          />
        </nav>
        {/* --Todo-- */}
      </section>
      <figure className="midground">
        <aside className="dark-code hidden">
          <pre>
            <code></code>
          </pre>
        </aside>
        <aside className="light-code hidden">
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

//--|🠋 I can't remember what this does but I'm keeping it for now. 🠋|--\\
/*
    Version 2.0
    let loadSelect = document.querySelector(
      `#${pageName}-header .${pageName}-menu li[class*="load"] select`,
    ) as HTMLSelectElement;

    if (loadSelect) {
      loadSelect.addEventListener('change', () => handleButtons(info.pageName, info.blockName));

      return () => {
        clearSection();
        loadSelect.removeEventListener('change', () => handleButtons(info.pageName, info.blockName));
      };
    } else {
      console.warn('Load select element not found.');
    }
    */
// Ok, let's make some magic with JavaScript!
// Here's the fixed and working SASS code, keep this locked.
// We want to turn this into a carousel and here's the query tags for the scroll buttons.
// We will use the amount of <div> tags to calculate the position of the carousel each time a button is clicked.
// Each <div> element is the exact height and width of its parent element buttonTrack.offsetHeight.
// Each <div> has the following className in this order. I will list the HTML for exact clarity.
// These <div> elements are always in this respective order: 'h1-size', 'h2-size', 'h3-size', 'h4-size', 'h5-size',  'h6-size' & 'p-size'.
// 'h1-size' contains a .visible className while all the others contain a .hidden className.
// Here's the HTML we want to manipulate.

// When this function activates, check which <div> element contains the .visible className then look for and log the only number contained within its registered class: If it's the p then make it 7 as a default.
// Now we need to check if the button that was clicked contains and id with the words 'go-up' or 'scroll-down': blockAction has the details on this which was forwarded as a string with the onClick function.
// If the string for blockAction is 'scroll-down' and the className of the element contains a '1' as in, 'h1','h2','h3','h4','h5','h6','p' as referenced in the <div> classes.
// Then 'scroll-down' to 'h2-size' using a formula based on the exact height and number of buttonTrack. that essentially does the following.
// For example: to see h2-size when clicking on 'scroll-down' then we will need to add an inline element of, transform: translateY(-576px).
// The '-576px' will be calculated based on the height of buttonTrack and follow the following logic but using readable, minimal, maintainable, documented and easy to pick up code.
// This is specific to my testing criteria for scroll-down
// h1-size = transform: translateY(0px);
// h2-size = transform: translateY(-576px);
// h3-size = transform: translateY(-1152px);
// h4-size = transform: translateY(-1728px);
// h5-size = transform: translateY(-2304px);
// h6-size = transform: translateY(-2880px);
// p-size = transform: translateY(-3456px);
// If the string for blockAction is 'go-up' and the className of the element contains a '1'.
// Then do nothing and hide the <button> containing the text 'scroll-down' in its ID instead: I will implement this live but for testing this is better because it's reactive.
// If the string for blockAction is 'scroll-down' and the className of the element contains a 'p' which is a 7.
// Then do nothing and hide the <button> containing the text 'scroll-down' in its ID.
// If the state is one that's in the middle for example: blockAction is 'go-up' and the className of the element contains a '3'.
// Then 'go-up' to 'h2-size' which based on the formula of my specific testing environment, which will be relative to every user.
// Should 'go-up' by adding transform: translateY(-576px) to buttonTrack.

/*
          if (visibleElement === 1) {
            // How do I toggle the styles of all of the sectionEndpoint's children to .hidden?
            // How do you
            // console.log(sectionEndpoint);
            sectionEndpoint.style.transform = `translateY(-${buttonTrack.offsetHeight * 6}px)`;
          } else if (visibleElement === 2) {
            sectionEndpoint.style.transform = `translateY(-${buttonTrack.offsetHeight}px)`;
          } else if (visibleElement === 3) {
            // sectionEndpoint.setAttribute(`style', 'transform: translateY(-${1152}px)`);
            // h3-size =
          } else if (visibleElement === 4) {
            // sectionEndpoint.setAttribute('style', 'transform: translateY(-1728px);');
            // h4-size =
          } else if (visibleElement === 5) {
            // sectionEndpoint.setAttribute('style', 'transform: translateY(-2304px);');
            // h5-size =
            // } else if (visibleElement === 6) {
            // sectionEndpoint.setAttribute('style', 'transform: translateY(-2880px);');
            // h6-size =
          } else if (visibleElement === 7) {
            // sectionEndpoint.setAttribute('style', 'transform: translateY(-3456px);');
            // p-size =
          }
          */
