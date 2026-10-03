//--|🠊 OvertimeMain.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useState, useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import DivisionTesting from '../../../components/Division/testing/Division.testing';

//--|🠋 Functions 🠋|--\\
import { stripBrackets, checkScreen } from '../../../../scripts';

interface InfoProps {
  info: {
    pageName: '[overtime]' | string;
    blockName: '<main>' | string;
    labelName: '(default)' | string;
  };
}

function OvertimeMain({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\

  let blockName = stripBrackets(info.blockName, '<>') as 'main';
  let pageName = stripBrackets(info.pageName, '[]') as 'overtime';
  let labelName = stripBrackets(info.labelName, '()') as 'default';

  useEffect(() => {
    //--|🟩🟢🟩|--\\
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  return (
    <main id={`${pageName}-${blockName}`} className={`${labelName}-${blockName}`}>
      <section className={`${blockName}-foreground`}>
        {/* <DivisionTesting
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
        /> */}
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </main>
  );
}
export default OvertimeMain;
