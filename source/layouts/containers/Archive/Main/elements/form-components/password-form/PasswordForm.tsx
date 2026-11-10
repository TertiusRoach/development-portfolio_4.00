//--|🠊 PasswordForm.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import FormPassword from '../../../../../../components/Form/password/Form.password';
import DivisionColourize from '../../../../../../components/Division/colourize/Division.colourize';

//--|🠋 Functions 🠋|--\\
import { toggleColors } from './PasswordFunctions';
import { checkScreen } from '../../../../../../tools/synching';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function PasswordForm({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'password';
  const pageName = info.pageName as 'components';

  useEffect(() => {
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);
  useEffect(() => {
    const colourizeDivisions = document.querySelectorAll(
      `#${pageName}-${blockName} aside[class="password-form"] div[class*="_division-colourize"]`,
    ) as NodeListOf<HTMLDivElement>;
    for (let i = 0; i < colourizeDivisions.length; i++) {
      colourizeDivisions[i].classList.add('downplay');
    }
  }, [getOrientation]);

  switch (getOrientation) {
    case 'landscape':
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
    case 'portrait':
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
}
export default PasswordForm;
