//--|🠊 LandingLeftbar.tsx 🠈|--//
//--|🠋 Frameworks 🠋|--//
import ReactDOM from 'react-dom/client';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
//--|🠉 Frameworks 🠉|--//
//--|🠋 Components 🠋|--//
import FormVerify from '../../../components/Form/verify/Form.verify';
//--|🠉 Components 🠉|--//

interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | 'landing' | string;
  };
}
const LandingLeftbar: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'leftbar';
  const pageName = info.identification;

  useEffect(() => {}, [pageName, blockName]);

  return (
    <aside id={`${pageName}-${blockName}`} style={{ zIndex: 2 }} className={`default-${blockName} collapsed`}>
      <FormVerify info={info} />
    </aside>
  );
};
export default LandingLeftbar;
