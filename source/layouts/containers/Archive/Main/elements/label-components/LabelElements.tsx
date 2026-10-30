//--|🠊 LabelElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React from 'react';

//--|🠋 Components 🠋|--\\
import DivisionFullscreen from '../../../../../components/Division/fullscreen/Division.fullscreen';

//--|🠋 Elements 🠋|--\\
import SwitchingLabel from './switching-label/SwitchingLabel'; //--|🠈 AI Code: Review Please 2026-10-30 🠈|--\\
import TextareaLabel from './textarea-label/TextareaLabel'; //--|🠈 AI Code: Review Please 2026-10-30 🠈|--\\
import SelectionLabel from './selection-label/SelectionLabel'; //--|🠈 AI Code: Review Please 2026-10-30 🠈|--\\

//--|🠋 Functions 🠋|--\\

//--|🠋 Styles 🠋|--\\

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function LabelElements({ info }: InfoProps) {
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
}

const LabelComponents: React.FC<InfoProps> = ({ info }) => {
  const pageName = info.pageName;
  const blockName = info.blockName;
  return (
    <>
      {/*--|🠊 AI Code: Review Please 2026-10-30 · Three pages, a dropdown will pick the type later 🠈|--*/}
      <SwitchingLabel info={{ labelName: 'switching' as string, pageName: pageName, blockName: blockName }} />
      <TextareaLabel info={{ labelName: 'textarea' as string, pageName: pageName, blockName: blockName }} />
      <SelectionLabel info={{ labelName: 'selection' as string, pageName: pageName, blockName: blockName }} />
    </>
  );
};
export default LabelElements;
