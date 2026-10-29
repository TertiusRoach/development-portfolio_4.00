//--|🠊 Fieldset.otp.tsx 🠈|--\\
import React from 'react';

//--|🠋 Functions 🠋|--\\
import createClass from './Fieldset_otp';

//--|🠊 AI Code: Review Please 2026-10-29 17:22 🠈|--\\
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
    length: number;
  };
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FieldsetOtp({ info, style, cases, onChange }: TheseProps) {
  return (
    <fieldset className={`${info.labelName}-${info.blockName}_otp-default ${createClass(style)}`}>
      {Array.from({ length: cases.length }, (_, index) => (
        <label className="digit" key={index}>
          <input
            type="text"
            maxLength={1}
            inputMode="text"
            className="event"
            pattern="[A-Za-z0-9]" //--|🠈 Same rule as <FieldsetCode> in Form/verify, so it can replace it later 🠈|--\\
            autoComplete="one-time-code"
            //--|===|--\\
            onPaste={(event) => pasteDigits(event)}
            onInput={(event) => nextDigit(event)}
            onFocus={(event) => event.currentTarget.select()} //--|🠈 Typing replaces the box's character 🠈|--\\
            onChange={onChange}
            onKeyDown={(event) => backDigit(event)}
            //--|===|--\\
            aria-label={`Digit ${index + 1}`}
          />
        </label>
      ))}
    </fieldset>
  );
}
//--|🠊 AI Code: Review Please 2026-10-29 17:22 · Moves between the boxes through the DOM, so the browser keeps every value 🠈|--\\
const listDigits = (input: HTMLInputElement): Array<HTMLInputElement> => {
  return Array.from(input.closest('fieldset')?.querySelectorAll('input') ?? []) as Array<HTMLInputElement>;
};
const nextDigit = (event: React.FormEvent<HTMLInputElement>): void => {
  //--|🠊 A typed character jumps to the next box 🠈|--\\
  let digitList: Array<HTMLInputElement> = listDigits(event.currentTarget);
  let digitIndex: number = digitList.indexOf(event.currentTarget);
  if (event.currentTarget.value && digitIndex < digitList.length - 1) {
    digitList[digitIndex + 1].focus();
  }
};
const backDigit = (event: React.KeyboardEvent<HTMLInputElement>): void => {
  //--|🠊 Backspace in an empty box steps back to the one before 🠈|--\\
  let digitList: Array<HTMLInputElement> = listDigits(event.currentTarget);
  let digitIndex: number = digitList.indexOf(event.currentTarget);
  if (event.key === 'Backspace' && !event.currentTarget.value && digitIndex > 0) {
    digitList[digitIndex - 1].focus();
  }
};
const pasteDigits = (event: React.ClipboardEvent<HTMLInputElement>): void => {
  //--|🠊 A pasted code fills the boxes from this one onward, letters & numbers only 🠈|--\\
  event.preventDefault();
  let digitList: Array<HTMLInputElement> = listDigits(event.currentTarget);
  let digitIndex: number = digitList.indexOf(event.currentTarget);
  let pastedText: string = event.clipboardData.getData('text').replace(/[^A-Za-z0-9]/g, '');
  for (let i = 0; i < pastedText.length && digitIndex + i < digitList.length; i++) {
    digitList[digitIndex + i].value = pastedText[i];
  }
  digitList[Math.min(digitIndex + pastedText.length, digitList.length) - 1]?.focus();
};
export default FieldsetOtp;
