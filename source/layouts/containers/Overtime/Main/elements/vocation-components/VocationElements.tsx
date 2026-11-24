//--|🠊 VocationElements.tsx 🠈|--\\
//--|🠊 Whole file is new, copied from Archive's MenuElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import DivisionSweeping from '../../../../../components/Division/sweeping/Division.sweeping';
import DivisionPlaceholder from '../../../../../components/Division/placeholder/Division.placeholder';

//--|🠋 Functions 🠋|--\\
import { loadAsset } from '../../../../../tools/utilities';
import { stripBrackets } from '../../../../../tools/conversions';
import { checkScreen } from '../../../../../tools/synching';

interface InfoProps {
  info: {
    pageName: string | 'overtime';
    blockName: string | 'main';
    labelName: string | 'placeholder';
  };
}
function VocationElements({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const blockName = stripBrackets(info.blockName, '<>') as 'main';
  const labelName = stripBrackets(info.labelName, '()') as 'vocation';
  const pageName = stripBrackets(info.pageName, '[]') as 'overtime';

  useEffect(() => {
    //--|🟩|--\\
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let viewName = 1 as number; //--|🠊 The sweeping starts on I, its placeholder 🠈|--\\
  return (
    <section className={`${labelName}-${blockName}`}>
      {/*--|🠊 The centre page sweeps instead of sliding 🠈|--*/}
      <DivisionSweeping
        cases={{
          axis: '[y]',
          view: '-bot-',
          show: viewName,
          call: VocationComponents as React.ComponentType<InfoProps>,
        }}
        info={{
          pageName: pageName,
          blockName: blockName,
          labelName: labelName,
        }}
      />
    </section>
  );
}

const VocationComponents: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName;
  const labelName = info.labelName;
  const pageName = info.pageName;

  return (
    <>
      <DivisionPlaceholder
        info={{ labelName: 'placeholder' as string, pageName: pageName, blockName: blockName }}
        style={{
          view: '-cen-',
          shade: '~dark~',
          color: '(blue)',
          clarity: '⟨lucid⟩',
          text: `[Overtime]`,
          image: loadAsset('-svg-', '/archive-images/my-signature/signature-icon/primary-medium'),
        }}
      />
    </>
  );
};
export default VocationElements;
