//--|🠊 MenuElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react'; //--|🠈 AI Code: Review Please 2026-10-30 13:04 🠈|--\\

//--|🠋 Components 🠋|--\\
import DivisionFullscreen from '../../../../../components/Division/fullscreen/Division.fullscreen';

//--|🠋 Elements 🠋|--\\
import SwipeMenu from './swipe-menu/SwipeMenu';
import ScrollMenu from './scroll-menu/ScrollMenu';
import SelectMenu from './select-menu/SelectMenu';

//--|🠋 Functions 🠋|--\\
import { stripBrackets, checkScreen } from '../../../../../../scripts'; //--|🠈 AI Code: Review Please 2026-10-30 13:04 🠈|--\\

//--|🠋 Styles 🠋|--\\

interface InfoProps {
  info: {
    pageName: string | 'components';
    blockName: string | 'main';
    labelName: string | 'scroll' | 'swipe' | 'select';
  };
}
function MenuElements({ info }: InfoProps) {
  //--|🠊 AI Code: Review Please 2026-10-30 13:04 🠈|--\\
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const blockName = stripBrackets(info.blockName, '<>') as 'main'; //--|🠈 AI Code: Review Please 2026-10-30 13:04 🠈|--\\
  const labelName = stripBrackets(info.labelName, '()') as 'menu'; //--|🠈 AI Code: Review Please 2026-10-30 13:04 🠈|--\\
  const pageName = stripBrackets(info.pageName, '[]') as 'components'; //--|🠈 AI Code: Review Please 2026-10-30 13:04 🠈|--\\

  //--|🠊 AI Code: Review Please 2026-10-30 13:04 🠈|--\\
  useEffect(() => {
    //--|🟨|--\\
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let startingPreview = 1 as number; //--|🠈 AI Code: Review Please 2026-10-30 13:04 🠈|--\\
  return (
    <section className={`${labelName}-${blockName}`}>
      <DivisionFullscreen
        cases={{
          axis: '[x]',
          show: startingPreview,
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
