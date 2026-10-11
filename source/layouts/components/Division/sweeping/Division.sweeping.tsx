//--|🠊 Division.sweeping.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Functions 🠋|--\\
import emphasizeParameters from './Division_sweeping';
import { arabicToRoman, stripBrackets } from '../../../../scripts';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  cases: {
    show: number;
    axis: '[x]' | '[y]';
    view: '-top-' | '-rig-' | '-bot-' | '-lef-';
    call: React.ComponentType<{ info: InfoProps }>;
  };
}
type InfoProps = {
  pageName: string;
  blockName: string;
  labelName: string;
};
function DivisionSweeping({ info, cases }: TheseProps) {
  //--|🠊 Checks [x] or [y] axis 🠈|--\\
  const CallList = ({ '[x]': 'ul', '[y]': 'ol' } as Record<'[x]' | '[y]', 'ul' | 'ol'>)[cases.axis];
  const parentAxis: Record<'[x]' | '[y]', string> = {
    '[x]': 'hori-X-axis',
    '[y]': 'vert-Y-axis',
  };

  return (
    <div className={`${info.labelName}-${info.blockName}_sweeping-default`}>
      <CallList className={parentAxis[cases.axis]}>
        <DivisionAxis info={info} cases={cases} />
      </CallList>
    </div>
  );
}
const DivisionAxis = ({ info, cases }: TheseProps) => {
  //--|🠊 Checks [x] or [y] axis 🠈|--\\
  const CallItem = cases.call as React.ComponentType<{ info: InfoProps }>;
  const childrenAxis: Record<'[x]' | '[y]', string> = {
    '[x]': 'sweeping-horizontal',
    '[y]': 'sweeping-vertical',
  };

  let pageName = info.pageName as string;
  let blockName = info.blockName as string;
  let labelName = info.labelName as string;
  useEffect(() => {
    return emphasizeParameters(pageName, blockName, labelName);
  }, [pageName, blockName, labelName]);
  return (
    <li className={`${childrenAxis[cases.axis]}_${arabicToRoman(cases.show)}`}>
      <div className={`${info.labelName}-${info.blockName}_container-${stripBrackets(cases.view, '--')}`}>
        <CallItem info={info} />
      </div>
    </li>
  );
};

export default DivisionSweeping;
