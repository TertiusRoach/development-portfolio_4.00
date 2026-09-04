//--|🠊 Division.carousel.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
//--|🠋 Styles 🠋|--\\
import './Division.carousel.scss';

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

//--|🠊 Checks [x] or [y] axis 🠈|--\\
const axisClass: Record<'[x]' | '[y]', string> = {
  '[x]': 'carousel-horizontal',
  '[y]': 'carousel-vertical',
};

function DivisionAxis({ info, cases }: TheseProps) {
  const CallItem = cases.call as React.ComponentType<{ info: InfoProps }>;

  return (
    <li className={`${axisClass[cases.axis]}_${arabicToRoman(cases.show)}`}>
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
