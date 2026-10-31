//--|🠊 Label.selection.tsx 🠈|--\\
import React, { useId, useRef } from 'react';

//--|🠋 Functions 🠋|--\\
import createClass from './Label_selection';
import { loadAsset, stripBrackets } from '../../../../scripts';

//--|🠊 AI Code: Review Please 2026-10-30 · <LabelSelect> + <LabelCombobox> + <LabelNumber>, picked by cases.type 🠈|--\\
export interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    view?: 'top-lef' | 'top-cen' | 'top-rig' | 'mid-lef' | 'mid-cen' | 'cen-mid' | 'mid-rig' | 'bot-lef' | 'bot-cen' | 'bot-rig'; //--|🠈 Missing is 'mid-cen'; the left column puts the caret on the left, 'cen-mid' rounds both ends with the caret on the left, the rest on the right 🠈|--\\
    shade: '~dark~' | '~light~';
    color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(purple)' | '(orange)' | '(pink)' | '(yellow)' | '(brown)' | '(turquoise)';
    clarity: '⟨opaque⟩' | '⟨lucid⟩';
    text?: string; //--|🠈 The placeholder, {combo} & {number} 🠈|--\\
  };
  cases: {
    type: '{select}' | '{combo}' | '{number}';
    list?: Array<string>; //--|🠈 {select} & {combo}: the choices 🠈|--\\
  };
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  /*
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement | HTMLSelectElement>) => void;

  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onMouseUp?: (event: React.MouseEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onTouchEnd?: (event: React.TouchEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onTouchStart?: (event: React.TouchEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onContextMenu?: (event: React.MouseEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onAnimationEnd?: (event: React.AnimationEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onTransitionEnd?: (event: React.TransitionEvent<HTMLInputElement | HTMLSelectElement>) => void;
  */
}

export function LabelSelection({ info, style, cases, onChange }: TheseProps) {
  const pointerRef = useRef<boolean>(false); //--|🠈 {select}: true while a mouse or finger chose the <select> 🠈|--\\
  const numberRef = useRef<HTMLInputElement>(null); //--|🠈 {number}: the carets step this <input> 🠈|--\\
  const listId = useId(); //--|🠈 {combo}: a <datalist> only links by id, and labelName repeats, so React makes one per instance 🠈|--\\
  let labelClass: string = `${info.labelName}-${info.blockName}_selection-${stripBrackets(cases.type, '{}')} ${createClass(style, cases)}`;
  switch (cases.type) {
    case '{select}': {
      //--|🠊 {select}: the browser's own list, with a caret 🠈|--\\
      let caretImage: string = loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/caret-down'); //--|🠈 Same caret as <MenuSwipe> & <MenuScroll> 🠈|--\\
      return (
        <label className={labelClass}>
          <select
            className="event"
            //--|===|--\\
            onChange={onChange}
            onMouseDown={() => (pointerRef.current = true)} //--|🠈 Runs before onFocus, so a click is never mistaken for the keyboard 🠈|--\\
            onFocus={(event) => markKeyboard(event, pointerRef)}
            onBlur={(event) => clearKeyboard(event, pointerRef)}
          >
            {(cases.list ?? []).map((item) => (
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
    case '{combo}': {
      //--|🠊 {combo}: type anything, or pick from the list 🠈|--\\
      let caretImage: string = loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/caret-down'); //--|🠈 Same caret as {select} 🠈|--\\
      return (
        <label className={labelClass}>
          <input
            type="text"
            list={listId}
            className="event"
            placeholder={style.text}
            //--|===|--\\
            onChange={onChange}
          />
          <datalist id={listId}>
            {(cases.list ?? []).map((item) => (
              <option key={item} value={item}></option>
            ))}
          </datalist>
          {/*--|🠊 Inline mask like <ButtonDefault>: the URL only exists at runtime 🠈|--*/}
          <span className="arrow" style={{ maskImage: `url(${caretImage})`, WebkitMaskImage: `url(${caretImage})` }}></span>
        </label>
      );
    }
    case '{number}': {
      //--|🠊 {number}: a count from 1 to 9999 with its own up & down carets, the browser's step of 1 counts 1 2 3 4 5 🠈|--\\
      let upImage: string = loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/caret-up');
      let downImage: string = loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/caret-down');
      return (
        <label className={labelClass}>
          <input
            type="number"
            className="event"
            ref={numberRef}
            min={1}
            max={9999} //--|🠈 Four digits, the same 0000 the width fits 🠈|--\\
            defaultValue={1} //--|🠈 Only the first value, the browser keeps it from there 🠈|--\\
            placeholder={style.text}
            //--|===|--\\
            onPaste={(event) => pasteNumber(event)} //--|🠈 AI Code: Review Please 2026-10-30 🠈|--\\
            onChange={(event) => limitNumber(event, onChange)} //--|🠈 AI Code: Review Please 2026-10-31 🠈|--\\
            onKeyDown={(event) => blockCharacters(event)} //--|🠈 AI Code: Review Please 2026-10-30 🠈|--\\
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
  }
}
//--|🠋 Select 🠋|--\\
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
//--|🠋 Number 🠋|--\\
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
const blockCharacters = (event: React.KeyboardEvent<HTMLInputElement>): void => {
  //--|🠊 AI Code: Review Please 2026-10-31 · Only the digits 0 to 9: no letters (Chrome lets 'e' & 'E' through for exponents), no + - . and no other special characters 🠈|--\\
  if (event.key.length === 1 && /[^0-9]/.test(event.key) && !event.ctrlKey && !event.metaKey) {
    event.preventDefault(); //--|🠈 Ctrl/⌘ shortcuts (copy, paste, select all) still work; Backspace, arrows & Tab are longer than one character 🠈|--\\
  }
};
const pasteNumber = (event: React.ClipboardEvent<HTMLInputElement>): void => {
  //--|🠊 AI Code: Review Please 2026-10-31 · A pasted value with anything but the digits 0 to 9 in it is refused 🠈|--\\
  if (/[^0-9]/.test(event.clipboardData.getData('text').trim())) {
    event.preventDefault();
  }
};
const limitNumber = (event: React.ChangeEvent<HTMLInputElement>, onChange: TheseProps['onChange']): void => {
  //--|🠊 AI Code: Review Please 2026-10-31 · max only stops the carets, so a typed or pasted count is trimmed to 1 – 9999 here: no leading 0, no fifth digit 🠈|--\\
  let trimmed: string = event.target.value.replace(/^0+/, '').slice(0, 4);
  if (trimmed !== event.target.value) {
    event.target.value = trimmed;
  }
  onChange?.(event); //--|🠈 The parent hears the trimmed value 🠈|--\\
};
export default LabelSelection;
