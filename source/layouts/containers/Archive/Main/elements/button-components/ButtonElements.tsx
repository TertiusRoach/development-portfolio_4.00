//--|🠊 ButtonElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import DivisionFullscreen from '../../../../../components/Division/fullscreen/Division.fullscreen';

//--|🠋 Elements 🠋|--\\
import DefaultButton from './default-button/DefaultButton';
import StretchButton from './stretch-button/StretchButton';
import RoutingButton from './routing-button/RoutingButton';
import ProfileButton from './profile-button/ProfileButton';

//--|🠋 Functions 🠋|--\\
import { stripBrackets, checkScreen } from '../../../../../../scripts';

interface InfoProps {
  info: {
    blockName: string | 'main';
    pageName: string | 'components';
    labelName: string | 'default' | 'routing';
  };
}
function ButtonElements({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const blockName = stripBrackets(info.blockName, '<>') as 'main';
  const labelName = stripBrackets(info.labelName, '()') as 'button';
  const pageName = stripBrackets(info.pageName, '[]') as 'components';

  useEffect(() => {
    //--|🟨|--\\
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let startingPreview = 1 as number;
  return (
    <section className={`${labelName}-${blockName}`}>
      <DivisionFullscreen
        cases={{
          axis: '[x]',
          show: startingPreview,
          call: ButtonComponents as React.ComponentType<InfoProps>,
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

const ButtonComponents: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName;
  const labelName = info.labelName;
  const pageName = info.pageName;
  return (
    <>
      <DefaultButton info={{ labelName: 'default' as string, pageName: pageName, blockName: blockName }} />
      <StretchButton info={{ labelName: 'stretch' as string, pageName: pageName, blockName: blockName }} />
      <RoutingButton info={{ labelName: 'routing' as string, pageName: pageName, blockName: blockName }} />
      <ProfileButton info={{ labelName: 'profile' as string, pageName: pageName, blockName: blockName }} />
      {/* <CleanedButton info={{ labelName: 'cleaned' as string, pageName: pageName, blockName: blockName }} /> */}
    </>
  );
};
export default ButtonElements;
