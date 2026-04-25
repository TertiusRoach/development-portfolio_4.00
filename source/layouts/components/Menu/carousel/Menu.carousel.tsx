//--|🠊 Menu.carousel.tsx 🠈|--\\

//--|🠋 Styles 🠋|--\\
import './Menu.carousel.scss';

//--|🠋 Addons 🠋|--\\
import { selectLef } from './addons/select';
import { scrollTop } from './addons/scroll';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../functions';
import { labelList, labelButtons } from './Menu_carousel';
import { createClass, createStyle } from './Menu_carousel';

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';
import ButtonRouting from '../../Button/routing/Button.routing';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    roleName: string;
  };
  style: {
    type: '{select}' | '{scroll}';
    shade: '~dark~' | '~medium~' | '~light~';
    view: '-top-' | '-rig-' | '-bot-' | '-lef-';
    color: '(red)' | '(green)' | '(blue)' | '(mono)';
  };
  cases: {
    items: number;
    axis: '[x]' | '[y]';
    paths: Array<string>;
  };

  onClick?: () => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}
const MenuCarousel: React.FC<TheseProps> = ({ info, style, cases }) => {
  const pageName: string = info.pageName as string;
  const blockName: string = info.blockName as string;
  const labelName = createClass(style as TheseProps['style']) as string;

  useEffect(() => {
    setTimeout(() => {
      console.log(info.pageName, info.blockName);
      console.log(style.color, style.shade, style.type, style.view);
      // console.log(cases.paths, cases.axis, cases.link);
    }, 30000);
  }, [pageName, blockName]);

  return <menu className={`carousel-${blockName} ${labelName}`}>{buildMenu(style, cases)}</menu>;
};
export default MenuCarousel;

function buildMenu(style: TheseProps['style'], cases: TheseProps['cases']) {
  const caseAxis: '[x]' | '[y]' = cases.axis;

  let styleType: '{select}' | '{scroll}' = style.type;
  let styleShade: '~dark~' | '~medium~' | '~light~' = style.shade;
  let styleView: '-top-' | '-rig-' | '-bot-' | '-lef-' = style.view;
  let styleColor: '(red)' | '(green)' | '(blue)' | '(mono)' = style.color;

  let labelName: string = '';
  if (style.type === '{select}') {
    labelName = `sel_${labelList(style, cases)}`;
  } else if (style.type === '{scroll}') {
    labelName = `scr_${labelList(style, cases)}`;
  }
  switch (caseAxis) {
    case '[x]':
      return (
        <li className={`${labelList(style, cases)}`}>
          {buildList('[x]', cases.items, labelName as 'scr_top', style, cases.paths)}
        </li>
      );
    case '[y]':
      return (
        <li className={`${labelList(style, cases)}`}>
          {buildList('[y]', cases.items, labelName as 'sel_lef', style, cases.paths)}
        </li>
      );
  }
}
function buildList(
  axis: '[x]' | '[y]',
  items: number,
  label: 'sel_lef' | 'scr_top',
  style: TheseProps['style'],
  paths: Array<string>,
) {
  switch (axis) {
    case '[x]':
      return (
        <ul className={createStyle(style.type, style.view) as 'scr_top'}>
          {buildButtons('[x]', items, label as 'top_hori', paths as Array<string>)}
        </ul>
      );
    case '[y]':
      return (
        <ol className={createStyle(style.type, style.view) as 'sel_lef'}>
          <ButtonRouting
            style={{
              size: '<h1>',
              view: 'mid-lef',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              image: `${paths[0]}`,
            }}
            info={{
              blockName: 'leftbar',
              pageName: 'components',
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              view: 'mid-lef',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              image: `${paths[1]}`,
            }}
            info={{
              blockName: 'leftbar',
              pageName: 'components',
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              view: 'mid-lef',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              image: `${paths[2]}`,
            }}
            info={{
              blockName: 'leftbar',
              pageName: 'components',
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              view: 'mid-lef',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              image: `${paths[3]}`,
            }}
            info={{
              blockName: 'leftbar',
              pageName: 'components',
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              view: 'mid-lef',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              image: `${paths[4]}`,
            }}
            info={{
              blockName: 'leftbar',
              pageName: 'components',
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              view: 'mid-lef',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              image: `${paths[5]}`,
            }}
            info={{
              blockName: 'leftbar',
              pageName: 'components',
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              view: 'mid-lef',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              image: `${paths[6]}`,
            }}
            info={{
              blockName: 'leftbar',
              pageName: 'components',
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              view: 'mid-lef',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              image: `${paths[7]}`,
            }}
            info={{
              blockName: 'leftbar',
              pageName: 'components',
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              view: 'mid-lef',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              image: `${paths[8]}`,
            }}
            info={{
              blockName: 'leftbar',
              pageName: 'components',
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              view: 'mid-lef',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              image: `${paths[9]}`,
            }}
            info={{
              blockName: 'leftbar',
              pageName: 'components',
            }}
          />
        </ol>
      );
  }
}
