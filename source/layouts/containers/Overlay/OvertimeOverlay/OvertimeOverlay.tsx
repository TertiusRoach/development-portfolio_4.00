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
import HeaderBranding from '../../../components/Header/branding/Header.branding';
import ArticleVocation from '../../../components/Article/vocation/Article.vocation';
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

  const stateName: string = 'visible' as 'visible' | 'hidden';

  useEffect(() => {
    hideBlock(pageName, blockName);
  }, [pageName, blockName]);

  let imageLink: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/079e1e37e24da759c2cf7910c8659593bc74c8e5/source/assets/svg-files/trinity-apps/rebrand/track-day/track-day-light.svg';
  return (
    <section
      style={{ zIndex: 3 }}
      id={`${pageName}-${blockName}`}
      className={`default-${blockName} ${stateName}`}
    >
      <div className="overtime-carousel" style={{ zIndex: 0 }}>
        <section className="loading-section">
          <img src={imageLink} alt="track-day" />
        </section>

        <section className="vocation-section">
          <ArticleVocation info={info} />
        </section>
      </div>
    </section>
  );
};
export default OvertimeOverlay;

function hideBlock(pageName: string, blockName: string) {
  let container = document.getElementById(`${pageName}-${blockName}`) as HTMLElement;
  if (container.classList.contains('visible')) {
    setTimeout(() => {
      container.classList.add('hidden');
      container.classList.remove('visible');
    }, 2500);
    setTimeout(() => {
      container.style.display = 'none';
    }, 2750);
  }
}
