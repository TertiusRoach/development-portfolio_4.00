//--|🠊 RegisterForm.tsx 🠈|--\\
//--|🠊 AI Code: Review Please 2026-11-01 · Laid out like CharactersAside.tsx: one card and its <DivisionColourize> 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React from 'react';

//--|🠋 Components 🠋|--\\
import FormRegister from '../../../../../../components/Form/register/Form.register';
import DivisionColourize from '../../../../../../components/Division/colourize/Division.colourize';

//--|🠋 Functions 🠋|--\\
import { toggleColors } from './RegisterFunctions';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function RegisterForm({ info }: InfoProps) {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'register';
  const pageName = info.pageName as 'components';
  return (
    <aside className="register-form">
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
            task: [(tint) => toggleColors(tint)], //--|🠈 Recolors <FormRegister> with the tint from the toggles 🠈|--\\
          }}
        />
        <FormRegister
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
export default RegisterForm;
