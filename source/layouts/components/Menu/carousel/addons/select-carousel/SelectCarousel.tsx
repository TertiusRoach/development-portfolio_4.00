//--|🠊 SelectCarousel.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import ButtonRouting from '../../../../Button/routing/Button.routing';

//--|🠋 Functions 🠋|--\\
import markMenu from '../../Menu_carousel';
import selectCarousel from './Select_carousel';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    axis: '[x]' | '[y]';
    type: '{select}' | string;
    shade: '~dark~' | '~medium~' | '~light~';
    view: '-top-' | '-rig-' | '-bot-' | '-lef-' | string;
    color: '(red)' | '(green)' | '(blue)' | '(mono)';
  };
  cases: {
    paths: Array<string | HTMLElement>;
  };

  onClick?: () => number;
}

const SelectCarousel: React.FC<TheseProps> = ({ info, style, cases }) => {
  useEffect(() => {
    setTimeout(() => {}, 125);
  }, [info.pageName, info.blockName]);
  return (
    <>
      {cases.paths.map((path, index) => (
        <li key={index}>
          <ButtonRouting
            style={{
              size: '<h1>',
              view: 'mid-lef', // You could also dynamically use style.view here!
              color: '(mono)', // You could use style.color here
              shade: '~light~', // You could use style.shade here
              type: '{button}',
              image: path as string, // 👈 This puts the current image link here!
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            onClick={(eventInfo: React.MouseEvent<HTMLElement>): number => {
              selectCarousel(info.pageName, info.blockName, eventInfo);
              return 0;
            }}
          />
        </li>
      ))}
    </>
  );
};

export default SelectCarousel;
