// Menu.button.tsx
import React from 'react';
import './Menu.button.scss';

import { getSVG } from '../../../../modules/utilities/getFile';

import ButtonFade from '../../Button/fade/Button.fade';
// import ButtonGlow from '../../Button/glow/Button.glow';
// import ButtonIcon from '../../Button/icon/Button.icon';
// import ButtonFrame from '../../Button/frame/Button.frame';
// import ButtonSlide from '../../Button/slide/Button.slide';

interface MenuProps {
  selectDesign: 'fade' | 'frame' | 'glow' | 'icon' | 'slide';
  buttonInfo: {
    text: string;
    state: 'active' | '';
    label: 'rightbar' | string;
    style: 'highlight' | 'downplay';
    align: 'left' | 'center' | 'right' | string;
    icon: { dark: string; medium: string; light: string };
    block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
  }[];
}
const MenuButton: React.FC<MenuProps> = ({ selectDesign, buttonInfo: info }) => {
  let buttonStyle = [];

  // Only add highlight to the first ButtonFace. The rest should be downplay
  for (let i = 0; i < info.length; i++) {
    let icon = getSVG(`${info[i].label}`) as { dark: string; medium: string; light: string } | undefined;
    switch (selectDesign) {
      case 'fade':
        buttonStyle.push(
          <ButtonFade
            index={i}
            icon={icon}
            text={info[i].text}
            style={info[i].style}
            state={info[i].state}
            label={info[i].label}
            block={info[i].block}
            align={info[i].align}
            key={`${info[i].text}`}
          />
        );
        break;
      case 'frame':
        break;
    }
  }

  switch (info.length) {
    case 1:
      return <menu className="one buttons">{buttonStyle}</menu>;
    case 2:
      return <menu className="two buttons">{buttonStyle}</menu>;
    case 3:
      return <menu className="three buttons">{buttonStyle}</menu>;
    case 4:
      return <menu className="four buttons">{buttonStyle}</menu>;
    case 5:
      return <menu className="five buttons">{buttonStyle}</menu>;
    default:
      alert('Maximum of 5 Buttons Allowed');
      break;
  }
};

export default MenuButton;
