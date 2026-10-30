//--|🠊 TimeElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import DivisionFullscreen from '../../../../../components/Division/fullscreen/Division.fullscreen';

//--|🠋 Elements 🠋|--\\
import DefaultTime from './default-time/DefaultTime';

//--|🠋 Functions 🠋|--\\

//--|🠋 Styles 🠋|--\\

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function TimeElements({ info }: InfoProps) {
  return (
    <section className={`${info.labelName}-${info.blockName}`}>
      <DivisionFullscreen
        cases={{
          show: 1,
          axis: '[x]',
          call: TimeComponents as React.ComponentType<InfoProps>,
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

const TimeComponents: React.FC<InfoProps> = ({ info }) => {
  let defaultInfo = {
    pageName: info.pageName,
    blockName: info.blockName,
    labelName: 'default' as string,
  };

  return (
    <>
      <DefaultTime info={defaultInfo} />
    </>
  );
};
export default TimeElements;
