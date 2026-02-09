//--|🠊 ButtonsHeader.tsx 🠈|--//
import React, { useEffect, lazy } from 'react';
//--|🠋 Functions 🠋|--//
import { togglePreview, expandHeader } from './ButtonsFunctions';
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

  let svgPath: Array<String> = [
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b0979a4b3451384187fbb5eff59e42c84b0bdbbf/source/assets/svg-files/archive-images',
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/7c0642deb743fd1fd415a8d6b32adbc12595d3ed/source/assets/svg-files/archive-images',
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/09ff331e3a094e34ac50aecc4f09f65465cc319e/source/assets/svg-files/archive-images',
  ];

  return (
    <header id={`${pageName}-${blockName}`} className={`default-${blockName} ${stateName}`} style={{ zIndex: 1 }}>
      <section className="foreground">
        <nav className="buttons-preview">
          <ButtonRouting
            style={{
              size: '<h1>',
              view: 'top-lef',
              shade: '~dark~',
              color: '(mono)',

              type: '{button}',
              image: `${svgPath[2]}/trinity-apps/tralogfin/logo-white.svg`,
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: `${pageName}_${blockName}_view-apps`,
            }}
            onClick={() => expandHeader(pageName, blockName)}
          />

          <ButtonDefault
            style={{
              size: '<h4>',
              view: '-icon-',
              text: `Go Up`,
              shade: '~light~',
              color: '(mono)',

              type: '{disabled}',
              image: `${svgPath[0]}/font-awesome/6.5.1/solid/caret-left.svg`,
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
              <h6 className="display-4">
                <b>Default</b>
              </h6>
              <h6 className="display-6">
                <i>Button</i>
              </h6>
            </li>
            <li className="routing-text">
              <h6 className="display-4">
                <b>Routing</b>
              </h6>
              <h6 className="display-6">
                <i>Button</i>
              </h6>
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
              image: `${svgPath[0]}/font-awesome/6.5.1/solid/caret-right.svg`,
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
