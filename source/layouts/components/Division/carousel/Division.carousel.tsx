//--|🠊 Division.carousel.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Division.carousel.scss';

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

interface TheseProps<Names extends PropsInfo> {
  info: Names;
  cases: {
    axis: '[x]' | '[y]';
    call: React.ComponentType<{ info: Names }>;
  };
  onWheel?: (event: React.WheelEvent<HTMLDivElement>) => string | number | void;
}
interface PropsInfo {
  pageName: string;
  blockName: string;
  labelName: string;
}
function DivisionAxis<T extends PropsInfo>({ info, cases }: TheseProps<T>) {
  const CallItem = cases.call as React.ComponentType<{ info: T }>;
  let axisClass: Record<'[x]' | '[y]', string> = {
    '[x]': 'carousel-horizontal',
    '[y]': 'carousel-vertical',
  };
  return (
    <li className={`${axisClass[cases.axis]}_I`}>
      <div className={`${info.labelName}-${info.blockName}_container`}>
        <CallItem info={info} />
      </div>
    </li>
  );
}

const DivisionCarousel = <T extends PropsInfo>({ info, cases, onWheel }: TheseProps<T>) => {
  const CallList = ({ '[x]': 'ul', '[y]': 'ol' } as Record<'[x]' | '[y]', 'ul' | 'ol'>)[cases.axis];
  let axisClass: Record<'[x]' | '[y]', string> = {
    '[x]': 'hori-X-axis',
    '[y]': 'vert-Y-axis',
  };
  return (
    <div className={`${info.labelName}-${info.blockName}_carousel-default`} onWheel={onWheel}>
      <CallList className={axisClass[cases.axis]}>
        <DivisionAxis info={info} cases={cases} />
      </CallList>
    </div>
  );
};
export default DivisionCarousel;
