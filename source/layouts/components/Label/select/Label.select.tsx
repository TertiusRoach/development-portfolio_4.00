//--|🠊 Label.select.tsx 🠈|--\\
import React from 'react';

//--|🠋 Functions 🠋|--\\
import createClass, { StyleProps } from './Label_select';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: StyleProps;
  onClick?: (event: React.MouseEvent<HTMLLabelElement>) => void;
}

export function LabelSelect({ info, style, onClick }: TheseProps) {
  return (
    <label
      className={`${info.labelName}-${info.blockName}_select-default ${createClass(style)}`}
      //--|===|--\\
      onClick={onClick}
    ></label>
  );
}
export default LabelSelect;
