//--|🠊 Division.placeholder.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import ButtonDefault from '../../Button/default/Button.default';

//--|🠋 Functions 🠋|--\\
import createClass from './Division_placeholder';
import { loadAsset } from '../../../tools/utilities';
import { checkScreen } from '../../../tools/synching';

export interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    text: string;
    image: string;
    shade: '~dark~' | '~light~';
    clarity: '⟨lucid⟩' | '⟨opaque⟩';
    view: '-def-' | '-lef-' | '-rig-' | '-cen-' | '-top-' | '-bot-' | '-mid-';
    color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(purple)' | '(orange)' | '(pink)' | '(yellow)' | '(brown)' | '(turquoise)';
  };
}

export function DivisionPlaceholder({ info, style }: TheseProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;

  useEffect(() => {
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let textSize = 'display-3' as 'display-1' | 'display-3';
  switch (getOrientation) {
    case 'landscape':
      textSize = 'display-3';
      break;
    case 'portrait':
      textSize = 'display-1';
      break;
  }

  return (
    <div className={`${info.labelName}-${info.blockName}_division-placeholder ${createClass(style)}`}>
      <div className="text">
        <p className={textSize} data-text={style.text}>
          {style.text}
        </p>
      </div>
      <div className="icon" data-scan style={{ maskImage: `url(${style.image})`, WebkitMaskImage: `url(${style.image})` }}></div>
    </div>
  );
}

export default DivisionPlaceholder;
