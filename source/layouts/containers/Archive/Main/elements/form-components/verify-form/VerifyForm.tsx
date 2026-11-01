//--|🠊 VerifyForm.tsx 🠈|--\\
//--|🠊 AI Code: Review Please 2026-11-01 · Laid out like CharactersAside.tsx: one card and its <DivisionColourize> 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React from 'react';

//--|🠋 Components 🠋|--\\
import FormVerify from '../../../../../../components/Form/verify/Form.verify';
import DivisionColourize from '../../../../../../components/Division/colourize/Division.colourize';

//--|🠋 Functions 🠋|--\\
import { toggleColors } from './VerifyFunctions';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function VerifyForm({ info }: InfoProps) {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'verify';
  const pageName = info.pageName as 'components';
  return (
    <aside className="verify-form">
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
            task: [(tint) => toggleColors(tint)], //--|🠈 Recolors <FormVerify> with the tint from the toggles 🠈|--\\
          }}
        />
        <FormVerify
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
export default VerifyForm;
