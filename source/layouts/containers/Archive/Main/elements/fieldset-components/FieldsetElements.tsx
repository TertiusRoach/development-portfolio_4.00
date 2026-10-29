//--|🠊 FieldsetElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React from 'react';

//--|🠋 Styles 🠋|--\\

//--|🠋 Components 🠋|--\\
import DivisionFullscreen from '../../../../../components/Division/fullscreen/Division.fullscreen';

//--|🠋 Elements 🠋|--\\
import MultiselectFieldset from './multiselect-fieldset/MultiselectFieldset'; //--|🠈 AI Code: Review Please 2026-10-29 17:22 🠈|--\\
import OtpFieldset from './otp-fieldset/OtpFieldset'; //--|🠈 AI Code: Review Please 2026-10-29 17:22 🠈|--\\
import SegmentFieldset from './segment-fieldset/SegmentFieldset'; //--|🠈 AI Code: Review Please 2026-10-29 17:21 🠈|--\\
import RadioFieldset from './radio-fieldset/RadioFieldset'; //--|🠈 AI Code: Review Please 2026-10-29 17:16 🠈|--\\
//--|🠊 AI Code: Review Please 2026-10-29 17:15 · Copied from LabelElements.tsx 🠈|--\\

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function FieldsetComponents({ info }: InfoProps) {
  const pageName = info.pageName;
  const blockName = info.blockName;
  return (
    <>
      <RadioFieldset info={{ labelName: 'radio' as string, pageName: pageName, blockName: blockName }} /> {/*--|🠊 AI Code: Review Please 2026-10-29 17:16 🠈|--*/}
      <SegmentFieldset info={{ labelName: 'segment' as string, pageName: pageName, blockName: blockName }} /> {/*--|🠊 AI Code: Review Please 2026-10-29 17:21 🠈|--*/}
      <OtpFieldset info={{ labelName: 'otp' as string, pageName: pageName, blockName: blockName }} /> {/*--|🠊 AI Code: Review Please 2026-10-29 17:22 🠈|--*/}
      <MultiselectFieldset info={{ labelName: 'multiselect' as string, pageName: pageName, blockName: blockName }} /> {/*--|🠊 AI Code: Review Please 2026-10-29 17:22 🠈|--*/}
    </>
  );
}
const FieldsetElements: React.FC<InfoProps> = ({ info }) => {
  return (
    <section className={`${info.labelName}-${info.blockName}`}>
      <DivisionFullscreen
        cases={{
          show: 1,
          axis: '[x]',
          call: FieldsetComponents as React.ComponentType<InfoProps>,
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

export default FieldsetElements;
