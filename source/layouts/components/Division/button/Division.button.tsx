//--|🠊 Division.button.tsx 🠈|--\\
/*
//--|🠋 Styles 🠋|--\\
import './Division.article.scss';

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Functions 🠋|--\\

//--|🠋 Components 🠋|--\\

interface TheseProps<Names extends Info> {
  info: Names;
  cases: {
    axis: '[x]' | '[y]';
    call: React.ComponentType<{ info: Names }>;
  };
}

interface Info {
  pageName: string;
  blockName: string;
  labelName: string;
}

const DivisionCarousel = <T extends Info>({ info, cases }: TheseProps<T>) => {
  const pageName: string = info.pageName as string;
  const blockName: string = info.blockName as string;
  const labelName: string = info.labelName as string;

  const CallTag = cases.call;
  const ListItem = cases.axis === '[x]' ? 'ul' : 'ol';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <div className={`${labelName}-${blockName}_carousel`}>
      <ListItem>
        <li className="I">
          <div>
            <CallTag info={info} />
          </div>
        </li>
      </ListItem>
    </div>
  );
};
export default DivisionCarousel;
*/
