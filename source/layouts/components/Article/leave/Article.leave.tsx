//--|🠊 Article.leave.tsx 🠈|--//
//--|🠋 Functions 🠋|--//
import { defineButton } from './Article_leave';
//--|🠉 Functions 🠉|--//
//--|🠋 Styles 🠋|--//
import './Article.leave.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
import MenuBranding from '../../Menu/branding/Menu.branding';
import ButtonStretch from '../../Button/stretch/Button.stretch';
import ButtonGrading from '../../Button/grading/Button.grading';
import FigureRotation from '../../Figure/rotation/Figure.rotation';
//--|🠉 Components 🠉|--//

interface InfoProps {
  onMouseLeave?: () => void;

  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | string;
    identification: 'landing' | 'overtime' | 'ticketing' | 'hyperlink';
  };
}
const ArticleLeave: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'main';
  const pageName = info.identification as 'overtime';

  const handleLeave = async () => {};

  useEffect(() => {}, [pageName, blockName]);

  let completedIcon: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/4e95ff5602e321d168607a00f27ac19a53db5eb3/source/assets/svg-files/overtime-page/completed-leave.svg';
  let remainingIcon: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/4e95ff5602e321d168607a00f27ac19a53db5eb3/source/assets/svg-files/overtime-page/remaining-leave.svg';
  let overtimeIcon: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/4e95ff5602e321d168607a00f27ac19a53db5eb3/source/assets/svg-files/overtime-page/overtime-leave.svg';

  return (
    <article className="leave-article">
      <article className="leave-article">
        <header className="fullname-header">
          <h1>Forename</h1>
          <br />
          <h1>Surname</h1>
        </header>

        <section className="metrics-section">
          <div className="completed-row">
            <time className="h1">--:--</time>
            <h3 className="h3">Completed</h3>
            <span>
              <img
                alt="completed"
                style={{
                  maskImage: `url(${completedIcon})`,
                  WebkitMaskImage: `url(${completedIcon})`,
                }}
              ></img>
            </span>
          </div>
          <div className="remaining-row">
            <time className="h1">--:--</time>
            <h3 className="h3">Remaining</h3>
            <span>
              <img
                alt="remaining"
                style={{
                  maskImage: `url(${remainingIcon})`,
                  WebkitMaskImage: `url(${remainingIcon})`,
                }}
              />
            </span>
          </div>
          <div className="overtime-row">
            <time className="h1">--:--</time>
            <h3 className="h3">Overtime</h3>
            <span>
              <img
                alt="overtime"
                style={{
                  maskImage: `url(${overtimeIcon})`,
                  WebkitMaskImage: `url(${overtimeIcon})`,
                }}
              />
            </span>
          </div>
        </section>

        <ButtonStretch
          type="button"
          text={'Leave'}
          // onClick={() => showWeek(pageName, '<y>', '-prev-')}
          style={defineButton('leave', { pageName, blockName })}
        />

        <time className="hourly-time">
          <h1 className="display-1">--:--</h1>
        </time>

        <div className="background-division">
          <figure className="fullname"></figure>
          <figure className="metrics">
            <span></span>
            <span></span>
          </figure>
          <figure className="leave"></figure>
          <figure className="hourly"></figure>
        </div>
      </article>
    </article>
  );
};
export default ArticleLeave;
