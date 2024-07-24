// Menu.anchor.tsx
//--|🠋 Frameworks 🠋|--//
import React from 'react';
//--|🠉 Frameworks 🠉|--//
//--|🠋 Utilities 🠋|--//
import { getSVG } from '../../../../modules/utilities/getFile';
//--|🠉 Utilities 🠉|--//
//--|🠋 Components 🠋|--//
import AnchorIcon from '../../Anchor/icon/Anchor.icon';
import AnchorText from '../../Anchor/text/Anchor.text';
import AnchorFade from '../../Anchor/fade/Anchor.fade';
//--|🠉 Components 🠉|--//
//--|🠋 Design 🠋|--//
import './Menu.anchor.scss';
//--|🠉 Design 🠉|--//

interface MenuProps {
  selectDesign: 'icon' | 'text' | 'fade' | string;
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
    case 'text':
      break;
    case 'fade':
      for (let i = 0; i < info.length; i++) {
        var icon = getSVG(`${info[i].label}`) as { dark: string; medium: string; light: string };
        if (info[i].href) {
          console.log(info[i].href);
        }
        anchorStyle.push(
          <AnchorFade
            href={info[i].href}
            text={info[i].text}
            state={info[i].state}
            style={info[i].style}
            label={info[i].label}
            block={info[i].block}
            align={info[i].align}
            target={info[i].target}
            key={`${info[i].text}`}
            icon={getSVG(`${info[i].label}`) as { dark: 'dark'; medium: 'medium'; light: 'light' }}
          />
        );
      }
      break;
  }
  switch (info.length) {
    case 1:
      return <menu className="one anchors">{anchorStyle}</menu>;
    case 2:
      return <menu className="two anchors">{anchorStyle}</menu>;
    case 3:
      return <menu className="three anchors">{anchorStyle}</menu>;
    case 4:
      return <menu className="four anchors">{anchorStyle}</menu>;
    case 5:
      return <menu className="five anchors">{anchorStyle}</menu>;
    case 6:
      return <menu className="six anchors">{anchorStyle}</menu>;
    case 7:
      return <menu className="seven anchors">{anchorStyle}</menu>;
    case 8:
      return <menu className="eight anchors">{anchorStyle}</menu>;
    case 9:
      return <menu className="nine anchors">{anchorStyle}</menu>;
    case 10:
      return <menu className="ten anchors">{anchorStyle}</menu>;
    case 11:
      return <menu className="eleven anchors">{anchorStyle}</menu>;
    case 12:
      return <menu className="twelve anchors">{anchorStyle}</menu>;
    default:
      alert('Maximum of 5 Buttons Allowed');
      break;
  }
};

export default MenuAnchor;
