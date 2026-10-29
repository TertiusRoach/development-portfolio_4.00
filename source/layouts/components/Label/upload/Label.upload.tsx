//--|🠊 Label.upload.tsx 🠈|--\\
import React, { useRef, useState } from 'react';

//--|🠋 Components 🠋|--\\
import ButtonDefault from '../../Button/default/Button.default';

//--|🠋 Functions 🠋|--\\
import createClass from './Label_upload';
import { loadAsset } from '../../../../scripts';

//--|🠊 AI Code: Review Please 2026-10-29 16:44 🠈|--\\
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
    text: string;
    accept: string;
  };
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function LabelUpload({ info, style, cases, onChange }: TheseProps) {
  let uploadImage: string = loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/upload');
  const uploadRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>(cases.text); //--|🠈 <ButtonDefault> only takes its text as a prop, so the chosen name needs state 🠈|--\\
  return (
    <label className={`${info.labelName}-${info.blockName}_upload-default ${createClass(style)}`}>
      <input
        type="file"
        tabIndex={-1} //--|🠈 The <ButtonDefault> takes the keyboard focus instead 🠈|--\\
        className="event"
        ref={uploadRef}
        accept={cases.accept} //--|🠈 An empty string accepts every file 🠈|--\\
        //--|===|--\\
        onChange={(event) => {
          showName(event, setFileName, cases.text);
          onChange?.(event);
        }}
      />
      {/*--|🠊 A duplicate of the <h3> -center- <ButtonDefault>, so it is that button 🠈|--*/}
      <ButtonDefault
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
        }}
        style={{
          size: '<h3>',
          view: '-center-',
          shade: style.shade,
          color: style.color,
          text: fileName,
          image: uploadImage,
        }}
        onClick={(event) => openPicker(event, uploadRef.current)}
      />
    </label>
  );
}
const openPicker = (event: React.MouseEvent<HTMLButtonElement>, input: HTMLInputElement | null): void => {
  //--|🠊 A <button> inside a <label> doesn't open the <label>'s <input>, so it asks for the picker itself 🠈|--\\
  event.preventDefault(); //--|🠈 A <button> submits its <form> by default, this only opens the picker 🠈|--\\
  input?.click();
};
const showName = (event: React.ChangeEvent<HTMLInputElement>, setFileName: (name: string) => void, startText: string): void => {
  //--|🠊 The chosen file's name replaces the text; cancelling the picker brings the first text back 🠈|--\\
  let chosenFile: File | undefined = event.target.files?.[0];
  setFileName(chosenFile ? chosenFile.name : startText);
};
export default LabelUpload;
