//--|🠊 Form.reset.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Form.reset.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, useRef } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Functions 🠋|--//
import { closeRightbar, defineButton, generatePassword, getCode } from './Form_reset';
import { viewBlock, viewText, viewWord, axiosError, retrieveEndpoint } from '../../../../landing';
//--|🠉 Functions 🠉|--//
//--|🠋 Context 🠋|--//
import { useEmail } from '../../../../modules/context/EmailContext';
import { usePassword } from '../../../../modules/context/PasswordContext';
//--|🠉 Context 🠉|--//
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
const FormReset: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'rightbar';
  const pageName = info.identification;
  const imageLink =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c82ef634aba52a2b13811924580637ceaec1712b/source/assets/svg-files/landing-page/trash-restore.svg';

  //--|🠋 Local Input States 🠋|--//
  let { email, setEmail } = useEmail(); //--|🠈 Use the global email state 🠈|--//
  let { password, setPassword } = usePassword(); //--|🠈 Global Password State 🠈|--//

  //--|🠋 Action States 🠋|--//
  let [renew, setRenew] = useState('');
  let [active, setActive] = useState(['', '', '', '']);
  let [submit, setSubmit] = useState(false); //--|🠈 Prevents multiple submissions 🠈|--//

  const handleReset = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmit(true);
    try {
      let resetCode = getCode('reset');
      let passwordEmail = document.querySelector('.password-inputs #email') as HTMLInputElement;

      const endpoint = retrieveEndpoint('reset', 'http://localhost:3000');
      const response = await axios.post(endpoint, {
        email: passwordEmail.value,
        passwordNew: password,
        renewal: resetCode,
      });
      const { view, data } = response.data;

      let dialogue: string;
      switch (view) {
        case 'login':
          dialogue = 'Your password has been successfully reset.';

          viewBlock('login');
          viewText('login', dialogue);
          break;
        case 'reset':
          dialogue = 'Invalid recovery code. Check your email.';

          viewBlock('reset');
          viewText('reset', dialogue);
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
    closeRightbar(pageName);
  }, [pageName, blockName]);

  return (
    <form className="reset-form" onSubmit={(event) => handleReset(event)}>
      <div className="reset-header">
        <button className="reset-close" type="button">
          <img
            src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d96e3df748dac85a20c559b47659c1a3763a5fe/source/assets/svg-files/index-page/close/close-light.svg"
            alt=""
          />
        </button>
        <div className="reset-text">
          <h4>Reset your password.</h4>
        </div>
        <div className="reset-icon">
          <img style={{ maskImage: `url(${imageLink})`, WebkitMaskImage: `url(${imageLink})` }} />
        </div>
      </div>
      <div className="reset-inputs">
        <FieldsetCode info={info} />
        <ButtonDefault
          text={''}
          type="button"
          onClick={() => generatePassword()}
          style={defineButton('generate', { pageName, blockName })}
        />
        <ButtonDefault
          text={''}
          type="button"
          onClick={() => viewWord('reset')}
          style={defineButton('observe', { pageName, blockName })}
        />
        <input
          required
          id="password"
          type="password"
          name="Password"
          placeholder="New Password"
          // --- //
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="reset-footer">
        <menu className="reset-action">
          <ButtonDefault
            type="submit"
            text={submit ? 'Resetting...' : 'Reset'}
            style={defineButton('reset', { pageName, blockName })}
            disabled={submit}
          />
          {/* <button className="reset-button" type="submit" disabled={submit}>
            
          </button> */}
        </menu>
      </div>
    </form>
  );
};
export default FormReset;

{
  /* <input
          required
          type="text"
          id="reset-code"
          name="Recovery Code"
          placeholder="|🠊 Recovery Code 🠈|"
          // --- //
          value={renew}
          onChange={(event) => setRenew(event.target.value)}
        /> */
}
