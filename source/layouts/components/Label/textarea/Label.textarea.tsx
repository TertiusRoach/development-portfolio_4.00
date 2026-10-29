//--|🠊 Label.textarea.tsx 🠈|--\\
import React from 'react';

//--|🠋 Functions 🠋|--\\
import createClass from './Label_textarea';

//--|🠊 AI Code: Review Please 2026-10-29 15:53 🠈|--\\
export interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    shade: '~dark~' | '~light~';
    color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(purple)' | '(orange)' | '(pink)' | '(yellow)' | '(brown)' | '(turquoise)';
  };
  cases: {
    placeholder: string;
  };
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function LabelTextarea({ info, style, cases, onChange }: TheseProps) {
  return (
    <label className={`${info.labelName}-${info.blockName}_textarea-default ${createClass(style)}`}>
      <textarea
        className="event"
        placeholder={cases.placeholder}
        //--|===|--\\
        onChange={onChange}
      ></textarea>
    </label>
  );
}
export default LabelTextarea;
