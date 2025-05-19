//--|🠊 LandingOverlay.tsx 🠈|--//
//--|🠋 Dependencies 🠋|--//
import ReactDOM from 'react-dom/client';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Context 🠋|--//
import { EmailProvider } from '../../../../modules/context/EmailContext';
import { PasswordProvider } from '../../../../modules/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
import ButtonStretch from '../../../components/Button/stretch/Button.stretch';
import ButtonGrading from '../../../components/Button/grade/Button.grading';
import DivisionLoading from '../../../components/Division/loading/Division.loading';
import ArticleSelection from '../../../components/Article/selection/Article.selection';
import DivisionSelection from '../../../components/Division/selection/Division.selection';
//--|🠉 Components 🠉|--//
//--|🠋 Functions 🠋|--//
// import { viewBlock, viewText, outputDisplay } from '../../../pages/landing';
import HeaderBranding from '../../../components/Header/branding/Header.branding';
//--|🠉 Functions 🠉|--//

interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | string;
    identification: 'landing' | 'overtime' | 'ticketing' | 'hyperlink';
  };
}
const OvertimeOverlay: React.FC<InfoProps> = ({ info }) => {
  const pageName: string = info.identification as 'overtime';
  const blockName: string = 'overlay';
  const roleName: string = '' as 'established' | 'freelancing';

  const stateName: 'visible' | 'hidden' = 'visible';

  useEffect(() => {
    /*
    let sectionElement = document.querySelector('section[class*="login-section"]') as HTMLElement;
    outputDisplay(sectionElement);
    */
  }, [pageName, blockName]);

  let establishedLink: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/dccac1bf36f260bb9cf957b78c37166d51845388/source/assets/svg-files/overtime-page/role-established.svg';
  let freelancingLink: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/dccac1bf36f260bb9cf957b78c37166d51845388/source/assets/svg-files/overtime-page/role-freelancing.svg';

  return (
    <section
      style={{ zIndex: 3 }}
      id={`${pageName}-${blockName}`}
      className={`default-${blockName} ${stateName}`}
    >
      <div className="overtime-carousel" style={{ zIndex: 0 }}>
        <section className="loading-section">
          <img
            src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/gif-files/trinity-apps/1280x720%2C%2015fps/1280x720%2C%2015fps_black.gif"
            alt="loading-logo"
          />
        </section>

        <section className="vocation-section">
          <article className="vocation-article">
            <header>
              <img
                src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/5df756edd69f2539d713037b60064efc6165c2af/source/assets/svg-files/trinity-apps/rebrand/track-day/track-day-light.svg"
                alt="track-day"
              />
              <h1>
                What's your
                <br />
                vocation?
              </h1>
            </header>
            <footer>
              <div
                className="established"
                //--|🠊 onClick={() => viewRole(pageName, blockName, roleName)} 🠈|--//
              >
                <img
                  style={{
                    maskImage: `url(${establishedLink})`,
                    WebkitMaskImage: `url(${establishedLink})`,
                  }}
                  className="established"
                />
                <ButtonStretch
                  type="button"
                  text={'Established'}
                  style={defineButton('established', { pageName, blockName })}
                />
              </div>
              <div
                className="freelancing"
                //--|🠊 onClick={() => viewRole(pageName, blockName, roleName)} 🠈|--//
              >
                <img
                  style={{
                    maskImage: `url(${freelancingLink})`,
                    WebkitMaskImage: `url(${freelancingLink})`,
                  }}
                  className="established"
                />
                <ButtonStretch
                  type="button"
                  text={'Freelancing'}
                  style={defineButton('freelancing', { pageName, blockName })}
                />
              </div>
            </footer>
          </article>
        </section>
      </div>
    </section>
  );
};
export default OvertimeOverlay;

function defineButton(
  button: 'established' | 'freelancing',
  info: { blockName: string; pageName: string }
) {
  const { blockName, pageName } = info;
  //--|🠋 Always Return an Object 🠋|--//
  switch (button) {
    case 'established':
      return {
        fontSize: '<h3>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-text-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        pageName: pageName as 'overtime',
        blockName: blockName as 'overlay',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/dccac1bf36f260bb9cf957b78c37166d51845388/source/assets/svg-files/overtime-page/role-established.svg',
      };
    case 'freelancing':
      return {
        fontSize: '<h3>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: '-text-' as '-left-' | '-right-' | '-center-' | '-icon-' | '-text-',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        pageName: pageName as 'overtime',
        blockName: blockName as 'overlay',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/dccac1bf36f260bb9cf957b78c37166d51845388/source/assets/svg-files/overtime-page/role-freelancing.svg',
      };
  }
}
