//--|🠊 Article.selection.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Article.selection.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
import ButtonGrade from '../../Button/grade/Button.grade';
import MenuBranding from '../../Menu/branding/Menu.branding';
import FigureRotation from '../../Figure/rotation/Figure.rotation';
//--|🠉 Components 🠉|--//
//--|🠋 Functions 🠋|--//
import { defineButton, hideFigure, showFigure } from './Article_selection';
import { viewBlock, viewText, axiosError } from '../../../../landing';
//--|🠉 Functions 🠉|--//

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
  const pageName = info.identification as 'landing' | 'overtime' | 'ticketing' | 'hyperlink' | string;

  useEffect(() => {
    // toggleOverlay('left', 'leave');
    // toggleOverlay('right', 'leave');
  }, [pageName, blockName]);

  let brandImage =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/861d6c3d25d45ec174c8d12aedc407f59dc85317/source/assets/svg-files/trinity-apps/trinity-apps.svg';
  let demoImage =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/7e2882f29c5a3697900192c18bec75aa5916b207/source/assets/svg-files/landing-page/laptop.svg';
  let appsImage =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/7e2882f29c5a3697900192c18bec75aa5916b207/source/assets/svg-files/landing-page/door-open.svg';

  return (
    <article className="selection-article">
      <aside className="apps-aside" onMouseLeave={() => showFigure('apps')}>
        <figure className="apps-figure" onMouseEnter={(event) => hideFigure(event)}>
          <h1>
            Open
            <br />
            Apps
          </h1>
          <img style={{ maskImage: `url(${appsImage})`, WebkitMaskImage: `url(${appsImage})` }} />
        </figure>
        <nav className="apps-navigation">
          <ButtonGrade type="button" text={'Login'} style={defineButton('login', { pageName, blockName })} />
          <ButtonGrade type="button" text={'Register'} style={defineButton('register', { pageName, blockName })} />
        </nav>
      </aside>
      <aside className="demo-aside" onMouseLeave={() => showFigure('demo')}>
        <figure className="demo-figure" onMouseEnter={(event) => hideFigure(event)}>
          <h1>
            View
            <br />
            Demo
          </h1>
          <img style={{ maskImage: `url(${demoImage})`, WebkitMaskImage: `url(${demoImage})` }} />
        </figure>
        <nav className="demo-navigation">
          <ButtonGrade type="button" text={'Track a Day'} style={defineButton('track-day', { pageName, blockName })} />
          <ButtonGrade type="button" text={'Log a Ticket'} style={defineButton('log-ticket', { pageName, blockName })} />
          <ButtonGrade type="button" text={'Find a Link'} style={defineButton('find-link', { pageName, blockName })} />
        </nav>
      </aside>
      <div className="branding-division">
        <img style={{ maskImage: `url(${brandImage})`, WebkitMaskImage: `url(${brandImage})` }} />
      </div>
    </article>
  );
};
export default ArticleSelection;
