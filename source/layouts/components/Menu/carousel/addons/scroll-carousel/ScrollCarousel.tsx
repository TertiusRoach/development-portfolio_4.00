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
      <h1>
        <span>
          <b>{`<Default`}</b>
          <i>{`Button>`}</i>
        </span>
      </h1>
      {cases.paths.map((path, index) => (
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
        </li>
      ))}
    </>
  );
};

export default ScrollCarousel;
