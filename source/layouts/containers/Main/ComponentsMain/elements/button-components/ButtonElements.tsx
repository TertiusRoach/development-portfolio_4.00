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

interface InfoProps {
  info: {
    blockName: 'main';
    pageName: 'components';
    labelName: 'button' | string;
  };
}

interface CarouselInfo {
  pageName: string;
  blockName: string;
  labelName: string;
}

const ButtonElements: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'button';
  const pageName = info.pageName as 'components';

  useEffect(() => {
    // console.log(blockName, labelName, pageName);
  }, [pageName, blockName]);

  return (
    <section className={`${labelName}-${blockName}`}>
      <DivisionCarousel
        //--|🠊 <div class="profile-header_carousel"/> 🠈|--\\
        cases={{
          axis: '[x]',
          call: ButtonComponents,
        }}
        info={{
          labelName: 'button',
          blockName: blockName as 'main',
          pageName: pageName as 'components',
        }}
      />
    </section>
  );
};

function ButtonComponents({ info }: InfoProps) {
  let defaultInfo = {
    labelName: 'default' as string,
    blockName: info.blockName as 'main',
    pageName: info.pageName as 'components',
  };
  let routingInfo = {
    labelName: 'routing' as string,
    blockName: info.blockName as 'main',
    pageName: info.pageName as 'components',
  };

  return (
    <>
      <DefaultButton info={defaultInfo} />
      <RoutingButton info={routingInfo} />
    </>
  );
}

export default ButtonElements;
