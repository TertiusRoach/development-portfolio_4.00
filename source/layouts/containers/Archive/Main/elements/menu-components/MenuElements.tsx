//--|🠊 MenuElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import DivisionCarousel from '../../../../../components/Division/carousel/Division.carousel';

//--|🠋 Elements 🠋|--\\

//--|🠋 Styles 🠋|--\\
import './MenuElements.scss';
import SelectMenu from './select-menu/SelectMenu';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}

const MenuElements: React.FC<InfoProps> = ({ info }) => {
  return (
    <section className={`${info.labelName}-${info.blockName}`}>
      <DivisionCarousel
        cases={{
          axis: '[x]',
          call: MenuComponents as React.ComponentType<InfoProps>,
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

function MenuComponents({ info }: InfoProps) {
  const pageName = info.pageName;
  const blockName = info.blockName;
  const labelName = info.labelName;

  return (
    <>
      <SelectMenu info={{ labelName: 'select' as string, pageName: pageName, blockName: blockName }} />
      {/* <SwipeMenu info={{ labelName: 'swipe' as string, pageName: pageName, blockName: blockName }} /> */}
    </>
  );
}
export default MenuElements;
