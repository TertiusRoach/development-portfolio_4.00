// LandingMain.tsx
//--|🠋 Frameworks 🠋|--//
import ReactDOM from 'react-dom/client';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
//--|🠉 Frameworks 🠉|--//
//--|🠋 Modules 🠋|--//
import { EmailProvider } from '../../../../modules/context/EmailContext';
//--|🠉 Modules 🠉|--//
//--|🠋 Utilities 🠋|--//
import getResolution from '../../../../modules/utilities/getResolution';
import getOrientation from '../../../../modules/utilities/getOrientation';
import getIdentification from '../../../../modules/utilities/getIdentification';
//--|🠉 Utilities 🠉|--//
//--|🠋 Components 🠋|--//
import FormLogin from '../../../components/Form/login/Form.login';
import FormRegister from '../../../components/Form/register/Form.register';
import FormPassword from '../../../components/Form/password/Form.password';
//--|🠉 Components 🠉|--//
//--|🠋 Containers 🠋|--//
import ResumeMain from '../ResumeMain/ResumeMain';
import ResumeHeader from '../../Header/ResumeHeader/ResumeHeader';
import ResumeFooter from '../../Footer/ResumeFooter/ResumeFooter';
import ResumeOverlay from '../../Overlay/ResumeOverlay/ResumeOverlay';
import ResumeLeftbar from '../../Leftbar/ResumeLeftbar/ResumeLeftbar';
import ResumeRightbar from '../../Rightbar/ResumeRightbar/ResumeRightbar';
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
const LandingMain: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'main';
  const pageName = info.identification;

  useEffect(() => {}, [pageName, blockName]);

  return (
    <main id={`${pageName}-${blockName}`} style={{ zIndex: 3 }} className={`default-${blockName}`}>
      <EmailProvider>
        <div className="landing-branding" style={{ zIndex: 1 }}>
          <img
            src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d11394a960db3ea88c21e28aa8035c3f40bdad7c/source/assets/svg-files/archive-images/tertius-roach/signature-icon/primary-light.svg"
            alt="Login Logo"
          />
        </div>
        <div className="landing-carousel" style={{ zIndex: 0 }}>
          <section className="register-section">
            <div className="register-container">
              <FormRegister info={info} />
            </div>
          </section>
          <section className="login-section">
            <div className="login-container">
              <FormLogin info={info} />
            </div>
          </section>
          <section className="password-section">
            <div className="password-container">
              <FormPassword info={info} />
            </div>
          </section>
        </div>
      </EmailProvider>
    </main>
  );
};
export default LandingMain;

export const viewCarousel = (page: 'register' | 'login' | 'password') => {
  let carouselContainer = document.querySelector('.landing-carousel') as HTMLElement;
  carouselContainer.style.transform = {
    register: 'translateX(0vw)',
    login: 'translateX(-100vw)',
    password: 'translateX(-200vw)',
  }[page];
};
export const toggleText = (element: string, dialogue: string) => {
  let tagText = document.querySelector(`${element}`)?.firstChild as HTMLElement;
  tagText.innerText = dialogue;
};
export const toggleAside = (element: string, toggle: 'show' | 'hide') => {
  let sidebar = document.querySelector(element) as HTMLElement;
  switch (toggle) {
    case 'show':
      sidebar.classList.toggle('collapsed', false);
      sidebar.classList.toggle('expanded', true); //--|🠈 Expand Sidebar 🠈|--//
      break;
    case 'hide':
      sidebar.classList.toggle('expanded', false);
      sidebar.classList.toggle('collapsed', true); //--|🠈 Collapse Sidebar 🠈|--//
      break;
  }
};
export const refreshInputs = (page: 'register' | 'login' | 'password') => {
  switch (page) {
    case 'register':
      break;
    case 'login':
      break;
    case 'password':
      break;
  }
};

export async function handleData(
  /* setSubmit: React.Dispatch<React.SetStateAction<boolean>>, */
  status: string,
  action: string
) {
  /*
    console.log(`Status: ${status}`);
    console.log(`Action: ${action}`);
  */
  let dialogue: string; //--|🠈 Message for the User 🠈|--//
  //--|🠋 Step 4: Validate User Status 🠋|--//
  if (status === 'pending') {
    //--|🠉 If the user email exists inside the 'pending' collection 🠈|--//
    //--|🠋 Step 4.1: Perform Desired Action 🠋|--//
    switch (action) {
      case 'created': //--|🠈 If a new user is added/registered to the 'pending' collection the show the verify page. 🠈|--//
        //--|🠊 01. created: Form.register 🠈|--//
        //--|🠊 status(201): Accepted 🠈|--//
        dialogue = 'Your account has been created. Please verify your email to activate it.';
        alert(dialogue);
        break;
      case 'mismatch': //--|🠈 If the "activationCode" entered by the user doesn't match the "email" associated with the document. 🠈|--//
        //--|🠊 02. mismatch: Form.verify 🠈|--//
        //--|🠊 status(400): Bad Request 🠈|--//
        dialogue = 'The verification code does not match our records. Please try again.';
        break;
      //--|🠋 Checklist 🠋|--//
      case 'unverified': //--|🠈 If the user requests a password, registers or logs in without having validated the account first. 🠈|--//
        //--|🠊 03. unverified: Form.register + Form.login + Form.password 🠈|--//
        //--|🠊 status(403): Forbidden 🠈|--//
        dialogue = 'Your account is not verified. Please check your email for the activation link.';
        break;
      case 'halted': //--|🠈 If the user failed to enter the "activationCode" twelve times, move the user to the 'blocked' collection. 🠈|--//
        //--|🠊 04. halted: Form.verify 🠈|--//
        //--|🠊 status(403): Forbidden 🠈|--//
        dialogue = 'Too many incorrect activation attempts. Your account has been temporarily blocked.';
        break;
    }
  } else if (status === 'enabled') {
    //--|🠉 If the user email exists inside the 'enabled' collection 🠈|--//
    //--|🠋 Step 4.2: Perform Desired Action 🠋|--//
    switch (action) {
      case 'authorized': //--|🠈 If the "passwordHash" matches the "email" entered by the user. 🠈|--//
        //--|🠊 05. authorized: Form.login 🠈|--//
        //--|🠊 status(200): OK 🠈|--//
        dialogue = 'Login successful. Redirecting to your dashboard...';
        break;
      case 'incorrect': //--|🠈 If the "passwordHash" doesn't match the "email" entered by the user. 🠈|--//
        //--|🠊 06. incorrect: Form.login 🠈|--//
        //--|🠊 status(401): Unauthorized 🠈|--//
        dialogue = 'Incorrect password. Please try again or reset your password.';
        break;
      case 'remembered': //--|🠈 If the newly entered password matches the current "passwordHash". 🠈|--//
        //--|🠊 07. remembered: Form.password 🠈|--//
        //--|🠊 status(400): Bad Request 🠈|--//
        dialogue = 'New password matches the old one. Please choose a different password.';
        break;
      case 'renewed': //--|🠈 If the "passwordCode" matches the input of the user and a new password has been entered. 🠈|--//
        //--|🠊 08. renewed: Form.reset 🠈|--//
        //--|🠊 status(200): OK 🠈|--//
        dialogue = 'Your password has been successfully reset.';
        break;
      case 'suspended': //--|🠈 If the user requested a new "passwordCode" six times without using it, move the user to 'blocked'. 🠈|--//
        //--|🠊 09. suspended: Form.login + Form.password 🠈|--//
        //--|🠊 status(403): Forbidden 🠈|--//
        dialogue = 'Too many password reset requests. Your account has been temporarily blocked.';
        break;
    }
  } else if (status === 'blocked') {
    //--|🠉 If the user email exists inside the 'blocked' collection 🠈|--//
    //--|🠋 Step 4.3: Perform Desired Action 🠋|--//
    switch (action) {
      case 'recovered': //--|🠈 Move the user to 'pending' if "updatedAt" is older than seven days. 🠈|--//
        //--|🠊 10. recovered: Form.register + Form.login + Form.password 🠈|--//
        //--|🠊 status(202): Accepted 🠈|--//
        dialogue = 'Your account has been reinstated. Please verify your email to continue.';
        break;
      case 'declined': //--|🠈 Return this if the user is in the 'blocked' collection and "updatedAt" is less than seven days. 🠈|--//
        //--|🠊 11. declined: Form.register + Form.login + Form.password 🠈|--//
        //--|🠊 status(403): Forbidden 🠈|--//
        dialogue = 'Your account is blocked. Please wait before attempting to access it again.';
        break;
    }
  } else if (status === 'missing') {
    //--|🠉 If the user email doesn't exist inside 'pending', 'enabled', or 'blocked' collections 🠈|--//
    //--|🠋 Step 4.4: Perform Desired Action 🠋|--//
    switch (action) {
      case 'register': //--|🠈 If the user interacts with any page and "email" isn't in any database then return this. 🠈|--//
        //--|🠊 12. register: Form.login + Form.password 🠈|--//
        //--|🠊 status(404): Not Found 🠈|--//
        dialogue = 'No account found with this email. Would you like to register?';

        viewCarousel('register');
        toggleText('.register-text', dialogue);
        break;
    }
  } else {
    //--|🠊 status(500): Internal Server Error 🠈|--//
    dialogue = 'An unexpected error occurred. Please try again later.';
  }

  /*
  try {
  } catch (error) {
    //--|🠊 Handle Login Errors 🠈|--//
    alert('Axios ERROR!');
    
    const axiosError = error as AxiosError;
    if (axiosError.response?.status === 404) {
      dialogue = 'Server not found. Please try again later.';
    } else if (axiosError.response?.status === 401) {
      dialogue = 'Unauthorized access. Please check your credentials and try again.';
    } else {
      dialogue = 'A network error occurred. Please check your connection.';
    }
            
      if (axios.isAxiosError(error)) {
        // setError(error.response?.data?.message || 'Registration failed');
      } else {
        // setError('An unexpected error occurred');
      }
      
  } finally {
    setSubmit(false); //--|🠈 Reset Submission State 🠈|--//
  }
  
  } finally {
    setSubmit(false); //--|🠈 Disable button during submission 🠈|--//
  }
  */
}
