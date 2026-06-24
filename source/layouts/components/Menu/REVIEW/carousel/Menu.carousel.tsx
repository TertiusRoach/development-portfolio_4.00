//--|🠊 Menu.carousel.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Menu.carousel.scss';

//--|🠋 Addons 🠋|--\\
import SelectCarousel from './addons/select-carousel/SelectCarousel';
import ScrollCarousel from './addons/scroll-carousel/ScrollCarousel';

//--|🠋 Functions 🠋|--\\
import markMenu from './Menu_carousel';
import stripBrackets from '../../../components';
import { labelList } from './Menu_carousel';
import { loadClass, loadStyle } from './Menu_carousel';

//--|🠋 Components 🠋|--\\
import selectCarousel from '../../../Division/carousel/Division_carousel';

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';
import ButtonRouting from '../../../Button/routing/Button.routing';

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
    paths: Array<string | HTMLElement>;
  };

  onClick?: () => void;
  onMouseEnter?: () => void;
}
const MenuCarousel: React.FC<TheseProps> = ({ info, style, cases }) => {
  const pageName: string = info.pageName as string;
  const blockName: string = info.blockName as string;
  const labelName: string = info.labelName as string;

  //--|🠊 Checks [x] or [y] axis 🠈|--\\
  const buildMenu = (info: TheseProps['info'], style: TheseProps['style'], cases: TheseProps['cases']) => {
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
  const callAddon = (info: TheseProps['info'], style: TheseProps['style'], cases: TheseProps['cases']) => {
    switch (style.type) {
      case '{scroll}':
        return <ScrollCarousel info={info} style={style} cases={cases} />;
      case '{select}':
        return <SelectCarousel info={info} style={style} cases={cases} />;
    }
  };

  return <menu className={`${labelName}-${blockName}_carousel`}>{buildMenu(info, style, cases)}</menu>;
};
export default MenuCarousel;
