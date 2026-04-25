//--|🠊 Menu.carousel.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Menu.carousel.scss';

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Functions 🠋|--\\
import createClass from './Menu_carousel';
import { stripBrackets } from '../../functions';
import { labelList, labelStyle } from './Menu_carousel';

//--|🠋 Components 🠋|--\\
import RoutingButton from '../../../containers/Main/ComponentsMain/elements/button-components/routing-button/RoutingButton';
interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
  };
  style: {
    type: '{select}' | '{scroll}';
    shade: '~dark~' | '~medium~' | '~light~';
    view: '-top-' | '-rig-' | '-bot-' | '-lef-';
    color: '(red)' | '(green)' | '(blue)' | '(mono)';
  };
  cases: {
    link: string;
    axis: '[x]' | '[y]';
    array: Array<string>;
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
      console.log(cases.array, cases.axis, cases.link);
    }, 30000);
  }, [pageName, blockName]);

  return <menu className={`carousel-${blockName} ${labelName}`}>{buildTags(info, style, cases)}</menu>;
};
export default MenuCarousel;

function buildTags(info: TheseProps['info'], style: TheseProps['style'], cases: TheseProps['cases']) {
  const caseAxis: '[x]' | '[y]' = cases.axis;
  let styleType: '{select}' | '{scroll}' = style.type;
  let styleShade: '~dark~' | '~medium~' | '~light~' = style.shade;
  let styleView: '-top-' | '-rig-' | '-bot-' | '-lef-' = style.view;
  let styleColor: '(red)' | '(green)' | '(blue)' | '(mono)' = style.color;

  switch (caseAxis) {
    case '[x]':
      return <li className={`${labelList(style, cases)}`}>{markAxis(style.type, style.view, '[x]')}</li>;
    case '[y]':
      return <li className={`${labelList(style, cases)}`}>{markAxis(style.type, style.view, '[y]')}</li>;
  }
}
function markAxis(type: '{select}' | '{scroll}', view: '-top-' | '-rig-' | '-bot-' | '-lef-', axis: '[x]' | '[y]') {
  switch (axis) {
    case '[x]':
      return <ul className={labelStyle(type, view)}>{returnElements(type, view)}</ul>;
    case '[y]':
      return <ol className={labelStyle(type, view)}>{returnElements(type, view)}</ol>;
  }
}
function returnElements(type: '{select}' | '{scroll}', view: '-top-' | '-rig-' | '-bot-' | '-lef-') {
  switch (type) {
    case '{select}':
      return <></>;
    case '{scroll}':
      return <></>;
  }
}
