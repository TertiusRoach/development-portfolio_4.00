//--|🠊 OvertimeOverlay.tsx 🠈|--//
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../scripts/overtime';
//--|🠉 Functions 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useState, useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
import ButtonStretch from '../../../components/Button/archive/stretch/Button.stretch';
import ButtonGrade from '../../../components/Button/archive/grade/Button.grade';
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
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}
const OvertimeOverlay: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'overtime';
  const blockName = stripBrackets(info.blockName, '<>') as 'overlay';

  const stateType: string = 'visible' as 'visible' | 'hidden';

  useEffect(() => {
    hideBlock(pageName, blockName);
  }, [pageName, blockName]);

  let imageLink: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/079e1e37e24da759c2cf7910c8659593bc74c8e5/source/assets/svg-files/trinity-apps/rebrand/track-day/track-day-light.svg';
  return (
    <section style={{ zIndex: 5 }} id={`${pageName}-${blockName}`} className={`default-${blockName} ${stateType}`}>
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
