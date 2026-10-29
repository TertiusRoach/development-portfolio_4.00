//--|🠊 LabelElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React from 'react';

//--|🠋 Styles 🠋|--\\

//--|🠋 Components 🠋|--\\
import DivisionFullscreen from '../../../../../components/Division/fullscreen/Division.fullscreen';

//--|🠋 Elements 🠋|--\\
import ToggleLabel from './toggle-label/ToggleLabel';
import SelectLabel from './select-label/SelectLabel';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function LabelComponents({ info }: InfoProps) {
  const pageName = info.pageName;
  const blockName = info.blockName;
  return (
    <>
      <ToggleLabel info={{ labelName: 'toggle' as string, pageName: pageName, blockName: blockName }} />
      <SelectLabel info={{ labelName: 'select' as string, pageName: pageName, blockName: blockName }} />
    </>
  );
}
const LabelElements: React.FC<InfoProps> = ({ info }) => {
  return (
    <section className={`${info.labelName}-${info.blockName}`}>
      <DivisionFullscreen
        cases={{
          show: 1,
          axis: '[x]',
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
};

export default LabelElements;
