//--|🠊 Label.toggle.tsx 🠈|--\\
import React, { useEffect } from 'react';
//--|🠋 Styles 🠋|--\\
import './Label.toggle.scss';
//--|🠋 Functions 🠋|--\\
import stripBrackets from '../../components';
import { createClass } from './Label_select';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    type: '{toggle}';
    shade: '~dark~' | '~light~';
    color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(yellow)' | '(purple)' | '(orange)' | '(pink)' | '(brown)' | '(turquoise)';
  };
  onClick?: () => void;
}

const LabelSelect: React.FC<TheseProps> = ({ info, style, onClick }) => {
  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;

  useEffect(() => {}, [pageName, blockName, labelName]);

  return (
    <label onClick={onClick} className={`${labelName}-${blockName}_label-select ${createClass(style.shade, style.color)}`}>
      <input className="event" type="checkbox" />
      <span className="switch"></span>
    </label>
  );
};

export default LabelSelect;
