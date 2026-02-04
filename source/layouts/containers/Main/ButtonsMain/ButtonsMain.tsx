//--|🠊 ButtonsMain.tsx 🠈|--\\
import { lazy } from 'react';
import React, { useEffect } from 'react';
//--|🠋 Functions 🠋|--\\
import { controlPreview, toggleAside, defaultPreview, markList } from './ButtonsFunctions';

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
    blockEvent: 'control-preview' | 'toggle-aside',
    pagePreview: 'default-buttons' | 'routing-buttons',
    blockAction: 'open-dark' | 'close-dark' | 'open-light' | 'close-light' | 'go-up' | 'scroll-down',
  ) => {
    switch (blockEvent) {
      case 'toggle-aside':
        return toggleAside(pageName, blockName, blockAction);
      case 'control-preview':
        return controlPreview(pageName, blockName, blockAction, pagePreview);
    }
  };
  const exportElements = (
    pageName: 'button' | string,
    blockName: 'main' | string,
    listName: 'default-buttons' | 'routing-buttons',
  ) => {
    let listing = listName.split('-')[0] as String;
    markList(pageName, blockName, listName as 'default-buttons' | 'routing-buttons');
    switch (listName) {
      case 'default-buttons':
        return (
          <>
            <section className={`${listing}-foreground`}>
              <aside
                id="default-darkside"
                className="carousel-container"
                onMouseEnter={() => handleButtons(pageName, blockName, 'toggle-aside', 'default-buttons', 'open-dark')}
                onMouseLeave={() => handleButtons(pageName, blockName, 'toggle-aside', 'default-buttons', 'close-dark')}
              >
                <ol className="carousel-preview slide-one">
                  <li className="def-track slide-one">
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

                          image: '',
                          type: '{button}',
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

                          image: '',
                          type: '{button}',
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

                          image: '',
                          type: '{button}',
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

                          image: '',
                          type: '{button}',
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

                          image: '',
                          type: '{button}',
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

                          image: '',
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
                          text: `par_top_dar_mon`,
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
                          text: `par_bot_dar_mon`,
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
                          text: `par_lef_dar_mon`,
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
                          text: `par_rig_dar_mon`,
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
                          text: `par_cen_dar_mon`,
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
                          text: `par_tex_dar_mon`,
                          shade: '~dark~',
                          color: '(mono)',

                          image: '',
                          type: '{button}',
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
                          text: `par_ico_dar_mon`,
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
                  </li>
                  <li className="alt-track slide-one"></li>
                </ol>
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
                  onClick={() => handleButtons(pageName, blockName, 'control-preview', 'default-buttons', 'go-up')}
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
                  onClick={() => handleButtons(pageName, blockName, 'control-preview', 'default-buttons', 'scroll-down')}
                />
              </nav>
              <aside
                id="default-lightside"
                className="carousel-container"
                onMouseEnter={() => handleButtons(pageName, blockName, 'toggle-aside', 'default-buttons', 'open-light')}
                onMouseLeave={() => handleButtons(pageName, blockName, 'toggle-aside', 'default-buttons', 'close-light')}
              >
                <ol className="carousel-preview slide-one">
                  <li className="def-track slide-one">
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

                          image: '',
                          type: '{button}',
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

                          image: '',
                          type: '{button}',
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

                          image: '',
                          type: '{button}',
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
                    <div className="h4-size hidden">
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

                          image: '',
                          type: '{button}',
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

                          image: '',
                          type: '{button}',
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

                          image: '',
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
                          text: `par_top_lig_mon`,
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
                          text: `par_bot_lig_mon`,
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
                          text: `par_lef_lig_mon`,
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
                          text: `par_rig_lig_mon`,
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
                          text: `par_cen_lig_mon`,
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
                          text: `par_tex_lig_mon`,
                          shade: '~light~',
                          color: '(mono)',

                          image: '',
                          type: '{button}',
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
                          text: `par_ico_lig_mon`,
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
                  </li>
                  <li className="alt-track slide-one"></li>
                </ol>
              </aside>
            </section>
            <figure className={`${listing}-midground`}>
              <aside className="dark-code hidden">
                <pre className="dark-text">
                  <code>
                    {`<ButtonDefault
                      style={{
                        size: '<h1>',
                        view: '-top-',
                        text: 'one_top_dar_mon',
                        shade: '~dark~',
                        color: '(mono)',

                        type: '{button}',
                        image: 'imagePath',
                      }}
                      info={{
                        pageName: pageName,
                        blockName: blockName,
                      }}
                    />`}
                  </code>
                </pre>
              </aside>
              <section className="carousel-container size-font visible">
                <ol className="carousel-preview slide-one">
                  <li className="h1-size hidden">
                    <h1 className="display-1">{'<​h1>'}</h1>
                  </li>
                  <li className="h2-size hidden">
                    <h2 className="display-1">{'<​h2>'}</h2>
                  </li>
                  <li className="h3-size hidden">
                    <h3 className="display-1">{'<​h3>'}</h3>
                  </li>
                  <li className="h4-size hidden">
                    <h4 className="display-1">{'<​h4>'}</h4>
                  </li>
                  <li className="h5-size hidden">
                    <h5 className="display-1">{'<​h5>'}</h5>
                  </li>
                  <li className="h6-size hidden">
                    <h6 className="display-1">{'<​h6>'}</h6>
                  </li>
                  <li className="p-size hidden">
                    <p className="display-1">{'<p>'}</p>
                  </li>
                </ol>
              </section>
              <aside className="light-code hidden">
                <pre className="light-text">
                  <code>
                    {`<ButtonDefault
                      style={{
                        size: '<h1>',
                        view: '-top-',
                        text: 'one_top_lig_mon',
                        shade: '~light~',
                        color: '(mono)',

                        type: '{button}',
                        image: 'imagePath',
                      }}
                      info={{
                        pageName: pageName,
                        blockName: blockName,
                      }}
                    />`}
                  </code>
                </pre>
              </aside>
            </figure>
            <div className={`${listing}-background`}>
              <header>
                <div></div>
                <div></div>
              </header>
              <aside className="dark-grade hidden">
                <span></span>
              </aside>
              <aside className="light-grade hidden">
                <span></span>
              </aside>
              <footer>
                <div></div>
                <div></div>
              </footer>
            </div>
          </>
        );
      case 'routing-buttons':
        return (
          <>
            <section className={`${listing}-foreground`}></section>
            <figure className={`${listing}-midground`}></figure>
            <div className={`${listing}-background`}></div>
          </>
        );
    }
  };

  useEffect(() => {
    //--|🠊 Add Screen Size Detection 🠈|--\\
    // resizePreview(pageName, blockName);
    defaultPreview(pageName, blockName, 'h3-size');
  }, [pageName, blockName, [info]]);

  let imagePath =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3518122412fa887d7f7d7d894f05346860b8181c/source';

  return (
    <main id={`${pageName}-${blockName}`} className={`default-${blockName}`} style={{ zIndex: 0 }}>
      <div className="carousel-container">
        <ul className="carousel-preview slide-one">
          <li className="">{exportElements(pageName, blockName, 'default-buttons')}</li>
          <li className="">{exportElements(pageName, blockName, 'routing-buttons')}</li>
        </ul>
      </div>
    </main>
  );
};
export default ButtonsMain;
