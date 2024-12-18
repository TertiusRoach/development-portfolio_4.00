// LandingLeftbar.tsx
//--|🠋 Frameworks 🠋|--//
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
//--|🠉 Frameworks 🠉|--//
//--|🠋 Utilities 🠋|--//
import getResolution from '../../../../modules/utilities/getResolution';
import getOrientation from '../../../../modules/utilities/getOrientation';
import getIdentification from '../../../../modules/utilities/getIdentification';
//--|🠉 Utilities 🠉|--//
//--|🠋 Components 🠋|--//
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
const LandingLeftbar: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'leftbar';
  const pageName = info.identification;

  const [currentView, setCurrentView] = useState<'unverified' | 'authorized' | 'recovery'>();

  // Shared input states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Registration-specific input states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // Feedback messages for user interactions
  const [loginMessage, setLoginMessage] = useState('');
  const [registerMessage, setRegisterMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');

  // Other UI states
  const [isSubmitting, setIsSubmitting] = useState(false); // Prevents multiple submissions
  const [loggedIn, setLoggedIn] = useState(false); // Tracks login state
  useEffect(() => {
    console.log(`//--|🠊 Initialized ${pageName}-${blockName} 🠈|--//`);
  }, [pageName, blockName, currentView]);

  return (
    <aside id={`${pageName}-${blockName}`} style={{ zIndex: 5 }} className={`default-${blockName} collapsed`}>
      {/* <div className="landing-carousel">
        <section className="register-section">
          <div className="register-container">{renderForm('register')}</div>
        </section>
        <section className="login-section">
          <div className="login-container">{renderForm('login')}</div>
        </section>
        <section className="password-section">
          <div className="password-container">{renderForm('password')}</div>
        </section>
      </div> */}
    </aside>
  );
};
export default LandingLeftbar;
