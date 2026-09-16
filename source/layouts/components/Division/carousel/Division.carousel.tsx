//--|🠊 Division.carousel.tsx 🠈|--\\

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

function DivisionAxis({ info, cases }: TheseProps) {
  //--|🠊 Checks [x] or [y] axis 🠈|--\\
  const CallItem = cases.call as React.ComponentType<{ info: InfoProps }>;
  const childrenAxis: Record<'[x]' | '[y]', string> = {
    '[x]': 'carousel-horizontal',
    '[y]': 'carousel-vertical',
  };
  return (
    <li className={`${childrenAxis[cases.axis]}_${arabicToRoman(cases.show)}`}>
      <div className={`${info.labelName}-${info.blockName}_container`}>
        <CallItem info={info} />
      </div>
    </li>
  );
}
const DivisionCarousel = ({ info, cases, onWheel }: TheseProps) => {
  //--|🠊 Checks [x] or [y] axis 🠈|--\\
  const CallList = ({ '[x]': 'ul', '[y]': 'ol' } as Record<'[x]' | '[y]', 'ul' | 'ol'>)[cases.axis];
  const parentAxis: Record<'[x]' | '[y]', string> = {
    '[x]': 'hori-X-axis',
    '[y]': 'vert-Y-axis',
  };
  return (
    <div className={`${info.labelName}-${info.blockName}_carousel-default`} onWheel={onWheel}>
      <CallList className={parentAxis[cases.axis]}>
        <DivisionAxis info={info} cases={cases} />
      </CallList>
    </div>
  );
};

export default DivisionCarousel;
