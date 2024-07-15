// Menu.button.tsx
import React from 'react';
import './Menu.button.scss';

import ButtonFade from '../../Button/fade/Button.fade';
import ButtonGlow from '../../Button/glow/Button.glow';
import ButtonIcon from '../../Button/icon/Button.icon';
import ButtonFrame from '../../Button/frame/Button.frame';
import ButtonSlide from '../../Button/slide/Button.slide';

interface MenuProps {
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar';
  style: 'fade' | 'frame' | 'glow' | 'icon' | 'slide';
  items: { text: string; icon: string }[];
  align: 'left' | 'center' | 'right';
  view?: 'highlight' | 'downplay';
}
const MenuButton: React.FC<MenuProps> = ({ block, style, items, align }) => {
  let buttonStyle = [];
  // Only add highlight to the first ButtonFace. The rest should be downplay
  for (let i = 0; i < items.length; i++) {
    switch (style) {
      case 'fade':
        if (i === 0) {
          buttonStyle.push(
            <ButtonFade
              index={i}
              block={block}
              align={align}
              view={'highlight'}
              text={items[i].text}
              icon={items[i].icon}
              key={`${items[i].text}`}
            />
          );
        } else {
          buttonStyle.push(
            <ButtonFade
              index={i}
              block={block}
              align={align}
              view={'downplay'}
              text={items[i].text}
              icon={items[i].icon}
              key={`${items[i].text}`}
            />
          );
        }
        break;
      case 'frame':
        if (i === 0) {
          buttonStyle.push(
            <ButtonFrame
              block={block}
              align={align}
              text={items[i].text}
              icon={items[i].icon}
              state="highlight"
              key={items[i].text}
            />
          );
        } else {
          buttonStyle.push(
            <ButtonFrame
              block={block}
              align={align}
              text={items[i].text}
              icon={items[i].icon}
              state="downplay"
              key={items[i].text}
            />
          );
        }
        break;
      case 'glow':
        if (i === 0) {
          buttonStyle.push(
            <ButtonGlow
              block={block}
              align={align}
              text={items[i].text}
              icon={items[i].icon}
              state="highlight"
              key={items[i].text}
            />
          );
        } else {
          buttonStyle.push(
            <ButtonGlow
              block={block}
              align={align}
              text={items[i].text}
              icon={items[i].icon}
              state="downplay"
              key={items[i].text}
            />
          );
        }
        break;
      case 'icon':
        if (i === 0) {
          buttonStyle.push(
            <ButtonIcon
              block={block}
              align={align}
              text={items[i].text}
              icon={items[i].icon}
              state="highlight"
              key={items[i].text}
            />
          );
        } else {
          buttonStyle.push(
            <ButtonIcon
              block={block}
              align={align}
              text={items[i].text}
              icon={items[i].icon}
              state="downplay"
              key={items[i].text}
            />
          );
        }
        break;
      case 'slide':
        if (i === 0) {
          buttonStyle.push(
            <ButtonSlide
              block={block}
              align={align}
              text={items[i].text}
              icon={items[i].icon}
              state="highlight"
              key={items[i].text}
            />
          );
        } else {
          buttonStyle.push(
            <ButtonSlide
              block={block}
              align={align}
              text={items[i].text}
              icon={items[i].icon}
              state="downplay"
              key={items[i].text}
            />
          );
        }
        break;
    }
  }

  switch (items.length) {
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
