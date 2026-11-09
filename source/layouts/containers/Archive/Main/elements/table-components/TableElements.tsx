//--|🠊 TableElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import DivisionFullscreen from '../../../../../components/Division/fullscreen/Division.fullscreen';

//--|🠋 Elements 🠋|--\\
import DefaultTable from './default-table/DefaultTable';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../../../tools/conversions';
import { checkScreen } from '../../../../../tools/synching';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function TableElements({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const blockName = stripBrackets(info.blockName, '<>') as 'main';
  const labelName = stripBrackets(info.labelName, '()') as 'table';
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
          call: TableComponents as React.ComponentType<InfoProps>,
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

const TableComponents: React.FC<InfoProps> = ({ info }) => {
  let defaultInfo = {
    pageName: info.pageName,
    blockName: info.blockName,
    labelName: 'default' as string,
  };

  return (
    <>
      <DefaultTable info={defaultInfo} />
    </>
  );
};
export default TableElements;
