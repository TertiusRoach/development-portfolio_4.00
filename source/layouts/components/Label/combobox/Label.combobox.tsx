//--|🠊 Label.combobox.tsx 🠈|--\\
import React, { useId } from 'react';

//--|🠋 Functions 🠋|--\\
import createClass from './Label_combobox';
import { loadAsset } from '../../../../scripts';

//--|🠊 AI Code: Review Please 2026-10-29 16:02 🠈|--\\
export interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    shade: '~dark~' | '~light~';
    color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(purple)' | '(orange)' | '(pink)' | '(yellow)' | '(brown)' | '(turquoise)';
    view: '-left-' | '-right-'; //--|🠈 AI Code: Review Please 2026-10-29 17:04 · The side the caret sits on 🠈|--\\
  };
  cases: {
    list: Array<string>;
    placeholder: string;
  };
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function LabelCombobox({ info, style, cases, onChange }: TheseProps) {
  let caretImage: string = loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/caret-down'); //--|🠈 Same caret as <LabelSelect> 🠈|--\\
  const listId = useId(); //--|🠈 A <datalist> only links by id, and labelName repeats, so React makes one per instance 🠈|--\\
  return (
    <label className={`${info.labelName}-${info.blockName}_combobox-default ${createClass(style)}`}>
      <input
        type="text"
        list={listId}
        className="event"
        placeholder={cases.placeholder}
        //--|===|--\\
        onChange={onChange}
      />
      <datalist id={listId}>
        {cases.list.map((item) => (
          <option key={item} value={item}></option>
        ))}
      </datalist>
      {/*--|🠊 Inline mask like <ButtonDefault>: the URL only exists at runtime 🠈|--*/}
      <span className="arrow" style={{ maskImage: `url(${caretImage})`, WebkitMaskImage: `url(${caretImage})` }}></span>
    </label>
  );
}
export default LabelCombobox;
