// Menu.button.tsx
import React from 'react';
import './Menu.button.scss';

import ButtonFade from '../../Button/fade/Button.fade';
// import ButtonGlow from '../../Button/glow/Button.glow';
// import ButtonIcon from '../../Button/icon/Button.icon';
// import ButtonFrame from '../../Button/frame/Button.frame';
// import ButtonSlide from '../../Button/slide/Button.slide';

import { getSVG } from '../../../../modules/utilities/getFile';

interface MenuProps {
  criteria: {
    buildAxis: '<vertical>' | '<horizontal>';
    buildDesign: '<fade>' | '<icon>' | '<text>';
    buildElement: '<buttons>' | '<anchors>' | '<ordered>' | '<unordered>';
  };
  information: {
    label: 'home' | string;
    style: 'highlight' | 'downplay';
    align: 'left' | 'center' | 'right' | string;
    icon: { dark: string; medium: string; light: string };
    block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;

    text?: string | '';
    href?: string | '';
    state?: 'active' | '';
  }[];
}
const MenuButton: React.FC<MenuProps> = ({ criteria, information }) => {
  let buildAxis: '<vertical>' | '<horizontal>' = criteria.buildAxis;
  let buildDesign: '<fade>' | '<icon>' | '<text>' = criteria.buildDesign;
  let buildElement: '<buttons>' | '<anchors>' | '<ordered>' | '<unordered>' = criteria.buildElement;
  return (
    <menu className={`${setClass(buildAxis, buildDesign, buildElement, information)}`}>
      {information.map((info, i) => (
        <ButtonFade
          key={i}
          axis={buildAxis}
          text={`${info.text}`}
          href={`${info.href}`}
          label={`${info.label}`}
          style={`${info.style}`}
          align={`${info.align}`}
          block={`${info.block}`}
          state={`${info.state}` as ''}
          icon={info.icon as { dark: string; medium: string; light: string }}
        />
      ))}
    </menu>
  );
  // }
};
export default MenuButton;

function setAxis(
  amount: Number,
  criteria: {
    buildAxis: '<vertical>' | '<horizontal>';
    buildDesign: '<fade>' | '<icon>' | '<text>' | string;
    buildElement: '<buttons>' | '<anchors>' | '<ordered>' | '<unordered>' | string;
  }
) {
  if (criteria.buildAxis === '<horizontal>') {
    switch (amount) {
      case 1:
        return 'horizontal-one';
      case 2:
        return 'horizontal-two';
      case 3:
        return 'horizontal-three';
      case 4:
        return 'horizontal-four';
      case 5:
        return 'horizontal-five';
      case 6:
        return 'horizontal-six';
      case 7:
        return 'horizontal-seven';
      case 8:
        return 'horizontal-eight';
      case 9:
        return 'horizontal-nine';
      case 10:
        return 'horizontal-ten';
      case 11:
        return 'horizontal-eleven';
      case 12:
        return 'horizontal-twelve';
      default:
        alert('//--|🠊 Menu.horizontal.tsx: Only twelve buttons allowed <horizontally> for the <menu> element 🠈|--//');
        break;
    }
  } else if (criteria.buildAxis === '<vertical>') {
    switch (amount) {
      case 1:
        return 'vertical-one';
      case 2:
        return 'vertical-two';
      case 3:
        return 'vertical-three';
      case 4:
        return 'vertical-four';
      case 5:
        return 'vertical-five';
      case 6:
        return 'vertical-six';
      case 7:
        return 'vertical-seven';
      case 8:
        return 'vertical-eight';
      case 9:
        return 'vertical-nine';
      case 10:
        return 'vertical-ten';
      case 11:
        return 'vertical-eleven';
      case 12:
        return 'vertical-twelve';
      default:
        alert('//--|🠊 120. Menu.vertical.tsx: Only twelve buttons allowed <vertically> for the <menu> element 🠈|--//');
        break;
    }
  }
}
function setClass(
  buildAxis: '<vertical>' | '<horizontal>',
  buildDesign: '<fade>' | '<icon>' | '<text>',
  buildElement: '<buttons>' | '<anchors>' | '<ordered>' | '<unordered>' | string,
  information: {
    label: 'home' | string;
    style: 'highlight' | 'downplay';
    align: 'left' | 'center' | 'right' | string;
    icon: { dark: string; medium: string; light: string };
    block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;

    text?: string | '';
    href?: string | '';
    state?: 'active' | '';
  }[]
) {
  const criteria = {
    buildAxis,
    buildDesign,
    buildElement,
  };
  const axisName = setAxis(
    information.length as Number,
    criteria as {
      buildAxis: '<vertical>' | '<horizontal>';
      buildDesign: '<fade>' | '<icon>' | '<text>' | string;
      buildElement: '<buttons>' | '<anchors>' | '<ordered>' | '<unordered>' | string;
    }
  );
  if (buildElement === '<buttons>') {
    switch (buildDesign) {
      case '<fade>':
        return `fade-buttons-${axisName}`;
      case '<icon>':
        return `icon-buttons-${axisName}`;
      case '<text>':
        return `text-buttons-${axisName}`;
    }
  } else if (buildElement === '<anchors>') {
    switch (buildDesign) {
      case '<fade>':
        return `fade-anchors-${axisName}`;
      case '<icon>':
        return `icon-anchors-${axisName}`;
      case '<text>':
        return `text-anchors-${axisName}`;
    }
  }
}
/*
    let infoText = `${information[i].text}`;
    let infoHref = `${information[i].href}`;
    let infoState = `${information[i].state}`;
    let infoLabel = `${information[i].label}`;
    let infoStyle = `${information[i].style}`;
    let infoAlign = `${information[i].align}`;
    let infoIcon = `${information[i].icon}`;
    let infoBlock = `${information[i].block}`;

    console.log(infoText);
    console.log(infoHref);
    console.log(infoState);
    console.log(infoLabel);
    console.log(infoStyle);
    console.log(infoAlign);
    console.log(infoIcon);
    console.log(infoBlock);
    */
