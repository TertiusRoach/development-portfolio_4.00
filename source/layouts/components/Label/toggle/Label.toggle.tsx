//--|🠊 Label.toggle.tsx 🠈|--\\
import React, { useEffect } from 'react';
//--|🠋 Styles 🠋|--\\
import './Label.toggle.scss';
//--|🠋 Functions 🠋|--\\
import stripBrackets from '../../components';

import { createClass } from './Label_toggle';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    type: '{toggle}';
    shade: '~dark~' | '~medium~' | '~light~';
    color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(yellow)' | '(purple)' | '(turquoise)';
  };
  onClick?: () => void;
}

const LabelToggle: React.FC<TheseProps> = ({ info, style, onClick }) => {
  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;

  useEffect(() => {}, [pageName, blockName, labelName]);

  return (
    <label onClick={onClick} className={`${labelName}-${blockName}_label-toggle ${createClass(style.shade, style.color)}`}>
      <input className="event" type="checkbox" />
      <span className="switch"></span>
    </label>
  );
};

export default LabelToggle;
