// Section.skills.tsx
import './Section.skills.scss';
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useRef, useState } from 'react';

import getSVG from '../../../../modules/utilities/getSVG';
import DivisionWorking from '../../Division/working/Division.working';
import getIdentification from '../../../../modules/utilities/getIdentification';

interface SkillsProps {
  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
  labelName: 'skills';
  stateType: 'active' | '';
  blockName: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
}
const SectionSkills: React.FC<SkillsProps> = ({ info, labelName, blockName, stateType }) => {
  const loadTimer = 1000;
  const width = info.resolution.split('x')[0];
  const height = info.resolution.split('x')[1];
  const pageName: String = getIdentification();
  useEffect(() => {
    let handleResize = () => {
      setTimeout(() => jQuerySkills(pageName, blockName), loadTimer);
    };

    window.addEventListener('resize', handleResize);
    setTimeout(() => jQuerySkills(pageName, blockName), loadTimer);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let mobileDevice: boolean = useMediaQuery({ query: '(orientation: portrait)' });
  let desktopDevice: boolean = useMediaQuery({ query: '(orientation: landscape)' });

  return (
    <section
      className={`${blockName}-${labelName}`}
      id={stateType === 'active' ? `${blockName}-active` : ''}
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {desktopDevice && (
        <>
          <div id={`${labelName}-foreground`} style={{ zIndex: 2 }}>
            <DivisionWorking
              info={info}
              align="top-left"
              text="Skills <section>"
              icon={getSVG('skills') as { dark: string; medium: string; light: string }}
            />
          </div>
          <div id={`${labelName}-midground`} style={{ zIndex: 1 }}></div>
          <div id={`${labelName}-background`} style={{ zIndex: 0 }}></div>
        </>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {mobileDevice && (
        <>
          <div id={`${labelName}-foreground`} style={{ zIndex: 2 }}>
            <DivisionWorking
              info={info}
              align="bottom-right"
              text="Skills <section>"
              icon={getSVG('skills') as { dark: string; medium: string; light: string }}
            />
          </div>
          <div id={`${labelName}-midground`} style={{ zIndex: 1 }}></div>
          <div id={`${labelName}-background`} style={{ zIndex: 0 }}></div>
        </>
      )}
    </section>
  );
};
export default SectionSkills;

function jQuerySkills(pageName: String, blockName: string) {
  const layoutsContainer = `${pageName}-${blockName}`;
  console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
