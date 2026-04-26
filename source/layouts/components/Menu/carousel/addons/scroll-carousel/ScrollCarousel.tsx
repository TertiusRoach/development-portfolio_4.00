//--|🠊 SelectCarousel.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import ButtonRouting from '../../../../Button/routing/Button.routing';

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

const ScrollCarousel: React.FC<TheseProps> = ({ info, style, cases }) => {
  console.log(info);
  console.log(style);
  console.log(cases);
  return (
    <>
      <li></li>
      <li></li>
    </>
  );

  /*
  switch (style.axis) {
    case '[x]':
      //  className={createStyle(style.type, style.view) as 'scr_top'}
      return <li></li>;
    case '[y]':
      return (
        //  className={createStyle(style.type, style.view) as 'sel_lef'}
        <li>
          <ButtonRouting
            style={{
              size: '<h1>',
              view: 'mid-lef',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              image: cases.paths[0],
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              view: 'mid-lef',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              image: cases.paths[1],
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              view: 'mid-lef',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              image: cases.paths[2],
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              view: 'mid-lef',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              image: cases.paths[3],
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              view: 'mid-lef',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              image: cases.paths[4],
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              view: 'mid-lef',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              image: cases.paths[5],
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              view: 'mid-lef',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              image: cases.paths[6],
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              view: 'mid-lef',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              image: cases.paths[7],
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              view: 'mid-lef',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              image: cases.paths[8],
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              view: 'mid-lef',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              image: cases.paths[9],
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
        </li>
      );
    }
    */
};
export default ScrollCarousel;
