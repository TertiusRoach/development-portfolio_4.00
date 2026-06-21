//--|🠊 Article.landing.tsx 🠈|--\\
import React, { useEffect } from 'react';
//--|🠋 Functions 🠋|--\\
// import { loadDemo } from '../../../../../index';
import { stripBrackets } from '../../../../scripts/landing';
import { defineButton, hideFigure, showFigure, showMain, getIcon } from './Article_landing';
//--|🠋 Styles 🠋|--\\
import './Article.landing.scss';
//--|🠋 Components 🠋|--\\
/*
import MenuBranding from '../../Menu/branding/Menu.branding';
import ButtonGrade from '../../Button/archive/grade/Button.grade';
import ButtonStretch from '../../Button/archive/stretch/Button.stretch';
import ButtonDefault from '../../Button/archive/default/Button.default';
import FigureRotation from '../../Figure/rotation/Figure.rotation';
*/
//--|🠋 Extensions 🠋|--\\
import ArticleOverlay from './extensions/overlay/LandingOverlay';

interface InfoProps {
  onMouseLeave?: () => void;
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}
const ArticleLanding: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'landing';
  const blockName = stripBrackets(info.blockName, '<>') as 'overlay';

  const handleLanding = (
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string,
  ) => {
    switch (blockName) {
      case '<overlay>':
        return <ArticleOverlay info={info} />;
      case '<leftbar>':
        return (
          <ul className="leftbar-list">
            <li>Leftbar content</li>
          </ul>
        );
      case '<rightbar>':
        return (
          <ul className="rightbar-list">
            <li>Rightbar content</li>
          </ul>
        );
      case '<header>':
        return (
          <ul className="header-list">
            <li>Header Content</li>
          </ul>
        );
      case '<footer>':
        return (
          <ul className="footer-list">
            <li>Footer Content</li>
          </ul>
        );
      case '<main>':
      default:
        return (
          <ul className="main-list">
            <li>Main content</li>
          </ul>
        );
    }
  };

  useEffect(() => {}, [pageName, blockName]);

  return <article className="landing-article">{handleLanding(info.blockName)}</article>;
};
export default ArticleLanding;
