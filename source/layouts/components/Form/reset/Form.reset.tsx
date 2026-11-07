//--|🠊 Form.reset.tsx 🠈|--\\
//--|🠊 AI Code: Review Please 2026-11-01 · Rewritten in the current syntax, the untouched original is in git: git show d3b4ec09:source/layouts/components/Form/reset/ 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React from 'react';
/* import axios from 'axios'; */

//--|🠋 Components 🠋|--\\
import ButtonDefault from '../../Button/default/Button.default';
import LabelTextarea from '../../Label/textarea/Label.textarea';

//--|🠋 Functions 🠋|--\\
import createClass from './Form_reset';
import { loadAsset } from '../../../../scripts';
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

export function FormReset({ info, style }: TheseProps) {
  let { setPassword } = usePassword();

  const iconImage = loadAsset('-svg-', '/archive-images/font-awesome/7.3.1/solid/trash-restore') as string;
  let codeBlocks = ['1', '2', '3', '4', '5', '6'] as Array<string>; //--|🠈 Six {block} labels, the old <FieldsetCode> had four 🠈|--\\
  return (
    <form
      className={`${info.labelName}-${info.blockName}_reset-default ${createClass(style)}`}
      onSubmit={(event) => event.preventDefault()} //--|🠈 Visual-only: every <ButtonDefault> in a <form> submits, handleReset waits below 🠈|--\\
    >
      <div className="header">
        <ButtonDefault
          info={{ pageName: info.pageName, blockName: info.blockName, ariaName: 'Close', labelName: 'reset-close' }}
          style={{
            shade: '~dark~',
            clarity: '⟨lucid⟩',
            size: '<p>',
            view: '-icon-',
            color: style.color,
            image: loadAsset('-svg-', '/archive-images/font-awesome/7.3.1/solid/times'),
          }}
          /* onClick={() => closeRightbar(pageName)} */
        />
        <div className="text">
          <h4>Reset your password.</h4>
        </div>
        <div className="icon">
          <img style={{ maskImage: `url(${iconImage})`, WebkitMaskImage: `url(${iconImage})` }} />
        </div>
      </div>
      <div className="inputs">
        <fieldset className="code">
          {codeBlocks.map((block) => (
            <LabelTextarea
              key={block}
              info={{ pageName: info.pageName, blockName: info.blockName, labelName: `reset-block-${block}` }}
              style={{ shade: '~light~', color: style.color, clarity: '⟨opaque⟩', text: '-' }}
              cases={{ type: '{block}' }}
            />
          ))}
        </fieldset>
        <fieldset className="password" data-input="{password}">
          <ButtonDefault
            info={{ pageName: info.pageName, blockName: info.blockName, ariaName: 'Generate password', labelName: 'reset-generate' }}
            style={{
              shade: '~light~',
              clarity: '⟨opaque⟩', //--|🠈 AI Code: Review Please 2026-11-01 · No box, only the icon: it lies over the end of the password, like the old one 🠈|--\\
              size: '<p>',
              view: '-icon-',
              color: style.color,
              image: loadAsset('-svg-', '/archive-images/font-awesome/7.3.1/solid/sync-alt'),
            }}
            /* onClick={() => setPassword(generatePassword())} */
          />
          <LabelTextarea
            info={{ pageName: info.pageName, blockName: info.blockName, labelName: 'reset-password' }}
            style={{ shade: '~light~', color: style.color, clarity: '⟨opaque⟩', text: 'New Password' }}
            cases={{ type: '{input}' }}
            onChange={(event) => setPassword(event.target.value)}
          />
          <ButtonDefault
            info={{ pageName: info.pageName, blockName: info.blockName, ariaName: 'Show password', labelName: 'reset-observe' }}
            style={{
              shade: '~light~',
              clarity: '⟨opaque⟩', //--|🠈 AI Code: Review Please 2026-11-01 · No box, only the icon: it lies over the end of the password, like the old one 🠈|--\\
              size: '<p>',
              view: '-icon-',
              color: style.color,
              image: loadAsset('-svg-', '/archive-images/font-awesome/7.3.1/solid/eye'),
            }}
            /* onClick={() => viewPass('reset')} */
          />
        </fieldset>
      </div>
      <div className="footer">
        <menu className="action">
          <ButtonDefault
            info={{ pageName: info.pageName, blockName: info.blockName, labelName: 'reset-reset' }}
            style={{
              shade: '~light~',
              clarity: '⟨lucid⟩',
              size: '<h3>',
              view: '-text-',
              color: style.color,
              text: 'Reset',
              image: loadAsset('-svg-', '/archive-images/font-awesome/7.3.1/solid/trash-restore'),
            }}
          />
        </menu>
      </div>
    </form>
  );
}
/*--|🠋 Submit: commented out so the <Form> is visual-only, viewBlock() drove the old Landing carousel 🠉|--*/
/*
let { email } = useEmail();
let { password } = usePassword();
let [submit, setSubmit] = useState(false); //--|🠈 Prevents multiple submissions 🠈|--\\
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

        //--|🠊 AI Code: Review Please 2026-11-01 · Was a block comment, which would close the one around this handler 🠈|--\\
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
*/
export default FormReset;
