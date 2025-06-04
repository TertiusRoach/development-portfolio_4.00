//--|🠊 LandingMain.tsx 🠈|--//
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../scripts/landing';
//--|🠉 Functions 🠉|--//
//--|🠋 Dependencies 🠋|--//
import ReactDOM from 'react-dom/client';
import axios, { AxiosError } from 'axios';
import React, { useState, useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Context 🠋|--//
import { EmailProvider } from '../../../../modules/context/EmailContext';
import { PasswordProvider } from '../../../../modules/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
import FormLogin from '../../../components/Form/login/Form.login';
import FormRegister from '../../../components/Form/register/Form.register';
import FormPassword from '../../../components/Form/password/Form.password';
import FigureRotation from '../../../components/Figure/rotation/Figure.rotation';
import NavigationLanding from '../../../components/Navigation/landing/Navigation.landing';
//--|🠉 Components 🠉|--//

interface InfoProps {
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}
const LandingMain: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'landing';
  const blockName = stripBrackets(info.blockName, '<>') as 'main';

  useEffect(() => {
    randomizeCarousel(pageName, blockName);
  }, [pageName, blockName]);

  return (
    <main id={`${pageName}-${blockName}`} style={{ zIndex: 0 }} className={`default-${blockName}`}>
      <div className="landing-carousel" style={{ zIndex: 0 }}>
        <section className="register-section hidden">
          <div className="register-container">
            <FormRegister info={info} />
            <NavigationLanding info={info} form="register" />
            <FigureRotation style={{ fadeView: 'track-a-day' }} />
          </div>
        </section>
        <section className="login-section visible">
          <div className="login-container">
            <FormLogin info={info} />
            <NavigationLanding info={info} form="login" />
            <FigureRotation style={{ fadeView: 'log-a-ticket' }} />
          </div>
        </section>
        <section className="password-section hidden">
          <div className="password-container">
            <FormPassword info={info} />
            <NavigationLanding info={info} form="password" />
            <FigureRotation style={{ fadeView: 'find-a-link' }} />
          </div>
        </section>
      </div>
    </main>
  );
};
export default LandingMain;

function randomizeCarousel(pageName: 'landing' | string, blockName: 'main' | string) {
  const carousel = document.querySelector(`#${pageName}-${blockName} .landing-carousel`) as HTMLElement;

  let randomizeCarousel: string;
  let randomize = Math.floor(Math.random() * 3);
  switch (randomize) {
    case 0:
      randomizeCarousel = 'register';
      carousel.style.transform = 'translateX(0vw)';
      break;
    case 1:
      randomizeCarousel = 'login';
      carousel.style.transform = 'translateX(-100vw)';
      break;
    case 2:
      randomizeCarousel = 'password';
      carousel.style.transform = 'translateX(-200vw)';
      break;
  }
}
