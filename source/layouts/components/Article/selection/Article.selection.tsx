//--|🠊 Article.selection.tsx 🠈|--//
//--|🠋 Functions 🠋|--//
import { loadDemo } from '../../../../index';
import { defineButton, hideFigure, showFigure, showMain } from './Article_selection';
//--|🠉 Functions 🠉|--//
//--|🠋 Styles 🠋|--//
import './Article.selection.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
import MenuBranding from '../../Menu/branding/Menu.branding';
import ButtonGrading from '../../Button/grade/Button.grading';
import ButtonStretch from '../../Button/stretch/Button.stretch';
import ButtonDefault from '../../Button/default/Button.default';
import FigureRotation from '../../Figure/rotation/Figure.rotation';
//--|🠉 Components 🠉|--//

interface InfoProps {
  onMouseLeave?: () => void;

  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | string;
    identification: 'landing' | 'overtime' | 'ticketing' | 'hyperlink';
  };
}
const ArticleSelection: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'overlay';
  const pageName = info.identification as 'landing';

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

  return (
    <article className="selection-article">
      <aside className="apps-aside" onMouseLeave={() => showFigure('apps')}>
        <figure
          className="apps-figure"
          onClick={(event) => hideFigure(event)}
          onMouseEnter={(event) => hideFigure(event)}
        >
          <h1>
            Open
            <br />
            Apps
          </h1>
          <img
            style={{
              maskImage: `url(${handleSelection('apps')})`,
              WebkitMaskImage: `url(${handleSelection('apps')})`,
            }}
          />
        </figure>
        <nav className="apps-navigation">
          <ButtonDefault
            type="button"
            text={'Login'}
            onClick={() => showMain('login', pageName)}
            style={defineButton('login', { pageName, blockName })}
          />
          <ButtonDefault
            type="button"
            text={'Register'}
            onClick={() => showMain('register', pageName)}
            style={defineButton('register', { pageName, blockName })}
          />
        </nav>
      </aside>
      <aside className="demo-aside" onMouseLeave={() => showFigure('demo')}>
        <figure
          className="demo-figure"
          onClick={(event) => hideFigure(event)}
          onMouseEnter={(event) => hideFigure(event)}
        >
          <h1>
            View
            <br />
            Demo
          </h1>
          <img
            style={{
              maskImage: `url(${handleSelection('demo')})`,
              WebkitMaskImage: `url(${handleSelection('demo')})`,
            }}
          />
        </figure>
        <nav className="demo-navigation downplay">
          <ButtonStretch
            type="button"
            text={'Track a Day'}
            onClick={() => loadDemo('overtime')}
            style={defineButton('track-day', { pageName, blockName })}
          />
          <ButtonStretch
            type="button"
            text={'Log a Ticket'}
            onClick={() => loadDemo('ticketing')}
            style={defineButton('log-ticket', { pageName, blockName })}
          />
          <ButtonStretch
            type="button"
            text={'Find a Link'}
            onClick={() => loadDemo('hyperlink')}
            style={defineButton('find-link', { pageName, blockName })}
          />
        </nav>
      </aside>
      <div className="branding-division">
        <img
          style={{
            maskImage: `url(${handleSelection('brand')})`,
            WebkitMaskImage: `url(${handleSelection('brand')})`,
          }}
        />
      </div>
    </article>
  );
};
export default ArticleSelection;
