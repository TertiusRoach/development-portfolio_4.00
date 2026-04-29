//--|🠊 Division.selection.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Division.selection.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
import HeaderBranding from '../../Header/branding/Header.branding';
import FigureRotation from '../../Figure/rotation/Figure.rotation';
import ArticleSelection from '../../Article/selection/Article.selection';
import MenuBranding from '../../Menu/archive/branding/Menu.branding';
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

  useEffect(() => {}, [pageName, blockName]);

  return (
    <div className="selection-division">
      <HeaderBranding info={info} />
      <ArticleSelection info={info} />
      {/* <FigureRotation style={{ fadeView: 'test-a-fade' }} /> */}
    </div>
  );
};
export default DivisionSelection;
