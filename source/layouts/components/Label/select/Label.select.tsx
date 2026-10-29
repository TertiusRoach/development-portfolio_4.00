//--|🠊 Label.select.tsx 🠈|--\\
import React, { useRef } from 'react';

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
    view: '-left-' | '-right-'; //--|🠈 AI Code: Review Please 2026-10-29 17:04 · The side the caret sits on 🠈|--\\
  };
  cases: {
    list: Array<string>;
  };
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function LabelSelect({ info, style, cases, onChange }: TheseProps) {
  let caretImage: string = loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/caret-down'); //--|🠈 Same caret as <MenuSwipe> & <MenuScroll> 🠈|--\\
  const pointerRef = useRef<boolean>(false); //--|🠈 AI Code: Review Please 2026-10-29 17:05 · True while a mouse or finger chose the <select> 🠈|--\\
  return (
    <label className={`${info.labelName}-${info.blockName}_select-default ${createClass(style)}`}>
      {/*--|🠊 AI Code: Review Please 2026-10-29 🠈|--*/}
      <select
        className="event"
        //--|===|--\\
        onChange={onChange}
        onMouseDown={() => (pointerRef.current = true)} //--|🠈 AI Code: Review Please 2026-10-29 17:05 · Runs before onFocus, so a click is never mistaken for the keyboard 🠈|--\\
        onFocus={(event) => markKeyboard(event, pointerRef)}
        onBlur={(event) => clearKeyboard(event, pointerRef)}
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
//--|🠊 AI Code: Review Please 2026-10-29 17:05 🠈|--\\
const markKeyboard = (event: React.FocusEvent<HTMLSelectElement>, pointerRef: React.MutableRefObject<boolean>): void => {
  //--|🠊 Chrome counts a clicked <select> as :focus-visible, so the script tells the keyboard from the mouse itself 🠈|--\\
  if (!pointerRef.current) {
    event.currentTarget.parentElement?.classList.add('highlight'); //--|🠈 .highlight swaps to the opposite shade (RULEBOOK, State Classes) 🠈|--\\
  }
};
const clearKeyboard = (event: React.FocusEvent<HTMLSelectElement>, pointerRef: React.MutableRefObject<boolean>): void => {
  //--|🠊 Leaving the <select> clears both, so the next focus starts fresh 🠈|--\\
  event.currentTarget.parentElement?.classList.remove('highlight');
  pointerRef.current = false;
};
export default LabelSelect;
