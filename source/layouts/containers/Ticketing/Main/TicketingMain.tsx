//--|🠊 TicketingMain.tsx 🠈|--//
//--|🠋 Dependencies 🠋|--//
import React, { useState, useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import DivisionTesting from '../../../components/Division/testing/Division.testing';

//--|🠋 Functions 🠋|--\\
import blockViews from '../../containers';
import { stripBrackets, checkScreen } from '../../../../scripts';

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

  let blockName = stripBrackets(info.blockName, '<>') as 'main';
  let pageName = stripBrackets(info.pageName, '[]') as 'ticketing';
  let labelName = stripBrackets(info.labelName, '()') as 'default';

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
        //--|🠊 Revert to Default 🠈|--\\
        blockViews(event.currentTarget, pageName, 'header', 'squaring');
        blockViews(event.currentTarget, pageName, 'footer', 'squaring');

        blockViews(event.currentTarget, pageName, 'leftbar', 'collapsed');
        blockViews(event.currentTarget, pageName, 'rightbar', 'collapsed');
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
