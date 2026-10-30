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
    min?: number; //--|🠈 {number} only 🠈|--\\
    max?: number; //--|🠈 {number} only 🠈|--\\
    step?: number; //--|🠈 {number} only 🠈|--\\
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
    case '{select}':
      return caseSelect(labelClass, cases, pointerRef, onChange);
    case '{combo}':
      return caseCombo(labelClass, style, cases, listId, onChange);
    case '{number}':
      return caseNumber(labelClass, style, cases, numberRef, onChange);
  }
}
//--|🠋 Cases 🠋|--\\
const caseSelect = (labelClass: string, cases: TheseProps['cases'], pointerRef: React.MutableRefObject<boolean>, onChange: TheseProps['onChange']) => {
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
};
const caseCombo = (labelClass: string, style: TheseProps['style'], cases: TheseProps['cases'], listId: string, onChange: TheseProps['onChange']) => {
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
};
const caseNumber = (labelClass: string, style: TheseProps['style'], cases: TheseProps['cases'], numberRef: React.RefObject<HTMLInputElement>, onChange: TheseProps['onChange']) => {
  //--|🠊 {number}: a number with its own up & down carets 🠈|--\\
  let upImage: string = loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/caret-up');
  let downImage: string = loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/caret-down');
  return (
    <label className={labelClass}>
      <input
        type="number"
        className="event"
        ref={numberRef}
        min={cases.min}
        max={cases.max}
        step={cases.step}
        placeholder={style.text}
        //--|===|--\\
        onPaste={(event) => pasteNumber(event)} //--|🠈 AI Code: Review Please 2026-10-30 🠈|--\\
        onChange={onChange}
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
};
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
  //--|🠊 AI Code: Review Please 2026-10-30 · Only numbers and the symbols a number uses (+ - .): no letters (Chrome lets 'e' & 'E' through for exponents) and no other special characters 🠈|--\\
  if (event.key.length === 1 && /[^0-9+\-.]/.test(event.key) && !event.ctrlKey && !event.metaKey) {
    event.preventDefault(); //--|🠈 Ctrl/⌘ shortcuts (copy, paste, select all) still work; Backspace, arrows & Tab are longer than one character 🠈|--\\
  }
};
const pasteNumber = (event: React.ClipboardEvent<HTMLInputElement>): void => {
  //--|🠊 AI Code: Review Please 2026-10-30 · A pasted value with anything but numbers and + - . in it is refused 🠈|--\\
  if (/[^0-9+\-.]/.test(event.clipboardData.getData('text').trim())) {
    event.preventDefault();
  }
};
export default LabelSelection;
