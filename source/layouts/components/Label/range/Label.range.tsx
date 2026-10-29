//--|🠊 Label.range.tsx 🠈|--\\
import React from 'react';

//--|🠋 Functions 🠋|--\\
import createClass from './Label_range';

//--|🠊 AI Code: Review Please 2026-10-29 15:56 🠈|--\\
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
    min: number;
    max: number;
    step: number;
    start: number;
  };
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function LabelRange({ info, style, cases, onChange }: TheseProps) {
  return (
    <label className={`${info.labelName}-${info.blockName}_range-default ${createClass(style)}`}>
      <input
        type="range"
        className="event"
        min={cases.min}
        max={cases.max}
        step={cases.step}
        defaultValue={cases.start} //--|🠈 Only the first value, the browser keeps it from there 🠈|--\\
        //--|===|--\\
        onChange={onChange}
      />
    </label>
  );
}
export default LabelRange;
