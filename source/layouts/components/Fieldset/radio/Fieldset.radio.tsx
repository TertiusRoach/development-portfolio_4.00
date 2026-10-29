//--|🠊 Fieldset.radio.tsx 🠈|--\\
import React, { useId } from 'react';

//--|🠋 Functions 🠋|--\\
import createClass from './Fieldset_radio';

//--|🠊 AI Code: Review Please 2026-10-29 17:16 🠈|--\\
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

export function FieldsetRadio({ info, style, cases, onChange }: TheseProps) {
  const groupName = useId(); //--|🠈 Radios only group by name, and labelName repeats, so React makes one per instance 🠈|--\\
  return (
    <fieldset className={`${info.labelName}-${info.blockName}_radio-default ${createClass(style)}`}>
      {cases.list.map((item) => (
        <label className="option" key={item}>
          <input
            type="radio"
            value={item}
            name={groupName}
            className="event"
            //--|===|--\\
            onChange={onChange}
            //--|===|--\\
            aria-label={item} //--|🠈 A bare dot has no visible text, so its value is read aloud 🠈|--\\
          />
          <span className="dot"></span>
        </label>
      ))}
    </fieldset>
  );
}
export default FieldsetRadio;
