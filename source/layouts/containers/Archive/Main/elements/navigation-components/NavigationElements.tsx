//--|🠊 NavigationElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './NavigationElements.scss';

//--|🠋 Components 🠋|--\\
import DivisionCarousel from '../../../../../components/Division/Archive/carousel/Division.carousel';
import NavigationDefault from '../../../../../components/Navigation/default/Navigation.default';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function NavigationComponents({ info }: InfoProps) {
  const labelName = 'default' as string;
  const blockName = info.blockName as 'main';
  const pageName = info.pageName as 'components';

  return (
    <aside className="default-navigation">
      <section className={`${blockName}-foreground`}>
        <NavigationDefault
          //--|🠊 <nav class="default-main_navigation-default"/> 🠈|--\\
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}>
        <h1 className="display-1">{`<DefaultNavigation>`}</h1>
      </div>
    </aside>
  );
}
const NavigationElements: React.FC<InfoProps> = ({ info }) => {
  return (
    <section className={`${info.labelName}-${info.blockName}`}>
      <DivisionCarousel
        style={{
          axis: '[x]',
          scope: '<one>',
        }}
        cases={{
          call: NavigationComponents,
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

export default NavigationElements;
