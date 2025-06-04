//--|🠊 Form.register.tsx 🠈|--//
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../scripts/landing';
//--|🠉 Functions 🠉|--//
//--|🠋 Styles 🠋|--//
import './Form.register.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Functions 🠋|--//
import { showDemos, defineButton, generatePassword } from './Form_register';
import { viewBlock, viewText, viewPass, retrieveEndpoint, axiosError } from '../../../pages/landing';
//--|🠉 Functions 🠉|--//
//--|🠋 Context 🠋|--//
import { useEmail } from '../../../../modules/context/EmailContext';
import { usePassword } from '../../../../modules/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
import ButtonDefault from '../../Button/default/Button.default';
//--|🠉 Components 🠉|--//

interface InfoProps {
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}
const FormRegister: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'landing';
  const blockName = stripBrackets(info.blockName, '<>') as 'main';
  /*
  const blockName = 'main';
  const pageName = info.identification;
  */

  const imageLink =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/95cb0b63850941f4de8b0d021e44f529819fe627/source/assets/svg-files/landing-page/user-plus.svg';

  //--|🠋 Local Input States 🠋|--//
  let { email, setEmail } = useEmail(); //--|🠈 Use the global email state 🠈|--//
  let [lastName, setLastName] = useState('');
  let [firstName, setFirstName] = useState('');
  let { password, setPassword } = usePassword(); //--|🠈 Global Password State 🠈|--//

  //--|🠋 Button States 🠋|--//
  let [submit, setSubmit] = useState(false); //--|🠈 Prevents Multiple Submissions 🠈|--//

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmit(true);
    try {
      const endpoint = retrieveEndpoint('register', 'http://localhost:3000');
      const response = await axios.post(endpoint, {
        firstName,
        lastName,
        email,
        passwordHash: password,
      });
      const { view, data } = response.data;

      let dialogue: string;
      switch (view) {
        case 'login':
          dialogue = 'You already have an account.';

          viewBlock('login');
          viewText('login', dialogue);
          break;
        case 'password':
          dialogue = 'You already have an account. Reset your password here.';

          viewBlock('password');
          viewText('password', dialogue);
          break;
        case 'verify':
          dialogue = 'Please check your email for the activation code.';

          viewBlock('verify');
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
    // showDemos(pageName);
  }, [pageName, blockName]);

  return (
    <form className="register-form" onSubmit={(event) => handleRegister(event)}>
      <div className="register-header">
        {/* <button className="register-close" type="button">
          <img
            src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d96e3df748dac85a20c559b47659c1a3763a5fe/source/assets/svg-files/index-page/close/close-light.svg"
            alt=""
          />
        </button> */}
        <div className="register-text">
          <h4>Sign up to use application.</h4>
        </div>
        <div className="register-icon">
          <img style={{ maskImage: `url(${imageLink})`, WebkitMaskImage: `url(${imageLink})` }} />
        </div>
      </div>
      <div className="register-inputs">
        <input
          required
          type="text"
          id="first-name"
          name="First Name"
          pattern="[A-Z][a-zA-Z\s]+"
          placeholder="First Name"
          title="Name must start with a capital letter and contain only letters and spaces"
          // --- //
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          required
          type="text"
          id="last-name"
          name="Last Name"
          pattern="[a-zA-Z\s]+"
          placeholder="Last Name"
          title="Surname can't contain any numerical values or special characters"
          // --- //
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
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
        <input
          required
          id="password"
          type="password"
          name="Password"
          title="Click on the 🔄︎ icon to generate a secure password or enter a one that's more than eight characters"
          pattern=".{8,}"
          /* pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$" */
          placeholder="Password"
          // --- //
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

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
          onClick={() => viewPass('register')}
          style={defineButton('observe', { pageName, blockName })}
        />
      </div>
      <div className="register-footer">
        <menu className="register-action">
          <ButtonDefault
            type="submit"
            text={submit ? 'Registering...' : 'Register'}
            style={defineButton('register', { pageName, blockName })}
          />
        </menu>
        <nav id="register-buttons">
          <ButtonDefault
            type="button"
            text={'Access Account'}
            onClick={() => viewBlock('login')}
            style={defineButton('login', { pageName, blockName })}
          />
          <ButtonDefault
            type="button"
            text={'Reset Password'}
            onClick={() => viewBlock('password')}
            style={defineButton('password', { pageName, blockName })}
          />
        </nav>
      </div>
    </form>
  );
};
export default FormRegister;
