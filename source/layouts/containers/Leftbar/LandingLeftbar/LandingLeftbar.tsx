// LandingLeftbar.tsx
//--|🠋 Frameworks 🠋|--//
import ReactDOM from 'react-dom/client';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
//--|🠉 Frameworks 🠉|--//
//--|🠋 Context 🠋|--//
import { EmailProvider } from '../../../../modules/utilities/context/EmailContext';
import { PasswordProvider } from '../../../../modules/utilities/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
import FormVerify from '../../../components/Form/verify/Form.verify';
//--|🠉 Components 🠉|--//
//--|🠋 Utilities 🠋|--//
import getResolution from '../../../../modules/scripts/getResolution';
import getOrientation from '../../../../modules/scripts/getOrientation';
import getIdentification from '../../../../modules/scripts/getIdentification';
//--|🠉 Utilities 🠉|--//

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

  useEffect(() => {
    // console.log(`//--|🠊 Initialized ${pageName}-${blockName} 🠈|--//`);
  }, [pageName, blockName]);

  return (
    <aside id={`${pageName}-${blockName}`} style={{ zIndex: 5 }} className={`default-${blockName} collapsed`}>
      <EmailProvider>
        <PasswordProvider>
          <FormVerify info={info} />
        </PasswordProvider>
      </EmailProvider>
    </aside>
  );
};
export default LandingLeftbar;
