//--|🠊 ButtonsHeader.tsx 🠈|--//
import React, { useEffect, lazy } from 'react';
//--|🠋 Functions 🠋|--//
import { toggleHeader, togglePreview } from './ButtonsFunctions';
import { stripBrackets } from '../../../scripts/buttons';
//--|🠋 Components 🠋|--//
import ButtonRouting from '../../../components/Button/routing/Button.routing';
import ButtonDefault from '../../../components/Button/default/Button.default';
interface InfoProps {
  info: {
    pageName: '[buttons]' | string;
    blockName: '<header>' | string;
    roleName?: string;
  };
}
const ButtonsHeader: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'buttons';
  const blockName = stripBrackets(info.blockName, '<>') as 'header';
  const stateName: 'expanded' | 'unfolded' | 'collapsed' = 'collapsed';

  useEffect(() => {}, [pageName, blockName]);

  let imagePath =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3518122412fa887d7f7d7d894f05346860b8181c/source/assets/svg-files/archive-images/arabic-numerals/white-numbers';
  let fontPath =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b0979a4b3451384187fbb5eff59e42c84b0bdbbf/source/assets/svg-files/archive-images/font-awesome/6.5.1/solid';

  return (
    <header
      className={`default-${blockName} ${stateName}`}
      id={`${pageName}-${blockName}`}
      style={{ zIndex: 1 }}
      onMouseLeave={() => toggleHeader(pageName, blockName)}
    >
      <section className="foreground">
        <nav className="buttons-preview">
          <ButtonRouting
            style={{
              view: 'top-lef',
              shade: '~dark~',
              color: '(mono)',

              type: '{button}',
              image: `${imagePath}/01.svg`,
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: `${pageName}_${blockName}_view-apps`,
            }}
            onMouseEnter={() => toggleHeader(pageName, blockName)}
          />

          <ButtonDefault
            style={{
              size: '<h4>',
              view: '-icon-',
              text: `Go Up`,
              shade: '~light~',
              color: '(mono)',

              type: '{button}',
              image: `${fontPath}/caret-left.svg`,
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: `${pageName}_${blockName}_default-preview`,
            }}
            onClick={() => togglePreview(pageName, blockName, 'default-buttons')}
          />
          <ol className="carousel-preview slide-def">
            <li className="default-text">
              <h6 className="display-6">{'<DefaultButton>'}</h6>
            </li>
            <li className="routing-text">
              <h6 className="display-6">{'<RoutingButton>'}</h6>
            </li>
          </ol>
          <ButtonDefault
            style={{
              size: '<h4>',
              view: '-icon-',
              text: `Go Up`,
              shade: '~light~',
              color: '(mono)',

              type: '{button}',
              image: `${fontPath}/caret-right.svg`,
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: `${pageName}_${blockName}_routing-preview`,
            }}
            onClick={() => togglePreview(pageName, blockName, 'routing-buttons')}
          />
        </nav>
        <div className="buttons-software"></div>
      </section>
      <figure className="midground"></figure>
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

      {/* <MenuButtons info={info} /> */}
      {/* <section className={`${pageName}-section`}></section> */}
    </header>
  );
};
export default ButtonsHeader;
