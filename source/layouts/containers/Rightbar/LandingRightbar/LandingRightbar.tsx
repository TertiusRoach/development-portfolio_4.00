// LandingRightbar.tsx
//--|🠋 Frameworks 🠋|--//
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
//--|🠉 Frameworks 🠉|--//
//--|🠋 Context 🠋|--//
import { EmailProvider } from '../../../../modules/context/EmailContext';
import { PasswordProvider } from '../../../../modules/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Utilities 🠋|--//
import getResolution from '../../../../modules/utilities/bin/getResolution';
import getOrientation from '../../../../modules/utilities/bin/getOrientation';
import getIdentification from '../../../../modules/utilities/bin/getIdentification';
//--|🠉 Utilities 🠉|--//
//--|🠋 Components 🠋|--//
import FormReset from '../../../components/Form/reset/Form.reset';
//--|🠉 Components 🠉|--//
//--|🠋 Containers 🠋|--//

//--|🠉 Containers 🠉|--//
//--|🠋 Root 🠋|--//
import Resume from '../../../../resume';
//--|🠉 Root 🠉|--//

interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | 'landing' | string;
  };
}
const LandingRightbar: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'rightbar';
  const pageName = info.identification;

  const [currentView, setCurrentView] = useState<'default' | 'unverified' | 'authorized' | 'recovery'>('recovery');

  // Shared input states
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  // Registration-specific input states
  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');

  // Feedback messages for user interactions
  let [loginMessage, setLoginMessage] = useState('');
  let [registerMessage, setRegisterMessage] = useState('');
  let [passwordMessage, setPasswordMessage] = useState('');

  // Other UI states
  let [isSubmitting, setIsSubmitting] = useState(false); // Prevents multiple submissions
  let [loggedIn, setLoggedIn] = useState(false); // Tracks login state

  useEffect(() => {
    // console.log(`//--|🠊 Initialized ${pageName}-${blockName} 🠈|--//`);
  }, [pageName, blockName, currentView]);

  return (
    <aside id={`${pageName}-${blockName}`} style={{ zIndex: 5 }} className={`default-${blockName} collapsed`}>
      <EmailProvider>
        <PasswordProvider>
          <FormReset info={info} />
        </PasswordProvider>
      </EmailProvider>
    </aside>
  );
};
export default LandingRightbar;
