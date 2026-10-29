//--|🠊 LabelElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React from 'react';

//--|🠋 Styles 🠋|--\\

//--|🠋 Components 🠋|--\\
import DivisionFullscreen from '../../../../../components/Division/fullscreen/Division.fullscreen';

//--|🠋 Elements 🠋|--\\
import ToggleLabel from './toggle-label/ToggleLabel';
import SelectLabel from './select-label/SelectLabel';
import CheckboxLabel from './checkbox-label/CheckboxLabel'; //--|🠈 AI Code: Review Please 2026-10-29 15:45 🠈|--\\
import InputLabel from './input-label/InputLabel'; //--|🠈 AI Code: Review Please 2026-10-29 15:49 🠈|--\\
import NumberLabel from './number-label/NumberLabel'; //--|🠈 AI Code: Review Please 2026-10-29 15:51 🠈|--\\
import TextareaLabel from './textarea-label/TextareaLabel'; //--|🠈 AI Code: Review Please 2026-10-29 15:53 🠈|--\\
import RangeLabel from './range-label/RangeLabel'; //--|🠈 AI Code: Review Please 2026-10-29 15:56 🠈|--\\
import ComboboxLabel from './combobox-label/ComboboxLabel'; //--|🠈 AI Code: Review Please 2026-10-29 16:02 🠈|--\\
import UploadLabel from './upload-label/UploadLabel'; //--|🠈 AI Code: Review Please 2026-10-29 16:44 🠈|--\\

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
      {/*--|🠊 AI Code: Review Please 2026-10-29 15:45 🠈|--*/}
      <CheckboxLabel info={{ labelName: 'checkbox' as string, pageName: pageName, blockName: blockName }} />
      {/*--|🠊 AI Code: Review Please 2026-10-29 15:49 🠈|--*/}
      <InputLabel info={{ labelName: 'input' as string, pageName: pageName, blockName: blockName }} />
      {/*--|🠊 AI Code: Review Please 2026-10-29 15:51 🠈|--*/}
      <NumberLabel info={{ labelName: 'number' as string, pageName: pageName, blockName: blockName }} />
      {/*--|🠊 AI Code: Review Please 2026-10-29 15:53 🠈|--*/}
      <TextareaLabel info={{ labelName: 'textarea' as string, pageName: pageName, blockName: blockName }} />
      {/*--|🠊 AI Code: Review Please 2026-10-29 15:56 🠈|--*/}
      <RangeLabel info={{ labelName: 'range' as string, pageName: pageName, blockName: blockName }} />
      {/*--|🠊 AI Code: Review Please 2026-10-29 16:02 🠈|--*/}
      <ComboboxLabel info={{ labelName: 'combobox' as string, pageName: pageName, blockName: blockName }} />
      {/*--|🠊 AI Code: Review Please 2026-10-29 16:44 🠈|--*/}
      <UploadLabel info={{ labelName: 'upload' as string, pageName: pageName, blockName: blockName }} />
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
