//--|🠊 Division.identity.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Division.identity.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
import HeaderBranding from '../../Header/branding/Header.branding';
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
    identification: 'overtime' | 'ticketing' | 'hyperlink' | string;
  };
}
const DivisionIdentity: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'header';
  const pageName = info.identification as 'overtime' | 'ticketing' | 'hyperlink';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <div className={`identity-division ${pageName}-${blockName}`}>
      {(() => {
        switch (pageName) {
          case 'overtime':
            var trackDay =
              'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/5df756edd69f2539d713037b60064efc6165c2af/source/assets/svg-files/trinity-apps/rebrand/track-day/track-day-dark.svg';

            return <img src={trackDay} alt="track-day" />;
          case 'ticketing':
            let logTicket =
              'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/5df756edd69f2539d713037b60064efc6165c2af/source/assets/svg-files/trinity-apps/rebrand/log-ticket/log-ticket-dark.svg';

            return <img src={logTicket} alt="log-ticket" />;
          case 'hyperlink':
            let findLink =
              'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/5df756edd69f2539d713037b60064efc6165c2af/source/assets/svg-files/trinity-apps/rebrand/find-link/find-link-dark.svg';

            return <img src={findLink} alt="find-link" />;
        }
      })()}
    </div>
  );
};
export default DivisionIdentity;
