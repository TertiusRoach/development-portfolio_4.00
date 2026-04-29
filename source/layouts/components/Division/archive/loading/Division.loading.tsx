//--|🠊 Division.loading.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Division.loading.scss';
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
const DivisionLoading: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'overlay';
  const pageName = info.identification as 'landing' | 'overtime' | 'ticketing' | 'hyperlink' | string;

  useEffect(() => {}, [pageName, blockName]);

  return (
    <div className="loading-division">
      <img
        src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/gif-files/trinity-apps/1280x720%2C%2015fps/1280x720%2C%2015fps_black.gif"
        alt="loading-logo"
      />
    </div>
  );
};
export default DivisionLoading;
