//--|🠊| Menu.button.tsx |🠈|--//
import React from 'react';
import './Menu.button.scss';

import ButtonFade from '../../../Button/bin/fade/Button.fade';
// import ButtonGlow from '../../Button/glow/Button.glow';
// import ButtonIcon from '../../Button/icon/Button.icon';
// import ButtonFrame from '../../Button/frame/Button.frame';
// import ButtonSlide from '../../Button/slide/Button.slide';

import { getSVG } from '../../../../modules/utilities/bin/getFile';

interface MenuProps {
  criteria: {
    buildAxis: '<vertical>' | '<horizontal>';
    buildDesign: '<fade>' | '<icon>' | '<text>';
  };
  input: {
    text?: string | '';
    href?: string | '';
    state?: 'submit' | string;

    label: 'home' | string;
    style: 'highlight' | 'downplay';
    align: 'left' | 'center' | 'right' | string;
    icon: { dark: string; medium: string; light: string };
    block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
  }[];
}
const MenuButton: React.FC<MenuProps> = ({ criteria, input }) => {
  let selectAxis: '<vertical>' | '<horizontal>' = criteria.buildAxis;
  let selectDesign: '<fade>' | '<icon>' | '<text>' = criteria.buildDesign;
  return (
    <menu className={`${setClass(selectAxis, selectDesign, input)}`}>
      {input.map((info, i) => (
        <ButtonFade
          key={i}
          axis={selectAxis}
          text={`${info.text}`}
          href={`${info.href}`}
          label={`${info.label}`}
          style={`${info.style}`}
          align={`${info.align}`}
          block={`${info.block}`}
          state={`${info.state}` as ''}
          icon={info.icon as { dark: string; medium: string; light: string }}
        />
      ))}
    </menu>
  );
};
export default MenuButton;
function setAxis(
  amount: Number,
  criteria: {
    selectAxis: '<vertical>' | '<horizontal>';
    selectDesign: '<fade>' | '<icon>' | '<text>' | string;
  }
) {
  if (criteria.selectAxis === '<horizontal>') {
    switch (amount) {
      case 1:
        return 'horizontal-one';
      case 2:
        return 'horizontal-two';
      case 3:
        return 'horizontal-three';
      case 4:
        return 'horizontal-four';
      case 5:
        return 'horizontal-five';
      case 6:
        return 'horizontal-six';
      case 7:
        return 'horizontal-seven';
      case 8:
        return 'horizontal-eight';
      case 9:
        return 'horizontal-nine';
      case 10:
        return 'horizontal-ten';
      case 11:
        return 'horizontal-eleven';
      case 12:
        return 'horizontal-twelve';
      default:
        alert('//--|🠊 Menu.horizontal.tsx: Only twelve buttons allowed <horizontally> for the <menu> element 🠈|--//');
        break;
    }
  } else if (criteria.selectAxis === '<vertical>') {
    switch (amount) {
      case 1:
        return 'vertical-one';
      case 2:
        return 'vertical-two';
      case 3:
        return 'vertical-three';
      case 4:
        return 'vertical-four';
      case 5:
        return 'vertical-five';
      case 6:
        return 'vertical-six';
      case 7:
        return 'vertical-seven';
      case 8:
        return 'vertical-eight';
      case 9:
        return 'vertical-nine';
      case 10:
        return 'vertical-ten';
      case 11:
        return 'vertical-eleven';
      case 12:
        return 'vertical-twelve';
      default:
        alert('//--|🠊 120. Menu.vertical.tsx: Only twelve buttons allowed <vertically> for the <menu> element 🠈|--//');
        break;
    }
  }
}
function setClass(
  selectAxis: '<vertical>' | '<horizontal>',
  selectDesign: '<fade>' | '<icon>' | '<text>',
  input: {
    label: 'home' | string;
    style: 'highlight' | 'downplay';
    align: 'left' | 'center' | 'right' | string;
    icon: { dark: string; medium: string; light: string };
    block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;

    text?: string | '';
    href?: string | '';
    state?: 'submit' | 'active' | string;
  }[]
) {
  const criteria = {
    selectAxis,
    selectDesign,
  };
  const axisName = setAxis(
    input.length as Number,
    criteria as {
      selectAxis: '<vertical>' | '<horizontal>';
      selectDesign: '<fade>' | '<icon>' | '<text>' | string;
    }
  );
  switch (selectDesign) {
    case '<fade>':
      return `fade-buttons-${axisName}`;
    case '<icon>':
      return `icon-buttons-${axisName}`;
    case '<text>':
      return `text-buttons-${axisName}`;
  }
}
