//--|🠊 ButtonElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import DivisionCarousel from '../../../../../components/Division/carousel/Division.carousel';

//--|🠋 Elements 🠋|--\\
import DefaultButton from './default-button/DefaultButton';
import RoutingButton from './routing-button/RoutingButton';
import ProfileButton from './profile-button/ProfileButton';
import StretchButton from './stretch-button/StretchButton';

//--|🠋 Styles 🠋|--\\
import './ButtonElements.scss';

interface InfoProps {
  info: {
    blockName: 'main';
    pageName: 'components';
    labelName: 'button' | string;
  };
}
function ButtonComponents({ info }: InfoProps) {
  const pageName = info.pageName;
  const blockName = info.blockName;
  const labelName = info.labelName;
  return (
    <>
      <DefaultButton info={{ labelName: 'default' as string, pageName: pageName, blockName: blockName }} />
      <RoutingButton info={{ labelName: 'routing' as string, pageName: pageName, blockName: blockName }} />
      {/* <CleanedButton info={{ labelName: 'cleaned' as string, pageName: pageName, blockName: blockName }} /> */}
      {/* <StretchButton info={{ labelName: 'stretch' as string, pageName: pageName, blockName: blockName }} /> */}
      {/* <ProfileButton info={{ labelName: 'profile' as string, pageName: pageName, blockName: blockName }} /> */}
    </>
  );
}
const ButtonElements: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'button';
  const pageName = info.pageName as 'components';
  return (
    <section className={`${labelName}-${blockName}`}>
      <DivisionCarousel
        cases={{
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
};

export default ButtonElements;
