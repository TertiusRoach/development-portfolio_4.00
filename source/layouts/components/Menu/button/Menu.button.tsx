// Menu.button.tsx
import React from 'react';
import './Menu.button.scss';

import ButtonFade from '../../Button/fade/Button.fade';
import ButtonGlow from '../../Button/glow/Button.glow';
import ButtonIcon from '../../Button/icon/Button.icon';
import ButtonFrame from '../../Button/frame/Button.frame';
import ButtonSlide from '../../Button/slide/Button.slide';

interface MenuProps {
  style: 'fade' | 'frame' | 'glow' | 'icon' | 'slide';
  info: {
    icon: string;
    text: string;
    label: 'rightbar' | string;
    align: 'left' | 'center' | 'right' | string;
    block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
  }[];
  align: 'left' | 'center' | 'right';
  view?: 'highlight' | 'downplay';
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar';
}
const MenuButton: React.FC<MenuProps> = ({ style, info, align }) => {
  let buttonStyle = [];
  // Only add highlight to the first ButtonFace. The rest should be downplay
  for (let i = 0; i < info.length; i++) {
    switch (style) {
      case 'fade':
        if (i === 0) {
          buttonStyle.push(
            <ButtonFade
              view={'highlight'}
              index={i}
              text={info[i].text}
              icon={info[i].icon}
              label={info[i].label}
              align={info[i].align}
              block={info[i].block}
              key={`${info[i].text}`}
            />
          );
        } else {
          buttonStyle.push(
            <ButtonFade
              view={'downplay'}
              index={i}
              block={info[i].block}
              align={align}
              text={info[i].text}
              icon={info[i].icon}
              label={info[i].label}
              key={`${info[i].text}`}
            />
          );
        }
        break;
      case 'frame':
        if (i === 0) {
          buttonStyle.push(
            <ButtonFrame
              block={info[i].block}
              align={info[i].align}
              text={info[i].text}
              icon={info[i].icon}
              view="highlight"
              key={info[i].text}
            />
          );
        } else {
          buttonStyle.push(
            <ButtonFrame
              block={info[i].block}
              align={info[i].align}
              text={info[i].text}
              icon={info[i].icon}
              view="downplay"
              key={info[i].text}
            />
          );
        }
        break;
    }
  }

  switch (info.length) {
    case 1:
      return (
        <menu className="one">
          {buttonStyle}
          {/* <ButtonFade block={block} align={align} text={items[0].text} icon={items[0].icon} state="highlight" /> */}
        </menu>
      );
    case 2:
      return (
        <menu className="two">
          {buttonStyle}
          {/* <ButtonFade block={block} align={align} text={items[0].text} icon={items[0].icon} state="highlight" /> */}
          {/* <ButtonFade block={block} align={align} text={items[1].text} icon={items[1].icon} state="downplay" /> */}
        </menu>
      );
    case 3:
      return (
        <menu className="three">
          {buttonStyle}
          {/* <ButtonFade block={block} align={align} text={items[0].text} icon={items[0].icon} state="highlight" /> */}
          {/* <ButtonFade block={block} align={align} text={items[1].text} icon={items[1].icon} state="downplay" /> */}
          {/* <ButtonFade block={block} align={align} text={items[2].text} icon={items[2].icon} state="downplay" /> */}
        </menu>
      );
    case 4:
      return (
        <menu className="four">
          {buttonStyle}
          {/* <ButtonFade block={block} align={align} text={items[0].text} icon={items[0].icon} state="highlight" /> */}
          {/* <ButtonFade block={block} align={align} text={items[1].text} icon={items[1].icon} state="downplay" /> */}
          {/* <ButtonFade block={block} align={align} text={items[2].text} icon={items[2].icon} state="downplay" /> */}
          {/* <ButtonFade block={block} align={align} text={items[3].text} icon={items[3].icon} state="downplay" /> */}
        </menu>
      );
    case 5:
      return (
        <menu className="five">
          {buttonStyle}
          {/* <ButtonFade block={block} align={align} text={items[0].text} icon={items[0].icon} state="highlight" /> */}
          {/* <ButtonFade block={block} align={align} text={items[1].text} icon={items[1].icon} state="downplay" /> */}
          {/* <ButtonFade block={block} align={align} text={items[2].text} icon={items[2].icon} state="downplay" /> */}
          {/* <ButtonFade block={block} align={align} text={items[3].text} icon={items[3].icon} state="downplay" /> */}
          {/* <ButtonFade block={block} align={align} text={items[4].text} icon={items[4].icon} state="downplay" /> */}
        </menu>
      );
    default:
      alert('Menu.button.tsx');
      break;
  }
};

export default MenuButton;
