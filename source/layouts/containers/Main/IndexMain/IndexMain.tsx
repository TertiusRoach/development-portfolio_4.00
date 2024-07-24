// IndexMain.tsx
//--|🠋 Frameworks 🠋|--//
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
//--|🠉 Frameworks 🠉|--//
//--|🠋 Utilities 🠋|--//
import { getSVG } from '../../../../modules/utilities/getFile';
import showAside from '../../../../modules/utilities/showAside';
import setActive from '../../../../modules/utilities/setActive';
import getScroll from '../../../../modules/utilities/getScroll';
import showSection from '../../../../modules/utilities/showSection';
import getIdentification from '../../../../modules/utilities/getIdentification';
//--|🠉 Utilities 🠉|--//
//--|🠋 Components 🠋|--//
import ButtonFade from '../../../components/Button/fade/Button.fade';
import SectionHome from '../../../components/Section/home/Section.home';
import SectionSkills from '../../../components/Section/skills/Section.skills';
import SectionContact from '../../../components/Section/contact/Section.contact';
import SectionDefault from '../../../components/Section/default/Section.default';
//--|🠉 Components 🠉|--//
//--|🠋 Design 🠋|--//
//--|🠉 Design 🠉|--//
interface InfoProps {
  information: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
}
const IndexMain: React.FC<InfoProps> = ({ information }) => {
  const loadTimer = 1000;
  const blockName = 'main';
  const pageName = information.identification as String;

  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => jQueryMain(pageName, blockName), loadTimer);
    };

    window.addEventListener('resize', handleResize);
    setTimeout(() => jQueryMain(pageName, blockName), loadTimer);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  let mobile = useMediaQuery({ query: '(orientation: portrait)' });
  let desktop = useMediaQuery({ query: '(orientation: landscape)' });
  return (
    <main id="index-main" className="default-main" style={{ zIndex: 0 }}>
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {desktop && (
        <>
          <SectionHome blockName="main" labelName="home" stateType="active" info={information} />
          <SectionSkills blockName="main" labelName="skills" stateType="" info={information} />
          <SectionContact blockName="main" labelName="contact" stateType="" info={information} />
          {/* <SectionDefault blockName="main" labelName="default" stateType="" info={information} /> */}
        </>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {mobile && (
        <>
          <SectionHome blockName="main" labelName="home" stateType="active" info={information} />
          <SectionSkills blockName="main" labelName="skills" stateType="" info={information} />
          <SectionContact blockName="main" labelName="contact" stateType="" info={information} />
          {/* <SectionDefault blockName="main" labelName="default" stateType="" info={information} /> */}
        </>
      )}
      {/* <div style={{ height: '250px', background: 'green' }}>
        <h1 className="display-1">ADDSPACE!!!!</h1>
      </div>
      <div style={{ height: '500px', background: 'darkgreen' }}>
        <h1 className="display-1">MORE ADDSPACE!!!!</h1>
      </div> */}
    </main>
  );
  console.log('IndexMain Loaded');
};
export default IndexMain;

function jQueryMain(pageName: String, blockName: string) {
  const containerElement = `${pageName}-${blockName}`;
}
