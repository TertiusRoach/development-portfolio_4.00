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

  let imageLink =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c0f9e3fa69d4960a533a7b73f357ad97886280f1/source/assets/svg-files/archive-images/font-awesome/6.5.1/solid/star.svg' as string;

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
          style={{
            color: '(mono)',
            shade: '~light~',
            view: undefined,
            image: undefined,
          }}
          cases={{
            view: ['top-lef', 'top-rig', 'bot-rig', 'bot-lef'],
            image: [imageLink, imageLink, imageLink, imageLink],
            tasks: '',
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
        cases={{
          axis: '[x]',
          call: NavigationComponents as React.ComponentType<InfoProps>,
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
