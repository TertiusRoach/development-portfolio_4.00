//--|🠊 Division.conveyor.tsx 🠈|--\\

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Functions 🠋|--\\
import { arabicToRoman } from '../../../../scripts';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  cases: {
    show: number;
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

const DivisionConveyor = ({ info, cases }: TheseProps) => {
  /*
  const CallList = ({ '[x]': 'ul', '[y]': 'ol' } as Record<'[x]' | '[y]', 'ul' | 'ol'>)[cases.axis];
  const axisClass: Record<'[x]' | '[y]', string> = {
    '[x]': 'hori-X-axis',
    '[y]': 'vert-Y-axis',
  };
  //--|🠊 Checks [x] or [y] axis 🠈|--\\
  const axisClass: Record<'[x]' | '[y]', string> = {
    '[x]': 'carousel-horizontal',
    '[y]': 'carousel-vertical',
  };
  */
  return (
    <div className={`${info.labelName}-${info.blockName}_conveyor-default`}>
      {/*
      <CallList className={axisClass[cases.axis]}>
       <DivisionAxis info={info} cases={cases} />
     </CallList>
     */}
    </div>
  );
};

export default DivisionConveyor;
