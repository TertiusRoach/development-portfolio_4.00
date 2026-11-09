//--|🠊 FormElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import DivisionFullscreen from '../../../../../components/Division/fullscreen/Division.fullscreen';

//--|🠋 Elements 🠋|--\\
import LoginForm from './login-form/LoginForm';
import ResetForm from './reset-form/ResetForm';
import VerifyForm from './verify-form/VerifyForm';
import RegisterForm from './register-form/RegisterForm';
import PasswordForm from './password-form/PasswordForm';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../../../tools/conversions';
import { checkScreen } from '../../../../../tools/synching';

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

  let startingPreview = 3 as number;
  return (
    <section className={`${labelName}-${blockName}`}>
      <DivisionFullscreen
        cases={{
          axis: '[x]',
          show: startingPreview,
          call: FormComponents as React.ComponentType<InfoProps>,
        }}
        info={{
          pageName: pageName,
          blockName: blockName,
          labelName: labelName,
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
      <RegisterForm info={{ labelName: 'register' as string, pageName: pageName, blockName: blockName }} />
      <VerifyForm info={{ labelName: 'verify' as string, pageName: pageName, blockName: blockName }} />
      <LoginForm info={{ labelName: 'login' as string, pageName: pageName, blockName: blockName }} />
      <PasswordForm info={{ labelName: 'password' as string, pageName: pageName, blockName: blockName }} />
      <ResetForm info={{ labelName: 'reset' as string, pageName: pageName, blockName: blockName }} />
    </>
  );
};
export default FormElements;
