//--|🠊 Label.textarea.tsx 🠈|--\\
import React, { useEffect, useRef, useState } from 'react';

//--|🠋 Functions 🠋|--\\
import createClass, { previewParent } from './Label_textarea';
import { stripBrackets } from '../../../../scripts';

//--|🠊 AI Code: Review Please 2026-10-30 · <LabelTextarea> + <LabelInput> + one <FieldsetOtp> box, picked by cases.type 🠈|--\\
export interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    size?: '<h1>' | '<p>' | null; //--|🠈 Only {block} has sizes, missing or null is nul 🠈|--\\
    view?: 'top-lef' | 'top-cen' | 'top-rig' | 'mid-lef' | 'mid-cen' | 'mid-rig' | 'bot-lef' | 'bot-cen' | 'bot-rig'; //--|🠈 Missing is 'mid-cen' 🠈|--\\
    shade: '~dark~' | '~light~';
    color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(purple)' | '(orange)' | '(pink)' | '(yellow)' | '(brown)' | '(turquoise)';
    clarity: '⟨opaque⟩' | '⟨lucid⟩';
    text?: string; //--|🠈 The placeholder 🠈|--\\
  };
  cases: {
    type: '{text}' | '{input}' | '{block}';
  };
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /*
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onMouseUp?: (event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onTouchEnd?: (event: React.TouchEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onTouchStart?: (event: React.TouchEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onContextMenu?: (event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onAnimationEnd?: (event: React.AnimationEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onTransitionEnd?: (event: React.TransitionEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  */
}

export function LabelTextarea({ info, style, cases, onChange }: TheseProps) {
  const labelRef = useRef<HTMLLabelElement>(null);
  const [genes, setGenes] = useState<{ group: string; input: string }>({ group: '', input: '{text}' });
  useEffect(() => {
    setGenes(previewParent(labelRef.current)); //--|🠈 The parent only exists after the first render 🠈|--\\
  }, []);
  let labelClass: string = `${info.labelName}-${info.blockName}_textarea-${stripBrackets(cases.type, '{}')} ${createClass(style, cases)}`;
  switch (cases.type) {
    case '{text}': {
      //--|🠊 {text}: a <textarea> that fills its parent 🠈|--\\
      return (
        <label className={labelClass} ref={labelRef}>
          <textarea
            className="event"
            placeholder={style.text}
            //--|===|--\\
            onChange={onChange}
          ></textarea>
        </label>
      );
    }
    case '{input}': {
      //--|🠊 {input}: one line, its type comes from the parent's data-input, '{text}' when there is none 🠈|--\\
      return (
        <label className={labelClass} ref={labelRef}>
          <input
            type={stripBrackets(genes.input, '{}')}
            className="event"
            placeholder={style.text}
            //--|===|--\\
            onChange={onChange}
          />
        </label>
      );
    }
    case '{block}': {
      //--|🠊 {block}: one character, the <fieldset> or <form> around it holds the row 🠈|--\\
      return (
        <label className={labelClass} ref={labelRef}>
          <input
            type="text"
            maxLength={1}
            inputMode="text"
            className="event"
            pattern="[A-Z0-9]" //--|🠈 AI Code: Review Please 2026-10-30 · One UPPERCASE letter or number; nextBlock() & pasteBlocks() turn lowercase into uppercase 🠈|--\\
            placeholder={style.text}
            autoComplete="one-time-code"
            //--|===|--\\
            onPaste={(event) => pasteBlocks(event)}
            onInput={(event) => nextBlock(event)}
            onFocus={(event) => event.currentTarget.select()} //--|🠈 Typing replaces the box's character 🠈|--\\
            onChange={onChange}
            onKeyDown={(event) => backBlock(event)}
          />
        </label>
      );
    }
  }
}
//--|🠋 Blocks 🠋|--\\
//--|🠊 Moves between the boxes through the DOM, so the browser keeps every value 🠈|--\\
const listBlocks = (input: HTMLInputElement): Array<HTMLInputElement> => {
  //--|🠊 Every {block} inside the same <fieldset> or <form>, just this one without a parent 🠈|--\\
  let parentElement = input.closest('fieldset, form') as HTMLElement | null;
  if (!parentElement) {
    return [input];
  }
  return Array.from(parentElement.querySelectorAll("label[class*='_textarea-block'] input")) as Array<HTMLInputElement>;
};
const nextBlock = (event: React.FormEvent<HTMLInputElement>): void => {
  //--|🠊 A typed character jumps to the next box 🠈|--\\
  event.currentTarget.value = event.currentTarget.value.replace(/[^A-Za-z0-9]/g, '').toUpperCase(); //--|🠈 AI Code: Review Please 2026-10-30 · Letters & numbers only, and a typed 'a' becomes 'A', like pasteBlocks() 🠈|--\\
  let blockList: Array<HTMLInputElement> = listBlocks(event.currentTarget);
  let blockIndex: number = blockList.indexOf(event.currentTarget);
  if (event.currentTarget.value && blockIndex < blockList.length - 1) {
    blockList[blockIndex + 1].focus();
  }
};
const backBlock = (event: React.KeyboardEvent<HTMLInputElement>): void => {
  //--|🠊 Backspace in an empty box steps back to the one before 🠈|--\\
  let blockList: Array<HTMLInputElement> = listBlocks(event.currentTarget);
  let blockIndex: number = blockList.indexOf(event.currentTarget);
  if (event.key === 'Backspace' && !event.currentTarget.value && blockIndex > 0) {
    blockList[blockIndex - 1].focus();
  }
};
const pasteBlocks = (event: React.ClipboardEvent<HTMLInputElement>): void => {
  //--|🠊 A pasted code fills the boxes from this one onward, letters & numbers only 🠈|--\\
  event.preventDefault();
  let blockList: Array<HTMLInputElement> = listBlocks(event.currentTarget);
  let blockIndex: number = blockList.indexOf(event.currentTarget);
  let pastedText: string = event.clipboardData.getData('text').replace(/[^A-Za-z0-9]/g, '').toUpperCase(); //--|🠈 AI Code: Review Please 2026-10-30 · Pasted codes are UPPERCASE too 🠈|--\\
  for (let i = 0; i < pastedText.length && blockIndex + i < blockList.length; i++) {
    blockList[blockIndex + i].value = pastedText[i];
  }
  blockList[Math.min(blockIndex + pastedText.length, blockList.length) - 1]?.focus();
};
export default LabelTextarea;
