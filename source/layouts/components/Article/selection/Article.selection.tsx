//--|🠊 Article.selection.tsx 🠈|--//
//--|🠋 Functions 🠋|--//
import { loadDemo } from '../../../../index';
import { stripBrackets } from '../../../scripts/landing';
import { defineButton, hideFigure, showFigure, showMain, getIcon } from './Article_selection';
//--|🠉 Functions 🠉|--//
//--|🠋 Styles 🠋|--//
import './Article.selection.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
import MenuBranding from '../../Menu/branding/Menu.branding';
import ButtonGrade from '../../Button/grade/Button.grade';
import ButtonStretch from '../../Button/stretch/Button.stretch';
import ButtonDefault from '../../Button/default/Button.default';
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
const ArticleSelection: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'landing';
  const blockName = stripBrackets(info.blockName, '<>') as 'overlay';

  const handleSelection = () => {};

  useEffect(() => {}, [pageName, blockName]);

  return (
    <article className="selection-article">
      <aside className="apps-aside" onMouseLeave={() => showFigure('apps')}>
        <figure className="apps-figure" onClick={(event) => hideFigure(event)} onMouseEnter={(event) => hideFigure(event)}>
          {toggleFont('open-apps')}
          <img
            style={{
              maskImage: `url(${getIcon('apps')})`,
              WebkitMaskImage: `url(${getIcon('apps')})`,
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
        <figure className="demo-figure" onClick={(event) => hideFigure(event)} onMouseEnter={(event) => hideFigure(event)}>
          {toggleFont('view-demo')}
          <img
            style={{
              maskImage: `url(${getIcon('demo')})`,
              WebkitMaskImage: `url(${getIcon('demo')})`,
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
            maskImage: `url(${getIcon('brand')})`,
            WebkitMaskImage: `url(${getIcon('brand')})`,
          }}
        />
      </div>
    </article>
  );
};
export default ArticleSelection;

const toggleFont = (text: 'open-apps' | 'view-demo') => {
  let portrait = window.matchMedia('(orientation: portrait)').matches;
  let landscape = window.matchMedia('(orientation: landscape)').matches;

  let innerText = (text: string) => {
    switch (text) {
      case 'open-apps':
        return (
          <>
            View
            <br />
            Demo
          </>
        );
      case 'view-demo':
        return (
          <>
            View
            <br />
            Demo
          </>
        );
    }
  };

  if (landscape) {
    if (window.innerHeight < 360) {
      return <h6>{innerText(text)}</h6>; //--|🠈 Landscape < 360px (Less than) 🠈|--//
    } else if (window.innerHeight < 480) {
      return <h4>{innerText(text)}</h4>; //--|🠈 Landscape < 480px (Less than) 🠈|--//
    } else if (window.innerHeight < 768) {
      return <h2>{innerText(text)}</h2>; //--|🠈 Landscape < 768px (Less than) 🠈|--//
    } else {
      return <h1>{innerText(text)}</h1>; //--|🠈 Landscape > 768px (Larger than) 🠈|--//
    }
  } else if (portrait) {
    if (window.innerWidth < 360) {
      return <h4>{innerText(text)}</h4>; //--|🠈 Portrait < 360px (Less than) 🠈|--//
    } else if (window.innerWidth < 480) {
      return <h3>{innerText(text)}</h3>; //--|🠈 Portrait < 480px (Less than) 🠈|--//
    } else if (window.innerWidth < 768) {
      return <h2>{innerText(text)}</h2>; //--|🠈 Portrait < 768px (Less than) 🠈|--//
    } else {
      return <h1>{innerText(text)}</h1>; //--|🠈 Portrait > 768px (Larger than) 🠈|--//
    }
  }
};
