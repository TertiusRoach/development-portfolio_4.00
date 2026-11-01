//--|🠊 PasswordForm.tsx 🠈|--\\
//--|🠊 AI Code: Review Please 2026-11-01 · Laid out like CharactersAside.tsx: one card and its <DivisionColourize> 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React from 'react';

//--|🠋 Components 🠋|--\\
import FormPassword from '../../../../../../components/Form/password/Form.password';
import DivisionColourize from '../../../../../../components/Division/colourize/Division.colourize';

//--|🠋 Functions 🠋|--\\
import { toggleColors } from './PasswordFunctions';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function PasswordForm({ info }: InfoProps) {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'password';
  const pageName = info.pageName as 'components';
  return (
    <aside className="password-form">
      <section className={`${blockName}-foreground`}>
        <DivisionColourize
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
          }}
          cases={{
            task: [(tint) => toggleColors(tint)], //--|🠈 Recolors <FormPassword> with the tint from the toggles 🠈|--\\
          }}
        />
        <FormPassword
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            color: '(mono)',
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
}
export default PasswordForm;
