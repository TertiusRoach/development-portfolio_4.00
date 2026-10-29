//--|🠊 Division.colourize.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import LabelToggle from '../../Label/toggle/Label.toggle';

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

const DivisionColourize: React.FC<TheseProps> = ({ info, style, cases }) => {
  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;

  useEffect(() => {}, [pageName, blockName, labelName]);

  return (
    <div
      className={`${info.labelName}-${info.blockName}_division-colourize`}
      onChange={(event: React.FormEvent<HTMLElement>): void => {
        //--|🠊 onChange fires once, after the checkbox has flipped (onClick fires twice: label + input) 🠈|--\\
        //--|🠊 The component finds the tint, the layout decides what to do with it 🠈|--\\
        cases.task[0](toggleColors(event.currentTarget));
      }}
    >
      <LabelToggle style={{ shade: style.shade, color: '(mono)' }} info={{ pageName: pageName, blockName: blockName, labelName: labelName }} />
      <LabelToggle style={{ shade: style.shade, color: '(red)' }} info={{ pageName: pageName, blockName: blockName, labelName: labelName }} />
      <LabelToggle style={{ shade: style.shade, color: '(green)' }} info={{ pageName: pageName, blockName: blockName, labelName: labelName }} />
      <LabelToggle style={{ shade: style.shade, color: '(blue)' }} info={{ pageName: pageName, blockName: blockName, labelName: labelName }} />
    </div>
  );
};
export default DivisionColourize;
