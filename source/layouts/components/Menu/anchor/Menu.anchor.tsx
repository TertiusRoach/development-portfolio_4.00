// Menu.anchor.tsx
import React from 'react';
import './Menu.anchor.scss';
import { getSVG } from '../../../../scripts';

import AnchorIcon from '../../Anchor/icon/Anchor.icon';
import AnchorText from '../../Anchor/text/Anchor.text';

interface MenuProps {
  selectDesign: 'icon' | 'text' | string;
  info: {
    href: string;
    text?: string;
    state?: 'active' | '';
    style: 'downplay' | 'highlight' | string;
    align: 'left' | 'center' | 'right' | string;
    label?: 'home' | 'skills' | 'contact' | string;
    target: '_blank' | '_parent' | '_self' | '_top' | string;
    icon: undefined | { dark: string; medium: string; light: string };
    block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
  }[];
}

const MenuAnchor: React.FC<MenuProps> = ({ selectDesign, info }) => {
  let anchorStyle = [];

  // Only add highlight to the first ButtonFace. The rest should be downplay
  for (let i = 0; i < info.length; i++) {
    let icon = getSVG(`${info[i].label}`) as { dark: string; medium: string; light: string } | undefined;
    switch (selectDesign) {
      case 'icon':
        if (info[i].icon !== undefined) {
          if (i === 0) {
            anchorStyle.push(
              <AnchorIcon
                index={i}
                icon={icon}
                target="_blank"
                href={info[i].href}
                style={'highlight'}
                text={info[i].text}
                label={info[i].label}
                block={info[i].block}
                align={info[i].align}
                key={`${info[i].text}`}
              />
            );
          } else {
            anchorStyle.push(
              <AnchorIcon
                index={i}
                icon={icon}
                target="_blank"
                style={'downplay'}
                href={info[i].href}
                text={info[i].text}
                label={info[i].label}
                block={info[i].block}
                align={info[0].align}
                key={`${info[i].text}`}
              />
            );
          }
        } else {
          anchorStyle.push(
            <AnchorIcon
              index={i}
              target="_blank"
              icon={undefined}
              href={info[i].href}
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
