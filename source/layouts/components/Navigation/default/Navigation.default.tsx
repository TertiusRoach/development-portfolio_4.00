//--|🠊 Navigation.default.tsx 🠈|--\\

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import ButtonRouting from '../../Button/routing/Button.routing';

//--|🠋 Functions 🠋|--\\

//--|🠋 Styles 🠋|--\\
import './Navigation.default.scss';

interface TheseProps {
  info: {
    pageName: 'components' | 'landing' | 'overtime' | 'ticketing' | 'hyperlink';
    blockName: 'main' | 'header' | 'footer' | 'overlay' | 'leftbar' | 'rightbar';
    labelName: 'default' | string;
  };
  style: {
    image: string | undefined;
    shade: '~dark~' | '~light~';
    color: '(red)' | '(green)' | '(blue)' | '(mono)';
    view: 'top-lef' | 'top-rig' | 'bot-rig' | 'bot-lef' | undefined;
  };
  cases: {
    image: Array<string> | undefined;
    view: Array<'top-lef' | 'top-rig' | 'bot-rig' | 'bot-lef'> | undefined;
    tasks: '';
  };

  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;
  onDoubleClick?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;
}
function VerticalButtons(
  info: TheseProps['info'],
  style: TheseProps['style'],
  cases: TheseProps['cases'],
  onClick: TheseProps['onClick'],
  onMouseEnter: TheseProps['onMouseEnter'],
  onMouseLeave: TheseProps['onMouseLeave'],
  onDoubleClick: TheseProps['onDoubleClick'],
) {
  switch (true) {
    case cases.view !== undefined:
      return cases.view.map((path, index) => (
        <li className={path} key={index}>
          <ButtonRouting
            style={{
              size: '<h1>',
              type: '{button}',
              color: style.color,
              shade: style.shade,
              image: cases.image?.[index] as string,
              view: path as 'top-lef' | 'top-rig' | 'bot-rig' | 'bot-lef',
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: `${info.pageName}-${info.blockName}-${info.labelName}-navigation_${path}`,
            }}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onDoubleClick={onDoubleClick}
          />
        </li>
      ));
    case style.view !== undefined:
      return (
        <li className={style.view}>
          <ButtonRouting
            style={{
              size: '<h1>',
              type: '{button}',
              view: style.view,
              color: style.color,
              shade: style.shade,
              image: style.image as string,
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: `${info.pageName}-${info.blockName}-${info.labelName}-navigation_${style.view}`,
            }}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onDoubleClick={onDoubleClick}
          />
        </li>
      );
    default:
      return null;
  }
}
function HorizontalButtons(
  info: TheseProps['info'],
  style: TheseProps['style'],
  cases: TheseProps['cases'],
  onClick: TheseProps['onClick'],
  onMouseEnter: TheseProps['onMouseEnter'],
  onMouseLeave: TheseProps['onMouseLeave'],
  onDoubleClick: TheseProps['onDoubleClick'],
) {
  switch (info.blockName) {
    case 'main':
      return NavigationMain(info, style);
    case 'header':
      return NavigationHeader(info, style);
    case 'footer':
      return NavigationFooter(info, style);
    case 'overlay':
      return NavigationOverlay(info, style);
    case 'leftbar':
      return NavigationLeftbar(info, style);
    case 'rightbar':
      return NavigationRightbar(info, style);
  }
}

const NavigationDefault: React.FC<TheseProps> = ({
  info,
  style,
  cases,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onDoubleClick,
}) => {
  const pageName: string = info.pageName as string;
  const blockName: string = info.blockName as string;
  const labelName: string = info.labelName as string;

  useEffect(() => {}, [pageName, blockName, labelName]);

  return (
    <nav className={`${labelName}-${blockName}_navigation-default`}>
      <ol className={`hori-X-${blockName}`}>
        {HorizontalButtons(info, style, cases, onClick, onMouseEnter, onMouseLeave, onDoubleClick)}
      </ol>
      <ul className={`vert-Y-${blockName}`}>
        {VerticalButtons(info, style, cases, onClick, onMouseEnter, onMouseLeave, onDoubleClick)}
      </ul>
    </nav>
  );
};

let NavigationMain = (info: TheseProps['info'], style: TheseProps['style']) => {
  // console.log('<Main> Loaded!');
  return <></>;
};
let NavigationHeader = (info: TheseProps['info'], style: TheseProps['style']) => {
  // console.log('<Header> Loaded!');
  return <></>;
};
let NavigationFooter = (info: TheseProps['info'], style: TheseProps['style']) => {
  // console.log('<Footer> Loaded!');
  return <></>;
};
let NavigationOverlay = (info: TheseProps['info'], style: TheseProps['style']) => {
  // console.log('<Overlay> Loaded!');
  return <></>;
};
let NavigationLeftbar = (info: TheseProps['info'], style: TheseProps['style']) => {
  // console.log('<Leftbar> Loaded!');
  return <></>;
};
let NavigationRightbar = (info: TheseProps['info'], style: TheseProps['style']) => {
  // console.log('<Rightbar> Loaded!');
  return <></>;
};
export default NavigationDefault;
