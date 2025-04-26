//--|🠊 Article.selection.tsx 🠈|--//
//--|🠋 Functions 🠋|--//
// import { viewDemo, openApps } from '../../../..';
import { viewBlock, viewText, axiosError } from '../../../pages/landing';
import { defineButton, viewDemo, hideFigure, showFigure, showMain } from './Article_selection';
//--|🠉 Functions 🠉|--//
//--|🠋 Styles 🠋|--//
import './Article.selection.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
import ButtonGrading from '../../Button/grading/Button.grading';
import MenuBranding from '../../Menu/branding/Menu.branding';
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
  const pageName = info.identification as 'landing' | 'overtime' | 'ticketing' | 'hyperlink' | string;

  useEffect(() => {}, [pageName, blockName]);

  const toggleImage = (image: 'brand' | 'demo' | 'apps') => {
    switch (image) {
      case 'brand':
        return 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/861d6c3d25d45ec174c8d12aedc407f59dc85317/source/assets/svg-files/trinity-apps/trinity-apps.svg';
      case 'demo':
        return 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/7e2882f29c5a3697900192c18bec75aa5916b207/source/assets/svg-files/landing-page/laptop.svg';
      case 'apps':
        return 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/7e2882f29c5a3697900192c18bec75aa5916b207/source/assets/svg-files/landing-page/door-open.svg';
    }
  };

  return (
    <article className="selection-article">
      <aside className="apps-aside" onMouseLeave={() => showFigure('apps')}>
        <figure className="apps-figure" onMouseEnter={(event) => hideFigure(event)} onClick={(event) => hideFigure(event)}>
          <h1>
            Open
            <br />
            Apps
          </h1>
          <img style={{ maskImage: `url(${toggleImage('apps')})`, WebkitMaskImage: `url(${toggleImage('apps')})` }} />
        </figure>
        <nav className="apps-navigation">
          <ButtonGrading
            type="button"
            text={'Login'}
            onClick={() => showMain('login', pageName)}
            style={defineButton('login', { pageName, blockName })}
          />
          <ButtonGrading
            type="button"
            text={'Register'}
            onClick={() => showMain('register', pageName)}
            style={defineButton('register', { pageName, blockName })}
          />
        </nav>
      </aside>
      <aside className="demo-aside" onMouseLeave={() => showFigure('demo')}>
        <figure className="demo-figure" onMouseEnter={(event) => hideFigure(event)} onClick={(event) => hideFigure(event)}>
          <h1>
            View
            <br />
            Demo
          </h1>
          <img style={{ maskImage: `url(${toggleImage('demo')})`, WebkitMaskImage: `url(${toggleImage('demo')})` }} />
        </figure>
        <nav className="demo-navigation">
          <ButtonGrading
            type="button"
            text={'Track a Day'}
            onClick={() => viewDemo('overtime')}
            style={defineButton('track-day', { pageName, blockName })}
          />
          <ButtonGrading
            type="button"
            text={'Log a Ticket'}
            onClick={() => viewDemo('ticketing')}
            style={defineButton('log-ticket', { pageName, blockName })}
          />
          <ButtonGrading
            type="button"
            text={'Find a Link'}
            onClick={() => viewDemo('hyperlink')}
            style={defineButton('find-link', { pageName, blockName })}
          />
        </nav>
      </aside>
      <div className="branding-division">
        <img style={{ maskImage: `url(${toggleImage('brand')})`, WebkitMaskImage: `url(${toggleImage('brand')})` }} />
      </div>
    </article>
  );
};
export default ArticleSelection;
