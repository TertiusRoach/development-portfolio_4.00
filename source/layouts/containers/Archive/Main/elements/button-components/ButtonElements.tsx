//--|🠊 ButtonElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './ButtonElements.scss';

//--|🠋 Components 🠋|--\\
import DivisionCarousel from '../../../../../components/Division/carousel/Division.carousel';

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

function ButtonComponents({ info }: InfoProps) {
  return (
    <>
      <DefaultButton info={{ pageName: info.pageName, blockName: info.blockName, labelName: 'default' as string }} />
      <RoutingButton
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: 'routing' as string,
        }}
      />
      <ProfileButton
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: 'profile' as string,
        }}
      />
      <StretchButton
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: 'stretch' as string,
        }}
      />
    </>
  );
}
export default ButtonElements;
