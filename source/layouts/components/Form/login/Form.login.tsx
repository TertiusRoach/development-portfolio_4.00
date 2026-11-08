//--|🠊 Form.login.tsx 🠈|--\\
//--|🠊 AI Code: Review Please 2026-11-01 · Rewritten in the current syntax, the untouched original is in git: git show d3b4ec09:source/layouts/components/Form/login/ 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React from 'react';
/* import axios from 'axios'; */

//--|🠋 Components 🠋|--\\
import ButtonDefault from '../../Button/default/Button.default';
import LabelTextarea from '../../Label/textarea/Label.textarea';

//--|🠋 Functions 🠋|--\\
import createClass, { defineButton } from './Form_login';
import { loadAsset } from '../../../tools/utilities';
import { useEmail } from '../../../../modules/context/EmailContext';
import { usePassword } from '../../../../modules/context/PasswordContext';

export interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(purple)' | '(orange)' | '(pink)' | '(yellow)' | '(brown)' | '(turquoise)';
  };
}

export function FormLogin({ info, style }: TheseProps) {
  let { setEmail } = useEmail();
  let { setPassword } = usePassword();

  const iconImage = loadAsset('-svg-', '/archive-images/font-awesome/7.3.1/solid/sign-in-alt') as string;
  const registerButton = defineButton('register'); //--|🠈 <h6> with text, or <p> icon only below 768px 🠈|--\\
  const passwordButton = defineButton('password'); //--|🠈 <h6> with text, or <p> icon only below 768px 🠈|--\\
  return (
    <form
      className={`${info.labelName}-${info.blockName}_login-default ${createClass(style)}`}
      onSubmit={(event) => event.preventDefault()} //--|🠈 Visual-only: every <ButtonDefault> in a <form> submits, handleLogin waits below 🠈|--\\
    >
      <div className="header">
        <div className="text">
          <h4>Sign in to access your account.</h4>
        </div>
        <div className="icon">
          <img style={{ maskImage: `url(${iconImage})`, WebkitMaskImage: `url(${iconImage})` }} />
        </div>
      </div>
      <div className="inputs">
        <fieldset className="email" data-input="{email}">
          <LabelTextarea
            info={{ pageName: info.pageName, blockName: info.blockName, labelName: 'login-email' }}
            style={{ shade: '~light~', color: style.color, clarity: '⟨opaque⟩', text: 'Email Address' }}
            cases={{ type: '{input}' }}
            onChange={(event) => setEmail(event.target.value)}
          />
        </fieldset>
        <fieldset className="password" data-input="{password}">
          <LabelTextarea
            info={{ pageName: info.pageName, blockName: info.blockName, labelName: 'login-password' }}
            style={{ shade: '~light~', color: style.color, clarity: '⟨opaque⟩', text: 'Password' }}
            cases={{ type: '{input}' }}
            onChange={(event) => setPassword(event.target.value)}
          />
          <ButtonDefault
            info={{ pageName: info.pageName, blockName: info.blockName, ariaName: 'Show password', labelName: 'login-observe' }}
            style={{
              shade: '~light~',
              clarity: '⟨opaque⟩', //--|🠈 AI Code: Review Please 2026-11-01 · No box, only the icon: it lies over the end of the password, like the old one 🠈|--\\
              size: '<p>',
              view: '-icon-',
              color: style.color,
              image: loadAsset('-svg-', '/archive-images/font-awesome/7.3.1/solid/eye'),
            }}
            /* onClick={() => viewPass('login')} */
          />
        </fieldset>
      </div>
      <div className="footer">
        <menu className="action">
          <ButtonDefault
            info={{ pageName: info.pageName, blockName: info.blockName, labelName: 'login-login' }}
            style={{
              shade: '~light~',
              clarity: '⟨lucid⟩',
              size: '<h3>',
              view: '-text-',
              color: style.color,
              text: 'Login',
              image: loadAsset('-svg-', '/archive-images/font-awesome/7.3.1/solid/sign-in-alt'),
            }}
          />
        </menu>
        <nav className="buttons">
          <ButtonDefault
            info={{ pageName: info.pageName, blockName: info.blockName, ariaName: 'Register Account', labelName: 'login-register' }}
            style={{
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              size: registerButton.size,
              view: registerButton.view,
              color: style.color,
              text: 'Register Account',
              image: loadAsset('-svg-', '/archive-images/font-awesome/7.3.1/solid/user-plus'),
            }}
            /* onClick={() => viewBlock('register')} */
          />
          <ButtonDefault
            info={{ pageName: info.pageName, blockName: info.blockName, ariaName: 'Forgot Password', labelName: 'login-password' }}
            style={{
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              size: passwordButton.size,
              view: passwordButton.view,
              color: style.color,
              text: 'Forgot Password',
              image: loadAsset('-svg-', '/archive-images/font-awesome/7.3.1/solid/user-lock'),
            }}
            /* onClick={() => viewBlock('password')} */
          />
        </nav>
      </div>
    </form>
  );
}
/*--|🠋 Submit: commented out so the <Form> is visual-only, viewBlock() drove the old Landing carousel 🠉|--*/
/*
let [submit, setSubmit] = useState(false);
let [attempts, setAttempts] = useState(0);
const handleLogin = async (event: React.FormEvent) => {
  event.preventDefault();
  setSubmit(true);
  try {
    const endpoint = retrieveEndpoint('login', 'http://localhost:3000');
    const response = await axios.post(endpoint, {
      email,
      password: password, //--|🠈 Formerly called passwordHash: it carries the plain password, and a name that says 'hash' makes it look safe to log, store or send over plain HTTP. 🠈|--\\
    });
    const { view, data } = response.data;

    let dialogue: string;
    switch (view) {
      case 'launch':
        dialogue = 'Login successful, please select the application you want to use.';
        viewBlock('launch');
        break;
      case 'register':
        dialogue = 'No account found with this email. Would you like to register?';
        viewBlock('register');
        break;
      case 'password':
        let messages: string[] = ['You have three attempts left.', 'You have two attempts left.', 'You have one attempt left.'];
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
        viewText('blocked', dialogue);
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
*/
export default FormLogin;
