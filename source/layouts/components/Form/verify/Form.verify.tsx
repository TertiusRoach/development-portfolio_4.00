//--|🠊 Form.verify.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Form.verify.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, useRef } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Functions 🠋|--//
import { closeLeftbar, defineButton, getCode } from './Form_verify';
import { viewBlock, viewText, axiosError, retrieveEndpoint } from '../../../../landing';
//--|🠉 Functions 🠉|--//
//--|🠋 Components 🠋|--//
import FieldsetCode from '../../Fieldset/code/Fieldset.code';
import ButtonDefault from '../../Button/default/Button.default';
//--|🠉 Components 🠉|--//

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
  const imageLink =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/91a25e4fa1bea9a24a757fad615acb2b7da41fc0/source/assets/svg-files/landing-page/key.svg';

  //--|🠋 Action States 🠋|--//
  let [submit, setSubmit] = useState(false); //--|🠈 Prevents Multiple Submissions 🠈|--//
  let [active, setActive] = useState(['', '', '', '']);
  // let inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleVerify = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmit(true);
    try {
      let verifyCode = getCode('verify');
      let registerEmail = document.querySelector('.register-inputs #email') as HTMLInputElement;
      let registerPassword = document.querySelector('.register-inputs #password') as HTMLInputElement;

      const endpoint = retrieveEndpoint('verify', 'http://localhost:3000');
      const response = await axios.post(endpoint, {
        activation: verifyCode,
        email: registerEmail.value,
        passwordHash: registerPassword.value,
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
        <button className="verify-close" type="button">
          <img
            src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d96e3df748dac85a20c559b47659c1a3763a5fe/source/assets/svg-files/index-page/close/close-light.svg"
            alt=""
          />
        </button>
        <div className="verify-text">
          <h4>Check your email for verification code.</h4>
        </div>
        <div className="verify-icon">
          <img style={{ maskImage: `url(${imageLink})`, WebkitMaskImage: `url(${imageLink})` }} />
        </div>
      </div>
      <div className="verify-inputs">
        <FieldsetCode info={info} />
      </div>
      <div className="verify-footer">
        <menu className="verify-action">
          <ButtonDefault
            type="submit"
            text={submit ? 'Verifying...' : 'Verify'}
            style={defineButton('verify', { pageName, blockName })}
            disabled={submit}
          />
        </menu>
      </div>
    </form>
  );
};
export default FormVerify;
