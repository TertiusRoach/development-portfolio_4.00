//--|🠊 Label.switching.tsx 🠈|--\\
import React, { useEffect, useId, useRef, useState } from 'react';

//--|🠋 Functions 🠋|--\\
import createClass, { previewParent } from './Label_switching';
import { loadAsset, stripBrackets } from '../../../../scripts';

//--|🠊 AI Code: Review Please 2026-10-30 · One <FieldsetMultiselect> chip + <LabelCheckbox> + <LabelToggle> + <LabelRange> + one <FieldsetRadio> option, picked by cases.type 🠈|--\\
export interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    view?: 'top-lef' | 'top-cen' | 'top-rig' | 'mid-lef' | 'mid-cen' | 'mid-rig' | 'bot-lef' | 'bot-cen' | 'bot-rig'; //--|🠈 Missing is 'mid-cen' 🠈|--\\
    shade: '~dark~' | '~light~';
    color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(purple)' | '(orange)' | '(pink)' | '(yellow)' | '(brown)' | '(turquoise)';
    clarity: '⟨opaque⟩' | '⟨lucid⟩';
    text?: string; //--|🠈 {chip}'s words, {option}'s value 🠈|--\\
  };
  cases: {
    type: '{toggle}' | '{check}' | '{option}' | '{chip}' | '{slide}';
    indeterminate?: boolean; //--|🠈 {check} only: partly ticked 🠈|--\\
    min?: number; //--|🠈 {slide} only 🠈|--\\
    max?: number; //--|🠈 {slide} only 🠈|--\\
    step?: number; //--|🠈 {slide} only 🠈|--\\
    start?: number; //--|🠈 {slide} only: the first value, the browser keeps it from there 🠈|--\\
  };
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /*
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;

  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onMouseUp?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onTouchEnd?: (event: React.TouchEvent<HTMLInputElement>) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onTouchStart?: (event: React.TouchEvent<HTMLInputElement>) => void;
  onContextMenu?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onAnimationEnd?: (event: React.AnimationEvent<HTMLInputElement>) => void;
  onTransitionEnd?: (event: React.TransitionEvent<HTMLInputElement>) => void;
  */
}

function LabelSwitching({ info, style, cases, onChange }: TheseProps) {
  const labelRef = useRef<HTMLLabelElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const groupName = useId(); //--|🠈 {option}: the group name when the parent has no data-group yet 🠈|--\\
  const [genes, setGenes] = useState<{ group: string; input: string }>({ group: '', input: '{text}' });

  useEffect(() => {
    if (cases.type === '{option}') {
      setGenes(previewParent(labelRef.current, groupName)); //--|🠈 The parent only exists after the first render 🠈|--\\
    }
  }, [cases.type, groupName]);
  useEffect(() => {
    //--|🠊 {check}: partly ticked has no HTML attribute, only a property, so it's set after the <input> exists 🠈|--\\
    if (inputRef.current && cases.type === '{check}') {
      inputRef.current.indeterminate = cases.indeterminate ?? false;
    }
  }, [cases.type, cases.indeterminate]);
  let labelClass: string = `${info.labelName}-${info.blockName}_switching-${stripBrackets(cases.type, '{}')} ${createClass(style, cases)}`;
  switch (cases.type) {
    case '{toggle}':
      return caseToggle(labelClass, labelRef, onChange);
    case '{check}':
      return caseCheck(labelClass, labelRef, inputRef, onChange);
    case '{option}':
      return caseOption(labelClass, labelRef, style, genes, onChange);
    case '{chip}':
      return caseChip(labelClass, labelRef, style, onChange);
    case '{slide}':
      return caseSlider(labelClass, labelRef, cases, onChange);
  }
}
//--|🠋 Cases 🠋|--\\
const caseChip = (labelClass: string, labelRef: React.RefObject<HTMLLabelElement>, style: TheseProps['style'], onChange: TheseProps['onChange']) => {
  //--|🠊 {chip}: a pill with words, + to add it and ✕ once it's chosen 🠈|--\\
  let plusImage: string = loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/plus');
  let timesImage: string = loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/times');
  return (
    <label className={labelClass} ref={labelRef}>
      <input
        type="checkbox"
        value={style.text}
        className="event"
        //--|===|--\\
        onChange={onChange}
      />
      <span className="text">{style.text}</span>
      {/*--|🠊 Inline mask like <ButtonDefault>: the URL only exists at runtime 🠈|--*/}
      <span className="plus" style={{ maskImage: `url(${plusImage})`, WebkitMaskImage: `url(${plusImage})` }}></span>
      <span className="times" style={{ maskImage: `url(${timesImage})`, WebkitMaskImage: `url(${timesImage})` }}></span>
    </label>
  );
};
const caseCheck = (
  labelClass: string,
  labelRef: React.RefObject<HTMLLabelElement>,
  inputRef: React.RefObject<HTMLInputElement>,
  onChange: TheseProps['onChange'],
) => {
  //--|🠊 {check}: a sharp h × h square, ticked, partly ticked or empty 🠈|--\\
  let checkImage: string = loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/check');
  let minusImage: string = loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/minus');
  return (
    <label className={labelClass} ref={labelRef}>
      <input
        type="checkbox"
        className="event"
        ref={inputRef}
        //--|===|--\\
        onChange={onChange}
      />
      {/*--|🠊 Inline mask like <ButtonDefault>: the URL only exists at runtime 🠈|--*/}
      <span className="check" style={{ maskImage: `url(${checkImage})`, WebkitMaskImage: `url(${checkImage})` }}></span>
      <span className="minus" style={{ maskImage: `url(${minusImage})`, WebkitMaskImage: `url(${minusImage})` }}></span>
    </label>
  );
};
const caseToggle = (labelClass: string, labelRef: React.RefObject<HTMLLabelElement>, onChange: TheseProps['onChange']) => {
  //--|🠊 {toggle}: a round switch; the <input> stays first, <DivisionColourize> reads it by position 🠈|--\\
  return (
    <label className={labelClass} ref={labelRef}>
      <input
        type="checkbox"
        className="event"
        //--|===|--\\
        onChange={onChange}
      />
      <span className="switch"></span>
    </label>
  );
};
const caseSlider = (
  labelClass: string,
  labelRef: React.RefObject<HTMLLabelElement>,
  cases: TheseProps['cases'],
  onChange: TheseProps['onChange'],
) => {
  //--|🠊 {slide}: a range, missing numbers fall back to the browser's 0, 100 & 1 🠈|--\\
  return (
    <label className={labelClass} ref={labelRef}>
      <input
        type="range"
        className="event"
        min={cases.min}
        max={cases.max}
        step={cases.step}
        defaultValue={cases.start} //--|🠈 Only the first value, the browser keeps it from there 🠈|--\\
        //--|===|--\\
        onChange={onChange}
      />
    </label>
  );
};
const caseOption = (
  labelClass: string,
  labelRef: React.RefObject<HTMLLabelElement>,
  style: TheseProps['style'],
  genes: { group: string; input: string },
  onChange: TheseProps['onChange'],
) => {
  //--|🠊 {option}: a round radio dot, every {option} in the same <fieldset> or <form> shares its data-group 🠈|--\\
  return (
    <label className={labelClass} ref={labelRef}>
      <input
        type="radio"
        value={style.text}
        name={genes.group}
        className="event"
        //--|===|--\\
        onChange={onChange}
        //--|===|--\\
        aria-label={style.text} //--|🠈 A bare dot has no visible text, so its value is read aloud 🠈|--\\
      />
      <span className="dot"></span>
    </label>
  );
};
export default LabelSwitching;
