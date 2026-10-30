//--|🠊 ButtonElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import DivisionFullscreen from '../../../../../components/Division/fullscreen/Division.fullscreen';

//--|🠋 Elements 🠋|--\\
import DefaultButton from './default-button/DefaultButton';
import RoutingButton from './routing-button/RoutingButton';
import ProfileButton from './profile-button/ProfileButton';
import StretchButton from './stretch-button/StretchButton';

//--|🠋 Functions 🠋|--\\

//--|🠋 Styles 🠋|--\\

interface InfoProps {
  info: {
    blockName: string | 'main';
    pageName: string | 'components';
    labelName: string | 'default' | 'routing';
  };
}
function ButtonElements({ info }: InfoProps) {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'button';
  const pageName = info.pageName as 'components';
  return (
    <section className={`${labelName}-${blockName}`}>
      <DivisionFullscreen
        cases={{
          show: 1,
          axis: '[x]',
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
      <RoutingButton info={{ labelName: 'routing' as string, pageName: pageName, blockName: blockName }} />
      <ProfileButton info={{ labelName: 'profile' as string, pageName: pageName, blockName: blockName }} />
      {/* <CleanedButton info={{ labelName: 'cleaned' as string, pageName: pageName, blockName: blockName }} /> */}
      {/* <StretchButton info={{ labelName: 'stretch' as string, pageName: pageName, blockName: blockName }} /> */}
    </>
  );
};
export default ButtonElements;
