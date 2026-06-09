//--|🠊 LandingOverlay.tsx 🠈|--\\
import React, { useEffect } from 'react';
//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../scripts/landing';
//--|🠋 Components 🠋|--\\
import MenuLanding from '../../../components/Menu/REVIEW/landing/Menu.landing';
import ArticleLanding from './/../../../components/Article/ARCHIVE/landing/extensions/overlay/LandingOverlay';
import HeaderBranding from '../../../components/Header/ARCHIVE/branding/Header.branding';
import ArticleSelection from '../../../components/Article/ARCHIVE/selection/Article.selection';

interface InfoProps {
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}
const LandingOverlay: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'landing';
  const blockName = stripBrackets(info.blockName, '<>') as 'overlay';

  const stateName: 'visible' | 'hidden' = 'visible';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <section id={`${pageName}-${blockName}`} className={`default-${blockName} ${stateName}`} style={{ zIndex: 3 }}>
      <div className="landing-carousel" style={{ zIndex: 0 }}>
        <section className="loading-section">
          <img
            alt="loading-logo"
            src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/gif-files/trinity-apps/1280x720%2C%2015fps/1280x720%2C%2015fps_white.gif"
          />
        </section>
        <section className="picking-section">
          <MenuLanding info={info} />
          <ArticleLanding info={info} />
        </section>
      </div>
    </section>
  );
};

export default LandingOverlay;
