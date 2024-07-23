// Section.skills.tsx
import './Section.skills.scss';
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useRef, useState } from 'react';

import getSVG from '../../../../utilities/getSVG';
import DivisionWorking from '../../Division/working/Division.working';
import getIdentification from '../../../../utilities/getIdentification';

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
  setTimeout(runJquery, 1000);
  let width = info.resolution.split('x')[0];
  let height = info.resolution.split('x')[1];
  let skills = getSVG('skills').dark as string;

  return (
    <section
      id={stateType === 'active' ? `${blockName}-active` : ''}
      className={`${blockName}-skills`}
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      <DivisionWorking align="center" text="Skills" info={info} icon={skills} />

      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: landscape)' }) && (
        <>{/* <DivisionWorking align="center" info={info} icon={working} /> */}</>
      )}

      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: portrait)' }) && (
        <>{/* <DivisionWorking align="center" info={info} icon={working} /> */}</>
      )}
    </section>
  );
};
export default SectionSkills;

function runJquery() {
  // console.log('Yay, jQuery!');
}
