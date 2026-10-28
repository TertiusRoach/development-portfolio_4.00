//--|🠊 TableElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './TableElements.scss';

//--|🠋 Components 🠋|--\\
import DivisionFullscreen from '../../../../../components/Division/fullscreen/Division.fullscreen';

//--|🠋 Elements 🠋|--\\
import DefaultTable from './default-table/DefaultTable';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}

const TableElements: React.FC<InfoProps> = ({ info }) => {
  return (
    <section className={`${info.labelName}-${info.blockName}`}>
      <DivisionFullscreen
        cases={{
          show: 1,
          axis: '[x]',
          call: TableComponents as React.ComponentType<InfoProps>,
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

function TableComponents({ info }: InfoProps) {
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
}
export default TableElements;
