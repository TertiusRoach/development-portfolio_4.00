//--|🠊 Form.verify.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Form.verify.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, useRef } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Functions 🠋|--//
import { closeLeftbar, reactChange, reactKeydown, reactPaste } from './Form_verify';
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
  let [submit, setSubmit] = useState(false); //--|🠈 Prevents Multiple Submissions 🠈|--//
  let [active, setActive] = useState(['', '', '', '']);
  let inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleVerify = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmit(true);
    try {
      console.log();
      let verifyCode = `${active[0]}${active[1]}${active[2]}${active[3]}`;
      let registerEmail = document.querySelector('.register-inputs #email') as HTMLInputElement;
      let registerPassword = document.querySelector('.register-inputs #password') as HTMLInputElement;

      const endpoint = retrieveEndpoint('verify', 'http://localhost:3000');
      const response = await axios.post(endpoint, {
        email: registerEmail.value,
        passwordHash: registerPassword.value,
        // activation: active,
        activation: verifyCode,
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

          // setTimeout(() => {
          //   alert(dialogue);
          // }, 250);
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
        {active.map((digit, index) => (
          <input
            required
            type="text"
            key={index}
            value={digit}
            maxLength={1}
            inputMode="text"
            pattern="[A-Za-z0-9]"
            className={`code-input digit-${index + 1}`}
            ref={(el) => (inputsRef.current[index] = el)}
            //---//
            onPaste={(e) => reactPaste(e, setActive, inputsRef)}
            onChange={(e) => reactChange(index, e.target.value, active, setActive, inputsRef)}
            onKeyDown={(e) => reactKeydown(index, e, active, inputsRef)}
          />
        ))}
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
