//--|🠊 Division.selection.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Division.selection.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
import FigureRotation from '../../Figure/rotation/Figure.rotation';
import ArticleSelection from '../../Article/selection/Article.selection';
import MenuBranding from '../../../components/Menu/branding/Menu.branding';
//--|🠉 Components 🠉|--//
//--|🠋 Functions 🠋|--//
// import { scaleImage } from './Division_selection';
//--|🠉 Functions 🠉|--//

interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | string;
    identification: 'landing' | 'overtime' | 'ticketing' | 'hyperlink';
  };
}
const DivisionSelection: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'overlay';
  const pageName = info.identification as 'landing' | 'overtime' | 'ticketing' | 'hyperlink' | string;
  const imageLink =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/bad07f5fd906593a1c3faf5b0810941d4a9acaf5/source/assets/svg-files/archive-images/tertius-roach/signature-adjacent/primary-dark.svg';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <div className="selection-division">
      <header className="navigation-branding">
        <MenuBranding src={imageLink} style={{ brandView: 'left', blockName: blockName, pageName: pageName }} />
      </header>
      <ArticleSelection info={info} />
      {/* <FigureRotation style={{ fadeView: 'log-a-ticket' }} /> */}
    </div>
  );
};
export default DivisionSelection;
