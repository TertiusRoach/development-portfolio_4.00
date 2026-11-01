//--|🠊 Form.verify.tsx 🠈|--\\
//--|🠊 AI Code: Review Please 2026-11-01 · Rewritten in the current syntax, the untouched original is in git: git show d3b4ec09:source/layouts/components/Form/verify/ 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React from 'react';
/* import axios from 'axios'; */

//--|🠋 Components 🠋|--\\
import ButtonDefault from '../../Button/default/Button.default';
import LabelTextarea from '../../Label/textarea/Label.textarea';

//--|🠋 Functions 🠋|--\\
import createClass from './Form_verify';
import { loadAsset } from '../../../../scripts';

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

export function FormVerify({ info, style }: TheseProps) {
  const iconImage = loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/key') as string;
  let codeBlocks = ['1', '2', '3', '4', '5', '6'] as Array<string>; //--|🠈 Six {block} labels, the old <FieldsetCode> had four 🠈|--\\
  return (
    <form
      className={`${info.labelName}-${info.blockName}_verify-default ${createClass(style)}`}
      onSubmit={(event) => event.preventDefault()} //--|🠈 Visual-only: every <ButtonDefault> in a <form> submits, handleVerify waits below 🠈|--\\
    >
      <div className="header">
        <ButtonDefault
          info={{ pageName: info.pageName, blockName: info.blockName, ariaName: 'Close', labelName: 'verify-close' }}
          style={{
            shade: '~dark~',
            clarity: '⟨lucid⟩',
            size: '<p>',
            view: '-icon-',
            color: style.color,
            image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/times'),
          }}
          /* onClick={() => closeLeftbar(pageName)} */
        />
        <div className="text">
          <h4>Check your email for verification code.</h4>
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
              info={{ pageName: info.pageName, blockName: info.blockName, labelName: `verify-block-${block}` }}
              style={{ shade: '~light~', color: style.color, clarity: '⟨opaque⟩', text: '-' }}
              cases={{ type: '{block}' }}
            />
          ))}
        </fieldset>
      </div>
      <div className="footer">
        <menu className="action">
          <ButtonDefault
            info={{ pageName: info.pageName, blockName: info.blockName, labelName: 'verify-verify' }}
            style={{
              shade: '~light~',
              clarity: '⟨lucid⟩',
              size: '<h3>',
              view: '-text-',
              color: style.color,
              text: 'Verify',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/key'),
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
let [submit, setSubmit] = useState(false); //--|🠈 Prevents Multiple Submissions 🠈|--\\
const handleVerify = async (event: React.FormEvent) => {
  event.preventDefault();
  setSubmit(true);
  try {
    const endpoint = retrieveEndpoint('verify', 'http://localhost:3000');
    const response = await axios.post(endpoint, {
      email: email,
      password: password, //--|🠈 Formerly called passwordHash: it carries the plain password, and a name that says 'hash' makes it look safe to log, store or send over plain HTTP. 🠈|--\\
      activation: getCode('verify'),
    });
    const { view, data } = response.data;

    let dialogue: string;
    switch (view) {
      case 'login':
        dialogue = 'Account authorization complete.';

        //--|🠊 AI Code: Review Please 2026-11-01 · These two were block comments, which would close the one around this handler 🠈|--\\
        // let inputs = document.querySelectorAll('.code-fieldset input');
        // inputs.forEach((input) => ((input as HTMLInputElement).value = ''));
        // console.log(inputs);
        //--|===|--\\
        // let fieldset = document.querySelector('.code-fieldset') as HTMLElement;
        // for (let i = 0; i < fieldset.children.length; i++) {
        //   let digit = fieldset.children[i] as HTMLInputElement;
        //   if (digit.tagName === 'INPUT') {
        //     digit.value = ''; // Clear input value
        //   }
        // }

        viewBlock('login');
        viewText('login', dialogue);
        break;
      case 'verify':
        let messages: string[] = ['', 'You have three attempts left.', 'You have two attempts left.', 'You have one attempt left.'];
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
*/
export default FormVerify;
