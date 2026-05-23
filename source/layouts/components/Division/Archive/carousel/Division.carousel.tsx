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

  /*
  let scopeClass: Record<TheseProps<T>['style']['scope'], string> = {
    '<one>': 'car-one',
    '<two>': 'car-two',
    '<thr>': 'car-thr',
  };
  */
  let axisClass: Record<TheseProps<T>['style']['axis'], string> = {
    '[x]': 'hori-X-axis',
    '[y]': 'vert-Y-axis',
  };

  useEffect(() => {
    setTimeout(() => {
      console.log(`|🠊 Link: <div class="${labelName}-${blockName}_carousel"> 🠈|`);
    }, 3600000);
  }, [pageName, blockName, labelName]);

  return (
    <div className={`${labelName}-${blockName}_carousel-default`}>
      <ListItem className={axisClass[style.axis]}>
        {(() => {
          switch (style.axis) {
            case '[x]':
              return (
                <li className={'carousel-horizontal_I'}>
                  <div className={`${labelName}-${blockName}_container`}>
                    <CallItem info={info} />
                  </div>
                </li>
              );
            case '[y]':
              return (
                <li className={'carousel-vertical_I'}>
                  <div className={`${labelName}-${blockName}_container`}>
                    <CallItem info={info} />
                  </div>
                </li>
              );
          }
        })()}
      </ListItem>
    </div>
  );
};

export default DivisionCarousel;
