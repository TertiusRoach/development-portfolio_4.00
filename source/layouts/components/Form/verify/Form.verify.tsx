//--|🠊 Form.verify.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Form.verify.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Functions 🠋|--//
import { viewBlock, viewText, axiosError, retrieveEndpoint } from '../../../../landing';
//--|🠉 Functions 🠉|--//

interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | 'landing' | string;
  };
}
const FormVerify: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'main';
  const pageName = info.identification;
  //--|🠋 Action States 🠋|--//
  let [active, setActive] = useState('');
  let [submit, setSubmit] = useState(false); //--|🠈 Prevents Multiple Submissions 🠈|--//

  const handleVerify = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmit(true);
    try {
      let registerEmail = document.querySelector('.register-inputs #email') as HTMLInputElement;
      let registerPassword = document.querySelector('.register-inputs #password') as HTMLInputElement;
      const route = 'verify';
      const response = await axios.post(`http://localhost:3000/users/${route}`, {
        email: registerEmail.value,
        passwordHash: registerPassword.value,
        activation: active,
      });
      const { view, data } = response.data;

      let dialogue: string;
      switch (view) {
        case 'login':
          dialogue = 'Account authorization complete.';

          viewBlock('login');
          viewText('login', dialogue);
          break;
        case 'verify':
          let messages: string[] = [
            '',
            'You have three attempts left.',
            'You have two attempts left.',
            'You have one attempt left.',
          ];
          let attempts: number = data.activationAttempts;
          dialogue = messages[attempts] || '';

          viewText('verify', dialogue);
          break;
        case 'blocked':
          dialogue = `Your account has been ${view} until ${data.restrictionExpiresAt}.`;

          viewBlock('blocked');

          /*
          setTimeout(() => {
            alert(dialogue);
          }, 250);
          */
          break;
      }
    } catch (error) {
      axiosError(error);
    } finally {
      setSubmit(false);
    }
  };

  useEffect(() => {
    closeLeftbar(pageName);
  }, [pageName, blockName]);

  return (
    <form className="verify-form" onSubmit={(event) => handleVerify(event)}>
      <div className="verify-header">
        <div className="verify-label">
          <h6 className="display-6">Verify</h6>
        </div>
        <button className="verify-close" type="button">
          <img
            src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d96e3df748dac85a20c559b47659c1a3763a5fe/source/assets/svg-files/index-page/close/close-light.svg"
            alt=""
          />
        </button>

        <div className="verify-text">
          <h4>Check your email for verification code.</h4>
        </div>
      </div>
      <div className="verify-inputs">
        <input
          required
          type="text"
          id="verify-code"
          name="Verification Code"
          placeholder="//--|🠊 Verification Code 🠈|--//"
          // --- //
          value={active}
          onChange={(event) => setActive(event.target.value)}
        />
      </div>
      <div className="verify-footer">
        <menu className="verify-action">
          <button className="verify-button" type="submit" disabled={submit}>
            {submit ? 'Verifying...' : 'Verify'}
          </button>
        </menu>
      </div>
    </form>
  );
};
export default FormVerify;

const closeLeftbar = (pageName: 'landing' | string) => {
  let closeVerify = document.querySelector('.verify-close') as HTMLElement;
  let leftbar = document.querySelector(`#${pageName}-leftbar`) as HTMLElement;

  if (closeVerify && leftbar) {
    var closeClick = () => {
      leftbar.classList.remove('expanded'); // Remove '.expanded'
      leftbar.classList.toggle('collapsed'); // Toggle '.collapsed'
    };

    closeVerify.addEventListener('click', closeClick);
    return () => closeVerify.removeEventListener('click', closeClick);
  }
};
