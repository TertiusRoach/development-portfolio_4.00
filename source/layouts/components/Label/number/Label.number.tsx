//--|🠊 Label.number.tsx 🠈|--\\
import React, { useRef } from 'react';

//--|🠋 Functions 🠋|--\\
import createClass from './Label_number';
import { loadAsset } from '../../../../scripts';

//--|🠊 AI Code: Review Please 2026-10-29 15:51 🠈|--\\
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
    min: number;
    max: number;
    step: number;
    placeholder: string;
  };
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function LabelNumber({ info, style, cases, onChange }: TheseProps) {
  let upImage: string = loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/caret-up');
  let downImage: string = loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/caret-down');
  const numberRef = useRef<HTMLInputElement>(null);
  return (
    <label className={`${info.labelName}-${info.blockName}_number-default ${createClass(style)}`}>
      <input
        type="number"
        className="event"
        ref={numberRef}
        min={cases.min}
        max={cases.max}
        step={cases.step}
        placeholder={cases.placeholder}
        //--|===|--\\
        onChange={onChange}
      />
      {/*--|🠊 Inline mask like <ButtonDefault>: the URL only exists at runtime 🠈|--*/}
      <span
        className="up"
        style={{ maskImage: `url(${upImage})`, WebkitMaskImage: `url(${upImage})` }}
        //--|===|--\\
        onClick={() => stepNumber(numberRef.current, 'up')}
      ></span>
      <span
        className="down"
        style={{ maskImage: `url(${downImage})`, WebkitMaskImage: `url(${downImage})` }}
        //--|===|--\\
        onClick={() => stepNumber(numberRef.current, 'down')}
      ></span>
    </label>
  );
}
const stepNumber = (input: HTMLInputElement | null, direction: 'up' | 'down'): void => {
  //--|🠊 stepUp() & stepDown() keep min, max and step, so the browser still owns the value 🠈|--\\
  if (!input) {
    return;
  }
  if (direction === 'up') {
    input.stepUp();
  } else {
    input.stepDown();
  }
  input.dispatchEvent(new Event('input', { bubbles: true })); //--|🠈 Stepping fires no event on its own, this lets onChange hear it 🠈|--\\
};
export default LabelNumber;
