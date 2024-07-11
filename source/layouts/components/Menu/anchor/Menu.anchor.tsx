// Menu.anchor.tsx
import React from 'react';
import './Menu.anchor.scss';

import AnchorIcon from '../../Anchor/icon/Anchor.icon';
import AnchorText from '../../Anchor/text/Anchor.text';

interface MenuProps {
  style: 'icon' | 'text';
  align: 'left' | 'center' | 'right';
  // items: { text: string; icon: string; href: string; }[];
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar';
  items: {
    name: string;
    href: string;
    icon: string;
    target: '_blank' | '_parent' | '_self' | '_top' | string;
  }[];
}
const MenuAnchor: React.FC<MenuProps> = ({ style, items, align, block }) => {
  let anchorStyle = [];
  for (let i = 0; i < items.length; i++) {
    switch (style) {
      case 'icon':
        if (i === 0) {
          anchorStyle.push(
            <AnchorIcon
              block={block}
              align={align}
              state="highlight"
              icon={items[i].icon}
              references={items[i]}
              key={items[i].href}
            />
          );
        } else {
          anchorStyle.push(
            <AnchorIcon
              block={block}
              align={align}
              state="downplay"
              icon={items[i].icon}
              references={items[i]}
              key={items[i].href}
            />
          );
        }
        break;
      case 'text':
        if (i === 0) {
          anchorStyle.push(
            <AnchorText
              block={block}
              align={align}
              state="highlight"
              text={items[i].icon}
              references={items[i]}
              key={items[i].href}
            />
          );
        } else {
          anchorStyle.push(
            <AnchorText
              block={block}
              align={align}
              state="downplay"
              text={items[i].icon}
              references={items[i]}
              key={items[i].href}
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
          {anchorStyle}
          {/* <ButtonFade block={block} align={align} text={items[0].text} icon={items[0].icon} state="highlight" /> */}
        </menu>
      );
    case 2:
      return (
        <menu className="two">
          {anchorStyle}
          {/* <ButtonFade block={block} align={align} text={items[0].text} icon={items[0].icon} state="highlight" /> */}
          {/* <ButtonFade block={block} align={align} text={items[1].text} icon={items[1].icon} state="downplay" /> */}
        </menu>
      );
    case 3:
      return (
        <menu className="three">
          {anchorStyle}
          {/* <ButtonFade block={block} align={align} text={items[0].text} icon={items[0].icon} state="highlight" /> */}
          {/* <ButtonFade block={block} align={align} text={items[1].text} icon={items[1].icon} state="downplay" /> */}
          {/* <ButtonFade block={block} align={align} text={items[2].text} icon={items[2].icon} state="downplay" /> */}
        </menu>
      );
    case 4:
      return (
        <menu className="four">
          {anchorStyle}
          {/* <ButtonFade block={block} align={align} text={items[0].text} icon={items[0].icon} state="highlight" /> */}
          {/* <ButtonFade block={block} align={align} text={items[1].text} icon={items[1].icon} state="downplay" /> */}
          {/* <ButtonFade block={block} align={align} text={items[2].text} icon={items[2].icon} state="downplay" /> */}
          {/* <ButtonFade block={block} align={align} text={items[3].text} icon={items[3].icon} state="downplay" /> */}
        </menu>
      );
    case 5:
      return (
        <menu className="five">
          {anchorStyle}
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
