//--|🠊 SelectCarousel.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import ButtonRouting from '../../../../Button/routing/Button.routing';

//--|🠋 Functions 🠋|--\\
import { markMenu, selectSection } from './Select_carousel';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    axis: '[x]' | '[y]';
    type: '{select}' | '{scroll}';
    shade: '~dark~' | '~medium~' | '~light~';
    view: '-top-' | '-rig-' | '-bot-' | '-lef-';
    color: '(red)' | '(green)' | '(blue)' | '(mono)';
  };
  cases: {
    paths: Array<string>;
  };

  onClick?: () => void;
}

const SelectCarousel: React.FC<TheseProps> = ({ info, style, cases }) => {
  // Generate a list of <li> elements.
  // Reference the amount you should generate by counting the amount of items contained within `cases.paths`.
  // Use a for loop on the array containing the string links for the button images: `cases.paths[i]`.
  /*
  Please let me know if you have any questions before we start.
  */
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
            onClick={(event) => selectSection(info.pageName, info.blockName, event)}
            onMouseEnter={() => markMenu(info.pageName, info.blockName)}
          />
        </li>
      ))}
    </>
  );
};
export default SelectCarousel;
