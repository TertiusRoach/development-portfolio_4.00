//--|🠊 RoutingButton.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './RoutingButton.scss';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../../../../../scripts';

//--|🠋 Components 🠋|--\\
import DivisionCarousel from '../../../../../../components/Division/Archive/carousel/Division.carousel';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}

function routingDark({ info }: InfoProps) {
  return (
    <>
      <ViewOne
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: 'one-dark',
        }}
      />
    </>
  );
}
function routingLight({ info }: InfoProps) {}

const RoutingButton: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'routing';
  const pageName = info.pageName as 'component';

  return (
    <aside className="routing-button">
      <section className={`${blockName}-foreground`}>
        <DivisionCarousel
          //--|🠊 <div class="darkside-main_carousel-default"/> 🠈|--\\
          style={{
            axis: '[y]',
          }}
          cases={{
            call: routingDark,
          }}
          info={{
            labelName: 'routing-darkside',
            blockName: blockName as 'main',
            pageName: pageName as 'components',
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
};

let ViewOne = ({ info }: InfoProps) => {
  const shade: string = info.labelName;
  const link: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/2c4d27d5169382dad6a2bf4443d81cbe5e4423af';
  switch (true) {
    case shade.includes('dark'):
      return <section className={`routing-${info.blockName}_${info.labelName}`}></section>;
    case shade.includes('light'):
      return <section className={`routing-${info.blockName}_${info.labelName}`}></section>;
  }
};
let ViewPar = ({ info }: InfoProps) => {};

export default RoutingButton;
