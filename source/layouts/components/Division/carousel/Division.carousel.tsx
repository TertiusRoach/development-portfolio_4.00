//--|🠊 Division.carousel.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
//--|🠋 Styles 🠋|--\\
import './Division.carousel.scss';

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

interface TheseProps {
  info: InfoProps;
  cases: {
    axis: '[x]' | '[y]';
    call: React.ComponentType<{ info: InfoProps }>;
  };
  onWheel?: (event: React.WheelEvent<HTMLDivElement>) => string | number | void;
}

function DivisionAxis({ info, cases }: TheseProps) {
  const CallItem = cases.call as React.ComponentType<{ info: InfoProps }>;
  const axisClass: Record<'[x]' | '[y]', string> = {
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
const DivisionCarousel = ({ info, cases, onWheel }: TheseProps) => {
  const CallList = ({ '[x]': 'ul', '[y]': 'ol' } as Record<'[x]' | '[y]', 'ul' | 'ol'>)[cases.axis];
  const axisClass: Record<'[x]' | '[y]', string> = {
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
type InfoProps = {
  pageName: string;
  blockName: string;
  labelName: string;
};
