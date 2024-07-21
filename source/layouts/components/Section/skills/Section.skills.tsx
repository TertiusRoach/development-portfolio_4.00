// Section.skills.tsx
import React from 'react';
import './Section.skills.scss';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';
import { getIdentification, getSVG } from '../../../../scripts';

import DivisionWorking from '../../Division/working/Division.working';
interface SkillsProps {
  state?: 'active';
  info: {
    resolution: string;
    orientation: string;
    identification: string;
  };
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar';
}
const SectionSkills: React.FC<SkillsProps> = ({ info, block, state }) => {
  setTimeout(runJquery, 1000);
  let width = info.resolution.split('x')[0];
  let height = info.resolution.split('x')[1];
  let skills = getSVG('skills').dark as string;

  return (
    <section
      id={state === 'active' ? `${block}-active` : ''}
      className={`${block}-skills`}
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
