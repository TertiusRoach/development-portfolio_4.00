// Menu.anchor.tsx
//--|🠋 Frameworks 🠋|--//
import React from 'react';
//--|🠉 Frameworks 🠉|--//
//--|🠋 Utilities 🠋|--//
import getSVG from '../../../../utilities/getSVG';
//--|🠉 Utilities 🠉|--//
//--|🠋 Components 🠋|--//
import AnchorIcon from '../../Anchor/icon/Anchor.icon';
import AnchorText from '../../Anchor/text/Anchor.text';
//--|🠉 Components 🠉|--//
//--|🠋 Design 🠋|--//
import './Menu.anchor.scss';
//--|🠉 Design 🠉|--//

interface MenuProps {
  selectDesign: 'icon' | 'text' | string;
  info: {
    href: string;
    text: string;
    state: 'active' | '';
    style: 'downplay' | 'highlight';
    align: 'left' | 'center' | 'right' | string;
    label: 'home' | 'skills' | 'contact' | string;
    target: '_blank' | '_parent' | '_self' | '_top' | string;
    icon: { dark: 'dark'; medium: 'medium'; light: 'light' };
    block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
  }[];
}
const MenuAnchor: React.FC<MenuProps> = ({ selectDesign, info }) => {
  let anchorStyle = [];
  switch (selectDesign) {
    case 'icon':
      for (let i = 0; i < info.length; i++) {
        var icon = getSVG(`${info[i].label}`) as { dark: string; medium: string; light: string };
        anchorStyle.push(
          <AnchorIcon
            href={info[i].href}
            text={info[i].text}
            state={info[i].state}
            style={info[i].style}
            label={info[i].label}
            block={info[i].block}
            align={info[i].align}
            target={info[i].target}
            key={`${info[i].text}`}
            icon={icon as { dark: 'dark'; medium: 'medium'; light: 'light' }}
          />
        );
      }
      break;
    case 'frame':
      break;
  }

  console.log(anchorStyle);

  switch (info.length) {
    case 1:
      return <menu className="one">{anchorStyle}</menu>;
    case 2:
      return <menu className="two">{anchorStyle}</menu>;
    case 3:
      return <menu className="three">{anchorStyle}</menu>;
    case 4:
      return <menu className="four">{anchorStyle}</menu>;
    case 5:
      return <menu className="five">{anchorStyle}</menu>;
    default:
      alert('Maximum of 5 Buttons Allowed');
      break;
  }
};

export default MenuAnchor;
