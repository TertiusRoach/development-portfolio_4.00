//--|🠊 Division.colourize.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import LabelToggle from '../../Label/toggle/Label.toggle';

//--|🠋 Styles 🠋|--\\
import './Division.colourize.scss';

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
}

const DivisionColourize: React.FC<TheseProps> = ({ info, style }) => {
  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;

  useEffect(() => {}, [pageName, blockName, labelName]);

  return (
    <div
      className={`${info.labelName}-${info.blockName}_division-colourize`}
      onClick={(event: React.MouseEvent<HTMLElement>): void => {
        // toggleColors(event.currentTarget as HTMLElement);
        console.log(event.currentTarget);
      }}
    >
      <LabelToggle
        style={{ type: '{toggle}', shade: style.shade, color: '(mono)' }}
        info={{ pageName: pageName, blockName: blockName, labelName: labelName }}
      />
      <LabelToggle
        style={{ type: '{toggle}', shade: style.shade, color: '(red)' }}
        info={{ pageName: pageName, blockName: blockName, labelName: labelName }}
      />
      <LabelToggle
        style={{ type: '{toggle}', shade: style.shade, color: '(green)' }}
        info={{ pageName: pageName, blockName: blockName, labelName: labelName }}
      />
      <LabelToggle
        style={{ type: '{toggle}', shade: style.shade, color: '(blue)' }}
        info={{ pageName: pageName, blockName: blockName, labelName: labelName }}
      />
    </div>
  );
};
export default DivisionColourize;
