//--|🠊 Division.carousel.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Division.carousel.scss';

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

interface TheseProps<Names extends PropsInfo> {
  info: Names;
  style: {
    axis: '[x]' | '[y]';
    scope: '<one>' | '<two>' | '<thr>';
  };
  cases: {
    call: React.ComponentType<{ info: Names }>;
  };
}
interface PropsInfo {
  pageName: string;
  blockName: string;
  labelName: string;
}
function DivisionAxis<T extends PropsInfo>({ info, style, cases }: TheseProps<T>) {
  const CallItem = cases.call as React.ComponentType<{ info: T }>;
  let axisClass: Record<'[x]' | '[y]', string> = {
    '[x]': 'carousel-horizontal',
    '[y]': 'carousel-vertical',
  };
  return (
    <li className={`${axisClass[style.axis]}_I`}>
      <div className={`${info.labelName}-${info.blockName}_container`}>
        <CallItem info={info} />
      </div>
    </li>
  );
}

const DivisionCarousel = <T extends PropsInfo>({ info, style, cases }: TheseProps<T>) => {
  const CallList = ({ '[x]': 'ul', '[y]': 'ol' } as Record<'[x]' | '[y]', 'ul' | 'ol'>)[style.axis];
  let axisClass: Record<'[x]' | '[y]', string> = {
    '[x]': 'hori-X-axis',
    '[y]': 'vert-Y-axis',
  };
  return (
    <div className={`${info.labelName}-${info.blockName}_carousel-default`}>
      <CallList className={axisClass[style.axis]}>
        <DivisionAxis info={info} style={style} cases={cases} />
      </CallList>
    </div>
  );
};
export default DivisionCarousel;
