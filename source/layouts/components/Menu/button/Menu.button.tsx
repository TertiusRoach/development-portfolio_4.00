// Menu.button.tsx
import React from 'react';
import './Menu.button.scss';
import { getSVG } from '../../../../scripts';

import ButtonFade from '../../Button/fade/Button.fade';
import ButtonGlow from '../../Button/glow/Button.glow';
import ButtonIcon from '../../Button/icon/Button.icon';
import ButtonFrame from '../../Button/frame/Button.frame';
import ButtonSlide from '../../Button/slide/Button.slide';

interface MenuProps {
  selectDesign: 'fade' | 'frame' | 'glow' | 'icon' | 'slide';
  info: {
    text: string;
    icon: { dark: string; medium: string; light: string };
    label: 'rightbar' | string;
    style: 'highlight' | 'downplay' | string;
    align: 'left' | 'center' | 'right' | string;
    block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
  }[];
}
const MenuButton: React.FC<MenuProps> = ({ selectDesign, info }) => {
  let buttonStyle = [];

  // Only add highlight to the first ButtonFace. The rest should be downplay
  for (let i = 0; i < info.length; i++) {
    let icon = getSVG(`${info[i].label}`) as { dark: string; medium: string; light: string } | undefined;
    switch (selectDesign) {
      case 'fade':
        if (info[i].icon !== undefined) {
          if (i === 0) {
            buttonStyle.push(
              <ButtonFade
                index={i}
                style={'highlight'}
                text={info[i].text}
                icon={icon}
                label={info[i].label}
                block={info[i].block}
                align={info[i].align}
                key={`${info[i].text}`}
              />
            );
          } else {
            buttonStyle.push(
              <ButtonFade
                index={i}
                icon={icon}
                style={'downplay'}
                text={info[i].text}
                label={info[i].label}
                block={info[i].block}
                align={info[0].align}
                key={`${info[i].text}`}
              />
            );
          }
        } else {
          buttonStyle.push(
            <ButtonFade
              index={i}
              icon={undefined}
              style={'highlight'}
              text={info[i].text}
              label={info[i].label}
              block={info[i].block}
              align={info[i].align}
              key={`${info[i].text}`}
            />
          );
        }
        break;
      case 'frame':
        break;
    }
  }

  switch (info.length) {
    case 1:
      return <menu className="one">{buttonStyle}</menu>;
    case 2:
      return <menu className="two">{buttonStyle}</menu>;
    case 3:
      return <menu className="three">{buttonStyle}</menu>;
    case 4:
      return <menu className="four">{buttonStyle}</menu>;
    case 5:
      return <menu className="five">{buttonStyle}</menu>;
    default:
      alert('Maximum of 5 Buttons Allowed');
      break;
  }
};

export default MenuButton;
