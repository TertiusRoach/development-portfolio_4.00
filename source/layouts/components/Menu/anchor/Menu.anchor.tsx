// Menu.anchor.tsx
import React from 'react';
import './Menu.anchor.scss';

import AnchorIcon from '../../Button/icon/Button.icon';
import AnchorText from '../../Button/frame/Button.frame';

interface MenuProps {
  style: 'icon' | 'text';
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar';
  items: { text: string; icon: string }[];
  align: 'left' | 'center' | 'right';
}
const MenuAnchor: React.FC<MenuProps> = ({ block, style, items, align }) => {
  let buttonStyle = [];
  for (let i = 0; i < items.length; i++) {
    switch (style) {
      case 'icon':
        if (i === 0) {
          buttonStyle.push(
            <AnchorIcon
              block={block}
              align={align}
              state="highlight"
              text={items[i].text}
              icon={items[i].icon}
              key={items[i].text}
            />
          );
        } else {
          buttonStyle.push(
            <AnchorIcon
              block={block}
              align={align}
              state="downplay"
              text={items[i].text}
              icon={items[i].icon}
              key={items[i].text}
            />
          );
        }
        break;
      case 'text':
        if (i === 0) {
          buttonStyle.push(
            <AnchorText
              block={block}
              align={align}
              state="highlight"
              text={items[i].text}
              icon={items[i].icon}
              key={items[i].text}
            />
          );
        } else {
          buttonStyle.push(
            <AnchorText
              block={block}
              align={align}
              state="downplay"
              text={items[i].text}
              icon={items[i].icon}
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

export default MenuAnchor;
