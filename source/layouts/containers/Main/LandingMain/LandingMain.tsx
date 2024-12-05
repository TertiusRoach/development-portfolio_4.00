// IndexMain.tsx
//--|🠋 Frameworks 🠋|--//
import $ from 'jquery';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
//--|🠉 Frameworks 🠉|--//
//--|🠋 Utilities 🠋|--//
import { getSVG } from '../../../../modules/utilities/getFile';
import getScroll from '../../../../modules/utilities/getScroll';
import toggleAside from '../../../../modules/utilities/toggleAside';
import getIdentification from '../../../../modules/utilities/getIdentification';
//--|🠉 Utilities 🠉|--//
//--|🠋 Components 🠋|--//
import ButtonFade from '../../../components/Button/fade/Button.fade';
import MenuButton from '../../../components/Menu/button/Menu.button';
import SectionHome from '../../../components/Section/home/Section.home';
import SectionNoir from '../../../components/Section/noir/Section.noir';
import SectionSkills from '../../../components/Section/skills/Section.skills';
import SectionContact from '../../../components/Section/contact/Section.contact';
import SectionDefault from '../../../components/Section/default/Section.default';
//--|🠉 Components 🠉|--//

function Desktop({ pageName, blockName }: { pageName: string; blockName: string }) {
  console.log(`Refreshed: Desktop Orientation <${blockName}>`);
  return (
    <div>
      <section className="login">
        <header>
          <img
            className="logo"
            src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d11394a960db3ea88c21e28aa8035c3f40bdad7c/source/assets/svg-files/archive-images/tertius-roach/signature-icon/primary-light.svg"
            alt="Login Logo"
          />
          <button>
            <img
              src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d96e3df748dac85a20c559b47659c1a3763a5fe/source/assets/svg-files/index-page/close/close-dark.svg"
              alt=""
            />
          </button>
          <h1 className="display-6">Login</h1>
        </header>
        <form className="login">
          <input placeholder="Email" type="text" id="email" name="Email" />
          <input placeholder="Password" type="password" id="password" name="password" />
        </form>
        <footer>
          <button>
            <h6>Register</h6>
          </button>
          <button>
            <h6>Forgot Password</h6>
          </button>
        </footer>
      </section>
    </div>
  );
}
function Mobile({ pageName, blockName }: { pageName: string; blockName: string }) {
  console.log(`Refreshed: Desktop Orientation <${blockName}>`);
  return (
    <div>
      <h1>Mobile View for {pageName}</h1>
    </div>
  );
}

interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | 'landing' | string;
  };
}

const LandingMain: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'main';
  const pageName = info.identification;

  useEffect(() => {
    console.log(`Initialized ${pageName}-${blockName}`);
  }, [pageName, blockName]);

  return (
    <main id={`${pageName}-${blockName}`} style={{ zIndex: 3 }} className={`default-${blockName}`}>
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: landscape)' }) && <Desktop pageName={pageName} blockName={blockName} />}

      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: portrait)' }) && <Mobile pageName={pageName} blockName={blockName} />}
    </main>
  );
};

export default LandingMain;
