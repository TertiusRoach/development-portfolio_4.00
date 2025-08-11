//--|🠊 LandingOverlay.tsx 🠈|--\\
import React, { useEffect } from 'react';
//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../scripts/landing';
//--|🠋 Components 🠋|--\\
import MenuLanding from '../../../components/Menu/landing/Menu.landing';
import ArticleLanding from '../../../components/Article/landing/Article.landing';
import HeaderBranding from '../../../components/Header/branding/Header.branding';
import ArticleSelection from '../../../components/Article/selection/Article.selection';

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
    <section className={`default-${blockName} ${stateName}`} id={`${pageName}-${blockName}`} style={{ zIndex: 3 }}>
      <div className="landing-carousel" style={{ zIndex: 0 }}>
        <section className="loading-section">
          {/* <img
            src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/gif-files/trinity-apps/1280x720%2C%2015fps/1280x720%2C%2015fps_white.gif"
            alt="loading-logo"
          /> */}
        </section>
        <section className="select-section">
          <MenuLanding info={info} />
          <ArticleLanding info={info} />
        </section>
      </div>
    </section>
  );
};

export default LandingOverlay;
