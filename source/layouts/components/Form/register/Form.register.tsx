//--|🠊 Form.register.tsx 🠈|--\\
//--|🠊 AI Code: Review Please 2026-11-01 · Rewritten in the current syntax, the untouched original is in git: git show d3b4ec09:source/layouts/components/Form/register/ 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React from 'react';
/* import axios from 'axios'; */

//--|🠋 Components 🠋|--\\
import ButtonDefault from '../../Button/default/Button.default';
import LabelTextarea from '../../Label/textarea/Label.textarea';

//--|🠋 Functions 🠋|--\\
import createClass, { defineButton } from './Form_register';
import { loadAsset } from '../../../../scripts';
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

export function FormRegister({ info, style }: TheseProps) {
  let { setEmail } = useEmail();
  let { setPassword } = usePassword();

  const iconImage = loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/user-plus') as string;
  const loginButton = defineButton('login'); //--|🠈 <h6> with text, or <p> icon only on small screens 🠈|--\\
  const passwordButton = defineButton('password'); //--|🠈 <h6> with text, or <p> icon only on small screens 🠈|--\\
  return (
    <form
      className={`${info.labelName}-${info.blockName}_register-default ${createClass(style)}`}
      onSubmit={(event) => event.preventDefault()} //--|🠈 Visual-only: every <ButtonDefault> in a <form> submits, handleRegister waits below 🠈|--\\
    >
      <div className="header">
        <div className="text">
          <h4>Sign up to use application.</h4>
        </div>
        <div className="icon">
          <img style={{ maskImage: `url(${iconImage})`, WebkitMaskImage: `url(${iconImage})` }} />
        </div>
      </div>
      <div className="inputs">
        <fieldset className="first" data-input="{text}">
          <LabelTextarea
            info={{ pageName: info.pageName, blockName: info.blockName, labelName: 'register-first' }}
            style={{ shade: '~light~', color: style.color, clarity: '⟨opaque⟩', text: 'First Name' }}
            cases={{ type: '{input}' }}
            /* onChange={(event) => setFirstName(event.target.value)} */
          />
        </fieldset>
        <fieldset className="last" data-input="{text}">
          <LabelTextarea
            info={{ pageName: info.pageName, blockName: info.blockName, labelName: 'register-last' }}
            style={{ shade: '~light~', color: style.color, clarity: '⟨opaque⟩', text: 'Last Name' }}
            cases={{ type: '{input}' }}
            /* onChange={(event) => setLastName(event.target.value)} */
          />
        </fieldset>
        <fieldset className="email" data-input="{email}">
          <LabelTextarea
            info={{ pageName: info.pageName, blockName: info.blockName, labelName: 'register-email' }}
            style={{ shade: '~light~', color: style.color, clarity: '⟨opaque⟩', text: 'Email Address' }}
            cases={{ type: '{input}' }}
            onChange={(event) => setEmail(event.target.value)}
          />
        </fieldset>
        <fieldset className="password" data-input="{password}">
          <ButtonDefault
            info={{ pageName: info.pageName, blockName: info.blockName, ariaName: 'Generate password', labelName: 'register-generate' }}
            style={{
              shade: '~light~',
              clarity: '⟨opaque⟩', //--|🠈 AI Code: Review Please 2026-11-01 · No box, only the icon: it lies over the end of the password, like the old one 🠈|--\\
              size: '<p>',
              view: '-icon-',
              color: style.color,
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/sync-alt'),
            }}
            /* onClick={() => setPassword(generatePassword())} */
          />
          <LabelTextarea
            info={{ pageName: info.pageName, blockName: info.blockName, labelName: 'register-password' }}
            style={{ shade: '~light~', color: style.color, clarity: '⟨opaque⟩', text: 'Password' }}
            cases={{ type: '{input}' }}
            onChange={(event) => setPassword(event.target.value)}
          />
          <ButtonDefault
            info={{ pageName: info.pageName, blockName: info.blockName, ariaName: 'Show password', labelName: 'register-observe' }}
            style={{
              shade: '~light~',
              clarity: '⟨opaque⟩', //--|🠈 AI Code: Review Please 2026-11-01 · No box, only the icon: it lies over the end of the password, like the old one 🠈|--\\
              size: '<p>',
              view: '-icon-',
              color: style.color,
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/eye'),
            }}
            /* onClick={() => viewPass('register')} */
          />
        </fieldset>
      </div>
      <div className="footer">
        <menu className="action">
          <ButtonDefault
            info={{ pageName: info.pageName, blockName: info.blockName, labelName: 'register-register' }}
            style={{
              shade: '~light~',
              clarity: '⟨lucid⟩',
              size: '<h3>',
              view: '-text-',
              color: style.color,
              text: 'Register',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/user-plus'),
            }}
          />
        </menu>
        <nav className="buttons">
          <ButtonDefault
            info={{ pageName: info.pageName, blockName: info.blockName, ariaName: 'Access Account', labelName: 'register-login' }}
            style={{
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              size: loginButton.size,
              view: loginButton.view,
              color: style.color,
              text: 'Access Account',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/sign-in-alt'),
            }}
            /* onClick={() => viewBlock('login')} */
          />
          <ButtonDefault
            info={{ pageName: info.pageName, blockName: info.blockName, ariaName: 'Reset Password', labelName: 'register-password' }}
            style={{
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              size: passwordButton.size,
              view: passwordButton.view,
              color: style.color,
              text: 'Reset Password',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/user-lock'),
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
//--|🠋 The old <input>s' rules: <LabelTextarea> has no pattern or title props yet 🠋|--\\
First Name: pattern="[A-Z][a-zA-Z\s]+" title="Name must start with a capital letter and contain only letters and spaces"
Last Name: pattern="[a-zA-Z\s]+" title="Surname can't contain any numerical values or special characters"
Password: pattern=".{8,}" title="Click on the 🔄︎ icon to generate a secure password or enter a one that's more than eight characters"
//--|===|--\\
let [lastName, setLastName] = useState('');
let [firstName, setFirstName] = useState('');
let [submit, setSubmit] = useState(false); //--|🠈 Prevents Multiple Submissions 🠈|--\\
const handleRegister = async (event: React.FormEvent) => {
  event.preventDefault();
  setSubmit(true);
  try {
    const endpoint = retrieveEndpoint('register', 'http://localhost:3000');
    const response = await axios.post(endpoint, {
      firstName,
      lastName,
      email,
      password: password, //--|🠈 Formerly called passwordHash: it carries the plain password, and a name that says 'hash' makes it look safe to log, store or send over plain HTTP. 🠈|--\\
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
        break;
    }
  } catch (error) {
    axiosError(error);
  } finally {
    setSubmit(false);
  }
};
*/
export default FormRegister;
