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
  return (
    <section className={`${info.labelName}-${info.blockName}`}>
      <DivisionCarousel
        style={{
          axis: '[x]',
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
  let defaultInfo = {
    pageName: info.pageName,
    blockName: info.blockName,
    labelName: 'default' as string,
  };
  let routingInfo = {
    pageName: info.pageName,
    blockName: info.blockName,
    labelName: 'routing' as string,
  };
  let profileInfo = {
    pageName: info.pageName,
    blockName: info.blockName,
    labelName: 'profile' as string,
  };
  let stretchInfo = {
    pageName: info.pageName,
    blockName: info.blockName,
    labelName: 'stretch' as string,
  };
  return (
    <>
      <DefaultButton info={defaultInfo} />
      <RoutingButton info={routingInfo} />
      <ProfileButton info={profileInfo} />
      <StretchButton info={stretchInfo} />
    </>
  );
}
export default ButtonElements;
