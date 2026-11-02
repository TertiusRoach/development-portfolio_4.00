//--|🠊 LabelElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import DivisionFullscreen from '../../../../../components/Division/fullscreen/Division.fullscreen';

//--|🠋 Elements 🠋|--\\
import TextareaLabel from './textarea-label/TextareaLabel';
import SelectionLabel from './selection-label/SelectionLabel';
import SwitchingLabel from './switching-label/SwitchingLabel';

//--|🠋 Functions 🠋|--\\
import { stripBrackets, checkScreen } from '../../../../../../scripts';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function LabelElements({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const blockName = stripBrackets(info.blockName, '<>') as 'main';
  const labelName = stripBrackets(info.labelName, '()') as 'label';
  const pageName = stripBrackets(info.pageName, '[]') as 'components';

  useEffect(() => {
    //--|🟨|--\\
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let startingPreview = 1 as number;
  return (
    <section className={`${labelName}-${blockName}`}>
      <DivisionFullscreen
        cases={{
          axis: '[x]',
          show: startingPreview,
          call: LabelComponents as React.ComponentType<InfoProps>,
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

const LabelComponents: React.FC<InfoProps> = ({ info }) => {
  const pageName = info.pageName;
  const blockName = info.blockName;
  return (
    <>
      <SwitchingLabel info={{ labelName: 'switching' as string, pageName: pageName, blockName: blockName }} />
      <TextareaLabel info={{ labelName: 'textarea' as string, pageName: pageName, blockName: blockName }} />
      <SelectionLabel info={{ labelName: 'selection' as string, pageName: pageName, blockName: blockName }} />
    </>
  );
};
export default LabelElements;
