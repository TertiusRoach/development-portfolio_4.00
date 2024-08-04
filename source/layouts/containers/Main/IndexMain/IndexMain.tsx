// IndexMain.tsx
//--|🠋 Frameworks 🠋|--//
import $ from 'jquery';
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
//--|🠉 Frameworks 🠉|--//
//--|🠋 Utilities 🠋|--//
import { getSVG } from '../../../../modules/utilities/getFile';
import { toggleAside } from '../../../../modules/utilities/toggleAside';
import { setButton } from '../../../../modules/utilities/setButton';
import scrollMain from '../../../../modules/utilities/scrollMain';
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
          <div style={{ height: '250px', width: width, background: 'green' }}>
            <h1 className="display-1">MORE ADD SPACE!!!</h1>
          </div>
        </>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: portrait)' }) && (
        <>
          <SectionHome blockName="main" labelName="home" stateType="active" info={info} />
          <div style={{ height: '250px', width: width }}>
            <h1 className="display-1">ADD SPACE</h1>
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
  $(`#${containerElement} section`)
    .on('click', function () {
      /*
    let button = this as HTMLButtonElement;
    let container = document.querySelector(`#${pageName}-main`) as HTMLElement;

    console.log(button.className.split('-')[1]);
    console.log(container);

    let scrollResult = scrollMain(container, button, `<${blockName}>`);
    
    if (scrollResult && scrollResult.scrollTop !== undefined) {
      $(container).animate({ scrollTop: `${scrollResult.scrollTop}px` }, 1000);
    }
    */
    })
    .on('mouseenter', function () {
      let enable = this.className.split('-')[1] as string;
      let active = document.querySelector(`#${pageName}-main section[id*='active']`) as HTMLButtonElement;
      let disable = active.className.split('-')[1];
      if (enable !== disable) {
        var disableSection = document.querySelector(`.${blockName}-${disable}`) as HTMLElement;
        var disableButton = document.querySelector(`[class*='default'] button[id*='active']`) as HTMLElement;
        disableSection.id = '';
        disableButton.id = `${pageName}-${disable}`;

        var enableSection = document.querySelector(`.${blockName}-${enable}`) as HTMLElement;
        var enableButton = document.querySelector(`[class*='default'] button[id*='${enable}']`) as HTMLElement;
        enableSection.id = `${blockName}-active`;
        enableButton.id = `${pageName}-${enable}-active`;
        console.log(enableButton);
      }
    });
  return console.log(`//--|🠊 Refreshed: jQuery <${blockName}> 🠈|--//`);
}
