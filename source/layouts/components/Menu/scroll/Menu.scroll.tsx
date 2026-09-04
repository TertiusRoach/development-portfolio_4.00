//--|🠊 Menu.scroll.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Functions 🠋|--\\
import loadAsset from '../../../scripts/archive';
import { previewBootstrap } from '../../components';
import { stripBrackets } from '../../../../scripts';
import { revealButtons, viewPrev, viewNext } from './Menu_scroll';

//--|🠋 Components 🠋|--\\
import ButtonDefault from '../../Button/default/Button.default';

//--|🠋 Styles 🠋|--\\
import './Menu.scroll.scss';
interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    shade: '~dark~' | '~light~';
    color: '(red)' | '(green)' | '(blue)' | '(mono)';
    view: '-def-' | '-lef-' | '-rig-' | '-cen-' | '-top-' | '-bot-' | '-mid-';
  };
  cases: {
    axis: '[x]' | '[y]';
    pages: Array<string>;
  };

  onClick?: () => void;
  onMouseEnter?: () => void;
}

//--|🠊 Checks [x] or [y] axis 🠈|--\\
const axisList: Record<'[x]' | '[y]', 'ul' | 'ol'> = {
  '[x]': 'ul',
  '[y]': 'ol',
};
const axisStyle: Record<TheseProps['cases']['axis'], string> = {
  '[x]': 'vert-X-scroll',
  '[y]': 'vert-Y-scroll',
};

function MenuScroll({ info, style, cases }: TheseProps): JSX.Element {
  const pageName: string = info.pageName as string;
  const blockName: string = info.blockName as string;
  const labelName: string = info.labelName as string;

  useEffect(() => {
    setTimeout(() => {
      /*--|🠋
  
      🠉|--*/
      revealButtons(pageName, blockName, labelName);
    }, 1500);
  }, [pageName, blockName, labelName]);

  let stateView = 'downplay' as 'downplay' | 'highlight';
  let ListStyle = axisList[cases.axis] as React.ElementType;
  return (
    <menu className={`${labelName}-${blockName}_scroll-default`}>
      <ListStyle className={axisStyle[cases.axis]}>
        <li className={`preview-vertical-${stripBrackets(style.view, '--')}`}>
          <div className={`prev-view ${stateView}`}>
            <ButtonDefault
              style={{
                size: '<h3>',
                view: '-icon-',
                type: '{button}',
                color: style.color,
                shade: style.shade,
                image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/caret-up'),
              }}
              info={{
                pageName: info.pageName,
                blockName: info.blockName,
                /* labelName: info.labelName, */
              }}
              onClick={(): void => {
                viewPrev(pageName, blockName, labelName);
              }}
            />
          </div>
          <div className={`next-view ${stateView}`}>
            <ButtonDefault
              style={{
                size: '<h3>',
                view: '-icon-',
                type: '{button}',
                color: style.color,
                shade: style.shade,
                image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/caret-down'),
              }}
              info={{
                pageName: info.pageName,
                blockName: info.blockName,
                /* labelName: info.labelName, */
              }}
              onClick={(): void => {
                viewNext(pageName, blockName, labelName);
              }}
            />
          </div>
        </li>
        <li className="showing-vertical_I">
          {cases.pages.map((path, index) => {
            const viewText = String(path);
            if (viewText.includes('_')) {
              let bootstrap = previewBootstrap() as string;
              const [boldText, italText] = viewText.split('_');
              return (
                <aside key={index}>
                  <h3 className={bootstrap}>
                    <span>
                      <b>{boldText}</b>
                      <i>{italText}</i>
                    </span>
                  </h3>
                </aside>
              );
            } else {
              return (
                <aside key={index}>
                  <h1>
                    <span>{viewText}</span>
                  </h1>
                </aside>
              );
            }
          })}
        </li>
      </ListStyle>
    </menu>
  );
}

export default MenuScroll;
