//--|🠉 pageName: [landing] 🠉|--\\
//--|🠊 LandingOverlay.tsx 🠈|--\\
import React, { useEffect } from 'react';
//--|🠋 Styles 🠋|--\\
import './LandingOverlay.scss';
//--|🠋 Functions 🠋|--\\
import { defineButton, getIcon, showFigure, hideFigure } from '../../Article_landing';
import { stripBrackets } from '../../../../../../scripts/buttons';
//--|🠋 Components 🠋|--\\
import ButtonDefault from '../../../../../Button/default/Button.default';
import ButtonCleaned from '../../../../../Button/ARCHIVE/cleaned/Button.cleaned';
import ButtonStretch from '../../../../../Button/ARCHIVE/stretch/Button.stretch';

interface InfoProps {
  info: {
    blockName: '<overlay>' | string;
    pageName: '[landing]' | string;
  };
}
const ArticleOverlay: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'landing';
  const blockName = stripBrackets(info.blockName, '<>') as 'overlay';

  const handleOverlay = (pageName: string, blockName: string) => {
    let page: string = pageName;
    let block: string = blockName;
  };

  useEffect(() => {}, [pageName, blockName]);

  return (
    <>
      <header className="brand-header">
        <img
          style={{
            maskImage: `url(${getIcon('brand')})`,
            WebkitMaskImage: `url(${getIcon('brand')})`,
          }}
        />
      </header>

      <footer className="suites-footer">
        <aside className="apps-aside">
          <figure className="apps-figure downplay">
            <ButtonCleaned
              info={{ pageName: pageName, blockName: blockName }}
              style={{
                size: '<h4>',
                view: '-bottom-',
                color: '(mono)',
                type: '{button}',
                shade: '~light~',
                text: 'View Apps',
                image:
                  'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3518122412fa887d7f7d7d894f05346860b8181c/source/assets/svg-files/landing-page/sign-in-alt.svg',
              }}
            />
          </figure>
          <nav className="apps-navigation">
            <ButtonDefault
              info={{ pageName: pageName, blockName: blockName, labelName: 'register-overlay' }}
              style={{
                size: '<h4>',
                view: '-right-',
                color: '(mono)',
                type: '{button}',
                shade: '~light~',
                text: 'Login',
                image:
                  'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3518122412fa887d7f7d7d894f05346860b8181c/source/assets/svg-files/landing-page/sign-in-alt.svg',
              }}
            />
          </nav>
        </aside>
        <aside className="demo-aside">
          <figure className="demo-figure">
            <ButtonCleaned
              info={{ pageName: pageName, blockName: blockName }}
              style={{
                size: '<h4>',
                view: '-bottom-',
                color: '(mono)',
                type: '{button}',
                shade: '~light~',
                text: 'View Demo',
                image:
                  'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3518122412fa887d7f7d7d894f05346860b8181c/source/assets/svg-files/landing-page/laptop.svg',
              }}
            />
          </figure>
          {/* <nav className="demo-navigation downplay"></nav> */}
        </aside>
      </footer>
    </>
  );
};
export default ArticleOverlay;

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
      return <h6>{innerText(text)}</h6>; //--|🠈 Landscape < 360px (Less than) 🠈|--\\
    } else if (window.innerHeight < 480) {
      return <h4>{innerText(text)}</h4>; //--|🠈 Landscape < 480px (Less than) 🠈|--\\
    } else if (window.innerHeight < 768) {
      return <h2>{innerText(text)}</h2>; //--|🠈 Landscape < 768px (Less than) 🠈|--\\
    } else {
      return <h1>{innerText(text)}</h1>; //--|🠈 Landscape > 768px (Larger than) 🠈|--\\
    }
  } else if (portrait) {
    if (window.innerWidth < 360) {
      return <h4>{innerText(text)}</h4>; //--|🠈 Portrait < 360px (Less than) 🠈|--\\
    } else if (window.innerWidth < 480) {
      return <h3>{innerText(text)}</h3>; //--|🠈 Portrait < 480px (Less than) 🠈|--\\
    } else if (window.innerWidth < 768) {
      return <h2>{innerText(text)}</h2>; //--|🠈 Portrait < 768px (Less than) 🠈|--\\
    } else {
      return <h1>{innerText(text)}</h1>; //--|🠈 Portrait > 768px (Larger than) 🠈|--\\
    }
  }
};
