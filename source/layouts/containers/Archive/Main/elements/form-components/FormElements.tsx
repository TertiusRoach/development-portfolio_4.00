//--|🠊 FormElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import DivisionFullscreen from '../../../../../components/Division/fullscreen/Division.fullscreen';

//--|🠋 Elements 🠋|--\\
import RegisterForm from './register-form/RegisterForm'; //--|🠈 AI Code: Review Please 2026-11-01 🠈|--\\
import LoginForm from './login-form/LoginForm'; //--|🠈 AI Code: Review Please 2026-11-01 🠈|--\\
import PasswordForm from './password-form/PasswordForm'; //--|🠈 AI Code: Review Please 2026-11-01 🠈|--\\
import VerifyForm from './verify-form/VerifyForm'; //--|🠈 AI Code: Review Please 2026-11-01 🠈|--\\
import ResetForm from './reset-form/ResetForm'; //--|🠈 AI Code: Review Please 2026-11-01 🠈|--\\

//--|🠋 Functions 🠋|--\\
import { stripBrackets, checkScreen } from '../../../../../../scripts';

//--|🠊 AI Code: Review Please 2026-11-01 · Copied from LabelElements.tsx, names changed to form 🠈|--\\
interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function FormElements({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const blockName = stripBrackets(info.blockName, '<>') as 'main';
  const labelName = stripBrackets(info.labelName, '()') as 'form';
  const pageName = stripBrackets(info.pageName, '[]') as 'components';

  useEffect(() => {
    //--|🟨|--\\
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let startingPreview = 3 as number; //--|🠈 <Form_Login> AI Code: Review Please 2026-11-01 🠈|--\\
  return (
    <section className={`${labelName}-${blockName}`}>
      <DivisionFullscreen
        cases={{
          axis: '[x]',
          show: startingPreview,
          call: FormComponents as React.ComponentType<InfoProps>,
        }}
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: info.labelName,
        }}
      />
    </section>
  );
}

const FormComponents: React.FC<InfoProps> = ({ info }) => {
  const pageName = info.pageName;
  const blockName = info.blockName;
  return (
    <>
      {/*--|🠊 AI Code: Review Please 2026-11-01 · Register, Verify, Login, Password, Reset 🠈|--*/}
      <RegisterForm info={{ labelName: 'register' as string, pageName: pageName, blockName: blockName }} /> {/*--|🠈 AI Code: Review Please 2026-11-01 🠈|--*/}
      <VerifyForm info={{ labelName: 'verify' as string, pageName: pageName, blockName: blockName }} /> {/*--|🠈 AI Code: Review Please 2026-11-01 🠈|--*/}
      <LoginForm info={{ labelName: 'login' as string, pageName: pageName, blockName: blockName }} /> {/*--|🠈 AI Code: Review Please 2026-11-01 🠈|--*/}
      <PasswordForm info={{ labelName: 'password' as string, pageName: pageName, blockName: blockName }} /> {/*--|🠈 AI Code: Review Please 2026-11-01 🠈|--*/}
      <ResetForm info={{ labelName: 'reset' as string, pageName: pageName, blockName: blockName }} /> {/*--|🠈 AI Code: Review Please 2026-11-01 🠈|--*/}
    </>
  );
};
export default FormElements;
