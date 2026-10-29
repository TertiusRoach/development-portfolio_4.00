//--|🠊 Fieldset.segment.tsx 🠈|--\\
import React, { useId } from 'react';

//--|🠋 Functions 🠋|--\\
import createClass from './Fieldset_segment';

//--|🠊 AI Code: Review Please 2026-10-29 17:21 🠈|--\\
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
    list: Array<string>;
  };
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FieldsetSegment({ info, style, cases, onChange }: TheseProps) {
  const groupName = useId(); //--|🠈 Radios only group by name, and labelName repeats, so React makes one per instance 🠈|--\\
  return (
    <fieldset className={`${info.labelName}-${info.blockName}_segment-default ${createClass(style)}`}>
      {cases.list.map((item, index) => (
        <label className="segment" key={item}>
          <input
            type="radio"
            value={item}
            name={groupName}
            className="event"
            defaultChecked={index === 0} //--|🠈 A segmented control always has one chosen, the browser keeps it from there 🠈|--\\
            //--|===|--\\
            onChange={onChange}
          />
          <span className="text">{item}</span>
        </label>
      ))}
    </fieldset>
  );
}
export default FieldsetSegment;
