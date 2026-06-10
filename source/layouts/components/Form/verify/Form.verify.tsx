//--|🠊 Form.verify.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Form.verify.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, useRef } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../scripts/landing';
import { closeLeftbar, defineButton, getCode } from './Form_verify';
import { viewBlock, viewText, axiosError, retrieveEndpoint } from '../../../scripts/landing';
//--|🠉 Functions 🠉|--//
//--|🠋 Context 🠋|--//
import { useEmail } from '../../../../modules/context/EmailContext';
import { usePassword } from '../../../../modules/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
import FieldsetCode from '../../Fieldset/code/Fieldset.code';
import ButtonDefault from '../../Button/ARCHIVE/default/Button.default';
//--|🠉 Components 🠉|--//

interface InfoProps {
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}

const FormVerify: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'landing';
  const blockName = stripBrackets(info.blockName, '<>') as 'leftbar';

  //--|🠋 Local Input States 🠋|--//
  let { email, setEmail } = useEmail(); //--|🠈 Use the global email state 🠈|--//
  let { password, setPassword } = usePassword(); //--|🠈 Global Password State 🠈|--//

  //--|🠋 Action States 🠋|--//
  let [submit, setSubmit] = useState(false); //--|🠈 Prevents Multiple Submissions 🠈|--//

  const handleVerify = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmit(true);
    try {
      const endpoint = retrieveEndpoint('verify', 'http://localhost:3000');
      const response = await axios.post(endpoint, {
        email: email,
        passwordHash: password,
        activation: getCode('verify'),
      });
      const { view, data } = response.data;

      let dialogue: string;
      switch (view) {
        case 'login':
          dialogue = 'Account authorization complete.';

          /*
          let inputs = document.querySelectorAll('.code-fieldset input');
          inputs.forEach((input) => ((input as HTMLInputElement).value = ''));
          console.log(inputs);
          */
          /*
          let fieldset = document.querySelector('.code-fieldset') as HTMLElement;
          for (let i = 0; i < fieldset.children.length; i++) {
            let digit = fieldset.children[i] as HTMLInputElement;
            if (digit.tagName === 'INPUT') {
              digit.value = ''; // Clear input value
            }
          }
          */

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
          break;
        default:
          viewBlock('login');
          break;
      }
    } catch (error) {
      axiosError(error);
    } finally {
      setSubmit(false);
    }
  };

  useEffect(() => {}, [pageName, blockName]);

  let imageLink =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/91a25e4fa1bea9a24a757fad615acb2b7da41fc0/source/assets/svg-files/landing-page/key.svg';

  return (
    <form className="verify-form" onSubmit={(event) => handleVerify(event)}>
      <div className="verify-header">
        <ButtonDefault
          text={''}
          type="button"
          onClick={() => closeLeftbar(pageName)}
          style={defineButton('close', { pageName, blockName })}
        />
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
            disabled={submit}
            text={submit ? 'Verifying...' : 'Verify'}
            style={defineButton('verify', { pageName, blockName })}
          />
        </menu>
      </div>
    </form>
  );
};
export default FormVerify;
