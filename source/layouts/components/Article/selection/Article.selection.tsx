//--|🠊 Division.selection.tsx 🠈|--//
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
import { defineButton } from './Article_selection';
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
    <article className="selection-article" onMouseLeave={(event) => showAside(event)}>
      <aside className="left-overlay visible" onMouseEnter={() => hideAside('left')}>
        <h1>
          Open
          <br />
          Apps
        </h1>
        <menu className="application-icon">
          <img style={{ maskImage: `url(${appsImage})`, WebkitMaskImage: `url(${appsImage})` }} />
        </menu>
      </aside>
      <aside className="right-overlay visible" onMouseEnter={() => hideAside('right')}>
        <h1>
          View
          <br />
          Demo
        </h1>
        <menu className="demonstration-icon">
          <img style={{ maskImage: `url(${demoImage})`, WebkitMaskImage: `url(${demoImage})` }} />
        </menu>
      </aside>

      <nav className="navigation-apps">
        <ul className="view-apps">
          {/* <ButtonSharp
            type="button"
            text={'Track a Day'}
            // onClick={() => viewBlock('register')}
            style={defineButton('track-day', { pageName, blockName })}
          />
          <ButtonSharp
            type="button"
            text={'Log a Ticket'}
            // onClick={() => viewBlock('register')}
            style={defineButton('log-ticket', { pageName, blockName })}
          />
          <ButtonSharp
            type="button"
            text={'Find a Link'}
            // onClick={() => viewBlock('register')}
            style={defineButton('find-link', { pageName, blockName })}
          /> */}
        </ul>
      </nav>
      <nav className="navigation-demos">
        <ul className="view-demos">
          <ButtonGrade
            type="button"
            text={'Track a Day'}
            // onClick={() => viewBlock('register')}
            style={defineButton('index-land', { pageName, blockName })}
          />
          <ButtonGrade
            type="button"
            text={'Log a Ticket'}
            // onClick={() => viewBlock('register')}
            style={defineButton('log-ticket', { pageName, blockName })}
          />
          <ButtonGrade
            type="button"
            text={'Find a Link'}
            // onClick={() => viewBlock('register')}
            style={defineButton('find-link', { pageName, blockName })}
          />
        </ul>
      </nav>

      <div className="branding-icon">
        <img style={{ maskImage: `url(${brandImage})`, WebkitMaskImage: `url(${brandImage})` }} />
      </div>
    </article>
  );
};
export default ArticleSelection;

/** Hides the aside panel smoothly */
const hideAside = (aside: 'left' | 'right') => {
  const overlayElement = document.querySelector(`.${aside}-overlay`) as HTMLElement;
  setTimeout(() => {
    overlayElement.style.opacity = '0';
    overlayElement.style.zIndex = '-1';
  }, 250);
};

const showAside = (event: React.MouseEvent) => {
  console.log(event.currentTarget);

  // const leftAside = event.currentTarget.children[0] as HTMLElement;
  // const rightAside = event.currentTarget.children[1] as HTMLElement;
  // [leftAside, rightAside].forEach((aside) => {
  //   if (aside.classList.contains('hidden')) {
  //     aside.style.transition = 'opacity 0.5s ease-in-out, visibility 0.5s';
  //     aside.style.opacity = '1';
  //     aside.style.visibility = 'visible';
  //     setTimeout(() => {
  //       aside.classList.add('visible');
  //       aside.classList.remove('hidden');
  //     }, 500);
  //   }
  // });
  // console.log('Showing both asides');
};
