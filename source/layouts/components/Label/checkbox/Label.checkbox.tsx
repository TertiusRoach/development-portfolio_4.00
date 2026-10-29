//--|🠊 Label.checkbox.tsx 🠈|--\\
import React, { useEffect, useRef } from 'react';

//--|🠋 Functions 🠋|--\\
import createClass from './Label_checkbox';
import { loadAsset } from '../../../../scripts';

//--|🠊 AI Code: Review Please 2026-10-29 15:45 🠈|--\\
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
    indeterminate: boolean;
  };
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function LabelCheckbox({ info, style, cases, onChange }: TheseProps) {
  let checkImage: string = loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/check');
  let minusImage: string = loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/minus');
  const checkboxRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    //--|🠊 Partly ticked has no HTML attribute, only a property, so it's set after the <input> exists 🠈|--\\
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = cases.indeterminate;
    }
  }, [cases.indeterminate]);
  return (
    <label className={`${info.labelName}-${info.blockName}_checkbox-default ${createClass(style)}`}>
      <input
        type="checkbox"
        className="event"
        ref={checkboxRef}
        //--|===|--\\
        onChange={onChange}
      />
      {/*--|🠊 Inline mask like <ButtonDefault>: the URL only exists at runtime 🠈|--*/}
      <span className="check" style={{ maskImage: `url(${checkImage})`, WebkitMaskImage: `url(${checkImage})` }}></span>
      <span className="minus" style={{ maskImage: `url(${minusImage})`, WebkitMaskImage: `url(${minusImage})` }}></span>
    </label>
  );
}
export default LabelCheckbox;
