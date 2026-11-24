//--|🠊 Navigation.default.tsx 🠈|--\\

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import ButtonRouting from '../../Button/routing/Button.routing';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../tools/conversions';

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
    color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(purple)' | '(orange)' | '(pink)' | '(yellow)' | '(brown)' | '(turquoise)';
  };
  cases: {
    image: Array<string> | undefined;
    buttons: Array<'top-lef' | 'top-rig' | 'bot-rig' | 'bot-lef'> | undefined;
    menus: Array<{ align: '-top-' | '-rig-' | '-bot-' | '-lef-'; menu: React.JSX.Element }> | undefined;
    //--|===|--\\
    tasks?: {
      onClick?: (view: string, container: HTMLElement) => void;
      onMouseEnter?: (view: string, container: HTMLElement) => void;
      onMouseLeave?: (view: string, container: HTMLElement) => void;
      onDoubleClick?: (view: string, container: HTMLElement) => void;
    };
  };
  //--|===|--\\
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;
  onDoubleClick?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;
}

export function NavigationDefault({ info, style, cases, onClick, onMouseEnter, onMouseLeave, onDoubleClick }: TheseProps) {
  const pageName: string = info.pageName as string;
  const blockName: string = info.blockName as string;
  const labelName: string = info.labelName as string;

  useEffect(() => {
    if (`${pageName} ${blockName} ${labelName}` === 'components main default') {
      /*
      console.log('Menu:', cases.menus?.[0].menu);
      console.log('Align:', stripBrackets(`${cases.menus?.[0].align}`, '--'));
      const menuElement = document.querySelectorAll(
        `#${pageName}-${blockName} nav[class*="${blockName}_navigation-default"] menu`,
      ) as NodeListOf<HTMLMenuElement>; //--|🠈 Uncommented: every <menu>, scroll, select, swipe or toggle 🠈|--\\
      console.log(menuElement[0].childNodes);
      console.log(menuElement[1].childNodes);
      */
    }
  }, [pageName, blockName, labelName]);

  let handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    var view = event.currentTarget.id.split('_').pop() as 'top-lef' | 'top-rig' | 'bot-rig' | 'bot-lef';
    var container = event.currentTarget.closest('section[class*="foreground"]')?.parentElement as HTMLElement;
    cases.tasks?.onClick?.(view, container);
    onClick?.(event);
  };
  let handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>): void => {
    var view = event.currentTarget.id.split('_').pop() as 'top-lef' | 'top-rig' | 'bot-rig' | 'bot-lef';
    var container = event.currentTarget.closest('section[class*="foreground"]')?.parentElement as HTMLElement;
    cases.tasks?.onMouseEnter?.(view, container);
    onMouseEnter?.(event);
  };
  let handleMouseLeave = (event: React.MouseEvent<HTMLButtonElement>): void => {
    var view = event.currentTarget.id.split('_').pop() as 'top-lef' | 'top-rig' | 'bot-rig' | 'bot-lef';
    var container = event.currentTarget.closest('section[class*="foreground"]')?.parentElement as HTMLElement;
    cases.tasks?.onMouseLeave?.(view, container);
    onMouseLeave?.(event);
  };
  let handleDoubleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    var view = event.currentTarget.id.split('_').pop() as 'top-lef' | 'top-rig' | 'bot-rig' | 'bot-lef';
    var container = event.currentTarget.closest('section[class*="foreground"]')?.parentElement as HTMLElement;
    cases.tasks?.onDoubleClick?.(view, container);
    onDoubleClick?.(event);
  };

  return (
    <nav className={`${labelName}-${blockName}_navigation-default`}>
      <ol className={`hori-X-${blockName}`}>
        {HorizontalMenus(
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
const HorizontalMenus = (
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
    case cases.menus !== undefined:
      return cases.menus.map((path, index) => (
        <li className={`set-${stripBrackets(cases.menus?.[index].align as string, '--')}`} key={index}>
          {cases.menus?.[index as number].menu}
        </li>
      ));
    default:
      return null;
  }
};
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
    case cases.buttons !== undefined:
      return cases.buttons.map((path, index) => (
        //--|🠊 Multiple <Button> 🠈|--\\
        <li className={path} key={index}>
          <ButtonRouting
            style={{
              clarity: '⟨lucid⟩',
              //--|===|--\\
              color: style.color,
              shade: style.shade,
              image: cases.image?.[index] as string,
              view: path as 'top-lef' | 'top-rig' | 'bot-rig' | 'bot-lef',
              size: path === 'top-rig' || path === 'bot-lef' ? '<p>' : '<h1>',
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
      //--|🠊 Single <Button> 🠈|--\\
      let styleSize: string = style.view === 'top-rig' || style.view === 'bot-lef' ? '<p>' : '<h1>';
      return (
        <li className={style.view}>
          <ButtonRouting
            style={{
              clarity: '⟨lucid⟩',
              //--|===|--\\
              view: style.view,
              color: style.color,
              shade: style.shade,
              image: style.image as string,
              size: styleSize as '<p>' | '<h1>',
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

export default NavigationDefault;

/*
let NavigationMain = (info: TheseProps['info'], style: TheseProps['style'], cases: TheseProps['cases']) => {
  const pageInfo = info as TheseProps['info'];
  const pageStyle = style as TheseProps['style'];
  const pageCases = cases as TheseProps['cases'];

  // console.log('<Main> Loaded!');
  return <></>;
};
let NavigationHeader = (info: TheseProps['info'], style: TheseProps['style'], cases: TheseProps['cases']) => {
  const pageInfo = info as TheseProps['info'];
  const pageStyle = style as TheseProps['style'];
  const pageCases = cases as TheseProps['cases'];

  // console.log('<Header> Loaded!');
  return <></>;
};
let NavigationFooter = (info: TheseProps['info'], style: TheseProps['style'], cases: TheseProps['cases']) => {
  const pageInfo = info as TheseProps['info'];
  const pageStyle = style as TheseProps['style'];
  const pageCases = cases as TheseProps['cases'];

  // console.log('<Footer> Loaded!');
  return <></>;
};
let NavigationOverlay = (info: TheseProps['info'], style: TheseProps['style'], cases: TheseProps['cases']) => {
  const pageInfo = info as TheseProps['info'];
  const pageStyle = style as TheseProps['style'];
  const pageCases = cases as TheseProps['cases'];

  // console.log('<Overlay> Loaded!');
  return <></>;
};
let NavigationLeftbar = (info: TheseProps['info'], style: TheseProps['style'], cases: TheseProps['cases']) => {
  const pageInfo = info as TheseProps['info'];
  const pageStyle = style as TheseProps['style'];
  const pageCases = cases as TheseProps['cases'];

  // console.log('<Leftbar> Loaded!');
  return <></>;
};
let NavigationRightbar = (info: TheseProps['info'], style: TheseProps['style'], cases: TheseProps['cases']) => {
  const pageInfo = info as TheseProps['info'];
  const pageStyle = style as TheseProps['style'];
  const pageCases = cases as TheseProps['cases'];

  // console.log('<Rightbar> Loaded!');
  return <></>;
};
*/
