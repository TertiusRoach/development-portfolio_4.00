//--|🠊 OvertimeMain.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useState, useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import DivisionFullscreen from '../../../components/Division/fullscreen/Division.fullscreen'; //--|🠊 AI Code: Review Please 2026-11-08 12:48 🠈|--\\
import DivisionPlaceholder from '../../../components/Division/placeholder/Division.placeholder'; //--|🠊 AI Code: Review Please 2026-11-08 12:48 🠈|--\\

//--|🠋 Functions 🠋|--\\
import { revertContainers } from '../../../scripts/Main_Over';
import { stripBrackets } from '../../../tools/conversions';
import { checkScreen } from '../../../tools/synching';

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
  const pageName = stripBrackets(info.pageName, '[]') as 'overtime';
  const blockName = stripBrackets(info.blockName, '<>') as 'main';
  const labelName = stripBrackets(info.labelName, '()') as 'default';

  useEffect(() => {
    //--|🟩|--\\
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let startingPreview = 2 as number; //--|🠊 AI Code: Review Please 2026-11-08 12:54 · II is the default, the demo toggle picks I or III 🠈|--\\
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
        {/*--|🠊 AI Code: Review Please 2026-11-08 12:48 🠈|--*/}
        <DivisionFullscreen
          //--|🠊 <div class="slides-main_fullscreen-default"/> 🠈|--\\
          cases={{
            axis: '[x]',
            show: startingPreview as number,
            call: OvertimeSlides as React.ComponentType<InfoProps>,
          }}
          info={{
            labelName: 'slides',
            blockName: blockName as '<main>',
            pageName: pageName as '[overtime]',
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </main>
  );
}
//--|🠊 AI Code: Review Please 2026-11-08 12:48 🠈|--\\
const OvertimeSlides: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const pageName = info.pageName as 'overtime';

  return (
    <>
      <DivisionPlaceholder
        info={{
          pageName: pageName,
          blockName: blockName,
          labelName: 'first-slide' as string,
        }}
        style={{
          view: '-center-',
          shade: '~dark~',
          color: '(green)',
        }}
      />
      <DivisionPlaceholder
        info={{
          pageName: pageName,
          blockName: blockName,
          labelName: 'second-slide' as string,
        }}
        style={{
          view: '-center-',
          shade: '~dark~',
          color: '(blue)',
        }}
      />
      <DivisionPlaceholder
        info={{
          pageName: pageName,
          blockName: blockName,
          labelName: 'third-slide' as string,
        }}
        style={{
          view: '-center-',
          shade: '~dark~',
          color: '(purple)',
        }}
      />
    </>
  );
};
export default OvertimeMain;
