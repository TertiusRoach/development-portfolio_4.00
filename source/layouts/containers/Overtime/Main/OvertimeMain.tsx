//--|🠊 OvertimeMain.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useState, useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import DivisionFullscreen from '../../../components/Division/fullscreen/Division.fullscreen';

//--|🠋 Elements 🠋|--\\
import VocationElements from './elements/vocation-components/VocationElements';
import EstablishedElements from './elements/established-components/EstablishedElements';
import FreelancingElements from './elements/freelancing-components/FreelancingElements';

//--|🠋 Functions 🠋|--\\
import startingPreview from './OvertimeFunctions';
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
    startingPreview('(vocation)', 1); //--|🠊 1 = the sweeping shows its placeholder 🠈|--\\
    //--|🟩|--\\
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let viewName = 2 as number; //--|🠊 II is (vocation), the demo toggle picks I or III 🠈|--\\
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
        {/*--|🠊 slides → elements, outer [x] like Archive's elements 🠈|--*/}
        <DivisionFullscreen
          //--|🠊 <div class="elements-main_fullscreen-default"/> 🠈|--\\
          cases={{
            axis: '[x]',
            show: viewName as number,
            call: OvertimeElements as React.ComponentType<InfoProps>,
          }}
          info={{
            labelName: 'elements',
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
//--|🠊 Page order, not alphabetical: I (established), II (vocation), III (freelancing) 🠈|--\\
const OvertimeElements: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const pageName = info.pageName as 'overtime';

  return (
    <>
      <EstablishedElements
        info={{
          pageName: pageName,
          blockName: blockName,
          labelName: '(established)' as string,
        }}
      />
      <VocationElements
        info={{
          pageName: pageName,
          blockName: blockName,
          labelName: '(vocation)' as string,
        }}
      />
      <FreelancingElements
        info={{
          pageName: pageName,
          blockName: blockName,
          labelName: '(freelancing)' as string,
        }}
      />
    </>
  );
};
export default OvertimeMain;
