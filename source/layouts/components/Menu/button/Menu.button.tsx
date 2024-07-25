// Menu.button.tsx
// Ok, so here in lies the error.
// Please toggle between horizontal and vertical. If the optional value is left blank, revert to horizontal.
// Use REACT where it is most effective to do so.
import React from 'react';
import './Menu.button.scss';

import ButtonFade from '../../Button/fade/Button.fade';
// import ButtonGlow from '../../Button/glow/Button.glow';
// import ButtonIcon from '../../Button/icon/Button.icon';
// import ButtonFrame from '../../Button/frame/Button.frame';
// import ButtonSlide from '../../Button/slide/Button.slide';

import { getSVG } from '../../../../modules/utilities/getFile';

interface MenuProps {
  selectDesign: 'fade' | 'frame' | 'glow' | 'icon' | 'slide';
  selectAxis: 'horizontal' | 'vertical';
  selectInfo: {
    text: string;
    state: 'active' | '';
    label: 'rightbar' | string;
    style: 'highlight' | 'downplay';
    axis: 'vertical' | 'horizontal';
    align: 'left' | 'center' | 'right' | string;
    icon: { dark: string; medium: string; light: string };
    block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;

    href?: string;
  }[];
}
const MenuButton: React.FC<MenuProps> = ({ selectInfo, selectAxis, selectDesign }) => {
  return <>{renderMenu(selectInfo, selectAxis, selectDesign)}</>;
};
export default MenuButton;

function renderMenu(
  selectInfo: {
    text: string;
    state: 'active' | '';
    label: 'rightbar' | string;
    style: 'highlight' | 'downplay';
    align: 'left' | 'center' | 'right' | string;
    icon: { dark: string; medium: string; light: string };
    block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
  }[],
  selectAxis: 'horizontal' | 'vertical',
  selectDesign: 'fade' | 'text' | 'icon' | 'slide' | 'frame' | 'glow'
) {
  // let buttonStyle = [];
  for (let i = 0; i < selectInfo.length; i++) {
    let icon = getSVG(`${selectInfo[i].label}`) as { dark: string; medium: string; light: string } | undefined;
    switch (selectDesign) {
      case 'fade':
        // buttonStyle.push(
        //   // <ButtonFade
        //   //   index={i}
        //   //   icon={icon}
        //   //   axis={selectAxis}
        //   //   text={selectInfo[i].text}
        //   //   style={selectInfo[i].style}
        //   //   state={selectInfo[i].state}
        //   //   label={selectInfo[i].label}
        //   //   block={selectInfo[i].block}
        //   //   align={selectInfo[i].align}
        //   //   key={`${selectInfo[i].text}`}
        //   // />
        // );
        break;
      case 'icon':
        break;
      case 'text':
        break;
    }
  }

  if (selectAxis === 'horizontal') {
    switch (selectInfo.length) {
      case 1:
      // return <menu className="horizontal-1 buttons">{buttonStyle}</menu>;
      case 2:
      // return <menu className="horizontal-2 buttons">{buttonStyle}</menu>;
      case 3:
      // return <menu className="horizontal-3 buttons">{buttonStyle}</menu>;
      case 4:
      // return <menu className="horizontal-4 buttons">{buttonStyle}</menu>;
      case 5:
      // return <menu className="horizontal-5 buttons">{buttonStyle}</menu>;
      default:
        alert('//--|🠊 Menu.button.tsx: Only five buttons allowed horizontally for the <menu> element 🠈|--//');
        break;
    }
  } else if (selectAxis === 'vertical') {
    console.log(selectInfo);
    console.log(selectAxis);
    console.log(selectDesign);

    switch (selectInfo.length) {
      case 1:
      // return <menu className="vertical-1 buttons">{buttonStyle}</menu>;
      case 2:
      // return <menu className="vertical-2 buttons">{buttonStyle}</menu>;
      case 3:
      // return <menu className="vertical-3 buttons">{buttonStyle}</menu>;
      case 4:
      // return <menu className="vertical-4 buttons">{buttonStyle}</menu>;
      case 5:
      // return <menu className="vertical-5 buttons">{buttonStyle}</menu>;
      case 6:
      // return <menu className="vertical-6 buttons">{buttonStyle}</menu>;
      case 7:
      // return <menu className="vertical-7 buttons">{buttonStyle}</menu>;
      case 8:
      // return <menu className="vertical-8 buttons">{buttonStyle}</menu>;
      case 9:
      // return <menu className="vertical-9 buttons">{buttonStyle}</menu>;
      case 10:
      // return <menu className="vertical-10 buttons">{buttonStyle}</menu>;
      case 11:
      // return <menu className="vertical-11 buttons">{buttonStyle}</menu>;
      case 12:
      // return <menu className="vertical-12 buttons">{buttonStyle}</menu>;
      default:
        alert('//--|🠊 Menu.button.tsx: Only twelve buttons allowed vertically for the <menu> element 🠈|--//');
        break;
    }
  }
}
