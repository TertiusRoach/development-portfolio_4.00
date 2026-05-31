//--|🠊 Form.password.tsx 🠈|--//
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../scripts/landing';
//--|🠉 Functions 🠉|--//
//--|🠋 Styles 🠋|--//
import './Form.password.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Functions 🠋|--//
import { showDemos, defineButton } from './Form_password';
import { viewBlock, viewText, axiosError, retrieveEndpoint } from '../../../scripts/landing';
//--|🠉 Functions 🠉|--//
//--|🠋 Context 🠋|--//
import { useEmail } from '../../../../modules/context/EmailContext';
import { usePassword } from '../../../../modules/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
import ButtonDefault from '../../Button/ARCHIVE/default/Button.default';
//--|🠉 Components 🠉|--//

interface InfoProps {
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}
const FormPassword: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'landing';
  const blockName = stripBrackets(info.blockName, '<>') as 'main';
  /*
  const blockName = 'main';
  const pageName = info.identification;
  */

  //--|🠋 Local Input States 🠋|--//
  let { email, setEmail } = useEmail(); //--|🠈 Use the global email state 🠈|--//
  let { password, setPassword } = usePassword(); //--|🠈 Global Password State 🠈|--//

  //--|🠋 Button States 🠋|--//
  let [submit, setSubmit] = useState(false); //--|🠈 Prevents Multiple Submissions 🠈|--//

  const handlePassword = async (event: React.FormEvent) => {
    event.preventDefault(); //--|🠈 Prevents Refresh 🠈|--//
    setSubmit(true);
    try {
      const endpoint = retrieveEndpoint('password', 'http://localhost:3000');
      const response = await axios.post(endpoint, {
        email: email,
        passwordHash: password,
      });
      const { view, data } = response.data;

      let dialogue: string;
      switch (view) {
        case 'register':
          dialogue = "You cannot change the password for an account that doesn't exist.";

          viewBlock('register');
          viewText('register', dialogue);
          break;
        case 'login':
          dialogue = 'Account recovered. Please log in and check your email to authorize.';

          viewBlock('login');
          viewText('login', dialogue);
          break;
        case 'verify':
          dialogue = 'Please verify your account before requesting a password change.';

          viewBlock('verify');
          viewText('verify', dialogue);
          break;
        case 'reset':
          dialogue = 'Please enter the recovery code sent to your email, followed by the new password.';

          viewBlock('reset');
          viewText('reset', dialogue);
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

  useEffect(() => {}, [pageName, blockName]);

  let imageLink =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/95cb0b63850941f4de8b0d021e44f529819fe627/source/assets/svg-files/landing-page/user-lock.svg';

  return (
    <form className="password-form" onSubmit={(event) => handlePassword(event)}>
      <div className="password-header">
        {/* <button className="password-close" type="button">
          <img
            src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d96e3df748dac85a20c559b47659c1a3763a5fe/source/assets/svg-files/index-page/close/close-light.svg"
            alt=""
          />
        </button> */}
        <div className="password-text">
          <h4>You can update your password here.</h4>
        </div>
        <div className="password-icon">
          <img style={{ maskImage: `url(${imageLink})`, WebkitMaskImage: `url(${imageLink})` }} />
        </div>
      </div>
      <div className="password-inputs">
        <input
          required
          id="email"
          name="Email"
          type="email"
          placeholder="Email Address"
          // --- //
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="password-footer">
        <menu className="password-action">
          <ButtonDefault
            type="submit"
            text={submit ? 'Changing...' : 'Change'}
            style={defineButton('password', { pageName, blockName })}
          />
        </menu>
        <nav id="password-buttons">
          <ButtonDefault
            type="button"
            text={'Enter Account'}
            onClick={() => viewBlock('login')}
            style={defineButton('login', { pageName, blockName })}
          />
          <ButtonDefault
            type="button"
            text={'Create Account'}
            onClick={() => viewBlock('register')}
            style={defineButton('register', { pageName, blockName })}
          />
        </nav>
      </div>
    </form>
  );
};
export default FormPassword;
