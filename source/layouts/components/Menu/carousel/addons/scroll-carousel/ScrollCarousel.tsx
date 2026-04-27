//--|🠊 ScrollCarousel.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import ButtonDefault from '../../../../Button/default/Button.default';

//--|🠋 Functions 🠋|--\\
import { scrollSection } from './Scroll_carousel';
import { arabicToRoman } from '../../../../functions';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    type: '{scroll}' | string;
    axis: '[x]' | '[y]';
    shade: '~dark~' | '~medium~' | '~light~';
    view: '-top-' | '-rig-' | '-bot-' | '-lef-';
    color: '(red)' | '(green)' | '(blue)' | '(mono)';
  };
  cases: {
    paths: Array<string | HTMLElement>;
  };

  onClick?: () => number;
}

const ScrollCarousel: React.FC<TheseProps> = ({ info, style, cases }) => {
  return (
    <>
      <li className="carousel-preview I">
        {cases.paths.map((path, index) => (
          <h1 className={`${info.labelName}-${info.blockName}`} key={index}>
            <span>
              <b>{`<{Default}`}</b>
              <i>{`Button>`}</i>
            </span>
          </h1>
        ))}
      </li>
      {cases.paths.map((path, index) => (
        <li className={`button`} key={index}>
          <ButtonDefault
            style={{
              size: '<h3>',
              view: '-icon-', // You could also dynamically use style.view here!
              color: style.color, // You could use style.color here
              shade: style.shade, // You could use style.shade here
              type: '{button}',
              image: path as string, // 👈 This puts the current image link here!
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
