//--|🠊 Label.toggle.tsx 🠈|--\\
import React from 'react';

//--|🠋 Functions 🠋|--\\
import createClass, { StyleProps } from './Label_toggle';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: StyleProps;
  onClick?: (event: React.MouseEvent<HTMLLabelElement>) => void;
}

export function LabelToggle({ info, style, onClick }: TheseProps) {
  return (
    <label
      className={`${info.labelName}-${info.blockName}_toggle-default ${createClass(style)}`}
      //--|===|--\\
      onClick={onClick}
    >
      <input className="event" type="checkbox" />
      <span className="switch"></span>
    </label>
  );
}
export default LabelToggle;
