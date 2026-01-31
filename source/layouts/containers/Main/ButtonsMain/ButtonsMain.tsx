//--|🠊 ButtonsMain.tsx 🠈|--\\
import { lazy } from 'react';
import React, { useEffect } from 'react';
//--|🠋 Functions 🠋|--\\
import { showCode } from './ButtonsFunctions';

import { stripBrackets } from '../../../scripts/buttons';
import { clearSection } from '../../../components/Section/buttons/Section_buttons';
//--|🠋 Components 🠋|--\\
const SectionButtons = lazy(() => import('../../../components/Section/buttons/Section.buttons'));

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
  const imagePath =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3518122412fa887d7f7d7d894f05346860b8181c/source';

  const handleButtons = (pageName: string, blockName: string) => {
    let page: string = pageName;
    let block: string = blockName;
    return <SectionButtons info={info} />;
  };

  useEffect(() => {
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
  }, [pageName, blockName, [info]]);

  // show-size, show-dark, show-light
  const handleShowCode = () => {
    const result = showCode();
    console.log(result);
  };

  return (
    <main style={{ zIndex: 0 }} id={`${pageName}-${blockName}`} className={`default-${blockName}`}>
      <section className="foreground">
        <ButtonDefault
          style={{
            size: '<h1>',
            view: '-center-',
            text: `Show Code`,
            shade: '~dark~',
            color: '(mono)',

            type: '{button}',
            image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg`,
          }}
          info={{
            pageName: pageName,
            blockName: blockName,
          }}
          onClick={handleShowCode}
        />

        {/* <div className="h1-size visible">
          <aside className="left-dark">
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
          </aside>
          <section className="info-view"></section>
          <aside className="right-light"></aside>
        </div>
        <div className="h2-size hidden">
          <aside className="left-dark">
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
          </aside>
          <section className="info-view"></section>
          <aside className="right-light"></aside>
        </div>
        <div className="h3-size hidden">
          <aside className="left-dark">
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
          </aside>
          <section className="info-view"></section>
          <aside className="right-light"></aside>
        </div>
        <div className="h4-size hidden">
          <aside className="left-dark">
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
          </aside>
          <section className="info-view"></section>
          <aside className="right-light"></aside>
        </div>
        <div className="h5-size hidden">
          <aside className="left-dark">
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
          </aside>
          <section className="info-view"></section>
          <aside className="right-light"></aside>
        </div>
        <div className="h6-size hidden">
          <aside className="left-dark">
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
          </aside>
          <section className="info-view"></section>
          <aside className="right-light"></aside>
        </div>
        <div className="p-size hidden">
          <aside className="left-dark">
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
          </aside>
          <section className="info-view"></section>
          <aside className="right-light"></aside>
        </div> */}
      </section>
      <figure className="midground show-size">
        <aside className="dark-code"></aside>
        <section className="size-font"></section>
        <aside className="light-code"></aside>

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
