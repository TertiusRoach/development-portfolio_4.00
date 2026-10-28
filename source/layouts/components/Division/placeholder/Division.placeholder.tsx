//--|🠊 Division.placeholder.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import ButtonDefault from '../../Button/default/Button.default';

//--|🠋 Functions 🠋|--\\
import testBlock from './Division_placeholder';
import { loadAsset } from '../../../../scripts';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    shade: '~dark~' | '~medium~' | '~light~';
    view: '-top-' | '-bottom-' | '-left-' | '-right-' | '-center-' | '-text-' | '-icon-';
    color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(yellow)' | '(purple)' | '(orange)' | '(pink)' | '(brown)' | '(turquoise)';
  };
}

const DivisionPlaceholder: React.FC<TheseProps> = ({ info, style }) => {
  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;

  useEffect(() => {}, [pageName, blockName, labelName]);

  return <div className={`${info.labelName}-${info.blockName}_division-placeholder`}></div>;
};
export default DivisionPlaceholder;
