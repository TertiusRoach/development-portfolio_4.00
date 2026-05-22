//--|🠊 Menu.carousel.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Menu.swipe.scss';

//--|🠋 Addons 🠋|--\\
// import SelectCarousel from './addons/select-carousel/SelectCarousel';
// import ScrollCarousel from './addons/scroll-carousel/ScrollCarousel';

//--|🠋 Functions 🠋|--\\
// import markMenu from './Menu_swipe';
// import stripBrackets from '../../../functions';
// import { labelList } from './Menu_swipe';
// import { loadClass, loadStyle } from './Menu_swipe';

//--|🠋 Components 🠋|--\\
// import selectCarousel from '../../../Division/Archive/carousel/Division_carousel';

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';
// import ButtonRouting from '../../../Button/routing/Button.routing';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;

    pages: Array<string | HTMLElement>;
  };
  style: {
    axis: '[x]' | '[y]';
    shade: '~dark~' | '~light~';
    color: '(red)' | '(green)' | '(blue)' | '(mono)';
  };

  onClick?: () => void;
  onMouseEnter?: () => void;
}

const MenuSwipe: React.FC<TheseProps> = ({ info, style }) => {
  const pageName: string = info.pageName as string;
  const blockName: string = info.blockName as string;
  const labelName: string = info.labelName as string;
  const ListItem = style.axis === '[x]' ? 'ul' : 'ol';

  const axisClass: Record<TheseProps['style']['axis'], string> = {
    '[x]': 'hori-X-swipe',
    '[y]': 'vert-Y-swipe',
  };

  return (
    <menu className={`${labelName}-${blockName}_swipe-default`}>
      <ListItem className={axisClass[style.axis]}></ListItem>
    </menu>
  );

  /*
  //--|🠊 Checks [x] or [y] axis 🠈|--\\
  const buildMenu = (info: TheseProps['info'], style: TheseProps['style'], cases: TheseProps['pages']) => {
    const styleAxis: '[x]' | '[y]' = style.axis;

    let layoutPreview: string = '';
    if (style.type === '{select}') {
      layoutPreview = `sel_${labelList(style)}`;
    } else if (style.type === '{scroll}') {
      layoutPreview = `scr_${labelList(style)}`;
    }
    switch (styleAxis) {
      case '[x]':
        return (
          <li className={`${loadClass(style)}`}>
            <ul className={`${stripBrackets(style.type, '{}')}-carousel`}>{callAddon(info, style, cases)}</ul>
          </li>
        );
      case '[y]':
        return (
          <li className={`${loadClass(style)}`}>
            <ol className={`${stripBrackets(style.type, '{}')}-carousel`}>{callAddon(info, style, cases)}</ol>
          </li>
        );
    }
  };
  //--|🠊 Loads <DefaultButton> or <RoutingButton> 🠈|--\\
  const callAddon = (info: TheseProps['info'], style: TheseProps['style'], cases: TheseProps['pages']) => {
    switch (style.type) {
      case '{scroll}':
        return <ScrollCarousel info={info} style={style} cases={cases} />;
      case '{select}':
        return <SelectCarousel info={info} style={style} cases={cases} />;
    }
  };

  
  */
};
export default MenuSwipe;
