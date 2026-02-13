//--|🠊 ButtonsHeader.tsx 🠈|--\\
import React, { useEffect, useState } from 'react';
//--|🠋 Functions 🠋|--\\
import { togglePreview, expandHeader, loadSoftware, viewDisplay } from './ButtonsFunctions';
import { stripBrackets } from '../../../scripts/buttons';
//--|🠋 Components 🠋|--\\
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
  const stateName: 'expanded' | 'unfolded' | 'collapsed' = 'unfolded';
  const [getView, setView] = useState(viewDisplay() as 'top-lef' | 'bot-rig');

  useEffect(() => {
    //--|🠋 1. Define the media query for landscape 🠈|--\\
    const mediaQuery = window.matchMedia('(orientation: landscape)');
    const handleOrientationChange = () => {
      //--|🠋 2. Create the handler function 🠈|--\\
      setView(viewDisplay() as 'top-lef' | 'bot-rig'); //--|🠈 Update state by calling viewDisplay again 🠈|--\\
    };
    mediaQuery.addEventListener('change', handleOrientationChange); //--|🠈 3. Add the listener 🠈|--\\
    return () => mediaQuery.removeEventListener('change', handleOrientationChange); //--|🠈 4. Cleanup on unmount 🠈|--\\
  }, [pageName, blockName]);

  let svgPath: Array<String> = [
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b0979a4b3451384187fbb5eff59e42c84b0bdbbf/source/assets/svg-files/archive-images',
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/bd5b14dcf63c8238ed9907f1f7c101ee1a66b69f/source/assets/svg-files/archive-images',
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/09ff331e3a094e34ac50aecc4f09f65465cc319e/source/assets/svg-files/archive-images',
  ];

  return (
    <header id={`${pageName}-${blockName}`} className={`default-${blockName} ${stateName}`} style={{ zIndex: 1 }}>
      <section className={`${blockName}-foreground`}>
        <nav className={`global-${blockName}`}>
          <menu className={`global-${blockName}`}>
            <ButtonRouting
              style={{
                size: '<h1>',
                shade: '~dark~',
                color: '(mono)',
                type: '{button}',
                view: viewDisplay() as 'top-lef' | 'bot-rig',
                image: `${svgPath[2]}/trinity-apps/tralogfin/logo-white.svg`,
              }}
              info={{
                pageName: pageName,
                blockName: blockName,
                labelName: `${pageName}_${blockName}_view-apps`,
              }}
              onClick={() => expandHeader(pageName)}
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
          </menu>

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
        </nav>
        <div className={`global-${blockName}`}>
          <aside className="overtime-software">
            <figure className="dark" onClick={() => loadSoftware('overtime')}>
              <span>
                <img
                  style={{
                    maskImage: `url(${svgPath[1]}/trinity-apps/track-a-day/primary-medium.svg)`,
                    WebkitMaskImage: `url(${svgPath[1]}/trinity-apps/track-a-day/primary-medium.svg)`,
                  }}
                />
                <h1>Track a Day</h1>
              </span>
            </figure>
          </aside>
          <aside className="ticketing-software">
            <figure className="dark" onClick={() => loadSoftware('ticketing')}>
              <span>
                <img
                  style={{
                    maskImage: `url(${svgPath[1]}/trinity-apps/log-a-ticket/primary-medium.svg)`,
                    WebkitMaskImage: `url(${svgPath[1]}/trinity-apps/log-a-ticket/primary-medium.svg)`,
                  }}
                />
                <h1>Log a Ticket</h1>
              </span>
            </figure>
          </aside>
          <aside className="hyperlink-software">
            <figure className="dark" onClick={() => loadSoftware('hyperlink')}>
              <span>
                <img
                  style={{
                    maskImage: `url(${svgPath[1]}/trinity-apps/find-a-link/primary-medium.svg)`,
                    WebkitMaskImage: `url(${svgPath[1]}/trinity-apps/find-a-link/primary-medium.svg)`,
                  }}
                />
                <h1>Find a Link</h1>
              </span>
            </figure>
          </aside>
        </div>
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}>
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
