//--|🠊 MenuElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import DivisionFullscreen from '../../../../../components/Division/fullscreen/Division.fullscreen';

//--|🠋 Elements 🠋|--\\
import SwipeMenu from './swipe-menu/SwipeMenu';
import ScrollMenu from './scroll-menu/ScrollMenu';
import SelectMenu from './select-menu/SelectMenu';

//--|🠋 Functions 🠋|--\\

//--|🠋 Styles 🠋|--\\

interface InfoProps {
  info: {
    pageName: string | 'components';
    blockName: string | 'main';
    labelName: string | 'scroll' | 'swipe' | 'select';
  };
}
function MenuElements({ info }: InfoProps) {
  return (
    <section className={`${info.labelName}-${info.blockName}`}>
      <DivisionFullscreen
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
}

const MenuComponents: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName;
  const labelName = info.labelName;
  const pageName = info.pageName;

  return (
    <>
      <SwipeMenu info={{ labelName: 'swipe' as string, pageName: pageName, blockName: blockName }} />
      <SelectMenu info={{ labelName: 'select' as string, pageName: pageName, blockName: blockName }} />
      <ScrollMenu info={{ labelName: 'scroll' as string, pageName: pageName, blockName: blockName }} />
    </>
  );
};
export default MenuElements;
