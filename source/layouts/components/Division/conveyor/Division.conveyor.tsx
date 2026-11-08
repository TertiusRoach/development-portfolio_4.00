//--|🠊 Division.conveyor.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Functions 🠋|--\\
import listenEvent from './Division_conveyor';

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

export function DivisionConveyor({ info, cases }: TheseProps) {
  //--|🠊 Checks [x] or [y] axis 🠈|--\\
  const CallList = ({ '[x]': 'ul', '[y]': 'ol' } as Record<'[x]' | '[y]', 'ul' | 'ol'>)[cases.axis];
  const axisClass: Record<'[x]' | '[y]', string> = {
    '[x]': 'hori-X-axis',
    '[y]': 'vert-Y-axis',
  };

  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;

  useEffect(() => {
    return listenEvent(pageName, blockName, labelName); //--|🠈 AI Code: Review Please 2026-11-08 · Returned, so React stops the observer on unmount 🠈|--\\
  }, [pageName, blockName, labelName]);

  return (
    <div className={`${info.labelName}-${info.blockName}_conveyor-default`}>
      <CallList className={axisClass[cases.axis]}>
        <DivisionAxis info={info} cases={cases} />
      </CallList>
    </div>
  );
}
const DivisionAxis = ({ info, cases }: TheseProps) => {
  //--|🠊 Checks [x] or [y] axis 🠈|--\\
  const CallItem = cases.call as React.ComponentType<{ info: InfoProps }>;
  const childrenAxis: Record<'[x]' | '[y]', string> = {
    '[x]': 'conveyor-horizontal',
    '[y]': 'conveyor-vertical',
  };

  let fullscreen = document.querySelector(
    `#${info.pageName}-main .${info.labelName}-main_fullscreen-default li[class*="fullscreen"]`,
  ) as HTMLLIElement;
  return (
    <li className={`${childrenAxis[cases.axis]}_${fullscreen.classList[0].split('_')[1]}`}>
      <div className={`${info.labelName}-${info.blockName}_container`}>
        <CallItem info={info} />
      </div>
    </li>
  );
};
export default DivisionConveyor;
