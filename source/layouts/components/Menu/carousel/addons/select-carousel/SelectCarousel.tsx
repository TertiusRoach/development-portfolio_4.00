//--|🠊 SelectCarousel.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import ButtonRouting from '../../../../Button/routing/Button.routing';

//--|🠋 Functions 🠋|--\\
import { markMenu } from '../../Menu_carousel';
import { selectSection } from './Select_carousel';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    type: '{select}';
    axis: '[x]' | '[y]';
    shade: '~dark~' | '~medium~' | '~light~';
    view: '-top-' | '-rig-' | '-bot-' | '-lef-';
    color: '(red)' | '(green)' | '(blue)' | '(mono)';
  };
  cases: {
    paths: Array<string>;
  };

  onClick?: () => number;
}

const SelectCarousel: React.FC<TheseProps> = ({ info, style, cases }) => {
  return (
    <>
      {/* 
        .map() loops through the array.
        'path' is the current string (like cases.paths[i]).
        'index' is the current number (like 'i').
      */}
      {cases.paths.map((path, index) => (
        // React requires a unique 'key' prop on the outermost element of a generated list
        <li key={index}>
          <ButtonRouting
            style={{
              size: '<h1>',
              view: 'mid-lef', // You could also dynamically use style.view here!
              color: '(mono)', // You could use style.color here
              shade: '~light~', // You could use style.shade here
              type: '{button}',
              image: path, // 👈 This puts the current image link here!
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            onClick={(eventInfo: React.MouseEvent<HTMLElement>): number =>
              selectSection(info.pageName, info.blockName, eventInfo)
            }
          />
        </li>
      ))}
    </>
  );
};

export default SelectCarousel;
