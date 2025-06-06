//--|🠊 Article.vocation.tsx 🠈|--//
//--|🠋 Functions 🠋|--//
import { defineButton } from './Article_vocation';
import { stripBrackets } from '../../../scripts/overtime';
//--|🠉 Functions 🠉|--//
//--|🠋 Styles 🠋|--//
import './Article.vocation.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
import MenuBranding from '../../Menu/branding/Menu.branding';
import ButtonGrading from '../../Button/grade/Button.grading';
import ButtonStretch from '../../Button/stretch/Button.stretch';
import FigureRotation from '../../Figure/rotation/Figure.rotation';
//--|🠉 Components 🠉|--//

interface InfoProps {
  onMouseLeave?: () => void;
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}

const ArticleVocation: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'overtime';
  const blockName = stripBrackets(info.blockName, '<>') as 'overlay';

  const handleSelection = (image: 'brand' | 'demo' | 'apps') => {
    switch (image) {
      case 'brand':
        return 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/861d6c3d25d45ec174c8d12aedc407f59dc85317/source/assets/svg-files/trinity-apps/trinity-apps.svg';
      case 'demo':
        return 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/7e2882f29c5a3697900192c18bec75aa5916b207/source/assets/svg-files/landing-page/laptop.svg';
      case 'apps':
        return 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/7e2882f29c5a3697900192c18bec75aa5916b207/source/assets/svg-files/landing-page/door-open.svg';
    }
  };

  useEffect(() => {}, [pageName, blockName]);

  let establishedLink: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/dccac1bf36f260bb9cf957b78c37166d51845388/source/assets/svg-files/overtime-page/role-established.svg';
  let freelancingLink: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/dccac1bf36f260bb9cf957b78c37166d51845388/source/assets/svg-files/overtime-page/role-freelancing.svg';

  return (
    <article className="vocation-article">
      <header>
        <img
          src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/5df756edd69f2539d713037b60064efc6165c2af/source/assets/svg-files/trinity-apps/rebrand/track-day/track-day-light.svg"
          alt="track-day"
        />
        <h1>
          What's your
          <br />
          vocation?
        </h1>
      </header>
      <footer>
        <div
          className="established-container"
          //--|🠊 onClick={() => viewRole(pageName, blockName, roleName)} 🠈|--//
        >
          <img
            style={{
              maskImage: `url(${establishedLink})`,
              WebkitMaskImage: `url(${establishedLink})`,
            }}
            className="established"
          />
          <ButtonStretch type="button" text={'Established'} style={defineButton('established', { pageName, blockName })} />
        </div>
        <div
          className="freelancing-container"
          //--|🠊 onClick={() => viewRole(pageName, blockName, roleName)} 🠈|--//
        >
          <img
            style={{
              maskImage: `url(${freelancingLink})`,
              WebkitMaskImage: `url(${freelancingLink})`,
            }}
            className="established"
          />
          <ButtonStretch type="button" text={'Freelancing'} style={defineButton('freelancing', { pageName, blockName })} />
        </div>
      </footer>
    </article>
  );
};
export default ArticleVocation;
