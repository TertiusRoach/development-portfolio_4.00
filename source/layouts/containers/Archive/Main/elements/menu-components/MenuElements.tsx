//--|🠊 MenuElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import DivisionCarousel from '../../../../../components/Division/carousel/Division.carousel';

//--|🠋 Elements 🠋|--\\

//--|🠋 Styles 🠋|--\\
import './MenuElements.scss';
import SwipeMenu from './swipe-menu/SwipeMenu';
import ScrollMenu from './scroll-menu/ScrollMenu';
import SelectMenu from './select-menu/SelectMenu';

interface InfoProps {
  info: {
    pageName: string | 'components';
    blockName: string | 'main';
    labelName: string | 'scroll' | 'swipe' | 'select';
  };
}
function MenuComponents({ info }: InfoProps) {
  const pageName = info.pageName;
  const blockName = info.blockName;
  const labelName = info.labelName;

  return (
    <>
      <ScrollMenu info={{ labelName: 'scroll' as string, pageName: pageName, blockName: blockName }} />
      <SwipeMenu info={{ labelName: 'swipe' as string, pageName: pageName, blockName: blockName }} />
      <SelectMenu info={{ labelName: 'select' as string, pageName: pageName, blockName: blockName }} />
    </>
  );
}
const MenuElements: React.FC<InfoProps> = ({ info }) => {
  return (
    <section className={`${info.labelName}-${info.blockName}`}>
      <DivisionCarousel
        cases={{
          show: 1,
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

export default MenuElements;
