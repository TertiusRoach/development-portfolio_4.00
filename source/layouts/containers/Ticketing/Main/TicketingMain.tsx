//--|🠊 TicketingMain.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useState, useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import DivisionTesting from '../../../components/Division/testing/Division.testing';

//--|🠋 Functions 🠋|--\\
import { revertContainers } from '../../../scripts/Main_Over';
import { stripBrackets } from '../../../tools/conversions';
import { checkScreen } from '../../../tools/synching';

interface InfoProps {
  info: {
    pageName: '[ticketing]' | string;
    blockName: '<main>' | string;
    labelName: '(default)' | string;
  };
}
function TicketingMain({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const pageName = stripBrackets(info.pageName, '[]') as 'ticketing';
  const blockName = stripBrackets(info.blockName, '<>') as 'main';
  const labelName = stripBrackets(info.labelName, '()') as 'default';

  useEffect(() => {
    //--|🟦|--\\
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let blurName: string = 'obnubilate';
  return (
    <main
      id={`${pageName}-${blockName}`}
      className={`${blurName} ${labelName}-${blockName}`}
      onMouseEnter={(event) => {
        revertContainers(event.currentTarget, pageName); //--|🠈 Revert to Default 🠈|--\\
      }}
      onClick={(event) => {
        revertContainers(event.currentTarget, pageName); //--|🠈 Mobile has no hover, so a tap reverts instead 🠈|--\\
      }}
    >
      <section className={`${blockName}-foreground`}>
        <DivisionTesting
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(blue)',
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </main>
  );
}
export default TicketingMain;
