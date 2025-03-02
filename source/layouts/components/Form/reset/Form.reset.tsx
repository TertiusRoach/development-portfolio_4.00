//--|🠊 Form.reset.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Form.reset.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Functions 🠋|--//
import { viewBlock, viewText, axiosError, retrieveEndpoint } from '../../../../landing';
//--|🠉 Functions 🠉|--//
//--|🠋 Context 🠋|--//
import { useEmail } from '../../../../modules/scripts/context/EmailContext';
import { usePassword } from '../../../../modules/scripts/context/PasswordContext';
//--|🠉 Context 🠉|--//
interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | 'landing' | string;
  };
}
const FormReset: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'main';
  const pageName = info.identification;

  //--|🠋 Local Input States 🠋|--//
  let { email, setEmail } = useEmail(); //--|🠈 Use the global email state 🠈|--//
  let { password, setPassword } = usePassword(); //--|🠈 Global Password State 🠈|--//

  //--|🠋 Action States 🠋|--//
  let [renew, setRenew] = useState('');
  let [submit, setSubmit] = useState(false); //--|🠈 Prevents multiple submissions 🠈|--//

  const handleReset = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmit(true);
    try {
      let passwordEmail = document.querySelector('.password-inputs #email') as HTMLInputElement;

      // const route = 'reset';
      const endpoint = retrieveEndpoint('reset', 'http://localhost:3000');
      const response = await axios.post(endpoint, {
        email: passwordEmail.value,
        renewal: renew,
        passwordNew: password,
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
        <div className="reset-label">
          <h6 className="display-6">Reset</h6>
        </div>
        <button className="reset-close" type="button">
          <img
            src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3d96e3df748dac85a20c559b47659c1a3763a5fe/source/assets/svg-files/index-page/close/close-light.svg"
            alt=""
          />
        </button>
        <div className="reset-text">
          <h4>Reset your password.</h4>
        </div>
      </div>
      <div className="reset-inputs">
        <input
          required
          type="text"
          id="reset-code"
          name="Recovery Code"
          placeholder="//--|🠊 Recovery Code 🠈|--//"
          // --- //
          value={renew}
          onChange={(event) => setRenew(event.target.value)}
        />
        <input
          required
          id="password"
          type="password"
          name="Password"
          placeholder="//--|🠊 New Password 🠈|--//"
          // --- //
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="reset-footer">
        <menu className="reset-action">
          <button className="reset-button" type="submit" disabled={submit}>
            {submit ? 'Resetting...' : 'Reset'}
          </button>
        </menu>
      </div>
    </form>
  );
};
export default FormReset;

const closeRightbar = (pageName: 'landing' | string) => {
  let closeReset = document.querySelector('.reset-close') as HTMLElement;
  let rightbar = document.querySelector(`#${pageName}-rightbar`) as HTMLElement;

  if (closeReset && rightbar) {
    var closeClick = () => {
      rightbar.classList.remove('expanded'); // Remove '.expanded'
      rightbar.classList.toggle('collapsed'); // Toggle '.collapsed'
    };

    closeReset.addEventListener('click', closeClick);
    return () => closeReset.removeEventListener('click', closeClick);
  }
};
