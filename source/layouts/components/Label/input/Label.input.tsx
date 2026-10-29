//--|🠊 Label.input.tsx 🠈|--\\
import React from 'react';

//--|🠋 Functions 🠋|--\\
import createClass from './Label_input';
import { stripBrackets } from '../../../../scripts';

//--|🠊 AI Code: Review Please 2026-10-29 15:49 🠈|--\\
export interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    shade: '~dark~' | '~light~';
    color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(purple)' | '(orange)' | '(pink)' | '(yellow)' | '(brown)' | '(turquoise)';
    type: '{text}' | '{email}' | '{password}' | '{search}' | '{url}' | '{tel}';
  };
  cases: {
    placeholder: string;
  };
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function LabelInput({ info, style, cases, onChange }: TheseProps) {
  let inputType: string = stripBrackets(style.type, '{}'); //--|🠈 '{email}' becomes type="email", the six types share one look 🠈|--\\
  return (
    <label className={`${info.labelName}-${info.blockName}_input-default ${createClass(style)}`}>
      <input
        type={inputType}
        className="event"
        placeholder={cases.placeholder}
        //--|===|--\\
        onChange={onChange}
      />
    </label>
  );
}
export default LabelInput;
