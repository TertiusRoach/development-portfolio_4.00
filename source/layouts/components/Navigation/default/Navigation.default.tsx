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
    view: 'top-lef' | 'top-rig' | 'bot-rig' | 'bot-lef' | undefined;
    color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(yellow)' | '(purple)' | '(turquoise)';
  };
  cases: {
    tasks?: {
      onClick?: (view: string) => void;
      onMouseEnter?: (view: string) => void;
      onMouseLeave?: (view: string) => void;
      onDoubleClick?: (view: string) => void;
    };
    image: Array<string> | undefined;
    view: Array<'top-lef' | 'top-rig' | 'bot-rig' | 'bot-lef'> | undefined;
  };
  //--|===|--\\
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;
  onDoubleClick?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;
}

function NavigationDefault({ info, style, cases, onClick, onMouseEnter, onMouseLeave, onDoubleClick }: TheseProps) {
  const pageName: string = info.pageName as string;
  const blockName: string = info.blockName as string;
  const labelName: string = info.labelName as string;

  useEffect(() => {}, [pageName, blockName, labelName]);

  let handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    cases.tasks?.onClick?.(event.currentTarget.id.split('_').pop() as 'top-lef' | 'top-rig' | 'bot-rig' | 'bot-lef');
    onClick?.(event);
  };
  let handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>): void => {
    cases.tasks?.onMouseEnter?.(event.currentTarget.id.split('_').pop() as 'top-lef' | 'top-rig' | 'bot-rig' | 'bot-lef');
    onMouseEnter?.(event);
  };
  let handleMouseLeave = (event: React.MouseEvent<HTMLButtonElement>): void => {
    cases.tasks?.onMouseLeave?.(event.currentTarget.id.split('_').pop() as 'top-lef' | 'top-rig' | 'bot-rig' | 'bot-lef');
    onMouseLeave?.(event);
  };
  let handleDoubleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    cases.tasks?.onDoubleClick?.(event.currentTarget.id.split('_').pop() as 'top-lef' | 'top-rig' | 'bot-rig' | 'bot-lef');
    onDoubleClick?.(event);
  };

  return (
    <nav className={`${labelName}-${blockName}_navigation-default`}>
      <ol className={`hori-X-${blockName}`}>
        {HorizontalButtons(
          info,
          style,
          cases,
          //--|===|--\\
          handleClick,
          handleMouseEnter,
          handleMouseLeave,
          handleDoubleClick,
        )}
      </ol>
      <ul className={`vert-Y-${blockName}`}>
        {VerticalButtons(
          info,
          style,
          cases,
          //--|===|--\\
          handleClick,
          handleMouseEnter,
          handleMouseLeave,
          handleDoubleClick,
        )}
      </ul>
    </nav>
  );
}

const VerticalButtons = (
  info: TheseProps['info'],
  style: TheseProps['style'],
  cases: TheseProps['cases'],
  //--|===|--\\
  onClick: TheseProps['onClick'],
  onMouseEnter: TheseProps['onMouseEnter'],
  onMouseLeave: TheseProps['onMouseLeave'],
  onDoubleClick: TheseProps['onDoubleClick'],
) => {
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
            //--|===|--\\
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
            //--|===|--\\
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
};
const HorizontalButtons = (
  info: TheseProps['info'],
  style: TheseProps['style'],
  cases: TheseProps['cases'],
  //--|===|--\\
  onClick: TheseProps['onClick'],
  onMouseEnter: TheseProps['onMouseEnter'],
  onMouseLeave: TheseProps['onMouseLeave'],
  onDoubleClick: TheseProps['onDoubleClick'],
) => {
  switch (info.blockName) {
    case 'main':
      return NavigationMain(info, style, cases);
    case 'header':
      return NavigationHeader(info, style, cases);
    case 'footer':
      return NavigationFooter(info, style, cases);
    case 'overlay':
      return NavigationOverlay(info, style, cases);
    case 'leftbar':
      return NavigationLeftbar(info, style, cases);
    case 'rightbar':
      return NavigationRightbar(info, style, cases);
  }
};

var NavigationMain = (info: TheseProps['info'], style: TheseProps['style'], cases: TheseProps['cases']) => {
  const pageInfo = info as TheseProps['info'];
  const pageStyle = style as TheseProps['style'];
  const pageCases = cases as TheseProps['cases'];

  // console.log('<Main> Loaded!');
  return <></>;
};
var NavigationHeader = (info: TheseProps['info'], style: TheseProps['style'], cases: TheseProps['cases']) => {
  const pageInfo = info as TheseProps['info'];
  const pageStyle = style as TheseProps['style'];
  const pageCases = cases as TheseProps['cases'];

  // console.log('<Header> Loaded!');
  return <></>;
};
var NavigationFooter = (info: TheseProps['info'], style: TheseProps['style'], cases: TheseProps['cases']) => {
  const pageInfo = info as TheseProps['info'];
  const pageStyle = style as TheseProps['style'];
  const pageCases = cases as TheseProps['cases'];

  // console.log('<Footer> Loaded!');
  return <></>;
};
var NavigationOverlay = (info: TheseProps['info'], style: TheseProps['style'], cases: TheseProps['cases']) => {
  const pageInfo = info as TheseProps['info'];
  const pageStyle = style as TheseProps['style'];
  const pageCases = cases as TheseProps['cases'];

  // console.log('<Overlay> Loaded!');
  return <></>;
};
var NavigationLeftbar = (info: TheseProps['info'], style: TheseProps['style'], cases: TheseProps['cases']) => {
  const pageInfo = info as TheseProps['info'];
  const pageStyle = style as TheseProps['style'];
  const pageCases = cases as TheseProps['cases'];

  // console.log('<Leftbar> Loaded!');
  return <></>;
};
var NavigationRightbar = (info: TheseProps['info'], style: TheseProps['style'], cases: TheseProps['cases']) => {
  const pageInfo = info as TheseProps['info'];
  const pageStyle = style as TheseProps['style'];
  const pageCases = cases as TheseProps['cases'];

  // console.log('<Rightbar> Loaded!');
  return <></>;
};
export default NavigationDefault;
