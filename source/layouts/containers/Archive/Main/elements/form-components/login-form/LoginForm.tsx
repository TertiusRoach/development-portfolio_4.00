//--|🠊 LoginForm.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import FormLogin from '../../../../../../components/Form/login/Form.login';
import DivisionColourize from '../../../../../../components/Division/colourize/Division.colourize';

//--|🠋 Functions 🠋|--\\
import { toggleColors } from './LoginFunctions';
import { checkScreen } from '../../../../../../tools/synching';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function LoginForm({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'login';
  const pageName = info.pageName as 'components';

  useEffect(() => {
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  switch (getOrientation) {
    case 'landscape':
      return (
        <aside className="login-form">
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
                task: [(tint) => toggleColors(tint)], //--|🠈 Recolors <FormLogin> with the tint from the toggles 🠈|--\\
              }}
            />
            <FormLogin
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
        <aside className="login-form">
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
                task: [(tint) => toggleColors(tint)], //--|🠈 Recolors <FormLogin> with the tint from the toggles 🠈|--\\
              }}
            />
            <FormLogin
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
export default LoginForm;
