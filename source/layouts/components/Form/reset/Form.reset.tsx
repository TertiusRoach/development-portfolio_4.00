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
import { viewBlock, viewText, viewPass, axiosError, retrieveEndpoint } from '../../../scripts/landing';
//--|🠉 Functions 🠉|--//
//--|🠋 Context 🠋|--//
import { useEmail } from '../../../../modules/context/EmailContext';
import { usePassword } from '../../../../modules/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
import FieldsetCode from '../../Fieldset/code/Fieldset.code';
import ButtonDefault from '../../Button/ARCHIVE/default/Button.default';
//--|🠉 Components 🠉|--//

//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../scripts/landing';
//--|🠉 Functions 🠉|--//
interface InfoProps {
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}

const FormReset: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'landing';
  const blockName = stripBrackets(info.blockName, '<>') as 'rightbar';

  //--|🠋 Local Input States 🠋|--//
  let { email, setEmail } = useEmail(); //--|🠈 Use the global email state 🠈|--//
  let { password, setPassword } = usePassword(); //--|🠈 Global Password State 🠈|--//

  //--|🠋 Action States 🠋|--//
  let [submit, setSubmit] = useState(false); //--|🠈 Prevents multiple submissions 🠈|--//

  const handleReset = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmit(true);
    try {
      const endpoint = retrieveEndpoint('reset', 'http://localhost:3000');
      const response = await axios.post(endpoint, {
        email: email,
        passwordNew: password,
        renewal: getCode('reset'),
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

  useEffect(() => {}, [pageName, blockName]);

  let imageLink =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c82ef634aba52a2b13811924580637ceaec1712b/source/assets/svg-files/landing-page/trash-restore.svg';

  return (
    <form className="reset-form" onSubmit={(event) => handleReset(event)}>
      <div className="reset-header">
        <ButtonDefault
          text={''}
          type="button"
          onClick={() => closeRightbar(pageName)}
          style={defineButton('close', { pageName, blockName })}
        />
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
          onClick={() => {
            let newPass = generatePassword(); //--|🠈 This generates a new password 🠈|--//
            setPassword(newPass); //--|🠈 Sets state to new password 🠈|--//
          }}
          style={defineButton('generate', { pageName, blockName })}
        />
        <ButtonDefault
          text={''}
          type="button"
          onClick={() => viewPass('reset')}
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
            disabled={submit}
            text={submit ? 'Resetting...' : 'Reset'}
            style={defineButton('reset', { pageName, blockName })}
          />
        </menu>
      </div>
    </form>
  );
};
export default FormReset;
