//--|🠊 Division.conveyor.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Functions 🠋|--\\
import { findTags } from './Division_conveyor';
import { arabicToRoman } from '../../../../scripts';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  cases: {
    axis: '[x]' | '[y]';
    call: React.ComponentType<{ info: InfoProps }>;
  };
  onWheel?: (event: React.WheelEvent<HTMLDivElement>) => string | number | void;
}
type InfoProps = {
  pageName: string;
  blockName: string;
  labelName: string;
};
function DivisionAxis({ info, cases }: TheseProps) {
  //--|🠊 Checks [x] or [y] axis 🠈|--\\
  const CallItem = cases.call as React.ComponentType<{ info: InfoProps }>;
  const childrenAxis: Record<'[x]' | '[y]', string> = {
    '[x]': 'carousel-horizontal',
    '[y]': 'carousel-vertical',
  };

  /*
  let test = findTags(info.pageName, info.blockName, info.labelName);
  console.log(test.carousel, test.container);
  console.log(info.pageName, info.blockName, info.labelName);
  console.log(
    document.querySelector(`#${info.pageName}-${info.blockName} .${info.labelName}-${info.blockName}_carousel-default`),
  );
  */
  return (
    <li className={`${childrenAxis[cases.axis]}_I`}>
      <div className={`${info.labelName}-${info.blockName}_container`}>{/* <CallItem info={info} /> */}</div>
    </li>
  );
}
const DivisionConveyor = ({ info, cases }: TheseProps) => {
  const CallList = ({ '[x]': 'ul', '[y]': 'ol' } as Record<'[x]' | '[y]', 'ul' | 'ol'>)[cases.axis];
  const axisClass: Record<'[x]' | '[y]', string> = {
    '[x]': 'hori-X-axis',
    '[y]': 'vert-Y-axis',
  };
  /*
  //--|🠊 Checks [x] or [y] axis 🠈|--\\
  const axisClass: Record<'[x]' | '[y]', string> = {
    '[x]': 'carousel-horizontal',
    '[y]': 'carousel-vertical',
  };
  */
  return (
    <div className={`${info.labelName}-${info.blockName}_conveyor-default`}>
      <CallList className={axisClass[cases.axis]}>
        <DivisionAxis info={info} cases={cases} />
      </CallList>
    </div>
  );
};

export default DivisionConveyor;
