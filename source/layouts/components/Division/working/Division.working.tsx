// Section.home.tsx
import React from 'react';
import './Division.working.scss';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';

import DivisionWorking from '../../Division/working/Division.working';

interface HomeProps {
  info: {
    resolution: string;
    orientation: string;
    identification: string;
  };
  icon: string;
}

const SectionHome: React.FC<HomeProps> = ({ icon }) => {
  console.log(icon);

  return (
    <div>
      <img src={icon} alt="Working" />

      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: landscape)' }) && <></>}

      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: portrait)' }) && <></>}
    </div>
  );
};

export default SectionHome;
