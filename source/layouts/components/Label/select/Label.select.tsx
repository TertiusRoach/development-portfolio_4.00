//--|🠊 Label.select.tsx 🠈|--\\
import React from 'react';

//--|🠋 Functions 🠋|--\\
import createClass from './Label_select';
import { loadAsset } from '../../../../scripts';

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
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function LabelSelect({ info, style, cases, onChange }: TheseProps) {
  let caretImage: string = loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/caret-down'); //--|🠈 Same caret as <MenuSwipe> & <MenuScroll> 🠈|--\\
  return (
    <label className={`${info.labelName}-${info.blockName}_select-default ${createClass(style)}`}>
      {/*--|🠊 AI Code: Review Please 2026-10-29 🠈|--*/}
      <select
        className="event"
        //--|===|--\\
        onChange={onChange}
      >
        {cases.list.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      {/*--|🠊 Inline mask like <ButtonDefault>: the URL only exists at runtime 🠈|--*/}
      <span className="arrow" style={{ maskImage: `url(${caretImage})`, WebkitMaskImage: `url(${caretImage})` }}></span>
    </label>
  );
}
export default LabelSelect;
