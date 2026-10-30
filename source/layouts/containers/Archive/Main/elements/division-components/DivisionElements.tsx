//--|🠊 DivisionElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import DivisionFullscreen from '../../../../../components/Division/fullscreen/Division.fullscreen';

//--|🠋 Elements 🠋|--\\
import TestingDivision from './testing-division/TestingDivision';
import PlaceholderDivision from './placeholder-division/PlaceholderDivision';

//--|🠋 Functions 🠋|--\\

//--|🠋 Styles 🠋|--\\

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function DivisionElements({ info }: InfoProps) {
  return (
    <section className={`${info.labelName}-${info.blockName}`}>
      <DivisionFullscreen
        cases={{
          show: 1,
          axis: '[x]',
          call: DivisionComponents as React.ComponentType<InfoProps>,
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

const DivisionComponents: React.FC<InfoProps> = ({ info }) => {
  let defaultInfo = {
    pageName: info.pageName,
    blockName: info.blockName,
    labelName: 'default' as string,
  };

  return (
    <>
      <PlaceholderDivision info={defaultInfo} />
      <TestingDivision info={defaultInfo} />
    </>
  );
};
export default DivisionElements;
