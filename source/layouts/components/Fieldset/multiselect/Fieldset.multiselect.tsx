//--|🠊 Fieldset.multiselect.tsx 🠈|--\\
import React from 'react';

//--|🠋 Functions 🠋|--\\
import createClass from './Fieldset_multiselect';
import { loadAsset } from '../../../../scripts';

//--|🠊 AI Code: Review Please 2026-10-29 17:22 🠈|--\\
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

export function FieldsetMultiselect({ info, style, cases, onChange }: TheseProps) {
  let plusImage: string = loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/plus');
  let timesImage: string = loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/times');
  return (
    <fieldset className={`${info.labelName}-${info.blockName}_multiselect-default ${createClass(style)}`}>
      {cases.list.map((item) => (
        <label className="chip" key={item}>
          <input
            type="checkbox"
            value={item}
            className="event"
            //--|===|--\\
            onChange={onChange}
          />
          <span className="text">{item}</span>
          {/*--|🠊 Inline mask like <ButtonDefault>: the URL only exists at runtime 🠈|--*/}
          <span className="plus" style={{ maskImage: `url(${plusImage})`, WebkitMaskImage: `url(${plusImage})` }}></span>
          <span className="times" style={{ maskImage: `url(${timesImage})`, WebkitMaskImage: `url(${timesImage})` }}></span>
        </label>
      ))}
    </fieldset>
  );
}
export default FieldsetMultiselect;
