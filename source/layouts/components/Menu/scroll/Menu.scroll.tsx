//--|🠊 Menu.scroll.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Functions 🠋|--\\
import loadAsset from '../../../scripts/archive';
import { stripBrackets } from '../../../../scripts';
import { previewBootstrap } from '../../components';
import { loadCarousel, markCarousel, scrollCarousel } from './Menu_scroll';

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
    show: number;
    axis: '[x]' | '[y]';
    pages: Array<string>;
  };

  onClick?: () => void;
  onMouseEnter?: () => void;
}

const MenuScroll: React.FC<TheseProps> = ({ info, style, cases }) => {
  let pageName: string = info.pageName as string;
  let blockName: string = info.blockName as string;
  let labelName: string = info.labelName as string;

  useEffect(() => {
    /*--|🠋
    loadCarousel(pageName, blockName, labelName, cases.show, cases.axis);
    🠉|--*/
  }, [pageName, blockName, labelName]);

  const stateView = 'highlight' as string;
  const ListStyle: React.ElementType = axisList[cases.axis];

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
                scrollCarousel(info.pageName, info.labelName, cases.axis, 'view-prev');
                markCarousel(info.pageName, info.blockName, info.labelName, cases.show, cases.axis);
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
                scrollCarousel(info.pageName, info.labelName, cases.axis, 'view-next');
                markCarousel(info.pageName, info.blockName, info.labelName, cases.show, cases.axis);
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
        {/* <MenuAxis info={info} style={style} cases={cases} /> */}
      </ListStyle>
    </menu>
  );
};

export default MenuScroll;

//--|🠊 Checks [x] or [y] axis 🠈|--\\
let axisList: Record<'[x]' | '[y]', 'ul' | 'ol'> = {
  '[x]': 'ul',
  '[y]': 'ol',
};
let axisStyle: Record<TheseProps['cases']['axis'], string> = {
  '[x]': 'vert-X-scroll',
  '[y]': 'vert-Y-scroll',
};

function MenuAxis({ info, style, cases }: TheseProps) {
  switch (cases.axis) {
    case '[x]':
      return (
        <>
          <li className="preview-vertical">
            <div className="prev-view highlight">
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
                  scrollCarousel(info.pageName, info.labelName, cases.axis, 'view-prev');
                  markCarousel(info.pageName, info.blockName, info.labelName, cases.show, cases.axis);
                }}
              />
            </div>
            <div className="next-view highlight">
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
                  scrollCarousel(info.pageName, info.labelName, cases.axis, 'view-next');
                  markCarousel(info.pageName, info.blockName, info.labelName, cases.show, cases.axis);
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
                image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/caret-up'),
              }}
              info={{
                pageName: info.pageName,
                blockName: info.blockName,
                /* labelName: info.labelName, */
              }}
              onClick={(): void => {
                scrollCarousel(info.pageName, info.labelName, cases.axis, 'view-prev');
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
                image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/caret-down'),
              }}
              info={{
                pageName: info.pageName,
                blockName: info.blockName,
                /* labelName: info.labelName, */
              }}
              onClick={(): void => {
                scrollCarousel(info.pageName, info.labelName, cases.axis, 'view-next');
                markCarousel(info.pageName, info.blockName, info.labelName, cases.show, cases.axis);
              }}
            />
          </li>
        </>
      );
  }
}
