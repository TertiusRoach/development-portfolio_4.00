//--|🠊 ButtonElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './ButtonElements.scss';

//--|🠋 Components 🠋|--\\
import DivisionCarousel from '../../../../../components/Division/Archive/carousel/Division.carousel';

//--|🠋 Elements 🠋|--\\
import DefaultButton from './default-button/DefaultButton';
import RoutingButton from './routing-button/RoutingButton';
import ProfileButton from './profile-button/ProfileButton';
import StretchButton from './stretch-button/StretchButton';

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
        style={{
          axis: '[x]',
          scope: '<one>',
        }}
        cases={{
          call: ButtonComponents,
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
