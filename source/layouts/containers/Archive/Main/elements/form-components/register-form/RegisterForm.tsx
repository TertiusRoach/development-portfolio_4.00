//--|🠊 RegisterForm.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import FormRegister from '../../../../../../components/Form/register/Form.register';
import DivisionColourize from '../../../../../../components/Division/colourize/Division.colourize';

//--|🠋 Functions 🠋|--\\
import { toggleColors } from './RegisterFunctions';
import { checkScreen } from '../../../../../../tools/synching';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function RegisterForm({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'register';
  const pageName = info.pageName as 'components';

  useEffect(() => {
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  switch (getOrientation) {
    case 'landscape':
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
    case 'portrait':
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
}
export default RegisterForm;
