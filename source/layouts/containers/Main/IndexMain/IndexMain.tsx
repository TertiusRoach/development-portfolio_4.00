// IndexMain.tsx
//--|🠋 Frameworks 🠋|--//
import $ from 'jquery';
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
//--|🠉 Frameworks 🠉|--//
//--|🠋 Utilities 🠋|--//
import { getSVG } from '../../../../modules/utilities/getFile';
import getScroll from '../../../../modules/utilities/getScroll';
import { toggleAside } from '../../../../modules/utilities/toggleAside';
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
interface MainProps {
  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
}
const IndexMain: React.FC<MainProps> = ({ info }) => {
  const jQueryTimer = 1000;
  const blockName = 'main';
  const pageName = info.identification as String;
  const [isBlurred, setIsBlurred] = useState(false);
  let width = info.resolution.split('x')[0] as string;
  let height = info.resolution.split('x')[1] as string;
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
  return (
    <main id="index-main" className={`default-main ${isBlurred ? 'blurred' : ''}`} style={{ zIndex: 0 }}>
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: landscape)' }) && (
        <>
          <SectionHome blockName="main" labelName="home" stateType="active" info={info} />
          <div style={{ height: '500px', width: width, background: 'green' }}>
            <h1 className="display-1">add Space</h1>
          </div>
          <SectionSkills blockName="main" labelName="skills" stateType="" info={info} />
          <SectionContact blockName="main" labelName="contact" stateType="" info={info} />
        </>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: portrait)' }) && (
        <>
          <SectionHome blockName="main" labelName="home" stateType="active" info={info} />
          <div style={{ height: '250px', width: width }}>
            <h1 className="display-1">ADD SPACE!</h1>
          </div>
          <SectionSkills blockName="main" labelName="skills" stateType="" info={info} />
          <SectionContact blockName="main" labelName="contact" stateType="" info={info} />
        </>
      )}
    </main>
  );
};
export default IndexMain;
function jQueryMain(pageName: String, blockName: string) {
  const containerElement = `${pageName}-${blockName}` as String;
  /*
  $(`#${containerElement} section.main-home #${pageName}-contact`).on('click', function () {
    let button = this as HTMLButtonElement;
    let container = document.querySelector(`#${pageName}-main`) as HTMLElement;

    let scrollResult = getScroll(container, button);

    if (scrollResult && scrollResult.scrollTop !== undefined) {
      $(container).animate({ scrollTop: `${scrollResult.scrollTop}px` }, 1000);
    }
  });
  */
  console.log(`//--|🠊 Refreshed: jQuery <${blockName}> 🠈|--//`);
}
