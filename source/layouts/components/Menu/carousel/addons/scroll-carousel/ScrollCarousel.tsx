//--|🠊 ScrollCarousel.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import ButtonDefault from '../../../../Button/default/Button.default';

//--|🠋 Functions 🠋|--\\
import { scrollSection } from './Scroll_carousel';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    type: '{scroll}';
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

const ScrollCarousel: React.FC<TheseProps> = ({ info, style, cases }) => {
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
          <ButtonDefault
            style={{
              size: '<h3>',
              view: '-icon-', // You could also dynamically use style.view here!
              color: style.color, // You could use style.color here
              shade: style.shade, // You could use style.shade here
              type: '{button}',
              image: path, // 👈 This puts the current image link here!
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            onClick={(eventInfo: React.MouseEvent<HTMLElement>): number =>
              scrollSection(info.pageName, info.blockName, eventInfo)
            }
          />
          {/* <ButtonRouting
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
          /> */}
        </li>
      ))}
    </>
  );
};

export default ScrollCarousel;
