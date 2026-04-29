//--|🠊 Division.carousel.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Division.carousel.scss';

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Functions 🠋|--\\

//--|🠋 Components 🠋|--\\

const DivisionCarousel = <T extends PropsInfo>({ info, style, cases }: TheseProps<T>) => {
  const pageName: string = info.pageName as string;
  const blockName: string = info.blockName as string;
  const labelName: string = info.labelName as string;

  const CallTag = cases.call;
  const ListItem = style.axis === '[x]' ? 'ul' : 'ol';

  useEffect(() => {
    setTimeout(() => {
      console.log(`|🠊 Link: <div class="${labelName}-${blockName}_carousel"> 🠈|`);
    }, 3600000);
  }, [pageName, blockName]);

  return (
    <div className={`${labelName}-${blockName}_carousel`}>
      <ListItem>
        <li className="I">
          <div className={`${labelName}-${blockName}_container`}>
            <CallTag info={info} />
          </div>
        </li>
      </ListItem>
    </div>
  );
};
interface TheseProps<Names extends PropsInfo> {
  info: Names;
  style: {
    axis: '[x]' | '[y]';
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
export default DivisionCarousel;
