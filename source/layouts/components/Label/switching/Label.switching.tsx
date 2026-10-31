//--|🠊 Label.switching.tsx 🠈|--\\
import React, { useEffect, useRef, useState } from 'react';

//--|🠋 Functions 🠋|--\\
import createClass from './Label_switching';
import { loadAsset, stripBrackets } from '../../../../scripts';

export interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    text?: string; //--|🠈 {chip}'s words, {option}'s value 🠈|--\\
    shade: '~dark~' | '~light~';
    clarity: '⟨opaque⟩' | '⟨lucid⟩';
    view?: 'top-lef' | 'top-cen' | 'top-rig' | 'mid-lef' | 'mid-cen' | 'cen-mid' | 'mid-rig' | 'bot-lef' | 'bot-cen' | 'bot-rig';
    color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(purple)' | '(orange)' | '(pink)' | '(yellow)' | '(brown)' | '(turquoise)';
  };
  cases: {
    type: '{toggle}' | '{check}' | '{option}' | '{chip}'; //--|🠈 Only on & off: {slide} holds many values, so it'll be its own component 🠈|--\\
    mark?: boolean; //--|🠈 On from the start, off when it's missing 🠈|--\\
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
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;

  const labelRef = useRef<HTMLLabelElement>(null);
  const [group, setGroup] = useState<string>('');
  useEffect(() => {
    //--|🠊 AI Code: Review Please 2026-10-31 · Runs once the {option} is on the page: the first one names its <fieldset> or <form>, the others read it 🠈|--\\
    //--|🠊 Kept in state so React renders the name itself, otherwise it doesn't know the radios are a group and skips the switch back 🠈|--\\
    let parentElement = labelRef.current?.closest('fieldset, form') as HTMLElement | null;
    if (parentElement) {
      if (!parentElement.dataset.group) {
        parentElement.dataset.group = `option-${Math.random().toString(36).slice(2, 8)}`; //--|🠈 Six random letters & numbers, so every group gets its own name 🠈|--\\
      }
      setGroup(parentElement.dataset.group); //--|🠈 No parent, no name: a lone radio needs none 🠈|--\\
    }
  }, []);

  let casesType = stripBrackets(cases.type, '{}') as string;
  let labelClass: string = `${labelName}-${blockName}_switching-${casesType} ${createClass(style, cases)}`;
  switch (cases.type) {
    case '{chip}': {
      //--|🠊 {chip}: a pill with words, + to add it and ✕ once it's chosen 🠈|--\\
      let plusImage: string = loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/plus');
      let timesImage: string = loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/times');
      return (
        <label className={labelClass}>
          <input
            type="checkbox"
            defaultChecked={cases.mark} //--|🠈 Only the first state, the browser keeps it from there 🠈|--\\
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
    }
    case '{check}': {
      //--|🠊 {check}: a sharp h × h square, ticked or empty 🠈|--\\
      let checkImage: string = loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/check');
      return (
        <label className={labelClass}>
          <input
            type="checkbox"
            defaultChecked={cases.mark} //--|🠈 Only the first state, the browser keeps it from there 🠈|--\\
            className="event"
            //--|===|--\\
            onChange={onChange}
          />
          {/*--|🠊 Inline mask like <ButtonDefault>: the URL only exists at runtime 🠈|--*/}
          <span className="check" style={{ maskImage: `url(${checkImage})`, WebkitMaskImage: `url(${checkImage})` }}></span>
        </label>
      );
    }
    case '{toggle}': {
      //--|🠊 {toggle}: a round switch; the <input> stays first, <DivisionColourize> reads it by position 🠈|--\\
      return (
        <label className={labelClass}>
          <input
            type="checkbox"
            defaultChecked={cases.mark} //--|🠈 Only the first state, the browser keeps it from there 🠈|--\\
            className="event"
            //--|===|--\\
            onChange={onChange}
          />
          <span className="switch"></span>
        </label>
      );
    }
    case '{option}': {
      //--|🠊 {option}: a round radio dot, every {option} in the same <fieldset> or <form> shares its data-group 🠈|--\\
      return (
        <label className={labelClass} ref={labelRef}>
          <input
            type="radio"
            name={group} //--|🠈 AI Code: Review Please 2026-10-31 · Radios only exclude each other with the same name 🠈|--\\
            defaultChecked={cases.mark} //--|🠈 Only the first state, the browser keeps it from there 🠈|--\\
            value={style.text}
            className="event"
            //--|===|--\\
            onChange={onChange}
            //--|===|--\\
            aria-label={style.text} //--|🠈 A bare dot has no visible text, so its value is read aloud 🠈|--\\
          />
          <span className="dot"></span>
        </label>
      );
    }
  }
}
export default LabelSwitching;
