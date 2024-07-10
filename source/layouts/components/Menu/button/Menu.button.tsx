// Menu.button.tsx
import React from 'react';
import './Menu.button.scss';
import ButtonFade from '../../Button/fade/Button.fade';

interface MenuProps {
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar';
  items: { text: string; icon: string }[];
  align: 'left' | 'center' | 'right';
}

const MenuButton: React.FC<MenuProps> = ({ block, items, align }) => {
  switch (items.length) {
    case 1:
      return (
        <menu className="one">
          <ButtonFade block={block} align={align} text={items[0].text} icon={items[0].icon} state="highlight" />
        </menu>
      );
    case 2:
      return (
        <menu className="two">
          <ButtonFade block={block} align={align} text={items[0].text} icon={items[0].icon} state="highlight" />
          <ButtonFade block={block} align={align} text={items[1].text} icon={items[1].icon} state="downplay" />
        </menu>
      );
    case 3:
      return (
        <menu className="three">
          <ButtonFade block={block} align={align} text={items[0].text} icon={items[0].icon} state="highlight" />
          <ButtonFade block={block} align={align} text={items[1].text} icon={items[1].icon} state="downplay" />
          <ButtonFade block={block} align={align} text={items[2].text} icon={items[2].icon} state="downplay" />
        </menu>
      );
    case 4:
      return (
        <menu className="four">
          <ButtonFade block={block} align={align} text={items[0].text} icon={items[0].icon} state="highlight" />
          <ButtonFade block={block} align={align} text={items[1].text} icon={items[1].icon} state="downplay" />
          <ButtonFade block={block} align={align} text={items[2].text} icon={items[2].icon} state="downplay" />
          <ButtonFade block={block} align={align} text={items[3].text} icon={items[3].icon} state="downplay" />
        </menu>
      );
    case 5:
      return (
        <menu className="five">
          <ButtonFade block={block} align={align} text={items[0].text} icon={items[0].icon} state="highlight" />
          <ButtonFade block={block} align={align} text={items[1].text} icon={items[1].icon} state="downplay" />
          <ButtonFade block={block} align={align} text={items[2].text} icon={items[2].icon} state="downplay" />
          <ButtonFade block={block} align={align} text={items[3].text} icon={items[3].icon} state="downplay" />
          <ButtonFade block={block} align={align} text={items[4].text} icon={items[4].icon} state="downplay" />
        </menu>
      );
    default:
      alert('Menu.button.tsx');
      break;
  }
};

export default MenuButton;
