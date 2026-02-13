//--|🠊 RoutingButtons.tsx 🠈|--\\
import React, { useEffect } from 'react';
//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../../../scripts/buttons';
import {
  defaultPreview,
  controlPreview,
  toggleAside,
  togglePreview,
  unfoldHeader,
  scrollMouse,
} from '../../ButtonsFunctions';
//--|🠋 Components 🠋|--\\
import LabelToggle from '../../../../../components/Label/toggle/Label.toggle';
import ButtonDefault from '../../../../../components/Button/default/Button.default';
import ButtonRouting from '../../../../../components/Button/routing/Button.routing';

interface InfoProps {
  info: {
    pageName: 'buttons' | string;
    blockName: 'main' | string;
    roleName?: string;
  };
}
const RoutingButtons: React.FC<InfoProps> = ({ info }) => {
  const blockName = stripBrackets(info.blockName, '<>') as 'main';
  const pageName = stripBrackets(info.pageName, '[]') as 'buttons';

  useEffect(() => {}, [pageName, blockName]);

  const handleButtons = (
    pageName: string,
    pagePreview: 'default-buttons' | 'routing-buttons',

    blockName: string,
    blockEvent: 'scroll-mouse' | 'control-preview' | 'toggle-aside',
    blockAction: 'open-dark' | 'close-dark' | 'open-light' | 'close-light' | 'go-up' | 'scroll-down' | string,
  ) => {
    switch (blockEvent) {
      case 'scroll-mouse':
        return scrollMouse(pageName, blockName, blockAction, pagePreview);
      case 'toggle-aside':
        return toggleAside(pageName, blockName, blockAction);
      case 'control-preview':
        return controlPreview(pageName, blockName, blockAction, pagePreview);
    }
  };

  useEffect(() => {
    //--|🠊 Add Screen Size Detection 🠈|--\\
    defaultPreview(pageName, blockName, 'h3-size');
  }, [pageName, blockName, [info]]);

  let svgPath: Array<String> = [
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b0979a4b3451384187fbb5eff59e42c84b0bdbbf/source/assets/svg-files/archive-images',
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/dca9fb650fc05e26cbc310f1befa010832f171af/source/assets/svg-files/archive-images',
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/7c0642deb743fd1fd415a8d6b32adbc12595d3ed/source/assets/svg-files/archive-images',
    '',
  ];

  return (
    <>
      <section
        className="routing-foreground"
        onWheel={(event) =>
          handleButtons(pageName, 'default-buttons', blockName, 'scroll-mouse', event.deltaY > 0 ? 'scroll-down' : 'go-up')
        }
      >
        <header className="routing-header">
          <ButtonRouting
            style={{
              size: '<h1>',
              view: 'top-lef',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              image: `${svgPath[1]}/my-signature/signature-icon/primary-dark.svg`,
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: `${pageName}_${blockName}_open-head`,
            }}
            onClick={() => unfoldHeader(pageName, blockName, 'click')}
            onMouseEnter={() => unfoldHeader(pageName, blockName, 'hover')}
          />
          <menu>
            <div></div>
          </menu>
        </header>

        <aside
          id="routing-darkside"
          className="carousel-container"
          onMouseEnter={() => handleButtons(pageName, 'default-buttons', blockName, 'toggle-aside', 'open-dark')}
          onMouseLeave={() => handleButtons(pageName, 'routing-buttons', blockName, 'toggle-aside', 'close-dark')}
        >
          <ol className="carousel-preview slide-def">
            <li className="def-track slide-one">
              <div className="rou-size visible">
                <ButtonRouting
                  style={{
                    size: '<h1>',
                    view: 'top-lef',
                    shade: '~dark~',
                    color: '(mono)',
                    type: '{button}',
                    image: `${svgPath[2]}/arabic-numerals/white-numbers/01.svg`,
                  }}
                  info={{
                    pageName: pageName,
                    blockName: blockName,
                  }}
                />
                <ButtonRouting
                  style={{
                    size: '<h1>',
                    view: 'top-cen',
                    shade: '~dark~',
                    color: '(mono)',
                    type: '{button}',
                    image: `${svgPath[0]}/arabic-numerals/white-numbers/02.svg`,
                  }}
                  info={{
                    pageName: pageName,
                    blockName: blockName,
                  }}
                />
                <ButtonRouting
                  style={{
                    size: '<h1>',
                    view: 'top-rig',
                    shade: '~dark~',
                    color: '(mono)',
                    type: '{button}',
                    image: `${svgPath[0]}/arabic-numerals/white-numbers/03.svg`,
                  }}
                  info={{
                    pageName: pageName,
                    blockName: blockName,
                  }}
                />
                <ButtonRouting
                  style={{
                    size: '<h1>',
                    view: 'mid-lef',
                    shade: '~dark~',
                    color: '(mono)',
                    type: '{button}',
                    image: `${svgPath[0]}/arabic-numerals/white-numbers/04.svg`,
                  }}
                  info={{
                    pageName: pageName,
                    blockName: blockName,
                  }}
                />
                <ButtonRouting
                  style={{
                    size: '<h1>',
                    view: 'mid-cen',
                    shade: '~dark~',
                    color: '(mono)',
                    type: '{counter}',
                    image: `${svgPath[0]}/arabic-numerals/white-numbers/05.svg`,
                  }}
                  info={{
                    pageName: pageName,
                    blockName: blockName,
                  }}
                />
                <ButtonRouting
                  style={{
                    size: '<h1>',
                    view: 'mid-rig',
                    shade: '~dark~',
                    color: '(mono)',
                    type: '{button}',
                    image: `${svgPath[0]}/arabic-numerals/white-numbers/06.svg`,
                  }}
                  info={{
                    pageName: pageName,
                    blockName: blockName,
                  }}
                />
                <ButtonRouting
                  style={{
                    size: '<h1>',
                    view: 'bot-lef',
                    shade: '~dark~',
                    color: '(mono)',
                    type: '{button}',
                    image: `${svgPath[0]}/arabic-numerals/white-numbers/07.svg`,
                  }}
                  info={{
                    pageName: pageName,
                    blockName: blockName,
                  }}
                />
                <ButtonRouting
                  style={{
                    size: '<h1>',
                    view: 'bot-cen',
                    shade: '~dark~',
                    color: '(mono)',
                    type: '{button}',
                    image: `${svgPath[0]}/arabic-numerals/white-numbers/08.svg`,
                  }}
                  info={{
                    pageName: pageName,
                    blockName: blockName,
                  }}
                />
                <ButtonRouting
                  style={{
                    size: '<h1>',
                    view: 'bot-rig',
                    shade: '~dark~',
                    color: '(mono)',
                    type: '{button}',
                    image: `${svgPath[0]}/arabic-numerals/white-numbers/09.svg`,
                  }}
                  info={{
                    pageName: pageName,
                    blockName: blockName,
                  }}
                />
              </div>
              <div className="alt-size hidden"></div>
              <div className="por-size hidden"></div>
            </li>
          </ol>
        </aside>
        <aside
          id="routing-lightside"
          className="carousel-container"
          onMouseEnter={() => handleButtons(pageName, 'default-buttons', blockName, 'toggle-aside', 'open-light')}
          onMouseLeave={() => handleButtons(pageName, 'routing-buttons', blockName, 'toggle-aside', 'close-light')}
        >
          <ol className="carousel-preview slide-def">
            <li className="def-track slide-one">
              <div className="rou-size visible">
                <ButtonRouting
                  style={{
                    size: '<h1>',
                    view: 'top-lef',
                    shade: '~light~',
                    color: '(mono)',
                    type: '{button}',
                    image: `${svgPath[2]}/arabic-numerals/black-numbers/10.svg`,
                  }}
                  info={{
                    pageName: pageName,
                    blockName: blockName,
                  }}
                />
                <ButtonRouting
                  style={{
                    size: '<h1>',
                    view: 'top-cen',
                    shade: '~light~',
                    color: '(mono)',
                    type: '{button}',
                    image: `${svgPath[2]}/arabic-numerals/black-numbers/11.svg`,
                  }}
                  info={{
                    pageName: pageName,
                    blockName: blockName,
                  }}
                />
                <ButtonRouting
                  style={{
                    size: '<h1>',
                    view: 'top-rig',
                    shade: '~light~',
                    color: '(mono)',
                    type: '{button}',
                    image: `${svgPath[2]}/arabic-numerals/black-numbers/12.svg`,
                  }}
                  info={{
                    pageName: pageName,
                    blockName: blockName,
                  }}
                />
                <ButtonRouting
                  style={{
                    size: '<h1>',
                    view: 'mid-lef',
                    shade: '~light~',
                    color: '(mono)',
                    type: '{button}',
                    image: `${svgPath[2]}/arabic-numerals/black-numbers/13.svg`,
                  }}
                  info={{
                    pageName: pageName,
                    blockName: blockName,
                  }}
                />
                <ButtonRouting
                  style={{
                    size: '<h1>',
                    view: 'mid-cen',
                    shade: '~light~',
                    color: '(mono)',
                    type: '{counter}',
                    image: `${svgPath[2]}/arabic-numerals/black-numbers/14.svg`,
                  }}
                  info={{
                    pageName: pageName,
                    blockName: blockName,
                  }}
                />
                <ButtonRouting
                  style={{
                    size: '<h1>',
                    view: 'mid-rig',
                    shade: '~light~',
                    color: '(mono)',
                    type: '{button}',
                    image: `${svgPath[2]}/arabic-numerals/black-numbers/15.svg`,
                  }}
                  info={{
                    pageName: pageName,
                    blockName: blockName,
                  }}
                />
                <ButtonRouting
                  style={{
                    size: '<h1>',
                    view: 'bot-lef',
                    shade: '~light~',
                    color: '(mono)',
                    type: '{button}',
                    image: `${svgPath[2]}/arabic-numerals/black-numbers/16.svg`,
                  }}
                  info={{
                    pageName: pageName,
                    blockName: blockName,
                  }}
                />
                <ButtonRouting
                  style={{
                    size: '<h1>',
                    view: 'bot-cen',
                    shade: '~light~',
                    color: '(mono)',
                    type: '{button}',
                    image: `${svgPath[2]}/arabic-numerals/black-numbers/17.svg`,
                  }}
                  info={{
                    pageName: pageName,
                    blockName: blockName,
                  }}
                />
                <ButtonRouting
                  style={{
                    size: '<h1>',
                    view: 'bot-rig',
                    shade: '~light~',
                    color: '(mono)',
                    type: '{button}',
                    image: `${svgPath[2]}/arabic-numerals/black-numbers/18.svg`,
                  }}
                  info={{
                    pageName: pageName,
                    blockName: blockName,
                  }}
                />
              </div>
              <div className="por-size hidden"></div>
              <div className="alt-size hidden"></div>
            </li>
          </ol>
        </aside>

        <footer className="routing-footer">
          <nav></nav>
        </footer>
      </section>
      <figure className="routing-midground"></figure>
      <div className="routing-background">
        <aside className="dark-silhouette hidden">
          <span></span>
        </aside>
        <aside className="light-silhouette hidden">
          <span></span>
        </aside>
      </div>
    </>
  );
};
export default RoutingButtons;
