//--|🠊 Menu.swipe.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Menu.swipe.scss';

//--|🠋 Functions 🠋|--\\
import { setDis } from '../../functions';
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
  const directory: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c0f9e3fa69d4960a533a7b73f357ad97886280f1/source/assets/svg-files/archive-images/font-awesome/5.13.0/solid';

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
                  image: `${directory}/caret-left.svg` as string,
                }}
                info={{
                  pageName: info.pageName,
                  blockName: info.blockName,
                  /* labelName: info.labelName, */
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
                  image: `${directory}/caret-right.svg` as string,
                }}
                info={{
                  pageName: info.pageName,
                  blockName: info.blockName,
                  /* labelName: info.labelName, */
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
                let bootstrap = setDis(null) as string;
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
                image: `${directory}/caret-up.svg` as string,
              }}
              info={{
                pageName: info.pageName,
                blockName: info.blockName,
                /* labelName: info.labelName, */
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
                image: `${directory}/caret-down.svg` as string,
              }}
              info={{
                pageName: info.pageName,
                blockName: info.blockName,
                /* labelName: info.labelName, */
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
    /*--|🠋

    🠉|--*/
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
