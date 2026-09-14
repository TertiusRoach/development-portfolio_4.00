//--|🠊 Menu.swipe.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Functions 🠋|--\\
import { abbrView, abbrShade, abbrColor } from '../../components';
import { stripBrackets, loadAsset } from '../../../../scripts';
import reloadElements, { modifyingController, previewButtons, showingTitles } from './Menu_swipe';
//--|🠋 Components 🠋|--\\
import ButtonDefault from '../../Button/default/Button.default';

//--|🠋 Styles 🠋|--\\
import './Menu.swipe.scss';
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

function MenuSwipe({ info, style, cases }: TheseProps): JSX.Element {
  const pageName: string = info.pageName as string;
  const blockName: string = info.blockName as string;
  const labelName: string = info.labelName as string;

  //--|🠊 Checks [x] or [y] axis 🠈|--\\
  const axisList: Record<'[x]' | '[y]', 'ul' | 'ol'> = {
    '[x]': 'ul',
    '[y]': 'ol',
  };
  const axisStyle: Record<TheseProps['cases']['axis'], string> = {
    '[x]': 'hori-X-swipe',
    '[y]': 'hori-Y-swipe',
  };

  useEffect(() => {
    /*--|🠋

    🠉|--*/
    reloadElements(pageName, blockName, labelName);
    modifyingController(pageName, blockName, labelName);
  }, [pageName, blockName, labelName]);

  let stateView = 'downplay' as 'downplay' | 'highlight';
  let ListStyle = axisList[cases.axis] as React.ElementType;
  return (
    <menu className={`${labelName}-${blockName}_swipe-default`}>
      <ListStyle
        className={`${axisStyle[cases.axis]} ${abbrView(style.view)}_${abbrShade(style.shade)}_${abbrColor(style.color)}`}
      >
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
                showingTitles('show-prev', pageName, blockName, labelName);
                previewButtons('view-prev', pageName, blockName, labelName);
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
                showingTitles('show-next', pageName, blockName, labelName);
                previewButtons('view-next', pageName, blockName, labelName);
              }}
            />
          </div>
        </li>
        <li className="showing-vertical_I">
          {cases.pages.map((path, index) => {
            const showingSection = String(path);
            if (showingSection.includes('_')) {
              let [boldText, italText] = showingSection.split('_');
              return (
                <aside className="downplay" key={index}>
                  <h3 className="display-0">
                    <span>
                      <b>{boldText}</b>
                      <i>{italText}</i>
                    </span>
                  </h3>
                </aside>
              );
            } else {
              return (
                <aside className="downplay" key={index}>
                  <h3 className="display-0">
                    <span>{showingSection}</span>
                  </h3>
                </aside>
              );
            }
          })}
        </li>
      </ListStyle>
    </menu>
  );
}

export default MenuSwipe;

/*
//--|🠋 Styles 🠋|--\\
import './Menu.swipe.scss';

//--|🠋 Functions 🠋|--\\
import loadAsset from '../../../scripts/archive';
import { showingBootstrap } from '../.././../../scripts';
import { loadCarousel, markCarousel, swipeCarousel } from './Menu_swipe';

//--|🠋 Components 🠋|--\\
import ButtonDefault from '../../Button/default/Button.default';

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    shade: '~dark~' | '~light~';
    color: '(red)' | '(green)' | '(blue)' | '(mono)';
  };
  cases: {
    show: number;
    axis: '[x]' | '[y]';
    pages: Array<string>;
  };

  onClick?: () => void;
  onMouseEnter?: () => void;
}
function MenuAxis({ info, style, cases }: TheseProps) {
  switch (cases.axis) {
    case '[x]':
      return (
        <>
          <li className="preview-horizontal">
            <div className="prev-view downplay">
              <ButtonDefault
                style={{
                  size: '<h3>',
                  view: '-icon-',
                  type: '{button}',
                  color: style.color,
                  shade: style.shade,
                  image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/caret-left'),
                }}
                info={{
                  pageName: info.pageName,
                  blockName: info.blockName,
                  labelName: info.labelName,
                }}
                onClick={(): void => {
                  swipeCarousel(info.pageName, info.labelName, cases.axis, 'view-prev');
                  markCarousel(info.pageName, info.blockName, info.labelName, cases.show, cases.axis);
                }}
              />
            </div>
            <div className="next-view downplay">
              <ButtonDefault
                style={{
                  size: '<h3>',
                  view: '-icon-',
                  type: '{button}',
                  color: style.color,
                  shade: style.shade,
                  image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/caret-right'),
                }}
                info={{
                  pageName: info.pageName,
                  blockName: info.blockName,
                  labelName: info.labelName,
                }}
                onClick={(): void => {
                  swipeCarousel(info.pageName, info.labelName, cases.axis, 'view-next');
                  markCarousel(info.pageName, info.blockName, info.labelName, cases.show, cases.axis);
                }}
              />
            </div>
          </li>
          <li className="showing-horizontal_I">
            {cases.pages.map((path, index) => {
              const viewText = String(path);
              if (viewText.includes('_')) {
                let bootstrap = showingBootstrap() as string;
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
        </>
      );
    case '[y]':
      return (
        <>
          <li className="showing_I"></li>
          <li className="prev-view">
            <ButtonDefault
              style={{
                size: '<h3>',
                view: '-icon-',
                type: '{button}',
                color: style.color,
                shade: style.shade,
                image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/caret-left'),
              }}
              info={{
                pageName: info.pageName,
                blockName: info.blockName,
                labelName: info.labelName,
              }}
              onClick={(): void => {
                swipeCarousel(info.pageName, info.labelName, cases.axis, 'view-prev');
                markCarousel(info.pageName, info.blockName, info.labelName, cases.show, cases.axis);
              }}
            />
          </li>
          <li className="next-view">
            <ButtonDefault
              style={{
                size: '<h3>',
                view: '-icon-',
                type: '{button}',
                color: style.color,
                shade: style.shade,
                image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/caret-right'),
              }}
              info={{
                pageName: info.pageName,
                blockName: info.blockName,
                labelName: info.labelName,
              }}
              onClick={(): void => {
                swipeCarousel(info.pageName, info.labelName, cases.axis, 'view-next');
                markCarousel(info.pageName, info.blockName, info.labelName, cases.show, cases.axis);
              }}
            />
          </li>
        </>
      );
  }
}
const MenuSwipe: React.FC<TheseProps> = ({ info, style, cases }) => {
  const pageName: string = info.pageName as string;
  const blockName: string = info.blockName as string;
  const labelName: string = info.labelName as string;

  //--|🠊 Checks [x] or [y] axis 🠈|--\\
  const axisList: Record<'[x]' | '[y]', 'ul' | 'ol'> = {
    '[x]': 'ul',
    '[y]': 'ol',
  };
  const axisClass: Record<TheseProps['cases']['axis'], string> = {
    '[x]': 'hori-X-swipe',
    '[y]': 'vert-Y-swipe',
  };

  useEffect(() => {

    loadCarousel(pageName, blockName, labelName, cases.show, cases.axis);
  }, [pageName, blockName, labelName]);

  let ListItem = axisList[cases.axis];
  return (
    <menu className={`${labelName}-${blockName}_swipe-default`}>
      <ListItem className={axisClass[cases.axis]}>
        <MenuAxis info={info} style={style} cases={cases} />
      </ListItem>
    </menu>
  );
};
export default MenuSwipe;
*/
