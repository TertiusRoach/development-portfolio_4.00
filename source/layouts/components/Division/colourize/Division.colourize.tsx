//--|🠊 Division.colourize.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useRef } from 'react'; //--|🠊 AI Code: Review Please 2026-11-09 13:55 🠈|--\\

//--|🠋 Components 🠋|--\\
import LabelSwitching from '../../Label/switching/Label.switching'; //--|🠈 AI Code: Review Please 2026-10-30 · Was <LabelToggle> 🠈|--\\

//--|🠋 Functions 🠋|--\\
import toggleColors from './Division_colourize';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    shade: '~dark~' | '~light~';
  };
  cases: {
    task: Array<(tint: string) => void>; //--|🠈 Function receives a tint to toggle colors 🠈|--\\
  };

  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export function DivisionColourize({ info, style, cases }: TheseProps) {
  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;
  const colourizeRef = useRef<HTMLDivElement>(null); //--|🠊 AI Code: Review Please 2026-11-09 13:55 · The <div> the toggles sit in, read once on load 🠈|--\\

  useEffect(() => {
    cases.task[0](toggleColors(colourizeRef.current as HTMLDivElement)); //--|🠊 AI Code: Review Please 2026-11-09 13:55 · Paints the preview with the toggles' first state: Red + Green = orange, the company colour 🠈|--\\
  }, [pageName, blockName, labelName]);

  return (
    <div
      ref={colourizeRef} //--|🠊 AI Code: Review Please 2026-11-09 13:55 🠈|--\\
      className={`${info.labelName}-${info.blockName}_division-colourize`}
      onChange={(event: React.FormEvent<HTMLElement>): void => {
        //--|🠊 onChange fires once, after the checkbox has flipped (onClick fires twice: label + input) 🠈|--\\
        //--|🠊 The component finds the tint, the layout decides what to do with it 🠈|--\\
        cases.task[0](toggleColors(event.currentTarget));
      }}
    >
      <LabelSwitching style={{ shade: style.shade, color: '(mono)', clarity: '⟨lucid⟩' }} cases={{ type: '{toggle}' }} info={{ pageName: pageName, blockName: blockName, labelName: labelName }} />
      {/*--|🠊 AI Code: Review Please 2026-11-09 13:55 · Red + Green start on (mark: true): every page opens orange 🠈|--*/}
      <LabelSwitching style={{ shade: style.shade, color: '(red)', clarity: '⟨lucid⟩' }} cases={{ type: '{toggle}', mark: true }} info={{ pageName: pageName, blockName: blockName, labelName: labelName }} />
      <LabelSwitching style={{ shade: style.shade, color: '(green)', clarity: '⟨lucid⟩' }} cases={{ type: '{toggle}', mark: true }} info={{ pageName: pageName, blockName: blockName, labelName: labelName }} />
      <LabelSwitching style={{ shade: style.shade, color: '(blue)', clarity: '⟨lucid⟩' }} cases={{ type: '{toggle}' }} info={{ pageName: pageName, blockName: blockName, labelName: labelName }} />
    </div>
  );
}
export default DivisionColourize;
