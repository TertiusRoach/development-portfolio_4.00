//--|🠊 CanvasElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import DivisionFullscreen from '../../../../../components/Division/fullscreen/Division.fullscreen';

//--|🠋 Elements 🠋|--\\
import ParticlesCanvas from './particles-canvas/ParticlesCanvas'; //--|🠈 AI Code: Review Please 2026-11-22 🠈|--\\
import RotationsCanvas from './rotations-canvas/RotationsCanvas'; //--|🠈 AI Code: Review Please 2026-11-22 🠈|--\\
import MeteoritesCanvas from './meteorites-canvas/MeteoritesCanvas'; //--|🠈 AI Code: Review Please 2026-11-22 🠈|--\\

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
function CanvasElements({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const blockName = stripBrackets(info.blockName, '<>') as 'main';
  const labelName = stripBrackets(info.labelName, '()') as 'canvas';
  const pageName = stripBrackets(info.pageName, '[]') as 'components';

  useEffect(() => {
    //--|🟨|--\\
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let viewName = 1 as number;
  return (
    <section className={`${labelName}-${blockName}`}>
      <DivisionFullscreen
        cases={{
          axis: '[x]',
          show: viewName,
          call: CanvasComponents as React.ComponentType<InfoProps>,
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

const CanvasComponents: React.FC<InfoProps> = ({ info }) => {
  let defaultInfo = {
    pageName: info.pageName,
    blockName: info.blockName,
    labelName: 'default' as string,
  };

  return (
    <>
      <MeteoritesCanvas info={defaultInfo} />
      <RotationsCanvas info={defaultInfo} />
      <ParticlesCanvas info={defaultInfo} />
    </>
  );
};
export default CanvasElements;
