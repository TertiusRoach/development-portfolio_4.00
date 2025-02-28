// Section.launch.tsx
//--|🠋 Styles 🠋|--//
import './Section.launch.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Context 🠋|--//
import { useEmail } from '../../../../modules/scripts/context/EmailContext';
import { usePassword } from '../../../../modules/scripts/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
//--|🠉 Components 🠉|--//
//--|🠋 Functions 🠋|--//
import { viewBlock, viewText, axiosError } from '../../../../landing';
//--|🠉 Functions 🠉|--//
interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | 'landing' | string;
  };
}
const SectionLaunch: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'header';
  const pageName = info.identification;

  //--|🠋 Local Input States 🠋|--//
  let { email, setEmail } = useEmail();
  let { password, setPassword } = usePassword();

  //--|🠋 Button Action States 🠋|--//
  let [submit, setSubmit] = useState(false);
  let [attempts, setAttempts] = useState(0);

  const handleLaunch = async (event: any) => {
    console.log(event);
    /* window.location.href = '/dashboard'; */
    /*
    event.preventDefault();
    setSubmit(true);
    try {
      const route = 'login';
      const response = await axios.post(`http://localhost:3000/users/${route}`, {
        email,
        passwordHash: password,
      });
      const { view, data } = response.data;

      let dialogue: string;
      switch (view) {
        case 'launch':
          dialogue = 'Login successful, please select the application you want to use.';

          viewBlock('launch');
          // window.location.href = '/dashboard';

          setTimeout(() => {
            alert(dialogue);
          }, 250);
          break;
        case 'register':
          dialogue = 'No account found with this email. Would you like to register?';
          viewBlock('register');
          break;
        case 'password':
          let messages: string[] = [
            'You have three attempts left.',
            'You have two attempts left.',
            'You have one attempt left.',
          ];
          if (attempts < 3) {
            dialogue = messages[attempts];

            setAttempts(attempts + 1);
            viewText('login', dialogue);
          } else {
            dialogue = 'Would you like to change your password?';
            setAttempts(0);
            viewBlock('password');
            viewText('password', dialogue);

            setTimeout(() => {
              dialogue = 'Sign in to access your account.';
              viewText('login', dialogue);
            }, 250);
          }
          break;
        case 'verify':
          dialogue = 'Please verify your account before signing in.';

          viewBlock('verify');
          viewText('verify', dialogue);
          break;
        case 'blocked':
          dialogue = `Your account has been ${view} until ${data.restrictionExpiresAt}.`;

          viewBlock('blocked');

          setTimeout(() => {
            alert(dialogue);
          }, 250);
          break;
      }
    } catch (error) {
      axiosError(error);
    } finally {
      setSubmit(false);
    }
    */
  };

  useEffect(() => {}, [pageName, blockName]);

  return (
    <section className="launch-section" onSubmit={(event) => handleLaunch(event)}>
      <div id="landing-overtime">Track a Day</div>
      <div id="landing-ticketing">Log a Ticket</div>
      <div id="landing-hyperlink">Find a Link</div>
    </section>
  );
};
export default SectionLaunch;
