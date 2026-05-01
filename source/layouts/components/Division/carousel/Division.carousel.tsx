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
const DivisionCarousel = <T extends PropsInfo>({ info, style, cases }: TheseProps<T>) => {
  const pageName: string = info.pageName as string;
  const blockName: string = info.blockName as string;
  const labelName: string = info.labelName as string;

  const CallItem = cases.call as React.ComponentType<{ info: T }>;
  const ListItem = style.axis === '[x]' ? 'ul' : 'ol';
  let scopeClass: Record<TheseProps<any>['style']['scope'], string> = {
    '<one>': 'car-one',
    '<two>': 'car-two',
    '<thr>': 'car-thr',
  };

  useEffect(() => {
    setTimeout(() => {
      console.log(`|🠊 Link: <div class="${labelName}-${blockName}_carousel"> 🠈|`);
    }, 3600000);
  }, [pageName, blockName, labelName]);

  return (
    <div className={`${labelName}-${blockName}_carousel`}>
      <ListItem className={scopeClass[style.scope]}>
        <li className="I">
          <div className={`${labelName}-${blockName}_container`}>
            <CallItem info={info} />
          </div>
        </li>
      </ListItem>
    </div>
  );
};

export default DivisionCarousel;
