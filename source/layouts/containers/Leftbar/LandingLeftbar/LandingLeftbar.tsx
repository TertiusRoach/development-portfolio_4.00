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
  const stateName: 'expanded' | 'collapsed' = 'collapsed';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <aside className={`default-${blockName} collapsed`} id={`${pageName}-${blockName}`} style={{ zIndex: 2 }}>
      <h4 className="verify-label display-4">Verify</h4>
      <FormVerify info={info} />
    </aside>
  );
};
export default LandingLeftbar;
