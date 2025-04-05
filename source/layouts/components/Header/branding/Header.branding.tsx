//--|🠊 Header.branding.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Header.branding.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
import FigureRotation from '../../Figure/rotation/Figure.rotation';
import ArticleSelection from '../../Article/selection/Article.selection';
import MenuBranding from '../../Menu/branding/Menu.branding';
//--|🠉 Components 🠉|--//
//--|🠋 Functions 🠋|--//
//--|🠉 Functions 🠉|--//

interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | string;
    identification: 'landing' | 'overtime' | 'ticketing' | 'hyperlink';
  };
}
const HeaderBranding: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'overlay';
  const pageName = info.identification as 'landing';

  useEffect(() => {}, [pageName, blockName]);

  let imageLink =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/bad07f5fd906593a1c3faf5b0810941d4a9acaf5/source/assets/svg-files/archive-images/tertius-roach/signature-adjacent/primary-dark.svg';
  return (
    <header className="branding-header">
      <MenuBranding src={imageLink} style={{ brandView: 'center', blockName: blockName, pageName: pageName }} />
    </header>
  );
};
export default HeaderBranding;
