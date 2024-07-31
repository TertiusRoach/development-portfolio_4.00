// IndexMain.tsx
//--|🠋 Frameworks 🠋|--//
import $ from 'jquery';
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
//--|🠉 Frameworks 🠉|--//
//--|🠋 Utilities 🠋|--//
import { getSVG } from '../../../../modules/utilities/getFile';
import { showAside } from '../../../../modules/utilities/showAside';
import { setButton } from '../../../../modules/utilities/setActive';
import getScroll from '../../../../modules/utilities/getScroll';
import showSection from '../../../../modules/utilities/showSection';
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
//--|🠋 Design 🠋|--//
//--|🠉 Design 🠉|--//
interface InfoProps {
  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
}
const IndexMain: React.FC<InfoProps> = ({ info }) => {
  const [isBlurred, setIsBlurred] = useState(false);
  const jQueryTimer = 1000;
  const blockName = 'main';
  const pageName = info.identification as String;

  useEffect(() => {
    const jQueryStart = () => {
      jQueryMain(pageName, blockName);
    };
    window.addEventListener('resize', jQueryStart);
    setTimeout(() => jQueryMain(pageName, blockName), jQueryTimer);
    return () => {
      window.removeEventListener('resize', jQueryStart);
    };
  }, [pageName, blockName]);

  const toggleBlur = () => {
    setIsBlurred(!isBlurred);
  };

  useEffect(() => {
    const header = document.querySelector(`#${pageName}-header`) as HTMLElement;
    const main = document.querySelector(`#${pageName}-main`) as HTMLElement;
    const footer = document.querySelector(`#${pageName}-footer`) as HTMLElement;

    if (isBlurred) {
      header?.classList.add('blurred');
      main?.classList.add('blurred');
      footer?.classList.add('blurred');
    } else {
      header?.classList.remove('blurred');
      main?.classList.remove('blurred');
      footer?.classList.remove('blurred');
    }
  }, [isBlurred, pageName]);

  return (
    <main id="index-main" className={`default-main ${isBlurred ? 'blurred' : ''}`} style={{ zIndex: 0 }}>
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: landscape)' }) && (
        <>
          <SectionNoir labelName="noir" blockName="main" stateType="active" info={info} />
          <SectionSkills blockName="main" labelName="skills" stateType="" info={info} />
          <SectionContact blockName="main" labelName="contact" stateType="" info={info} />
        </>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: portrait)' }) && (
        <>
          <SectionNoir labelName="noir" blockName="main" stateType="active" info={info} />
          <SectionSkills blockName="main" labelName="skills" stateType="" info={info} />
          <SectionContact blockName="main" labelName="contact" stateType="" info={info} />
        </>
      )}
      <button id="close-button" onClick={toggleBlur}>
        Close
      </button>
    </main>
  );
};

export default IndexMain;
function jQueryMain(pageName: String, blockName: string) {
  const containerElement = `${pageName}-${blockName}` as String;
  $(`#${containerElement} button[id*="leftbar"]`).on('click', function () {
    if (this.id.includes('leftbar')) {
      let header = document.querySelector(`#${pageName}-header`) as HTMLElement;
      let main = document.querySelector(`#${pageName}-main section`) as HTMLElement;
      let footer = document.querySelector(`#${pageName}-footer`) as HTMLElement;

      $(main).addClass('blurred');
      $(header).addClass('blurred');
      $(footer).addClass('blurred');
    }
  });
  $(`#${containerElement} button[id*="rightbar"]`).on('click', function () {
    if (this.id.includes('rightbar')) {
      let header = document.querySelector(`#${pageName}-header`) as HTMLElement;
      let main = document.querySelector(`#${pageName}-main section`) as HTMLElement;
      let footer = document.querySelector(`#${pageName}-footer`) as HTMLElement;

      $(main).addClass('blurred');
      $(header).addClass('blurred');
      $(footer).addClass('blurred');
    }
  });
  $(`#${containerElement} button[id*="overlay"]`).on('click', () => {
    let header = document.querySelector(`#${pageName}-header`) as HTMLElement;
    let main = document.querySelector(`#${pageName}-main section`) as HTMLElement;
    let footer = document.querySelector(`#${pageName}-footer`) as HTMLElement;

    $(main).addClass('blurred');
    $(header).addClass('blurred');
    $(footer).addClass('blurred');
  });
  return console.log(`//--|🠊 Refreshed: jQuery <${blockName}> 🠈|--//`);
}
