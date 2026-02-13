//--|🠊 OvertimeHeader.tsx 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../scripts/hyperlink';
import { expandHeader, loadSoftware } from './HyperlinkFunctions';
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';
//--|🠋 Components 🠋|--\\
import ButtonDefault from '../../../components/Button/default/Button.default';
import ButtonRouting from '../../../components/Button/routing/Button.routing';
interface InfoProps {
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}
const HyperlinkHeader: React.FC<InfoProps> = ({ info }) => {
  const blockName = stripBrackets(info.blockName, '<>') as 'header';
  const pageName = stripBrackets(info.pageName, '[]') as 'hyperlink';
  const stateName: 'expanded' | 'unfolded' | 'collapsed' = 'unfolded';

  useEffect(() => {
    console.log('//--|🠊 Hyperlink Loaded 🠈|--//');
  }, [pageName, blockName]);

  let svgPath: Array<String> = [
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/a2e108e4ff99bab6768dfd293556e017ee5da5b3/source/assets/svg-files/archive-images',
    '',
    '',
  ];
  return (
    <header id={`${pageName}-${blockName}`} className={`default-${blockName} ${stateName}`} style={{ zIndex: 2 }}>
      <section className={`${blockName}-foreground`}>
        <nav className={`global-${blockName}`}>
          <menu className={`global-${blockName}`}>
            <ButtonRouting
              style={{
                size: '<h1>',
                view: 'top-lef',
                shade: '~dark~',
                color: '(mono)',

                type: '{button}',
                image: `${svgPath[0]}/trinity-apps/find-a-link/primary-light.svg`,
              }}
              info={{
                pageName: pageName,
                blockName: blockName,
                labelName: `${pageName}_${blockName}_view-apps`,
              }}
              onClick={() => expandHeader(pageName)}
            />
          </menu>
        </nav>
        <div className={`global-${blockName}`}>
          <aside className="overtime-software">
            <figure className="dark" onClick={() => loadSoftware('overtime')}>
              <span>
                <img
                  style={{
                    maskImage: `url(${svgPath[0]}/trinity-apps/track-a-day/primary-medium.svg)`,
                    WebkitMaskImage: `url(${svgPath[0]}/trinity-apps/track-a-day/primary-medium.svg)`,
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
                    maskImage: `url(${svgPath[0]}/trinity-apps/log-a-ticket/primary-medium.svg)`,
                    WebkitMaskImage: `url(${svgPath[0]}/trinity-apps/log-a-ticket/primary-medium.svg)`,
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
                    maskImage: `url(${svgPath[0]}/trinity-apps/find-a-link/primary-medium.svg)`,
                    WebkitMaskImage: `url(${svgPath[0]}/trinity-apps/find-a-link/primary-medium.svg)`,
                  }}
                />
                <h1>Find a Link</h1>
              </span>
            </figure>
          </aside>
        </div>
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </header>
  );
};
export default HyperlinkHeader;
